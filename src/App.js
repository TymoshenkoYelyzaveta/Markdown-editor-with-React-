import React, { Component, useState } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      markdown: '# sup',
    };
  }

  handleChange = (e) => {
    this.setState({ markdown: e.target.value });
  };

  render() {
    return (
      <div className='app'>
        <textarea
          onChange={this.handleChange}
          value={this.state.markdown}
          className='markdown-editor'
        />
        <div className='markdown-preview'>{this.state.markdown}</div>
      </div>
    );
  }
}

export default App;
