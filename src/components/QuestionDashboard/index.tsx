import { lazy } from "react";
import { Row, Col, Modal, Form } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faPlus } from '@fortawesome/free-solid-svg-icons';

const Topbar = lazy(() => import("../../components/General/Topbar"));
const Sidebar = lazy(() => import("../General/Sidebar"));
const QuestionItem = lazy(() => import("../General/QuestionItem"));
const Searchbar = lazy(() => import("../General/Searchbar"));
const CustomButton = lazy(() => import("../General/CustomButton"));

const QuestionDashboardComponent = (props: any) => {
    return (
        <>
            <Modal show={props?.showModal} centered>
                <Modal.Body>
                    <Row className="text-center p-5">
                        <Col>
                            <p className="fw-bold">Pertanyaan berhasil diperbaharui!</p>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Row>
                        <Col>
                            <CustomButton bg="bg-purple-dope" text="Tutup" onClick={() => props?.toggleModal()}/>
                        </Col>
                    </Row>
                </Modal.Footer>
            </Modal>
            <Topbar title="Data Peserta" onBarsClick={props?.toggleSidebar} />
            <Sidebar isAdmin verified={props?.verified} shrink={props?.shrink} />
            <div className={`side-content bg-gray ${props?.shrink && "shrink"}`}>
                <div className="p-4 mb-5">
                    <Row className="justify-content-between align-items-center my-2">
                        <Col className="">
                            <Form>
                                <Searchbar />
                            </Form>
                        </Col>
                        <Col className="text-end">
                            <CustomButton
                                bg="bg-purple-dope"
                                text={<>
                                    <FontAwesomeIcon icon={faFilter} className="me-2" />
                                    Filter
                                </>}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <QuestionItem
                            data={{
                                number: "1",
                                question: "Apakah mayonaise adalah instrumen, mayonaise bukan instrumen Patrick. Patrick stop. STOP!",
                                type: "MC",
                                answers: [
                                    {
                                        value: "12",
                                        correct: false
                                    },
                                    {
                                        value: "20",
                                        correct: false
                                    },
                                    {
                                        value: "31",
                                        correct: true
                                    },
                                    {
                                        value: "5",
                                        correct: false
                                    }
                                ]
                            }}
                        />
                        <QuestionItem
                            data={{
                                number: "1",
                                question: "Jika f(x) = 9 cos x + 3 sin x, maka f’(0) = ... ",
                                type: "ESSAY"
                            }}
                        />
                        <QuestionItem
                            data={{
                                number: "1",
                                question: "Apakah mayonaise adalah instrumen, mayonaise bukan instrumen Patrick. Patrick stop. STOP!",
                                type: "MC",
                                answers: [
                                    {
                                        value: "12",
                                        correct: false
                                    },
                                    {
                                        value: "20",
                                        correct: false
                                    },
                                    {
                                        value: "31",
                                        correct: true
                                    },
                                    {
                                        value: "5",
                                        correct: false
                                    }
                                ]
                            }}
                        />
                    </Row>
                </div>
                <Row className="bg-white fixed-bottom p-3">
                    <Col className="text-end">
                        <CustomButton
                            bg="bg-blue-btn"
                            text={<>
                                Buat Soal Baru
                                <FontAwesomeIcon icon={faPlus} className="ms-2" />
                            </>}
                        />
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default QuestionDashboardComponent;