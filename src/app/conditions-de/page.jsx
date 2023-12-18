import NavBar from '@/components/home/Navbar'
import ConditionsBackdrop from "@/components/conditions/ConditionsBackdrop";
import Conditions from "@/components/conditions/Conditions";
import Footer from "@/components/home/Footer";


const conditions = () => {
    return (
        <>
         <div className="relative bg-center bg-cover bg-[url('/hero_general_2.jpg')] bg-green-2">
         <div className="absolute inset-0 bg-black opacity-60"></div>
        <NavBar />
        <ConditionsBackdrop />
        </div>
         <Conditions />
            <Footer />
        </>
    )
}
export default conditions;