import { Nav, Navbar, NavDropdown, Image, Button } from 'react-bootstrap';
import logo from "../../assets/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSliders, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faBell, faImage } from '@fortawesome/free-regular-svg-icons';

const Topbar = (props: any) => {
    return (
        <Navbar fixed="top" data-bs-theme="light" className="bg-white">
            <div className="d-flex align-items-center">
                <Button variant="light" className="border-0 py-2 ms-3 bg-white black-path">
                    <FontAwesomeIcon icon={faBars} size="xl" />
                </Button>
                <Navbar.Brand href="/" className="fw-bolder rounded px-4 d-flex align-items-center">
                    <Image src={logo} className="h-100" />
                    <div className="ms-2">
                        <span>OKTAN ITB <br/> 2023</span>
                    </div>
                </Navbar.Brand>
            </div>
            <div className="top-title">
                <h3 className="fw-bold ps-5">{props?.title}</h3>
            </div>
            <div className="d-none d-md-block ms-auto">
                <Nav className="align-items-center">
                    <FontAwesomeIcon icon={faSliders} size="xl" className="me-4" />
                    <FontAwesomeIcon icon={faBell} size="xl" className="me-4 ms-2" />
                    <FontAwesomeIcon icon={faImage} size="lg" className="fa-img p-3 rounded-circle ms-2" />
                    <FontAwesomeIcon icon={faAngleDown} className="ms-2 me-4" />
                </Nav>
            </div>
        </Navbar>
    )
}

export default Topbar;