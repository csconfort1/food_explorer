import React from 'react'
import ReactDOM from 'react-dom/client'

import{ThemeProvider} from 'styled-components'

import {RequestProvider} from './hooks/request.jsx'
import {AuthProvider} from './hooks/auth.jsx'
import {CartProvider} from './hooks/cart.jsx'
import {MealsProvider} from './hooks/meals.jsx'
import {Routes} from './routes/index.jsx'

import GlobalStyles from './styles/global.js'
import theme from './styles/theme.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <RequestProvider>
          <AuthProvider>
            <CartProvider>
              <MealsProvider>
                <Routes/>
              </MealsProvider>  
            </CartProvider>  
          </AuthProvider>
        </RequestProvider>
    </ThemeProvider>  
  </React.StrictMode>
)
