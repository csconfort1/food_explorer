import styled from 'styled-components';

const Container = styled.button`
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  border: ${({ theme, isHighlighted }) => isHighlighted ? 'none' : `1px solid ${theme.COLORS.LIGHT_100}`};
  font-size: 1.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme, isHighlighted }) => isHighlighted ? `${theme.COLORS.RED_200}` : `${theme.COLORS.BLUE_200}`};

  &:disabled {
    filter: brightness(0.5);
    cursor: not-allowed;
  }

  svg {
    font-size: 2.5rem;
  }
`;

export {Container};