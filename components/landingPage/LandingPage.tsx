import React from 'react'
import { Image } from "@nextui-org/image";

const LandingPage = () => {
  return (
    <div>
      <div className='flex flex-row justify-between text-slate-700 drop-shadow-md shadow-violet-600 text-3xl '>
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

      </div>

    </div>
  )
}

export default LandingPage
