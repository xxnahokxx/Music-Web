import React from 'react'
import Image from 'next/image'
import img from '@/assets/imagenLanding.jpg'

const LandingPage = () => {
  return (
    <div>
      <div className='flex flex-row text-slate-700 drop-shadow-md shadow-violet-600 text-3xl '>
        <h1>Bienvenidos a mi página web</h1>
        <Image className='h-[150px] w-[150px] rounded-md m-auto' src={img} alt="perfil" />
      </div>
      <br />
      <hr className='border-black' />
      <div className='text-slate-500 text-2xl'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure quas quae, iste, sit aspernatur repellendus mollitia cum, eaque ex illo consequatur suscipit adipisci? Ratione animi voluptatibus laudantium incidunt atque distinctio!</p>
      </div>
      <br/>
      <div className='flex flex-row m-auto justify-center'>
        <div className='h-[40px] w-[70px] rounded-xl m-5 p-4 border-black bg-slate-400'>
          <button>
            <a href="/cursos">Cursos</a>
          </button>
        </div>
        <div className='h-[40px] w-[70px] rounded-xl m-5 p-4 border-black bg-slate-400'>
          <button>
            <a href="/musica">Música</a>
          </button>
        </div>
      </div>

    </div>
  )
}

export default LandingPage
