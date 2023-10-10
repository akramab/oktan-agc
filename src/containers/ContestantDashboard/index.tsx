import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
    contestantsDataSelector,
    verifyMessageSelector,
    deleteMessageSelector,
    downloadMessageSelector
} from "./selector";
import {
    getContestantsData,
    verifyContestantData,
    deleteContestantData,
    downloadContestantData
} from "./action";

const ContestantDashboardComponent = lazy(() => import("../../components/ContestantDashboard"));

export class ContestantDashboardContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
        contestantsDataResponse: PropTypes.any,
        verifyMessageResponse: PropTypes.any,
        deleteMessageResponse: PropTypes.any,
        downloadMessageResponse: PropTypes.any
    };

    constructor(props: any) {
        super(props);
        this.state = {
            showModal: false,
            shrink: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.handleVerifyContestant = this.handleVerifyContestant.bind(this);
        this.handleDeleteContestant = this.handleDeleteContestant.bind(this);
        this.handleDownloadContestant = this.handleDownloadContestant.bind(this);
    }

    componentDidMount(): void {
        const { competitionType } = this.props;
        if (competitionType === "CRYSTAL") {
            this.props.history.replace("/profile/crystal");
        }
        else if (competitionType === "ISOTERM") {
            this.props.history.replace("/profile/isoterm");
        }
        this.props.getContestantDataList();
    }

    componentDidUpdate(prevProps: any): void {
        const { verifyMessageResponse, deleteMessageResponse } = this.props;
        if (prevProps.verifyMessageResponse !== verifyMessageResponse && verifyMessageResponse) {
            this.toggleModal();
        }
        if (prevProps.deleteMessageResponse !== deleteMessageResponse && deleteMessageResponse) {
            this.props.getContestantDataList();
        }
    }

    private toggleModal(): void {
        this.setState({
            showModal: !this.state.showModal
        });
    }

    private toggleSidebar(): void {
        this.setState({
            shrink: !this.state.shrink
        });
    }

    private handleVerifyContestant(id: any): void {
        this.props.verifyContestant(id);
    }

    private handleDeleteContestant(id: any): void {
        this.props.deleteContestant(id);
    }

    private handleDownloadContestant(id: any): void {
        this.props.downloadContestant(id);
    }

    render() {
        const { contestantsDataResponse } = this.props;
        const { showModal, shrink } = this.state;
        return (
            <ContestantDashboardComponent
                {...this.props}
                contestantsDataResponse={contestantsDataResponse}
                showModal={showModal}
                shrink={shrink}
                toggleModal={this.toggleModal}
                toggleSidebar={this.toggleSidebar}
                handleVerifyContestant={this.handleVerifyContestant}
                handleDeleteContestant={this.handleDeleteContestant}
                handleDownloadContestant={this.handleDownloadContestant}
            />
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        contestantsDataResponse: contestantsDataSelector(state),
        verifyMessageResponse: verifyMessageSelector(state),
        deleteMessageResponse: deleteMessageSelector(state),
        downloadMessageResponse: downloadMessageSelector(state)
    };
};

function mapDispatchToProps(dispatch: any) {
    return {
        getContestantDataList: () => dispatch(getContestantsData()),
        verifyContestant: (params: any) => dispatch(verifyContestantData(params)),
        deleteContestant: (params: any) => dispatch(deleteContestantData(params)),
        downloadContestant: (params: any) => dispatch(downloadContestantData(params)),
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContestantDashboardContainer);