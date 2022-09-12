import cn from "classnames"
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineClose } from "react-icons/md";
import { HiLightningBolt } from "react-icons/hi"
import { useState } from "react";

import styles from "./Noti.module.css"

import axios from "axios"


const Form = () => {

    const notify = () =>
        toast.custom(
        (t) => (
            <div
            className={cn([
                styles.notificationWrapper,
                t.visible ? "top-0" : "-top-96",
            ])}
            >
            <div className={styles.iconWrapper}>
                <HiLightningBolt />
            </div>
            <div className={styles.contentWrapper}>
                <h1>Félicitation {nom} !!</h1>
                <p>
                On va te contacter très bien tôt
                </p>
            </div>
            <div className={styles.closeIcon} onClick={() => toast.dismiss(t.id)}>
                <MdOutlineClose />
            </div>
            </div>
  ),
  { id: "unique-notification", position: "top-center" }
);

    const [nom, setName] = useState('')
    const [tel, setTel] = useState('')
    const [email, setMail] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post('http://localhost:3000/api/contact', {nom, tel, email})
        console.log(res.data)
        setName('');
        setTel('');
        setMail('')

    }

    return (
        <div id="contact" className="border-2 border-primary p-4 rounded-lg">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-10">
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="nom">
                        Nom Complet
                    </label>
                    <input name="nom" value={nom} onChange={e => setName(e.target.value)} className="shadow bg-lighter appearance-none border rounded w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nom Complet" />
                </div>

                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="nom">
                        Tel
                    </label>
                    <input name="tel" value={tel}  onChange = {e => setTel(e.target.value)} className="shadow bg-lighter appearance-none border rounded w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Téléphone" />
                </div>

                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="nom">
                        E-mail
                    </label>
                    <input name="email" value={email}  onChange = {e => setMail(e.target.value)} className="shadow bg-lighter appearance-none border rounded w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="E-mail" />
                </div>

                <button onClick={notify} className="cursor-pointer relative inline-block px-10 py-5 font-medium group">
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-lighter group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-primary group-hover:bg-lighter"></span>
                    <span className="relative text-primary group-hover:text-gray-700 text-2xl">Ma séance gratuite</span>
                </button>
                <Toaster />
            </form>
        </div>
    )
}

export default Form;