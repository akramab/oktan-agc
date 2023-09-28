import { lazy } from "react";
import { Row, Col, Form } from "react-bootstrap";
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
            <Topbar title="Lengkapi Profil Tim" />
            <Sidebar isCrystal/>
            <div className="side-content bg-gray p-4">
                <Form className="profile">
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Nama Kelompok<span className="text-asterisk">*</span></Form.Label>
                                <CustomInput
                                    required
                                    isProfile
                                    type="text"
                                    placeholder="Nama Kelompok"
                                    name="teamName"
                                    icon={faUserGroup}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Dokumen Pendaftaran<span className="text-asterisk">*</span></Form.Label>
                                <FileInput
                                    text="Upload dalam 1 dokumen PDF"
                                    name="registrationDocument"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <hr className="my-4" />
                    <Row>
                        <h5 className="fw-bold mb-3">Data Anggota 1</h5>
                        <Col>
                            <Form.Group>
                                <Form.Label>Nama Anggota<span className="text-asterisk">*</span></Form.Label>
                                <CustomInput
                                    required
                                    isProfile
                                    type="text"
                                    placeholder="Nama Anggota"
                                    name="name1"
                                    icon={faUser}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Nomor Whatsapp<span className="text-asterisk">*</span></Form.Label>
                                <CustomInput
                                    required
                                    isProfile
                                    type="text"
                                    placeholder="696 88 77 55"
                                    name="number1"
                                    pre="(+62)"
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Email<span className="text-asterisk">*</span></Form.Label>
                                <CustomInput
                                    required
                                    isProfile
                                    type="email"
                                    placeholder="Email"
                                    name="email1"
                                    pre="@"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <hr className="my-4" />
                    <Row>
                        <h5 className="fw-bold mb-3">Data Anggota 2</h5>
                        <Col>
                            <Form.Group>
                                <Form.Label>Nama Anggota<span className="text-asterisk">*</span></Form.Label>
                                <CustomInput
                                    required
                                    isProfile
                                    type="text"
                                    placeholder="Nama Anggota"
                                    name="name2"
                                    icon={faUser}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Nomor Whatsapp<span className="text-asterisk">*</span></Form.Label>
                                <CustomInput
                                    required
                                    isProfile
                                    type="text"
                                    placeholder="696 88 77 55"
                                    name="number2"
                                    pre="(+62)"
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Email<span className="text-asterisk">*</span></Form.Label>
                                <CustomInput
                                    required
                                    isProfile
                                    type="email"
                                    placeholder="Email"
                                    name="email2"
                                    pre="@"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <hr className="my-4" />
                    <Row>
                        <h5 className="fw-bold mb-3">Data Guru</h5>
                        <Col>
                            <Form.Group>
                                <Form.Label>Nama Guru<span className="text-asterisk">*</span></Form.Label>
                                <CustomInput
                                    required
                                    isProfile
                                    type="text"
                                    placeholder="Nama Guru"
                                    name="teacherName"
                                    icon={faUser}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Nomor Whatsapp<span className="text-asterisk">*</span></Form.Label>
                                <CustomInput
                                    required
                                    isProfile
                                    type="text"
                                    placeholder="696 88 77 55"
                                    name="teacherNumber"
                                    pre="(+62)"
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Email<span className="text-asterisk">*</span></Form.Label>
                                <CustomInput
                                    required
                                    isProfile
                                    type="email"
                                    placeholder="Email"
                                    name="teacherEmail"
                                    pre="@"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <hr className="my-4" />
                    <Row>
                        <h5 className="fw-bold mb-3">Data Sekolah</h5>
                        <Col>
                            <Form.Group>
                                <Form.Label>Nama Sekolah<span className="text-asterisk">*</span></Form.Label>
                                <CustomInput
                                    required
                                    isProfile
                                    type="text"
                                    placeholder="Nama Sekolah"
                                    name="schoolName"
                                    icon={faSchool}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Nomor Whatsapp<span className="text-asterisk">*</span></Form.Label>
                                <CustomInput
                                    required
                                    isProfile
                                    type="text"
                                    placeholder="696 88 77 55"
                                    name="schoolNumber"
                                    pre="(+62)"
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Email<span className="text-asterisk">*</span></Form.Label>
                                <CustomInput
                                    required
                                    isProfile
                                    type="email"
                                    placeholder="Email"
                                    name="schoolEmail"
                                    pre="@"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <hr className="my-4" />
                    <Row>
                        <Col xs={6}>
                            <Form.Group>
                                <Form.Label>Data Pembayaran<span className="text-asterisk">*</span></Form.Label>
                                <FileInput
                                    text="Upload dalam 1 dokumen PDF"
                                    name="paymentDocument"
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
                            />
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    )
}

export default CrystalProfileComponent;