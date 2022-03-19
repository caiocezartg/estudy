import React, { useEffect, useState } from 'react'
import TableItemClasses from '../TableItemClasses'
import { ClassesContainer, ClassesContent, ClassesFlex, ClassesTable } from './styles'

const AccountClasses = () => {

    const api_url = 'https://api-estudy-tcc.herokuapp.com';

    const [listClasses, setListClasses] = useState([]);

    useEffect(() => {
       async function getClasses(url){
           const response = await fetch(`${url}/conteudo`);
           const json = await response.json();
           shuffle(json);
       } 

       getClasses(api_url);
    }, [])

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        while (currentIndex !== 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        setListClasses(array);
      }

    return (
        <ClassesContainer>
            <ClassesFlex>
                <ClassesContent>
                    <h2>Seus últimos materiais de estudo</h2>
                    <h4>Confira os materiais abaixo:</h4>

                    <ClassesTable>
                        <tbody>
                            <tr>
                                <th>Assunto</th>
                                <th>Tópico do Assunto</th>
                                <th>Duração</th>
                                <th>Ações</th>
                            </tr>

                            {listClasses.map(item => {
                                return <TableItemClasses id={item._id} materia={item.nmMateria} assunto={item.nmConteudo} duracao={item.duracao} link={item.link}/>
                            })}
                        </tbody>


                    </ClassesTable>
                </ClassesContent>
            </ClassesFlex>
        </ClassesContainer>
    )
}

export default AccountClasses
