import React from 'react'

const Banner = ({title,subtitle,children}) => {
  return (
    <div className='banner'>
        <h1>{title}</h1>
        <hr style={{border:'1px solid #af9a7d',width:'100px'}}/>
        <div className='subtitle'>
            <p>{subtitle}</p>
            {children}
        </div>
      
    </div>
  )
}

export default Banner
