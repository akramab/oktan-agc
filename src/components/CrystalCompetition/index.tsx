import { lazy } from "react";
import { Row, Col, Image, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers, faMedal, faTrophy, faMoneyBillWave, faArrowDown, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons';
import crystal from "../../assets/crystal.png"
import requirement from "../../assets/requirement.jpg"
import timeline from "../../assets/timeline.jpg"
import sign from "../../assets/sign.svg"
import whatsapp from "../../assets/whatsapp.svg"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

const NavigationBar = lazy(() => import("../../components/General/NavigationBar"));
const Footer = lazy(() => import("../General/Footer"));

const CrystalCompetitionComponent = (props: any) => {
    const cStyle = { 
        background: 'transparent',
        color: '#374151',
        boxShadow: 'none',
        textAlign: 'start',
        padding: '0 3.5rem'
    };

    const iStyle = {
        border: '1px solid #E5E7EB',
        background: '#F2F2F2',
        fill: '#374151'
    };

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
                <Row className="justify-content-center align-items-center py-5 px-3 my-5">
                    <Col xs={12} lg={6}>
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
                    <Col xs={4} className="d-none d-lg-block">
                        <Image src={crystal} fluid rounded className="shadow"/>
                    </Col>
                </Row>
            </div>
            <div className="p-3 bg-white">
                <Row className="justify-content-center align-items-center px-3">
                    <Col xs={5} className="me-5 pe-5 d-none d-lg-block">
                        <Image src={requirement} fluid className="shadow p-2 rounded"/>
                    </Col>
                    <Col xs={12} lg={5}>
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
                                            Satu tim terdiri dari 2 orang dari sekolah yang sama
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
                                            Peserta belum pernah mendapatkan medali emas, perak, atau perunggu
                                            dalam ajang kompetisi kimia nasional (OSN) dan internasional, serta
                                            belum pernah menjadi juara pertama OKTAN ITB tahun-tahun sebelumnya.
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
            <div className="py-5 px-3 bg-white">
                <Row className="justify-content-center mt-4 px-3 mx-1">
                    <h2 className="fw-bold text-lg-center">
                        Prize Pool
                        <hr className="text-purple mx-auto hr-underline d-none d-lg-block" />
                        <hr className="text-purple hr-underline d-block d-lg-none" />
                    </h2>
                    <p className="mt-4 text-lg-center">
                        Berikut merupakan hadiah dari kejuaraan Crystal Competition.
                    </p>
                </Row>
                <Row className="justify-content-center mt-5 px-4 mx-2">
                    <Col xs={12} lg={3} className="mx-2 mb-5 rounded shadow zoom d-flex align-items-center flex-column text-center">
                        <h5 className="mt-4 pt-4">Juara 1</h5>
                        <p className="text-secondary mt-2 mb-3">
                            Piala + Piala bergilir + Uang pembinaan Rp. 9.000.000
                        </p>
                        <Row className="pb-4 mb-4">
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
                    <Col xs={12} lg={3} className="mx-2 mb-5 rounded shadow zoom d-flex align-items-center flex-column text-center">
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
                    <Col xs={12} lg={3} className="mx-2 mb-5 rounded shadow zoom d-flex align-items-center flex-column text-center">
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
                <Row className="justify-content-center px-4 mx-2">
                    <Col xs={12} lg={3} className="mx-2 mb-5 rounded shadow zoom text-center">
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
                    <Col xs={12} lg={3} className="mx-2 mb-5 rounded shadow zoom text-center">
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
            <div className="py-5 px-3 text-md-center">
                <Row className="justify-content-center mt-4">
                    <h2 className="fw-bold">
                        Timeline
                        <hr className="text-purple mx-auto hr-underline d-none d-md-block" />
                        <hr className="text-purple hr-underline d-block d-md-none" />
                    </h2>
                </Row>
                <Row className="justify-content-md-center align-items-center my-5">
                    <Col xs={12} md={7} lg={5}>
                        <VerticalTimeline
                            animate={false}
                            layout="1-column-left"
                            lineColor="#4B5563"
                            className="mx-md-auto p-0 width-fit"
                        >
                            <VerticalTimelineElement
                                contentStyle={cStyle}
                                contentArrowStyle={{ display: 'none' }}
                                iconStyle={iStyle}
                                icon={<FontAwesomeIcon icon={faArrowDown} />}
                            >
                                <h5 className="vertical-timeline-element-title fw-bold mb-3">Pendaftaran</h5>
                                <div className="mb-4">
                                    <i className="fw-bold text-timeline">Pendaftaran Gelombang I :</i>
                                    <p className="fw-normal text-timeline"><i>2 Oktober 2023 - 3 November 2023</i></p>
                                </div>
                                <div className="mb-4">
                                    <i className="fw-bold text-timeline">Pendaftaran Gelombang II :</i>
                                    <p className="fw-normal text-timeline"><i>6 November 2023 - 1 Desember 2023</i></p>
                                </div>
                                <div className="mb-4">
                                    <i className="fw-bold text-timeline">Pendaftaran Gelombang III :</i>
                                    <p className="fw-normal text-timeline"><i>4 Desember 2023 - 5 Januari 2024</i></p>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                contentStyle={cStyle}
                                contentArrowStyle={{ display: 'none' }}
                                iconStyle={iStyle}
                                icon={<FontAwesomeIcon icon={faArrowDown} />}
                            >
                                <h5 className="vertical-timeline-element-title fw-bold mb-3">Try Out</h5>
                                <div className="mb-4">
                                    <p className="fw-normal text-timeline"><i >6 Januari 2024</i></p>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                contentStyle={cStyle}
                                contentArrowStyle={{ display: 'none' }}
                                iconStyle={iStyle}
                                icon={<FontAwesomeIcon icon={faArrowDown} />}
                            >
                                <h5 className="vertical-timeline-element-title fw-bold mb-3">Babak Penyisihan</h5>
                                <div className="mb-4">
                                    <p className="fw-normal text-timeline"><i >13 Januari 2024</i></p>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                contentStyle={cStyle}
                                contentArrowStyle={{ display: 'none' }}
                                iconStyle={iStyle}
                                icon={<FontAwesomeIcon icon={faArrowDown} />}
                            >
                                <h5 className="vertical-timeline-element-title fw-bold mb-3">Babak Perempat Final</h5>
                                <div className="mb-4">
                                    <p className="fw-normal text-timeline"><i >27 Januari 2024</i></p>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                contentStyle={cStyle}
                                contentArrowStyle={{ display: 'none' }}
                                iconStyle={iStyle}
                                icon={<FontAwesomeIcon icon={faArrowDown} />}
                            >
                                <h5 className="vertical-timeline-element-title fw-bold mb-3">Babak Semifinal dan Final</h5>
                                <div className="mb-4">
                                    <p className="fw-normal text-timeline"><i >28 Januari 2024</i></p>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                contentStyle={{...cStyle, display: 'flex', alignItems: 'center'}}
                                contentArrowStyle={{ display: 'none' }}
                                iconStyle={iStyle}
                                icon={<FontAwesomeIcon icon={faCheck} />}
                            >
                                <h5 className="vertical-timeline-element-title fw-bold mt-2">Done</h5>
                            </VerticalTimelineElement>
                        </VerticalTimeline>
                    </Col>
                    <Col xs={4} className="mx-5 d-none d-lg-block">
                        <Image src={timeline} fluid className="shadow p-2 rounded bg-white"/>
                    </Col>
                </Row>
            </div>
            <div className="py-5 px-3 bg-white text-md-center">
                <Row className="justify-content-center mt-4">
                    <h2 className="fw-bold">
                        Information Contact
                        <hr className="text-purple mx-auto hr-underline d-none d-md-block" />
                        <hr className="text-purple hr-underline d-block d-md-none" />
                    </h2>
                    <p className="mt-4">
                        Jika Anda ingin mengetahui informasi lebih lanjut mengenai kompetisi Crystal <br/>
                        ini bisa hubungi akun sosial media yang telah disediakan.
                    </p>
                </Row>
                <Row className="justify-content-center my-5">
                    <Col xs={12} md={10} lg={7} xl={3} className="mx-3 rounded shadow zoom text-center">
                        <h5 className="mt-4">Deryl</h5>
                        <p className="text-secondary mt-2 mb-3">Informan Crystal</p>
                        <Row className="justify-content-center fs-7 pb-4">
                            <Col className="width-fit rounded-circle shadow-sm py-2 darken-hover">
                                <a href="https://api.whatsapp.com/send?phone=6281214164329" target="_blank">
                                    <Image src={whatsapp} className="py-1" />
                                </a>
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