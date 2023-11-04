import styled from 'styled-components'

export const Container = styled.body `

    width: 100%;
    height: 100vh;

    padding: 37px 123px;

    >h1{

        margin-top: 30px;
        margin-left: 20px;

        font-size: 32px;
        font-weight: 300;
        
        color: ${({theme}) => theme.COLORS.LIGHT_100};
    }

`;

export const ButtonArrow = styled.button`
    
    background: none;
    border: none;

    align-items: center;

    margin-left: 30px;

    a{
        color: ${({theme}) => theme.COLORS.LIGHT_100};

        width: 106px;
        height: 34px;

        font-size: 24px;  
        
        >span{
            margin-left: 20px;
        }
    }
`;

export const Form = styled.div`
   
    width: 100%;

    display: flex;
    flex-wrap: wrap;

    >p{
        font-size: 16px;
        font-weight: 100;

        margin-left: 30px;
        margin-top: 20px;
        margin-bottom: -10px;
    }


`;

export const Textarea = styled.textarea`
    width: 1120px;
    height: 172px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.GRAY_400};

    border: none;
    resize: none;

    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
    border-radius: 10px;
    padding: 16px;

    &::placeholder{
        color: ${({theme}) => theme.COLORS.GRAY_400};
    }

`;