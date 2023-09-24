import { lazy } from "react";
import { Row, Col, Image, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers, faMedal, faTrophy, faMoneyBillWave  } from '@fortawesome/free-solid-svg-icons';
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons';
import crystal from "../../assets/crystal.png"
import requirement from "../../assets/requirement.jpg"
import sign from "../../assets/sign.svg"
import whatsapp from "../../assets/whatsapp.svg"
import line from "../../assets/line.svg"

const NavigationBar = lazy(() => import("../../components/General/NavigationBar"));
const CustomButton = lazy(() => import("../General/CustomButton"));
const Footer = lazy(() => import("../General/Footer"));

const CrystalCompetitionComponent = (props: any) => {
    return (
        <>
            <div className="bg-image-full">
                <NavigationBar />
                <Row className="py-4">
                    <Col className="text-center my-5 py-5">
                        <h1 className="text-white my-3 fw-bold display-5">Crystal Competition</h1>
                    </Col>
                </Row>
            </div>
            <div className="p-3 bg-white">
                <Row className="justify-content-center align-items-center p-5 m-5">
                    <Col xs={6}>
                        <h2 className="fw-bold mb-4">
                            What is Crystal Competition?
                            <hr className="text-purple hr-underline" />
                        </h2>
                        <p>
                            CRYSTAL (Chemistry Biggest National Competition) adalah kompetisi kimia
                            untuk pelajar SMA/sederajat se-Indonesia. Kompetisi ini merupakan salah
                            satu acara di OKTAN 2023. CRYSTAL OKTAN 2023 bertujuan untuk memacu
                            semangat berkompetisi dan menguji keilmuan kimia pelajar SMA se-Indonesia.
                        </p>
                        <p className="fw-bold mt-3">Untuk informasi lebih lanjut silahkan klik link dibawah ini:</p>
                        <Row className="">
                            <Col className="width-fit rounded shadow-sm p-3 mt-2 darken-hover">
                                <a target="_blank" href="https://drive.google.com/file/d/1RNlzW4rSXBhf_psq3auqrNi0WFUqZaCf/view?usp=drivesdk">
                                    <FontAwesomeIcon icon={faGoogleDrive} size="lg" className="px-1 icon-drive" />
                                </a>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={4}>
                        <Image src={crystal} fluid rounded className="shadow"/>
                    </Col>
                </Row>
            </div>
            <div className="p-3 bg-white">
                <Row className="justify-content-center align-items-center px-5 mx-5">
                    <Col xs={4}>
                        <Image src={requirement} fluid className="shadow p-2 rounded"/>
                    </Col>
                    <Col xs={6} className="ps-5">
                        <h2 className="fw-bold mb-4">
                            Requirements
                            <hr className="text-purple hr-underline" />
                        </h2>
                        <p>Berikut merupakan persyaratan untuk mengikuti lomba Crystal.</p>
                        <ListGroup>
                            <ListGroup.Item className="px-4">
                                <Row className="align-items-center">
                                    <Col className="width-icon p-0 text-center">
                                        <FontAwesomeIcon icon={faUser} />
                                    </Col>
                                    <Col>
                                        <p>
                                            SMA/K sederajat yang berstatus aktif dan memiliki kartu pelajar
                                        </p>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item className="px-4">
                                <Row className="align-items-center">
                                    <Col className="width-icon p-0 text-center">
                                        <FontAwesomeIcon icon={faUsers} />
                                    </Col>
                                    <Col>
                                        <p>
                                            Satu tim terdiri dari 1 atau 2 orang dari sekolah yang sama
                                        </p>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item className="px-4">
                                <Row className="align-items-center">
                                    <Col className="width-icon p-0 text-center">
                                        <FontAwesomeIcon icon={faMedal} />
                                    </Col>
                                    <Col>
                                        <p>
                                            Belum pernah mendapatkan medali (emas, perak, dan perunggu)
                                            dalam ajang kompetisi kimia nasional (Kemendikbud-Ristek) dan
                                            internasional, serta belum pernah menjadi juara pertama OKTAN
                                            ITB tahun sebelumnya
                                        </p>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item className="px-4">
                                <Row className="align-items-center">
                                    <Col className="width-icon p-0 text-center">
                                        <Image src={sign} />
                                    </Col>
                                    <Col>
                                        <p>
                                            Menandatangani surat pernyataan jujur atau tidak mencontek
                                        </p>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </div>
            <div className="py-5 px-3 bg-white text-center">
                <Row className="justify-content-center mt-4">
                    <h2 className="fw-bold">
                        Prize Pool
                        <hr className="text-purple mx-auto hr-underline" />
                    </h2>
                    <p className="mt-4">
                        Berikut merupakan hadiah dari kejuaraan Crystal Competition.
                    </p>
                </Row>
                <Row className="justify-content-center mt-5">
                    <Col xs={3} className="mx-3 rounded shadow zoom">
                        <h5 className="mt-4 pt-4">Juara 1</h5>
                        <p className="text-secondary mt-2 mb-3">
                            Piala + Piala bergilir + Uang pembinaan Rp. 9.000.000
                        </p>
                        <Row className="justify-content-center pb-4 mb-4">
                            <Col className="width-fit rounded-circle shadow-sm mx-2 py-2">
                                <FontAwesomeIcon icon={faMedal} size="lg" className="purple-icon" />
                            </Col>
                            <Col className="width-fit rounded-circle shadow-sm mx-1 py-2">
                                <FontAwesomeIcon icon={faTrophy} size="lg" className="purple-icon" />
                            </Col>
                            <Col className="width-fit rounded-circle shadow-sm mx-2 py-2">
                                <FontAwesomeIcon icon={faMoneyBillWave} size="lg" className="purple-icon" />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={3} className="mx-3 rounded shadow zoom d-flex align-items-center flex-column">
                        <h5 className="mt-4 pt-4">Juara 2</h5>
                        <p className="text-secondary mt-2 mb-3">
                            Piala + Uang pembinaan Rp. 6.000.000
                        </p>
                        <Row className="pb-4 mb-4 mt-auto">
                            <Col className="width-fit rounded-circle shadow-sm mx-2 py-2">
                                <FontAwesomeIcon icon={faMedal} size="lg" className="purple-icon" />
                            </Col>
                            <Col className="width-fit rounded-circle shadow-sm mx-1 py-2">
                                <FontAwesomeIcon icon={faTrophy} size="lg" className="purple-icon" />
                            </Col>
                            <Col className="width-fit rounded-circle shadow-sm mx-2 py-2">
                                <FontAwesomeIcon icon={faMoneyBillWave} size="lg" className="purple-icon" />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={3} className="mx-3 rounded shadow zoom d-flex align-items-center flex-column">
                        <h5 className="mt-4 pt-4">Juara 3</h5>
                        <p className="text-secondary mt-2 mb-3">
                            Piala + Uang pembinaan Rp. 3.000.000
                        </p>
                        <Row className="pb-4 mb-4 mt-auto">
                            <Col className="width-fit rounded-circle shadow-sm mx-2 py-2">
                                <FontAwesomeIcon icon={faMedal} size="lg" className="purple-icon" />
                            </Col>
                            <Col className="width-fit rounded-circle shadow-sm mx-1 py-2">
                                <FontAwesomeIcon icon={faTrophy} size="lg" className="purple-icon" />
                            </Col>
                            <Col className="width-fit rounded-circle shadow-sm mx-2 py-2">
                                <FontAwesomeIcon icon={faMoneyBillWave} size="lg" className="purple-icon" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="justify-content-center my-5">
                    <Col xs={3} className="mx-3 rounded shadow zoom">
                        <h5 className="mt-4 pt-4">Juara Harapan 1</h5>
                        <p className="text-secondary mt-2 mb-3">
                            Medali + Uang pembinaan Rp. 1.500.000
                        </p>
                        <Row className="justify-content-center pb-4 mb-4">
                            <Col className="width-fit rounded-circle shadow-sm mx-2 py-2">
                                <FontAwesomeIcon icon={faMedal} size="lg" className="purple-icon" />
                            </Col>
                            <Col className="width-fit rounded-circle shadow-sm mx-2 py-2">
                                <FontAwesomeIcon icon={faMoneyBillWave} size="lg" className="purple-icon" />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={3} className="mx-3 rounded shadow zoom">
                        <h5 className="mt-4 pt-4">Juara Harapan 2</h5>
                        <p className="text-secondary mt-2 mb-3">
                            Medali + Uang pembinaan Rp. 1.000.000
                        </p>
                        <Row className="justify-content-center pb-4 mb-4">
                            <Col className="width-fit rounded-circle shadow-sm mx-2 py-2">
                                <FontAwesomeIcon icon={faMedal} size="lg" className="purple-icon" />
                            </Col>
                            <Col className="width-fit rounded-circle shadow-sm mx-2 py-2">
                                <FontAwesomeIcon icon={faMoneyBillWave} size="lg" className="purple-icon" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            <Footer />
        </>
    )
}

export default CrystalCompetitionComponent;