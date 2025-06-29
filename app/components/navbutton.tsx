

interface ButtonProp {
    text: string
}

export default function Button({ text }: ButtonProp) {
    return (
        <>
            <div className="flex   bg-white/30 backdrop-opacity-[0.5] ">

                <button className="text-base rounded-[4px] translate-y-1 font-sans  lg:px-5 py-2 mr-2 hover:bg-white cursor-pointer"> {text} </button>
            </div>
        </>
    )
}