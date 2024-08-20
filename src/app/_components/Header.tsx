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
    <div className='flex justify-between py-4 px-[50px] z-50 fixed top-0 left-0 right-0 bg-white shadow-md'>

      <h2 className='text-3xl font-bold '>Agricat .</h2>

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
      


    </div>
  )
}

export default Header
