interface ButtonProp{
    text : string
}


export default function Secondbutton({text} : ButtonProp){
return(
    <div className="flex ">
        <button className="text-gray-500 bg-white/30 backdrop-opacity-[0.5]  mr-2  text-xs rounded-[4px] translate-y-1 font-sans p-1 border hover:bg-purple-400 md:shadow border-gray-200 shadow-gray-400 cursor-pointer">{text}</button>
    </div>
)

}