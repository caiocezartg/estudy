import React from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderContainer, HeaderContent, HeaderNav, HeaderRow } from './styles'
import { AiOutlineHome, AiOutlineStar } from 'react-icons/ai'
import { BsBook } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'

const Header = () => {
    return (
        <HeaderContent>
            <HeaderContainer>
                <HeaderRow>
                    <h1>eStudy</h1>
                    <HeaderNav>
                        <li><NavLink to="inicio" ><AiOutlineHome className="nav-icon"/>  INÍCIO</NavLink></li>
                        <li><NavLink to="aulas" ><BsBook className="nav-icon"/> AULAS</NavLink></li>
                        <li><NavLink to="desafios" ><AiOutlineStar className="nav-icon"/> DESAFIOS</NavLink></li>
                        <li><NavLink to="perfil" ><CgProfile className="nav-icon"/> PERFIL</NavLink></li>
                    </HeaderNav>
                </HeaderRow>
            </HeaderContainer>
        </HeaderContent>
    )
}

export default Header
