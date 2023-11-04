import{BsArrowRightSquare, BsSearch} from 'react-icons/bs';
import{useAuth} from '../../hooks/auth.jsx';

import{Container, Profile, Search, Logout} from './styles.js';

import{Link} from 'react-router-dom';

import{Button} from '../../components/Button/index.jsx';

export function Header(){
    const{signOut} = useAuth();

        return(
        <Container>
            <Profile>

                <Link to="/profile">
                    <img src="/static/images/logo.png" alt="Profile"/>
                </Link>

                <Link to="/home">
                food explorer
                </Link>

                <Search>
                    <BsSearch/>
                    <input
                        placeholder='Busque por pratos ou ingredientes'
                        type='text'
                    />    
                </Search>    
                                                            
                <Button title="Pedidos"/>
                    
                <Logout onClick={signOut}>
                    <Link to="/home">
                        <BsArrowRightSquare/>
                    </Link>
                </Logout>
            </Profile>
       
        </Container>
    );
}
