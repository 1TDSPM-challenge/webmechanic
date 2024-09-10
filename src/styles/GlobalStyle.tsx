import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .app {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        align-items: center;
    }

    .conteudo {
        display: flex;
        height: 100%;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    body {
        font-family: 'Inter', sans-serif;
        background-color: #255C99;
        color: #D8E4FF;
    }
`

export default GlobalStyle;