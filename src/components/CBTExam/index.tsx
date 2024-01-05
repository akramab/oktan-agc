import { lazy } from "react";
import { Row, Col, Image, Modal } from "react-bootstrap";

const Topbar = lazy(() => import("../../components/General/Topbar"));
const ExamItem = lazy(() => import("../General/ExamItem"));
const QuestionNav = lazy(() => import("../General/QuestionNav"));
const CustomButton = lazy(() => import("../General/CustomButton"));
const ExamTimer = lazy(() => import("../General/ExamTimer"));

const CBTExamComponent = (props: any) => {
    const end_exam = props?.cbtExamResponse?.end_exam;
    let finish_time = new Date(end_exam);
    return (
        <>
            <Modal show={props?.showModal} centered>
                <Modal.Body>
                    <Row className="text-center p-5">
                        <Col>
                            <p className="fw-bold">Submit berhasil!</p>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Row>
                        <Col>
                            <CustomButton bg="bg-cyan" text="Tutup" onClick={() => props?.redirectFinish()}/>
                        </Col>
                    </Row>
                </Modal.Footer>
            </Modal>
            <Topbar isExam title="" />
            <div className="bg-gray exam-content p-3">
                <Row>
                    <Col xs={{ order: 'last', span: 12 }} md={{ order: 'first', span: 8 }} className="ps-0 pe-2">
                        <Row className="rounded-3 bg-white mb-3">
                            <Col className="p-3">
                                <p className="fs-7 fw-bold">{props?.cbtExamResponse?.title}</p>
                            </Col>
                        </Row>
                        {props?.cbtExamResponse?.questions?.map((item: any, idx: number) => {
                            return (<ExamItem handleAnswerChange={(e: any) => props?.handleAnswerChange(e, item.id, props?.cbtExamResponse?.cbt_id)} handleToggleFlag={props?.handleToggleFlag} handleAddAnswer={props?.handleAddAnswer} data={item} key={idx} />)
                        })}
                    </Col>
                    <Col xs={{ order: 'first', span: 12 }} md={{ order: 'last', span: 4 }} className="ps-2 pe-0">
                        <Row className="rounded-3 bg-white align-items-center mb-3 p-2">
                            <Col>
                                <p className="fs-7 fw-bold">Time Left</p>
                            </Col>
                            <Col className="text-end">
                                {end_exam &&
                                    <ExamTimer expiryTimestamp={finish_time} timerExpired={() => props?.handleSubmitExam()} />
                                }
                            </Col>
                        </Row>
                        <div className="rounded-3 bg-white mb-3 p-3">
                            <p className="fs-7 mb-3">Question Navigation</p>
                            <Row className="align-items-center justify-content-between">
                                {props?.cbtExamResponse?.questions?.map((item: any, idx: number) => {
                                    return (<QuestionNav data={item} key={idx} />)
                                })}
                            </Row>
                        </div>
                        <Row className="mt-3">
                            <CustomButton text="Submit Jawaban" bg="bg-blue-btn" onClick={() => props?.handleSubmitExam()} isDisabled={!props?.isSubmittable} />
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default CBTExamComponent;