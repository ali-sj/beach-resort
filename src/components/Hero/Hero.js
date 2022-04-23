import React from 'react'
import SearchBox from '../SearchBox'

const Hero = ({hero,children}) => {
  return (
    <div>
      <SearchBox/>

        <header className={hero} >
        {children}

      
    </header>
  
    </div>
  )

}

export default Hero
