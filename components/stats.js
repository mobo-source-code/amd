import Link from "next/link"
import BtnFilled from "./btn-filled"
import ListPoint from "./list-point"

const BulletPoints2 = () => {

    return (
        <div className="mt-20 md:mt-40 px-6 md:px-32 flex flex-col">
            <h1 className="font-bold text-3xl md:text-6xl font-head text-black mb-8 md:mb-14">
            La marché t'attend <br/>
            avec impatience.
            </h1>
            <ListPoint text={"+ 30 Défi à résoudre"} />
            <ListPoint text={"+ 7 Projet Complet"} />
            <ListPoint text={"Tu vas créer 3 Site web complet"} />
            <ListPoint text={"Tu vas créer ton propre site web 'Portofolio'"} />
            <Link href="#contact">
                <div className="mt-4 md:mt-8">
                    <BtnFilled text={"Ma séance gratuite"} />
                </div>
            </Link>
            
        </div>
    )
}

export default BulletPoints2