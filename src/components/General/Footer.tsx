import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faLinkedin, faTwitter, faFacebookSquare, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

const Footer = (props: any) => {
    return (
        <Container fluid className="bg-purple-bright justify-content-between align-items-center px-5">
            <Row className="justify-content-between align-items-center">
                <Col xs={12} md={4} xl={3} className="py-3">
                    <p className="text-white text-center fw-bold fs-7">Copyright © 2022 Oktan ITB</p>
                </Col>
                <Col xs={12} md={5} xl={4} className="brands-logo d-flex align-items-center justify-content-center py-3">
                    <Link to="https://www.instagram.com/oktanitb/" className="rounded-circle shadow-sm p-3 mx-1">
                        <div className="width-fit d-flex align-items-center">
                            <FontAwesomeIcon icon={faInstagram} size="xl" />
                        </div>
                    </Link>
                    <Link to="https://www.youtube.com/channel/UCCVXD3CSaVIHQdNLMXJHLlw" className="rounded-circle shadow-sm p-3 mx-1">
                        <FontAwesomeIcon icon={faYoutube} size="xl" />
                    </Link>
                    <Link to="https://www.linkedin.com/company/oktan-itb" className="rounded-circle shadow-sm p-3 mx-1">
                        <FontAwesomeIcon icon={faLinkedin} size="xl" />
                    </Link>
                    <Link to="https://twitter.com/itboktan" className="rounded-circle shadow-sm p-3 mx-1">
                        <FontAwesomeIcon icon={faTwitter} size="xl" />
                    </Link>
                    <Link to="https://www.facebook.com/profile.php?id=100017407802799&_rdc=1&_rdr" className="rounded-circle shadow-sm p-3 mx-1">
                        <FontAwesomeIcon icon={faFacebookSquare} size="xl" />
                    </Link>
                    <Link to="https://www.tiktok.com/@oktanitb" className="rounded-circle shadow-sm p-3 mx-1">
                        <FontAwesomeIcon icon={faTiktok} size="xl" />
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;