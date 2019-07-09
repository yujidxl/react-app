import Home from '../pages/home/app'
import Gg from '../pages/products/gg'
import Kk from '../pages/products/kk'
const routes = [
  
  {
    path: '/products/gg',
    component: Gg
  },
  {
    path: '/products/kk',
    component: Kk
  },
  {
    path: '/',
    component: Home
  },
]
export default  routes;