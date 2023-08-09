/* eslint-disable @next/next/no-img-element */
import React from 'react'

const LandingPage = () => {
  return (
    <div>
      <h1>Bienvenidos a mi página web</h1>
      <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure quas quae, iste, sit aspernatur repellendus mollitia cum, eaque ex illo consequatur suscipit adipisci? Ratione animi voluptatibus laudantium incidunt atque distinctio!</h2>
      <img src="../../assets/imagenLanding.jpg" alt="perfil" />
      <div>
        <button>
          <a href="/cursos"></a>
        </button>
        <button>
          <a href="/music"></a>
        </button>
      </div>
    </div>
  )
}

export default LandingPage
