
export type Cursos = {
    id: number
    name: string
    description: string
    image: string
}

const cursos: Cursos[] = [
    {
        id: 1,
        name: "Teoría musical",
        description: "Analiza la construcción y organización de elementos sonoros en la música, como ritmo, melodía y armonía, proporcionando un marco conceptual para la composición y el análisis.",
        image: "https://i.pinimg.com/564x/b5/1f/a6/b51fa6799328da55d11814c4d1749384.jpg",
    },
    {
        id: 2,
        name: "Ableton inicial",
        description: "Software innovador para producción musical y presentaciones en vivo. Ofrece creación, edición y mezcla de música, destacando en música electrónica con su diseño de dos vistas y herramientas en tiempo real.",
        image: "https://www.sweetwater.com/sweetcare/media/2021/02/Ableton-Live-11-software-activation-instructions-featured-image.png",
    },
    {
        id: 3,
        name: "Nuevos cursos",
        description: "",
        image: "https://i.pinimg.com/564x/3e/64/fd/3e64fd11296422fc16b092fb09a8b65e.jpg",
    },
]


export default cursos;
