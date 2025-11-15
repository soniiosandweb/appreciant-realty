import "./Banner.css";
import Slider from "react-slick";
import banner2 from "../../../assests/images/banner/banner-new-2.png";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import upArrow from "../../../assests/images/banner/up-arrow.png";
// import handImg from "../../../assests/images/banner/handimg.png";
import banner1 from "../../../assests/images/banner/banner-new-1.png";
import banner3 from "../../../assests/images/banner/banner-new-3.png";
import banner4 from "../../../assests/images/banner/banner-new-4.png";
import banner5 from "../../../assests/images/banner/banner-new-5.png";

import bannerRight1 from "../../../assests/images/banner/banner1-right.png";
import bannerRight2 from "../../../assests/images/banner/banner2-right.png";
import bannerRight3 from "../../../assests/images/banner/banner3-right.png";
import bannerRight4 from "../../../assests/images/banner/banner4-right.png";
import bannerRight5 from "../../../assests/images/banner/banner5-right.png";

const slides = [
    {
        title: "Ananta Aspire - Peaceful Living with Landscaped Gardens & Walking Tracks",
        text: "High ROI and Future Value Appreciation",
        image: banner1,
        imageAlt: "Ananta Aspire - Peaceful Living with Landscaped Gardens & Walking Tracks",
        right: bannerRight1,
        lists: [
            "Fully Automated smart homes", 
            "Earth Quake Resistant Structure", 
            "EV Charging Point",
            "Spa / Salon",
            "Zen Garden & Water Body",
        ]
    },
    {
        title: "Book Your Luxury Home at Affinity Greens Today",
        text: "Thoughtfully Designed Landscaped Greens for Serene Evenings",
        image: banner2,
        imageAlt: "Book Your Luxury Home at Affinity Greens Today",
        right: bannerRight2,
        lists: [
            "Amphithreatre for meditation and yoga", 
            "Roof Top Party Area", 
            "Schindler lift in Each Tower",
            "Rainwater Harvesting Sysytem Installed",
            "Interminable Power Backup",
        ]
    },
    {
        title: "Live Green, Live Luxurious-Join a Community That Cares About Tomorrow",
        text: "Designed for Families Who Value Health & Well-Being",
        image: banner3,
        imageAlt: "Live Green, Live Luxurious-Join a Community That Cares About Tomorrow",
        right: bannerRight3,
        lists: [
            "Landscaped gardens, parks and outdoor", 
            "Green Residential Project", 
            "Designing innovative",
            "Functional spaces",
            "Fully eco-friendly communities",
        ]
    },
    {
        title: "Exotic Grandeur-Where Impeccable Craftsmanship Meets Sophisticated Living",
        text: "Thoughtfully Designed Landscaped Greens for Serene Evenings",
        image: banner4,
        imageAlt: "Exotic Grandeur-Where Impeccable Craftsmanship Meets Sophisticated Living",
        right: bannerRight4,
        lists: [
            "Pickle Ball Court", 
            "Kids Play Areas", 
            "Private Theaters",
            "Indoor and Outdoor Kids Zone",
            "Lavish Clubhouse with Entertainment Zones",
        ]
    },
    {
        title: "Live Elevated at Hermitage Centralis",
        text: "Where Sophistication Meets the City’s Pulse",
        image: banner5,
        imageAlt: "Live Elevated at Hermitage Centralis",
        right: bannerRight5,
        lists: [
            "Imposing 60 ft. Wide Entrance", 
            "Water Treatment & Waste Decomposer Plants",
            "Lush Green Landscaped Parks",
            "Fully-Equipped Elite Gymnasium",
            "Ultra-Spacious & Dynamic Clubhouse"
        ]
    }
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
                        <img src={item.right} alt={item.imageAlt} className="banner_right_image" />
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
                                                        {item.lists.map((list,index) => (
                                                            <div className="banner_slider_lists_item" key={index}>
                                                                <img src={upArrow} alt="Up Arrow" className="upparrow" />
                                                                <p className="banner_slider_lists_text">{list}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    {/* <img src={handImg} alt="handimg" className="hand_img_banner" /> */}
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </Col>
                                </Row>
                                
                            </Container>
                            
                            
                        </div>
                        <div className="banner_text_gradient"></div>
                    </div>
                ))}
            </Slider>
            
        </div>
    )
}

export default Banner