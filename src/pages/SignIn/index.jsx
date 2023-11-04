import {useState} from 'react';
import {Container, Form, Background} from './styles.js';

import {Link} from 'react-router-dom';
import {useAuth} from '../../hooks/auth.jsx';

import{Input} from '../../components/Input/index.jsx';
import{Button} from '../../components/Button/index.jsx';
import{FiMail, FiLock} from 'react-icons/fi'

export function SignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {signIn} = useAuth();

    function handleSignIn(){
        signIn({email, password});
    }
        
    return(
        <Container>

        <Form>
            <img src="../../../public/static/images/logo.png"/>
            <h1>food explorer</h1>
            <h2>Faça Login</h2>

            <Input
               placeholder="Email: exemplo@exemplo.com.br"
               type="text"
               icon={FiMail}
               onChange = {e => setEmail(e.target.value)}
            />

            <Input
                placeholder="Senha: No mínimo 6 caracteres"
                type="password"
                icon={FiLock}
                onChange = {e => setPassword(e.target.value)}
            />  
        
            <br/>
        
            <Button title="Entrar" onClick={handleSignIn}/>
                
            <Link to ="/signup">
                Criar uma conta
            </Link> 

        </Form>

        <Background/>
        
        </Container>
    );
}