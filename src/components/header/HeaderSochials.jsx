import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsDribbble} from 'react-icons/bs';

export default function HeaderSochials() {
  return (
    <div className='header__socials'>
        <a href='https://linedin.com' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com' target='_blank'><BsGithub/></a>
        <a href='https://dribble.com' target='_blank'><BsDribbble/></a>
    </div>
  )
}
