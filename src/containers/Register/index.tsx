import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";

const RegisterComponent = lazy(() => import("../../components/Register"));

export class RegisterContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
    };

    constructor(props: any) {
        super(props);

        this.state = {
            showPassword: false
        };
        this.togglePassword = this.togglePassword.bind(this);
    }

    private togglePassword(): void {
        this.setState({
            ...this.state,
            showPassword: !this.state.showPassword
        });
    }

    render() {
        const { showPassword } = this.state;
        return (
            <RegisterComponent
                showPassword={showPassword}
                togglePassword={this.togglePassword}
            />
        )
    }
}
  
export default RegisterContainer;