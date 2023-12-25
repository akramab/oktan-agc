import { lazy } from "react";
import { Row, Col, Modal, Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faPlus, faHashtag, faPaperPlane, faPen, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

const Topbar = lazy(() => import("../../components/General/Topbar"));
const Sidebar = lazy(() => import("../General/Sidebar"));
const QuestionItem = lazy(() => import("../General/QuestionItem"));
const Searchbar = lazy(() => import("../General/Searchbar"));
const CustomButton = lazy(() => import("../General/CustomButton"));
const CustomInput = lazy(() => import("../../components/General/CustomInput"));
const CustomDropdown = lazy(() => import("../../components/General/CustomDropdown"));

const QuestionDashboardComponent = (props: any) => {
    const input = props?.input;
    return (
        <>
            <Modal show={props?.showDelete} centered>
                <Modal.Body>
                    <Row className="text-center p-5">
                        <Col>
                            <p className="fw-bold">Apakah Anda yakin ingin menghapus pertanyaan ini?</p>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Row>
                        <Col>
                            <CustomButton bg="bg-blue-btn" text="Kembali" onClick={() => props?.toggleDelete()}/>
                            <span>&nbsp;&nbsp;&nbsp;</span>
                            <CustomButton bg="bg-red-btn" text="Ya" onClick={() => props?.handleDeleteQuestion()}/>
                        </Col>
                    </Row>
                </Modal.Footer>
            </Modal>
            <Modal show={props?.showCreate} centered>
                <Modal.Body className="bg-gray rounded px-5">
                    <Form className="p-5">
                        <Row className="mb-4">
                            <Col xs={4}>
                                <Form.Group>
                                    <Form.Label>Nomor Soal</Form.Label>
                                    <InputGroup className="rounded">
                                        <InputGroup.Text className="border-0">
                                            <FontAwesomeIcon icon={faHashtag} />
                                        </InputGroup.Text>
                                        <CustomInput
                                            required
                                            type="text"
                                            placeholder="0"
                                            name="number"
                                            onChange={(e: any) => props?.handleChange(e)}
                                            value={input?.number}
                                            checkInput="border-0 rounded-end"
                                        />
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col xs={8}>
                                <Form.Group>
                                    <Form.Label>Jenis Soal</Form.Label>
                                    <InputGroup className="rounded">
                                        <CustomDropdown
                                            required
                                            className="m-0 border-0"
                                            name="type"
                                            placeholder="Pilih jenis soal"
                                            value={input?.type}
                                            options={[
                                                {
                                                    value: "MC",
                                                    text: "Pilihan Ganda"
                                                },
                                                {
                                                    value: "ESSAY",
                                                    text: "Essai"
                                                }
                                            ]}
                                            onChange={(e: any) => props?.handleChange(e)}
                                        />
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col>
                                <InputGroup className="rounded">
                                    <InputGroup.Text className="border-0 d-flex align-content-start flex-wrap">
                                        <FontAwesomeIcon icon={faPen} className="mt-2" />
                                    </InputGroup.Text>
                                    <Form.Control
                                        className="border-0"
                                        required
                                        as="textarea"
                                        rows={5}
                                        placeholder="Tulis Soal disini..."
                                        name="question"
                                        onChange={(e: any) => props?.handleChange(e)}
                                        value={input?.question}
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        {input?.type === "MC" &&
                            <>
                                <hr className="mx-3 mb-4" />
                                <Row>
                                    <p className="text-green">Jawaban Benar</p>
                                </Row>
                                <Row className="mb-4">
                                    <Col>
                                        <InputGroup className="rounded">
                                                <CustomInput
                                                    required
                                                    type="text"
                                                    placeholder="..."
                                                    name="answers"
                                                    onChange={(e: any) => props?.handleChange(e, 0)}
                                                    value={input?.answers[0]?.value}
                                                    checkInput="border-0"
                                                />
                                                <InputGroup.Text className="border-0">
                                                    <FontAwesomeIcon icon={faCircle} className="done" />
                                                </InputGroup.Text>
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <p className="text-red">Jawaban Salah</p>
                                </Row>
                                <Row>
                                    <Col>
                                        <InputGroup className="rounded">
                                                <CustomInput
                                                    required
                                                    type="text"
                                                    placeholder="..."
                                                    name="answers"
                                                    onChange={(e: any) => props?.handleChange(e, 1)}
                                                    value={input?.answers[1]?.value}
                                                    checkInput="border-0"
                                                />
                                                <InputGroup.Text className="border-0">
                                                    <FontAwesomeIcon icon={faXmark} className="trash" />
                                                </InputGroup.Text>
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <InputGroup className="rounded">
                                                <CustomInput
                                                    required
                                                    type="text"
                                                    placeholder="..."
                                                    name="answers"
                                                    onChange={(e: any) => props?.handleChange(e, 2)}
                                                    value={input?.answers[2]?.value}
                                                    checkInput="border-0"
                                                />
                                                <InputGroup.Text className="border-0">
                                                    <FontAwesomeIcon icon={faXmark} className="trash" />
                                                </InputGroup.Text>
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Row className="mb-4">
                                    <Col>
                                        <InputGroup className="rounded">
                                                <CustomInput
                                                    required
                                                    type="text"
                                                    placeholder="..."
                                                    name="answers"
                                                    onChange={(e: any) => props?.handleChange(e, 3)}
                                                    value={input?.answers[3]?.value}
                                                    checkInput="border-0"
                                                />
                                                <InputGroup.Text className="border-0">
                                                    <FontAwesomeIcon icon={faXmark} className="trash" />
                                                </InputGroup.Text>
                                        </InputGroup>
                                    </Col>
                                </Row>
                            </>
                        }
                        <Row>
                            <Col className="text-end">
                                <CustomButton
                                    bg="bg-blue-btn"
                                    text={<>
                                        Submit Soal
                                        <FontAwesomeIcon icon={faPaperPlane} className="me-2 text-white" />
                                    </>}
                                    onClick={props?.id ?
                                            () => props?.handleEditQuestion() :
                                            () => props?.submitCreateQuestion()
                                        }
                                />
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal>
            <Topbar title="Data Peserta" onBarsClick={props?.toggleSidebar} />
            <Sidebar isAdmin verified={props?.verified} shrink={props?.shrink} />
            <div className={`side-content bg-gray ${props?.shrink && "shrink"}`}>
                <div className="p-4 mb-5">
                    <Row className="justify-content-between align-items-center my-2">
                        <Col>
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
                        {props?.questionsDataResponse?.length ? props.questionsDataResponse.map((item: any, idx: number) => {
                            return <QuestionItem toggleEdit={props?.toggleEdit} toggleDelete={props?.toggleDelete} data={item} key={idx} />
                        }) : null}
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
                            onClick={() => props?.toggleCreate()}
                        />
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default QuestionDashboardComponent;