import { lazy } from 'react';
import { Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCheck, faTrash, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { formatDate } from '../../utils/helper';

const CustomButton = lazy(() => import("./CustomButton"));

const ContestantItem = (props: any) => {
    const data = props?.data;
    return (
        <Row className="bg-white rounded align-items-center py-2 mb-3">
            <Col xs={1}>
                {data?.category === "CRYSTAL" &&
                    <OverlayTrigger overlay={<Tooltip>Crystal</Tooltip>}>
                        <p className="fw-bold text-crystal text-truncate">Crystal</p>
                    </OverlayTrigger>
                }
                {data?.category === "ISOTERM" &&
                    <OverlayTrigger overlay={<Tooltip>Isoterm</Tooltip>}>
                        <p className="fw-bold text-isoterm text-truncate">Isoterm</p>
                    </OverlayTrigger>
                }
            </Col>
            <Col xs={2}>
                <OverlayTrigger overlay={<Tooltip>{formatDate(data?.date)}</Tooltip>}>
                    <p className="text-truncate">{formatDate(data?.date)}</p>
                </OverlayTrigger>
            </Col>
            <Col xs={1}>
                <OverlayTrigger overlay={<Tooltip>{data?.name?.team}</Tooltip>}>
                    <p className="text-truncate">{data?.name?.team}</p>
                </OverlayTrigger>
            </Col>
            <Col xs={2}>
                <OverlayTrigger overlay={<Tooltip>{data?.name?.member}</Tooltip>}>
                    <p className="text-truncate">{data?.name?.member}</p>
                </OverlayTrigger>
            </Col>
            <Col xs={1}>
                <OverlayTrigger overlay={<Tooltip>{data?.institution?.name}</Tooltip>}>
                    <p className="text-truncate">{data?.institution?.name}</p>
                </OverlayTrigger>
            </Col>
            <Col xs={2}>
                <OverlayTrigger overlay={<Tooltip>{data?.institution?.instructor}</Tooltip>}>
                    <p className="text-truncate">{data?.institution?.instructor}</p>
                </OverlayTrigger>
            </Col>
            <Col xs={3} className="p-0">
                <Row className="align-items-center">
                    <Col className="width-fit d-flex align-items-center ps-0 pe-4">
                        {!data?.verified ?
                            <FontAwesomeIcon onClick={() => props?.handleVerifyContestant(data?.id)} icon={faPen} size="xs" className="p-3 rounded-circle bg-write write cursor-pointer" /> :
                            <FontAwesomeIcon icon={faCheck} size="xs" className="p-3 rounded-circle bg-done done" />
                        }
                    </Col>
                    <Col className="width-fit d-flex align-items-center ps-0 pe-4">
                        <FontAwesomeIcon onClick={() => props?.handleDeleteContestant(data?.id)} icon={faTrash} size="xs" className="p-3 rounded-circle bg-trash trash cursor-pointer" />
                    </Col>
                    <Col className="ps-0 pe-1">
                        <CustomButton
                            bg="bg-purple-dope"
                            text={<>
                                Unduh
                                <FontAwesomeIcon icon={faArrowRightToBracket} className="ms-2 rotate-90" />
                            </>}
                            onClick={() => props?.handleDownloadContestant(data?.id)}
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default ContestantItem;