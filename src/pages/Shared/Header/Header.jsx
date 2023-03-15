import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";


export default function Header() {
     const [navToggle, setNavToggle] = useState(false);

     const menuItem =
          <>
               <li>
                    <NavLink to={"/"}
                         className={({ isActive }) => `${isActive && "bg-primary text-[#e6e6e6]"} 
                         px-4 py-2 rounded-md transition-all capitalize`}
                    >
                         Home</NavLink>
               </li>
               <li>
                    <NavLink to={"/about"}
                         className={({ isActive }) => `${isActive && "bg-primary text-[#e6e6e6]"} 
                         px-4 py-2 rounded-md transition-all capitalize`}
                    >
                         About</NavLink>
               </li>
               <li>
                    <NavLink to={"/services"}
                         className={({ isActive }) => `${isActive && "bg-primary text-[#e6e6e6]"} 
                         px-4 py-2 rounded-md transition-all capitalize`}
                    >
                         Services</NavLink>
               </li>
               <li>
                    <NavLink to={"/contact"}
                         className={({ isActive }) => `${isActive && "bg-primary text-[#e6e6e6]"} 
                         px-4 py-2 rounded-md transition-all capitalize`}
                    >
                         Contact us</NavLink>
               </li>
               <li className={({ isActive }) => `${isActive && "bg-primary text-[#e6e6e6]"} 
                         px-4 py-2 rounded-md transition-all capitalize`}
               >
                    <Link to={"/login"}>Login</Link>
               </li>
               <li className="px-4 py-2 border border-primary text-white rounded-[8px] cursor-pointer ml-4">
                    <Link to={"#"} className="text-primary uppercase text-sm">book now</Link>
               </li>
          </>;


     return (
          <header className="w-full px-4 md:px-24 py-5 fixed top-0 z-50 bg-white">
               <nav className="flex items-center justify-between">
                    <div className="">
                         <h1>Clean Co.</h1>
                    </div>

                    {/* desktop navbar */}
                    <ul className="hidden md:inline-flex items-center text-gray text-base font-light">
                         {menuItem}
                    </ul>

                    {/* mobile navbar 768 */}
                    <div className="md:hidden relative">
                         <FiMenu size={30} className="cursor-pointer z-[999]"
                              onClick={() => setNavToggle(!navToggle)}
                         />

                         <ul className={`flex flex-col gap-3 items-center text-gray font-medium h-full 
                         bg-white w-[250px] fixed top-0 pt-10 z-[-1] transition-all 
                         ${navToggle ? "nav-shadow right-[0%]" : "-right-[100%]"}`}>
                              {menuItem}
                         </ul>
                    </div>
               </nav>
          </header>
     );
}
