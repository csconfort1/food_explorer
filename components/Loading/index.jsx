import { Container } from './styles';

export function Loading() {
  return (
    <Container>
      <div className="circle"></div>
      <p className="loading">Carregando...</p>
    </Container>
  );
}