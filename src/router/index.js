import Home from '../pages/home';
import Login from '../pages/login';

const routes = [{
    path: '/',
    exact: true,
    component: Home
}, {
    path: "/login",
    component: Login
}];

export default routes;
