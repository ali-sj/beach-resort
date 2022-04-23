import React from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

const Services = () => {
    const services=[
        {
            icons:<FaCocktail/>,
            title:'free Cocktail',
            info:'  lorem ojpofjdpnbijilfjboobifdniljnofibjnkfghiunfkhbidfh'
        },
        {
            icons:<FaHiking/>,
            title:'free Hicking',
            info:'  lorem ojpofjdpnbijilfjboobifdniljnofibjnkfghiunfkhbidfh'
        },
        {
            icons:<FaShuttleVan/>,
            title:'free ShuttleVan',
            info:'  lorem ojpofjdpnbijilfjboobifdniljnofibjnkfghiunfkhbidfh'
        },
        {
            icons:<FaBeer/>,
            title:'free Beer',
            info:'  lorem ojpofjdpnbijilfjboobif bidfh'
        },
    ]
    
  return (
    <section className='services'>
        <Title title='services'/>
        <div className=' services-center'>
            {services.map(({icons,info,title},index)=>{
                return <article key={index} className='service'>
                    <span>{icons}</span>
                    <h6>{title}</h6>
                    <p>{info}</p>
                </article>
            })}
        </div>
    
    </section>
  )
}

export default Services
