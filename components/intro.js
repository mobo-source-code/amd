import Image from "next/image"
import Link from "next/link";
import BtnFilled from "./btn-filled";
import Nav from "./nav";


const Intro = () => {
    return (
        <>
        <div className="overflow-hidden md:h-screen">
            <div className="hidden h-0 md:block md:h-screen w-full md:w-1/2 bg-lighter rounded-bl-big md:absolute left-1/2 -z-10"></div>
            <Nav />
            <h1 className="w-full mt-6 p-6 md:px-32 font-bold text-sm md:text-md font-head text-primary">Tu est Etudiants ou Jeunes Diplomés ?</h1>
            <h1 className="z-10 px-6 md:px-32 mt-0 md:mt-0 text-5xl md:text-7xl font-bold font-head">Deviens Développeur Web</h1>
            <h1 className="z-10 px-6 md:px-32 mt-4 md:mt-4 text-5xl md:text-7xl font-bold font-head">Lance ta Carrière</h1>
            <p className="mt-4 md:mt-0 font-copy text-gray-700 text-xl w-full md:w-2/3 p-6 md:px-32">
                Il te faut un ordinateur, <br/> 
                une connexion internet et 4 heures par semaine. <br/>
                En 4 heures par semaines, et en 1 mois et demi <br/> 
                tu lancera enfin ta carrière. <br/>
                C’est ce qu’on te promet.
            </p>
            <Link href="#sol">
                <div className="cursor-pointer px-4 md:px-32 mt-4 mb-6 md:-mb-2 md:mt-2">
                    <BtnFilled text={"Savoir Comment..."} />
                </div>
            </Link>
            
                <div className="hidden md:block relative -top-2/4 left-2/3">
                        <Image height={409} width={461} src="https://treurgia.sirv.com/amd/girl-h-5.png" />
                </div>
            
        </div>
        </>
    )
}

export default Intro;