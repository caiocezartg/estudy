import React, { useContext, useState } from 'react'
import Input from '../Input'
import Button from '../Button'
import { ContainerRegister, HeaderRegister, RegisterContent, RegisterFlex, RegisterForm, RegisterImg} from './styles'
import ImgRegister from '../../assets/img-register.jpg'
import useForm from '../../hooks/useForm'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserContext from '../../contexts/UserContext'

const LoginRegister = () => {
        
    const [cepValue, setCepValue] = useState('');
    const [cepData, setCepData] = useState({});

    const { userLogin } = useContext(UserContext);

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await fetch('https://api-estudy-tcc.herokuapp.com/auth/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                name: username.value,
                email: email.value,
                password: password.value,
                cep: cepValue,
                rua: rua.value,
                numero: numero.value,
                bairro: bairro.value,
                cidade: cidade.value,
            })
        });
        if (response.ok) {
          userLogin(username.value, password.value);
        }
      }

      const username = useForm();
      const email = useForm("email");
      const password = useForm();
      const rua = useForm();
      const numero = useForm();
      const bairro = useForm();
      const cidade = useForm();

    async function getCep(){
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cepValue}/json/`)
            const json = await response.json();
            setCepData(json);
        } catch (error) {
            toast.error('Preencha um CEP válido.', {
                position: toast.POSITION.TOP_CENTER
            });
        }
        
    }

    return (
        
        <ContainerRegister>
            <HeaderRegister><h1>eStudy</h1></HeaderRegister>

            <RegisterFlex>
                <RegisterContent>
                    <h2>Faça agora o seu cadastro na eStudy!</h2>

                    <RegisterForm onSubmit={handleSubmit}>
                        <Input type="text" label="Insira um nome de usuário" id="username" name="username" {...username}/>
                        <Input type="mail" label="Insira um e-mail válido" id="email" name="email" {...email} />
                        <Input type="password" label="Insira uma senha forte" id="password" name="password" {...password} />
                        <Input type="text" label="Insira o seu CEP" id="cep" name="cep" onChange={({target}) => setCepValue(target.value)} onBlur={getCep}  />
                        <Input type="text" label="Insira o seu endereço completo" value={cepData.logradouro} id="endereco" name="endereco" {...rua}/>
                        <Input type="text" label="Insira o número da residência" id="numero" name="numero" {...numero}/>
                        <Input type="text" label="Insira o seu bairro" value={cepData.bairro}  id="bairro" name="bairro" {...bairro}/>
                        <Input type="text" label="Insira a sua cidade" value={cepData.localidade} id="cidade" name="cidade" {...cidade}/>
                        <Button type="submit">FINALIZAR CADASTRO</Button>              
                    </RegisterForm>


                </RegisterContent>

                
                <RegisterImg>
                        <img src={ImgRegister} alt="" />
                </RegisterImg>
            </RegisterFlex>

        </ContainerRegister>
    )
}

export default LoginRegister
