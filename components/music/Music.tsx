
const Music = () => {
  return (
    <div className=" h-full bg-slate-400 w-[100%] pt-[10%]" >
      <h1>Nombre de la cancion</h1>
      <iframe
        className="w-[90%] h-[56%] mx-auto my-5 "
      src="https://www.youtube.com/embed/GJLxxB1hofI"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen></iframe>
      <div>
        Redes
      </div>
    </div>
  )
}

export default Music
