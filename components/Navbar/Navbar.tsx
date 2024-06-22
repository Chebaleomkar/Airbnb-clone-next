"use client"

import { User } from ".prisma/client"
import Container from "../Container"
import Logo from "./Logo"
import Search from "./Search"
import UserMenu from "./UserMenu"
import React from "react"
import { safeUser } from "@/types"
import Categories from "./Categories"


const Navbar = ( {currentUser} : {currentUser?:safeUser }) => {
  

  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
        <div className="py-4 border-b-[1px]">
            <Container >
                <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                  <Logo />
                  <Search />
                  <UserMenu  currentUser={currentUser} />
                </div>
            </Container>
        </div>
        <Categories />
    </div>
  )
}

export default Navbar