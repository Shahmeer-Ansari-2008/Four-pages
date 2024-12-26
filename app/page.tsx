

import React from 'react';
import Link from 'next/link';



export default function Home() {
  return (
    <div className="p-0 m-0 no-underline list-none box-border ">
      <div className="main bg-cover bg-center h-[800px] block" >
    <nav className="bg-blue-950 h-[80px] w-[100%]">
    <label className= "text-white text-[40px] leading-[80px] p-[100px] font-serif font-bold logo max-lg:text-[30px] max-lg:pl-[50px] ">3rd Assignment</label>

     
      <ul className="flex justify-end mr-[20px] left-[-100%] text-center">
        <li className="leading-[80px] m-[5px] block m-[50px 0] leading-[30px] mt-[-80px] ">
        <Link className="text-white text-base py-2 px-3.5 rounded-sm uppercase text-[20px] hover:bg-white  hover:text-blue-950 active: font-bold underline " href="/">
  Home
</Link>
        </li>
        <li className="leading-[80px] mx-[5px] block m-[50px 0] leading-[30px] mt-[-80px]">
          <Link className="text-white text-base py-2 px-3.5 rounded-sm uppercase text-[16px]  hover:bg-white hover:text-blue-950"rel="stylesheet" href="/about">
          About
          </Link>
        </li>
        <li className="leading-[80px] m-[5px] block m-[50px 0] leading-[30px] mt-[-80px] ">
        <Link className="text-white text-base py-2 px-3.5 rounded-sm uppercase text-[16px] hover:bg-white  hover:text-blue-950" href="/contact">
          Contact
        </Link>
        </li>
      </ul>
    </nav>
  <p className="text-center text-[40px] text-blue-950 mt-[100px]">
  AssalamOAlaikum! <br />
  It's my third Assignment. <br />
   I hope you like it. <br /> 
   Next time InshaAllah <br />
  I will make new and more <br />
  Interesting Assignments. 
  </p>


    <div>

    <footer className="bg-blue-950 text-white py-6 mt-[145px]" >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} My Website. All Rights Reserved.You can vist my LinkedIn and Github accounts. </p>
         
        </div>

        {/* Social Media Links */}
        <div className="mt-4 flex justify-center space-x-6">
          <Link
            href="https://www.linkedin.com/in/shahmeer-ahmed-5b750b33a/"
            className="text-white  hover:bg-white  hover:text-blue-950 hover:font-bold"
          >
          LinkedIn
          </Link>
          
          <Link
            href="https://Github/Shahmeer-Ansari-2008.com"
            className="text-white hover:bg-white hover:text-blue-950 hover:font-bold"
          >
           Github
         </Link>
        </div>
      </div>
    </footer>
    </div>
    </div>
    </div>
  
  )
}