import Home from "components/Home";
import Blog from "components/pages/blog/Blog";
import About from "components/pages/about/About";
import Login from "components/pages/login/Login";
import Register from "components/pages/register/Register";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/blog",
    component: Blog,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
];

export default routes;
