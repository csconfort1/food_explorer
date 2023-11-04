import styled from 'styled-components'

export const Container = styled.span`
    font-size: 14px;
    padding: 5px 14px;
    border-radius: 5px;
    margin-right: 12px;

    background-color: ${({theme}) => theme.GRAY_600};
    color: ${({theme}) => theme.COLORS.LIGHT_100};
`;