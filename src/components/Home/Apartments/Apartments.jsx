import "./Apartments.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import apartment1 from "../../../assests/images/apartments/property1.jpg";
import apartment2 from "../../../assests/images/apartments/property2.jpg";
import apartment3 from "../../../assests/images/apartments/property3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import location from "../../../assests/images/apartments/location.png";
import { useFormContext } from "../../Layout/FormContext";
import { useEffect, useState } from "react";

const apartmentsLists = [
    {
        image: apartment1,
        title: "Ananta Aspire",
        location: "Zirakpur, Chandigarh"
    },
    {
        image: apartment2,
        title: "Emmar Mohali Hills",
        location: "Mohali, Chandigarh",
    },
    {
        image: apartment3,
        title: "Omaxe The Lake",
        location: "Panchkula, Chandigarh",
    }
]

const NextArrow = ({ onClick }) => (
  <div className="slick-arrow next-arrow" onClick={onClick}>
    <FontAwesomeIcon icon={faCircleArrowRight} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="slick-arrow prev-arrow" onClick={onClick}>
    <FontAwesomeIcon icon={faCircleArrowLeft} />
  </div>
);

const Apartments = () => {

    const { openPriceForm } = useFormContext();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const settingsAprt = {
        autoplay: isMobile,
        autoplaySpeed: 5000,
        dots: false,
        infinite: true,
        arrows: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        lazyLoad: "progressive",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    autoplay: true,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    autoplay: true,
                }
            }
        ]
    };
    

    return(
        <div className="apartments_section padding-bottom" id="apartment">
            <Container>
                <Row>
                    <Col>
                        <div className="heading_block_main padding-bottom">
                            <h2 className="main_heading">Apartments</h2>
                            <div className="flex_heading_block">
                                <h2 className="main_heading">By Location</h2>
                                <div className="title_line"></div>
                            </div>
                        </div>

                        <div className="apartments_sliders_block">
                            <Slider {...settingsAprt}>
                                {apartmentsLists.map((item,i) => (
                                    <div className="apartments_slider_item" key={i}>
                                        <div className="apartments_slider_images">
                                            <img src={item.image} alt={item.title} className="apartments_slider_img" />
                                        </div>
                                        <h3 className="apartments_title">{item.title}</h3>
                                        <p className="apartments_location">
                                            <img src={location} alt="location" className="location_icon" />
                                            {item.location}
                                        </p>
                                        <Button className="prime_location_btn" onClick={() => openPriceForm("Enquire Now to Know More", "Connect with Our Team for Brochure, Prices & Site Visit Details", "Explore Now", "explore")}>
                                            Explore Now
                                        </Button>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Apartments