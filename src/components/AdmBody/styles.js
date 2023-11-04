import styled from 'styled-components'

export const Container = styled.body `
    
    height: 740px;
    width: 100%px;

    padding: 37px 123px;
`;

export const ButtonArrow = styled.button`
    
    background: none;
    border: none;

    align-items: center;

    a{
        color: ${({theme}) => theme.COLORS.LIGHT_100};

        width: 106px;
        height: 34px;

        font-size: 24px;    

        margin-left: 20px;

        >span{
            margin-left: 20px;
        }
    }
`;

export const Profile = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;

    margin-left: 10px;
    margin-top: 30px;

    >img{

        width: 390px;
        height: 390px;
    }

    >div{
        margin-left: 50px;
        
        >h1{
            margin-top: -150px;
            font-size: 40px;

        }

        >p{
            font-size: 24px;
        }
    }
`;

export const Section = styled.div`
    
    border: none;
    border-radius: 5px;


    background-color: ${({theme}) => theme.COLORS.GRAY_600};

    width: 600px;
    height: 32px;

    margin-left: 450px;
    margin-top: -150px;
        
    text-align: center;

    cursor: pointer;

    >div{

        font-size: 25px;

        margin-top: 40px;

        >span{
            margin: 15px ;
        }
    }
`;

export const Button = styled.button`


    border: none;
    border-radius: 5px;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.RED_100};

    width: 162px;
    height: 48px;

    padding: 12px;
     
    font-size: 14px;

    >p{

        color: ${({theme}) => theme.COLORS.LIGHT_100};
        
        margin-left: 10px;
        font-size: 24px;
    }
`;
