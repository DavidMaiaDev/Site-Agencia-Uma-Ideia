import React from 'react'
import { Link } from 'react-router-dom'

import './FooterStyles.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div>
          <h1>Uma Ideia</h1>
          <p>A ideia certa que faz a diferença!</p>
        </div>
        <div>
          <a href='https://www.instagram.com/umaideia_/'><i className='fa-brands fa-square-instagram'></i></a>
          <a href='https://www.facebook.com/umaideiaagencia/'><i className='fa-brands fa-square-facebook'></i></a>
          <a href='/'><i className='fa-brands fa-linkedin'></i></a>
          <a href='https://api.whatsapp.com/send?phone=5583986264672&text=Ol%C3%A1,%20Ag%C3%AAncia%20Uma%20Ideia'><i className='fa-brands fa-square-whatsapp'></i></a>
        </div>
      </div>
      <div className='bottom'>
        <div>
          <h4>Website</h4>
          <Link to='/'>
            <a>Home</a>
          </Link>
          <Link to='/sobre'>
            <a>Sobre</a>
          </Link>
          <Link to='/servicos'>
            <a>Serviços</a>
          </Link>
          <Link to='/contato'>
            <a>Contato</a>
          </Link>
        </div>
        <div>
          <h4>Redes Sociais</h4>
          <a href="https://www.instagram.com/umaideia_/">Instagram</a>
          <a href="https://www.facebook.com/umaideiaagencia/">Facebook</a>
          <a href="./">LinkedIn</a>
          <a href="https://api.whatsapp.com/send?phone=5583986264672&text=Ol%C3%A1,%20Ag%C3%AAncia%20Uma%20Ideia">Whastapp</a>
        </div>
        <div className='last'>
          <h4>Contate-nos</h4>
          <a href="tel:83900000000">Tel: 83 90000-0000</a>
          <a href="mailto:agenciaumaideia@gmail.com">E-mail: agenciaumaideia@gmail.com</a>
        </div>
        <div className='last'>
          <h4>Outros</h4>
          <a href="./">Termos de Serviço</a>
          <a href="./">Política de Privacidade</a>
          <a href="./">Licença</a>
        </div>
      </div>
      <p>© Copyright 2024 – Todos os direitos reservados: Agência Uma Ideia</p>
    </div>
  )
}

export default Footer