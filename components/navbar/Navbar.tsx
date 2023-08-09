"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from "next/navigation"

const Navbar = () => {

  const pathname = usePathname()


  if (pathname !== "/") {
    return (
      <div className='flex justify-between  mx-auto py-5 px-7 bg-emerald-700 text-white font-bold fixed w-full top-0'>
        <div>
          logo
        </div>
        <div className=''>
          <ul className='flex gap-5'>
            <Link href={"/"}>
              <li>Inicio</li>
            </Link>
            <Link href={"/musica"}>
              <li>Música</li>
            </Link>
            <Link href={"/cursos"}>
              <li>Cursos</li>
            </Link>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navbar
