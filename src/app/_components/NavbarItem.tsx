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
                        <div className=' hover:bg-green-300 rounded-lg p-2 '>
                        <a href='' className="flex gap-2">
                          
                         <h2 className='text-md text-black hover:text-green-600'>Introduction</h2>  
                        </a>
                        </div>
                        <div className=' hover:bg-green-300 rounded-lg p-2'>
                        <a href='' className="flex gap-2">
                          
                         <h2 className='text-md text-black hover:text-green-600'>Introduction</h2>  
                        </a>
                        </div>
                        <div className=' hover:bg-green-300 rounded-lg p-2'>
                          <a href='' className="flex gap-2">
                            
                            <h2 className='text-md text-black hover:text-green-600'>BOD</h2>  
                          </a>
                        </div>
                        <div className=' hover:bg-green-300 rounded-lg p-2'>
                          <a href='' className="flex gap-2">
                            
                            <h2 className='text-md text-black hover:text-green-600'>Logo</h2>  
                          </a>
                        </div>
                        <div className=' hover:bg-green-300 rounded-lg p-2'>
                          <a href='' className="flex gap-2">
                            
                            <h2 className='text-md text-black hover:text-green-600'>Brand</h2>  
                          </a>
                        </div>
                        <div className=' hover:bg-green-300 rounded-lg p-2'>
                          <a href='' className="flex gap-2">
                            
                            <h2 className='text-md text-black hover:text-green-600'>Staff</h2>  
                          </a>
                        </div>
                        <div className=' hover:bg-green-300 rounded-lg p-2'>
                          <a href='' className="flex gap-2">
                            
                            <h2 className='text-md text-black hover:text-green-600'>Awards</h2>  
                          </a>
                        </div>
                        <div className=' hover:bg-green-300 rounded-lg p-2'>
                          <a href='' className="flex gap-2">
                            
                            <h2 className='text-md text-black hover:text-green-600'>Anual Reports</h2>  
                          </a>
                        </div>
                        <div className=' hover:bg-green-300 rounded-lg p-2'>
                          <a href='' className="flex gap-2">
                            
                            <h2 className='text-md text-black hover:text-green-600'>R & D</h2>  
                          </a>
                        </div>
                        <div className=' hover:bg-green-300 rounded-lg p-2'>
                          <a href='' className="flex gap-2">
                            
                            <h2 className='text-md text-black hover:text-green-600'>Projects</h2>  
                          </a>
                        </div>
                        <div className=' hover:bg-green-300 rounded-lg p-2'>
                          <a href='' className="flex gap-2">
                            
                            <h2 className='text-md text-black hover:text-green-600'>Supports</h2>  
                          </a>
                        </div>
                        <div className=' hover:bg-green-300 rounded-lg p-2'>
                          <a href='' className="flex gap-2">
                            
                            <h2 className='text-md text-black hover:text-green-600'>Enviroment</h2>  
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
                        <div className=' hover:bg-green-300 rounded-lg p-2 '>
                        <a href='' className="flex gap-2">
                          
                         <h2 className='text-md text-black hover:text-green-600'>Companies</h2>  
                        </a>
                        </div>
                        <div className=' hover:bg-green-300 rounded-lg p-2'>
                        <a href='' className="flex gap-2">
                          
                         <h2 className='text-md text-black hover:text-green-600'>Organisations</h2>  
                        </a>
                        </div>
                        <div className=' hover:bg-green-300 rounded-lg p-2'>
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
                        <div className=' hover:bg-green-300 rounded-lg p-2 '>
                        <a href='' className="flex gap-2">
                          
                         <h2 className='text-md text-black hover:text-green-600'>Facility</h2>  
                        </a>
                        </div>
                        <div className=' hover:bg-green-300 rounded-lg p-2'>
                        <a href='' className="flex gap-2">
                          
                         <h2 className='text-md text-black hover:text-green-600'>Plan</h2>  
                        </a>
                        </div>
                        <div className=' hover:bg-green-300 rounded-lg p-2'>
                          <a href='' className="flex gap-2">
                            
                            <h2 className='text-md text-black hover:text-green-600'>Become a member</h2>  
                          </a>
                        </div>
                        <div className=' hover:bg-green-300 rounded-lg p-2'>
                          <a href='' className="flex gap-2">
                            
                            <h2 className='text-md text-black hover:text-green-600'>Agricultural information</h2>  
                          </a>
                        </div>
                        <div className=' hover:bg-green-300 rounded-lg p-2'>
                          <a href='' className="flex gap-2">
                            
                            <h2 className='text-md text-black hover:text-green-600'>Weather</h2>  
                          </a>
                        </div>
                        <div className=' hover:bg-green-300 rounded-lg p-2'>
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
                    <Link href='/' className='flex gap-3 text-lg  font-bold'>
                    Contact Us   
                    </Link>
                    </CollapsibleTrigger>
                    
                </Collapsible>
           
      </div>
    </div>
    


  )
}

export default NavbarItem
