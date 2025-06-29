
export default function About() {
  return (
    <div className="bg-gradient-to-r from-violet-200 to-pink-200 min-h-[90vh] flex items-center">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full px-4 lg:px-36 py-2">

        <div className="text-center lg:text-left mb-6 lg:mb-0">
          <h1 className="text-3xl md:text-4xl font-serif mb-2">
            From Scripts to Speech <br /> Instantly.
          </h1>
          <p className="text-sm text-gray-500 mb-4">
            Whether you're a creator, developer, or enterprise – Aunexa gives <br className="hidden md:inline" />
            you the voice tools to do more, faster.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
            <button className="bg-black text-white text-sm px-4 py-2 rounded shadow hover:bg-violet-400 cursor-pointer">
              Get Started
            </button>
            <p className="text-sm text-gray-700">Talk to Sales</p>
          </div>
        </div>


        <div className="w-full max-w-md">
          <img src="bal.png" alt="Illustration" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}





