import { Col, Container, Row } from "react-bootstrap";
import "./EliteDevelopers.css";
import Slider from "react-slick";
import homeland from "../../../assests/images/logos/homeland.png";
import anataAspire from "../../../assests/images/logos/anata-aspire.png";
import gillcoHeights from "../../../assests/images/logos/gillco.png";
import valleyGarden from "../../../assests/images/logos/vallery-gardens.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const logosSlider = [
    {
        img: homeland,
        title: "Homeland Heights",
    },
    {
        img: anataAspire,
        title: "The Ananta Aspire",
    },
    {
        img: gillcoHeights,
        title: "Gillco Heights",
    },
    {
        img: valleyGarden,
        title: "The Valley Garden",
    }
]

const NextArrow = ({ onClick }) => (
  <div className="slick-arrow next-arrow" onClick={onClick}>
    <FontAwesomeIcon icon={faChevronRight} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="slick-arrow prev-arrow" onClick={onClick}>
    <FontAwesomeIcon icon={faChevronLeft} />
  </div>
);

const EliteDevelopers = () => {

    const settingsLogo = {
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        infinite: true,
        arrows: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: true,
        lazyLoad: "progressive",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return(
        <div className="elite_developers_section padding-top padding-bottom" id="properties">
            <Container>
                <Row>
                    <Col>
                        <div className="heading_block_main right padding-bottom">
                            <div className="flex_heading_block">
                                <h2 className="main_heading">Elite Developers</h2>
                                <div className="title_line"></div>
                            </div>
                            <h2 className="main_heading">Elevated Lifestyles</h2>
                        </div>

                        <div className="logos_sliders_block">
                            <Slider {...settingsLogo}>
                                {logosSlider.map((item,i) => (
                                    <div className="logo_slider_item" key={i}>
                                        <img src={item.img} alt={item.title} className="logo_slider_img" />
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

export default EliteDevelopers