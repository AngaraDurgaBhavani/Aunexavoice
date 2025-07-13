'use client'
import { useState } from "react";
import Button from "./navbutton";


import { FiMenu } from "react-icons/fi";
import Link from "next/link";
export default function Header() {

  const [open, setOpen] = useState(false);


  return (

    <header className="pt-3 pb-5" >
      <div className="h-14">
        <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] py-0.5 flex-wrap w-full ">
          <span className="flex">
            <img src="voice.jpg" width={25} height={20} />
            <span><p className="ml-1.5 md:text-2xl">Aunexa.AI</p></span></span>

          <FiMenu className="lg:hidden block h-6 w-6 cursor-pointer" onClick={() => setOpen(!open)} />

          <nav className={`${open ? "block" : "hidden"} w-full lg:flex lg:items-center lg:w-auto`}>
            <div className="lg:flex lg:justify-center rounded-[4px]">
              <Link href="/#">
                <Button text="Home" />
              </Link>
              <Link href="/#product">
                <Button text="Product" />
              </Link>
              <Link href="/#features">
                <Button text="Features" />
              </Link>
              <Link href="/#pricing">
                <Button text="Pricing" />
              </Link>
              <Link href="/#about">
                <Button text="About" />
              </Link>
              <div className="pt-1">
                <button className="bg-white text-sm text-gray-800 rounded-[4px] translate-y-[-3px] ml-10 md:ml-20 px-4 py-2 cursor-pointer hover:bg-violet-100 md:text-xl">Get  Started</button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}


