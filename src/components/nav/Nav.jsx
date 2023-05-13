import React, { useState} from 'react';
import './nav.css';
import { AiFillHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BsJournalBookmarkFill } from 'react-icons/bs';
import { RiServiceLine } from 'react-icons/ri';
import { AiOutlineMessage } from 'react-icons/ai';

export default function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav className='nav'>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><BsJournalBookmarkFill/></a>
      <a href='#service' onClick={() => setActiveNav('#service')} className={activeNav === '#service' ? 'active' : ''}><RiServiceLine/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage/></a>
    </nav>
  )
}
