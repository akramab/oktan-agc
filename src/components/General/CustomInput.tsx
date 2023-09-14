import { Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-regular-svg-icons';

const CustomInput = (props: any) => {
    return (
        <>
            {props?.isPassword ?
                <InputGroup className={`${props?.checkInput} rounded`}>
                    <Form.Control
                        className="password"
                        type={props?.showPassword ? "text" : "password"}
                        placeholder={props?.placeholder}
                        name={props?.name}
                        onChange={props?.onChange}
                    />
                    <InputGroup.Text>
                        {props?.showPassword ?
                            <FontAwesomeIcon icon={faEye} onClick={props?.togglePassword} />
                        :
                            <FontAwesomeIcon icon={faEyeSlash} onClick={props?.togglePassword} />
                        }
                    </InputGroup.Text>
                </InputGroup>
            :
                <Form.Control
                    className={props?.checkInput}
                    type={props?.type}
                    placeholder={props?.placeholder}
                    name={props?.name}
                    onChange={props?.onChange}
                />
            }
            
            <p className={!props?.checkInput ? "d-none" : "error-message" }>{props?.errorMessage}</p>
        </>
    )
}

export default CustomInput;