import React from 'react';
import './services.css';
import { BsCheckLg } from 'react-icons/bs';

export default function Services() {
  return (
    <section id='service'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum some text for block</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum some text for block</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum some text for block</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum some text for block</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum some text for block</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum some text for block</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum some text for block</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className='service'>
          <div className='service__head'>
            <h3>WEb Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum some text for block</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum some text for block</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum some text for block</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum some text for block</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum some text for block</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum some text for block</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum some text for block</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum some text for block</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum some text for block</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum some text for block</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum some text for block</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum some text for block</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum some text for block</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum some text for block</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}
