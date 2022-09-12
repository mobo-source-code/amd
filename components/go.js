import Form from "./form"
import Image from "next/image";

const Go = () => {

    return (
        <div id="contact" className="p-10 flex flex-col md:flex-row justify-center space-y-10 md:space-x-40 items-center">
            <div className="flex flex-col space-y-6">
                <div className="flex justify-center">
                    <Image height={355} width={265} src="https://treurgia.sirv.com/amd/Uncle_Sam_(pointing_finger)%201.png" />
                </div>
                <h1 className="font-head text-xl text-black mt-4 text-center">
                        Lance ta carrière tout de suite ! <br/>
                        Demande une séance gratuite !!

                </h1>
            </div>
            
            <Form />
        </div>
    )
}

export default Go;