import styled from 'styled-components'

export const Container = styled.div`
    
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.GRAY_400};

    margin-bottom: 8px;
    border-bottom: 10px;
    margin-left: 20px;
    margin-top: 20px;

    border-radius: 10px;

    >input{
        height: 56px;
        
        padding: 12px;

        color: ${({theme}) => theme.COLORS.LIGHT_100};
        background: transparent;
        border: 0;

        &::placeholder{
            color: ${({theme}) => theme.COLORS.GRAY_400};
        }
    }
    
    >svg{
            margin-left: 16px;
        }
`;