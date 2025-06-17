import React, { useEffect } from 'react';

const WithLogging = (WrappedComponent) => {
  return function WithLoggingComponent(props) {
    useEffect(() => {
      console.log(`Component ${WrappedComponent.name} is mounted`);
      return () => {
        console.log(`Component ${WrappedComponent.name} is going to unmount`);
      };
    }, []);
    return <WrappedComponent {...props} />;
  };
};

export default WithLogging; 