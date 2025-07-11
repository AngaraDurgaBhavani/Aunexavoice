'use client'
import Spline from "@splinetool/react-spline"


export default function Home() {
  return (
    <main className="bg-[#f6edf7]  bg-gradient-to-l from-purple-200 via-pink-200 min-h-svh">


      <div className="pt-5 md:pt-10 lg:pt-20">
        <div className="flex justify-center"><button className="text-gray-500 bg-white/30 backdrop-opacity-[0.5] p-1 rounded-[15px] mt-10 text-sm hover:bg-gray-600 mb-5  cursor-pointer" > <span className="mr-1 hover:bg-white hover:text-gray-600 p-1 rounded-[4px] cursor-pointer"><b>New</b></span>Change your voice with AI </button></div><br />



        <div className="w-full flex justify-center">
          <div className="h-40 w-60 sm:h-60 sm:w-80 md:h-72 md:w-[484px] lg:h-96 lg:w-[784px]">
            <Spline scene="https://prod.spline.design/YZ2w6XulkpiBapaR/scene.splinecode"/>
            {/* <Spline scene="https://prod.spline.design/WNwDKuqVVc29zUti/scene.splinecode" /> */}
          </div>
        </div>


        <div className="text-black flex justify-center pt-15 pb-5 text-4xl md:text-6xl">
          <h2>AI Voice Generator <br /> &nbsp; &nbsp;&nbsp; with Aunexa</h2>
        </div>
        <div className="text-xs md:text-sm lg:text-xl text-gray-500 flex justify-center pt-3">
          <p>Create natural and intelligence voice interactions for <br /> assistants,voice actors, and real-time communications.</p>
        </div>
        <div className="flex justify-center mt-2">
          <button className="bg-black text-white mt-3 px-4 rounded-[5px] flex translate-x-2 py-2 font-sans"><span className="flex text-sm">Try it Now <img src="greater than sign.png" height={8} width={8} className="ml-1" /></span></button>
        </div>
        <div className="bg-[#f6edf7] bg-gradient-to-l from-purple-200 via-pink-200 h-10 w-full"></div>
      </div>

    </main>

  )
}
