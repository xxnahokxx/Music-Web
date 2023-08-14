/* eslint-disable @next/next/no-img-element */
import { Cursos } from '@/data'
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react"




const CardSection = ({ data }: { data: Cursos }) => {
  const { name, description, image } = data
  return (
    <Card isFooterBlurred className="w-full h-screen [&>div>div]:hover:opacity-100 [&>div>button]:hover:opacity-100 transition-opacity duration-500">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <h4 className="text-white/90 font-medium text-xl text-shadow">{name}</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 bg-rose-300 w-100% h-full object-contain"
        src={image}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 transition-opacity duration-500">
        <div className="flex flex-grow gap-2 items-center opacity-0 transition-opacity duration-500">
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">{description}</p>
          </div>
        </div>
        <Button radius="full" size="sm" className='opacity-0 transition-opacity duration-500'><a href="https://wa.me/3543692522" target="_blank" rel="noopener noreferrer">
          Contacto
        </a></Button>
      </CardFooter>
    </Card>
  )
}

export default CardSection
