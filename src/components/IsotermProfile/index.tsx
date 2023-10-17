import { lazy } from "react";
import { Row, Col, Form, InputGroup, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faSchool, faUser, faPaperPlane, faGraduationCap, faBaseball } from '@fortawesome/free-solid-svg-icons';

const CustomInput = lazy(() => import("../../components/General/CustomInput"));
const CustomDropdown = lazy(() => import("../../components/General/CustomDropdown"));
const Sidebar = lazy(() => import("../../components/General/Sidebar"));
const Topbar = lazy(() => import("../../components/General/Topbar"));
const FileInput = lazy(() => import("../../components/General/FileInput"));
const CustomButton = lazy(() => import("../General/CustomButton"));

const IsotermProfileComponent = (props: any) => {
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
            <Sidebar isIsoterm verified={props?.verified} shrink={props?.shrink} />
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
                                <Form.Label>Subtema<span className="text-asterisk">*</span></Form.Label>  
                                <InputGroup className="rounded">
                                    <CustomDropdown
                                        isProfile
                                        className="m-0"
                                        name="subtheme"
                                        placeholder="Pilih subtema"
                                        value={props?.subtheme}
                                        options={[
                                            "Fotokimia Hijau",
                                            "Material Energi Hijau",
                                            "Biokimia Energi",
                                            "Kimia Reduksi Emisi"
                                        ]}
                                        onChange={(e: any) => props?.handleChange(e)}
                                    />
                                </InputGroup>
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
                                <Form.Label>Tahun Angkatan<span className="text-asterisk">*</span></Form.Label>
                                <CustomInput
                                    required
                                    isProfile
                                    type="text"
                                    placeholder="2023"
                                    name="year1"
                                    icon={faGraduationCap}
                                    onChange={(e: any) => props?.handleChange(e)}
                                    value={props?.year1}
                                    checkInput={props?.year1Error ? "input-error" : ""}
                                    errorMessage={props?.year1Error ?? ""}
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={4}>
                            <Form.Group>
                                <Form.Label>Jurusan<span className="text-asterisk">*</span></Form.Label>
                                <CustomInput
                                    required
                                    isProfile
                                    type="text"
                                    placeholder="Jurusan"
                                    name="major1"
                                    icon={faBaseball}
                                    onChange={(e: any) => props?.handleChange(e)}
                                    value={props?.major1}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
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
                        <Col xs={12} md={6}>
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
                                <Form.Label>Tahun Angkatan<span className="text-asterisk">*</span></Form.Label>
                                <CustomInput
                                    required
                                    isProfile
                                    type="text"
                                    placeholder="2023"
                                    name="year2"
                                    icon={faGraduationCap}
                                    onChange={(e: any) => props?.handleChange(e)}
                                    value={props?.year2}
                                    checkInput={props?.year2Error ? "input-error" : ""}
                                    errorMessage={props?.year2Error ?? ""}
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={4}>
                            <Form.Group>
                                <Form.Label>Jurusan<span className="text-asterisk">*</span></Form.Label>
                                <CustomInput
                                    required
                                    isProfile
                                    type="text"
                                    placeholder="Jurusan"
                                    name="major2"
                                    icon={faBaseball}
                                    onChange={(e: any) => props?.handleChange(e)}
                                    value={props?.major2}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
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
                        <Col xs={12} md={6}>
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
                    </Row>
                    <hr className="my-4" />
                    <Row>
                        <h5 className="fw-bold mb-3">Data Anggota 3</h5>
                        <Col xs={12} md={4}>
                            <Form.Group>
                                <Form.Label>Nama Anggota<span className="text-asterisk">*</span></Form.Label>
                                <CustomInput
                                    required
                                    isProfile
                                    type="text"
                                    placeholder="Nama Anggota"
                                    name="name3"
                                    icon={faUser}
                                    onChange={(e: any) => props?.handleChange(e)}
                                    value={props?.name3}
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={4}>
                            <Form.Group>
                                <Form.Label>Tahun Angkatan<span className="text-asterisk">*</span></Form.Label>
                                <CustomInput
                                    required
                                    isProfile
                                    type="text"
                                    placeholder="2023"
                                    name="year3"
                                    icon={faGraduationCap}
                                    onChange={(e: any) => props?.handleChange(e)}
                                    value={props?.year3}
                                    checkInput={props?.year3Error ? "input-error" : ""}
                                    errorMessage={props?.year3Error ?? ""}
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={4}>
                            <Form.Group>
                                <Form.Label>Jurusan<span className="text-asterisk">*</span></Form.Label>
                                <CustomInput
                                    required
                                    isProfile
                                    type="text"
                                    placeholder="Jurusan"
                                    name="major3"
                                    icon={faBaseball}
                                    onChange={(e: any) => props?.handleChange(e)}
                                    value={props?.major3}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <Form.Group>
                                <Form.Label>Email<span className="text-asterisk">*</span></Form.Label>
                                <CustomInput
                                    required
                                    isProfile
                                    type="email"
                                    placeholder="Email"
                                    name="email3"
                                    pre="@"
                                    onChange={(e: any) => props?.handleChange(e)}
                                    value={props?.email3}
                                    checkInput={props?.email3Error ? "input-error" : ""}
                                    errorMessage={props?.email3Error ?? ""}
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6}>
                            <Form.Group>
                                <Form.Label>Nomor Whatsapp<span className="text-asterisk">*</span></Form.Label>
                                <CustomInput
                                    required
                                    isProfile
                                    type="text"
                                    placeholder="696887755"
                                    name="number3"
                                    pre="(+62)"
                                    onChange={(e: any) => props?.handleChange(e)}
                                    value={props?.number3}
                                    checkInput={props?.number3Error ? "input-error" : ""}
                                    errorMessage={props?.number3Error ?? ""}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <hr className="my-4" />
                    <Row>
                        <h5 className="fw-bold mb-3">Data Universitas</h5>
                        <Col xs={12} md={6}>
                            <Form.Group>
                                <Form.Label>Nama Universitas<span className="text-asterisk">*</span></Form.Label>
                                <CustomInput
                                    required
                                    isProfile
                                    type="text"
                                    placeholder="Nama Universitas"
                                    name="universityName"
                                    icon={faSchool}
                                    onChange={(e: any) => props?.handleChange(e)}
                                    value={props?.universityName}
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6}>
                            <Form.Group>
                                <Form.Label>Nama Dosen<span className="text-asterisk">*</span><span className="text-muted"> (Jika ada)</span></Form.Label>
                                <CustomInput
                                    required
                                    isProfile
                                    type="text"
                                    placeholder="Nama Dosen"
                                    name="teacherName"
                                    icon={faUser}
                                    onChange={(e: any) => props?.handleChange(e)}
                                    value={props?.teacherName}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <hr className="my-4" />
                    <Row>
                        <h5 className="fw-bold mb-3">Upload Dokumen Tambahan</h5>
                        <Col xs={12} md={6}>
                            <Form.Group>
                                <Form.Label>Abstrak 1<span className="text-asterisk">*</span></Form.Label>
                                <FileInput
                                    text={
                                        props?.abstract1 ?
                                        props.abstract1.name :
                                        "Upload Abstrak 1"
                                    }
                                    name="abstract1"
                                    onChange={(e: any) => props?.handleChange(e)}
                                    value={props?.abstract1}
                                    checkInput={props?.abstract1Error ? "input-error" : ""}
                                    errorMessage={props?.abstract1Error ?? ""}
                                    link={props?.abstract1Link}
                                />
                            </Form.Group>
                        </Col>
                        {props?.passed &&
                            <Col xs={12} md={6}>
                                <Form.Group>
                                    <Form.Label>Abstrak 2<span className="text-asterisk">*</span></Form.Label>
                                    <FileInput
                                        text={
                                            props?.abstract2 ?
                                            props.abstract2.name :
                                            "Upload Abstrak 2"
                                        }
                                        name="abstract2"
                                        onChange={(e: any) => props?.handleChange(e)}
                                        value={props?.abstract2}
                                        checkInput={props?.abstract2Error ? "input-error" : ""}
                                        errorMessage={props?.abstract2Error ?? ""}
                                        link={props?.abstract2Link}
                                    />
                                </Form.Group>
                            </Col>
                        }
                    </Row>
                    {props?.passed &&
                        <Row>
                            <Col xs={12} md={6}>
                                <Form.Group>
                                    <Form.Label>Karya 1<span className="text-asterisk">*</span></Form.Label>
                                    <FileInput
                                        text={
                                            props?.paper1 ?
                                            props.paper1.name :
                                            "Upload Full Paper 1"
                                        }
                                        name="paper1"
                                        onChange={(e: any) => props?.handleChange(e)}
                                        value={props?.paper1}
                                        checkInput={props?.paper1Error ? "input-error" : ""}
                                        errorMessage={props?.paper1Error ?? ""}
                                        link={props?.paper1Link}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Group>
                                    <Form.Label>Karya 2<span className="text-asterisk">*</span></Form.Label>
                                    <FileInput
                                        text={
                                            props?.paper2 ?
                                            props.paper2.name :
                                            "Upload Full Paper 2"
                                        }
                                        name="paper2"
                                        onChange={(e: any) => props?.handleChange(e)}
                                        value={props?.paper2}
                                        checkInput={props?.paper2Error ? "input-error" : ""}
                                        errorMessage={props?.paper2Error ?? ""}
                                        link={props?.paper2Link}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    }
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
                                    link={props?.paymentLink}
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6}>
                            <Form.Group>
                                <Form.Label>Dokumen<span className="text-asterisk">*</span> Disatukan</Form.Label>
                                <FileInput
                                    text={
                                        props?.fullDocument ?
                                        props.fullDocument.name :
                                        "Upload dalam 1 dokumen PDF"
                                    }
                                    name="fullDocument"
                                    onChange={(e: any) => props?.handleChange(e)}
                                    value={props?.fullDocument}
                                    checkInput={props?.fullDocumentError ? "input-error" : ""}
                                    errorMessage={props?.fullDocumentError ?? ""}
                                    link={props?.fullLink}
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

export default IsotermProfileComponent;