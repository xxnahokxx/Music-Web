/* eslint-disable @next/next/no-img-element */
import { Cursos } from '@/data'
import React from 'react'




const Card = ({ data }: {data: Cursos}) => {
  const {name, description, image } = data
  return (
    <div className='mx-auto flex flex-col bg-teal-600 p-7 rounded gap-4 justify-center'>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{description}</p>

      <button className='px-20 py-2 bg-sky-600 text-white font-bold  rounded-md '>Detalles</button>
    </div>
  )
}

export default Card
