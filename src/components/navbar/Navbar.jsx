import React, { useState } from 'react'
import './NavbarStyles.css'
import data from './navbarData.json'
import logo from '../../assets/imgs/logo.png'
import { Link } from 'react-router-dom'
import Button from '../button/Button'

const Navbar = () => {

  const [clicked, setClicked] = useState(false);

  const mobileMenuIcon = () => {
    return (
      <div onClick={() => setClicked(!clicked)} className='mobile-menu-icons'>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
    )
  }

  return (
    <nav className='navbar-items'>
      <div className='navbar-logo'>
        <img src={logo} alt='Uma Ideia Logo'></img>
      </div>
      {mobileMenuIcon()}
      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {data.map((item, index) => (
          <li key={index}>
            <Link className='nav-links' to={item.url}>
              <i className={item.icon}></i>
              {item.title}
            </Link>
          </li>
        ))}
        <li>
          <Button
            url='https://api.whatsapp.com/send?phone=5583986264672&text=Ol%C3%A1,%20Ag%C3%AAncia%20Uma%20Ideia'
            buttonCName='button nav'
            buttonText='Whatsapp'
            buttonIcon='fa-brands fa-whatsapp'
          />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar