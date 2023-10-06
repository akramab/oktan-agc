import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faLinkedin, faTwitter, faFacebookSquare, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = (props: any) => {
    return (
        <Container fluid className="bg-cyan justify-content-between align-items-center px-5">
            <Row className="justify-content-between align-items-center">
                <Col xs={12} md={4} xl={3} className="py-3">
                    <p className="text-white text-center fw-bold fs-7">Copyright © 2023 Oktan ITB</p>
                </Col>
                <Col xs={12} md={5} xl={4} className="brands-logo d-flex align-items-center justify-content-center py-3">
                    <a target="_blank" href="https://www.instagram.com/oktanitb/" className="rounded-circle shadow-sm p-3 mx-1 darken-hover">
                        <div className="width-fit d-flex align-items-center">
                            <FontAwesomeIcon icon={faInstagram} size="xl" />
                        </div>
                    </a>
                    <a target="_blank" href="https://www.youtube.com/channel/UCCVXD3CSaVIHQdNLMXJHLlw" className="rounded-circle shadow-sm p-3 mx-1 darken-hover">
                        <FontAwesomeIcon icon={faYoutube} size="xl" />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/company/oktan-itb" className="rounded-circle shadow-sm p-3 mx-1 darken-hover">
                        <FontAwesomeIcon icon={faLinkedin} size="xl" />
                    </a>
                    <a target="_blank" href="https://twitter.com/itboktan" className="rounded-circle shadow-sm p-3 mx-1 darken-hover">
                        <FontAwesomeIcon icon={faTwitter} size="xl" />
                    </a>
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100017407802799&_rdc=1&_rdr" className="rounded-circle shadow-sm p-3 mx-1 darken-hover">
                        <FontAwesomeIcon icon={faFacebookSquare} size="xl" />
                    </a>
                    <a target="_blank" href="https://www.tiktok.com/@oktanitb" className="rounded-circle shadow-sm p-3 mx-1 darken-hover">
                        <FontAwesomeIcon icon={faTiktok} size="xl" />
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;