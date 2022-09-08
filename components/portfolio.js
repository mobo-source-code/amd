import BtnFilled from "./btn-filled"


const Portfolio = () => {

    return (
        <div className="flex flex-col mt-20 md:mt-40 px-6 md:px-32">
            <h1 className="font-bold text-4xl md:text-6xl font-head text-black">
            Ce que nos étudiants <br/>
            ont créer.
            </h1>
                <div className="w-full h-96 bg-gray-400 mt-20">
                    <iframe src="http://rhythm.bestlooker.pro/rhythm-original/special-finance-1.html" width="100%" height="100%"></iframe>
                </div>
                <div className="w-full h-96 bg-gray-400 mt-20">
                    <iframe src="https://mobodev.com" width="100%" height="100%"></iframe>
                </div>
                <div className="w-full h-96 bg-gray-400 mt-20">
                    <iframe src="https://templatemo.com/live/templatemo_579_cyborg_gaming" width="100%" height="100%"></iframe>
                </div>
                <div className="w-full h-96 bg-gray-400 mt-20">
                    <iframe src="https://templatemo.com/live/templatemo_573_eduwell" width="100%" height="100%"></iframe>
                </div>
                <h1 className="font-bold text-2xl md:text-4xl mt-20 md:mt-32 font-head text-black">
                    Comme je vous ai dit, nos formation <br/>
                    sont les plus rapide et les plus. <br/>
                    efficaces sur le marché
                </h1>
                <div className="mt-8 md:mt-14">
                    <BtnFilled text={"Ma séance gratuite"} />
                </div>
                
        </div>
    )
}


export default Portfolio