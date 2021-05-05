import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="footer">
      <ul className="ft__socials">
        <li>
          <Link to="/#">
            <i className="fab fa-facebook"></i>
          </Link>
        </li>
        <li>
          <Link to="/#">
            <i className="fab fa-google"></i>
          </Link>
        </li>
        <li>
          <Link to="/#">
            <i className="fab fa-github"></i>
          </Link>
        </li>
        <li>
          <Link to="/#">
            <i className="fab fa-instagram"></i>
          </Link>
        </li>
      </ul>
      <ul className="ft__menus">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <span>|</span>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <span>|</span>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
      </ul>
      <ul className="ft__sign">
        <li>
          <span>TaroInJapan Copy&#9400; 2021</span>
        </li>
      </ul>
    </div>
  )
}
