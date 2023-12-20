import DiscreetLogo from '../../static/images/discreet-logo.svg';
import {Wrapper} from '../Wrapper';
import {Container} from './styles';

export function Footer() {
  return (
    <Container>
      <Wrapper>
        <div className="brand">
          <img src={DiscreetLogo} alt="Foto do logotipo"/>
          <h3>food explorer</h3>
        </div>
        <p> csamp - &copy; 2022 - Todos os direitos reservados</p>
      </Wrapper>
    </Container>
  );
}