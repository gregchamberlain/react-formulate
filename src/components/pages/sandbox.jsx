import React from 'react';
import Example from '../ui/example';

const str = `const data = {
    firstName: 'John',
    lastName: 'Doe',
    age: 23,
    contact: {
      phone: {
        mobile: '(444) 444-4444',
        home: '(555) 555-5555'
      },
      emails: [
        'john@doe.com',
        'johndoe@mail.com'
      ]
    }
}`;

const Sandbox = ({  }) => (
  <div className="content">
    <Example data={str} output={true} readOnly={false}/>
  </div>
);

export default Sandbox;
