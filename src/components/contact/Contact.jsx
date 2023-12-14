import { FaRegLifeRing } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoCloudUploadOutline } from "react-icons/io5";

const Contact = () => {
    const titleStyle = {
        background: 'linear-gradient(to right, #bee25a, #357135)',
        transition: 'background 0.7s',
    };

    return (
        <>
            <div>
                <div className="h-auto bg-gray-1 py-10 flex flex-col items-center justify-center">
                    <div className="flex flex-col sm:flex-row gap-6">
                        <div className="bg-white shadow-xl w-full sm:w-96 p-6 flex flex-col items-center mb-8">
                            <FaRegLifeRing className="h-20 w-20 text-green-3 mb-4" />
                            <div className="text-center">
                                <h1 className="text-black font-semibold text-xl mb-2">Support</h1>
                                <p className="text-black cursor-pointer hover:underline">+49 - 162 910 7481</p>
                                <p className="text-black cursor-pointer hover:underline">zerowaste@gokidogo.de</p>
                            </div>
                        </div>
                        {/* Second Card */}
                        <div className="bg-white shadow-xl w-full sm:w-96 p-6 flex flex-col items-center mb-8">
                            <IoLocationOutline className="h-20 w-20 text-green-3 mb-4" />
                            <h1 className="text-black font-semibold text-xl mb-2">Anschrift</h1>
                            <p className="text-black text-center">Go Kidogo Deutschland GmbH <br /> Kurmarkstraße 30 , 60437 Frankfurt am Main</p>
                        </div>
                        {/* Third Card */}
                        <div className="bg-white shadow-xl w-full sm:w-96 p-6 flex flex-col items-center mb-8">
                            <IoCloudUploadOutline className="h-20 w-20 text-green-3 mb-4" />
                            <div className="text-center">
                                <h1 className="text-black font-semibold text-xl mb-2">Kontakt</h1>
                                <p className="text-black cursor-pointer hover:underline">+49 - 162 910 7481</p>
                                <p className="text-black cursor-pointer hover:underline">service@gokidogo.de</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-screen bg-white flex">
                    <div className="md:w-2/4">
                        <div className="px-4 mb-8 ml-40 mt-28 w-[480px]">
                            <h1 className="text-3xl text-black font-semibold mb-6">Kontaktiere uns</h1>
                            <form className="flex flex-col gap-4">
                                <input type="text" placeholder="Name" className="border border-gray-300 rounded-md p-4 text-black focus:outline-none" />
                                <input type="email" placeholder="E-Mail" className="border border-gray-300 rounded-md p-4 text-black focus:outline-none" />
                                <input type="tel" placeholder="Telefon" className="border border-gray-300 rounded-md p-4 text-black focus:outline-none" />
                                <textarea placeholder="Nachricht" className="border border-gray-300 rounded-md p-4 text-black focus:outline-none"></textarea>
                                <div className="flex items-center gap-2">
                                    <input type="text" placeholder="Human verify: 3 + 1 =?" className="border border-gray-300 rounded-md p-4 w-full text-black focus:outline-none" required />
                                </div>
                                <button className="text-white font-semibold py-3 px-4 rounded-sm" style={titleStyle}>
                                    Senden
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="md:w-3/4 w-full mt-36 px-16">
                        <iframe
                            width="90%"
                            height="70%"
                            frameBorder="0"
                            style={{ border: 0, marginTop: '1.5rem', marginLeft: '1.5rem' }}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2553.6123088621034!2d8.697287788864559!3d50.205777298181374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd05e0df8a98f7%3A0x9e9d336aaff99604!2sKurmarkstra%C3%9Fe%2030%2C%2060437%20Frankfurt%20am%20Main%2C%20Germany!5e0!3m2!1sen!2sin!4v1681718283000!5m2!1sen!2sin"
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                            title="Map"
                        ></iframe>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Contact;