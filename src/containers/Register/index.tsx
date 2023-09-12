import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";

const RegisterComponent = lazy(() => import("../../components/Register"));

export class RegisterContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
    };

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <RegisterComponent/>
        )
    }
}
  
export default RegisterContainer;