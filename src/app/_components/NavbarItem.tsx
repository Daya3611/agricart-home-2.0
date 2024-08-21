import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

  import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
import Link from 'next/link'
import { title } from 'process'
import { Car, HomeIcon, InfoIcon, ListOrdered, ListOrderedIcon } from 'lucide-react'
import { Item, ItemIndicator } from '@radix-ui/react-select'
import { IconBrandProducthunt, IconTemperature } from '@tabler/icons-react'
  
  
function NavbarItem() {

    
  return (

    <div>
      <div className=" max-w-2xl mx-auto">
           
                <Collapsible>
                    <CollapsibleTrigger className="w-full bg-white   rounded-lg text-gray-800 hover:text-green-600  transition duration-300 ease-in-out py-3 px-4 text-left">
                    <Link href='/' className='flex gap-3 text-lg  font-bold'>
                      Home   
                    </Link>
                    </CollapsibleTrigger>
                    
                </Collapsible>
           
      </div>
      
      <div className=" max-w-2xl mx-auto">
            
                <Collapsible>
                    <CollapsibleTrigger className="w-full bg-white   rounded-lg text-gray-800 hover:text-green-700  transition duration-300 ease-in-out py-3 px-4 text-left flex gap-3 text-lg font-bold ">
                        About
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2  className='flex gap-3 ">
                      <div className="text-lg bg-gray-100 rounded-lg">
                        <div className=' hover:bg-green-600 hover:text-white rounded-lg p-2 '>
                        <a href='/introduction' className="flex gap-2">
                          
                         <h2 className='text-md text-black hover:text-white'>Introduction</h2>  
                        </a>
                        </div>
                        <div className=' hover:bg-green-600 hover:text-white rounded-lg p-2'>
                        <a href='/about' className="flex gap-2">
                          
                         <h2 className='text-md text-black hover:text-white'>About</h2>  
                        </a>
                        </div>
                        <div className=' hover:bg-green-600 hover:text-white rounded-lg p-2'>
                          <a href='/bod' className="flex gap-2">
                            
                            <h2 className='text-md text-black hover:text-white'>BOD</h2>  
                          </a>
                        </div>
                        <div className=' hover:bg-green-600 hover:text-white rounded-lg p-2'>
                          <a href='' className="flex gap-2">
                            
                            <h2 className='text-md text-black hover:text-white'>Logo</h2>  
                          </a>
                        </div>
                        <div className=' hover:bg-green-600 hover:text-white rounded-lg p-2'>
                          <a href='' className="flex gap-2">
                            
                            <h2 className='text-md text-black hover:text-white'>Brand</h2>  
                          </a>
                        </div>
                        <div className=' hover:bg-green-600 hover:text-white rounded-lg p-2'>
                          <a href='/staff' className="flex gap-2">
                            
                            <h2 className='text-md text-black hover:text-white'>Staff</h2>  
                          </a>
                        </div>
                        <div className=' hover:bg-green-600 hover:text-white rounded-lg p-2'>
                          <a href='' className="flex gap-2">
                            
                            <h2 className='text-md text-black hover:text-white'>Awards</h2>  
                          </a>
                        </div>
                        <div className=' hover:bg-green-600 hover:text-white rounded-lg p-2'>
                          <a href='' className="flex gap-2">
                            
                            <h2 className='text-md text-black hover:text-white'>Anual Reports</h2>  
                          </a>
                        </div>
                        <div className=' hover:bg-green-600 hover:text-white rounded-lg p-2'>
                          <a href='' className="flex gap-2">
                            
                            <h2 className='text-md text-black hover:text-white'>R & D</h2>  
                          </a>
                        </div>
                        <div className=' hover:bg-green-600 hover:text-white rounded-lg p-2'>
                          <a href='/projects' className="flex gap-2">
                            
                            <h2 className='text-md text-black hover:text-white'>Projects</h2>  
                          </a>
                        </div>
                        <div className=' hover:bg-green-600 hover:text-white rounded-lg p-2'>
                          <a href='' className="flex gap-2">
                            
                            <h2 className='text-md text-black hover:text-white'>Supports</h2>  
                          </a>
                        </div>
                        <div className=' hover:bg-green-600 hover:text-white rounded-lg p-2'>
                          <a href='' className="flex gap-2">
                            
                            <h2 className='text-md text-black hover:text-white'>Enviroment</h2>  
                          </a>
                        </div>
 
                      </div>
                        
                    </CollapsibleContent>
                </Collapsible>
           
      </div>

      <div className=" max-w-2xl mx-auto">
           
                <Collapsible>
                    <CollapsibleTrigger className="w-full bg-white   rounded-lg text-gray-800 hover:text-green-600  transition duration-300 ease-in-out py-3 px-4 text-left">
                    <Link href='https://shop.agricartfpc.com' className='flex gap-3 text-lg  font-bold'>
                     Products    
                    </Link>
                    </CollapsibleTrigger>
                    
                </Collapsible>
           
      </div>

      <div className=" max-w-2xl mx-auto">
            
                <Collapsible>
                    <CollapsibleTrigger className="w-full bg-white   rounded-lg text-gray-800 hover:text-green-700  transition duration-300 ease-in-out py-3 px-4 text-left flex gap-3 text-lg font-bold ">
                        Customers
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2  className='flex gap-3 ">
                      <div className="text-lg bg-gray-100 rounded-lg">
                        <div className=' hover:bg-green-600 hover:text-white rounded-lg p-2 '>
                        <a href='' className="flex gap-2">
                          
                         <h2 className='text-md text-black hover:text-green-600'>Companies</h2>  
                        </a>
                        </div>
                        <div className=' hover:bg-green-600 hover:text-white rounded-lg p-2'>
                        <a href='' className="flex gap-2">
                          
                         <h2 className='text-md text-black hover:text-green-600'>Organisations</h2>  
                        </a>
                        </div>
                        <div className=' hover:bg-green-600 hover:text-white rounded-lg p-2'>
                          <a href='' className="flex gap-2">
                            
                            <h2 className='text-md text-black hover:text-green-600'>Individuals</h2>  
                          </a>
                        </div>
                        
 
                      </div>
                        
                    </CollapsibleContent>
                </Collapsible>
           
      </div>

      <div className=" max-w-2xl mx-auto">
            
                <Collapsible>
                    <CollapsibleTrigger className="w-full bg-white   rounded-lg text-gray-800 hover:text-green-700  transition duration-300 ease-in-out py-3 px-4 text-left flex gap-3 text-lg font-bold ">
                        Farmers Center
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2  className='flex gap-3 ">
                      <div className="text-lg bg-gray-100 rounded-lg">
                        <div className=' hover:bg-green-600 hover:text-white rounded-lg p-2 '>
                        <a href='' className="flex gap-2">
                          
                         <h2 className='text-md text-black hover:text-green-600'>Facility</h2>  
                        </a>
                        </div>
                        <div className=' hover:bg-green-600 rounded-lg p-2'>
                        <a href='' className="flex gap-2">
                          
                         <h2 className='text-md text-black hover:text-green-600'>Plan</h2>  
                        </a>
                        </div>
                        <div className=' hover:bg-green-600 rounded-lg p-2'>
                          <a href='' className="flex gap-2">
                            
                            <h2 className='text-md text-black hover:text-green-600'>Become a member</h2>  
                          </a>
                        </div>
                        <div className=' hover:bg-green-600 rounded-lg p-2'>
                          <a href='' className="flex gap-2">
                            
                            <h2 className='text-md text-black hover:text-green-600'>Agricultural information</h2>  
                          </a>
                        </div>
                        <div className=' hover:bg-green-600 rounded-lg p-2'>
                          <a href='' className="flex gap-2">
                            
                            <h2 className='text-md text-black hover:text-green-600'>Weather</h2>  
                          </a>
                        </div>
                        <div className=' hover:bg-green-600 rounded-lg p-2'>
                          <a href='' className="flex gap-2">
                            
                            <h2 className='text-md text-black hover:text-green-600'>Innovator Farmers</h2>  
                          </a>
                        </div>
                        
 
                      </div>
                        
                    </CollapsibleContent>
                </Collapsible>
           
      </div>

      <div className=" max-w-2xl mx-auto">
           
                <Collapsible>
                    <CollapsibleTrigger className="w-full bg-white   rounded-lg text-gray-800 hover:text-green-600  transition duration-300 ease-in-out py-3 px-4 text-left">
                    <Link href='/' className='flex gap-3 text-lg  font-bold'>
                    Careers   
                    </Link>
                    </CollapsibleTrigger>
                    
                </Collapsible>
           
      </div>

      <div className=" max-w-2xl mx-auto">
           
                <Collapsible>
                    <CollapsibleTrigger className="w-full bg-white   rounded-lg text-gray-800 hover:text-green-600  transition duration-300 ease-in-out py-3 px-4 text-left">
                    <Link href='/' className='flex gap-3 text-lg  font-bold'>
                    Innovator farmers   
                    </Link>
                    </CollapsibleTrigger>
                    
                </Collapsible>
           
      </div>

      <div className=" max-w-2xl mx-auto">
           
                <Collapsible>
                    <CollapsibleTrigger className="w-full bg-white   rounded-lg text-gray-800 hover:text-green-600  transition duration-300 ease-in-out py-3 px-4 text-left">
                    <Link href='/contact' className='flex gap-3 text-lg  font-bold'>
                    Contact Us   
                    </Link>
                    </CollapsibleTrigger>
                    
                </Collapsible>
           
      </div>
    </div>
    


  )
}

export default NavbarItem
