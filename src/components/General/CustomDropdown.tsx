import { Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-regular-svg-icons';

const CustomDropdown = (props: any) => {
    return (
        <Form.Select
            className={`${props?.isProfile && "border-0"} ${props?.className ?? ""} padding-dropdown shadow-none rounded`}
            name={props?.name}
            onChange={props?.onChange}
            value={props?.value}
        >
            <option value="">{props?.placeholder}</option>
            {props?.options?.length !== 0 && (props.options.map((item: any, index: number) => {
                return (
                    <option value={item} key={index}>{item}</option>
                )
            }))}
        </Form.Select>
    )
}

export default CustomDropdown;