import React from "react";
import programacao from '../../assets/programacao_icon.png'
import historia from '../../assets/historia_icon.png'
import matematica from '../../assets/matematica_icon.png'
import portugues from '../../assets/portugues_icon.png'
import quimica from '../../assets/quimica_icon.png'
import geografia from '../../assets/geografia_icon.png'
import { ItemBtn, ItemContent, ItemImg, ItemInfo } from "./styles";
import { FiPlay } from 'react-icons/fi';

const LessonItem = ({id, materia, assunto, duracao, plataforma, link}) => {

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
    <ItemContent key={id}>
      <ItemImg>
        <img src={materiaIcon} alt="" />
      </ItemImg>

      <ItemInfo>
        <h3>{assunto}</h3>
        <p>{`Duração: ${duracao}min`}</p>
        <p>{`Plataforma: ${plataforma}`}</p>
      </ItemInfo>

      <ItemBtn>
        <a href={link} target="_blank" rel="noreferrer"><FiPlay /></a>
      </ItemBtn>
    </ItemContent>
  );
};

export default LessonItem;
