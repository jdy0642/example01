import React, { Component } from 'react';
import Subject from './components/Subject'
import TOC from './components/TOC'
import Content from './components/Content'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: {title: 'WEB', sub: 'World Wide Web2'},
      contents: [
        {id:1, title:'HTML', desc:'HTML is ~'},
        {id:2, title:'CSS', desc:'CSS is ~'},
        {id:3, title:'JS', desc:'JS is ~'}
      ]
    }
  }

  render() {
    return (
      <div className='App'>
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is Hyper~~"></Content>
      </div>
    );
  }
}

export default App;
