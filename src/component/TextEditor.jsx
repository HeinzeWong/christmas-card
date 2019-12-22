import React from "react";

export default class TextEditor extends React.Component {
  render() {
    return <div className="resumeEditor">
      <pre>
        <code dangerouslySetInnerHTML={{ __html: this.props.content }}></code>
      </pre>
    </div>
  }
}
