

import Secondbutton from "../components/secondbutton";

export default function Page() {
    return (
        <div className="min-h-screen bg-[#f6edf7] bg-gradient-to-r from-pink-150 via-purple-200 pt-10 px-4 md:px-10">

            <div className="flex items-center gap-4 md:gap-6 mb-6 lg:ml-52">
                <img src="t.png" className="h-6 w-6 sm:h-7 sm:w-7 rounded-[4px]" />
                <img src="rout.png" className="h-12 w-14 sm:h-14 sm:w-16 rounded-[4px]" />
                <img src="speak.jpg" className="h-6 w-6 sm:h-7 sm:w-7 rounded-[5px]" />
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-between lg:ml-52">

                <div className="lg:w-1/2 mb-10 lg:mb-0">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-black">
                        Try free text to <br /> speech
                    </h1>
                    <p className="text-gray-500 mt-5 text-sm sm:text-base lg:text-lg leading-relaxed">
                        Transform your text into lifelike speech. Choose from<br />
                        over 2000 ultra realistic voices in 80+ languages,<br />
                        saving time and cost on voiceover artists.
                    </p>
                </div>


                <div className="w-full lg:w-[480px] xl:w-[520px] bg-gradient-to-br from-slate-50 to-purple-200 rounded-2xl border border-gray-200 shadow-md p-4 lg:mr-20 mt-6 lg:mt-0">

                    <div className="flex flex-wrap gap-2 mb-4">
                        <Secondbutton text="Arabic" />
                        <Secondbutton text="Arabic" />
                        <Secondbutton text="Arabic" />
                        <Secondbutton text="Arabic" />
                    </div>


                    <div className="mt-2">
                        <h2 className="text-gray-500 text-sm pl-1 mb-1">Type your Text</h2>
                        <div className="border-2 border-gray-200 shadow-sm rounded-xl p-2 bg-white text-xs sm:text-sm text-gray-700 leading-relaxed">
                            Hello everyone, I am aunexa.ai. An AI voice generator platform that can assist you in your daily life. Aunexa.ai is available in over 40 languages, try it now!
                        </div>
                    </div>


                    <div className="mt-4">
                        <div className="flex justify-between text-gray-500 text-sm mb-2">
                            <h2>Voiceover</h2>
                            <h2>Style and Carrying</h2>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <button className="bg-white flex items-center text-xs sm:text-sm p-2 rounded-[4px] w-full sm:w-[48%]">
                                <img src="walk.jpg" className="h-6 w-6 mr-2" />
                                <span className="flex-1">Walker</span>
                                <img src="menu.png" className="h-6 w-6" />
                            </button>
                            <button className="bg-white flex items-center text-xs sm:text-sm p-2 rounded-[4px] w-full sm:w-[48%]">
                                <span className="flex-1">Formal and Professional</span>
                                <img src="menu.png" className="h-6 w-6" />
                            </button>
                        </div>
                    </div>


                    <div className="mt-5">
                        <button className="bg-black text-white flex items-center justify-center text-xs sm:text-sm p-2 rounded-[4px] w-full">
                            <img src="sparkle.png" className="h-5 w-5 mr-2" />
                            <span>Generate Voice</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

