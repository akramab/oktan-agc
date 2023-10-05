import { InputGroup, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Searchbar = (props: any) => {
    return (
        <InputGroup>
            <InputGroup.Text id="addon-search" className="px-3 py-3 bg-white border-0">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-purple" />
            </InputGroup.Text>
            <Form.Control
                type="text"
                placeholder="Search data..."
                className="py-2 border border-0 shadow-none"
                name={props?.name}
                onChange={props?.onChange}
                value={props?.value}
            />
        </InputGroup>
    )
}

export default Searchbar;