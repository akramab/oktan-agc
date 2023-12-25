import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

const QuestionItem = (props: any) => {
    const data = props?.data;
    return (
        <Col xs={4} className="mb-4">
            <div className="rounded-3 py-3 px-1 bg-white h-100 d-flex flex-column justify-content-between">
                <Row className="justify-content-between align-items-center">
                    <Col className="width-fit">
                        <p className="fs-5 px-2 border border-dark rounded">{data?.number}</p>
                    </Col>
                    <Col className="d-flex align-items-center width-fit">
                        <FontAwesomeIcon onClick={() => props?.toggleEdit(data?.id)} icon={faPen} size="2xs" className="me-2 p-2 rounded-circle bg-write write cursor-pointer" />
                        <FontAwesomeIcon onClick={() => props?.toggleDelete(data?.id)} icon={faTrash} size="2xs" className="p-2 rounded-circle bg-trash trash cursor-pointer" />
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col>
                        <p>{data?.question}</p>
                    </Col>
                </Row>
                {data?.type === "MC" &&
                    <Row className="justify-content-between">
                        {data?.answers?.map((item: any, index: number) => {
                            return (
                                <Col key={index} className="width-fit text-center">
                                    <p className={`p-2 rounded ${item?.correct ? "bg-green-answer" : "bg-red-answer"}`}>a. {item?.value}</p>
                                </Col>
                            )
                        })}
                    </Row>
                }
                {data?.type === "ESSAY" &&
                    <Row>
                        <Col>
                            <p className="rounded border border-dark text-center p-2">Jawaban di cek manual</p>
                        </Col>
                    </Row>
                }
            </div>
        </Col>
    )
}

export default QuestionItem;