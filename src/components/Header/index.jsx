/*import {FiMenu, FiX} from 'react-icons/fi';*/

import foodExplorerLogo from '../../static/images/logo.png';
import {Wrapper} from '../Wrapper/index.jsx';
import {AdminNavigation} from './components/AdminNavigation/index.jsx';
import {ClientNavigation} from './components/ClientNavigation/index.jsx';
import {SearchBar} from './components/SearchBar/index.jsx';
import {Base,Brand,ButtonMenu,Container,Image,MenuIcon,Navigation,Title,Top,} from './styles.js';
import {useHeader} from './useHeader.js';

export function Header() {
  const {handleLogout, handleMenu, isMenuOpen, isUserLoggedIn, shouldAdmNavigationBeRendered, shouldClientNavigationBeRendered,} = useHeader();

  return (
    <Container>
      <Wrapper>
        <Top>
          <Brand to="/">
            <Image src={foodExplorerLogo} alt=""/>
            <Title>foodExplorer</Title>
          </Brand>

          <ButtonMenu title="Abrir ou fechar o menu" onClick={handleMenu}>
            {isMenuOpen && (
              <MenuIcon>
                X
              </MenuIcon>
            )}

            {!isMenuOpen && (
              <MenuIcon>
                Menu
              </MenuIcon>
            )}
          </ButtonMenu>
        </Top>
        <Base isMenuOpen={isMenuOpen}>
          <SearchBar/>
          <Navigation>
            {shouldAdmNavigationBeRendered && (
              <AdminNavigation onLogout={handleLogout} />
            )}
            {shouldClientNavigationBeRendered && (
              <ClientNavigation
                isUserLoggedIn={isUserLoggedIn}
                onLogout={handleLogout}
              />
            )}
          </Navigation>
        </Base>
      </Wrapper>
    </Container>
  );
}