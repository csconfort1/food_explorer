import {Container, Beginning} from "./styles.js"

import{Header} from '../../components/Header/index.jsx'
import{Meals} from '../../components/Meals/index.jsx'
import{Drinks} from '../../components/Drinks/index.jsx'
import{Desserts} from '../../components/Desserts/index.jsx'
import{Footer} from '../../components/Footer/index.jsx'

export function Home(){

  return(
    <Container>
      <Header/>
        
      <Beginning>
        <img src="/static/images/background-macarons.png" alt="macarons"/>
        <div>
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </div>  
  
      </Beginning>

      <Meals/>

      <Drinks/>

      <Desserts/>
      

      <Footer/>
             
    </Container> 
  )};     
