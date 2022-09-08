import BtnOutlined from "./btn-outlined";


const Form = () => {

    return (
        <div className="border-2 border-primary p-4 rounded-lg">
            <form className="flex flex-col space-y-10">
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="nom">
                        Nom Complet
                    </label>
                    <input className="shadow bg-lighter appearance-none border rounded w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nom Complet" />
                </div>

                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="nom">
                        Tel
                    </label>
                    <input className="shadow bg-lighter appearance-none border rounded w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Téléphone" />
                </div>

                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="nom">
                        E-mail
                    </label>
                    <input className="shadow bg-lighter appearance-none border rounded w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="E-mail" />
                </div>

                <BtnOutlined text={"Ma séance gratuite"} />

            </form>
        </div>
    )
}

export default Form;