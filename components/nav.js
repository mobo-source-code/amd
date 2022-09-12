import Image from "next/image"
import Link from "next/link"
import BtnFilled from "./btn-filled"



const Nav = () => {
    return (
        <div className="p-6 md:py-8 md:px-32 flex justify-between items-center">
                <Image className="cursor-pointer" height={84} width={69} src="https://treurgia.sirv.com/amd/logo_green_no_bg.png" />
            <Link href="#contact">
                <BtnFilled text="06-97-91-50-51" />
            </Link>
            
        </div>
    )
}

export default Nav 