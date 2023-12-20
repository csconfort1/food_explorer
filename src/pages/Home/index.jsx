import Food from '../../static/images/background-macarons.png';
import {Footer} from '../../components/Footer';
import {Header} from '../../components/Header';
import {Wrapper} from '../../components/Wrapper';
import {Container,Desktop,Mobile} from './styles';
import {useHome} from './useHome';

export function Home() {
  const {organizedMeals, categories, renderCardsMobile, renderCardsDesktop} = useHome();

  return (
    <Container>
      <Header />
      <Wrapper>
        <Mobile>
          <div className="top-mobile">
            <img src={Food} alt="Macarons"/>
            <h1>Sabores Inigualáveis</h1>
            <h3>Sinta o cuidado do preparo com ingredientes selecionados</h3>
          </div>
          {renderCardsMobile()}
        </Mobile>
        <Desktop>
          <div className="top-desktop">
            <img src={Food} alt="Macarons"/>
            <h1>Sabores Inigualáveis</h1>
            <h3>Sinta o cuidado do preparo com ingredientes selecionados</h3>
          </div>
          {renderCardsDesktop()}
        </Desktop>
      </Wrapper>

      <Footer />
    </Container>
  );
}

