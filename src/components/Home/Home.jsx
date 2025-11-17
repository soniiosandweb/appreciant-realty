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
                title={"Buy 3 BHK & 4 BHK Luxury Flats in Zirakpur - Appreciant Realty"} 
                description={"Explore 3 BHK & 4 BHK Luxury Flats in Zirakpur. Find premium luxury flats in Zirakpur and top flats for sale in Zirakpur at AppreciantRealty.com today now!!"} 
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