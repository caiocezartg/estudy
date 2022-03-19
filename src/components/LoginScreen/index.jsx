import React from 'react'
import { Link } from 'react-router-dom';

import loginIcons from '../../assets/icons_login.png';
import Button from '../Button';
import Input from '../Input';
import { ContainerLogin, LogoContent, FormContent, FormLogin } from './styles';

const LoginScreen = () => {

    return (
            <ContainerLogin>
                <LogoContent>
                    <h1>eStudy</h1>
                    <h3>A plataforma de estudos ideal para você!</h3>
                    <img src={loginIcons} alt="Icones do Login" />
                </LogoContent>
                <FormContent>
                    <FormLogin>
                        <h2>Entre agora na sua conta</h2>
                        <Input type="email" label="E-mail" name="email" id="email" required/>
                        <Input type="password" label="Senha" name="senha" id="senha" required/>

                        <Button type="submit">FAZER LOGIN</Button>

                        <Link to="/cadastro" className="btn-register">Não possui conta? Cadastre-se agora!</Link>
                    </FormLogin>
                </FormContent>
            </ContainerLogin>
    )
}

export default LoginScreen
