import "./ContactUs.css";
import { Col, Container, Row } from "react-bootstrap"
import EnquireForm from "../../Layout/EnquireForm/EnquireForm"
import contactImg from "../../../assests/images/contact-img.jpg";

const ContactUs = () => {
    return (
        <div className="contact_us_section padding-top padding-bottom" id="contact">
            <img src={contactImg} alt="Well-designed library room inside Appreciant Realty flats for sale in Zirakpur" className="contact_bg_image" />
            <Container>
                <Row>
                    <Col>
                        <div className="flex_heading_block padding-bottom">
                            <h2 className="main_heading">Get In Touch</h2>
                            <div className="title_line"></div>
                        </div>

                        <div className="contact_us_flex">
                            
                            
                            <div className="contact_us_right_col">
                                <p className="contact_text">Access the Most Accurate Price Details—Instantly.</p>

                                <div className="contact_section_form">
                                    <EnquireForm title="Connect With Our Team" formId={"contact"} button={"Download now"} />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactUs