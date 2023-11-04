import { Container } from "./styles";

import Lettuce from "/static/images/alface.jpg";
import Plum from "/static/images/ameixa.jpg"
import Almonds from "/static/images/amendoas.jpg"
import Anise from "/static/images/aniz.jpg";
import Coffee from "/static/images/cafe.jpg";
import Shrimp from "/static/images/camarao.jpg";
import LowerLeg from "/static/images/canela.jpg";
import EggWhites from "/static/images/claras.jpg"
import Damascus from "/static/images/damasco.jpg"
import Flour from "/static/images/farinha.jpg"
import Lemon from "/static/images/limao.jpg";
import Apple from "/static/images/maca.jpg";
import PassionFruit from "/static/images/maracuja.jpg";
import Pasta from "/static/images/massa.jpg";
import Bread from "/static/images/pao.jpg";
import BreadNaan from "/static/images/paonaan.jpg";
import Cucumber from "/static/images/pepino.jpg";
import Peach from "/static/images/pessego.jpg"
import Pesto from "/static/images/pesto.jpg";
import Ham from "/static/images/presunto.jpg";
import Radish from "/static/images/rabanete.jpg";
import Arugula from "/static/images/rucula.jpg";
import Tomato from "/static/images/tomate.jpg";
import Whiskey from "/static/images/whiskey.jpg";

export function Ingredients({ ingredient }) {
    function fetchImageIngredient(name) {
      let ingredient = name.toLowerCase().trim()
      
      let result;
      
      if (ingredient == "alface") {
        return result = Lettuce
        
      } else if (ingredient == "ameixa") {
        return result = Plum
  
      } else if (ingredient == "amêndoas") {
        return result = Almonds
  
      } else if (ingredient == "aniz") {
        return result = Anise  
  
      } else if (ingredient == "café") {
        return result = Coffee
  
      } else if (ingredient == "camarão") {
        return result = Shrimp
  
      } else if (ingredient == "canela") {
        return result = LowerLeg
        
      } else if (ingredient == "claras") {
        return result = EggWhites 
  
      } else if (ingredient == "damasco") {
        return result = Damascus
  
      } else if (ingredient == "farinha") {
        return result = Flour
  
      } else if (ingredient == "limão") {
        return result = Lemon
  
      } else if (ingredient == "maçã") {
        return result = Apple
  
      } else if (ingredient == "maracujá") {
        return result = PassionFruit
  
      } else if (ingredient == "massa") {
        return result = Pasta
  
      } else if (ingredient == "pão") {
        return result = Bread
  
      } else if (ingredient == "pão naan") {
        return result = BreadNaan
  
      } else if (ingredient == "pepino") {
        return result = Cucumber
  
      } else if (ingredient == "pêssego") {
        return result = Peach
  
      } else if (ingredient == "pesto") {
        return result = Pesto
  
      } else if (ingredient == "presunto") {
        return result = Ham
  
      } else if (ingredient == "rabanete") {
        return result = Radish
  
      } else if (ingredient == "rúcula") {
        return result = Arugula
  
      } else if (ingredient == "tomate") {
        return result = Tomato
  
        
      } else if (ingredient == "whiskey") {
        return result = Whiskey
     
      } else {
        return result = Apple
      }}
    
    
    let result = fetchImageIngredient(ingredient)
    
      return (
        <Container>
          <img src={result} alt="Ingredientes" />
          <span className="ingredient-name">{ingredient}</span>
        </Container>
      );
    }