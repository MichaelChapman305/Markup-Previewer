import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import marked from 'marked';

export default class Output extends Component {
	render() {
		return (
			<div className="output-container">
			  <h1>Output Preview</h1>
			  <div className="output" dangerouslySetInnerHTML={this.props.markup()}></div>
			</div>
		);
	}
}

Output.propTypes = {
	markup: PropTypes.func.isRequired
}
