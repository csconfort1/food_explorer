import {useState, useEffect} from 'react';
import {BsBalloonHeartFill} from "react-icons/bs";
import {BsBalloonHeart} from "react-icons/bs";
import {useNavigate} from 'react-router-dom';
import {useAuth} from '../../hooks/auth';
import {useRequest} from '../../hooks/request';
import {api} from '../../services/api';
import {handleImageRequest} from '../../utils/helpers';
import {AdmButtons} from '../AdmButtons';
import {ClientButtons} from '../ClientButtons';
import {Container} from './styles';

export function Card({ meal_id, title, description, price, image, isFav }) {
  const [favoriteMeal, setFavoriteMeal] = useState(isFav);
  const [cardImage, setCardImage] = useState();
  const { userInfos } = useAuth();
  const navigate = useNavigate();
  const { manageRequests } = useRequest();

  function renderManipulationButtons() {
    if (!userInfos || !userInfos.isAdm) {
      return (
        <ClientButtons meal_id={meal_id} title={title} price={price} image={image}/>
      );
    } else {
      return <AdmButtons meal_id={meal_id} />;
    }
  }

  function renderButtonFav() {
    if (!userInfos || !userInfos.isAdm) {
      return (
        <button
          type="button"
          onClick={handleAddToFavorite}
        >
          {favoriteMeal ? <BsBalloonHeartFill/> : <BsBalloonHeart/>}
        </button>
      );
    }
  }

  async function handleAddToFavorite() {
    if (!userInfos) {
      const response = confirm(`Você não está logado. Deseja logar?`);

      if (response) {
        navigate('/login');
      }

      return;
    }

    setFavoriteMeal(prevState => !prevState);

    if (favoriteMeal) {
      await manageRequests('delete', `/favorites/${meal_id}`);
    } else {
      await manageRequests('post', `/favorites/${meal_id}`);
    }
  }

  function handleGoToDetails() {
    navigate(`/details/${meal_id}`);
  }

  async function renderImage() {
    
    const url = `${api.defaults.baseURL}/files/meals/${image}`;

    handleImageRequest({url, setState: setCardImage });
  }

  useEffect(() => {
    renderImage();
  }, []);

  return (
    <Container className="my-card">
      {renderButtonFav()}
      <img
        src= {`${cardImage}`}
        alt={`${title}`}
        onClick={handleGoToDetails}
      />
      <h2 onClick={handleGoToDetails}>{`${title} >`}</h2>
      <p>{description}</p>
      <p>R$ {price}</p>
      {renderManipulationButtons()}
    </Container>
  );
}