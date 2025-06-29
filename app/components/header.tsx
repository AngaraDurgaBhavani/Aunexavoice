'use client'
import { useState } from "react";
import Button from "./navbutton";


import { FiMenu } from "react-icons/fi";
import Link from "next/link";
export default function Header() {

  const [open, setOpen] = useState(false);


  return (
    <header>
      <div className="bg-[#f6edf7]  bg-gradient-to-l from-purple-200 via-pink-200 h-11">
        <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] py-0.5 flex-wrap w-full">
          <span className="flex">
            <img src="voice.jpg" width={25} height={20} />
            <span><p className="ml-1.5">Aunexa.AI</p></span></span>

          <FiMenu className="lg:hidden block h-6 w-6 cursor-pointer" onClick={() => setOpen(!open)} />

          <nav className={`${open ? "block" : "hidden"} w-full lg:flex lg:items-center  lg:w-auto`}>
            <div className="lg:flex lg:justify-center">
              <Link href="/">
                <Button text="Home" />
              </Link>
              <Link href="/product">
                <Button text="Product" />
              </Link>
              <Link href="/features">
                <Button text="Features" />
              </Link>
              <Link href="/pricing">
                <Button text="Pricing" />
              </Link>
              <Link href="/about">
                <Button text="About" />
              </Link>
              <div className="pt-1">
                <button className="bg-white text-sm text-gray-600 rounded-[4px] translate-y-1 ml-10 p-1 cursor-pointer hover:bg-violet-100">Get  Started</button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}


