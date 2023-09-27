import { lazy } from "react";
import { Row, Col, Image, Button } from 'react-bootstrap';
import crystal from "../../assets/crystal.png"
import isoterm from "../../assets/isoterm.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableCellsLarge, faInfo, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faFolder, faCalendar, faUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from "react-router-dom";

const CustomButton = lazy(() => import("./CustomButton"));

const Sidebar = (props: any) => {
    return (
        <div className="bg-white sidebar px-3 py-4 d-flex flex-column justify-content-between">
            <div>
                {props?.isCrystal &&
                    <Row className="py-3 rounded bg-crystal align-items-center pe-5">
                        <Col className="width-fit pe-0">
                            <Image src={crystal} className="width-team rounded-circle" />
                        </Col>
                        <Col>
                            <p className="fs-7 text-white">Competition Team</p>
                            <h4 className="text-white">Crystal</h4>
                        </Col>
                    </Row>
                }
                {props?.isIsoterm &&
                    <Row className="py-3 rounded bg-isoterm align-items-center pe-5">
                        <Col className="width-fit pe-0">
                            <Image src={isoterm} className="width-team rounded-circle" />
                        </Col>
                        <Col>
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
                        <Col>
                            <h5 className="text-gray">Dashboard</h5>
                        </Col>
                    </Row>
                </Link>
                <Link to="#" className="text-decoration-none">
                    <Row className="py-3 mt-3">
                        <Col className="width-fit sidebar-icon px-3">
                            <FontAwesomeIcon icon={faFolder} size="xl" />
                        </Col>
                        <Col>
                            <h5 className="text-gray">CBT</h5>
                        </Col>
                    </Row>
                </Link>
                <Link to="#" className="text-decoration-none">
                    <Row className="py-3 mt-3">
                        <Col className="width-fit sidebar-icon px-3">
                            <FontAwesomeIcon icon={faCalendar} size="xl" />
                        </Col>
                        <Col>
                            <h5 className="text-gray">Calendar</h5>
                        </Col>
                    </Row>
                </Link>
                <Row className="py-3 mt-3 border-blue rounded">
                    <Col className="width-fit sidebar-icon px-3 active">
                        <FontAwesomeIcon icon={faUser} size="xl" />
                    </Col>
                    <Col>
                        <h5 className="text-blue">Team Profile</h5>
                    </Col>
                </Row>
            </div>
            <div>
                <Link to="#" className="text-decoration-none">
                    <Row className="align-items-center">
                        <Col className="width-fit">
                            <div className="py-1 px-2 border-gray rounded-circle">
                                <FontAwesomeIcon icon={faInfo} className="px-1" />
                            </div>
                        </Col>
                        <Col>
                            <h5 className="text-gray">Support</h5>
                        </Col>
                    </Row>
                </Link>
                <Link to="#" className="text-decoration-none">
                    <Row className="mt-3">
                        <CustomButton
                            bg="bg-red-btn"
                            text={
                                <>
                                    <Row className="py-1">
                                        <Col className="width-fit p-0">
                                            <FontAwesomeIcon icon={faArrowRightFromBracket} size="xl" className="rotate-180" />
                                        </Col>
                                        <Col className="text-start px-4">
                                            <h5 className="text-white px-2">Logout</h5>
                                        </Col>
                                    </Row>
                                </>
                            }
                        />
                    </Row>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar;