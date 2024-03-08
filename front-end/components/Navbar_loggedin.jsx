"use client";

import React, {useEffect, useState} from "react"
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "@/components/Button"
import Logo from "../public/logo2.svg"
import MenuBars from "../public/menu.svg"
import { relative } from "path";
import DropdownButton from "./DropdownButton";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src={Logo} width={200} height={relative}  alt="logo"/>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden transition-all hover:font-bold">
        <DropdownButton 
          buttonText="My Account" 
          items={[
            { label: 'Profile', href:'/profile' },
            { label: 'My bin', href: '/home' },
            { label: 'Logout', href: '/logout' }
          ]}
        />
      </div>

      <Image 
        src={MenuBars}
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  )
}


export default Navbar


