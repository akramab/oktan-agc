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
            showModal: false,
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
            registrationDocumentError: "",
            number1Error: "",
            email1Error: "",
            number2Error: "",
            email2Error: "",
            teacherNumberError: "",
            teacherEmailError: "",
            schoolNumberError: "",
            schoolEmailError: "",
            paymentDocumentError: ""
        };
        this.toggleModal = this.toggleModal.bind(this);
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
        this.props.getCrystalProfileData();
    }

    componentDidUpdate(prevProps: any): void {
        const { crystalProfileResponse, editProfileMessageResponse } = this.props;
        if (prevProps.crystalProfileResponse !== crystalProfileResponse && crystalProfileResponse.length !== 0) {
            this.setState({
                ...this.state,
                teamName: crystalProfileResponse.team,
                name1: crystalProfileResponse.members[0].name,
                number1: crystalProfileResponse.members[0].wa_number,
                email1: crystalProfileResponse.members[0].email,
                name2: crystalProfileResponse.members[1].name,
                number2: crystalProfileResponse.members[1].wa_number,
                email2: crystalProfileResponse.members[1].email,
                teacherName: crystalProfileResponse.institution.teacher.name,
                teacherNumber: crystalProfileResponse.institution.teacher.wa_number,
                teacherEmail: crystalProfileResponse.institution.teacher.email,
                schoolName: crystalProfileResponse.institution.school.name,
                schoolNumber: crystalProfileResponse.institution.school.wa_number,
                schoolEmail: crystalProfileResponse.institution.school.email
            });
        }
        if (prevProps.editProfileMessageResponse !== editProfileMessageResponse && editProfileMessageResponse) {
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
        const { name, value, files } = e.target;
        let errorType = name + "Error";
        let errorMessage = "";
        if (files) {
            errorMessage = this.validateInput(files[0], name);
        }
        else {
            errorMessage = this.validateInput(value, name);
        }

        this.setState({
            ...this.state,
            [name]: files ? files[0] : value,
            [errorType]: errorMessage,
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
        else if (type.toLowerCase().includes("document")) {
            if (!input.name.endsWith("pdf")) {
                return "Please use a PDF file";
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
            paymentDocument,
            registrationDocumentError,
            number1Error,
            email1Error,
            number2Error,
            email2Error,
            teacherNumberError,
            teacherEmailError,
            schoolNumberError,
            schoolEmailError,
            paymentDocumentError,
        } = this.state;
        if (!teamName) {
            document.getElementsByName("teamName")[0].focus();
            return false;
        }
        else if (!registrationDocument || registrationDocumentError) {
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
        else if (!paymentDocument || paymentDocumentError) {
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
            let memberData = [
                {
                    id: "1",
                    name: name1,
                    wa_number: `0${number1}`,
                    email: email1
                },
                {
                    id: "2",
                    name: name2,
                    wa_number: `0${number2}`,
                    email: email2
                },
            ];

            let institutionData ={
                teacher: {
                    name: teacherName,
                    wa_number: `0${teacherNumber}`,
                    email: teacherEmail
                },
                school: {
                    name: schoolName,
                    wa_number: `0${schoolNumber}`,
                    email: schoolEmail
                }
            };

            let formData = {
                team: teamName,
                members_data: JSON.stringify(memberData),
                institution_data: JSON.stringify(institutionData),
                registration_document: registrationDocument,
                payment_document: paymentDocument
            }

            this.props.editCrystalProfileData(formData);
        }
    }

    render() {
        const {
            showModal,
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
            registrationDocumentError,
            number1Error,
            email1Error,
            number2Error,
            email2Error,
            teacherNumberError,
            teacherEmailError,
            schoolNumberError,
            schoolEmailError,
            paymentDocumentError
        } = this.state;
        return (
            <CrystalProfileComponent
                verified={this.props.verified}
                showModal={showModal}
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
                registrationDocumentError={registrationDocumentError}
                teacherNumberError={teacherNumberError}
                teacherEmailError={teacherEmailError}
                schoolNumberError={schoolNumberError}
                schoolEmailError={schoolEmailError}
                paymentDocumentError={paymentDocumentError}
                toggleModal={this.toggleModal}
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