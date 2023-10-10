import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { newPasswordMessageSelector } from "./selector";
import { sendNewPassword } from "./action";

const NewPasswordComponent = lazy(() => import("../../components/NewPassword"));

export class NewPasswordContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
        newPasswordMessageResponse: PropTypes.any
    };

    constructor(props: any) {
        super(props);

        this.state = {
            showModal: false,
            showPassword: false,
            password: "",
            confirmPassword: "",
            passwordError: "",
            confirmPasswordError: ""
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.togglePassword = this.togglePassword.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validateInput = this.validateInput.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.handleNewPassword = this.handleNewPassword.bind(this);
    }

    componentDidMount(): void {
        const { authToken } = this.props;
        if (authToken) {
            this.props.history.replace("/");
        }
    }

    componentDidUpdate(prevProps: any): void {
        const { newPasswordMessageResponse } = this.props;
        if (prevProps.newPasswordMessageResponse !== newPasswordMessageResponse && newPasswordMessageResponse) {
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
        if (type === "password") {
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
            passwordError,
            confirmPasswordError
        } = this.state;
        if (passwordError) {
            document.getElementsByName("password")[0].focus();
            return false;
        }
        else if (confirmPasswordError || password !== confirmPassword) {
            document.getElementsByName("confirmPassword")[0].focus();
            return false;
        }
        return true;
    }

    private handleNewPassword(e: any): void {
        e.preventDefault();
        
        const id = this.props.match.params.id;
        const {
            password
        } = this.state;

        if (this.validateForm()) {
            this.props.sendNewPasswordData({
                id,
                password
            })
            return;
        }
    }

    render() {
        const {
            showModal,
            showPassword,
            password,
            confirmPassword,
            passwordError,
            confirmPasswordError
        } = this.state;
        return (
            <NewPasswordComponent
                showModal={showModal}
                showPassword={showPassword}
                password={password}
                confirmPassword={confirmPassword}
                passwordError={passwordError}
                confirmPasswordError={confirmPasswordError}
                togglePassword={this.togglePassword}
                handleChange={this.handleChange}
                handleNewPassword={this.handleNewPassword}
            />
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        newPasswordMessageResponse: newPasswordMessageSelector(state)
    };
};
  
function mapDispatchToProps(dispatch: any) {
    return {
        sendNewPasswordData: (params: any) => dispatch(sendNewPassword(params))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewPasswordContainer);