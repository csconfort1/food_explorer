import {Footer} from '../../components/Footer';
import {Header} from '../../components/Header';
import {Wrapper} from '../../components/Wrapper';
import {Container} from './styles';

export function OffAir() {
  return (
    <Container>
      <Header />
      <Wrapper>
        <main>
          <p>Espere alguns minutos e tente novamente!</p>
        </main>
      </Wrapper>
      <Footer />
    </Container>
  );
}