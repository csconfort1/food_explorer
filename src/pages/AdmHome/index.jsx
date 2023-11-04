import {Container, Beginning} from "./styles.js"

import{AdmHeader} from '../../components/AdmHeader/index.jsx'
import{AdmMeals} from '../../components/AdmMeals/index.jsx'
import{AdmDrinks} from '../../components/AdmDrinks/index.jsx'
import{AdmDesserts} from '../../components/AdmDesserts/index.jsx'
import{Footer} from '../../components/Footer/index.jsx'

export function AdmHome(){

  return(
    <Container>
      <AdmHeader/>
        
      <Beginning>
        <img src="/static/images/background-macarons.png" alt="macarons"/>
        <div>
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </div>  
  
      </Beginning>

      <AdmMeals/>

      <AdmDrinks/>

      <AdmDesserts/>
      

      <Footer/>
             
    </Container> 
  )};     
