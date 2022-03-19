import React, { useState } from 'react'
import { Challenge } from './styles'
import { toast } from "react-toastify";

const AccountChallengeItem = ({id, desafio, xp}) => {

    const [completed, setCompleted] = useState(false);

    function completeChallenge(){
        if(!completed){
            setCompleted(true);
            toast.success(`Você completou o desafio e ganhou ${xp}xp!`, {
                position: toast.POSITION.TOP_CENTER
            })
        }
    }

    return (
        <Challenge completed={completed} onClick={completeChallenge} id={id}>
            <h3>{desafio}</h3>
            <span>{`${xp}xp`}</span>
        </Challenge>
    )
}

export default AccountChallengeItem
