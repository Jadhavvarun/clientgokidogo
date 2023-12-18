import NavBar from '@/components/home/Navbar';
import Footer from "@/components/home/Footer";
import Privacy from "@/components/privacy/Privacy";
import PrivacyBackdrop from "@/components/privacy/PrivacyBackdrop";

const privacy = () => {
    return(
        <>
            <div className="relative bg-center bg-cover bg-[url('/hero_general_2.jpg')] bg-green-2">
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <NavBar />
                <PrivacyBackdrop />
            </div>
            <Privacy />
            <Footer />
        </>
    )
}
export default privacy;