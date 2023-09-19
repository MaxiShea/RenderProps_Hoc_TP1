import { useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const showTooltip = () => {
    setIsTooltipVisible(true);
  };

  const hideTooltip = () => {
    setIsTooltipVisible(false);
  };

  return (
    <div style={{
      width: '134px'
    }}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children(isTooltipVisible)}
      {isTooltipVisible && <div>{text}</div>}
    </div>
  );
};

export default Tooltip;