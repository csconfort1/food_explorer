import {Container} from "./styles.js"

import{AdmHeader} from '../../components/AdmHeader/index.jsx'
import{AddPlate} from '../../components/AddPlate/index.jsx'
import{Footer} from '../../components/Footer/index.jsx'
import{Button} from '../../components/Button/index.jsx'

export function AddMeal(){
  
  return(
    <Container>
      <AdmHeader/>

      <AddPlate/>
      <br/>
      <Footer/>
    </Container>  
  );
}