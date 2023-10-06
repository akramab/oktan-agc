import { lazy } from "react";
import { Row, Col, Image, Form, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"

const CustomInput = lazy(() => import("../../components/General/CustomInput"));
const CustomButton = lazy(() => import("../General/CustomButton"));

const LoginComponent = (props: any) => {
    return (
        <div className="h-100 d-flex flex-column">
            <Row className="bg-gray align-items-center flex-grow-1">
                <Col>
                    <Row>
                        <Col className="d-flex justify-content-center mb-3">
                            <Navbar.Brand href="/" className="text-center rounded px-4 py-1">
                                <Image src={logo} className="width-logo-nav mb-3" />
                                <h3 className="fw-bolder ms-2">Oktan ITB 2024</h3>
                            </Navbar.Brand>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row className="justify-content-center">
                                <Col xs={12} sm={9} md={7} lg={5} xl={4} xxl={3} className="bg-white text-center rounded shadow-lg py-5 px-4">
                                    <h3 className="mb-5">Sign In</h3>
                                    <Form className="text-start mx-2">
                                        <Form.Group>
                                            <Form.Label>Email or Username</Form.Label>
                                            <CustomInput
                                                required
                                                type="text"
                                                placeholder="username/email"
                                                name="emailUsername"
                                                onChange={(e: any) => props?.handleChange(e)}
                                                value={props?.emailUsername}
                                                checkInput={props?.emailUsernameError ? "input-error" : ""}
                                                errorMessage={props?.emailUsernameError ?? ""}
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Password</Form.Label>
                                            <CustomInput
                                                isPassword
                                                required
                                                type="password"
                                                placeholder="password"
                                                name="password"
                                                onChange={(e: any) => props?.handleChange(e)}
                                                value={props?.password}
                                                checkInput={props?.passwordError ? "input-error" : ""}
                                                errorMessage={props?.passwordError ?? ""}
                                                showPassword={props?.showPassword}
                                                togglePassword={() => props?.togglePassword()}
                                            />
                                        </Form.Group>
                                        <Row className="mt-4">
                                            <CustomButton bg="bg-cyan" text="LOGIN" onClick={(e: any) => props?.handleLogin(e)} />
                                        </Row>
                                    </Form>
                                    <Row className="mt-4 fs-7">
                                        <Col className="text-start">
                                            <Link to="/register" className="text-default">Don't have an account? Register</Link>
                                        </Col>
                                        <Col className="text-end width-fit">
                                            <Link to="/forgot" className="text-default">Forgot Password</Link>
                                        </Col>
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

export default LoginComponent;