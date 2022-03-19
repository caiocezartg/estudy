import React from 'react'
import { BadgeContent } from './styles'

const ProfileBadge = () => {
    return (
        <BadgeContent>
            <div>
                <h2>Seja bem-vindo, <span>Caio Cezar</span>! :)</h2>
                <p>Seu e-mail: caiocezartg@gmail.com</p>
            </div>
            <div>
                <h2>Level: <span>12</span></h2>
                <p>Precisa de 83xp para o próximo level</p>
            </div>
        </BadgeContent>
    )
}

export default ProfileBadge
