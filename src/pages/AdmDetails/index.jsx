import {Container} from "./styles.js"

import{AdmHeader} from '../../components/AdmHeader/index.jsx'
import{AdmBody} from '../../components/AdmBody/index.jsx'
import{Footer} from '../../components/Footer/index.jsx'

export function AdmDetails(){
  
  return(
    <Container>
      <AdmHeader/>

      <AdmBody/>
      
   
      <Footer/>
    </Container>  
  );
}