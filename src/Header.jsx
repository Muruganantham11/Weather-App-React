import React from 'react'

const Header = ({title}) => {
  return (
    <div>
      <header>
        <h1 className='font-bold text-2xl text-center pt-2 pb-7'>{title}</h1>
      </header>
    </div>
  )
}

export default Header
