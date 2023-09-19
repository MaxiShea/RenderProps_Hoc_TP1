import { useState } from 'react';


const withTooltip = (WrappedComponent) => {
  return function WithTooltip(props) {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    const showTooltip = () => {
      setIsTooltipVisible(true);
    };

    const hideTooltip = () => {
      setIsTooltipVisible(false);
    };

    return (
      <WrappedComponent {...props} isTooltipVisible={isTooltipVisible} showTooltip={showTooltip} hideTooltip={hideTooltip} />
    );
  };
};

export default withTooltip;