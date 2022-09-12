import Image from "next/image"


const Footer = () => {
    return (
    <div className="w-full px-10 py-0 md:py-5 flex flex-col md:flex-row justify-center md:justify-between bg-primary h-24 items-center">
            <p className="text-gray-700 font-head text-md">
            +212 6 97 91 50 51
        </p>
        
        <p className="hidden md:block text-gray-700 font-head font-light text-md">
            L'Académie des métiers digitaux S.A.R.L
        </p>
        <p className="hidden md:block text-gray-700 font-head text-md">
            AMD
        </p>
    </div>
    )
}

export default Footer