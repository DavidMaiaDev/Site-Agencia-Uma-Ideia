import React from 'react'
import InfoContainer from '../../components/containers/info/InfoContainer'
import CardContainer from '../../components/containers/card/CardContainer'
import Carousel from '../../components/carousel/Carousel'
import PortfolioContainer from '../../components/containers/portfolio/PortfolioContainer'
import Footer from '../../components/footer/Footer'

import './HomeStyles.css'

import infoImg1 from '../../assets/imgs/2.jpg'
import infoImg2 from '../../assets/imgs/3.jpg'
import infoImg3 from '../../assets/imgs/1.jpg'
import infoImg4 from '../../assets/imgs/4.jpg'
import infoImg5 from '../../assets/imgs/5.jpg'
import infoImg6 from '../../assets/imgs/6.jpg'
import infoImg10 from '../../assets/imgs/10.jpg'
import infoImg8 from '../../assets/imgs/8.jpg'
import infoImg9 from '../../assets/imgs/9.jpg'

const Home = () => {
  const sliderImages = [infoImg1, infoImg2, infoImg3]
  const photographImages = [infoImg1, infoImg2, infoImg3, infoImg4, infoImg5, infoImg6, infoImg10, infoImg8, infoImg9, infoImg1, infoImg2, infoImg3]
  const graphicDesignImages = [infoImg5, infoImg4, infoImg2, infoImg3, infoImg8, infoImg1, infoImg10, infoImg9, infoImg5, infoImg3, infoImg1, infoImg2]
  const sliderTexts = ['no design', 'na fotografia', 'no audiovisual']

  return (
    <div>
      <Carousel images={sliderImages} title={'Uma ideia'} sliderTexts={sliderTexts}></Carousel>

      <CardContainer />

      <InfoContainer
        sessionTitle='Nossa História'
        sessionText='Conheça um pouquinho sobre a gente'
        cName='info-content'
        textTitle='Pirpirituba, PB'
        textContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        img1={infoImg1}
        img2={infoImg2}
        buttonText='Saiba mais'
        buttonIcon='fa-solid fa-arrow-pointer'
      />

      <PortfolioContainer
         portfolioTitle='Porfólio'
         portfolioDescription='Vem conferir nossos trabalhos'
         photographyTitle='Fotografia'
         graphicDesignTitle='Design Gráfico'
         photographImages={photographImages}
         graphicDesignImages={graphicDesignImages}
         moreTitle='Quer ver mais?'
         moreDescription='Você pode entrar em nosso perfil do Instagram ou fazer o download dos nossos portfólios'
         instagramUrl='https://www.instagram.com/umaideia_/'
         instagramButtonText='Instagram'
         photographyUrl='https://drive.google.com/file/d/1qcwyzBHfiwThV8Rrab_snGLDbnc5m5Tf/view'
         photographyButtonText='Fotografia'
         graphicDesignUrl='https://drive.google.com/file/d/116nokkI0gI1fz34uTLcUdMDmwXHhVqK_/view'
         graphicDesignButtonText='Design Gráfico'
      />

      <Footer/>
    </div>
  )
}

export default Home