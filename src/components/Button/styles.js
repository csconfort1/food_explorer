import styled from 'styled-components'

export const Container = styled.button`
    width: 150px;
    height: 56px;

    color: ${({theme}) => theme.COLORS.LIGHT_100};
    background-color: ${({theme}) => theme.COLORS.RED_100};

    border: 0;
    padding: 0 12px;
    border-radius: 5px;

    font-size: 14px;
    font-weight: 300;

    &:disabled{
        opacity: 0.5;
    }
    
`;
