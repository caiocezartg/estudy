import React from 'react'
import { ItemChallenge } from './styles'

const ChallengeItem = ({id, desafio, xp}) => {
    return (
        <ItemChallenge key={id}>
            <h3>{desafio}</h3>
            <span>{`${xp}xp`}</span>
        </ItemChallenge>
    )
}

export default ChallengeItem
