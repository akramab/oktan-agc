import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
    cbtExamSelector,
    toggleMessageSelector,
    answerMessageSelector,
    submitMessageSelector
} from "./selector";
import {
    getCBTExam,
    toggleFlag,
    addAnswer,
    submitExam
} from "./action";
import moment from "moment";

const CBTExamComponent = lazy(() => import("../../components/CBTExam"));

export class CBTExamContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
        cbtExamResponse: PropTypes.any,
        toggleMessageResponse: PropTypes.any,
        addAnswerResponse: PropTypes.any,
        submitMessageResponse: PropTypes.any,
    };

    constructor(props: any) {
        super(props);
        this.state = {
            isSubmittable: false,
            showModal: false,
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.redirectFinish = this.redirectFinish.bind(this);
        this.checkSubmittable = this.checkSubmittable.bind(this);
        this.handleAnswerChange = this.handleAnswerChange.bind(this);
        this.handleToggleFlag = this.handleToggleFlag.bind(this);
        this.handleAddAnswer = this.handleAddAnswer.bind(this);
        this.handleSubmitExam = this.handleSubmitExam.bind(this);
    }


    componentDidMount(): void {
        this.props.getCBTExamData();
    }

    componentDidUpdate(prevProps: any): void {
        const { cbtExamResponse, submitMessageResponse } = this.props;
        if (prevProps.cbtExamResponse !== cbtExamResponse && cbtExamResponse) {
            let now = moment();
            let start = moment(cbtExamResponse.start_exam);
            let end = moment(cbtExamResponse.end_exam);
            if (now.isBefore(start) || now.isAfter(end)) {
                this.props.history.replace("/cbt");
            }
            this.checkSubmittable();
        }
        if (prevProps.submitMessageResponse !== submitMessageResponse && submitMessageResponse) {
            this.toggleModal();
        }
    }

    private toggleModal(): void {
        this.setState({
            ...this.state,
            showModal: !this.state.showModal
        })
    }

    private redirectFinish(): void {
        this.props.history.replace("/profile/crystal");
    }
    

    private checkSubmittable(): void {
        const { cbtExamResponse } = this.props;
        const { questions } = cbtExamResponse;

        let isSubmittable = true;
        questions.forEach(item => {
            if (!item.current_answer || item.flag) {
                isSubmittable = false;
            }
        });

        this.setState({
            ...this.state,
            isSubmittable: isSubmittable
        })
    }

    private handleAnswerChange(e: any, id: any, cbt_id: any): void {
        const { value } = e.target;
        const payload = {
            cbt_id,
            id,
            current_answer: value
        };
        this.props.triggerAddAnswer(payload);
    }

    private handleToggleFlag(id: any, flag: any): void {
        const { cbtExamResponse } = this.props;
        const { cbt_id } = cbtExamResponse;
        const payload = {
            cbt_id,
            id,
            flag
        };
        this.props.triggerToggleFlag(payload);
    }

    private handleAddAnswer(id: any, current_answer: any): void {
        const { cbtExamResponse } = this.props;
        const { cbt_id } = cbtExamResponse;
        const payload = {
            cbt_id,
            id,
            current_answer
        };
        this.props.triggerAddAnswer(payload);
    }

    private handleSubmitExam(): void {
        const { cbtExamResponse } = this.props;
        const { cbt_id } = cbtExamResponse;
        this.props.triggerSubmitExam({cbt_id});
    }

    render() {
        const { cbtExamResponse } = this.props;
        const { isSubmittable, showModal } = this.state;
        return (
            <CBTExamComponent
                {...this.props}
                cbtExamResponse={cbtExamResponse}
                isSubmittable={isSubmittable}
                showModal={showModal}
                redirectFinish={this.redirectFinish}
                handleAnswerChange={this.handleAnswerChange}
                handleToggleFlag={this.handleToggleFlag}
                handleAddAnswer={this.handleAddAnswer}
                handleSubmitExam={this.handleSubmitExam}
            />
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        cbtExamResponse: cbtExamSelector(state),
        toggleMessageResponse: toggleMessageSelector(state),
        addAnswerResponse: answerMessageSelector(state),
        submitMessageResponse: submitMessageSelector(state)
    };
};

function mapDispatchToProps(dispatch: any) {
    return {
        getCBTExamData: () => dispatch(getCBTExam()),
        triggerToggleFlag: (params: any) => dispatch(toggleFlag(params)),
        triggerAddAnswer: (params: any) => dispatch(addAnswer(params)),
        triggerSubmitExam: (params: any) => dispatch(submitExam(params))
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CBTExamContainer);