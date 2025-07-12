'use client'
import Spline from "@splinetool/react-spline"


export default function Home() {
  return (
    <main className="bg-gradient-to-tr from-violet-200 via-fuchsia-100 to-pink-200 min-h-screen ">


      <div className="pt-1 md:pt-2">
        <div className="flex justify-center"><button className="text-gray-900 bg-white  hover:bg-white/30 backdrop-opacity-[0.5] p-1 rounded-full mt-10 text-sm  mb-3 gap-5 cursor-pointer md:text-xl" > <span className="mr-1  text-gray-900  p-1 rounded-full cursor-pointer"><b>New</b></span>Change your voice with AI </button></div><br />



        <div className="h-[450px]">
            <Spline 
              scene="https://prod.spline.design/1Z3cQPlS2SfswYiT/scene.splinecode"  
            />
        </div>


        <div className="text-black flex justify-center pt-5 pb-5 text-4xl md:text-6xl">
          <h2 className="font-serif">AI Voice Generator <br /> &nbsp; &nbsp;&nbsp; with Aunexa</h2>
        </div>
        <div className="text-xs md:text-sm lg:text-xl text-gray-500 flex justify-center pt-3">
          <p>Create natural and intelligence voice interactions for <br /> assistants,voice actors, and real-time communications.</p>
        </div>
        <div className="flex justify-center mt-2">
          <button className=" bg-black text-white mt-3 px-4 rounded-[6px] flex translate-x-2 py-3"><span className="flex text-sm cursor-pointer">Try it Now <img src="greater than sign.png" height={10} width={10} className="ml-2" /></span></button>
        </div>
      </div>

    </main>

  )
}
