import { lazy } from "react";
import { Row, Col, Image, Form, Navbar, Modal } from "react-bootstrap";
import logo from "../../assets/logo.png"

const CustomInput = lazy(() => import("../../components/General/CustomInput"));
const CustomButton = lazy(() => import("../General/CustomButton"));

const ForgotPasswordComponent = (props: any) => {
    return (
        <>
            <Modal show={props?.showModal} centered>
                <Modal.Body>
                    <Row className="text-center p-5">
                        <Col>
                            <p className="fw-bold">Silakan cek email Anda!</p>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Row>
                        <Col>
                            <CustomButton bg="bg-green-btn" text="Tutup" onClick={() => props?.toggleModal()} />
                        </Col>
                    </Row>
                </Modal.Footer>
            </Modal>
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
                                        <h3 className="mb-5">Forgot Password</h3>
                                        <Form className="text-start mx-2">
                                            <Form.Group>
                                                <Form.Label>Email</Form.Label>
                                                <CustomInput
                                                    required
                                                    type="email"
                                                    placeholder="email"
                                                    name="email"
                                                    onChange={(e: any) => props?.handleChange(e)}
                                                    value={props?.email}
                                                    checkInput={props?.emailError ? "input-error" : ""}
                                                    errorMessage={props?.emailError ?? ""}
                                                />
                                            </Form.Group>
                                            <Row className="mt-4">
                                                <CustomButton bg="bg-cyan" text="RESET" onClick={(e: any) => props?.handleReset(e)} />
                                            </Row>
                                        </Form>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default ForgotPasswordComponent;