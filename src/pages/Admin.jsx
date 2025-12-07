import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'
import { posts } from '../mockData'

function Admin() {
  const [password, setPassword] = useState('')
  const [authenticated, setAuthenticated] = useState(false)
  const [annotators, setAnnotators] = useState([])
  const [loading, setLoading] = useState(false)
  const [exporting, setExporting] = useState(null)

  // Simple password protection (change this!)
  const ADMIN_PASSWORD = 'admin123'

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true)
      loadAnnotators()
    } else {
      alert('Incorrect password')
    }
  }

  const loadAnnotators = async () => {
    setLoading(true)

    // Get all annotators with their review and modification counts
    const { data: annotatorsData } = await supabase
      .from('annotators')
      .select('*')
      .order('created_at', { ascending: false })

    if (annotatorsData) {
      // Get counts for each annotator
      const annotatorsWithCounts = await Promise.all(
        annotatorsData.map(async (annotator) => {
          const { count: reviewCount } = await supabase
            .from('reviews')
            .select('*', { count: 'exact', head: true })
            .eq('annotator_id', annotator.id)

          const { count: modCount } = await supabase
            .from('modifications')
            .select('*', { count: 'exact', head: true })
            .eq('annotator_id', annotator.id)

          return {
            ...annotator,
            reviewCount: reviewCount || 0,
            modCount: modCount || 0
          }
        })
      )

      setAnnotators(annotatorsWithCounts)
    }

    setLoading(false)
  }

  const exportHybrid = async (annotator) => {
    setExporting(`${annotator.id}-hybrid`)

    // Get reviewed IDs
    const { data: reviews } = await supabase
      .from('reviews')
      .select('extraction_id')
      .eq('annotator_id', annotator.id)

    // Get modifications
    const { data: modifications } = await supabase
      .from('modifications')
      .select('extraction_id, llm_output')
      .eq('annotator_id', annotator.id)

    const exportData = {
      annotator: annotator.name,
      exported_at: new Date().toISOString(),
      total_records: posts.length,
      reviewed_ids: reviews?.map(r => r.extraction_id) || [],
      modified_records: modifications?.map(m => ({
        extraction_id: m.extraction_id,
        llm_output: m.llm_output
      })) || []
    }

    downloadJSON(exportData, `annotations_${annotator.name}_hybrid`)
    setExporting(null)
  }

  const exportFull = async (annotator) => {
    setExporting(`${annotator.id}-full`)

    // Get reviewed IDs
    const { data: reviews } = await supabase
      .from('reviews')
      .select('extraction_id')
      .eq('annotator_id', annotator.id)

    const reviewedSet = new Set(reviews?.map(r => r.extraction_id) || [])

    // Get modifications
    const { data: modifications } = await supabase
      .from('modifications')
      .select('extraction_id, llm_output')
      .eq('annotator_id', annotator.id)

    const modificationMap = new Map(
      modifications?.map(m => [m.extraction_id, m.llm_output]) || []
    )

    // Build full export with all records
    const records = posts.map(post => {
      const extractionId = post.extraction_id
      const reviewed = reviewedSet.has(extractionId)
      const modified = modificationMap.has(extractionId)

      return {
        extraction_id: extractionId,
        post_id: post.post_id,
        reviewed,
        modified,
        llm_output: modified ? modificationMap.get(extractionId) : post.llm_output
      }
    })

    const exportData = {
      annotator: annotator.name,
      exported_at: new Date().toISOString(),
      total_records: posts.length,
      records
    }

    downloadJSON(exportData, `annotations_${annotator.name}_full`)
    setExporting(null)
  }

  const downloadJSON = (data, filename) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${filename}_${new Date().toISOString().split('T')[0]}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const exportAll = async () => {
    for (const annotator of annotators) {
      await exportHybrid(annotator)
      await exportFull(annotator)
    }
  }

  if (!authenticated) {
    return (
      <div style={styles.loginContainer}>
        <div style={styles.loginCard}>
          <h1 style={styles.title}>Admin Dashboard</h1>
          <form onSubmit={handleLogin} style={styles.form}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              style={styles.input}
            />
            <button type="submit" style={styles.button}>
              Login
            </button>
          </form>
          <a href="/" style={styles.backLink}>Back to Annotation Tool</a>
        </div>
      </div>
    )
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Admin Dashboard</h1>
        <div style={styles.headerActions}>
          <button onClick={loadAnnotators} style={styles.refreshButton} disabled={loading}>
            {loading ? 'Loading...' : 'Refresh'}
          </button>
          <button onClick={exportAll} style={styles.exportAllButton}>
            Export All
          </button>
        </div>
      </div>

      <div style={styles.content}>
        <h2 style={styles.sectionTitle}>Annotators ({annotators.length})</h2>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Reviewed</th>
              <th style={styles.th}>Modified</th>
              <th style={styles.th}>Joined</th>
              <th style={styles.th}>Download Annotated Dataset</th>
            </tr>
          </thead>
          <tbody>
            {annotators.map(annotator => (
              <tr key={annotator.id}>
                <td style={styles.td}>{annotator.name}</td>
                <td style={styles.td}>
                  {annotator.reviewCount} / {posts.length}
                  <div style={styles.progressBar}>
                    <div
                      style={{
                        ...styles.progressFill,
                        width: `${(annotator.reviewCount / posts.length) * 100}%`
                      }}
                    />
                  </div>
                </td>
                <td style={styles.td}>{annotator.modCount}</td>
                <td style={styles.td}>
                  {new Date(annotator.created_at).toLocaleDateString()}
                </td>
                <td style={styles.td}>
                  <button
                    onClick={() => exportHybrid(annotator)}
                    style={styles.actionButton}
                    disabled={exporting === `${annotator.id}-hybrid`}
                  >
                    {exporting === `${annotator.id}-hybrid` ? '...' : 'Modified Records Only'}
                  </button>
                  <button
                    onClick={() => exportFull(annotator)}
                    style={styles.actionButton}
                    disabled={exporting === `${annotator.id}-full`}
                  >
                    {exporting === `${annotator.id}-full` ? '...' : 'All Records'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {annotators.length === 0 && !loading && (
          <p style={styles.emptyMessage}>No annotators yet.</p>
        )}
      </div>
    </div>
  )
}

const styles = {
  loginContainer: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f5f5f5'
  },
  loginCard: {
    background: 'white',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    textAlign: 'center'
  },
  container: {
    minHeight: '100vh',
    background: '#f5f5f5'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    background: 'white',
    borderBottom: '1px solid #ddd'
  },
  title: {
    margin: 0,
    fontSize: '1.5rem'
  },
  headerActions: {
    display: 'flex',
    gap: '0.5rem'
  },
  refreshButton: {
    padding: '0.5rem 1rem',
    background: '#f3f4f6',
    border: '1px solid #d1d5db',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  exportAllButton: {
    padding: '0.5rem 1rem',
    background: '#4f46e5',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  content: {
    padding: '2rem'
  },
  sectionTitle: {
    marginTop: 0,
    marginBottom: '1rem'
  },
  table: {
    width: '100%',
    background: 'white',
    borderCollapse: 'collapse',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  },
  th: {
    textAlign: 'left',
    padding: '0.75rem 1rem',
    background: '#f9fafb',
    borderBottom: '1px solid #e5e7eb',
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    color: '#6b7280'
  },
  td: {
    padding: '0.75rem 1rem',
    borderBottom: '1px solid #e5e7eb',
    fontSize: '0.875rem'
  },
  progressBar: {
    height: '4px',
    background: '#e5e7eb',
    borderRadius: '2px',
    marginTop: '0.25rem',
    width: '100px'
  },
  progressFill: {
    height: '100%',
    background: '#4f46e5',
    borderRadius: '2px'
  },
  actionButton: {
    padding: '0.25rem 0.5rem',
    fontSize: '0.75rem',
    background: '#e0f2fe',
    color: '#0369a1',
    border: '1px solid #7dd3fc',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '0.25rem'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  input: {
    padding: '0.75rem',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '4px'
  },
  button: {
    padding: '0.75rem',
    fontSize: '1rem',
    background: '#4f46e5',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  backLink: {
    display: 'block',
    marginTop: '1rem',
    color: '#666',
    fontSize: '0.875rem'
  },
  emptyMessage: {
    textAlign: 'center',
    color: '#666',
    padding: '2rem'
  }
}

export default Admin
