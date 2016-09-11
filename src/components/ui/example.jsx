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
      code: JSON.parse(props.data)
    };
  }

  updateCode = value => {
    try {
      const code = JSON.parse(value);
      console.log(code);
      this.setState({value, code});
    } catch(e) {
      this.setState({value});

    }
  }

  render() {
    return (
      <div className="example-container">
        <div className="example-code">
          <Codemirror value={this.state.value} options={options} onChange={this.updateCode}/>
        </div>
        <div className="example-preview">
          <Form from={this.state.code}/>
        </div>
      </div>
    );
  }
}

export default Example;
