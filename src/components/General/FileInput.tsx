import React from 'react';
import { Row, Col, Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

const FileInput = (props: any) => {
    const hiddenFileInput = React.useRef<HTMLInputElement>(null);
    const handleClick = (e) => {
        hiddenFileInput.current?.click();
    };

    return (
        <>
            <InputGroup className={`${props?.checkInput} cursor-pointer rounded`}>
                <Row className="bg-gray-input w-100 rounded py-1" onClick={handleClick} id={props?.name} tabindex="0">
                    <Col className="d-flex align-items-center py-2">
                        <FontAwesomeIcon icon={faPaperclip} className="text-purple px-2" />
                        <p>{props?.text}</p>
                    </Col>
                </Row>
                <Form.Control
                    type="file"
                    value=""
                    ref={hiddenFileInput}
                    name={props?.name}
                    className="d-none"
                    onChange={props?.onChange}
                    accept="application/pdf"
                />
            </InputGroup>
            <p className={!props?.checkInput ? "d-none" : "error-message" }>{props?.errorMessage}</p>
        </>
    )
}

export default FileInput;