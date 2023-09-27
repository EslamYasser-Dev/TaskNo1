import React, { useState } from 'react'



const InputText = ( ) => {
    const  [inputValue, setInputValue] =  useState('');
    
	const  handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
		setInputValue(event.target.value);
	};
  return (
    <input type='text' value={inputValue} onChange={handleChange} className='inputText'/>
  )
}

export default InputText;