import { lazy } from "react";
import { Row, Col, Image, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"

const CustomButton = lazy(() => import("../General/CustomButton"));
const NavigationBar = lazy(() => import("../../components/General/NavigationBar"));

const HomeComponent = (props: any) => {
    return (
        <div className="h-100 bg-image-full">
            <div className="h-75 d-flex flex-column">
                <NavigationBar />
                <Row className="align-items-center flex-grow-1">
                    <Col className="text-center">
                        <h1>HOME</h1>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default HomeComponent;