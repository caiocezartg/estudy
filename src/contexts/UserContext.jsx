import React, { createContext } from 'react'
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserStorage = ({children}) => {

    const [data, setData] = React.useState(null);
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const navigate = useNavigate();

    async function getUser(token) {
        const response = await fetch('https://api-estudy-tcc.herokuapp.com/usuarios/user', {
            method: 'GET',
            headers: {
                Authorization: "Bearer " + token,
            }
        });
        const json = await response.json();
        setData(json);
        setLogin(true);
    }

    async function userLogin(username, password) {
        try {
          setError(null);
          setLoading(true);
          const tokenRes = await fetch('https://api-estudy-tcc.herokuapp.com/register', {
              method: 'POST',
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(username, password),
          });
          if (!tokenRes.ok) throw new Error(`Error: ${tokenRes.statusText}`);
          const { token } = await tokenRes.json();
          window.localStorage.setItem("token", token);
          await getUser(token);
          navigate("/conta/inicio");
        } catch (err) {
          setError(err.message);
          setLogin(false);
        } finally {
          setLoading(false);
        }
      }

    return (
        <UserContext.Provider
            value={{ userLogin, data, error, loading, login }}
            >
            {children}
    </UserContext.Provider>
    )
}

export default UserContext
