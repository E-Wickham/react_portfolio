import React, { useState, useRef, useEffect } from 'react';
import * as Icon from 'react-feather';

const Accordion = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState('0px');
  const contentRef = useRef(null);

  const toggleHeight = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    setHeight(isExpanded ? `${contentRef.current.scrollHeight}px` : '0px');
  }, [isExpanded]);

  return (
    <div className="height-toggle-container">
      <div onClick={toggleHeight}>
        <h3>
            {props.title} {isExpanded ? <Icon.ArrowUpCircle/> : <Icon.ArrowDownCircle/>}
        </h3>
      </div>
      <div
        ref={contentRef}
        className="height-toggle-content"
        style={{ maxHeight: height }}
      >
        {props.comp}
      </div>
    </div>
  );
};

export default Accordion;