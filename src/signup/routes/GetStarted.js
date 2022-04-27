import React from 'react';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <>
      <div className='message'>Open you account in minutes</div>
      <div className='button-container'>
        <Link to='/initial-data'>
          <button className='primary-button'>Start</button>
        </Link>
      </div>
    </>
  );
};

export default GetStarted;
