import React from 'react'
import {Routes, Route} from 'react-router-dom'
import AccountChallenges from '../../components/AccountChallenges'
import AccountHome from '../../components/AccountHome'
import AccountClasses from '../../components/AccountClasses'
import AccountProfile from '../../components/AccountProfile'
import Header from '../../components/Header'
import PageNotFound from '../../components/PageNotFound'

const Account = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="inicio" element={<AccountHome />} /> 
                <Route path="aulas" element={<AccountClasses />} /> 
                <Route path="desafios" element={<AccountChallenges />} /> 
                <Route path="perfil" element={<AccountProfile />} />
                <Route path="*" element={<PageNotFound />} /> 
            </Routes>
        </div>
    )
}

export default Account
