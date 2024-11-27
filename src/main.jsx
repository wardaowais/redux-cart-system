import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import ViewCart from './components/ViewCart.jsx'
import { Provider } from 'react-redux'
import shopstore from './store/indes.js'

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      {
        path:"/",
        element : <Home/>
      },
      {
        path : "/bag",
        element :<ViewCart/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={shopstore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
