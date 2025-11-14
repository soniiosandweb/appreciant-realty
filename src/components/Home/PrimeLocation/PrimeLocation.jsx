import "./PrimeLocation.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import anata1 from "../../../assests/images/prime_locations/anata-1.png";
import anata2 from "../../../assests/images/prime_locations/anata-2.png";
import anata3 from "../../../assests/images/prime_locations/anata-3.jpg";
import anata4 from "../../../assests/images/prime_locations/anata-4.jpg";
import anata5 from "../../../assests/images/prime_locations/anata-5.jpg";
import anata6 from "../../../assests/images/prime_locations/anata-6.png";
import anata7 from "../../../assests/images/prime_locations/anata-7.png";

import greenLotus1 from "../../../assests/images/prime_locations/greenlotus-1.jpg";
import greenLotus2 from "../../../assests/images/prime_locations/greenlotus-2.jpg";
import greenLotus3 from "../../../assests/images/prime_locations/greenlotus-3.jpg";
import greenLotus4 from "../../../assests/images/prime_locations/greenlotus-4.jpg";
import greenLotus5 from "../../../assests/images/prime_locations/greenlotus-5.png";
import greenLotus6 from "../../../assests/images/prime_locations/greenlotus-6.jpg";
import greenLotus7 from "../../../assests/images/prime_locations/greenlotus-7.png";

import exotic1 from "../../../assests/images/prime_locations/exotic-1.jpg";
import exotic2 from "../../../assests/images/prime_locations/exotic-2.jpg";
import exotic3 from "../../../assests/images/prime_locations/exotic-3.png";
import exotic4 from "../../../assests/images/prime_locations/exotic-4.png";
import exotic5 from "../../../assests/images/prime_locations/exotic-5.jpg";
import exotic6 from "../../../assests/images/prime_locations/exotic-6.jpg";

import { ImageList, ImageListItem } from "@mui/material";
import Lightbox from 'yet-another-react-lightbox';
import { Counter, Fullscreen, Zoom } from 'yet-another-react-lightbox/plugins';
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useState } from "react";
import { useFormContext } from "../../Layout/FormContext";

