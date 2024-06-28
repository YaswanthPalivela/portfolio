import React from 'react'
import { Technologies } from '../Constants'
import Tilt from "react-parallax-tilt";

const Tech = () => {
  return (
    <section className='h-auto w-screen p-6 m-6'>
      <div className='flex flex-col gap-5 '>
        <h1 className='text-2xl text-white font-poppins font-semibold '>Tech</h1>
        <h2 className='text-lg font-poppins text-white '>Technologies that i have learned and gained Hands On experiance</h2>
      </div>
      <div className='grid  grid-cols-8 justify-center items-center my-4 mx-2 gap-7 p-8'>
        {
          Technologies.map((tech) => (
            <Tilt>
              <div className='flex justify-center items-center' key={tech.id}>
              <img src={tech.url} className='h-28 cursor-pointer object-contain hover:border-2 border-blue-500 rounded-lg' />
            </div>
            </Tilt>
          ))
        }
      </div>

    </section>
  )
}

export default Tech