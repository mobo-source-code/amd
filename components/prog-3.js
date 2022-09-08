import Image from "next/image"
import BtnFilled from "./btn-filled"

const Prog3 = () => {

    return (
        <div className="flex flex-col space-y-10 px-6 md:px-32 mt-20 md:mt-40 overflow-hidden">
            <h1 className="font-bold text-3xl md:text-6xl font-copy text-black">
                Javascript
            </h1>
            <p className="bg-white text-gray-700 text-lg font-copy w-full md:w-4/5 mt-6 rounded-xl">
                langage de programmation de scripts principalement employé dans les pages web 
                interactives et à ce titre est une partie essentielle des applications web Avec les 
                langages HTML et CSS JavaScript est au cœur des langages utilisés par les développeurs web3 
                Une grande majorité des sites web l'utilisent, et la majorité des navigateurs 
                web disposent d'un moteur JavaScript5 pour l'interpréte
            </p>
            <div className="flex space-x-14">
            <div className="flex flex-col">
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Définition du Javascript</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Les variables</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Les opérateurs</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Les fonctions</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Les conditions</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Les Loops</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Les méthodes</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Les fonctions Callbacks</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Les Primitives Javascript</h1>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Les Dates Javascript</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Les Expression régulière</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Les méthodes String</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Les méthodes Array</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Les Maths sur Javascript</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Les types d’erreur et d’autre concept</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">DOM</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Animation</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Manipulation de la page</h1>
                </div>
            </div>
            <div className="hidden md:block relative top-10 left-72 w-2/4 -z-10">
                <Image height={403} width={576} src="https://treurgia.sirv.com/amd/js.png" />
            </div>
            </div>
        </div>
        
    )
}

export default Prog3