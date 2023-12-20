import styled from 'styled-components';

const Container = styled.label`
  padding: 15px;
  border: ${({ theme }) => `1px solid ${theme.COLORS.LIGHT_100}`};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .circles {
    > * {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }

    .red {
      background-color: ${({ theme }) => theme.COLORS.RED_400};
    }

    .orange {
      background-color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    .green {
      background-color: ${({ theme }) => theme.COLORS.GREEN};
    }

    .hidden {
      display: none;
    }
  }

  select {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    -webkit-appearance: ${({disabled}) => disabled && 'none'};

    option {
      background-color: ${({ theme }) => theme.COLORS.BLUE_200};
    }
  }
`;

export {Container};