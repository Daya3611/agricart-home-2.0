import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'
import NavbarItem from './NavbarItem'
import { HammerIcon, MenuIcon } from 'lucide-react'

function Header() {
  return (
    <nav className='flex justify-between py-4 px-[50px] z-50 fixed top-0 left-0 right-0 bg-white border-b'>

      <h2 className='text-xl font-bold sm:text-lg md:text-2xl '>
        {/* <img src="./img/logo2.png" alt="Agricart Farmers Producer Company" className='w-[150px]' /> */}
        <a href="/">Agricart</a>
      </h2>

      <Sheet>
        <SheetTrigger><MenuIcon className='font-bold'/></SheetTrigger>
        <SheetContent>
          <SheetHeader>
            {/* <SheetTitle>Home</SheetTitle> */}
            <SheetDescription>
              <NavbarItem/>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      


    </nav>
  )
}

export default Header
