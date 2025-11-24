function HighlightedPost({ text, highlightText, highlightColor, highlightTerms }) {
  if (!text) return null

  // If using multiple highlight terms (array), use multi-highlight mode
  if (highlightTerms && highlightTerms.length > 0) {
    return renderMultiHighlight(text, highlightTerms, highlightColor)
  }

  // If no highlight text or it's empty, just return the plain text
  if (!highlightText || highlightText.trim() === '') {
    return <p style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{text}</p>
  }

  const searchText = highlightText.trim()
  const lowerText = text.toLowerCase()
  const lowerSearch = searchText.toLowerCase()

  // Try exact match first (case-insensitive)
  let startIndex = lowerText.indexOf(lowerSearch)
  let matchLength = searchText.length

  // If exact match fails, try matching with flexible whitespace using regex
  if (startIndex === -1) {
    // Create a regex pattern that matches the search text with flexible whitespace
    // Escape special regex chars and replace whitespace sequences with \s+
    const escapedSearch = lowerSearch
      .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')  // escape special chars
      .replace(/\s+/g, '\\s+')  // flexible whitespace matching

    const regex = new RegExp(escapedSearch, 'i')
    const match = text.match(regex)

    if (match) {
      startIndex = match.index
      matchLength = match[0].length
    }
  }

  if (startIndex === -1) {
    // No match found, return plain text
    return <p style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{text}</p>
  }

  // Split text into parts: before, highlighted, after
  const before = text.substring(0, startIndex)
  const highlighted = text.substring(startIndex, startIndex + matchLength)
  const after = text.substring(startIndex + matchLength)

  const highlightStyle = {
    ...styles.highlight,
    backgroundColor: highlightColor || '#fef08a'
  }

  return (
    <p style={{ whiteSpace: 'pre-wrap', margin: 0 }}>
      {before}
      <mark style={highlightStyle}>{highlighted}</mark>
      {after}
    </p>
  )
}

// Helper function to highlight multiple terms
function renderMultiHighlight(text, terms, color) {
  // Filter out empty terms and create regex pattern
  const validTerms = terms.filter(t => t && t.trim())
  if (validTerms.length === 0) {
    return <p style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{text}</p>
  }

  // Create a combined regex pattern for all terms
  const escapedTerms = validTerms.map(term =>
    term.trim()
      .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      .replace(/\s+/g, '\\s+')
  )
  const pattern = new RegExp(`(${escapedTerms.join('|')})`, 'gi')

  // Split text by matches
  const parts = text.split(pattern)

  const highlightStyle = {
    ...styles.highlight,
    backgroundColor: color || '#fef08a'
  }

  return (
    <p style={{ whiteSpace: 'pre-wrap', margin: 0 }}>
      {parts.map((part, i) => {
        // Check if this part matches any of our terms (case-insensitive)
        const isMatch = validTerms.some(term =>
          part.toLowerCase() === term.trim().toLowerCase() ||
          new RegExp(`^${term.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+')}$`, 'i').test(part)
        )
        if (isMatch) {
          return <mark key={i} style={highlightStyle}>{part}</mark>
        }
        return part
      })}
    </p>
  )
}

const styles = {
  highlight: {
    padding: '0.1rem 0.2rem',
    borderRadius: '2px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  }
}

export default HighlightedPost
