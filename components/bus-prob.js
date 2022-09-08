

const BusProb = () => {

    return (
        <div className="flex flex-col px-6 md:px-32 mt-10 md:mt-40">
            <h1 className="font-bold text-2xl md:text-4xl font-head">
                A tous les étudiants, <br/>
                Les Fraichements diplomés, <br/>
                Et toutes personnes voulant changer de carrière.
            </h1>
            <div className="mt-6 md:mt-16 bg-primary rounded-xl py-10 px-16 ">
                <ul className="list-disc text-white text-md font-head flex flex-col space-y-4">
                    <li>Tu as un diplôme ou tu poursuit des études qui n’ont pas d’avenir ?</li>
                    <li>Ta formation actuel n’est pas suffisante pour gagner un bon salaire ?</li>
                    <li>Tu est sous payé dans ton travail actuel et tu fait des tâches 
                        qui n’ont aucune relation avec ton profil ?
                    </li>
                    <li>Ta Formation de base n’a pas de perspective ?</li>
                    <li>Le marché de travail ne te favorise pas ?</li>
                    <li>Tu voudrais apprendre un métier du futur qui lancera finalement 
                        ta carrière après tant de décéption ?
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default BusProb