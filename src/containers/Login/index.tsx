import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginMessageSelector } from "./selector";
import { sendLogin } from "./action";

const LoginComponent = lazy(() => import("../../components/Login"));

export class LoginContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
        loginMessageResponse: PropTypes.any,
    };

    constructor(props: any) {
        super(props);

        this.state = {
            showPassword: false,
            emailUsername: "",
            password: "",
            emailUsernameError: "",
            passwordError: ""
        };
        this.togglePassword = this.togglePassword.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validateInput = this.validateInput.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    componentDidMount(): void {
        const { authToken } = this.props;
        if (authToken) {
            this.props.history.replace("/");
        }
    }

    componentDidUpdate(prevProps: any): void {
        const { loginMessageResponse } = this.props;
        if (prevProps.loginMessageResponse !== loginMessageResponse && loginMessageResponse) {
            localStorage.setItem("AUTH_TOKEN", loginMessageResponse.access_token);
            localStorage.setItem("COMPETITION_TYPE", loginMessageResponse.competition_type);
            if (loginMessageResponse.competition_type === "CRYSTAL") {
                this.props.history.replace("/profile/crystal");
            }
            else if (loginMessageResponse.competition_type === "ISOTERM") {
                this.props.history.replace("/profile/isoterm");
            }
        }
    }

    private togglePassword(): void {
        this.setState({
            ...this.state,
            showPassword: !this.state.showPassword
        });
    }

    private handleChange(e: any): void {
        const { name, value } = e.target;
        let errorType = name + "Error";
        let errorMessage = this.validateInput(value, name);

        this.setState({
            ...this.state,
            [name]: value,
            [errorType]: errorMessage
        });
    }

    private validateInput(input: string, type: string): string {
        if (type === "emailUsername") {
            if (input === "") {
                return "Username or email cannot be empty";
            }
        }
        else if (type === "password") {
            if (input === "") {
                return "Please enter your password";
            }
        }
        return "";
    }

    private validateForm(): boolean {
        const {
            emailUsername,
            password
        } = this.state;
        if (emailUsername === "") {
            document.getElementsByName("emailUsername")[0].focus();
            return false;
        }
        else if (password === "") {
            document.getElementsByName("password")[0].focus();
            return false;
        }
        return true;
    }

    private handleLogin(e: any): void {
        e.preventDefault();
        
        const {
            emailUsername,
            password
        } = this.state;

        if (this.validateForm()) {
            this.props.sendLoginData({
                username: emailUsername,
                password
            })
            return;          
        }
    }

    render() {
        const {
            showPassword,
            emailUsername,
            password,
            emailUsernameError,
            passwordError
        } = this.state;
        return (
            <LoginComponent
                showPassword={showPassword}
                emailUsername={emailUsername}
                password={password}
                emailUsernameError={emailUsernameError}
                passwordError={passwordError}
                togglePassword={this.togglePassword}
                handleChange={this.handleChange}
                handleLogin={this.handleLogin}
            />
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        loginMessageResponse: loginMessageSelector(state)
    };
};
  
function mapDispatchToProps(dispatch: any) {
    return {
        sendLoginData: (params: any) => dispatch(sendLogin(params))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);