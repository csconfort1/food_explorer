import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        -webkit-tap-highlight-color: transparent;

        font-family: 'Poppins', sans-serif;
    }

    :root{
        font-size: 62.5%;
    }

    body, input, textarea{
        font-family: 'Popins', sans-serif;
        font-size: 1.6rem;

        outline: none;

        -webkit-font-smoothing: antialiased;
    }

    body{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_100};
        color: ${({theme}) => theme.COLORS.LIGHT_100};
    }

    a, button, h1{
        font-family: 'Popins', sans-serif;
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover{
        filter: brightness(0.9);
    }

    button{
        border: none;
        background-color: transparent;
    }
  
    a {
        text-decoration: none;
    }

    .swal2-popup {
        font-size: 1.6rem;
        font-family: "Poppins", sans-serif;
        text-align: center;
        border-radius: 10px;
    }

`;
    

