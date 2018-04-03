import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Markdown extends Component {
  render() {
    return (
      <div className="mark-down-container">
	<h1>Markdown</h1>
	  <textarea 
	    className="mark-down-text" 
	    rows="40" cols="75"
	    onChange={this.props.textChange}
	    defaultValue={this.props.text}>
	  </textarea>
      </div>
    );
  }
}

Markdown.propTypes = {
  text: PropTypes.string.isRequired,
  textChange: PropTypes.func.isRequired
}
