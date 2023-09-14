import { PureComponent } from "react";
import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

export class ComingSoonContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
    };

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="h-100 d-flex flex-column">
                <Row className="bg-gray align-items-center flex-grow-1">
                    <Col>
                        <h1 className="text-center">COMING SOON</h1>
                    </Col>
                </Row>
            </div>
        )
    }
}
  
export default ComingSoonContainer;