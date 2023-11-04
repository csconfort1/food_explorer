import {Container, ButtonArrow, Form, Textarea} from './styles.js';

import {Link} from 'react-router-dom'

import{BsArrowLeftSquare, BsArrowBarUp} from 'react-icons/bs';

import{Input} from '../../components/Input/index.jsx';

export function EditPlate(){
return(
    <Container>

        <ButtonArrow>
    
            <Link to="/home">
                <BsArrowLeftSquare/> 
                <span>Voltar</span>
            </Link>

        </ButtonArrow>

    <h1>Editar Prato</h1>

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
            placeholder="Refeição"
            type="text" 
        /> 
        
        <p>Ingredientes</p>
        <Input 
            icon={BsArrowBarUp}
            placeholder= "Adicionar"
            type="text" 
        /> 
     
        <p>Preço</p>
        <Input 
            placeholder="R$ 00,00"
            type="price" 
        />
        <p>Descrição</p>
        <Textarea
            placeholder="A Salada César éuma opção refrescante para o verão."
            type="text"
        />

    </Form>
    

    </Container>
)
}; 