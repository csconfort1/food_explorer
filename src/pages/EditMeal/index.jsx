import {Container} from "./styles.js"

import{AdmHeader} from '../../components/AdmHeader/index.jsx'
import{EditPlate} from '../../components/EditPlate/index.jsx'
import{Footer} from '../../components/Footer/index.jsx'
import{Button} from '../../components/Button/index.jsx'

export function EditMeal(){
  
  return(
    <Container>
      <AdmHeader/>

      <EditPlate/>

      <Button title="Excluir prato"/> 
      <Button title="Salvar alterações"/>
      
      <Footer/>
    </Container>  
  );
}