const PrimeLocation = () => {

    const { openPriceForm } = useFormContext();

    const [lightboxProject, setLightboxProject] = useState(null);
    const [lightboxImage, setLightboxImage] = useState(null);

    function srcset(image, size, rows = 1, cols = 1) {
        return {
          src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
          srcSet: `${image}?w=${size * cols}&h=${
            size * rows
          }&fit=crop&auto=format&dpr=2 2x`,
        };
    }

    const projectsLists = [
        {
            title: "Ananta Aspire",
            subtext: "Ananta Aspire is an upcoming luxury residential project located on the Zirakpur-Patiala Highway, offering a blend of modern living, advanced technology, and sustainable design.",
            overview: [
                "Location: Zirakpur-Patiala Highway, Zirakpur, Chandigarh",
                "Spread: 34,050 square yards",
                "3 BHK, 3+1 BHK, and 4+1 BHK apartments, including penthouses",
                "Possession: Starting December 2025"
            ],
            images: [
                {
                    src: anata1,
                    title: "Ananta Aspire",
                    rows: 2,
                    cols: 2,
                },
                {
                    src: anata2,
                    title: "Ananta Aspire",
                },
                {
                    src: anata3,
                    title: "Ananta Aspire",
                },
                {
                    src: anata4,
                    title: "Ananta Aspire",
                },
                {
                    src: anata5,
                    title: "Ananta Aspire",
                },
                {
                    src: anata6,
                    title: "Ananta Aspire",
                },
                {
                    src: anata7,
                    title: "Ananta Aspire",
                }
            ]
        },
        {
            title: "Green Lotus Utsav",
            subtext: "Green Lotus Utsav by Maya Builders is a premium residential project located on PR-7 Airport Road, Zirakpur. Designed for sustainable luxury, the project offers spacious 3 to 6 BHK eco-friendly apartments and duplexes.",
            overview: [
                "RERA NUMBER: PBRERA-SAS79-PR0425",
                "3, 4, 5 & 6 BHK Apartments & Duplexes",
                "Possession: Starting June 2025",
            ],
            images: [
                {
                    src: greenLotus1,
                    title: "Green Lotus Utsav",
                    rows: 2,
                    cols: 2,
                },
                {
                    src: greenLotus2,
                    title: "Green Lotus Utsav",
                },
                {
                    src: greenLotus3,
                    title: "Green Lotus Utsav",
                },
                {
                    src: greenLotus4,
                    title: "Green Lotus Utsav",
                },
                {
                    src: greenLotus5,
                    title: "Green Lotus Utsav",
                },
                {
                    src: greenLotus6,
                    title: "Green Lotus Utsav",
                },
                {
                    src: greenLotus7,
                    title: "Green Lotus Utsav",
                }
            ]
        },
        {
            title: "Exotic Grandeur",
            subtext: "Exotic Grandeur by Exotic Realtors and Developers is an upscale residential development situated on the Zirakpur-Panchkula-Kalka Highway (NH-22), near Sun Park Resort, Zirakpur.",
            overview: [
                "RERA Registration: PBRERA-SAS79-PR00059",
                "4 BHK Apartments",
                "Possession: Ready to move in since October 2018",
            ],
            images: [
                {
                    src: exotic1,
                    title: "Exotic Grandeur",
                    rows: 2,
                    cols: 2,
                },
                {
                    src: exotic2,
                    title: "Exotic Grandeur",
                },
                {
                    src: exotic3,
                    title: "Exotic Grandeur",
                },
                {
                    src: exotic4,
                    title: "Exotic Grandeur",
                },
                {
                    src: exotic5,
                    title: "Exotic Grandeur",
                },
                {
                    src: exotic6,
                    title: "Exotic Grandeur",
                },
                {
                    src: exotic4,
                    title: "Exotic Grandeur",
                }
            ]
        }
    ]

    return (
        <div className="prime_location_section" id="location">
            <div className="prime_location_top">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="main_heading">Apartments in Zirakpur<br/> Modern Living in a Prime Location</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="prime_locations_lists padding-top padding-bottom">
                <Container>
                    <Row>
                        <Col>
                            <div className="prime_locations_grids">
                                {projectsLists.map((item,i) => (
                                    <div className="prime_locations_grids_item" key={i}>
                                        <div className="flex_heading_block">
                                            <h2 className="main_heading">{item.title}</h2>
                                            <div className="title_line"></div>
                                        </div>
                                        <p className="paragraph">{item.subtext}</p>
                                        <div className="prime_location_flex">
                                            <div className="prime_location_overview">
                                                <p className="paragraph heading">Project Overview</p>
                                                <ul className="project_overview_lists">
                                                    {item.overview.map((list, index) => (
                                                        <li key={index} className="project_overview_lists_item paragraph">{list}</li>
                                                    ))}
                                                </ul>
                                                <Button className="prime_location_btn" onClick={() => openPriceForm("Enquire Now to Know More", "Connect with Our Team for Brochure, Prices & Site Visit Details", "Explore Now", "explore")}>
                                                    Explore Now
                                                </Button>
                                            </div>

                                            <div className="prime_location_gallery">
                                                <ImageList
                                                    variant="quilted"
                                                    cols={5}
                                                    gap={8}
                                                    rowHeight={180}
                                                    className='gallery_prime_location'
                                                >
                                                    {item.images.map((img,index) => (
                                                        <ImageListItem key={index} cols={img.cols || 1} rows={img.rows || 1} className={`prime_gallery_${i} prime_location_gallery_item`}>
                                                            <img
                                                                {...srcset(img.src, 121, img.rows, img.cols)}
                                                                alt={img.title}
                                                                onClick={() => {
                                                                    setLightboxProject(i);       // project index
                                                                    setLightboxImage(index);     // image index inside project
                                                                }}
                                                                className={`object-cover cursor-pointer`}
                                                            />
                                                        </ImageListItem>
                                                    ))}

                                                    
                                                </ImageList>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Lightbox
                index={lightboxImage}
                slides={lightboxProject !== null ? projectsLists[lightboxProject].images : []}
                open={lightboxProject !== null}
                close={() => {
                    setLightboxProject(null);
                    setLightboxImage(null);
                }}
                styles={{slide: { marginTop: "20px" },  toolbar: {background: '#00000054', width: '100%'}, icon:{color: '#fff'} }}
                controller={{ closeOnBackdropClick: true }}
                plugins={[Fullscreen, Zoom, Slideshow,Counter,Thumbnails]}
                counter={{ container: { style: { top: 0, bottom: "unset" } } }}
            />
        </div>
    )
}

export default PrimeLocation