import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";

const LoginComponent = lazy(() => import("../../components/Login"));

export class LoginContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
    };

    constructor(props: any) {
        super(props);

        this.state = {
            showPassword: false,
            emailUsername: "",
            password: ""
        };
        this.togglePassword = this.togglePassword.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    private togglePassword(): void {
        this.setState({
            ...this.state,
            showPassword: !this.state.showPassword
        });
    }

    private handleChange(e: any): void {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        });
    }

    private handleLogin(e: any): void {
        e.preventDefault();
        
        const {
            emailUsername,
            password
        } = this.state;

        //API Integration

        console.log("SENT");
    }

    render() {
        const {
            showPassword,
            emailUsername,
            password
        } = this.state;
        return (
            <LoginComponent
                showPassword={showPassword}
                emailUsername={emailUsername}
                password={password}
                togglePassword={this.togglePassword}
                handleChange={this.handleChange}
                handleLogin={this.handleLogin}
            />
        )
    }
}
  
export default LoginContainer;