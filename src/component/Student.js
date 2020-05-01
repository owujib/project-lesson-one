import React from 'react';

const Student = (props) => {
  return (
    <div className="student">
      <p>{props.name}</p>
      <p>{props.email}</p>
    </div>
  );
};

export default Student;
