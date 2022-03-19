import React, { useEffect, useState } from 'react'
import AccountChallengeItem from '../AccountChallengeItem'
import { ChallengesContainer, ChallengesGrid } from './styles'

const AccountChallenges = () => {

    const api_url = 'https://api-estudy-tcc.herokuapp.com'

    const [listChallenges, setListChallenges] = useState([]);

    useEffect(() => {
        async function getChallenges(url){
            const response = await fetch(`${url}/desafios?limit=6`);
            const json = await response.json();
            setListChallenges(json);
        } 
 
        getChallenges(api_url);
     }, [])

    return (
        <ChallengesContainer>
            <h2>Confira os desafios eStudy para você!</h2>

            <ChallengesGrid>
                {listChallenges.map(challenge => {
                    return <AccountChallengeItem id={challenge.id} desafio={challenge.nmDesafio} xp={challenge.pontos} />
                })}
            </ChallengesGrid>
        </ChallengesContainer>

    )
}

export default AccountChallenges
