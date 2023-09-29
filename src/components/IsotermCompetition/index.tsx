import { lazy } from "react";
import { Row, Col, Image, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faUsers, faSchool, faPaperclip, faUserTie, faMedal, faTrophy, faMoneyBillWave, faArrowDown, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons';
import isoterm from "../../assets/isoterm.png"
import requirement from "../../assets/requirement.jpg"
import timeline from "../../assets/timeline.jpg"
import whatsapp from "../../assets/whatsapp.svg"
import line from "../../assets/line.svg"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

const NavigationBar = lazy(() => import("../../components/General/NavigationBar"));
const Footer = lazy(() => import("../General/Footer"));

const IsotermCompetitionComponent = (props: any) => {
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
                <NavigationBar {...props} />
                <Row className="py-4">
                    <Col className="text-center my-5 py-5">
                        <h1 className="text-white my-3 fw-bold display-5">Isoterm Competition</h1>
                    </Col>
                </Row>
            </div>
            <div className="p-3 bg-white">
                <Row className="justify-content-center align-items-center py-5 px-3 my-5">
                    <Col xs={12} lg={6}>
                        <h2 className="fw-bold mb-4">
                            What is Isoterm Competition?
                            <hr className="text-purple hr-underline" />
                        </h2>
                        <p>
                            ISOTERM (Indonesia’s Innovative Research Competition) adalah kompetisi
                            kimia untuk mahasiswa se-Indonesia. Kompetisi ini merupakan salah satu
                            acara di OKTAN 2023. ISOTERM OKTAN 2023 bertujuan untuk memacu
                            semangat berkarya keilmuan kimia bagi mahasiswa se-Indonesia.
                        </p>
                        <p className="fw-bold mt-3">Untuk informasi lebih lanjut silahkan klik link dibawah ini:</p>
                        <Row className="">
                            <Col className="width-fit rounded shadow-sm p-3 mt-2 darken-hover">
                                <a target="_blank" href="https://drive.google.com/drive/folders/1TtNcVkny8On7eo0g8oIVrRatIdmq6-ns">
                                    <FontAwesomeIcon icon={faGoogleDrive} size="lg" className="px-1 icon-drive" />
                                </a>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={4} className="d-none d-lg-block">
                        <Image src={isoterm} fluid rounded className="shadow"/>
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
                        <p className="mb-3">Berikut merupakan persyaratan untuk mengikuti lomba Isoterm.</p>
                        <ListGroup>
                            <ListGroup.Item className="px-4">
                                <Row className="align-items-center">
                                    <Col className="width-icon p-0 text-center">
                                        <FontAwesomeIcon icon={faUserGraduate} />
                                    </Col>
                                    <Col>
                                        <p>
                                            Mahasiswa aktif seluruh Indonesia pada jenjang Vokasi atau
                                            Strata-1 pada saat kompetisi berlangsung dari semua
                                            jurusan/program studi/departemen kecuali program studi Kimia ITB
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
                                            Setiap tim terdiri atas 2-3 peserta dengan satu peserta sebagai
                                            ketua tim. Setiap peserta boleh terdaftar pada maksimal 2 tim,
                                            tetapi hanya boleh menjadi ketua tim pada salah satu tim
                                        </p>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item className="px-4">
                                <Row className="align-items-center">
                                    <Col className="width-icon p-0 text-center">
                                        <FontAwesomeIcon icon={faSchool} />
                                    </Col>
                                    <Col>
                                        <p>
                                            Anggota tim berasal dari perguruan tinggi yang sama dan
                                            dibolehkan berasal dari jurusan yang berbeda
                                        </p>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item className="px-4">
                                <Row className="align-items-center">
                                    <Col className="width-icon p-0 text-center">
                                        <FontAwesomeIcon icon={faPaperclip} />
                                    </Col>
                                    <Col>
                                        <p>
                                            Satu tim dapat mengirimkan lebih dari 1 buah karya dengan
                                            batasan 2 karya
                                        </p>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item className="px-4">
                                <Row className="align-items-center">
                                    <Col className="width-icon p-0 text-center">
                                        <FontAwesomeIcon icon={faUserTie} />
                                    </Col>
                                    <Col>
                                        <p>
                                            Setiap tim harus memiliki dosen pembimbing yang dibuktikan
                                            melalui dokumen keterangan dosen pembimbing
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
                        Berikut merupakan hadiah dari kejuaraan Isoterm Competition.
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
                                <h5 className="vertical-timeline-element-title fw-bold mb-3">Pendaftaran dan pengumpulan abstrak</h5>
                                <div className="mb-4">
                                    <p className="fw-normal text-timeline"><i>31 Oktober 2022</i></p>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                contentStyle={cStyle}
                                contentArrowStyle={{ display: 'none' }}
                                iconStyle={iStyle}
                                icon={<FontAwesomeIcon icon={faArrowDown} />}
                            >
                                <h5 className="vertical-timeline-element-title fw-bold mb-3">Penutupan pendaftaran</h5>
                                <div className="mb-4">
                                    <p className="fw-normal text-timeline"><i>30 November 2022</i></p>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                contentStyle={cStyle}
                                contentArrowStyle={{ display: 'none' }}
                                iconStyle={iStyle}
                                icon={<FontAwesomeIcon icon={faArrowDown} />}
                            >
                                <h5 className="vertical-timeline-element-title fw-bold mb-3">Deadline pengumpulan abstrak</h5>
                                <div className="mb-4">
                                    <p className="fw-normal text-timeline"><i>30 November 2022</i></p>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                contentStyle={cStyle}
                                contentArrowStyle={{ display: 'none' }}
                                iconStyle={iStyle}
                                icon={<FontAwesomeIcon icon={faArrowDown} />}
                            >
                                <h5 className="vertical-timeline-element-title fw-bold mb-3">Pengumuman lolos abstrak</h5>
                                <div className="mb-4">
                                    <p className="fw-normal text-timeline"><i>2 Desember 2022</i></p>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                contentStyle={cStyle}
                                contentArrowStyle={{ display: 'none' }}
                                iconStyle={iStyle}
                                icon={<FontAwesomeIcon icon={faArrowDown} />}
                            >
                                <h5 className="vertical-timeline-element-title fw-bold mb-3">Pengumpulan full paper gelombang I</h5>
                                <div className="mb-4">
                                    <p className="fw-normal text-timeline"><i>4 Desember 2022</i></p>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                contentStyle={cStyle}
                                contentArrowStyle={{ display: 'none' }}
                                iconStyle={iStyle}
                                icon={<FontAwesomeIcon icon={faArrowDown} />}
                            >
                                <h5 className="vertical-timeline-element-title fw-bold mb-3">Deadline pengumpulan full paper gelombang I</h5>
                                <div className="mb-4">
                                    <p className="fw-normal text-timeline"><i>1 Januari 2023</i></p>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                contentStyle={cStyle}
                                contentArrowStyle={{ display: 'none' }}
                                iconStyle={iStyle}
                                icon={<FontAwesomeIcon icon={faArrowDown} />}
                            >
                                <h5 className="vertical-timeline-element-title fw-bold mb-3">Pengumpulan full paper gelombang II</h5>
                                <div className="mb-4">
                                    <p className="fw-normal text-timeline"><i>2 Januari 2023</i></p>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                contentStyle={cStyle}
                                contentArrowStyle={{ display: 'none' }}
                                iconStyle={iStyle}
                                icon={<FontAwesomeIcon icon={faArrowDown} />}
                            >
                                <h5 className="vertical-timeline-element-title fw-bold mb-3">Deadline pengumpulan full paper gelombang II</h5>
                                <div className="mb-4">
                                    <p className="fw-normal text-timeline"><i>23 Januari 2023</i></p>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                contentStyle={cStyle}
                                contentArrowStyle={{ display: 'none' }}
                                iconStyle={iStyle}
                                icon={<FontAwesomeIcon icon={faArrowDown} />}
                            >
                                <h5 className="vertical-timeline-element-title fw-bold mb-3">Pengumuman lolos final</h5>
                                <div className="mb-4">
                                    <p className="fw-normal text-timeline"><i>27 Januari 2023</i></p>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                contentStyle={cStyle}
                                contentArrowStyle={{ display: 'none' }}
                                iconStyle={iStyle}
                                icon={<FontAwesomeIcon icon={faArrowDown} />}
                            >
                                <h5 className="vertical-timeline-element-title fw-bold mb-3">Technical Meeting final</h5>
                                <div className="mb-4">
                                    <p className="fw-normal text-timeline"><i>11 Februari 2023</i></p>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                contentStyle={cStyle}
                                contentArrowStyle={{ display: 'none' }}
                                iconStyle={iStyle}
                                icon={<FontAwesomeIcon icon={faArrowDown} />}
                            >
                                <h5 className="vertical-timeline-element-title fw-bold mb-3">FINAL</h5>
                                <div className="mb-4">
                                    <p className="fw-normal text-timeline"><i>25 - 26 Februari 2023</i></p>
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
                        Jika Anda ingin mengetahui informasi lebih lanjut mengenai kompetisi Isoterm <br/>
                        ini bisa hubungi akun sosial media yang telah disediakan.
                    </p>
                </Row>
                <Row className="justify-content-center my-5">
                    <Col xs={12} md={10} lg={7} xl={3} className="mx-3 rounded shadow zoom text-center">
                        <h5 className="mt-4">Wira Wisnanta</h5>
                        <p className="text-secondary mt-2 mb-3">Informan Isoterm</p>
                        <Row className="justify-content-center fs-7 pb-4">
                            <Col className="width-fit rounded-circle shadow-sm me-1 py-2 darken-hover">
                                <a href="https://api.whatsapp.com/send?phone=628980550226" target="_blank">
                                    <Image src={whatsapp} className="py-1" />
                                </a>
                            </Col>
                            <Col className="width-fit rounded-circle shadow-sm ms-1 py-2 darken-hover">
                                <a href="https://line.me/ti/p/~wirawisnanta" target="_blank">
                                    <Image src={line} className="py-1" />
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

export default IsotermCompetitionComponent;