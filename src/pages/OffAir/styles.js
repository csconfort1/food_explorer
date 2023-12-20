import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;

  > .my-wrapper {
    flex-grow: 1;
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: clamp(30px, 8vw, 60px) 0;
    text-align: center;

    p {
      font-size: clamp(1.4rem, 4vw, 2.4rem);
    }
  }
`;

export {Container};