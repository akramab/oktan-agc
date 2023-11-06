import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
    questionsDataSelector,
    editMessageSelector,
    deleteMessageSelector,
    createMessageSelector,
    questionDetailSelector
} from "./selector";
import {
    getQuestionsData,
    editQuestionData,
    deleteQuestionData,
    createQuestion,
    getQuestionDetail
} from "./action";

const QuestionDashboardComponent = lazy(() => import("../../components/QuestionDashboard"));

export class QuestionDashboardContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
        questionsDataResponse: PropTypes.any,
        editMessageResponse: PropTypes.any,
        deleteMessageResponse: PropTypes.any,
        createMessageResponse: PropTypes.any,
        questionDetailResponse: PropTypes.any
    };

    constructor(props: any) {
        super(props);
        this.state = {
            showModal: false,
            showEdit: false,
            showDelete: false,
            showCreate: false,
            shrink: false,
            number: "",
            type: "",
            question: "",
            answers: ["", "", "", ""],
            id: "",
            numberError: "",
            typeError: "",
            questionError: ""
        };

        this.toggleEdit = this.toggleEdit.bind(this);
        this.toggleDelete = this.toggleDelete.bind(this);
        this.toggleCreate = this.toggleCreate.bind(this);
        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validateInput = this.validateInput.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.handleEditQuestion = this.handleEditQuestion.bind(this);
        this.handleDeleteQuestion = this.handleDeleteQuestion.bind(this);
        this.submitCreateQuestion = this.submitCreateQuestion.bind(this);
    }

    componentDidMount(): void {
        const { competitionType } = this.props;
        if (competitionType === "CRYSTAL") {
            this.props.history.replace("/profile/crystal");
        }
        else if (competitionType === "ISOTERM") {
            this.props.history.replace("/profile/isoterm");
        }
        this.props.getQuestionDataList();
    }

    componentDidUpdate(prevProps: any, prevState: any): void {
        const { editMessageResponse, deleteMessageResponse, createMessageResponse, questionDetailResponse } = this.props;
        const { showModal, showEdit, id } = this.state;
        if (prevProps.editMessageResponse !== editMessageResponse && editMessageResponse) {
            this.toggleModal();
        }
        if ((prevProps.deleteMessageResponse !== deleteMessageResponse && deleteMessageResponse) ||
            (prevProps.createMessageResponse !== createMessageResponse && createMessageResponse) ||
            (prevState.showModal !== showModal && !showModal)) {
            this.props.getQuestionDataList();
        }
        if (prevState.showEdit !== showEdit && showEdit.id !== id && showEdit && id) {
            this.props.getQuestionDetailData(id);
        }
        if (prevProps.questionDetailResponse !== questionDetailResponse && questionDetailResponse) {
            this.setState({
                ...this.state,
                number: questionDetailResponse.number,
                type: questionDetailResponse.type,
                question: questionDetailResponse.question,
                answers: questionDetailResponse.answers
            });
        }
    }

    private toggleModal(): void {
        this.setState({
            showModal: !this.state.showModal
        });
    }

    private toggleEdit(id: string = ""): void {
        this.setState({
            showEdit: !this.state.showEdit,
            id: id
        });
    }

    private toggleDelete(id: string = ""): void {
        this.setState({
            showDelete: !this.state.showDelete,
            id: id
        });
    }

    private toggleCreate(): void {
        this.setState({
            showCreate: !this.state.showCreate,
            id: ""
        });
    }

    private toggleSidebar(): void {
        this.setState({
            shrink: !this.state.shrink
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

    private validateInput(input: any, type: string): string {
        if (type === "number") {
            if (!input || (isNaN(input) && isNaN(Number(input)))) {
                return "Please enter a number";
            }
        }
        else if (type === "type") {
            if (!input) {
                return "Please choose question type";
            }
        }
        else if (type === "question") {
            if (!input) {
                return "Please enter a question";
            }
        }
        return "";
    }

    private validateForm(): boolean {
        const {
            numberError,
            typeError,
            questionError
        } = this.state;
        if (numberError) {
            document.getElementsByName("number")[0].focus();
            return false;
        }
        else if (typeError) {
            document.getElementsByName("type")[0].focus();
            return false;
        }
        else if (questionError) {
            document.getElementsByName("question")[0].focus();
            return false;
        }
        return true;
    }

    private handleEditQuestion(): void {
        const { id, number, type, question, answers } = this.state;
        let formData = {
            id,
            number,
            type,
            question,
            answers
        };
        this.props.editQuestion(formData);
    }

    private handleDeleteQuestion(): void {
        const { id } = this.state;
        this.props.deleteQuestion(id);
    }

    private submitCreateQuestion(): void {
        const { number, type, question, answers } = this.state;

        this.props.createQuestion({
            number,
            type,
            question,
            answers
        });
    }

    render() {
        const { questionsDataResponse } = this.props;
        const {
            showModal,
            showEdit,
            showDelete,
            showCreate,
            shrink,
            number,
            type,
            question,
            answers,
            id
        } = this.state;
        return (
            <QuestionDashboardComponent
                {...this.props}
                questionsDataResponse={questionsDataResponse}
                showModal={showModal}
                showEdit={showEdit}
                showDelete={showDelete}
                showCreate={showCreate}
                shrink={shrink}
                number={number}
                type={type}
                question={question}
                answers={answers}
                id={id}
                toggleModal={this.toggleModal}
                toggleEdit={this.toggleEdit}
                toggleDelete={this.toggleDelete}
                toggleCreate={this.toggleCreate}
                toggleSidebar={this.toggleSidebar}
                handleChange={this.handleChange}
                handleEditQuestion={this.handleEditQuestion}
                handleDeleteQuestion={this.handleDeleteQuestion}
                submitCreateQuestion={this.submitCreateQuestion}
            />
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        questionsDataResponse: questionsDataSelector(state),
        editMessageResponse: editMessageSelector(state),
        deleteMessageResponse: deleteMessageSelector(state),
        createMessageResponse: createMessageSelector(state),
        questionDetailResponse: questionDetailSelector(state)
    };
};


function mapDispatchToProps(dispatch: any) {
    return {
        getQuestionDataList: () => dispatch(getQuestionsData()),
        editQuestion: (params: any) => dispatch(editQuestionData(params)),
        deleteQuestion: (params: any) => dispatch(deleteQuestionData(params)),
        createQuestion: (params: any) => dispatch(createQuestion(params)),
        getQuestionDetailData: (params: any) => dispatch(getQuestionDetail(params))
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionDashboardContainer);