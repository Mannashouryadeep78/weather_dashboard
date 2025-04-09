import React from 'react';

const Error = (props) => {
    return (
      <div className="error-message">
        {props.message}
      </div>
    );
  };
  
  export default Error;