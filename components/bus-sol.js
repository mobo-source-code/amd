import BtnOutlined from "./btn-outlined"



const BusSol = () => {

    return (
        <div className="flex flex-col bg-primary px-6 md:px-32 py-8 mt-20 md:mt-40">
            <h1 className="font-bold text-3xl md:text-6xl font-head text-white">
            Cette Formation est
            le chemin le plus rapide 
            pour lancer ta carrière !
            </h1>
            <p className="bg-white p-10 text-gray-700 text-lg font-copy w-full md:w-4/5 mt-8 md:mt-14 rounded-xl">
                Tu n’a même pas besoin de te déplacer, tu n’a pas à suivre de longues heures à apprendre 
                des concepts difficiles. Tu n’a pas besoin d’être bon en maths.<br/> 
                    <br/>
                Tous ce qu’il te faut est un ordinateur, une connexion internet et 4 heures par semaine.<br/>
                    <br/>
                En 4 heures par semaines, et pendant 5 semaine, tu sera capable de créer des site web complets,

                avec des designs innovant et moderne et même des animations impressionantes.<br/>
                    <br/>
                Il y’a des centaines de milliers de petits business dans casablanca qui n’ont pas de site web 
                moderne et innovant, et qui sont prêt a payer des créateurs comme toi des milliers de dirhams.<br/>
                <br/>
                Il y’a beaucoup de société au Maroc, en France, en Belgique et même au Canada qui cherche 
                des profils de dévéloppeur web. La demande est Enorme et l’offre est insuffisante, 
                gravement insuffisante.<br/>
            </p>
            <div className="mt-10 w-full">
                <BtnOutlined text="Ma séance gratuite" />
            </div>

        </div>
    )
}

export default BusSol