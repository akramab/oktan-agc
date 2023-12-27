import { lazy } from "react";
import { Row, Col, Image } from "react-bootstrap";
import cbt from "../../assets/cbt.jpg";
import { Link } from "react-router-dom";

const Topbar = lazy(() => import("../../components/General/Topbar"));
const Sidebar = lazy(() => import("../General/Sidebar"));
const CustomButton = lazy(() => import("../General/CustomButton"));

const CBTDashboardComponent = (props: any) => {
    let hours = Math.floor(props?.cbtInfoResponse?.time / 60);
    let minutes = props?.cbtInfoResponse?.time % 60;
    return (
        <>
            <Topbar title="" onBarsClick={props?.toggleSidebar} />
            <Sidebar isCrystal verified={props?.verified} shrink={props?.shrink} />
            <div className={`side-content bg-white h-100 p-4 ${props?.shrink && "shrink"}`}>
                <Row>
                    <Col>
                        <Image src={cbt} rounded fluid className="object-fit-cover cbt-img w-100" />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <h4>{props?.cbtInfoResponse?.title}</h4>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs={2}>
                        <p>Jenis soal</p>
                    </Col>
                    <Col>
                        <p className="fw-bold">:&emsp;{props?.cbtInfoResponse?.question_type}</p>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col xs={2}>
                        <p>Banyak soal</p>
                    </Col>
                    <Col>
                        <p className="fw-bold">:&emsp;{props?.cbtInfoResponse?.question_count} Soal</p>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col xs={2}>
                        <p>Waktu</p>
                    </Col>
                    <Col>
                        <p className="fw-bold">:&emsp;{hours} Jam {minutes} Menit</p>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <Link to={`/cbt/exam/${props?.cbtInfoResponse?.cbt_id}`}>
                            <CustomButton text="Mulai Kerjakan" bg="bg-blue-btn" />
                        </Link>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default CBTDashboardComponent;