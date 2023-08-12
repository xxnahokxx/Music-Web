
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
        description: "Esta es la descripcion del curso 1",
        image: "https://picsum.photos/800/1000",
    },
    {
        id: 2,
        name: "Ableton inicial",
        description: "Esta es la descripcion del curso 2",
        image: "https://picsum.photos/800/1000",
    },
    {
        id: 3,
        name: "Curso 3",
        description: "Esta es la descripcion del curso 3",
        image: "https://picsum.photos/800/1000",
    },
]


export default cursos;
