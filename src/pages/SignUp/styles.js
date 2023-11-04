import styled from 'styled-components'

import backgroundImg from '/static/images/background-macarons.png'

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;

`;

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    >img{
        width: 40px;
        height: 40px;
    }

    >h1{
        font-size: 48px;
        font-weight: 400;
        
        color: ${({theme}) => theme.COLORS.LIGHT_100};

        margin-bottom: 25px;
        margin-top: 10px;
    }

    >h2{
        font-size: 28px;
        font-weight: 400;
        
        color: ${({theme}) => theme.COLORS.LIGHT_100};

        margin-bottom: 25px;
    }

    >a{
        margin-top: 40px;
        color: ${({theme}) => theme.COLORS.LIGHT_100};

    }


`;

export const Background = styled.div`
    
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;


`;