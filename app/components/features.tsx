

export default function Features() {
    return (
        <div  id="features" className="bg-white">

            <div className="flex justify-center w-full pt-8 mb-2">
                <button className="bg-gray-50 rounded-full text-xs p-2   w-28  font-medium border-2 border-gray-200 shadow-md  mb-2 hover:bg-white/30 backdrop-opacity-[0.5] cursor-pointer">KEY FEATURES</button>
            </div>

            <div className="flex justify-center mb-5 px-4 text-center">
                <p className="text-3xl font-serif">Powerful AI Voice Engine, Built<br /> for Real Use</p>
            </div>


            <div className="flex flex-col lg:flex-row justify-center items-center  px-4">
                <div className="bg-gradient-to-r from-slate-50 via-indigo-50 to-purple-50 p-2 mb-4 lg:mb-0 max-w-sm w-full h-[300px] flex flex-col items-center text-center md:pl-5 md:pr-5 rounded-[4px]">
                    <img src="mic1.png" className="h-7 w-7 border-2 border-gray-200 shadow-md bg-white" />
                    <h1 className="mb-5 mt-3 md:text-xl font-serif">Human-like Voice Generation</h1>
                    <p className="text-xs text-gray-500 pb-20 md:text-sm">Aunexa.ai uses advanced neural synthesis to deliver voices that sound  natural, expressive, and emotionally.</p>
                    <button className="bg-white rounded-[4px] font-sans text-xs p-3 border border-gray-300 shadow-md cursor-pointer lg:text-sm font-medium">Try Demo</button>

                </div>
                <div className="bg-gradient-to-r from-slate-50 via-indigo-50 to-purple-50  max-w-sm w-full h-[300px] flex justify-center items-center rounded-[4px]">
                    <img src="com.png" className="h-48 w-[350px]" />
                </div>
            </div>


            <div className="flex flex-col lg:flex-row justify-center items-center  mt-2 px-4">
                <div className="h-[300px] max-w-sm w-full pt-8 bg-gradient-to-r from-slate-50 via-indigo-50 to-purple-50 pl-2 rounded-[4px]">
                    <div className="flex flex-wrap justify-center gap-8  p-2">
                        <div className="h-24 w-36 bg-white rounded-sm shadow-xl flex flex-col justify-center transform -skew-y-2 border-2 border-gray-200">
                            <span><img src="iconspeaker.png" className="h-4 w-4 ml-3 mt-1 border-2 border-gray-200 shadow-md mb-2" /></span>
                            <span className="text-xs font-medium ml-2">Casual and Friendly</span>
                            <span ><img src="w2.png" className="h-8 w-24 pt-1" /></span>
                        </div>
                        <div className="h-24 w-36 bg-white rounded-sm  shadow-xl flex flex-col justify-center transform skew-y-4 border-2 border-gray-200">
                            <span><img src="star1.png" className="h-4 w-4 ml-3 mt-1 border-2 border-gray-200 shadow-md mb-2" /></span>
                            <span className="text-xs font-medium ml-2">Creative and Innovative</span>
                            <span ><img src="w2.png" className="h-8 w-24 pt-1" /></span>
                        </div>
                        <div className="h-24 w-36 bg-white rounded-sm  shadow-xl flex flex-col justify-center border-2 border-gray-200">
                            <span><img src="fireic.png" className="h-3 w-4 ml-3 mt-1 border-2 border-gray-200 shadow-md mb-2" /></span>
                            <span className="text-xs font-medium ml-2">Fiery and passionate</span>
                            <span ><img src="w2.png" className="h-8 w-24 pt-1" /></span>
                        </div>
                    </div>
                </div>


                <div className="bg-gradient-to-br from-gray-50 to-violet-50 p-2 mt-4 lg:mt-0 max-w-sm w-full h-[300px] flex flex-col items-center text-center rounded-[4px]">
                    <img src="mus.png" className="h-5 w-5 border-2 border-gray-200 shadow-md " />
                    <h1 className="font-serif text-xl mb-4 mt-2">Multiple Voice Styles & Tones</h1>
                    <p className="text-xs text-gray-500 pb-20 md:text-sm">Choose from conversational, professional, dramatic, or custom tones to match your brand or content style.</p>
                    <button className="bg-white rounded-[4px] font-sans text-xs p-3 border border-gray-300 shadow-md cursor-pointer lg:text-sm font-medium">Try Demo</button>
                </div>
            </div>


            <div className="flex flex-col lg:flex-row justify-center items-center  mt-4 px-4">
                <div className="bg-gradient-to-r from-slate-50 via-indigo-50 to-purple-50 p-2 max-w-sm w-full h-[300px] flex flex-col items-center text-center rounded-[4px] ">
                    <img src="paste.png" className="h-7 w-7 border-2 border-gray-200 shadow-md bg-white" />
                    <h1 className="font-serif mt-2 mb-4 text-xl">Real-Time Voice API</h1>
                    <p className="text-xs text-gray-500 pb-20 md:text-sm">Instantly generate and stream voice responses with ultra-low latency- perfect for assistants, bots, and voice-enabled apps.</p>
                    <button className="bg-white rounded-[4px] font-sans text-xs p-3 border border-gray-300 shadow-md cursor-pointer lg:text-sm font-medium ">Try Demo</button>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-violet-100 max-w-sm w-full h-[300px] flex justify-center items-center rounded-[4px]">
                    <img src="sound.jpg" className="h-52 w-[350px]" />
                </div>
            </div>


            <div className="flex flex-col lg:flex-row justify-center items-center  mt-4 px-4 pb-10 ">
                <div className="bg-gradient-to-br from-gray-100 to-violet-100 max-w-sm w-full h-[300px] flex justify-center items-center roundedd-[4px] ">
                    <img src="ball1.png" className="h-32 w-[250px]" />
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-violet-100 p-2 max-w-sm w-full h-[300px] flex flex-col items-center text-center rounded-[4px]">
                    <img src="brokencon.png" className="h-7 w-7 border-2 border-gray-200 shadow-md bg-white mb-2 " />
                    <h1 className="font-serif mt-2 mb-4 text-xl">Easy Integration</h1>
                    <p className="text-xs text-gray-500 pb-20 md:text-sm">Connect Aunexa.ai with your platform in minutes using flexible API & SDK support - no complex setup needed.</p>
                    <button className="bg-white rounded-[4px] font-sans text-xs p-3 border border-gray-300 shadow-md cursor-pointer lg:text-sm font-medium">Try Demo</button>
                </div>
            </div>


            <div className="text-center mt-10">
                <h1 className="text-4xl font-serif mb-5">Discover AI Voice as Your Daily<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Needs Assistant</h1>
                <div className="flex justify-center mb-10">
                    <button className="bg-gray-200 rounded-[4px] p-2"><span className="hover:bg-white text-xs rounded-[4px] font-medium p-1 md:text-sm"> &nbsp;for Creator & Media &nbsp;</span>&nbsp; <span className="text-sm text-gray-900 font-medium hover:bg-white rounded-[4px] p-1">for Developers</span> &nbsp;<span className="text-sm text-gray-900 font-medium p-1 hover:bg-white rounded-[4px]">for Enterprises &nbsp;</span></button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-start gap-6 px-4 pb-20">
                <div className="ml-4 md:ml-8 lg:ml-12">
                    <h1 className="font-serif text-xl md:text-2xl font-medium mb-3">Create Without Limits</h1>
                    <p className="text-sm text-gray-500 mb-5 md:text-xl">Whether you're a content creator, podcaster, or video editor - <br />Aunexa helps you turn scripts into lifelike voiceovers in seconds.</p>
                    <p className="flex"><span><img src="purpleline.png" className="h-4 w-5" /></span><span className="-translate-y-1 text-sm font-medium lg:text-sm"><span className="bg-gradient-to-b from-gray-50 to-purple-100 ">200+ AI voices across</span> 40+ languages</span></p>
                    <p className="flex"><span><img src="g.png" className="h-4 w-5" /></span><span className="-translate-y-1 text-sm text-gray-800">Multiple tones: narrative, dramatic, conversational</span></p>
                    <p className="flex"><span><img src="g.png" className="h-4 w-5" /></span><span className="-translate-y-1 text-sm text-gray-800">Instant Preview & export to MP3/WAV</span></p>
                    <p className="flex mb-5"><span><img src="g.png" className="h-4 w-5" /></span><span className="-translate-y-1 text-sm text-gray-800">Custom voice branding for your content</span></p>
                </div>
                <div className="pb-5">
                    <img src="voiceai.webp" className="h-56 w-80 ml-4 md:ml-10 lg:ml-16 bg-gray-50 backdrop-blur-lg rounded-md p-2" />
                </div>
            </div>
        </div>
    );
}
