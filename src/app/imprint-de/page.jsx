import NavBar from "@/components/home/navbar";
import ImpressumBackdrop from "@/components/impressum/ImpressumBackdrop";
import Impressum from "@/components/impressum/Impressum";
import Footer from "@/components/home/Footer";


const imprint = () => {
    return (
        <>
            <div className="relative bg-center bg-cover bg-[url('/hero_general_2.jpg')] bg-green-2">
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <NavBar />
                <ImpressumBackdrop />
            </div>
            <Impressum />
            <Footer />
        </>
    )
}
export default imprint;