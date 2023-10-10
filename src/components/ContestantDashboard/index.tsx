import { lazy } from "react";
import { Row, Col, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const Topbar = lazy(() => import("../../components/General/Topbar"));
const Sidebar = lazy(() => import("../General/Sidebar"));
const ContestantItem = lazy(() => import("../General/ContestantItem"));
const Searchbar = lazy(() => import("../General/Searchbar"));
const CustomButton = lazy(() => import("../General/CustomButton"));

const ContestantDashboardComponent = (props: any) => {
    return (
        <>
            <Modal show={props?.showModal} centered>
                <Modal.Body>
                    <Row className="text-center p-5">
                        <Col>
                            <p className="fw-bold">Peserta berhasil diverifikasi!</p>
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
            <Topbar title="Data Peserta" />
            <Sidebar isAdmin verified={props?.verified} />
            <div className="side-content bg-gray p-4">
                <Row className="justify-content-between align-items-center my-2">
                    <Col className="p-0">
                        <Searchbar />
                    </Col>
                    <Col className="p-0 text-end">
                        <CustomButton
                            bg="bg-purple-dope"
                            text={<>
                                <FontAwesomeIcon icon={faFilter} className="me-2" />
                                Filter
                            </>}
                        />
                    </Col>
                </Row>
                <Row className="my-4">
                    <Col xs={1}>
                        <p>Kategori</p>
                    </Col>
                    <Col xs={2}>
                        <p>Tanggal Daftar</p>
                    </Col>
                    <Col xs={1}>
                        <p>Nama Tim</p>
                    </Col>
                    <Col xs={2}>
                        <p>Nama Peserta</p>
                    </Col>
                    <Col xs={1}>
                        <p>Instansi</p>
                    </Col>
                    <Col xs={2}>
                        <p>Dosen/Guru</p>
                    </Col>
                    <Col xs={3}>
                        <p>Aksi</p>
                    </Col>
                </Row>
                {props?.contestantsDataResponse?.length !== 0 && props?.contestantsDataResponse?.map((item: any, index: number) => {
                    return (<ContestantItem
                            key={index}
                            data={item}
                            handleVerifyContestant={props?.handleVerifyContestant}
                            handleDeleteContestant={props?.handleDeleteContestant}
                            handleDownloadContestant={props?.handleDownloadContestant}
                        />)
                })}
            </div>
        </>
    )
}

export default ContestantDashboardComponent;