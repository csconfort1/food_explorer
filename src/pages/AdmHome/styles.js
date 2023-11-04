import styled from 'styled-components';

export const Container = styled.div`
     width: 1368px;
     height: 100%;
     
     display: grid;
     grid-template-rows: 105px 412px 530px 530px 530px 77px;
     grid-template-areas: "header" "início" "refeições" "sobremesas" "bebidas" "footer";

`;
export const Beginning = styled.div`

     margin-top: 100px;
     margin-left: 124px;
     margin-right: 124px;     
  
     height: 260px;

     background-color: ${({theme}) => theme.COLORS.RED_100};

     
     display: flex;
     flex-direction: row;

     >img{
         
         width: 400px;
         height: 260px;  

     }    
      
     >div{

          margin-left: 150px;
          margin-top: 80px;

          h1{
               font-size: 40px;
               width: 422px;
          }
          
          p{
               font-size: 16px;
               font-weight: 200;
               width: 470px;
          }
     }
`; 