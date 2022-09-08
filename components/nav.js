import Image from "next/image"
import BtnFilled from "./btn-filled"



const Nav = () => {
    return (
        <div className="p-6 md:py-8 md:px-32 flex justify-between items-center">
                <Image height={84} width={69} src="https://treurgia.sirv.com/amd/logo_green_no_bg.png" />
            <BtnFilled text="Ma séance gratuite" />
        </div>
    )
}

export default Nav 