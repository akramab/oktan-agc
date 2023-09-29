import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerMessageSelector } from "./selector";
import { sendRegister } from "./action";

const RegisterComponent = lazy(() => import("../../components/Register"));

export class RegisterContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
        registerMessageResponse: PropTypes.any
    };

    constructor(props: any) {
        super(props);

        this.state = {
            showModal: false,
            showPassword: false,
            email: "",
            username: "",
            competitionType: "",
            password: "",
            confirmPassword: "",
            emailError: "",
            usernameError: "",
            passwordError: "",
            confirmPasswordError: ""
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.togglePassword = this.togglePassword.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validateInput = this.validateInput.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    componentDidMount(): void {
        const { authToken } = this.props;
        if (authToken) {
            this.props.history.replace("/");
        }
    }

    componentDidUpdate(prevProps: any): void {
        const { registerMessageResponse } = this.props;
        if (prevProps.registerMessageResponse !== registerMessageResponse && registerMessageResponse) {
            this.toggleModal();
        }
    }

    private toggleModal(): void {
        this.setState({
            ...this.state,
            showModal: !this.state.showModal
        });
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
        const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (type === "email") {
            if (input === "") {
                return "Please enter an email";
            }
            else if (!input.match(re)) {
                return "Must enter a valid email";
            }
        }
        else if (type === "username") {
            if (input.length < 6) {
                return "must be at least 6 character long";
            }
            else if (input.includes(" ")) {
                return "Username cannot contain space";
            }
        }
        else if (type === "password") {
            if (input.length === 0) {
                return "Please enter your password";
            }
            else if (input.length < 6) {
                return "must be at least 6 character long";
            }
        }
        else if (type === "confirmPassword") {
            const { password } = this.state;
            if (password !== input) {
                return "Password do not match";
            }
        }
        return "";
    }

    private validateForm(): boolean {
        const {
            competitionType,
            password,
            confirmPassword,
            emailError,
            usernameError,
            passwordError,
            confirmPasswordError
        } = this.state;
        if (emailError) {
            document.getElementsByName("email")[0].focus();
            return false;
        }
        else if (usernameError) {
            document.getElementsByName("username")[0].focus();
            return false;
        }
        else if (!competitionType) {
            document.getElementsByName("competitionType")[0].focus();
            return false;
        }
        else if (passwordError) {
            document.getElementsByName("password")[0].focus();
            return false;
        }
        else if (confirmPasswordError || password !== confirmPassword) {
            document.getElementsByName("confirmPassword")[0].focus();
            return false;
        }
        return true;
    }

    private handleRegister(e: any): void {
        e.preventDefault();
        
        const {
            email,
            username,
            competitionType,
            password
        } = this.state;

        if (this.validateForm()) {
            this.props.sendRegisterData({
                username,
                email,
                competition_type: competitionType,
                password
            })
            return;
        }
    }

    render() {
        const {
            showModal,
            showPassword,
            email,
            username,
            competitionType,
            password,
            confirmPassword,
            emailError,
            usernameError,
            passwordError,
            confirmPasswordError
        } = this.state;
        return (
            <RegisterComponent
                showModal={showModal}
                showPassword={showPassword}
                email={email}
                username={username}
                competitionType={competitionType}
                password={password}
                confirmPassword={confirmPassword}
                emailError={emailError}
                usernameError={usernameError}
                passwordError={passwordError}
                confirmPasswordError={confirmPasswordError}
                togglePassword={this.togglePassword}
                handleChange={this.handleChange}
                handleRegister={this.handleRegister}
            />
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        registerMessageResponse: registerMessageSelector(state)
    };
};
  
function mapDispatchToProps(dispatch: any) {
    return {
        sendRegisterData: (params: any) => dispatch(sendRegister(params))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterContainer);