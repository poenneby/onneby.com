import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = { dx : 0, dy: -3 };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    const doc = document.documentElement;
    const offset = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    this.setState({
      dy : offset
    });
  }

  render() {
    return (
      <svg x="0px" y="0px" viewBox="0 0 1000 1000">
      <defs>
      <filter id="B4" x="-150%" width="400%" y="-150%" height="400%">
      <feOffset in="SourceGraphic" result="pre-red" dx="0" dy={this.state.dy*-1} />
      <feColorMatrix in="pre-red" type="matrix" result="red" values="0 0 0 0 1
                                                                     0 0 0 0 0
                                                                     0 0 0 0 0
                                                                     0 0 0 1 0"/>
      <feOffset in="SourceGraphic" result="pre-blue" dx="0" dy={this.state.dy} />
      <feColorMatrix in="pre-blue" type="matrix" result="blue" values="0 0 0 0 0
                                                                       0 0 0 0 0
                                                                       0 0 0 0 1
                                                                       0 0 0 1 0"/>
      <feBlend mode="screen" in="red" in2="blue" result="main"/>
      <feBlend mode="screen" in="main" in2="SourceGraphic"/>
      </filter>
      </defs>
      <text
        filter="url(#B4)"
        className="path"
        id="svg_1"
        x="200"
        y="220"
        fill="#00FF00">ONNEBY.COM</text>
    </svg>);
  }
}

export default App;
