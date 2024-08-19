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
    <div className='flex justify-between py-4 px-[50px] '>

      <h2 className='text-3xl font-bold z-50'>Agricat .</h2>

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
