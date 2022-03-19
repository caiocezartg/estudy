import React, { useState } from 'react'
import { InputContent } from './styles'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

const Input = ({ label, type, name, id, value, onChange, onBlur}) => {

    const [isHidden, setIsHidden] = useState(true);

    function togglePassword(event){
        event.preventDefault();
        setIsHidden(!isHidden);
    }

    return (
        <InputContent>
            <label htmlFor={name}>
                {label}
            </label>
            <input type={isHidden? type : 'text'} name={name} id={id} value={value} onChange={onChange} onBlur={onBlur} />
            {type === 'password' && 
            <button onClick={togglePassword}>
                 {isHidden ? <AiFillEye className="icon-password" /> : <AiFillEyeInvisible  className="icon-password" />} 
            </button>}
        </InputContent>
    )
}

export default Input
