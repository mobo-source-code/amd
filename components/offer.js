import Image from "next/image"
import Link from "next/link"
import BtnFilled from "./btn-filled"
import BtnOutlined from "./btn-outlined"

const Offer = () => {

    return (
        <div className="flex flex-col space-y-10 px-6 md:px-32 p-10 mt-40 overflow-hidden bg-primary">
            <h1 className="font-bold text-3xl md:text-6xl font-head text-black mt-20">
                Une Offre Incroyable !!
            </h1>
            <h1 className="font-bold text-3xl md:text-6xl font-copy text-red-700">
                UNE séance Gratuite !!
            </h1>
            <div className="flex space-x-40">
                    <p className="text-white text-3xl md:text-4xl font-head mt-6">
                        Essayer la formation !! <br/>
                        <br/>
                        Payer seulement si vous voulez continuer !! 
                    </p>
                    <div className="hidden md:block relative -top-52 left-32 w-1/4">
                        <Image height={937} width={892} src="https://treurgia.sirv.com/amd/ice.png" />
                    </div>
            </div>
            <Link href="#contact">
                <div>
                    <BtnOutlined text={"Séance Gratuite"} />
                </div>
            </Link>

            
        </div>
    )
}

export default Offer