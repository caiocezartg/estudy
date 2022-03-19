import programacao from '../../assets/programacao_icon.png'
import historia from '../../assets/historia_icon.png'
import matematica from '../../assets/matematica_icon.png'
import portugues from '../../assets/portugues_icon.png'
import quimica from '../../assets/quimica_icon.png'
import geografia from '../../assets/geografia_icon.png'
import { FiPlay } from 'react-icons/fi';
import { BsTrash } from 'react-icons/bs'
import React from 'react'
import { TableRow } from './styles'

const TableItemClasses = ({id, materia, assunto, duracao, link}) => {
    
    let materiaIcon = '';

    if(materia === 'Programacao'){
      materiaIcon = programacao;
    } else if (materia === 'Historia'){
      materiaIcon = historia;
    } else if (materia === 'Matematica'){
      materiaIcon = matematica;
    } else if (materia === 'Portugues'){
      materiaIcon = portugues;
    } else if (materia === 'Quimica'){
      materiaIcon = quimica;
    } else {
      materiaIcon = geografia;
    }

    return (
        <TableRow key={id}>
            <td>
                <img src={materiaIcon} alt="Ícone Matéria" />
            </td>
             
             <td>
                 <p>{assunto}</p>
             </td>

             <td><p>{duracao ? `${duracao}min` : 'Sem duração mencionada.' }</p></td>

             <td>
                <div>
                    <a href={link} target="_blank" rel="noreferrer"><FiPlay /></a>
                    <span>ver aula</span>
                </div>

                <div>
                    <input type="checkbox" />
                    <span>concluir</span>
                </div>

                <div>
                    <button><BsTrash className='trash-icon' /></button>
                    <span>excluir material</span>
                </div>
             </td>
        </TableRow>
    )
}

export default TableItemClasses
