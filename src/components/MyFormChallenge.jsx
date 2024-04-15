import React, { useState } from 'react';
import BoxColor from './BoxColor';

function MyForm() {
  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      {colors.map((color, index) => (
        <BoxColor key={index} color={color} value={inputValue} />
      ))}
    </div>
  );
}

export default MyForm;
