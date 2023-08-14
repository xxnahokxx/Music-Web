"use client"
import { usePathname } from "next/navigation"
import React from "react";
import { Image } from "@nextui-org/image";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";

export default function App() {

  const pathName = usePathname();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      name: "Música",
      url: "/musica"
    },
    {
      name: "Cursos",
      url: "/cursos"
    }
  ];


  if (pathName !== "/") {

    return (
      <Navbar className="[&>header]:max-w-[100%] justify-end md:px-10 fixed font-serif font-bold text-shadow" onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Link href="/" color="danger">
              <Image width={50} height={30} src="https://res.cloudinary.com/parcelas/image/upload/v1691811735/98e7b5544edf10c55b2e1a627873548c_acmbnz.jpg" alt="musica" />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem >
            <Link color="foreground" href="/cursos" aria-current="page">
              Cursos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/musica">
              Musica
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="self-end">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.name}-${index}`}>
              <Link
                color={
                  index === 2 ? "primary" : index === menuItems.length - 1 ? "foreground" : "danger"
                }
                className="w-full"
                href={item.url}
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    );
  }

}
