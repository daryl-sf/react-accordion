import React, { ReactNode, useState, useRef, useEffect } from "react";
import './styles.css'

// This accordion transitions max-height from 0 to x and vice versa when expanded state changes.
// The component is designed to handle dynamic content that can vary in height. heightRef is a div with overflow:hidden.
// This is used as a ref so we know what height the content is and therefore what value to set max-height to.

export type IAccordionProps = {
  id: string;
  initExpanded?: boolean;
  renderSummary: (props: {
    onClick: () => void;
    expanded: boolean;
  }) => JSX.Element;
  renderDetail: ReactNode;
  className?: string;
}

const Accordion = ({
  id,
  initExpanded = false,
  renderSummary,
  renderDetail,
  className = "",
}: IAccordionProps) => {
  const [expanded, setExpanded] = useState(initExpanded);
  const [maxHeight, setMaxHeight] = useState(0);
  const heightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMaxHeight(heightRef.current?.clientHeight || 0);
  }, [heightRef]);

  return (
    <div className={`container ${className}`} id={id}>
      {renderSummary({ onClick: () => setExpanded(!expanded), expanded })}
      <div
        className={`detail ${expanded ? expanded : '' }`}
        style={{
          maxHeight: expanded ? maxHeight : 0,
        }}
      >
        <div className="heightRef" ref={heightRef}>
          {renderDetail}
        </div>
      </div>
    </div>
  );
};

export default Accordion;