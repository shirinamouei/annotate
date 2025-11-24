import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabaseClient'

function Login() {
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!name.trim()) {
      setError('Please enter your name')
      return
    }

    setLoading(true)
    setError('')

    try {
      // Check if annotator exists, if not create them
      let { data: annotator, error: fetchError } = await supabase
        .from('annotators')
        .select('*')
        .eq('name', name.trim().toLowerCase())
        .single()

      if (fetchError && fetchError.code === 'PGRST116') {
        // Annotator doesn't exist, create new one
        const { data: newAnnotator, error: insertError } = await supabase
          .from('annotators')
          .insert({ name: name.trim().toLowerCase() })
          .select()
          .single()

        if (insertError) throw insertError
        annotator = newAnnotator
      } else if (fetchError) {
        throw fetchError
      }

      // Store annotator info in sessionStorage
      sessionStorage.setItem('annotator', JSON.stringify(annotator))

      // Navigate to annotation page
      navigate('/annotate')
    } catch (err) {
      setError('Error connecting to database: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Annotation Tool</h1>
        <p style={styles.subtitle}>Enter your name to begin annotating</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            style={styles.input}
            disabled={loading}
          />

          {error && <p style={styles.error}>{error}</p>}

          <button
            type="submit"
            style={styles.button}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Start Annotating'}
          </button>
        </form>

        <a href="/admin" style={styles.adminLink}>Admin Dashboard</a>
      </div>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f5f5f5'
  },
  card: {
    background: 'white',
    padding: '3rem',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    textAlign: 'center',
    maxWidth: '400px',
    width: '100%'
  },
  title: {
    margin: '0 0 0.5rem 0',
    fontSize: '1.75rem',
    color: '#333'
  },
  subtitle: {
    margin: '0 0 2rem 0',
    color: '#666'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  input: {
    padding: '0.75rem 1rem',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '6px',
    outline: 'none'
  },
  button: {
    padding: '0.75rem 1rem',
    fontSize: '1rem',
    background: '#4f46e5',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  },
  error: {
    color: '#dc2626',
    margin: 0,
    fontSize: '0.875rem'
  },
  adminLink: {
    display: 'block',
    marginTop: '2rem',
    color: '#666',
    fontSize: '0.875rem'
  }
}

export default Login
