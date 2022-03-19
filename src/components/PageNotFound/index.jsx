import React from 'react'
import { Link } from 'react-router-dom'
import { ErrorContainer } from './styles'

const PageNotFound = () => {
    return (
        <ErrorContainer>
            <h2>PÁGINA NÃO ENCONTRADA! :(</h2>
            <Link to="/conta/inicio">Voltar para o início</Link>
        </ErrorContainer>
    )
}

export default PageNotFound
