import React from "react";
import ReactDOM from "react-dom";
import Prism from "prismjs";
import { PrismCode } from "react-prism";


export default class StyleEditor extends React.Component {
  componentDidUpdate() {
    ReactDOM.findDOMNode(this).scrollTop = 10000;
  }
  render() {
    return <div className="styleEditor">
      <pre>
        <PrismCode className="language-css">{this.props.content}</PrismCode>
      </pre>
      <div className="style" dangerouslySetInnerHTML={{ __html: `<style>${this.props.style}</style>` }}></div>
    </div>;
  }
}
