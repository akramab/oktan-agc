import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { isotermProfileSelector, editProfileMessageSelector } from "./selector";
import { getIsotermProfile, editIsotermProfile } from "./action";

const IsotermProfileComponent = lazy(() => import("../../components/IsotermProfile"));

export class IsotermProfileContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
        isotermProfileResponse: PropTypes.any,
        editProfileMessageResponse: PropTypes.any,
    };

    constructor(props: any) {
        super(props);

        this.state = {
            showModal: false,
            shrink: false,
            teamName: "",
            subtheme: "",
            name1: "",
            year1: "",
            major1: "",
            email1: "",
            number1: "",
            name2: "",
            year2: "",
            major2: "",
            email2: "",
            number2: "",
            name3: "",
            year3: "",
            major3: "",
            email3: "",
            number3: "",
            universityName: "",
            teacherName: "",
            abstract1: null,
            abstract2: null,
            paper1: null,
            paper2: null,
            fullDocument: null,
            paymentDocument: null,
            abstract1Link: "",
            abstract2Link: "",
            paper1Link: "",
            paper2Link: "",
            paymentLink: "",
            fullLink: "",
            year1Error: "",
            email1Error: "",
            number1Error: "",
            year2Error: "",
            email2Error: "",
            number2Error: "",
            year3Error: "",
            email3Error: "",
            number3Error: "",
            abstract1Error: "",
            abstract2Error: "",
            paper1Error: "",
            paper2Error: "",
            fullDocumentError: "",
            paymentDocumentError: ""
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validateInput = this.validateInput.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.handleSubmitData = this.handleSubmitData.bind(this);
    }

    componentDidMount(): void {
        const { competitionType } = this.props;
        if (competitionType === "CRYSTAL") {
            this.props.history.replace("/profile/crystal");
        }
        else if (competitionType === "ADMIN") {
            this.props.history.replace("/dashboard/contestant");
        }
        this.props.getIsotermProfileData();
    }

    componentDidUpdate(prevProps: any): void {
        const { isotermProfileResponse, editProfileMessageResponse } = this.props;
        if (prevProps.isotermProfileResponse !== isotermProfileResponse && isotermProfileResponse.length !== 0) {
            let abstract1 = isotermProfileResponse.documents.find(d => {return d.name === "abstract" && d.id === "1"});
            let abstract2 = isotermProfileResponse.documents.find(d => {return d.name === "abstract" && d.id === "2"});
            let work1 = isotermProfileResponse.documents.find(d => {return d.name === "work" && d.id === "1"});
            let work2 = isotermProfileResponse.documents.find(d => {return d.name === "work" && d.id === "2"});
            let payment = isotermProfileResponse.documents.find(d => {return d.name === "payment"});
            let unified = isotermProfileResponse.documents.find(d => {return d.name === "unified_document"});

            let abstract1Doc = abstract1 && new File([abstract1.path], "abstract1.pdf", {type: "application/pdf"});
            let abstract2Doc = abstract2 && new File([abstract2.path], "abstract2.pdf", {type: "application/pdf"});
            let work1Doc = work1 && new File([work1.path], "work1.pdf", {type: "application/pdf"});
            let work2Doc = work2 && new File([work2.path], "work2.pdf", {type: "application/pdf"});
            let paymentDoc = payment && new File([payment.path], "payment.pdf", {type: "application/pdf"});
            let unifiedDoc = unified && new File([unified.path], "unified.pdf", {type: "application/pdf"});

            this.setState({
                ...this.state,
                teamName: isotermProfileResponse.team,
                subtheme: isotermProfileResponse.sub_theme,
                name1: isotermProfileResponse.members[0].name,
                year1: isotermProfileResponse.members[0].year,
                major1: isotermProfileResponse.members[0].major,
                number1: isotermProfileResponse.members[0].wa_number,
                email1: isotermProfileResponse.members[0].email,
                name2: isotermProfileResponse.members[1].name,
                year2: isotermProfileResponse.members[1].year,
                major2: isotermProfileResponse.members[1].major,
                number2: isotermProfileResponse.members[1].wa_number,
                email2: isotermProfileResponse.members[1].email,
                name3: isotermProfileResponse.members[2].name,
                year3: isotermProfileResponse.members[2].year,
                major3: isotermProfileResponse.members[2].major,
                number3: isotermProfileResponse.members[2].wa_number,
                email3: isotermProfileResponse.members[2].email,
                universityName: isotermProfileResponse.institution.university.name,
                teacherName: isotermProfileResponse.institution.university.lecturer,
                abstract1: abstract1Doc ?? null,
                abstract2: abstract2Doc ?? null,
                paper1: work1Doc ?? null,
                paper2: work2Doc ?? null,
                paymentDocument: paymentDoc ?? null,
                fullDocument: unifiedDoc ?? null,
                abstract1Link: abstract1?.path ?? "",
                abstract2Link: abstract2?.path ?? "",
                paper1Link: work1?.path ?? "",
                paper2Link: work2?.path ?? "",
                fullLink: unified?.path ?? "",
                paymentLink: payment?.path ?? ""
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

    private toggleSidebar(): void {
        this.setState({
            shrink: !this.state.shrink
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
        else if (type.toLowerCase().includes("year")) {
            if (!input || (isNaN(input) && isNaN(Number(input))) || input.length !== 4) {
                return "Please enter a valid year";
            }
        }
        else if (type.toLowerCase().includes("email")) {
            if (!input || !input.match(re)) {
                return "Please enter a valid email";
            }
        }
        else if (type.toLowerCase().includes("document") ||
            type.toLowerCase().includes("abstract") ||
            type.toLowerCase().includes("paper")
        ) {
            if (!input.name.endsWith("pdf")) {
                return "Please use a PDF file";
            }
        }
        return "";
    }

    private validateForm(): boolean {
        const { passed } = this.props;
        const {
            teamName,
            subtheme,
            name1,
            year1,
            major1,
            email1,
            number1,
            name2,
            year2,
            major2,
            email2,
            number2,
            name3,
            year3,
            major3,
            email3,
            number3,
            universityName,
            abstract1,
            abstract2,
            paper1,
            paper2,
            fullDocument,
            paymentDocument,
            year1Error,
            email1Error,
            number1Error,
            year2Error,
            email2Error,
            number2Error,
            year3Error,
            email3Error,
            number3Error,
            abstract1Error,
            abstract2Error,
            paper1Error,
            paper2Error,
            fullDocumentError,
            paymentDocumentError
        } = this.state;
        if (!teamName) {
            document.getElementsByName("teamName")[0].focus();
            return false;
        }
        else if (!subtheme) {
            document.getElementsByName("subtheme")[0].focus();
            return false;
        }
        else if (!name1) {
            document.getElementsByName("name1")[0].focus();
            return false;
        }
        else if (!year1 || year1Error) {
            document.getElementsByName("year1")[0].focus();
            return false;
        }
        else if (!major1) {
            document.getElementsByName("major1")[0].focus();
            return false;
        }
        else if (!email1 || email1Error) {
            document.getElementsByName("email1")[0].focus();
            return false;
        }
        else if (!number1 || number1Error) {
            document.getElementsByName("number1")[0].focus();
            return false;
        }
        else if (!name2) {
            document.getElementsByName("name2")[0].focus();
            return false;
        }
        else if (!year2 || year2Error) {
            document.getElementsByName("year2")[0].focus();
            return false;
        }
        else if (!major2) {
            document.getElementsByName("major2")[0].focus();
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
        else if (!name3) {
            document.getElementsByName("name3")[0].focus();
            return false;
        }
        else if (!year3 || year3Error) {
            document.getElementsByName("year3")[0].focus();
            return false;
        }
        else if (!major3) {
            document.getElementsByName("major3")[0].focus();
            return false;
        }
        else if (!number3 || number3Error) {
            document.getElementsByName("number3")[0].focus();
            return false;
        }
        else if (!email3 || email3Error) {
            document.getElementsByName("email3")[0].focus();
            return false;
        }
        else if (!universityName) {
            document.getElementsByName("universityName")[0].focus();
            return false;
        }
        else if (!abstract1 || abstract1Error) {
            document.getElementById("abstract1")?.focus();
            return false;
        }
        else if (!paymentDocument || paymentDocumentError) {
            document.getElementById("paymentDocument")?.focus();
            return false;
        }
        else if (!fullDocument || fullDocumentError) {
            document.getElementById("fullDocument")?.focus();
            return false;
        }
        else if (passed) {
            if ((!abstract2 && paper2) || abstract2Error) {
                document.getElementById("abstract2")?.focus();
                return false;
            }
            else if (!paper1 || paper1Error) {
                document.getElementById("paper1")?.focus();
                return false;
            }
            else if ((abstract2 && !paper2) || paper2Error) {
                document.getElementById("paper2")?.focus();
                return false;
            }
        }
        return true;
    }

    private handleSubmitData(e: any): void {
        e.preventDefault();
        
        const {
            teamName,
            subtheme,
            name1,
            year1,
            major1,
            email1,
            number1,
            name2,
            year2,
            major2,
            email2,
            number2,
            name3,
            year3,
            major3,
            email3,
            number3,
            universityName,
            teacherName,
            abstract1,
            abstract2,
            paper1,
            paper2,
            fullDocument,
            paymentDocument
        } = this.state;

        if (this.validateForm()) {
            let memberData = [
                {
                    id: "1",
                    name: name1,
                    year: year1,
                    major: major1,
                    wa_number: `0${number1}`,
                    email: email1
                },
                {
                    id: "2",
                    name: name2,
                    year: year2,
                    major: major2,
                    wa_number: `0${number2}`,
                    email: email2
                },
                {
                    id: "3",
                    name: name3,
                    year: year3,
                    major: major3,
                    wa_number: `0${number3}`,
                    email: email3
                }
            ];

            let institutionData = {
                university: {
                    name: universityName,
                    lecturer: teacherName
                }
            };

            let formData = {
                team: teamName,
                sub_theme: subtheme,
                members_data: JSON.stringify(memberData),
                institution_data: JSON.stringify(institutionData),
                abstract_1_document: abstract1,
                abstract_2_document: abstract2,
                work_1_document: paper1,
                work_2_document: paper2,
                unified_document: fullDocument,
                payment_document: paymentDocument
            }
            
            this.props.editIsotermProfileData(formData);
        }
    }

    render() {
        const {
            showModal,
            shrink,
            teamName,
            subtheme,
            name1,
            year1,
            major1,
            email1,
            number1,
            name2,
            year2,
            major2,
            email2,
            number2,
            name3,
            year3,
            major3,
            email3,
            number3,
            universityName,
            teacherName,
            abstract1,
            abstract2,
            paper1,
            paper2,
            fullDocument,
            paymentDocument,
            abstract1Link,
            abstract2Link,
            paper1Link,
            paper2Link,
            paymentLink,
            fullLink,
            year1Error,
            email1Error,
            number1Error,
            year2Error,
            email2Error,
            number2Error,
            year3Error,
            email3Error,
            number3Error,
            abstract1Error,
            abstract2Error,
            paper1Error,
            paper2Error,
            fullDocumentError,
            paymentDocumentError
        } = this.state;
        return (
            <IsotermProfileComponent
                verified={this.props.verified}
                passed={this.props.passed}
                showModal={showModal}
                shrink={shrink}
                teamName={teamName}
                subtheme={subtheme}
                name1={name1}
                year1={year1}
                major1={major1}
                email1={email1}
                number1={number1}
                name2={name2}
                year2={year2}
                major2={major2}
                email2={email2}
                number2={number2}
                name3={name3}
                year3={year3}
                major3={major3}
                email3={email3}
                number3={number3}
                universityName={universityName}
                teacherName={teacherName}
                abstract1={abstract1}
                abstract2={abstract2}
                paper1={paper1}
                paper2={paper2}
                fullDocument={fullDocument}
                paymentDocument={paymentDocument}
                abstract1Link={abstract1Link}
                abstract2Link={abstract2Link}
                paper1Link={paper1Link}
                paper2Link={paper2Link}
                paymentLink={paymentLink}
                fullLink={fullLink}
                year1Error={year1Error}
                email1Error={email1Error}
                number1Error={number1Error}
                year2Error={year2Error}
                email2Error={email2Error}
                number2Error={number2Error}
                year3Error={year3Error}
                email3Error={email3Error}
                number3Error={number3Error}
                abstract1Error={abstract1Error}
                abstract2Error={abstract2Error}
                paper1Error={paper1Error}
                paper2Error={paper2Error}
                fullDocumentError={fullDocumentError}
                paymentDocumentError={paymentDocumentError}
                toggleModal={this.toggleModal}
                toggleSidebar={this.toggleSidebar}
                handleChange={this.handleChange}
                handleSubmitData={this.handleSubmitData}
            />
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        isotermProfileResponse: isotermProfileSelector(state),
        editProfileMessageResponse: editProfileMessageSelector(state)
    };
};
  
function mapDispatchToProps(dispatch: any) {
    return {
        getIsotermProfileData: () => dispatch(getIsotermProfile()),
        editIsotermProfileData: (params: any) => dispatch(editIsotermProfile(params))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IsotermProfileContainer);