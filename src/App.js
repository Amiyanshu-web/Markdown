import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
//functional component
function App() {
  const [markdown, setMarkdown] = useState("## markdown preview");
  return (
    <main>
      <section className="markdown">
        <div className="markdown_editor">
          <div className="editor_heading">
            Markdown Editor
          </div>
          <textarea
            className="input"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            rows='10'
          ></textarea>
        </div>
        <article className="markdown_result">
        <div className="editor_heading">
            Markdown Result
          </div>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
