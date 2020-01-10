import React from 'react';

//import './scrollable.css';

export default class Scrollable extends React.Component {
  state = { x: 0, y: 0 };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = ev => {
    this.setState({
      x: window.scrollX,
      y: window.scrollY
    });
  };

  render() {
    return (
      <div className="scrollable">
        <h1>Scrolling... {this.state.x}: {this.state.y}</h1>
      </div>
    );
  }
}
