import React, { useCallback } from 'react'
import './Header.css'
import logo from 'assets/images/logo.png'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from 'redux/actions/userAction'

function Header() {
  const dispatch = useDispatch()
  const { isLogin, userInfo } = useSelector((state) => state.userReducers)

  const handleLogout = useCallback(() => {
    dispatch(logout())
  }, [dispatch])

  const showMenuNav = useCallback(() => {
    const navLinks = document.getElementById('nav-links')
    const navClose = document.getElementById('nav-close')
    window.addEventListener('click', (event) => {
      event.preventDefault()
      navLinks.classList.remove('nav-links')
      navLinks.classList.toggle('l-show')
      navClose.classList.remove('nav-close')
      navClose.classList.toggle('c-show')
    })
  }, [])

  const closeMenuNav = useCallback(() => {
    const navLinks = document.getElementById('nav-links')
    const navClose = document.getElementById('nav-close')
    window.addEventListener('click', (event) => {
      event.preventDefault()
      navLinks.classList.remove('l-show')
      navLinks.classList.toggle('nav-links')
      navClose.classList.remove('c-show')
      navClose.classList.toggle('nav-close')
    })
  }, [])

  return (
    <div className="app__nav">
      <div className="app__nav-logo">
        <img src={logo} alt="logo" />
        <span>TaroInJapan</span>
      </div>
      <div className="app__nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {isLogin && (
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          )}
          <li>
            <Link to="/about">About</Link>
          </li>

          {isLogin ? (
            <li>
              <div className="nav-loggedIn">
                <div className="u-profile">
                  <i className="fas fa-user"></i>
                  <Link to="/profile">{(userInfo && userInfo.username) || 'Anonymous'}</Link>
                </div>
                <div className="u-logout">
                  <i className="fas fa-sign-out-alt"></i>
                  <Link to="/login" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              </div>
            </li>
          ) : (
            <li>
              <Link to="/login">
                <i className="fas fa-sign-in-alt"></i>
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="nav-mobile">
        <div className="nav-close" id="nav-close" onClick={closeMenuNav}>
          <i className="fas fa-times"></i>
        </div>
        <div className="hamburger" id="hamburger" onClick={showMenuNav}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="nav-links" id="nav-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {isLogin && (
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            )}
            <li>
              <Link to="/about">About</Link>
            </li>
            {isLogin ? (
              <li>
                <div className="nav-loggedIn">
                  <div className="u-profile">
                    <i className="fas fa-user"></i>
                    <Link to="/profile">{(userInfo && userInfo.username) || 'Anonymous'}</Link>
                  </div>
                  <div className="u-logout">
                    <i className="fas fa-sign-out-alt"></i>
                    <Link to="/login" onClick={handleLogout}>
                      Logout
                    </Link>
                  </div>
                </div>
              </li>
            ) : (
              <li>
                <Link to="/login">
                  <i className="fas fa-sign-in-alt"></i>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
