import "./Banner.css";
import Slider from "react-slick";
import banner2 from "../../../assests/images/banner/banner2.png";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import upArrow from "../../../assests/images/banner/up-arrow.png";
import handImg from "../../../assests/images/banner/handimg.png";
import banner1 from "../../../assests/images/banner/banner1.png";
import banner3 from "../../../assests/images/banner/banner3.png";
import banner4 from "../../../assests/images/banner/banner4.png";
import banner5 from "../../../assests/images/banner/banner5.png";

// import EnquireForm from "../../Layout/EnquireForm/EnquireForm";

// import telephone from "../../../assests/images/telephone.png";
// import appIcon from "../../../assests/images/app-icon.png";
// import rupee from "../../../assests/images/rupee.png";
// import business from "../../../assests/images/businessman.png";
// import operator from "../../../assests/images/operator.png";
// import carIcon from "../../../assests/images/car-icon.png";

// const weGetOptions = [
//     {
//         icon: telephone,
//         text: "Instant Call Back from Our Expert Team",
//     },
//     {
//         icon: carIcon,
//         text: "Book a Hassle-Free Site Tour – Pickup & Drop on Us",
//     },
//     {
//         icon: appIcon,
//         text: "Get Brochure, Floor Plans & Latest Prices on WhatsApp",
//     },
//     {
//         icon: rupee,
//         text: "Authentic Price Quote – Verified by the Builder",
//     },
//     {
//         icon: business,
//         text: "Personalized Guidance by Our Luxury Homes Expert",
//     },
//     {
//         icon: operator,
//         text: "End-to-End Support with Home Loans & Documentation",
//     }
// ]

const slides = [
    {
        title: "Ananta Aspire - Peaceful Living with Landscaped Gardens & Walking Tracks",
        text: "High ROI and Future Value Appreciation",
        image: banner2,
        imageAlt: "Ananta Aspire - Peaceful Living with Landscaped Gardens & Walking Tracks",
    },
    {
        title: "Book Your Luxury Home at Affinity Greens Today",
        text: "Thoughtfully Designed Landscaped Greens for Serene Evenings",
        image: banner1,
        imageAlt: "Book Your Luxury Home at Affinity Greens Today",
    },
    {
        title: "Live Green, Live Luxurious-Join a Community That Cares About Tomorrow",
        text: "Designed for Families Who Value Health & Well-Being",
        image: banner3,
        imageAlt: "Live Green, Live Luxurious-Join a Community That Cares About Tomorrow",
    },
    {
        title: "Exotic Grandeur-Where Impeccable Craftsmanship Meets Sophisticated Living",
        text: "Thoughtfully Designed Landscaped Greens for Serene Evenings",
        image: banner4,
        imageAlt: "Exotic Grandeur-Where Impeccable Craftsmanship Meets Sophisticated Living",
    },
    {
        title: "Live Elevated at Hermitage Centralis",
        text: "Where Sophistication Meets the City’s Pulse",
        image: banner5,
        imageAlt: "Live Elevated at Hermitage Centralis",
    }
]

const listsItem = [
    "Fully Automated smart homes", 
    "Earth Quake Resistant Structure", 
    "EV Charging Point",
    "Spa / Salon",
    "Zen Garden & Water Body",
    "Glooming Kids Smart School",
    "MIVAN Construction",
    "Children’s Play Area"
]

const Banner = () => {

    const [activeSlide, setActiveSlide] = useState(0);

    const settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        infinite: true,
        arrows: false,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        lazyLoad: "progressive",
        beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
    };

    return(
        <div className="banner_slider_section">
            <Slider {...settings}>
                {slides.map((item,i) => (
                    <div className="banner_slider_item" key={i}>
                        <img src={item.image} alt={item.imageAlt} className="banner_bg_image" />
                        <div className="banner_context_form_flex">
                            <Container fluid>
                                <Row>
                                    <Col>
                                        <div className="banner_sliders_flex">
                                            <div className="banner_slider_text_block">
                                                <div className="banner_slider_text_bg">
                                                    {activeSlide === i ? 
                                                        <h1 className="banner_slider_heading">{item.title}</h1>
                                                    :
                                                        <h2 className="banner_slider_heading">{item.title}</h2>
                                                    }
                                                    
                                                    <h2 className="banner_slider_subtext">{item.text}</h2>
                                                    <div className="banner_slider_icons_lists">
                                                        {listsItem.map((list,index) => (
                                                            <div className="banner_slider_lists_item" key={index}>
                                                                <img src={upArrow} alt="Up Arrow" className="upparrow" />
                                                                <p className="banner_slider_lists_text">{list}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <img src={handImg} alt="handimg" className="hand_img_banner" />
                                                </div>
                                            </div>
                                            {/* <div className="banner_small_image">
                                                <img src={item.smallImg} alt={item.smallAlt} className="banner_small_img" />
                                            </div> */}
                                            
                                        </div>
                                    </Col>
                                </Row>
                                
                            </Container>
                            
                            
                        </div>
                        <div className="banner_text_gradient"></div>
                    </div>
                ))}
            </Slider>
            {/* <div className="right_fixed_sidebar">
                <div className="bottom_fixed_sidebar">
                    <div className="price_list_heading_block">
                    </div>
                    <p className="price_list_heading">Discover Premium Living at Appreciant Realty</p>
                    <p className="price_list_subtext">Enquire Now for Exclusive Prices, Smart-Home Features & Limited-Time Offers.</p>
                    <EnquireForm formId={"sideFixed"} title="Ultra-Luxurious 3, 3+1, and 4+1 BHK Flats & Penthouses/Duplexes | Starting at ₹ 1.5 Cr*" button="Download Price List" />
                    <div className="py-2 form-row we_get_row">
                        <p className='form_label'>What You Get</p>
                        <div className='we_get_div_grid'>
                            {weGetOptions.map((item,i) => (
                                <div className='we_get_div_item' key={i}>
                                    <img src={item.icon} alt={item.text} className='we_get_icon' />
                                    <p className='we_get_text'>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Banner