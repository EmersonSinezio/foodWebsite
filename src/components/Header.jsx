import React from 'react'

function Header() {
  return (
    <div className='header'>
        <a href="/"><h1 className='headerTitle'><span>F</span>oody</h1></a>
        <button><a href="/about">Sobre</a></button>
    </div>
  )
}

export default Header