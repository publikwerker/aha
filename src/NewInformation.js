import React from 'react';

export default function Confusion(props) {
  return (
    <div className="App">
      <button onClick={e => props.onClick(e)}>?</button>
    </div>
  );
}