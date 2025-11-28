import "./PrimeLocation.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import anata1 from "../../../assests/images/prime_locations/anata-1.jpg";
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
import exotic7 from "../../../assests/images/prime_locations/exotic-7.png";

import affinity1 from "../../../assests/images/prime_locations/affinity-1.jpg";
import affinity2 from "../../../assests/images/prime_locations/affinity-2.jpg";
import affinity3 from "../../../assests/images/prime_locations/affinity-3.jpg";
import affinity4 from "../../../assests/images/prime_locations/affinity-4.jpg";
import affinity5 from "../../../assests/images/prime_locations/affinity-5.jpg";
import affinity6 from "../../../assests/images/prime_locations/affinity-6.jpg";
import affinity7 from "../../../assests/images/prime_locations/affinity-7.jpg";

import atlantis1 from "../../../assests/images/prime_locations/atlantis-1.jpg";
import atlantis2 from "../../../assests/images/prime_locations/atlantis-2.jpg";
import atlantis3 from "../../../assests/images/prime_locations/atlantis-3.jpg";
import atlantis4 from "../../../assests/images/prime_locations/atlantis-4.jpg";
import atlantis5 from "../../../assests/images/prime_locations/atlantis-5.jpg";
import atlantis6 from "../../../assests/images/prime_locations/atlantis-6.png";
import atlantis7 from "../../../assests/images/prime_locations/atlantis-7.jpg";

import hermitage1 from "../../../assests/images/prime_locations/hermitage-1.jpg";
import hermitage2 from "../../../assests/images/prime_locations/hermitage-2.png";
import hermitage3 from "../../../assests/images/prime_locations/hermitage-3.png";
import hermitage4 from "../../../assests/images/prime_locations/hermitage-4.png";
import hermitage5 from "../../../assests/images/prime_locations/hermitage-5.jpg";
import hermitage6 from "../../../assests/images/prime_locations/hermitage-6.png";
import hermitage7 from "../../../assests/images/prime_locations/hermitage-7.jpg";

// import { ImageList, ImageListItem } from "@mui/material";
import Lightbox from 'yet-another-react-lightbox';
import { Counter, Fullscreen, Zoom } from 'yet-another-react-lightbox/plugins';
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useState } from "react";
import { useFormContext } from "../../Layout/FormContext";
import PropertiesGallery from "./PropertiesGallery";

