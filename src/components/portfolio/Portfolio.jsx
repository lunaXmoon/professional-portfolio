import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/img-1.jpg';
import IMG2 from '../../assets/img-2.png';
import IMG3 from '../../assets/img-3.jpg';
import IMG4 from '../../assets/img-4.jpg';
import IMG5 from '../../assets/img-5.jpg';
import IMG6 from '../../assets/img-6.jpg';

const data = [
  {
    id: 1, 
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://github.com'
  }, 
  {
    id: 2, 
    image: IMG2,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://github.com'
  }, 
  {
    id: 3, 
    image: IMG3,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 4, 
    image: IMG4,
    title: 'Maintaining tasks and tracking progress',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 5, 
    image: IMG5,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 6, 
    image: IMG6,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://github.com'
  }
]

export default function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title}/>
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank'>GitHub</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
          )
        })}
      </div>
    </section>
  )
}
