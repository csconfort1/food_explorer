import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 0 auto 25px;
  padding: 20px 20px 35px;
  background-color: ${({ theme }) => theme.COLORS.RED_100};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  > button:first-child {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: clamp(2rem, 6vw, 2.4rem);
    align-self: flex-end;
  }

  > img:hover,
  > h2:hover {
    cursor: pointer;
  }

  > img {
    width: 175px;
    aspect-ratio: 1;
    border-radius: 50%;
  }

  > h2 {
    font-family: 'Poppins';
    font-size: clamp(2rem, 6vw, 2.4rem);
  }

  p:nth-of-type(1) {
    font-size: 1.4rem;
    text-align: center;
  }

  p:nth-of-type(2) {
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.BLUE_200};
  }

  > .client-buttons {
    width: 100%;
    padding: 0 15px;
  }
`;

export {Container};