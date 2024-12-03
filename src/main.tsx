import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GlobalStyles } from './styles/Styled.app.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.tsx'
import BestSellerRouter from './routes/BestSellerRouter.tsx'
import Headphones from './routes/Headphones.tsx'
import BatteriesRouter from './routes/BatteriesRouter.tsx'
import Mouse from './routes/Mouse.tsx'
import ShoppingCart from './routes/ShoppingCart.tsx'

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element:<Home/>
        },
        {
          path: "/maisVendidos",
          element: <BestSellerRouter/>
        },
        {
          path: "/fones",
          element: <Headphones/>
        },
        {
          path: "/baterias",
          element: <BatteriesRouter/>
        },
        {
          path: "/mouse",
          element: <Mouse/>
        },
        {
          path: "/perfil",
          element: <BestSellerRouter/>
        },
        {
          path: "/carrinho",
          element: <ShoppingCart/>
        },
      ]
    }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles/>
    <RouterProvider router={router}/>
  </StrictMode>,
)
