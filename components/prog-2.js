
import Image from "next/image"

const Prog2 = () => {

    return (
        <div className="flex flex-col space-y-10 px-6 md:px-32 mt-20 md:mt-40 overflow-hidden">
            <h1 className="font-bold text-3xl md:text-6xl font-copy text-black">
                CSS3
            </h1>
            <p className="bg-white text-gray-700 text-lg font-copy w-full md:w-4/5 mt-6 rounded-xl">
                Feuille de style de cascade, le language qu’on 
                utilise pour ajouter du style et du design au contenu HTML qu’on a écrit auparavant. 
            </p>
            <div className="flex space-x-4">
            <div className="hidden md:block relative top-10 right-60 w-1/4 -z-10">
                <Image height={683} width={484} src="https://treurgia.sirv.com/amd/css.png" />
            </div>
            <div className="flex flex-col">
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Créer un fichier CSS</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Tester le fichier CSS</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Les types de selecteurs</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Les Classes et les ID</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Pseudo Sélécteurs</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Les propriétés</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Les couleurs</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">La couleur du text</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Les couleurs en Fond d’écran</h1>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Images et Lien en CSS</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Opacité, Transparence etc…</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Les Dégradés</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Les unités</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">La Manipulation du text</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Font Style, Families, Bolding etc…</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">CSS Box, Margin, Padding...</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">FlexBox et Grid</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Transitions et Animation</h1>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Prog2