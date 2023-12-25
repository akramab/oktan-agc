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
            showDelete: false,
            showCreate: false,
            shrink: false,
            input: {
                number: "",
                type: "",
                question: "",
                answers: [
                    {
                        correct: true,
                        value: ""
                    },
                    {
                        correct: false,
                        value: ""
                    },
                    {
                        correct: false,
                        value: ""
                    },
                    {
                        correct: false,
                        value: ""
                    }
                ]
            },
            id: "",
            keyword: ""
        };

        this.toggleEdit = this.toggleEdit.bind(this);
        this.toggleDelete = this.toggleDelete.bind(this);
        this.toggleCreate = this.toggleCreate.bind(this);
        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.handleKeyword = this.handleKeyword.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
        const { id, showDelete } = this.state;
        if ((prevProps.deleteMessageResponse !== deleteMessageResponse && deleteMessageResponse) ||
            (prevProps.createMessageResponse !== createMessageResponse && createMessageResponse) ||
            (prevProps.editMessageResponse !== editMessageResponse && editMessageResponse)) {
                this.setState({
                    ...this.state,
                    showCreate: false,
                    showDelete: false
                });
            this.props.getQuestionDataList();
        }
        if (prevState.id !== id && id && !showDelete) {
            this.props.getQuestionDetailData(id);
        }
        if (prevProps.questionDetailResponse !== questionDetailResponse && questionDetailResponse) {
            this.setState({
                ...this.state,
                showCreate: true,
                input: {
                    ...this.state.input,
                    number: questionDetailResponse.number,
                    type: questionDetailResponse.type,
                    question: questionDetailResponse.question,
                    answers: questionDetailResponse.answers
                }
            });
        }
    }

    private toggleEdit(id: string = ""): void {
        this.setState({
            ...this.state,
            id: id
        });
    }

    private toggleDelete(id: string = ""): void {
        this.setState({
            ...this.state,
            showDelete: !this.state.showDelete,
            id: id
        });
    }

    private toggleCreate(): void {
        this.setState({
            ...this.state,
            showCreate: !this.state.showCreate,
            id: "",
            input: {
                ...this.state.input,
                number: "",
                type: "",
                question: "",
                answers: [
                    {
                        correct: 1,
                        value: ""
                    },
                    {
                        correct: 0,
                        value: ""
                    },
                    {
                        correct: 0,
                        value: ""
                    },
                    {
                        correct: 0,
                        value: ""
                    }
                ]
            }
        });
    }

    private toggleSidebar(): void {
        this.setState({
            ...this.state,
            shrink: !this.state.shrink
        });
    }

    private handleKeyword(e: any): void {
        const { value } = e.target;
        this.setState({
            ...this.state,
            keyword: value
        });
    }

    private handleChange(e: any, idx: any = null): void {
        const { name, value } = e.target;

        if (name === "answers") {
            let newAnswers = [...this.state.input.answers];
            newAnswers[idx].value = value;
            this.setState({
                ...this.state,
                input: {
                    ...this.state.input,
                    [name]: newAnswers,
                }
            });
        }
        else {
            this.setState({
                ...this.state,
                input: {
                    ...this.state.input,
                    [name]: value,
                }
            });
        }
    }

    private handleEditQuestion(): void {
        const { id } = this.state;
        const { number, type, question, answers } = this.state.input;
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
        const { number, type, question, answers } = this.state.input;
        let submitAnswer = answers;
        if (type === "ESSAY") {
            submitAnswer = null
        }

        this.props.createQuestion({
            number,
            type,
            question,
            submitAnswer
        });
    }

    render() {
        const { questionsDataResponse } = this.props;
        const {
            showDelete,
            showCreate,
            shrink,
            input,
            id,
        } = this.state;
        return (
            <QuestionDashboardComponent
                {...this.props}
                questionsDataResponse={questionsDataResponse}
                showDelete={showDelete}
                showCreate={showCreate}
                shrink={shrink}
                input={input}
                id={id}
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