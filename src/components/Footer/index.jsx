import{Container, Profile, End} from './styles.js'

export function Footer(){
    return(
        <Container>
            <Profile>
                <img src="/static/images/logo.png" alt="Logo food explorer"/>
                <div>
                    <span>food explorer</span>
                </div>
            </Profile>    

            <End>
                <p>© 2023 - Todos os direitos reservados.</p>
            </End>
            </Container>
            

    );
}