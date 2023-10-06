import { lazy } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faUser, faUserGraduate, faUsers } from '@fortawesome/free-solid-svg-icons';
import logo from "../../assets/logo.png"
import crystal from "../../assets/crystal.png"
import isoterm from "../../assets/isoterm.png"
import whatsapp from "../../assets/whatsapp.svg"
import line from "../../assets/line.svg"

const NavigationBar = lazy(() => import("../../components/General/NavigationBar"));
const CustomButton = lazy(() => import("../General/CustomButton"));
const Footer = lazy(() => import("../General/Footer"));

const HomeComponent = (props: any) => {
    return (
        <>
            <div className="h-100 bg-image-full">
                <div className="h-100 d-flex flex-column">
                    <NavigationBar {...props} />
                    <Row className="justify-content-center align-items-center flex-grow-1 mt-5">
                        <Col className="text-center tag-line">
                            <Image src={logo} className="width-logo" />
                            <h1 className="text-white my-3 fw-bold">OKTAN ITB 2024</h1>
                            <p className="text-white">
                                OKTAN ITB 2024 sebagai gelanggang kompetisi
                                keilmuan kimia yang prestisius dengan mempertegas
                                kreativitas, sinergisitas dan sportivitas tanpa batas
                            </p>
                            <Row className="justify-content-center mt-4">
                                <Col>
                                    {!props?.authToken &&
                                        <Link to="/register">
                                            <CustomButton
                                                bg="bg-green-btn"
                                                text={
                                                    <>
                                                        REGISTER NOW
                                                        <FontAwesomeIcon icon={faArrowRightLong} size="xs" className="ms-2" />
                                                    </>
                                                }
                                            />
                                        </Link>
                                    }
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="py-5 px-3 bg-white text-center">
                <Row className="justify-content-center mt-4">
                    <h2 className="fw-bold">
                        Competitions
                        <hr className="text-cyan mx-auto hr-underline" />
                    </h2>
                </Row>
                <Row className="justify-content-center my-3">
                    <Col xs={12} sm={5} lg={3} className="m-3 shadow rounded pt-3 zoom">
                        <Link to="/competition/crystal" className="text-decoration-none">
                            <Image src={crystal} fluid className="my-5" />
                            <h5 className="my-4 text-default">Crystal Competition</h5>
                            <Row className="justify-content-center fs-7 pb-5">
                                <Col className="width-fit border border-dark rounded-pill me-1">
                                    <FontAwesomeIcon icon={faUser} className="me-2" />
                                    <span>SMA/K</span>
                                </Col>
                                <Col className="width-fit border border-dark rounded-pill ms-1">
                                    <FontAwesomeIcon icon={faUsers} className="me-2" />
                                    <span>2</span>
                                </Col>
                            </Row>
                        </Link>
                    </Col>
                    <Col xs={12} sm={5} lg={3} className="m-3 shadow rounded pt-3 zoom">
                        <Link to="/competition/isoterm" className="text-decoration-none">
                            <Image src={isoterm} fluid className="my-5" />
                            <h5 className="my-4 text-default">Isoterm Competition</h5>
                            <Row className="justify-content-center fs-7 pb-5">
                                <Col className="width-fit border border-dark rounded-pill me-1">
                                    <FontAwesomeIcon icon={faUserGraduate} className="me-2" />
                                    <span>D1-D4/S1</span>
                                </Col>
                                <Col className="width-fit border border-dark rounded-pill ms-1">
                                    <FontAwesomeIcon icon={faUsers} className="me-2" />
                                    <span>2 - 3</span>
                                </Col>
                            </Row>
                        </Link>
                    </Col>
                </Row>
            </div>
            <div className="py-5 px-3 bg-white text-center">
                <Row className="justify-content-center mt-4">
                    <h2 className="fw-bold">
                        Information Contact
                        <hr className="text-cyan mx-auto hr-underline" />
                    </h2>
                    <p className="mt-4">
                        Jika Anda ingin mengetahui informasi
                        lebih lanjut mengenai pendaftaran bisa <br/>
                        hubungi akun sosial media yang telah disediakan.
                    </p>
                </Row>
                <Row className="justify-content-center my-5">
                    <Col xs={12} sm={7} md={5} lg={4} xl={3} className="mx-3 rounded shadow zoom">
                        <h5 className="mt-4">Rahma</h5>
                        <p className="text-secondary mt-2 mb-3">Informan Pendaftaran</p>
                        <Row className="justify-content-center fs-7 pb-4">
                            <Col className="width-fit rounded-circle shadow-sm me-1 py-2 darken-hover">
                                <a href="https://api.whatsapp.com/send?phone=6285176802789" target="_blank">
                                    <Image src={whatsapp} className="py-1" />
                                </a>
                            </Col>
                            <Col className="width-fit rounded-circle shadow-sm ms-1 py-2 darken-hover">
                                <a href="https://line.me/ti/p/~rahmalia2112" target="_blank">
                                    <Image src={line} className="py-1" />
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            <div className="py-5 px-3 text-center">
                <Row className="justify-content-center mt-4 mb-5">
                    <h2 className="fw-bold mb-5">
                        Media Partner & Sponsor
                        <hr className="text-cyan mx-auto hr-underline" />
                    </h2>
                </Row>
            </div>
            <Footer />
        </>
    )
}

export default HomeComponent;