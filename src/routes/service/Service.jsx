import './ServiceStyles.css';
import React from 'react';
import Hero from '../../components/hero/Hero';
import serviceImg from '../../assets/imgs/night.jpg';
import Button from '../../components/button/Button';
import Footer from '../../components/footer/Footer';
import ServiceInfoCard from '../../components/serviceinfocard/ServiceInfoCard';
import PlanCard from '../../components/plancard/PlanCard';

import servicesData from './servicesData.json';
import plansData from './plansData.json';

const Service = () => {
  return (
    <div>
      <Hero
        cName='hero mid'
        heroImg={serviceImg}
        title='Serviços'
      />

      <div className='service-container'>
        <h2>Nossos Serviços</h2>
        <p>Conheça os nossos serviços</p>

        <div className='service-info-card-container'>
          {servicesData.map((service, index) => (
            <ServiceInfoCard 
              key={index}
              iconClass={service.iconClass}
              title={service.title}
              services={service.services}
            />
          ))}
        </div>

        <div className='plan-container'>
          <h2>Nossos Planos</h2>
          <p>Oferecemos os melhores planos para com a necessidade do cliente</p>

          <div className='plan-card-container'>
            {plansData.slice(0, 4).map((plan, index) => (
              <PlanCard
                key={index}
                title={plan.title}
                details={plan.details}
              />
            ))}
          </div>
          <div className='plan-card-last'>
            <PlanCard
              title={plansData[4].title}
              details={plansData[4].details}
            />
          </div>
        </div>

        <p>Quer mais informações? Nosso whatsapp está sempre disponível!</p>
        <Button
          url='./'
          buttonCName='button service'
          buttonText='Fale Conosco'
          buttonIcon='fa-brands fa-whatsapp'
        />
      </div>

      <Footer />
    </div>
  );
}

export default Service;
