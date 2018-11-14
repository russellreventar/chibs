import React from 'react'



const Section = ({children, className = '', outRef, title, description}) => {

  return (
    <div className={`section ${className}`} ref={outRef}>
      <div className="section-title">{title}</div>
      <h4>{description}</h4>
      {children}
    </div>
  );
}

export default Section
