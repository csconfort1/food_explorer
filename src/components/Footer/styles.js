import styled from 'styled-components'

export const Container = styled.footer `

    height: 105px;
    width: 1368px;

    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 80px;
`;

export const Profile = styled.div`
       
    display: flex;
    align-items: center;

    >img{
        width: 30px;
        height: 30px;
    }

    >div{
        display: flex;
        flex-direction: row;

        margin-left: 16px;
        line-height: 24px;

        span{
            font-size: 24px;
            font-weight: bold;

            color: ${({theme}) => theme.COLORS.GRAY_500};
        }
    }   
`;

export const End = styled.div`
        p{
            font-size: 14px;
            font-weight: 400;

            color: ${({theme}) => theme.COLORS.LIGHT_100};

            margin-left: 687px;
        }
`