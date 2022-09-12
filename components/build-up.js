import Image from "next/image"
import Link from "next/link"
import BtnFilled from "./btn-filled"


const BuildUp = () => {
    return (
        <div className="flex space-x-0 md:-space-x-72">
            <div className="hidden md:block relative top-40 left-0 w-2/3 -z-10">
                    <Image height={480} width={415} src="https://treurgia.sirv.com/amd/man-in-phone.png" />
            </div>
            <div className="flex flex-col mt-20 px-6 md:px-0 md:mt-40">
                <h1 className="font-bold text-3xl md:text-5xl font-head">
                Le Marché de Travail <br/> 
                est de plus en plus saturé
                </h1>
                <p className="mt-6 font-copy text-gray-700 text-md w-full md:w-3/4 px-4">
                    Les diplômés sont aux chommage par des centaines milliers. <br/>
                    <br/>
                    Il y’a un décalage énorme et flagrants entre l’éducation et le marché de travail. <br/> 
                    <br/>
                    Les recruteurs et les entreprises marocaines veulent des personnes capables de 
                    résoudres des problèmes, capable de créer des solutions, capable de générer de la valeur.<br/>
                    <br/>
                    Soyont honnêtes, l’université ne produit que rarement des gens capables de 
                    résoudre des problèmes, créer des solutions et générer de la valeur.<br/>
                    <br/>
                    Il te faut donc une formation qui t’apprendera à résoudre de vrai problème, 
                    de créer des solutions et de générer de la valeur. <br/>
                    <br/>
                    Une formation qui fera de toi un profil super demandé. <br/>
                    <br/>
                    Soit en entreprise soit en travail indépendent.<br/>
                    <br/>
                    Une formation qui te permettera de lancer réelement ta carrière. <br/>
                    <br/>
                    D’avoir de vrai chances de réussite. <br/>
                </p>
                <Link href="#contact">
                    <div className="mt-10 md:mt-14">
                        <BtnFilled text={"Ma séance gratuite"} />
                    </div>
                </Link>
                
            </div>
        </div>
    )
}

export default BuildUp