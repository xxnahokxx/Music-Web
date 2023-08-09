
const Music = () => {
  return (
    <div className="flex flex-col h-3/6 w-[50%] justify-center m-auto pt-[10%]" >
      <h1>Nombre de la cancion</h1>
      <div>
      <iframe 
      width="650" 
      height="355" 
      src="https://www.youtube.com/embed/GJLxxB1hofI" 
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen></iframe>
      </div>
      <div>
        Redes
      </div>
    </div>
  )
}

export default Music
