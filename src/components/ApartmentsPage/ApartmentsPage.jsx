import { useLocation } from "react-router-dom";
import MetaData from '../Layout/MetaData.jsx'
import Apartments from "../Home/Apartments/Apartments.jsx";

const ApartmentsPage = () => {

    const location = useLocation();
    
    return(
        <>

            <MetaData 
                title={"Apartments in Zirakpur - Appreciant Realty"}
                description={"Apartments in Zirakpur Modern Living in a Prime Location"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />
            <div className="">
                <Apartments />
            </div>
            
        </>
       
    )
}

export default ApartmentsPage