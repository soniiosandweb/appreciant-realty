import { Col, Container, Row } from "react-bootstrap";
import "./AboutUs.css";
import aboutImg from "../../../assests/images/about/about-us.jpg";

const AboutUs = () => {
    return(
        <div className="about_us_section padding-top padding-bottom" id="aboutus">
            <Container>
                <Row>
                    <Col>
                        <div className="about_us_flex_div">
                            <div className="about_us_cols left">
                                <img src={aboutImg} alt="About Us" className="about_cols_image" />
                            </div>
                            <div className="about_us_cols right">
                                <p className="sub_heading_main paragraph">About Us</p>
                                <h2 className="main_heading">Why Zirakpur is Emerging as a Real Estate Hotspot</h2>
                                <p className="paragraph">Zirakpur is a rapidly developing town located near Chandigarh in Punjab, India. Known for its strategic location on the Chandigarh-Delhi highway, Zirakpur has become a real estate hotspot, attracting both investors and homebuyers. The area offers a mix of residential and commercial developments, including luxury apartments, villas, and retail spaces.</p>
                                <p className="paragraph">With excellent connectivity to Chandigarh, Panchkula, and Mohali, along with proximity to the Chandigarh International Airport.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutUs