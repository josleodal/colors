import React from 'react';

function BoxColor({ color, value }) {
  const style = {
    backgroundColor: value.toLowerCase() === color ? color : 'transparent'
  };

  return (
    <div className="box" style={style}>
      <p>{value}</p>
    </div>
  );
}

export default BoxColor;
