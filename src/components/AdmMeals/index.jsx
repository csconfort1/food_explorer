import {useEffect, useState, useRef} from "react"

import {PiPencilDuotone} from 'react-icons/pi'

import{Container, Pencil} from './styles'

export function AdmMeals(){

  const [data, setData] = useState([]);
  const Carousel = useRef(null);

  useEffect(() => {
    fetch('http://localhost:5173/static/meals.json')
    .then((response) => response.json())
    .then(setData);
    
  },[]);

  const handleLeftClick = (e) => {
    e.preventDefault();
    Carousel.current.scrollLeft -= Carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    Carousel.current.scrollLeft += Carousel.current.offsetWidth;
  };

  if (!data || !data.length) return null;
  
  return(
    <Container>
    <div className="meals">
 
        <h1>Refeições</h1>

        <div className="carousel" ref={Carousel}>

            {data.map((item) => {
            const {id, name, description, price, image} = item;
      
            return(

                <div className="item" key={id}>
                    <div className="image">
                        <Pencil>
                            <PiPencilDuotone/> <p>Editar</p>
                        </Pencil>
                        <img src={image} alt={name}/>
                    </div>
      
                    <div className="info">
                        
                        <span className="name">{name}</span>
                        <span className="description">{description}</span>
                        <span className="price">R$ {price}</span>
                        
                    </div> 
               
                </div>
            );
        })}

      </div>

     
        <div className="buttons">
            <button className="buttonleft" onClick={handleLeftClick}>
                <img src="/static/images/CaretLeft.png" alt="seta para a esquerda"/>
            </button>

            <button className="buttonright" onClick={handleRightClick}>
                <img src="/static/images/CaretRight.png" alt="seta para a direita"/>
            </button>
        </div>
    </div>
    </Container>
);}

export default AdmMeals;
