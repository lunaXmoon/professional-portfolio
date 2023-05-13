import React from 'react';
import './about.css';
import ME from '../../assets/me.jpg';
import { AiFillExperiment } from 'react-icons/ai';
import { HiUsers } from 'react-icons/hi';
import { AiOutlineProject } from 'react-icons/ai';

export default function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <AiFillExperiment className='about__icon'/>
              <h5>Experiense</h5>
              <p className='small'>3+ Years Working</p>
            </article>
            <article className='about__card'>
              <HiUsers className='about__icon'/>
              <h5>Clients</h5>
              <p className='small'>300+ Worldwide</p>
            </article>
            <article className='about__card'>
              <AiOutlineProject className='about__icon'/>
              <h5>Projects</h5>
              <p className='small'>80+ Completed</p>
            </article>
          </div>

          <p className='about__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>

          <a href='#contact' className='btn btn-primary'>Let`s Talk</a>
        </div>
      </div>
    </section>
  )
}
