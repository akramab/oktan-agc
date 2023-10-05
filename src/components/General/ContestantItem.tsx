import { lazy } from 'react';
import { Row, Col } from 'react-bootstrap';
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
                    <p className="fw-bold text-crystal text-truncate">Crystal</p>
                }
                {data?.category === "ISOTERM" &&
                    <p className="fw-bold text-isoterm text-truncate">Isoterm</p>
                }
            </Col>
            <Col xs={2}>
                <p className="text-truncate">{formatDate(data?.date)}</p>
            </Col>
            <Col xs={1}>
                <p className="text-truncate">{data?.name?.team}</p>
            </Col>
            <Col xs={2}>
                <p className="text-truncate">{data?.name?.member}</p>
            </Col>
            <Col xs={1}>
                <p className="text-truncate">{data?.institution?.name}</p>
            </Col>
            <Col xs={2}>
                <p className="text-truncate">{data?.institution?.instructor}</p>
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