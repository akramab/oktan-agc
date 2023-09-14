import { lazy } from "react";
import { Row, Col, Image, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"

const CustomInput = lazy(() => import("../../components/General/CustomInput"));
const PurpleButton = lazy(() => import("../../components/General/PurpleButton"));

const RegisterComponent = (props: any) => {
    return (
        <div className="h-100 d-flex flex-column">
            <Row className="bg-gray align-items-center flex-grow-1">
                <Col>
                    <Row>
                        <Col className="d-flex align-items-center justify-content-center mb-3">
                            <Image src={logo} />
                            <h3 className="fw-bolder ms-2">Oktan ITB 2023</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row className="justify-content-center">
                                <Col xs={4} className="bg-white text-center rounded shadow-lg py-5 px-4">
                                    <h3 className="mb-5">Register</h3>
                                    <Form className="text-start mx-2">
                                        <Form.Group>
                                            <Form.Label>Email</Form.Label>
                                            <CustomInput
                                                type="email"
                                                placeholder="email"
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Username</Form.Label>
                                            <CustomInput
                                                type="text"
                                                placeholder="username"
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Password</Form.Label>
                                            <CustomInput
                                                isPassword
                                                type="password"
                                                placeholder="password"
                                                showPassword={props?.showPassword}
                                                togglePassword={() => props?.togglePassword()}
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Confirm Password</Form.Label>
                                            <CustomInput
                                                isPassword
                                                type="password"
                                                placeholder="password"
                                                showPassword={props?.showPassword}
                                                togglePassword={() => props?.togglePassword()}
                                            />
                                        </Form.Group>
                                    </Form>
                                    <Row className="mx-2 mt-4">
                                        <PurpleButton text="REGISTER" />
                                    </Row>
                                    <Row className="mt-4">
                                        <Link to="/login">Already have an account? Login</Link>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default RegisterComponent;