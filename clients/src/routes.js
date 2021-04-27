import Home from "components/Home";
import Blog from "components/pages/blog/Blog";
import About from "components/pages/about/About";

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
    component: About
  }
];

export default routes;
