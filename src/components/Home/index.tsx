import { lazy } from "react";
import { Row, Col, Image, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faUser, faUserGraduate, faUsers } from '@fortawesome/free-solid-svg-icons';
import logo from "../../assets/logo.svg"
import crystal from "../../assets/crystal.png"
import isoterm from "../../assets/isoterm.png"

const CustomButton = lazy(() => import("../General/CustomButton"));
const NavigationBar = lazy(() => import("../../components/General/NavigationBar"));

const HomeComponent = (props: any) => {
    return (
        <>
            <div className="h-100 bg-image-full">
                <div className="h-75 d-flex flex-column">
                    <NavigationBar />
                    <Row className="justify-content-center align-items-center flex-grow-1 mt-5">
                        <Col className="text-center">
                            <Image src={logo} className="width-logo mt-5" />
                            <h1 className="text-white my-3 fw-bold">OKTAN ITB 2023</h1>
                            <p className="text-white fs-5">
                                “OKTAN ITB 2023 sebagai sarana kolaborasi dalam <br/>
                                inovasi keilmuan kimia untuk pengembangan karya <br/>
                                yang bermanfaat dan berkelanjutan bagi masyarakat”
                            </p>
                            <Row className="justify-content-center mt-4">
                                <Col xs={2}>
                                    <CustomButton
                                        bg="bg-purple-bright"
                                        text={
                                            <>
                                                REGISTER NOW
                                                <FontAwesomeIcon icon={faArrowRightLong} size="xs" className="ms-2" />
                                            </>
                                        }
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="py-5 px-3 bg-white">
                <Row className="justify-content-center mt-4">
                    <h2 className="text-center fw-bold width-fit">
                        Competitions
                        <hr className="text-purple mx-auto hr-underline" />
                    </h2>
                </Row>
                <Row className="justify-content-center text-center my-5">
                    <Col xs={3} className="mx-3 shadow rounded">
                        <Link to="/competition/crystal" className="text-decoration-none">
                            <Image src={crystal} fluid />
                            <h5 className="mt-5 mb-4 text-default">Crystal Competition</h5>
                            <Row className="justify-content-center text-center fs-7 pb-5">
                                <Col className="width-fit border border-dark rounded-pill me-1">
                                    <FontAwesomeIcon icon={faUser} className="me-2" />
                                    <span>SMA/K</span>
                                </Col>
                                <Col className="width-fit border border-dark rounded-pill ms-2">
                                    <FontAwesomeIcon icon={faUsers} className="me-2" />
                                    <span>1 - 2</span>
                                </Col>
                            </Row>
                        </Link>
                    </Col>
                    <Col xs={3} className="mx-3 shadow rounded">
                        <Link to="/competition/isoterm" className="text-decoration-none">
                            <Image src={isoterm} fluid />
                            <h5 className="mt-5 mb-4 text-default">Isoterm Competition</h5>
                            <Row className="justify-content-center text-center fs-7 pb-5">
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
        </>
    )
}

export default HomeComponent;