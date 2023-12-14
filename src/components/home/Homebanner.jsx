import Image from "next/image";
import Link from "next/link";
import OnlineRestaurant from "./OnlineRestaurant";

const Homebanner = () => {
    return (
        <div className="bg-gray-1 h-auto">
            <div className="px-28 py-20">
                <h1 className="text-black font-semibold text-3xl">
                    Wähle aus einem von vielen der beliebtesten<br /> Restaurants aus deiner Nachbarschaft.
                </h1>
                <div className="flex flex-col">
                    <div className="flex justify-between">
                        <p className="text-black text-xl">Bestelle, genieße und unterstütze lokale Restaurants.</p>
                       <Link href="/restaurants" className="text-green-3 z-10 transition duration-300 hover:text-black cursor-pointer font-semibold">Restaurants mit einzigartigem Essen →</Link> 
                    </div>
                </div>
                <OnlineRestaurant/>
                <div className="relative bg-cover bg-center h-72 mt-10" style={{ backgroundImage: 'url("/banner_bg_desktop.jpg")' }}>
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <h6 className="text-white text-sm font-semibold absolute top-0 left-0 px-14 mt-12">GO KIDOGO BESTELLPLATTFORM</h6>
                    <h1 className="text-3xl font-semibold text-white absolute left-0 top-20 px-14">
                        Unsere Partnerrestaurants liefern in dein Büro.
                    </h1>
                    <p className="text-white font-semibold text-2xl px-14 top-32 absolute">
                        Genieße dein leckeres Essen frei von Verpackungsmüll und zu fairen Preisen, für dich und deinen Lieblingsgastronomen.
                    </p>
                    <button className="bg-green-600 text-white font-semibold py-2 px-4 rounded absolute bottom-8 left-14">Starte jetzt!</button>
                </div>

            </div>
        </div>
    );
};

export default Homebanner;