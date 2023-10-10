import { lazy } from "react";
import { Row, Col, Form, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faSchool, faUser, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const CustomInput = lazy(() => import("../../components/General/CustomInput"));
const Sidebar = lazy(() => import("../../components/General/Sidebar"));
const Topbar = lazy(() => import("../../components/General/Topbar"));
const FileInput = lazy(() => import("../../components/General/FileInput"));
const CustomButton = lazy(() => import("../General/CustomButton"));

const CrystalProfileComponent = (props: any) => {
    return (
        <>
            <Modal show={props?.showModal} centered>
                <Modal.Body>
                    <Row className="text-center p-5">
                        <Col>
                            <p className="fw-bold">Profil berhasil diperbaharui!</p>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Row>
                        <Col>
                            <CustomButton bg="bg-cyan" text="Tutup" onClick={() => props?.toggleModal()}/>
                        </Col>
                    </Row>
                </Modal.Footer>
            </Modal>
            <Topbar title="Lengkapi Profil Tim" onBarsClick={props?.toggleSidebar} />
            <Sidebar isCrystal verified={props?.verified} shrink={props?.shrink} />
            <div className={`side-content bg-gray p-4 ${props?.shrink && "shrink"}`}>
                <Form className="profile">
                    <Row>
                        <Col xs={12} md={6}>
                            <Form.Group>
                                <Form.Label>Nama Kelompok<span className="text-asterisk">*</span></Form.Label>
                                <CustomInput
                                    required
                                    isProfile
                                    type="text"
                                    placeholder="Nama Kelompok"
                                    name="teamName"
                                    icon={faUserGroup}
                                    onChange={(e: any) => props?.handleChange(e)}
                                    value={props?.teamName}
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6}>
                            <Form.Group>
                                <Form.Label>Dokumen Pendaftaran<span className="text-asterisk">*</span></Form.Label>
                                <FileInput
                                    text={
                                        props?.registrationDocument ?
                                        props.registrationDocument.name :
                                        "Upload dalam 1 dokumen PDF"
                                    }
                                    name="registrationDocument"
                                    onChange={(e: any) => props?.handleChange(e)}
                                    value={props?.registrationDocument}
                                    checkInput={props?.registrationDocumentError ? "input-error" : ""}
                                    errorMessage={props?.registrationDocumentError ?? ""}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <hr className="my-4" />
                    <Row>
                        <h5 className="fw-bold mb-3">Data Anggota 1</h5>
                        <Col xs={12} md={4}>
                            <Form.Group>
                                <Form.Label>Nama Anggota<span className="text-asterisk">*</span></Form.Label>
                                <CustomInput
                                    required
                                    isProfile
                                    type="text"
                                    placeholder="Nama Anggota"
                                    name="name1"
                                    icon={faUser}
                                    onChange={(e: any) => props?.handleChange(e)}
                                    value={props?.name1}
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={4}>
                            <Form.Group>
                                <Form.Label>Nomor Whatsapp<span className="text-asterisk">*</span></Form.Label>
                                <CustomInput
                                    required
                                    isProfile
                                    type="text"
                                    placeholder="696887755"
                                    name="number1"
                                    pre="(+62)"
                                    onChange={(e: any) => props?.handleChange(e)}
                                    value={props?.number1}
                                    checkInput={props?.number1Error ? "input-error" : ""}
                                    errorMessage={props?.number1Error ?? ""}
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={4}>
                            <Form.Group>
                                <Form.Label>Email<span className="text-asterisk">*</span></Form.Label>
                                <CustomInput
                                    required
                                    isProfile
                                    type="email"
                                    placeholder="Email"
                                    name="email1"
                                    pre="@"
                                    onChange={(e: any) => props?.handleChange(e)}
                                    value={props?.email1}
                                    checkInput={props?.email1Error ? "input-error" : ""}
                                    errorMessage={props?.email1Error ?? ""}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <hr className="my-4" />
                    <Row>
                        <h5 className="fw-bold mb-3">Data Anggota 2</h5>
                        <Col xs={12} md={4}>
                            <Form.Group>
                                <Form.Label>Nama Anggota<span className="text-asterisk">*</span></Form.Label>
                                <CustomInput
                                    required
                                    isProfile
                                    type="text"
                                    placeholder="Nama Anggota"
                                    name="name2"
                                    icon={faUser}
                                    onChange={(e: any) => props?.handleChange(e)}
                                    value={props?.name2}
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={4}>
                            <Form.Group>
                                <Form.Label>Nomor Whatsapp<span className="text-asterisk">*</span></Form.Label>
                                <CustomInput
                                    required
                                    isProfile
                                    type="text"
                                    placeholder="696887755"
                                    name="number2"
                                    pre="(+62)"
                                    onChange={(e: any) => props?.handleChange(e)}
                                    value={props?.number2}
                                    checkInput={props?.number2Error ? "input-error" : ""}
                                    errorMessage={props?.number2Error ?? ""}
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={4}>
                            <Form.Group>
                                <Form.Label>Email<span className="text-asterisk">*</span></Form.Label>
                                <CustomInput
                                    required
                                    isProfile
                                    type="email"
                                    placeholder="Email"
                                    name="email2"
                                    pre="@"
                                    onChange={(e: any) => props?.handleChange(e)}
                                    value={props?.email2}
                                    checkInput={props?.email2Error ? "input-error" : ""}
                                    errorMessage={props?.email2Error ?? ""}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <hr className="my-4" />
                    <Row>
                        <h5 className="fw-bold mb-3">Data Guru</h5>
                        <Col xs={12} md={4}>
                            <Form.Group>
                                <Form.Label>Nama Guru<span className="text-asterisk">*</span></Form.Label>
                                <CustomInput
                                    required
                                    isProfile
                                    type="text"
                                    placeholder="Nama Guru"
                                    name="teacherName"
                                    icon={faUser}
                                    onChange={(e: any) => props?.handleChange(e)}
                                    value={props?.teacherName}
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={4}>
                            <Form.Group>
                                <Form.Label>Nomor Whatsapp<span className="text-asterisk">*</span></Form.Label>
                                <CustomInput
                                    required
                                    isProfile
                                    type="text"
                                    placeholder="696887755"
                                    name="teacherNumber"
                                    pre="(+62)"
                                    onChange={(e: any) => props?.handleChange(e)}
                                    value={props?.teacherNumber}
                                    checkInput={props?.teacherNumberError ? "input-error" : ""}
                                    errorMessage={props?.teacherNumberError ?? ""}
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={4}>
                            <Form.Group>
                                <Form.Label>Email<span className="text-asterisk">*</span></Form.Label>
                                <CustomInput
                                    required
                                    isProfile
                                    type="email"
                                    placeholder="Email"
                                    name="teacherEmail"
                                    pre="@"
                                    onChange={(e: any) => props?.handleChange(e)}
                                    value={props?.teacherEmail}
                                    checkInput={props?.teacherEmailError ? "input-error" : ""}
                                    errorMessage={props?.teacherEmailError ?? ""}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <hr className="my-4" />
                    <Row>
                        <h5 className="fw-bold mb-3">Data Sekolah</h5>
                        <Col xs={12} md={4}>
                            <Form.Group>
                                <Form.Label>Nama Sekolah<span className="text-asterisk">*</span></Form.Label>
                                <CustomInput
                                    required
                                    isProfile
                                    type="text"
                                    placeholder="Nama Sekolah"
                                    name="schoolName"
                                    icon={faSchool}
                                    onChange={(e: any) => props?.handleChange(e)}
                                    value={props?.schoolName}
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={4}>
                            <Form.Group>
                                <Form.Label>Nomor Whatsapp<span className="text-asterisk">*</span></Form.Label>
                                <CustomInput
                                    required
                                    isProfile
                                    type="text"
                                    placeholder="696887755"
                                    name="schoolNumber"
                                    pre="(+62)"
                                    onChange={(e: any) => props?.handleChange(e)}
                                    value={props?.schoolNumber}
                                    checkInput={props?.schoolNumberError ? "input-error" : ""}
                                    errorMessage={props?.schoolNumberError ?? ""}
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={4}>
                            <Form.Group>
                                <Form.Label>Email<span className="text-asterisk">*</span></Form.Label>
                                <CustomInput
                                    required
                                    isProfile
                                    type="email"
                                    placeholder="Email"
                                    name="schoolEmail"
                                    pre="@"
                                    onChange={(e: any) => props?.handleChange(e)}
                                    value={props?.schoolEmail}
                                    checkInput={props?.schoolEmailError ? "input-error" : ""}
                                    errorMessage={props?.schoolEmailError ?? ""}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <hr className="my-4" />
                    <Row>
                        <Col xs={12} md={6}>
                            <Form.Group>
                                <Form.Label>Data Pembayaran<span className="text-asterisk">*</span></Form.Label>
                                <FileInput
                                    text={
                                        props?.paymentDocument ?
                                        props.paymentDocument.name :
                                        "Upload dalam 1 dokumen PDF"
                                    }
                                    name="paymentDocument"
                                    onChange={(e: any) => props?.handleChange(e)}
                                    value={props?.paymentDocument}
                                    checkInput={props?.paymentDocumentError ? "input-error" : ""}
                                    errorMessage={props?.paymentDocumentError ?? ""}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-end mt-3">
                            <CustomButton
                                bg="bg-blue-btn"
                                text={<>
                                    Submit Data
                                    <FontAwesomeIcon icon={faPaperPlane} className="ms-2" />
                                </>}
                                onClick={(e: any) => props?.handleSubmitData(e)}
                            />
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    )
}

export default CrystalProfileComponent;