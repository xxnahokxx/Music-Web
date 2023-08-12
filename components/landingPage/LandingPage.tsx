"use client"
import React from 'react'
import { Image } from "@nextui-org/image";
import { Button, Card } from '@nextui-org/react';
import Link from 'next/link';

const LandingPage = () => {
  //f8c8d4
  //fed0db
  //fbd0d9
  return (
    <>
      <Card className='relative w-full h-screen bg-rose-600 flex flex-col-reverse'>
        <div className='px-6 w-full h-screen md:absolute top-0 z-20 bg-black/30 flex flex-col items-start md:justify-end gap-12 py-6'>
          <div className='col-span-2 text-[25px] self-start '>
            <h1>Bienvenidos a mi página web</h1>
            <h2 className='font-bold text-[40px]'>Hola soy M!Ki</h2>
          </div>
          <div className='flex gap-3'>
            <Link href="/cursos">
              <Button color='danger'>Cursos</Button>
            </Link>
            <Link href="/musica">
              <Button color='danger'>Musica</Button>
            </Link>
          </div>
          <div className='w-[100%] md:w-[50%] text-justify text-tiny'>
            <p>Soy músico de Córdoba, Argentina. Me dedico a cantar, componer canciones y producir música. Te invito a que puedas escuchar mí primer single  <b>Picasso </b> en todas las plataformas digitales.
              Además te cuento que soy profesor de canto y de Teoría musical.
              Aquí están mis redes sociales para que no te pierdas ningún contenido.
              Gracias por visitar la página.</p>
          </div>
        </div>
        <div>
        </div>
        <Image removeWrapper src="https://res.cloudinary.com/parcelas/image/upload/v1691799021/imagenLanding_j5rwbm.jpg" alt="perfil" className='object-cover' />

      </Card>
      {/* <div className='flex flex-row justify-between text-slate-700 drop-shadow-md shadow-violet-600 text-3xl '>
        <div className='mt-7 m-2 '>
          <h1>Bienvenidos a mi página web</h1>
          <h2>Hola soy M!Ki</h2>
        </div>
        <Image className='h-[300px] w-[300px] mr-0' isZoomed src="https://res.cloudinary.com/parcelas/image/upload/v1691799021/imagenLanding_j5rwbm.jpg" alt="perfil" />
      </div>
      <br />
      <hr className='border-black' />
      <div className='text-slate-500 text-2xl'>
        <p>Soy músico de Córdoba, Argentina. Me dedico a cantar, componer canciones y producir música. Te invito a que puedas escuchar mí primer single  <b>Picasso </b> en todas las plataformas digitales.
          Además te cuento que soy profesor de canto y de Teoría musical.
          Aquí están mis redes sociales para que no te pierdas ningún contenido.
          Gracias por visitar la página.</p>
      </div>
      <br />
      <div className='flex flex-row justify-stretch text-center'>
        <div className='h-16 w-20 rounded-medium m-5 p-4 border-black "transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 duration-200 '>
          <button>
            <a href="/cursos">Cursos</a>
          </button>
        </div>
        <div className='h-16 w-20 rounded-medium m-5 p-4 border-black "transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 '>
          <button>
            <a href="/musica">Música</a>
          </button>
        </div>

      </div> */}

    </>
  )
}

export default LandingPage
