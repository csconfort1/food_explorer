import {useState} from "react";
import {Container, Form, Background} from './styles.js'

import {Link, useNavigate} from 'react-router-dom'
import {FiUser, FiMail, FiLock} from 'react-icons/fi'

import {api} from '../../services/api'

import{Input} from '../../components/Input/index.jsx'
import{Button} from '../../components/Button/index.jsx'

export function SignUp(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp(){
        if(!name || !email || !password){
            return alert("Preencha todos os campos!");
        }

        if(password.length < 6) {
            return alert("A senha deve conter pelo menos 6 caracteres!");
        }

        api.post("/users", {name, email, password})
        .then(() => {
            alert("Usuário cadastrado com sucesso!");
            navigate("/");
        })
        .catch(error => {
            if(error.response){
                alert(error.response.data.message);
            }
            else{
                alert("Não foi possível cadastrar");
            }
        });
    }

    return(
        <Container>

        <Form>

            <img src="../../../public/static/images/logo.png"/>
            <h1>food explorer</h1>
            <h2>Crie sua conta</h2>

            <Input
                placeholder="Digite o seu Nome"
                type="text"
                icon={FiUser}
                onChange={e => setName(e.target.value)}
            />

            <Input
                placeholder="Digite o seu Email"
                type="text"
                icon={FiMail}
                onChange={e => setEmail(e.target.value)}
            />  

            <Input
                placeholder="Senha (6 caracteres)"
                type="password"
                icon={FiLock}
                onChange={e => setPassword(e.target.value)}
            />  

            <br/>

            <Button title="Criar conta" onClick={handleSignUp}/>

            <Link to="/signin">
                Já tenho uma conta
            </Link>
                
            </Form>

            <Background/>

        </Container>
    );
}