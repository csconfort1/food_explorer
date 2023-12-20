import {BsBalloonHeart} from "react-icons/bs";
import {GiShoppingCart} from "react-icons/gi";
import {IoReceiptOutline} from "react-icons/io5";
import {SiCodechef} from "react-icons/si";
import {AiOutlineLogout} from "react-icons/ai";

export const clientLinks = [
  {
    name: 'Favoritos',
    icon: <BsBalloonHeart/>,
    url: '/favorites',
    isRestrict: true,
  },
  {
    name: 'Carinho',
    icon: <GiShoppingCart/>,
    url: '/cart',
    isRestrict: false,
  },
  {
    name: 'Pedidos',
    icon: <IoReceiptOutline/>,
    url: '/all-orders',
    isRestrict: true,
  },
  {
    name: 'Perfil',
    icon: <SiCodechef/>,
    url: '/profile',
    isRestrict: true,
  },
  {
    name: 'Entrar/Sair',
    icon: <AiOutlineLogout/>,
    url: '/login',
    isRestrict: false,
  },
];