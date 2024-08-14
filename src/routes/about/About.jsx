import React from 'react'
import './AboutStyles.css'
import Hero from '../../components/hero/Hero'
import InfoContainer from '../../components/containers/info/InfoContainer'
import ImageCard from '../../components/imagecard/ImageCard'
import Footer from '../../components/footer/Footer'

import data from './aboutData.json'

import aboutImg from '../../assets/imgs/3.jpg'
import infoImg1 from '../../assets/imgs/1.jpg'
import infoImg2 from '../../assets/imgs/2.jpg'

import infoImg6 from '../../assets/imgs/6.jpg'
import infoImg8 from '../../assets/imgs/8.jpg'
import infoImg9 from '../../assets/imgs/9.jpg'
import infoImg10 from '../../assets/imgs/10.jpg'

const About = () => {

  const teamImages = [infoImg6, infoImg8, infoImg9, infoImg10]
  const teamCardColor = ['primary', 'secondary', 'tertiary', 'quaternary']

  return (
    <div>
      <Hero
        cName='hero mid'
        heroImg={aboutImg}
        title='Sobre nós'
      />

      <div className='about-container'>
        <InfoContainer
          sessionTitle='Nossa História'
          sessionText='Conheça um pouquinho sobre a gente'
          cName='info-content'
          textTitle='Como começamos'
          textContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          img1={infoImg1}
          img2={infoImg2}
          url='/sobre'
          buttonIcon='fa-solid fa-arrow-pointer'
        />

        <InfoContainer
          cName='info-content about'
          textTitle='Nossa Missão'
          textContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          img1={infoImg1}
          url='/sobre'
          buttonIcon='fa-solid fa-arrow-pointer'
        />

        <InfoContainer
          cName='info-content about right'
          textTitle='Nossos Valores'
          textContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          img1={infoImg2}
          url='/sobre'
          buttonIcon='fa-solid fa-arrow-pointer'
        />

        <div className='about-info'>
          <h2>Nossa Equipe</h2>
          <p>Conheça os talentos que fazem da nossa empresa</p>

          <div className='team'>
            {teamImages.map((image, index) => 
              <ImageCard key={index} cName='image-card about' src={image} alt={index} color={teamCardColor[index]}
              title={data[index].title} description={data[index].description}/>
            )}
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default About