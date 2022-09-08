import Image from "next/image"
import BtnFilled from "./btn-filled"

const Prog = () => {

    return (
        <div className="flex flex-col space-y-10 px-6 md:px-32 mt-40 overflow-hidden">
            <h1 className="font-bold text-4xl md:text-6xl font-head text-black">
                Ce que tu vas apprendre
            </h1>
            <h1 className="font-bold text-3xl md:text-6xl font-copy text-black">
                HTML5
            </h1>
            <p className="bg-white text-gray-700 text-lg font-copy w-full md:w-4/5 mt-6 rounded-xl">
                la technologie qui constitue le contenu du web, la structure de la page web, son contenu, 
                les images, son et multimédia ainsi que les formulaires web sont 
                créer fondamentalement avec ce language de balisage. 
            </p>
            <div className="flex space-x-4">
            <div className="flex flex-col">
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Comment focntionne le web ?</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Les requetes HTTP et les Responses</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">L’éditeur Visual Studio Code</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Les extensions VSCode</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Comment Créer un projet ?</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Structure d’un projet HTML</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Créer des fichiers HTML</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Les Tags</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Les commentaires</h1>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Styles et couleurs</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Mise en page (Page Formatting)</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Les Liens</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Les Images</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Videos & Youtube iFrames</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Les Listes</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Les Tableaux</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Les Divs & Spans</h1>
                </div>
                <div className="flex space-x-3 mb-8 items-center">
                    <div className="w-1 h-1 bg-primary"></div>
                    <h1 className="text-md font-head">Les Entrées & Formulaires</h1>
                </div>
            </div>
            <div className="hidden md:block relative top-10 left-72 w-2/4 -z-10">
                <Image height={542} width={542} src="https://treurgia.sirv.com/amd/html5.png" />
            </div>
            </div>
        </div>
    )
}

export default Prog