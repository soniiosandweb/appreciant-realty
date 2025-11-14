import "./WhyChoose.css";
import { Col, Container, Row } from "react-bootstrap";
import whyChooseBg from "../../../assests/images/whychoose/why_choose_bg.jpg";
import support from "../../../assests/images/whychoose/support.png";
import priceTag from "../../../assests/images/whychoose/price-tag-discount.png";
import brokerage from "../../../assests/images/whychoose/brokerage.png";
import contract from "../../../assests/images/whychoose/contract.png";
import loanIcon from "../../../assests/images/whychoose/loan.png";

const whyChooseList = [
    {
        icon: support,
        title: "365 Days Customer Support",
        text: "Contact Us to resolve Issues related to Buying a good Home",
    },
    {
        icon: priceTag,
        title: "Personalized Exclusive",
        text: "Avail From Our Personalized Offer to make Home Buying Experience Pleasent",
    },
    {
        icon: brokerage,
        title: "Zero Brokerage",
        text: "Avail From Our Personalized Offer to make Home Buying Experience Pleasent",
    },
    {
        icon: contract,
        title: "Perfect Documentation",
        text: "Meet Our Team to Manage the Process of Documentation Perfectly",
    },
    {
        icon: loanIcon,
        title: "Home Loan Assistence",
        text: "Take Our Home Loan Consultation to Find the best Financing Opportunity",
    }
]

const WhyChoose = () => {
    return(
        <div className="why_choose_section padding-top padding-bottom">
            <img src={whyChooseBg} alt="Why Choose" className="why_choose_bg" />
            <Container>
                <Row>
                    <Col>
                        <h2 className="why_choose_heading">Why Choose Us</h2>
                        <div className="why_choose_grid_lists">
                            {whyChooseList.map((item,i) => (
                                <div className="why_choose_list_item" key={i}>
                                    <img src={item.icon} alt={item.title} className="why_choose_icon" />
                                    <h3 className="why_choose_list_title">{item.title}</h3>
                                    <p className="why_choose_list_text">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default WhyChoose