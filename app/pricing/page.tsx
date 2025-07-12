
export default function Pricing() {
    return (

        
            <div className="bg-gradient-to-bl from-gray-50 to-purple-100 min-h-screen pt-8">
                <div className="flex justify-center mb-10">
                    <button className="bg-white rounded-full text-xs p-2 px-1 py-1 font-mono border-2 border-gray-200  shadow-md w-16 mb-5 mt-2 cursor-pointer  hover:bg-purple-100">PRICING</button>
                </div>
                <p className="text-4xl font-serif flex justify-center mb-5 md:text-6xl">Simple Plans That Scale With <br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Your Voice Needs </p>
                <p className="text-sm text-gray-400 flex justify-center mb-2 md:text-xl">Choose a plan that fits your workflow - whether you're creating solo,<br /> developing voice-enabled apps, or running enterprise-level deployments.</p>
           

        <div className="flex justify-center pt-15 pb-6 px-4">
            <div className="flex flex-col md:flex-row gap-6 items-center">
               
                <div className="bg-gradient-to-bl from-gray-50 to-purple-100 rounded-xl border-2 border-gray-200 shadow-md w-72 p-4 py-5">
                    <div className="flex items-center mb-5">
                        <img src="free.png" className="h-4 w-4 mr-2 mt-1" />
                        <h1 className="text-xl">FREE</h1>
                    </div>
                    <div className="flex items-center mb-4">
                        <img src="dollar.png" className="h-6 w-6 mr-1" />
                        <img src="zer.png" className="h-6 w-6" />
                        <button className="ml-2 bg-white rounded-2xl text-xs border border-gray-200 px-2 py-1 shadow-md hover:bg-purple-100 cursor-pointer">per Month</button>
                    </div>
                    <p className="text-xs text-gray-400 mb-3 hover:bg-purple-100">Great for creators getting started.</p>
                    <div className="bg-white rounded p-5 mb-6">
                        {[
                            "5,000 characters/month",
                            "5 voice styles",
                            "10 languages",
                            "Standard quality output",
                            "Limited API access",
                            "Personal-use license"
                        ].map((feature, idx) => (
                            <p key={idx} className="flex items-start text-sm text-gray-500 mb-1">
                                <img src="tick.png" className="h-3 w-3 mt-[6px] mr-2" />
                                {feature}
                            </p>
                        ))}
                    </div>
                    <button className="text-xs text-white bg-black w-full py-2 rounded cursor-pointer">Get Started for Free</button>
                </div>

                
                <div className="bg-gradient-to-bl from-gray-50 to-purple-100 rounded-xl border-2 border-gray-200 shadow-md w-72 p-4 py-5">
                    <div className="flex items-center mb-5">
                        <img src="crown.png" className="h-4 w-4 mr-2 mt-1" />
                        <h1 className="text-xl">PRO</h1>
                    </div>
                    <div className="flex items-center mb-4">
                        <img src="dollar.png" className="h-6 w-6 mr-1" />
                        <img src="thir.png" className="h-6 w-6" />
                        <button className="ml-2 bg-white rounded-2xl text-xs border border-gray-200 px-2 py-1 shadow-md hover:bg-purple-100 cursor-pointer">per Month</button>
                    </div>
                    <p className="text-xs text-gray-400 mb-3">Perfect for professionals and businesses.</p>
                    <div className="bg-white rounded p-5 mb-6">
                        {[
                            "5,000 characters/month",
                            "5 voice styles",
                            "10 languages",
                            "Standard quality output",
                            "Limited API access",
                            "Personal-use license"
                        ].map((feature, idx) => (
                            <p key={idx} className="flex items-start text-sm text-gray-500 mb-1">
                                <img src="tick.png" className="h-3 w-3 mt-[6px] mr-2" />
                                {feature}
                            </p>
                        ))}
                    </div>
                    <button className="text-xs text-white bg-black w-full py-2 rounded cursor-pointer ">Get Started for Free</button>
                </div>
            </div>
        </div>
         </div>
    );
}





