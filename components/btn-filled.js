


const BtnFilled = ({text}) => {
    return (
        <a className="cursor-pointer relative rounded px-4 py-2 md:px-10 md:py-5 overflow-hidden group bg-primary relative hover:bg-gradient-to-r hover:from-primary hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
<span className="absolute right-0 w-4 h-16 md:w-8 md:h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
<span className="relative text-sm md:text-2xl">{text}</span>
</a>
    )
}

export default BtnFilled;