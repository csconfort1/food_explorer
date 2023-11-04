import styled from 'styled-components';

export const Container = styled.div`

     margin-top: 10px;
     margin-left: 124px;
     margin-right: 124px;

     background-color: ${({theme}) => theme.COLORS.RED_100};

     .drinks{

          >h1{
       
          font-size: 32px;

          height: 46px;
     }}

     .carousel{ 
          display: flex;
          overflow-x: auto;
          scroll-behavior: smooth;

          margin-top: 20px;
          
     }

     .carousel::-webkit-scrollbar{
          display: none;
     }

     .carousel .item{

          margin: 10px;
          padding: 10px;

          width: 280px;
          height: 380px;
   
          text-align: center;

          flex: none;
     }

     .carousel .item .image .img{

          object-fit: cover;
     }

     .carousel .item .info{

          margin-top: 80px;

          height: 140px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          font-size: 24px;
          font-weight: bold;

          color: ${({theme}) => theme.COLORS.LIGHT_100};
     }

     .carousel .item .info .description{
          font-size: 14px;
          font-weight: lighter;
     }

     .carousel .item .info .price{

          color: ${({theme}) => theme.COLORS.BLUE_200};
          font-weight: bold;
          font-size: 32px;

          
     }

     .buttons{
          width: 100%;
          text-align: center;

          margin-top: 20px;
          cursor: pointer;
     }
     
     
     .buttons .buttonleft{

          border: none;
          background-color: transparent;
          
          margin-right: 10px;

     }

     .buttons .buttonright{

          border: none;
          background-color: transparent;

          margin-left: 10px;
     }
`;


export const Pencil = styled.button`

     margin-left: 200px;

     border: none;
     background-color: transparent;

     font-size: 25px;

     color: ${({theme}) => theme.COLORS.LIGHT_100};

     display: flex;


>p{
     font-size: 15px;

     margin-left: 10px;
}
`;