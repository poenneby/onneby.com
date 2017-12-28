import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    const viewPortWidth = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;
    const viewPortHeight = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;

    const width = viewPortWidth - (viewPortWidth * 0.16);
    const height = viewPortHeight - (viewPortHeight * 0.1);

    this.state = {
      dx: 0,
      dy: -3,
      width,
      height,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    const doc = document.documentElement;
    const offset = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    this.setState({
      dx : offset * 5,
      dy : offset,
    });
  }

  render() {
    return (
      <svg viewBox={`0 0 ${this.state.width} ${this.state.height}`}>
      <defs>
        <filter id="B4" x="-150%" width="400%" y="-150%" height="400%">
          <feOffset in="SourceGraphic" result="pre-red" dx={this.state.dx*-1} dy={this.state.dy*-1} />
          <feColorMatrix in="pre-red" type="matrix" result="red" values="0 0 0 0 1
                                                                         0 0 0 0 0
                                                                         0 0 0 0 0
                                                                         0 0 0 1 0"/>
          <feOffset in="SourceGraphic" result="pre-blue" dx={this.state.dx} dy={this.state.dy} />
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
        id="svg_1"
        style={{fontSize: 10 + "vw"}}
        x="50%"
        y={this.state.dy + 250}
        alignmentBaseline="middle"
        textAnchor="middle"
        fill="#00FF00">ONNEBY.COM</text>
    </svg>);
  }
}

export default App;
