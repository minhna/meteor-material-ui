import React from 'react';

const Loading = (props) => {
  const { error, timedOut, pastDelay } = props;
  // console.log(props);
  if (error) {
    console.log(error);
    return <div>Error!</div>;
  }
  if (timedOut) {
    return <div>Taking a long time...</div>;
  }
  if (pastDelay) {
    return <div>Loading...</div>;
  }

  return null;
};

export default Loading;
