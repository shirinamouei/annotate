import { useState } from "react";
import { posts } from "./mockData";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

function App() {
  // Annotator name
  const [annotator, setAnnotator] = useState("");

  // Post index and post data
  const [index, setIndex] = useState(0);
  const post = posts[index];

  return (
    <div
      style={{
        maxWidth: "100vw",
        padding: "1rem"
      }}
    >
      <h1>Annotation Platform (v.0)</h1>

      <label>
        Annotator name:
        <input
          value={annotator}
          onChange={(e) => setAnnotator(e.target.value)}
          style={{ marginLeft: "1rem" }}
        />
      </label>

      <hr style={{ margin: "1rem 0" }} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",  // equal wide columns
          gap: "2rem"                      // spacing between them
        }}
      >
        <div
          style={{
            background: "#f8f8f8",
            padding: "1.5rem",
            borderRadius: "8px",
            overflowY: "auto",             // scroll for very long posts
            height: "80vh"
          }}
        >
          <h3>Forum Post</h3>
          <p style={{ whiteSpace: "pre-wrap" }}>{post.forum_post}</p>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "1.5rem",
            border: "1px solid #ddd",
            borderRadius: "8px",
            overflowY: "auto",
            height: "80vh"
          }}
        >
          <h3>Model Output (JSON)</h3>
          <SyntaxHighlighter
            language="json"
            style={oneLight}
            wrapLongLines
            customStyle={{
              backgroundColor: "#fff",
              fontSize: "0.9rem",
              padding: "1rem",
              borderRadius: "8px",
            }}
          >
            {JSON.stringify(post.llm_output, null, 2)}
        </SyntaxHighlighter>
        </div>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <button disabled={index === 0} onClick={() => setIndex(index - 1)}>
          ← Previous
        </button>
        <button
          disabled={index === posts.length - 1}
          onClick={() => setIndex(index + 1)}
          style={{ marginLeft: "1rem" }}
        >
          Next →
        </button>
      </div>
    </div>
  );
}

export default App;