import { Form } from 'react-bootstrap';

const CustomInput = (props: any) => {
    return (
        <>
            <Form.Control
                className={props?.checkInput}
                type={props?.type}
                placeholder={props?.placeholder}
                name={props?.name}
                onChange={props?.onChange}
            />
            <p className={!props?.checkInput ? "d-none" : "error-message" }>{props?.errorMessage}</p>
        </>
    )
}

export default CustomInput;