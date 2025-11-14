import './Footer.css';
import { NavLink } from 'react-router-dom';
import logo from '../../../assests/images/logo-new.png';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from 'react-bootstrap';
import facebook from "../../../assests/images/facebook.png";
import twitter from "../../../assests/images/twitter.png";
import youtube from "../../../assests/images/youtube.png";
import facebookColor from "../../../assests/images/facebook-color.png";
import twitterColor from "../../../assests/images/twitter-color.png";
import youtubeColor from "../../../assests/images/youtube-color.png";
import footerBg from "../../../assests/images/footer_bg.png";

const Footer = () => {
    const menuLinks = [
        // {
        //   name: "About Us",
        //   redirect: "/about-us",
        //   id: "about-us",
        // },        
        {
          name: "Location",
          redirect: "/location",
          id: "location",
        },
        {
          name: "Properties",
          redirect: "/properties",
          id: "properties",
        },
        {
          name: "Gallery",
          redirect: "/gallery",
          id: "gallery",
        },
        {
          name: "Contact Us",
          redirect: "/contactus",
          id: "contact",
        },

    ];

    const social = [
        {
            icon: facebook,
            color: facebookColor,
            alt: "Facebook",
            link: "https://www.facebook.com/people/Appreciant-Realty/61583598877070/",
        },
        {
            icon: twitter,
            color: twitterColor,
            alt: "Twitter",
            link: "#",
        },
        {
            icon: youtube,
            color: youtubeColor,
            alt: "Youtube",
            link: "#",
        },
    ]
    return(
        <footer className="text-sm pt-6 md:pt-16 footer_main">
            <img src={footerBg} alt='Footer' className='footer_bg_color' />
            <Container>
                <Row>
                    <Col>
                    <div className='py-10 flex flex-col md:gap-5'>
                        <div className="flex flex-col md:flex-row gap-[40px] md:gap-[20px] justify-between pb-16">
                            <div className="footer_text_col w-full md:w-1/2 flex flex-col gap-[15px] md:pr-2 ">
                                <NavLink to="/" className="block w-auto sm:w-max" reloadDocument={true}>
                                    <LazyLoadImage
                                        src={logo}
                                        alt="Appreciant Realty"
                                        className='header-logo w-40 footer_logo'
                                    />
                                </NavLink>
                                <p className="footer-text text-sm">Discover your dream home in this remarkable new residential project in Dubai, today, and take the first step towards a life of comfort, convenience, and serenity.</p>
                            </div>

                            <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-[40px] md:gap-[20px] justify-between">

                                <div className="w-full md:w-auto flex flex-col gap-[15px] overflow-hidden items-start md:items-center footer_menu_block">
                                    <h6 className="footer-text text-lg font-bold">Useful Links</h6>
                                    <ul className="footer_menus grid grid-cols-[auto] md:grid-cols-[auto] lg:grid-cols-[auto] gap-x-[20px]">
                                        <li className='footer_menu_links'><NavLink smooth="true" to='/aboutus' className="text-sm font-medium" ><FontAwesomeIcon icon={faAngleRight} className="text-white pr-1.5"/>About Us</NavLink></li>
                                        
                                        {menuLinks.map((item, i) => (
                                            <li className='footer_menu_links' key={i}><NavLink smooth="true" to={item.redirect} className="text-sm font-medium" target="_blank"><FontAwesomeIcon icon={faAngleRight} className="text-white pr-1.5"/>{item.name}</NavLink></li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="w-full md:w-auto flex flex-col gap-[15px] md:ml-auto">
                                    <h6 className="footer-text text-lg font-bold">Follow Us On</h6>
                                    <ul className="flex flex-row gap-[20px] footer_social_blocks">
                                        {social.map((item, i) =>(
                                            <li key={i} className="flex items-center justify-center social_link_item">
                                                <a href={item.link} target='_blank' rel="noreferrer">
                                                    <img src={item.icon} alt={item.alt} className='footer_social_icon' />
                                                    <img src={item.color} alt={item.alt} className='footer_social_icon_color' />
                                                </a>
                                            </li>
                                        ))}
                                        
                                    </ul>
                                </div>
                            </div>

                        </div>


                        <div className="flex flex-col items-start gap-1.5 desclaimer_block pb-8">
                            {/* <p className='text-md'><strong>We are the Authorized Channel Partner of 'The Appreciant Realty'. <br />
                            This website is not the official website of developer & property, it belongs to authorized channel partner and it is for the information purpose only. <br />All rights for logo & images are reserved to developer.</strong></p>
                            <p className='text-md'>Channel Partner RERA Number : Coming Soon</p>
                            <p className='text-md text-brown font-semibold mt-5'>Project RERA Number : PBRERA-SAS79-PR0777</p> */}
                            <p className='w-full text-lg font-semibold md:mt-5 text-white'>Disclaimer:</p>
                            <p className='mt-1.5 text-[14px]'> <b>1.</b> The images shown are for illustration purposes only and may not be an exact representation of the product</p>
                            <p className='mt-1.5 text-[14px]'><b>2.</b> 2. Please be advised that this website is not an official site and serves solely as an informational portal managed by a RERA authorized realestate agent. It does not constitute an offer or guarantee of any services. The prices displayed on this website are subject to change without prior notice, and the availability of properties cannot be guaranteed. The images showcased on this website are for representational purposes only and may not accurately reflect the actual properties. We may share your data with Real Estate Regulatory Authority (RERA) registered Developers for further processing as necessary. Additionally, we may send updates and information to the mobile number or email address registered with us.All rights reserved. The content, design, and information on this website are protected by copyright and other intellectual property rights. Any unauthorized use or reproduction of the content may violate applicable laws. For accurate and up-to-date information regarding services, pricing, availability, and any other details, it is recommended to contact us directly through the provided contact information on this website. Thank you for visiting our website.</p>
                            <p className='mt-1.5 text-[14px]'><b>3.</b> We are the Authorized Channel Partner of 'Damac Group'. All rights for logo & images are reserved to developer.</p>
                            
                            
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>

            <div className='footer_terms_block'>
                <Container>
                    <Row>
                        <Col>
                            <div className='footer_terms_flex'>
                                <p className='text-[13px] text-white'><NavLink to='/terms-conditions' target='_blank' className='text-white underline'>Terms & Conditions</NavLink> and <NavLink to='/privacy-policy' target='_blank' className='text-white underline'>Privacy Policy</NavLink></p>
                                <p className='text-[13px] text-white'>Crafted By: <NavLink to='https://iosandweb.net/' target='_blank' className='underline'>IosAndWeb Technologies</NavLink></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            
        </footer>
    )
}

export default Footer