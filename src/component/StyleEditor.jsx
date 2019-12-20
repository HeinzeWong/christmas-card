import React from "react";

export default class StyleEditor extends React.Component {
  message = `/* Inspired by 「animating-resume」
    abc,
    ffffff
  */`
  interval = 30
  state = {
    current: ''
  }

  componentDidMount() {
    const interval = setInterval(() => {
      if (!this.message.length) {
        clearInterval(interval);
        return;
      }
      let nextStr = this.message[0];
      this.message = this.message.slice(1)
      if
      let { current } = this.state;
      current += nextStr;
      this.setState({
        current
      })
    }, this.interval)
  }

  render() {
    return <div>{this.state.current}</div>;
  }
}
