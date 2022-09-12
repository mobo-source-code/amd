import Link from "next/link"
import BtnFilled from "./btn-filled"
import ListPoint from "./list-point"

const BulletPoints = () => {

    return (
        <div className="mt-20 md:mt-40 px-6 md:px-32 flex flex-col">
            <h1 className="font-bold text-3xl md:text-6xl font-head text-black mb-6 md:mb-14">
            La marché t'attend <br/>
            avec impatience.
            </h1>
            <ListPoint text={"La Formation la plus rapide"} />
            <ListPoint text={"Prix super abordable"} />
            <ListPoint text={"Formateurs expert insérés dans le marché"} />
            <ListPoint text={"Crée des projets avancé à présenter au entreprise"} />
            <ListPoint text={"Coaching personnel sur comment trouver des clients"} />
            <ListPoint text={"Séance Développement Professionnel Offerte"} />
            <Link href="#contact">
                <div className="mt-8 cursor-pointer">
                    <BtnFilled text={"Ma séance gratuite"} />
                </div>
            </Link>
            
        </div>
    )
}

export default BulletPoints