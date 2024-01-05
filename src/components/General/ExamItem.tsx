import { Row, Col, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-regular-svg-icons';

const ExamItem = (props: any) => {
    const data = props?.data;
    const isFlag = data?.flag;
    return (
        <div id={`question-${data?.number}`} className={`${isFlag && "border-yellow-flag"} bg-white rounded-3 p-3 mb-3`}>
            <Row className="justify-content-between align-items-center mb-3">
                <Col>
                    <p className="fs-7">Soal No. {data?.number}</p>
                </Col>
                <Col className="text-end">
                    <Button onClick={() => props?.handleToggleFlag(data?.id, !data?.flag)} className={`text-body border-dark ${isFlag ? "bg-yellow-flag" : "bg-white"} border rounded-3 fs-7`}>
                        {!isFlag && <span className="me-2">Mark as Flag</span>}
                        <FontAwesomeIcon icon={faFlag} size="sm" />
                    </Button>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <p>{data?.question}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    {data?.type === "MC" ?
                        <>
                            {data?.answers?.map((item: any, idx: number) => {
                                return (
                                    <Form.Check
                                        key={idx}
                                        className="p-0"
                                        label={item?.value}
                                        name={`answer-${data?.number}`}
                                        type="radio"
                                        checked={data?.current_answer === item?.value}
                                        onChange={() => props?.handleAddAnswer(data?.id, item?.value)}
                                    />
                                )
                            })}
                        </>
                    :
                    <Form.Control
                        type="text"
                        value={data?.current_answer}
                        name={`answer-${data?.number}`}
                        className="rounded border-gray"
                        placeholder="Jawab disini..."
                        onChange={props?.handleAnswerChange}
                    />}
                </Col>
            </Row>
        </div>
    )
}

export default ExamItem;