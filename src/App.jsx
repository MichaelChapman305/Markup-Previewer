import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import marked from 'marked';

import Markdown from './Markdown.jsx';
import Output from './Output.jsx';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      text: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'
    }

    this.markup = this.markup.bind(this);
    this.textChange = this.textChange.bind(this);
  }

  textChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  markup() {
    const markup = marked(this.state.text, {sanitize: true});
    return { __html: markup };
  }

  render() {
    return (
      <div className="main">
        <Markdown text={this.state.text} textChange={this.textChange} />
        <Output markup={this.markup} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
