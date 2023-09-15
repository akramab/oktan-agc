import { lazy } from "react";
import { Row, Col, Image, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const CustomButton = lazy(() => import("../General/CustomButton"));
const NavigationBar = lazy(() => import("../../components/General/NavigationBar"));

const HomeComponent = (props: any) => {
    return (
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
    )
}

export default HomeComponent;