import MetaData from "../Layout/MetaData"
import AboutUs from "./AboutUs/AboutUs"
import Apartments from "./Apartments/Apartments"
import Banner from "./banner/Banner"
import ContactUs from "./ContactUs/ContactUs"
import EliteDevelopers from "./EliteDevelopers/EliteDevelopers"
import PrimeLocation from "./PrimeLocation/PrimeLocation"
import WhyChoose from "./WhyChoose/WhyChoose"

const Home = () => {

    const localSchema = {
    }

    return(
        <>
            <MetaData 
                title={"Appreciant Realty | Buy 3BHK & 4BHK Luxury Apartments in Zirakpur"} 
                description={"Discover premium flats for sale in Zirakpur at AnantaAspire. Explore luxury flats in Zirakpur with modern amenities. Visit AnantaAspire today!"} 
                keywords={"The Appreciant Realty, 3 BHK Flats in Zirakpur,4 BHK Flats in Zirakpur, Luxury Apartments in Zirakpur,Zirakpur Real Estate, Flats for Sale in Zirakpur, Appreciant Realty, Modern Apartments Zirakpur"}
                canonicalUrl={process.env.REACT_APP_API_URL}
                localSchema={localSchema}
            />

            <Banner />
            <AboutUs />
            <PrimeLocation />
            <EliteDevelopers />
            <Apartments />
            <WhyChoose />
            <ContactUs />
        </>
    )
}

export default Home