import React, { useState } from 'react'
import { Link } from 'react-router'
import { FaBars, FaRegHeart } from "react-icons/fa";
import { IoCartOutline, IoHomeOutline, IoPersonOutline, IoStopOutline } from 'react-icons/io5';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { MdOutlinePermContactCalendar } from 'react-icons/md';
import { FcAbout } from 'react-icons/fc';

function Header() {

  const [toggleActive, isToggleActive] = useState(true);

  const menuToggle = () => {
    isToggleActive(false);
  }

  const closeMenuToggle = () => {
    isToggleActive(true);
  }

  return (
    <div className="relative">
        <div className="w-full bg-black text-white text-center font-jost py-2">
          <p className="text-base">
            🚚 Free shipping on orders over <span className="text-red-500">50$</span> 🌟
          </p>
        </div>

        <div className="w-full bg-[rgb(255,255,255)] py-4 shadow-xl">
          <div className=" w-full max-w-7xl mx-auto flex justify-between items-center px-4">
            <div className=" flex justify-center items-center gap-3">
              <div className=" ">
                <FaBars onClick={menuToggle} size={20} className="md:hidden"/>
              </div>
              <p className="text-xl font-medium">KH</p>
            </div>
            
            <header className={`${toggleActive ? '-left-100' : 'left-0'} absolute top-0 transition-all duration-200`}>
                <div  className="bg-gray-800 text-white w-80 h-screen p-5">
                    <nav  onClick={closeMenuToggle} className="flex flex-col gap-4">
                        <div className="w-full flex justify-end">
                            <IoIosCloseCircleOutline onClick={closeMenuToggle} size={50}/>
                        </div>
                        <div className="flex gap-2 items-center w-full hover:bg-gray-300/20 rounded-xl p-2">
                            <IoHomeOutline />
                            <Link className=" " to="/">Home</Link>
                        </div>
                        <div className="flex gap-2 items-center w-full hover:bg-gray-300/20 rounded-xl p-2">
                            <IoCartOutline />
                            <Link className=" " to="/products">Product</Link>
                        </div>
                        <div className="flex gap-2 items-center w-full hover:bg-gray-300/20 rounded-xl p-2">
                            <FcAbout />
                            <Link className=" " to="/about">About</Link>
                        </div>
                        <div className="flex gap-2 items-center w-full hover:bg-gray-300/20 rounded-xl p-2">
                            <MdOutlinePermContactCalendar />
                            <Link className=" " to="/contact">Contact</Link>
                        </div>
                  
                    </nav>

                </div>
            </header>

            <header className="hidden md:block">
              <div className="">
                <nav className="flex gap-5">
                  <Link className="hover:underline decoration-yellow-600 aria-[current=page]:underline" to="/">Home</Link>
                  <Link className="hover:underline decoration-yellow-600" to="/products">Products</Link>
                  <Link className="hover:underline decoration-yellow-600" to="/contact">Contact</Link>
                  <Link className="hover:underline decoration-yellow-600" to="/about">About</Link>
                </nav>
              </div>
            </header>

            <div className="flex gap-3">
              <div>
                <FaRegHeart size={20} className="hover:text-yellow-600 cursor-pointer"/>
              </div>
              <div>
                <IoPersonOutline size={20} className="hover:text-yellow-600 cursor-pointer"/>
              </div>
              <div>
                <RiShoppingBag3Line size={20} className="hover:text-yellow-600 cursor-pointercvcc"/>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Header