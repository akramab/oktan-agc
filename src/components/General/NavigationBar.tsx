import { lazy } from "react";
import { Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import logo from "../../assets/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const CustomButton = lazy(() => import("./CustomButton"));

const NavigationBar = (props: any) => {
    return (
        <Navbar collapseOnSelect expand="lg" data-bs-theme="dark" className="py-3">
            <Navbar.Brand href="/" className="fw-bolder ms-2 rounded px-4">
                <Image src={logo} className="w-25" />
                <span className="text-white ms-2">OKTAN ITB 2023</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto align-items-center">
                    <NavDropdown title={
                        <span className="text-white">
                            Competition
                            <FontAwesomeIcon icon={faAngleDown} size="xs" className="ms-3" />
                        </span>
                    }>
                        <NavDropdown.Item href="/competition/crystal" className="text-default bg-white">
                            Crystal Competition
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/competition/isoterm" className="text-default bg-white">
                            Isoterm Competition
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link>Atomic</Nav.Link>
                    <Nav.Link>Webinar</Nav.Link>
                    <Nav.Link>About</Nav.Link>
                    <Nav.Link>FAQ</Nav.Link>
                    <Nav.Link href="/login">
                        <CustomButton bg="bg-green-btn" text="SIGN IN" />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar;