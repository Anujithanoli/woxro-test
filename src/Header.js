import React from 'react'
import './Header.css'
function Header () {
  return (
    <nav>
    <div className='header'>
      <p className='head'>Epic Games : An American video game and software developer and publisher based in Cary, North Carolina.</p>
    </div>
    <div><img className='cross' src="./images/cross.png" alt="cross" /></div>
  </nav>
  )
}

export default Header;
