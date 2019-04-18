import React from 'react';

export default function Confusion(props) {
  return (
    <div className="Study">
      <button className="button" onClick={e => props.onClick(e)}>?</button>
    </div>
  );
}