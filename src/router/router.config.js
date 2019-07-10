import asyncComponent from '../utils/AsyncComponent'
const Home = asyncComponent(() => import("../pages/home/app"));
const Gg = asyncComponent( () => import("../pages/products/gg"));
const Kk = asyncComponent( () => import("../pages/products/kk"));
const Product = asyncComponent( () => import("../pages/products"));
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/products',
    component: Product,
  },
  {
    path: '/products/gg',
    component: Gg
  },
  {
    path: '/products/kk',
    component: Kk
  }
]

export default  routes;