import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { crystalProfileSelector, editProfileMessageSelector } from "./selector";
import { getCrystalProfile, editCrystalProfile } from "./action";

const CrystalProfileComponent = lazy(() => import("../../components/CrystalProfile"));

export class CrystalProfileContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
        crystalProfileResponse: PropTypes.any,
        editProfileMessageResponse: PropTypes.any,
    };

    constructor(props: any) {
        super(props);

        this.state = {
            teamName: "",
            registrationDocument: null,
            name1: "",
            number1: "",
            email1: "",
            name2: "",
            number2: "",
            email2: "",
            teacherName: "",
            teacherNumber: "",
            teacherEmail: "",
            schoolName: "",
            schoolNumber: "",
            schoolEmail: "",
            paymentDocument: null,
            number1Error: "",
            email1Error: "",
            number2Error: "",
            email2Error: "",
            teacherNumberError: "",
            teacherEmailError: "",
            schoolNumberError: "",
            schoolEmailError: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.validateInput = this.validateInput.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.handleSubmitData = this.handleSubmitData.bind(this);
    }

    componentDidMount(): void {
        const { competitionType } = this.props;
        if (competitionType !== "CRYSTAL") {
            this.props.history.replace("/profile/isoterm");
        }
    }

    private handleChange(e: any): void {
        const { name, value, files } = e.target;
        let errorType = name + "Error";
        let errorMessage = this.validateInput(value, name);

        this.setState({
            ...this.state,
            [name]: files ? files[0] : value,
            [errorType]: !files ? errorMessage : "",
        });
    }

    private validateInput(input: any, type: string): string {
        const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (type.toLowerCase().includes("number")) {
            if (!input || (isNaN(input) && isNaN(Number(input)))) {
                return "Please enter a number";
            }
        }
        else if (type.toLowerCase().includes("email")) {
            if (!input || !input.match(re)) {
                return "Please enter a valid email";
            }
        }
        return "";
    }

    private validateForm(): boolean {
        const {
            teamName,
            registrationDocument,
            name1,
            number1,
            email1,
            name2,
            number2,
            email2,
            teacherName,
            teacherNumber,
            teacherEmail,
            schoolName,
            schoolNumber,
            schoolEmail,
            number1Error,
            email1Error,
            number2Error,
            email2Error,
            teacherNumberError,
            teacherEmailError,
            schoolNumberError,
            schoolEmailError,
            paymentDocument
        } = this.state;
        if (!teamName) {
            document.getElementsByName("teamName")[0].focus();
            return false;
        }
        else if (!registrationDocument) {
            document.getElementById("registrationDocument")?.focus();
            return false;
        }
        else if (!name1) {
            document.getElementsByName("name1")[0].focus();
            return false;
        }
        else if (!number1 || number1Error) {
            document.getElementsByName("number1")[0].focus();
            return false;
        }
        else if (!email1 || email1Error) {
            document.getElementsByName("email1")[0].focus();
            return false;
        }
        else if (!name2) {
            document.getElementsByName("name2")[0].focus();
            return false;
        }
        else if (!number2 || number2Error) {
            document.getElementsByName("number2")[0].focus();
            return false;
        }
        else if (!email2 || email2Error) {
            document.getElementsByName("email2")[0].focus();
            return false;
        }
        else if (!teacherName) {
            document.getElementsByName("teacherName")[0].focus();
            return false;
        }
        else if (!teacherNumber || teacherNumberError) {
            document.getElementsByName("teacherNumber")[0].focus();
            return false;
        }
        else if (!teacherEmail || teacherEmailError) {
            document.getElementsByName("teacherEmail")[0].focus();
            return false;
        }
        else if (!schoolName) {
            document.getElementsByName("schoolName")[0].focus();
            return false;
        }
        else if (!schoolNumber || schoolNumberError) {
            document.getElementsByName("schoolNumber")[0].focus();
            return false;
        }
        else if (!schoolEmail || schoolEmailError) {
            document.getElementsByName("schoolEmail")[0].focus();
            return false;
        }
        else if (!paymentDocument) {
            document.getElementById("paymentDocument")?.focus();
            return false;
        }
        return true;
    }

    private handleSubmitData(e: any): void {
        e.preventDefault();
        
        const {
            teamName,
            registrationDocument,
            name1,
            number1,
            email1,
            name2,
            number2,
            email2,
            teacherName,
            teacherNumber,
            teacherEmail,
            schoolName,
            schoolNumber,
            schoolEmail,
            paymentDocument,
        } = this.state;

        if (this.validateForm()) {
            // API Integration
            return;
        }

        console.log("INVALID FORM");
    }

    render() {
        const {
            teamName,
            registrationDocument,
            name1,
            number1,
            email1,
            name2,
            number2,
            email2,
            teacherName,
            teacherNumber,
            teacherEmail,
            schoolName,
            schoolNumber,
            schoolEmail,
            paymentDocument,
            number1Error,
            email1Error,
            number2Error,
            email2Error,
            teacherNumberError,
            teacherEmailError,
            schoolNumberError,
            schoolEmailError,
        } = this.state;
        return (
            <CrystalProfileComponent
                teamName={teamName}
                registrationDocument={registrationDocument}
                name1={name1}
                number1={number1}
                email1={email1}
                name2={name2}
                number2={number2}
                email2={email2}
                teacherName={teacherName}
                teacherNumber={teacherNumber}
                teacherEmail={teacherEmail}
                schoolName={schoolName}
                schoolNumber={schoolNumber}
                schoolEmail={schoolEmail}
                paymentDocument={paymentDocument}
                number1Error={number1Error}
                email1Error={email1Error}
                number2Error={number2Error}
                email2Error={email2Error}
                teacherNumberError={teacherNumberError}
                teacherEmailError={teacherEmailError}
                schoolNumberError={schoolNumberError}
                schoolEmailError={schoolEmailError}
                handleChange={this.handleChange}
                handleSubmitData={this.handleSubmitData}
            />
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        crystalProfileResponse: crystalProfileSelector(state),
        editProfileMessageResponse: editProfileMessageSelector(state)
    };
};
  
function mapDispatchToProps(dispatch: any) {
    return {
        getCrystalProfileData: () => dispatch(getCrystalProfile()),
        editCrystalProfileData: (params: any) => dispatch(editCrystalProfile(params))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CrystalProfileContainer);