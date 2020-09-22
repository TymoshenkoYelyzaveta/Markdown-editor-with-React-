import React, { Component } from 'react';
import marked from 'marked';
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
        <div
          className='markdown-preview'
          dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}
        ></div>
      </div>
    );
  }
}

export default App;
