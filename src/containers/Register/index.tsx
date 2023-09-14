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
            showPassword: false,
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
            emailError: "",
            usernameError: "",
            passwordError: "",
            confirmPasswordError: ""
        };
        this.togglePassword = this.togglePassword.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validateInput = this.validateInput.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
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
            password,
            confirmPassword
        } = this.state;

        if (this.validateForm()) {
            // API Integration
            return;
        }

        console.log("INVALID FORM");
    }

    render() {
        const {
            showPassword,
            email,
            username,
            password,
            confirmPassword,
            emailError,
            usernameError,
            passwordError,
            confirmPasswordError
        } = this.state;
        return (
            <RegisterComponent
                showPassword={showPassword}
                email={email}
                username={username}
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
  
export default RegisterContainer;