
import Image from "next/image"
import Link from "next/link"
import BtnFilled from "./btn-filled"

const Rocket = () => {

    return (
        <>
            <div className="flex">
                <div className="hidden md:block relative top-52 right-20 w-2/4 -z-10">
                        <Image height={900} width={958} src="https://treurgia.sirv.com/amd/rocket.png" />
                    </div>
                <div className="flex flex-col space-y-10 px-6 md:px-10 mt-20 md:mt-40 overflow-hidden">
                    <h1 className="font-bold text-3xl md:text-6xl font-head text-black">
                        LA Formation qui a changé des carrières....
                    </h1>
                    <h1 className="font-bold text-xl md:text-3xl font-head text-black">
                        Inscrit toi aujourd’hui et commence à créer des site web pour des sociétés
                        en quelque semaine.
                    </h1>
                    <div className="flex space-x-4">
                        <p className="mt-2 md:mt-6 font-copy text-gray-700 text-xl w-full md:w-3/4">
                            <span className="font-bold">Peut être que tu ne peux à payer d’un seul coup</span> <br/> 
                            pas de soucis !! <br/> 
                            <span className="font-bold">on a des facilités de paiment</span> <br/>
                        </p>
                    </div>
                </div>
            </div>
            <Link href="#contact">
                <div className="mt-10 md:mt-20 px-6 md:px-96">
                    <BtnFilled text="Ma séance gratuite" />
                </div>
            </Link>

            
        </>
        
        
    )
}

export default Rocket