import {Container, Profile, Section, ButtonArrow} from './styles.js';

import{useEffect, useState} from 'react';
import{api} from '../../services/api.js';

import{useParams, Link} from 'react-router-dom';

import{Button} from '../../components/Button/index.jsx';
import{Tag} from '../../components/Tag/index.jsx';
import { Ingredients } from "../../components/Ingredients/index.jsx";

import{BsArrowLeftSquare,BsPatchPlus,BsPatchMinus} from 'react-icons/bs';


export function AdmBody(){

    const [data, setData] = useState(null);
    const params = useParams();
    console.log(data);
  
    const imageURl = data && `${api.defaults.baseURL}/files/${data.image}`;
  
    useEffect(() => {
        async function fetchPlate() {
          const response = await api.get(`/plates/${params.id}`);
          setData(response.data);
        }
    
        fetchPlate();
      }, []);

    return(
        <Container>

        <ButtonArrow>
        
            <Link to="/home">
                <BsArrowLeftSquare/> 
                <span>Voltar</span>
            </Link>

        </ButtonArrow>    


        <Profile>
            <img src="/static/images/Salada-ravanello2.png" alt="Imagem Salada Ravanello"/>
           
            <div>
                <h1>Salada Ravanello</h1>
                <br/>
                <p>Rabanetes, folhas verdes e molho agridoce salpicados</p> 
                <p>com gergelim. O pão naan dá um toque especial.</p>
            </div> 

        </Profile>

        
        <Section>
            <Tag title="alface"/>
            <Tag title="cebola"/>
            <Tag title="pão naan"/>
            <Tag title="pepino"/>
            <Tag title="rabanete"/>
            <Tag title="tomate"/>
           
            <div>
                <BsPatchMinus size={30} />
                <span>01</span>
                <BsPatchPlus size={30} />
            </div> 
            
            <Button title="Editar Prato"/>
 
        </Section>

        {data && (
                <Content>
                    <img
                        className="plate"
                        src={imageURl}
                        alt="`image de ${data.title}`"
                    />

                    <div className="information">
                        <div className="description">
                            <h2>{data.title}</h2>
                            <p>{data.description}</p>

                    {data.ingredients.map((ingredient) => (
                        <Ingredients
                            key={String(ingredient.id)}
                            ingredient={ingredient.name}
                        />
                    ))}
                        </div>
                    </div>

                </Content>
            )}

        </Container>
    );
}    