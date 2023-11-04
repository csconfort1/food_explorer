import {Container} from "./styles.js"

import{Header} from '../../components/Header/index.jsx'
import{Body} from '../../components/Body/index.jsx'
import{Footer} from '../../components/Footer/index.jsx'

export function Details(){
  
  return(
    <Container>
      <Header/>

      <Body/>
      
   
      <Footer/>
    </Container>  
  );
}