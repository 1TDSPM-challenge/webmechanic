import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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
        background: linear-gradient(135deg, #255C99 0%, #1B4C7A 50%, #0F3059 100%);
        color: #D8E4FF;
        overflow-x: hidden;
    }
`

export default GlobalStyle;