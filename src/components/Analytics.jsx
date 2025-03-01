import React from 'react'
import king from '../assets/king.jpg.jpeg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[400px] mx-auto my-4' src={king} alt="King" />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>DATA ANALYSIS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nemo, maxime temporibus saepe sequi in blanditiis cumque ut ipsa ducimus illum, corporis consequatur laudantium sint. Repudiandae eius veritatis ipsa ipsum neque est delectus qui aspernatur! Molestiae, assumenda odio veniam nam mollitia ad officiis nesciunt?</p>
          <button className='bg-[black] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a]'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics