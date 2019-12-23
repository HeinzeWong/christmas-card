import React from "react";
import marked from "marked";
import StyleEditor from "./component/StyleEditor";
import TextEditor from "./component/TextEditor";
import { getUrlParam } from "./util";
import messageConstant from "./constant";
import "./App.css";

export default class App extends React.Component {
  message = "";
  card = "";
  interval = 50;
  state = {
    styleContent: "",
    cardContent: "",
    isMarked: false
  };

  formMessage() {
    const id = getUrlParam("id");
    const item = messageConstant.find(item => item.id === id);
    if (!item) return;
    const { message, card } = item;
    this.message = message;
    this.card = card;
  }

  async componentDidMount() {
    this.formMessage();
    await this.showStyleProgressively(this.message[0]);
    await this.showCardProgressively(this.card);
    await this.showStyleProgressively(this.message[1]);
    this.setState({
      isMarked: true
    }, await this.showStyleProgressively(this.message[2]))
  }

  showStyleProgressively(msg) {
    const msgArr = msg.split('');
    return new Promise(resolve => {
      const interval = setInterval(() => {
        if (!msgArr.length) {
          clearInterval(interval);
          resolve();
          return;
        }
        const nextStr = msgArr.shift();
        let { styleContent } = this.state;
        this.setState({
          styleContent: styleContent + nextStr
        });
      }, this.interval);
    });
  }

  showCardProgressively(msg) {
    const msgArr = msg.split('');
    return new Promise(resolve => {
      const interval = setInterval(() => {
        if (!msgArr.length) {
          clearInterval(interval);
          resolve();
          return;
        }
        const nextStr = msgArr.shift();
        let { cardContent } = this.state;
        this.setState({
          cardContent: cardContent + nextStr
        });
      }, this.interval);
    });
  }

  render() {
    return (
      <div className="App">
        <StyleEditor
          content={this.state.styleContent}
          style={`<style>${this.state.styleContent}</style>`}
        />
        <TextEditor content={this.state.isMarked ? marked(this.state.cardContent) : this.state.cardContent} />
      </div>
    );
  }
}
