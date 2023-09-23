import { lazy, useState, useEffect } from "react";
import { Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import logo from "../../assets/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';

const CustomButton = lazy(() => import("./CustomButton"));

const NavigationBar = (props: any) => {
    const [backgroundChange, setBackground] = useState(0);

    useEffect(() => {
        const container = document.getElementsByClassName("bg-gray")[0];
        const updateScroll = () => {
            setBackground(container?.scrollTop);
        }
        
        container?.addEventListener("scroll", updateScroll, false);

        updateScroll()

        return () => {
            container?.removeEventListener("scroll", updateScroll, false);
        };
    }, []);

    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" data-bs-theme="dark" className={backgroundChange > 0 ? "nav-bg py-3" : "py-3"}>
            <div className="d-flex align-items-center">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-0 py-2 ms-3">
                    <FontAwesomeIcon icon={faBars} size="sm" />
                </Navbar.Toggle>
                <Navbar.Brand href="/" className="fw-bolder rounded px-4">
                    <Image src={logo} className="w-25" />
                    <span className="text-white ms-2">OKTAN ITB 2023</span>
                </Navbar.Brand>
            </div>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
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
                </Nav>
            </Navbar.Collapse>
            <Nav.Link href="/login" className="me-2">
                <CustomButton bg="bg-green-btn" text="SIGN IN" />
            </Nav.Link>
        </Navbar>
    )
}

export default NavigationBar;