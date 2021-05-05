import Home from 'components/Home'
import Blog from 'components/pages/blog/Blog'
import About from 'components/pages/about/About'
import Login from 'components/pages/login/Login'
import Register from 'components/pages/register/Register'
import PostDetail from 'components/pages/blog/PostDetail'
import UserProfile from 'components/pages/user/userProfile/UserProfile'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/blog',
    component: Blog
  },
  {
    path: '/blog/*/:postId',
    component: PostDetail
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/profile',
    component: UserProfile
  }
]

export default routes
