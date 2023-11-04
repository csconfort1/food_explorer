import {Routes,Route} from 'react-router-dom';

import{Details} from '../pages/Details'
import{AdmDetails} from '../pages/AdmDetails'
import{Home} from '../pages/Home'
import{AdmHome} from '../pages/AdmHome'
import{AddMeal} from '../pages/AddMeal'
import{EditMeal} from '../pages/EditMeal'
import{Profile} from '../pages/Profile'

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/admhome" element={<AdmHome/>}/>
            <Route path="/details" element={<Details/>}/>
            <Route path="/admdetails" element={<AdmDetails/>}/>
            <Route path="/addmeal" element={<AddMeal/>}/>
            <Route path="/editmeal" element={<EditMeal/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
    )
}