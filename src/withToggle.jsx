import { useState } from 'react';


const withToggle = (WrappedComponent) => {
  return function WithToggle(props) {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };

    return (
      <WrappedComponent {...props} isVisible={isVisible} toggleVisibility={toggleVisibility} />
    );
  };
};

export default withToggle;