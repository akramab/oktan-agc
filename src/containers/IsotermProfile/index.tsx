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
            year1Error: "",
            email1Error: "",
            number1Error: "",
            year2Error: "",
            email2Error: "",
            number2Error: "",
            year3Error: "",
            email3Error: "",
            number3Error: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.validateInput = this.validateInput.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.handleSubmitData = this.handleSubmitData.bind(this);
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
        return "";
    }

    private validateForm(): boolean {
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
            paper1,
            fullDocument,
            year1Error,
            email1Error,
            number1Error,
            year2Error,
            email2Error,
            number2Error,
            year3Error,
            email3Error,
            number3Error
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
        else if (!abstract1) {
            document.getElementById("abstract1")?.focus();
            return false;
        }
        else if (!paper1) {
            document.getElementById("paper1")?.focus();
            return false;
        }
        else if (!fullDocument) {
            document.getElementById("fullDocument")?.focus();
            return false;
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
            year1Error,
            email1Error,
            number1Error,
            year2Error,
            email2Error,
            number2Error,
            year3Error,
            email3Error,
            number3Error
        } = this.state;
        return (
            <IsotermProfileComponent
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
                year1Error={year1Error}
                email1Error={email1Error}
                number1Error={number1Error}
                year2Error={year2Error}
                email2Error={email2Error}
                number2Error={number2Error}
                year3Error={year3Error}
                email3Error={email3Error}
                number3Error={number3Error}
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