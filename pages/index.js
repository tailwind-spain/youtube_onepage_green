// https://www.youtube.com/watch?v=frE-_JR_jR4&t=539s

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const menus = ["Home", "Delivery", "Pricing" ,"About", "Contact"]
  const activeMenu = "Home"
  return (
      <div id="template">
          <div className='w-full min-h-screen font-sans text-gray-900'>
              <nav className="flex items-center justify-between
                px-24 py-8 max-w-screen-xl mx-auto">
                  <Link href="/" 
                    className='text-4xl font-bold trackind-wide'>Organ
                      <span className='text-green-500'>o</span></Link>
                  

                  <div className='flex items-center space-x-14'>
                    <ul className='flex items-center space-x-8'>
                    {
                    menus.map((menu) => (
                            <li className={`text-xl font-medium group
                              ${menu === activeMenu ? 'text-green-500' : ''}`}
                              key={menu}><Link href="/">{menu}</Link>
                              <div 
                                className="h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full duration-300 ease-out"
                              />
                              </li>
                      ))}
                    </ul>
                  </div>

                  <button className='flex justify-center items-center h-13 px-7 font-medium
                  text-white bg-green-500 rounded-xl hover:shadow-primary transition-shadow duration-300'>Get Started</button>
                  
              </nav>

              <div className='flex justify-between px-24 py-8 max-w-screen-xl mx-auto'>
                      <div className='max-w-md'>
                          <span>100% Organic Food</span>
                          <h1>Healthy Life</h1>
                          <p>lorem sasas qsasa</p>
                      </div>

              </div>
          </div>
      </div>
  )
}
