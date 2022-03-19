import React, { useEffect, useState } from 'react'
import ChallengeItem from '../ChallengeItem';
import LessonItem from '../LessonItem';
import ProfileBadge from '../ProfileBadge';
import { ChallengesContent, ChallengesList, HomeContainer, LessonList, LessonsChallengesSection, LessonsContent } from './styles';

const AccountHome = () => {

    const api_url = 'https://api-estudy-tcc.herokuapp.com';

    const [classes, setClasses] = useState([]);
    const [challenges, setChallenges] = useState([]);

    useEffect(() =>{
        async function getClasses(url){
            const response = await fetch(`${url}/conteudo?limit=6`)
            const json = await response.json();
            setClasses(json);
        }

        async function getChallenges(url){
            const response = await fetch(`${url}/desafios?limit=4`)
            const json = await response.json();
            setChallenges(json)
        }

        getClasses(api_url);
        getChallenges(api_url);
    }, [])

    return (
        <HomeContainer>
            <ProfileBadge />

            <LessonsChallengesSection>
                <LessonsContent>
                    <h2>Materiais de estudo</h2>
                    <h4>Confira os materiais gratuitos para você!</h4>

                    <LessonList>
                        {classes.map((item) => {
                            return <LessonItem id={item._id} materia={item.nmMateria} assunto={item.nmConteudo} duracao={item.duracao} plataforma={item.nmPlataforma} link={item.link} />
                        })}
                    </LessonList>
                </LessonsContent>

                <ChallengesContent>
                    <h2>Desafios eStudy</h2>
                    <h4>Realize os desafios para <br /> aumentar seu level!</h4>

                    <ChallengesList>
                        {challenges.map((item) => {
                            return <ChallengeItem id={item.id} desafio={item.nmDesafio} xp={item.pontos} />
                        })}
                    </ChallengesList>

                </ChallengesContent>
            </LessonsChallengesSection>
        </HomeContainer>
    )
}

export default AccountHome;
