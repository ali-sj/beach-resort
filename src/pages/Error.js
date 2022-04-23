import React from 'react'
import Banner from '../components/Banner'
import Hero from '../components/Hero/Hero'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <Hero hero='defaulthero'>
      <Banner title='404' subtitle='page not found'>
        <Link to='/' className='btnn-primary'>
          return home
        </Link>
      </Banner>

    </Hero>
  )
}

export default Error
