import { React, useState } from 'react'
import './ContactStyles.css'
import Hero from '../../components/hero/Hero'
import Footer from '../../components/footer/Footer'

import contactImg from '../../assets/imgs/2.jpg'

const Contact = () => {
  const [iframeLoaded, setIframeLoaded] = useState(true);

  return (
    <div>
      <Hero
        cName='hero mid'
        heroImg={contactImg}
        title='Contato'
      />

      <div className='contact'>
        <div className='contact-info'>
          <h2>Fale Conosco</h2>
          <p>Estamos sempre disponíveis em nossos meios de comunicação!</p>
          <div>
            <h3><i className='fa-solid fa-phone'></i>Telefone: </h3>
            <a href="tel:teste@gmail.com">teste@gmail.com</a>
          </div>
          <div>
            <h3><i className='fa-solid fa-envelope'></i>E-mail: </h3>
            <a href="mailto:agenciaumaideia@gmail.com">agenciaumaideia@gmail.com</a>
          </div>
          <div>
            <h3><i className='fa-solid fa-location-dot'></i>Endereço: </h3>
            <p>83 90000-0000</p>
          </div>
          <div className='social-networks'>
            <h3>Redes sociais: </h3>
            <a href='https://www.instagram.com/umaideia_/'><i className='fa-brands fa-square-instagram'></i></a>
            <a href='https://www.facebook.com/umaideiaagencia/'><i className='fa-brands fa-square-facebook'></i></a>
            <a href='/'><i className='fa-brands fa-linkedin'></i></a>
            <a href='https://api.whatsapp.com/send?phone=5583986264672&text=Ol%C3%A1,%20Ag%C3%AAncia%20Uma%20Ideia'><i className='fa-brands fa-square-whatsapp'></i></a>
          </div>
        </div>
        <div className='contact-map'>
          <h2>Como chegar até nós</h2>
          {iframeLoaded && (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509676!2d144.95373531590423!3d-37.8162797420116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f64bdb%3A0xb1a1b1b1a1a1a1a1!2sFederation+Square!5e0!3m2!1sen!2sau!4v1532584245643"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          )}
          {!iframeLoaded && (
            <button onClick={() => setIframeLoaded(true)}>Carregar Mapa</button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;