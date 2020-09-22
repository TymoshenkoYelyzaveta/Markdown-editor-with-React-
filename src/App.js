import React, { Component } from 'react';
import marked from 'marked';
import ReactMarkDown from 'react-markdown';
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
        <ReactMarkDown
          className='markdown-preview'
          source={this.state.markdown}
        />
      </div>
    );
  }
}

export default App;
