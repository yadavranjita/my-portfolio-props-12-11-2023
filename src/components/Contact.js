import React from 'react';

const Contact = (props) => {
  return (
    <div>
      <h2>Contact</h2>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
    </div>
  );
}

export default Contact;