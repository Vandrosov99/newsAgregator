import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  const getDate = () => {
    return new Date().getFullYear();
  };
  return (
    <div className='footer'>
      <div className='footer-info'>All Rights Reserved {getDate()}</div>
      <div className='links'>
        <div className='text'>Find me here</div>
        <div className='links-icons'>
          <li className='links-icons__item'>
            <SocialIcon network='instagram' fgColor='#ff5a01' />
          </li>
          <li className='links-icons__item'>
            <SocialIcon network='github' url='http://github.com/Vandrosov99' />
          </li>
          <li className='links-icons__item'>
            <SocialIcon network='twitter' />
          </li>
        </div>
      </div>
    </div>
  );
}
