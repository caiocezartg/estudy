import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
    }

    body{
        background: rgb(0,193,101);
        background: linear-gradient(90deg, rgba(0,193,101,1) 0%, rgba(0,130,68,1) 100%);
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        background-position: center center;
        font-family: 'Montserrat', monospace;
        font-weight: 400;
        color: #111;
        width: 100%;
        height: 100vh;
    }
    img{
        max-width: 100%;
        display: block;
    }
`;

export default GlobalStyle;