const PrimeLocation = () => {

    const { openPriceForm } = useFormContext();

    const [visibleCount, setVisibleCount] = useState(5);

    const [lightboxProject, setLightboxProject] = useState(null);
    const [lightboxImage, setLightboxImage] = useState(null);

    // function srcset(image, size, rows = 1, cols = 1) {
    //     return {
    //       src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    //       srcSet: `${image}?w=${size * cols}&h=${
    //         size * rows
    //       }&fit=crop&auto=format&dpr=2 2x`,
    //     };
    // }

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 5);
    };

    const projectsLists = [
        {
            title: "Ananta Aspire",
            subtext: "Ananta Aspire is an upcoming luxury residential project located on the Zirakpur-Patiala Highway, offering a blend of modern living, advanced technology, and sustainable design.",
            popup: "Discover Elevated Living at Ananta Aspire",
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
            title: "Affinity Greens",
            subtext: "Affinity Greens is a premium residential project by Affinity Builders, located on PR-7 Airport Road, Zirakpur. Designed to offer a harmonious blend of comfort, elegance, and green living, the project boasts spacious apartments, and modern amenities.",
            popup: "Welcome to Affinity Greens - Luxury. Lifestyle. Location",
            overview: [
                "RERA NUMBER: PBRERA-SAS79-PR0377",
                "Configuration: 2 BHK, 3 BHK, 3 BHK + Servant, 4 BHK, and 5 BHK apartments and penthouses",
                "Possession: Phase 1 Rady for possession Phase 2 under construction",
            ],
            images: [
                {
                    src: affinity1,
                    title: "Affinity Greens",
                    rows: 2,
                    cols: 2,
                },
                {
                    src: affinity2,
                    title: "Affinity Greens",
                },
                {
                    src: affinity3,
                    title: "Affinity Greens",
                },
                {
                    src: affinity4,
                    title: "Affinity Greens",
                },
                {
                    src: affinity5,
                    title: "Affinity Greens",
                },
                {
                    src: affinity6,
                    title: "Affinity Greens",
                },
                {
                    src: affinity7,
                    title: "Affinity Greens",
                }
            ]
        },
        {
            title: "Green Lotus Utsav",
            subtext: "Green Lotus Utsav by Maya Builders is a premium residential project located on PR-7 Airport Road, Zirakpur. Designed for sustainable luxury, the project offers spacious 3 to 6 BHK eco-friendly apartments and duplexes.",
            popup: "Green Lotus Utsav - Luxury That Respects Nature",
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
            title: "Atlantis Grand",
            subtext: "Atlantic Grand by Krishna Buildtech is an exclusive residential development located on Highland Marg, Zirakpur. This upscale project offers spacious 3 BHK apartments ranging from 1915 to 2066 sq. ft., designed for those seeking a blend of elegance and comfort.",
            popup: "Step Into Iconic Living at Atlantis Grand",
            overview: [
                "RERA NUMBER: PBRERA-SAS79-PR0976",
                "Possession: Expected from December 2028",
                "3 BHK apartments",
            ],
            images: [
                {
                    src: atlantis1,
                    title: "Atlantis Grand",
                    rows: 2,
                    cols: 2,
                },
                {
                    src: atlantis2,
                    title: "Atlantis Grand",
                },
                {
                    src: atlantis3,
                    title: "Atlantis Grand",
                },
                {
                    src: atlantis4,
                    title: "Atlantis Grand",
                },
                {
                    src: atlantis5,
                    title: "Atlantis Grand",
                },
                {
                    src: atlantis6,
                    title: "Atlantis Grand",
                },
                {
                    src: atlantis7,
                    title: "Atlantis Grand",
                }
            ]
        },
        {
            title: "Exotic Grandeur",
            subtext: "Exotic Grandeur by Exotic Realtors and Developers is an upscale residential development situated on the Zirakpur-Panchkula-Kalka Highway (NH-22), near Sun Park Resort, Zirakpur.",
            popup: "Exotic Grandeur - Where Luxury Meets Grandeur",
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
                    src: exotic7,
                    title: "Exotic Grandeur",
                }
            ]
        },
        {
            title: "Hermitage Centralis",
            subtext: "Hermitage Centralis by Hermitage Infra Developers is a premium residential project located on VIP Road, Zirakpur, offering a blend of modern architecture and serene living.",
            popup: "Hermitage Centralis - Smart Living in the Heart of Zirakpur",
            overview: [
                "RERA Registration: PBRERA-SAS79-PR0408",
                "Unit Types: 3 BHK, 4 BHK Apartments",
                "Possession: Ready to move in",
            ],
            images: [
                {
                    src: hermitage1,
                    title: "Hermitage Centralis",
                    rows: 2,
                    cols: 2,
                },
                {
                    src: hermitage2,
                    title: "Hermitage Centralis",
                },
                {
                    src: hermitage3,
                    title: "Hermitage Centralis",
                },
                {
                    src: hermitage4,
                    title: "Hermitage Centralis",
                },
                {
                    src: hermitage5,
                    title: "Hermitage Centralis",
                },
                {
                    src: hermitage6,
                    title: "Hermitage Centralis",
                },
                {
                    src: hermitage7,
                    title: "Hermitage Centralis",
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
                                {projectsLists.slice(0, visibleCount).map((item,i) => (
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
                                                <Button className="prime_location_btn" onClick={() => openPriceForm(`${item.popup ? item.popup : "Enquire Now to Know More"}`, "Connect with Our Team for Brochure, Prices & Site Visit Details", "Submit", "explore")}>
                                                    Explore Now
                                                </Button>
                                            </div>

                                            <div className="prime_location_gallery">
                                                {/* <ImageList
                                                    variant="quilted"
                                                    cols={5}
                                                    gap={8}
                                                    rowHeight={180}
                                                    className='gallery_prime_location'
                                                >
                                                    {item.images.map((img,index) => (
                                                        <ImageListItem key={index} cols={img.cols || 1} rows={img.rows || 1} className={`prime_gallery_${index} prime_location_gallery_item`}>
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

                                                    
                                                </ImageList> */}
                                                <PropertiesGallery images={item.images} />
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {visibleCount < projectsLists.length && (
                                    <Button className="prime_location_btn load_more" onClick={handleLoadMore}>
                                        Load More
                                    </Button>
                                )}
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