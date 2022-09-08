
import Image from "next/image"
import BtnFilled from "./btn-filled"

const Perso = () => {

    return (
        <>
        <div className="flex flex-col space-y-10 px-6 md:px-32 mt-20 md:mt-40 overflow-hidden">
            <h1 className="font-bold text-3xl md:text-4xl font-head text-black">
                Ton Propre site, <br/>
                avec ton nom, tes photos et tes projets...
            </h1>
            <div className="flex">
            <div className="flex flex-col">
                <div className="flex space-x-5 mb-8 items-center">
                    <div className="w-3 h-3 bg-primary"></div>
                    <h1 className="text-lg md:text-2xl font-copy w-full md:w-2/3">
                        Ton propre site site optimisé 
                        pour les moteurs de recherche, 
                        comme ca les gens arriveront à te 
                        trouver sur google facilement. 
                    </h1>
                </div>
                <div className="flex space-x-5 mb-8 items-center">
                    <div className="w-3 h-3 bg-primary"></div>
                    <h1 className="text-lg md:text-2xl font-copy w-full md:w-2/3">
                        On va créer et optmiser tes profils 
                        linkedin et instagram pour que tu puisse 
                        apparaitre dans les bonne recherche des recruteurs, 
                        et pour que tu puisse trouver des clients 
                        facilements. 
                    </h1>
                </div>
            </div>
            <div className="hidden md:block relative top-10 left-40 -z-10">
                <Image height={819} width={929} src="https://treurgia.sirv.com/amd/porto.png" />
            </div>
            </div>
        </div>
        <div className="mt-6 md:mt-10 px-6 md:px-32">
            <BtnFilled text={"Ma séance gratuite"} />
        </div>
        </>

    )
}

export default Perso