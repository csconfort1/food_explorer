import {BsArrowRightSquare, BsSearch} from 'react-icons/bs'

import{Container, Profile, Search, Logout} from './styles.js'

import{Link} from 'react-router-dom'

import{Button} from '../../components/Button/index.jsx'

export function AdmHeader(){
    return(
        <Container>
            <Profile>

                <img src="/static/images/logo.png" alt="Logo food explorer"/>
              
                <div>
                    <h1>food explorer</h1> 
                    <span>admin</span>
                </div>
                
                <Search>
                    <BsSearch/>
                    <input
                        placeholder='Busque por pratos ou ingredientes'
                        type='text'
                    />    
                </Search>    
                                                            
                <Button title="Novo Prato"/>
                    
                <Logout>
                    <Link to="/home">
                        <BsArrowRightSquare/>
                    </Link>
                </Logout>
            </Profile>
       
        </Container>
    );
}
