import styled from 'styled-components'

export const Container = styled.header `
    grid-area: header;

    height: 105px;
    width: 1368px;

    padding: 37px 140px;

`;

export const Profile = styled.div`

    display: flex;
    align-items: center;

   >img{
        width: 30px;
        height: 30px;
    }

    >a{
        padding: 28px, 123px;
        line-height: 24px;

        margin-left: 30px;

        font-size: 24px;
        font-weight: bold;

        display: flex;
        flex-direction: row;

        width: 160px;

        color: white;

    }
`;

export const Search = styled.button`

        margin-left: 30px;
        
        border:none;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_100};

        display: flex;
        flex-direction: row;

        padding-top: 10px;
    
    >svg{
        margin-left: 140px;
        margin-right: 30px;
        color: ${({theme}) => theme.COLORS.LIGHT_100};

    }
        
    >input{

        border: none;

        width: 344px;
        font-size: 16px;

        background-color: ${({theme}) => theme.COLORS.BACKGROUND_100};

        margin-right: 90px;
        
    }
`;    

export const Logout = styled.button`

    border: none;
    background: none;

    font-size: 28px;

    margin-left: 40px;
    margin-top: 10px;

    a{
        color: white;
    }
`;
