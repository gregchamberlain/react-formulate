import React from 'react';
import { render } from 'react-dom';
import Form from 'react-formulate';
import Markdown from 'react-remarkable';

const GettingStarted = ({  }) => (
  <div className="fill getting-started">
    <div className="header">
        <h1>react formulate</h1>
        <p>The easiest way to create forms in React</p>
        <code>npm install --save react-formulate</code>
    </div>
    <div id="basic-example">
      <Markdown>
        # This is Cool!
        ```
        import Form from 'react-formulate';
        ```
      </Markdown>
    </div>
  </div>
);

export default GettingStarted;
