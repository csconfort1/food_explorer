import {IoHomeOutline} from "react-icons/io5";
import {useNavigate} from 'react-router-dom';
import {Button} from '../../components/Button';
import {Footer} from '../../components/Footer';
import {Header} from '../../components/Header';
import {Container} from './styles';

export function NotFound() {
  const navigate = useNavigate();

  function handleBack() {
    navigate('/');
  }

  return (
    <Container>
      <Header />
      <main>
        <h1>Erro 404</h1>
        <p>Página indisponível!</p>
        <Button
          title="Voltar para Página Inicial"
          icon={IoHomeOutline}
          onClick={handleBack}
        />
      </main>
      <Footer />
    </Container>
  );
}