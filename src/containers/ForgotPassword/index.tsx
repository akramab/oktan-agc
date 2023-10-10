import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { forgotPasswordMessageSelector } from "./selector";
import { sendReset } from "./action";

const ForgotPasswordComponent = lazy(() => import("../../components/ForgotPassword"));

export class ForgotPasswordContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
        forgotPasswordMessageResponse: PropTypes.any
    };

    constructor(props: any) {
        super(props);

        this.state = {
            showModal: false,
            email: "",
            emailError: ""
        };
        
        this.toggleModal = this.toggleModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validateInput = this.validateInput.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    componentDidMount(): void {
        const { authToken } = this.props;
        if (authToken) {
            this.props.history.replace("/");
        }
    }

    componentDidUpdate(prevProps: any): void {
        const { forgotPasswordMessageResponse } = this.props;
        if (prevProps.forgotPasswordMessageResponse !== forgotPasswordMessageResponse && forgotPasswordMessageResponse) {
            this.toggleModal();
        }
    }

    private toggleModal(): void {
        this.setState({
            ...this.state,
            showModal: !this.state.showModal
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
        return "";
    }

    private validateForm(): boolean {
        const { emailError } = this.state;
        if (emailError) {
            document.getElementsByName("email")[0].focus();
            return false;
        }
        return true;
    }

    private handleReset(e: any): void {
        e.preventDefault();
        
        const { email } = this.state;

        if (this.validateForm()) {
            this.props.sendResetData({
                email
            })
            return;          
        }
    }

    render() {
        const { showModal, email, emailError } = this.state;
        return (
            <ForgotPasswordComponent
                {...this.props}
                showModal={showModal}
                email={email}
                emailError={emailError}
                toggleModal={this.toggleModal}
                handleChange={this.handleChange}
                handleReset={this.handleReset}
            />
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        forgotPasswordMessageResponse: forgotPasswordMessageSelector(state)
    };
};
  
function mapDispatchToProps(dispatch: any) {
    return {
        sendResetData: (params: any) => dispatch(sendReset(params))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ForgotPasswordContainer);