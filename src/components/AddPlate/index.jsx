import {Container, ButtonArrow, Form, Textarea} from './styles.js';

import {Link} from 'react-router-dom'

import{BsArrowLeftSquare, BsArrowBarUp, BsArrowBarDown} from 'react-icons/bs';

import{Button} from '../../components/Button/index.jsx';
import{Input} from '../../components/Input/index.jsx';

export function AddPlate(){

return(
    <Container>

        <ButtonArrow>
    
            <Link to="/home">
                <BsArrowLeftSquare/> 
                <span>Voltar</span>
            </Link>

        </ButtonArrow>

    <h1>Adicionar Prato</h1>

    <Form>

        <p>Imagem do prato</p>
        <Input
            icon={BsArrowBarUp}
            placeholder="Selecione a Imagem" 
            type="text" 
        /> 
        
        <p>Nome</p>
        <Input 
            placeholder="Ex.: Salada Ceasar"
            type="text" 
        /> 

        <p>Categoria</p>
        <Input 
            icon={BsArrowBarDown}
            placeholder="Refeição"
            type="text" 
        /> 
        
        <p>Ingredientes</p>
        <Input
            placeholder="Adicionar +"
            type="text"
        />
             
        <p>Preço</p>
        <Input 
            placeholder="R$ 00,00"
            type="price" 
        />
        <p>Descrição</p>
        <Textarea
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            type="text"
        />
        
        <Button title="Salvar alterações"/>

    </Form>
    

    </Container>
)
}; 