import React, { Component } from 'react';
import Form from 'react-formulate';
import Codemirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';

const options = {
  mode: 'javascript',
  lineNumbers: true,
  theme: 'monokai',
  tabSize: 2
};


class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.data,
      code: parseInput(props.data),
      output: JSON.stringify(parseInput(props.data), null, 2)
    };
  }

  updateCode = value => {
    try {
      const code = parseInput(value);
      this.setState({value, code});
    } catch(e) {
      this.setState({value});

    }
  }

  handleSubmit = data => {
    this.setState({output: JSON.stringify(data, null, 2)});
  }

  render() {

    const { readOnly } = this.props;
    console.log(readOnly);

    return (
      <div className="example-container">
        <div className="example-code">
          <h3>Object</h3>
          <Codemirror
            value={this.state.value}
            options={{...options, ...{readOnly}}}
            onChange={this.updateCode}/>
        </div>
        <div className="example-preview">
          <h3>Form</h3>
          <Form from={this.state.code} onSubmit={this.handleSubmit}/>
        </div>
        { this.props.output ? (
          <div className="example-preview">
            <h3>onSubmit</h3>
            <pre>{this.state.output}</pre>
          </div>
        ): ''}
      </div>
    );
  }
}

Example.defaultProps = {
  output: false,
  readOnly: true,
};

const parseInput = input => {
  return eval(`(${input.split('=')[1].trim()})`);
};

export default Example;
