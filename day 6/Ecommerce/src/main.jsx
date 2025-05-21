import { createRoot } from 'react-dom/client'
import {Button,Button2} from './App'
import Navbar from './Navbar'
import Example from './Home'
import WebRoutes from './Routes'


createRoot(document.getElementById('root')).render(
  <div>
    <WebRoutes />
  </div>
)
