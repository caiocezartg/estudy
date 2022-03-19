import React from 'react'
import { ProfileContainer, ProfileContent, ProfileGrid } from './styles'

const AccountProfile = () => {
    return (
        <ProfileContainer>
            <ProfileContent>
                <h2>Veja abaixo as informações de cadastro do seu perfil</h2>

                <ProfileGrid>
                    <div>
                        <h3>Nome de usuário:</h3>
                        <p>Nome Teste</p>
                    </div>

                    <div>
                        <h3>E-mail:</h3>
                        <p>email@email.com</p>
                    </div>

                    <div>
                        <h3>Level atual:</h3>
                        <p>12</p>
                    </div>

                    <div>
                        <h3>Pontos de experiência atual:</h3>
                        <p>86xp</p>
                    </div>

                    <div>
                        <h3>CEP:</h3>
                        <p>000000-000</p>
                    </div>

                    <div>
                        <h3>Endereço:</h3>
                        <p>Rua Teste do Teste, 278</p>
                    </div>

                    <div>
                        <h3>Bairro:</h3>
                        <p>Vila Teste</p>
                    </div>

                    <div>
                        <h3>Cidade:</h3>
                        <p>Vale do Teste</p>
                    </div>
                </ProfileGrid>
            </ProfileContent>
        </ProfileContainer>
    )
}

export default AccountProfile
