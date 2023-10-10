import { lazy } from "react";
import { Row, Col, Image } from 'react-bootstrap';
import crystal from "../../assets/crystal.png"
import isoterm from "../../assets/isoterm.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableCellsLarge, faInfo, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faFolder, faCalendar, faUser } from '@fortawesome/free-regular-svg-icons';
import { Link, useHistory } from "react-router-dom";
import { removeTokens } from "../../utils/general";

const CustomButton = lazy(() => import("./CustomButton"));

const Sidebar = (props: any) => {
    let history = useHistory();
    const url = window.location.href;
    let profileUrl = props?.isCrystal ? "/profile/crystal" : "/profile/isoterm";
    let profileText = JSON.parse(props?.verified) ? "text-green" : "text-red";

    return (
        <div className="bg-white sidebar px-3 py-4 d-flex flex-column justify-content-between align-items-center">
            <div className="d-flex flex-column align-items-center align-items-lg-start">
                {(props?.isCrystal && !props?.isAdmin) &&
                    <Row className="py-2 rounded bg-crystal align-items-center width-fit">
                        <Col className="width-fit">
                            <Image src={crystal} className="width-team rounded-circle bg-white" />
                        </Col>
                        <Col className="d-none d-lg-block pe-5">
                            <p className="fs-7 text-white">Competition Team</p>
                            <h4 className="text-white">Crystal</h4>
                        </Col>
                    </Row>
                }
                {(props?.isIsoterm && !props?.isAdmin) &&
                    <Row className="py-2 rounded bg-isoterm align-items-center width-fit">
                        <Col className="width-fit">
                            <Image src={isoterm} className="width-team rounded-circle bg-white" />
                        </Col>
                        <Col className="d-none d-lg-block pe-5">
                            <p className="fs-7 text-white">Competition Team</p>
                            <h4 className="text-white">Isoterm</h4>
                        </Col>
                    </Row>
                }
                <Link to="#" className="text-decoration-none">
                    <Row className="py-3 mt-3">
                        <Col className="width-fit sidebar-icon px-3">
                            <FontAwesomeIcon icon={faTableCellsLarge} size="xl" />
                        </Col>
                        <Col className="d-none d-lg-block">
                            <h5 className="text-gray">Dashboard</h5>
                        </Col>
                    </Row>
                </Link>
                {props?.isAdmin ?
                    <Link to={url.includes("/dashboard/question") ? "#" : "/dashboard/question"} className="text-decoration-none">
                        <Row className={`py-3 mt-3 ${url.includes("/dashboard/question") && "border-blue"} rounded width-fit`}>
                            <Col className={`width-fit sidebar-icon px-3 ${url.includes("/dashboard/question") && "active"}`}>
                                <FontAwesomeIcon icon={faFolder} size="xl" />
                            </Col>
                            <Col className="d-none d-lg-block pe-5">
                                <h5 className={url.includes("/dashboard/question") ? "text-blue pe-3" : "text-gray"}>Soal</h5>
                            </Col>
                        </Row>
                    </Link> :
                    <Link to={url.includes("/cbt") ? "#" : "/cbt"} className="text-decoration-none">
                        <Row className={`py-3 mt-3 ${url.includes("/cbt") && "border-blue"} rounded width-fit`}>
                            <Col className={`width-fit sidebar-icon px-3 ${url.includes("/cbt") && "active"}`}>
                                <FontAwesomeIcon icon={faFolder} size="xl" />
                            </Col>
                            <Col className="d-none d-lg-block pe-5">
                                <h5 className={url.includes("/cbt") ? "text-blue pe-3" : "text-gray"}>CBT</h5>
                            </Col>
                        </Row>
                    </Link>
                }
                <Link to="#" className="text-decoration-none">
                    <Row className="py-3 mt-3">
                        <Col className="width-fit sidebar-icon px-3">
                            <FontAwesomeIcon icon={faCalendar} size="xl" />
                        </Col>
                        <Col className="d-none d-lg-block">
                            <h5 className="text-gray">Calendar</h5>
                        </Col>
                    </Row>
                </Link>
                {props?.isAdmin ?
                    <Link to={url.includes("/dashboard/contestant") ? "#" : "/dashboard/contestant"} className="text-decoration-none">
                        <Row className={`py-3 mt-3 ${url.includes("/dashboard/contestant") && "border-blue"} rounded width-fit`}>
                            <Col className={`width-fit sidebar-icon px-3 ${url.includes("/dashboard/contestant") && "active"}`}>
                                <FontAwesomeIcon icon={faUser} size="xl" />
                            </Col>
                            <Col className="d-none d-lg-block pe-5">
                                <h5 className={url.includes("/dashboard/contestant") ? "text-blue pe-3" : "text-gray"}>Data Peserta</h5>
                            </Col>
                        </Row>
                    </Link> :
                    <Link to={url.includes("/profile") ? "#" : profileUrl} className="text-decoration-none">
                        <Row className={`py-3 mt-3 ${JSON.parse(props?.verified) && url.includes("/profile") ? "border-green" : "border-red"} rounded width-fit`}>
                            <Col className={`width-fit sidebar-icon px-3 ${url.includes("/profile") && "active"}`}>
                                <FontAwesomeIcon icon={faUser} size="xl" />
                            </Col>
                            <Col className="d-none d-lg-block pe-5">
                                <h5 className={`${url.includes("/profile") ? profileText : "text-gray"} pe-3`}>Team Profile</h5>
                            </Col>
                        </Row>
                    </Link>
                }
            </div>
            <div className="w-100">
                <Link to="#" className="text-decoration-none">
                    <Row className="align-items-center justify-content-center justify-content-lg-start">
                        <Col className="width-fit">
                            <div className="py-1 px-2 border-gray rounded-circle">
                                <FontAwesomeIcon icon={faInfo} className="px-1" />
                            </div>
                        </Col>
                        <Col className="d-none d-lg-block">
                            <h5 className="text-gray">Support</h5>
                        </Col>
                    </Row>
                </Link>
                <Row className="mt-3">
                    <CustomButton
                        bg="bg-red-btn"
                        text={
                            <>
                                <Row className="py-1 justify-content-center justify-content-lg-start">
                                    <Col className="p-0 width-fit">
                                        <FontAwesomeIcon icon={faArrowRightFromBracket} size="xl" className="rotate-180" />
                                    </Col>
                                    <Col className="text-start px-4 d-none d-lg-block">
                                        <h5 className="text-white px-2">Logout</h5>
                                    </Col>
                                </Row>
                            </>
                        }
                        onClick={() => {removeTokens(); history.push("/login");}}
                    />
                </Row>
            </div>
        </div>
    )
}

export default Sidebar;