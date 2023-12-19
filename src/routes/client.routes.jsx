import {Route, Routes} from 'react-router-dom';
import {AllOrders} from '../pages/AllOrders';
import {Details} from '../pages/Details';
import {Favorites} from '../pages/Favorites';
import {Home} from '../pages/Home';
import {NotFound} from '../pages/NotFound';
import {OffAir} from '../pages/OffAir';
import {Order} from '../pages/Order';
import {Profile} from '../pages/Profile';
import {ShoppingCart} from '../pages/ShoppingCart';

export function ClientRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/favorites" element={<Favorites />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route ath="/details/:id" element={<Details />}/>
      <Route ath="/cart" element={<ShoppingCart />}/>
      <Route ath="/all-orders" element={<AllOrders />}/>
      <Route ath="/order/:id" element={<Order />}/>
      <Route ath="/off-air" element={<OffAir />}/>
      <Route ath="*" element={<NotFound />}/>
    </Routes>
  );
}