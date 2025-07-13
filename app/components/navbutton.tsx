

interface ButtonProp {
    text: string
}

export default function Button({ text }: ButtonProp) {
    return (
        <div>
            <div className="flex bg-white/30 backdrop-opacity-[0.5]  pb-2 py-3">

                <button className="text-base  -translate-y-1 font-sans ml-2 lg:px-5 py-2 mr-2 hover:bg-white hover:rounded-[4px] cursor-pointer md:text-xl"> {text} </button>
            </div>
        </div>
    )
}