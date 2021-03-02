import Home from '../pages/home'
import Login from '../pages/login'
import Register from '../pages/register'

const routes = [{
  path: '/',
  exact: true,
  component: Home
}, {
  path: '/register',
  component: Register
}, {
  path: '/login',
  component: Login
}, {
  path: '/extra',
  component: Home
}]

export default routes
