import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
    contestantsDataSelector,
    verifyMessageSelector,
    deleteMessageSelector,
    downloadMessageSelector,
    downloadAllMessageSelector
} from "./selector";
import {
    getContestantsData,
    verifyContestantData,
    deleteContestantData,
    downloadContestantData,
    downloadAllContestantData
} from "./action";

const ContestantDashboardComponent = lazy(() => import("../../components/ContestantDashboard"));

export class ContestantDashboardContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
        contestantsDataResponse: PropTypes.any,
        verifyMessageResponse: PropTypes.any,
        deleteMessageResponse: PropTypes.any,
        downloadMessageResponse: PropTypes.any,
        downloadAllMessageResponse: PropTypes.any
    };

    constructor(props: any) {
        super(props);
        this.state = {
            showModal: false,
            shrink: false,
            keyword: ""
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleVerifyContestant = this.handleVerifyContestant.bind(this);
        this.handleDeleteContestant = this.handleDeleteContestant.bind(this);
        this.handleDownloadContestant = this.handleDownloadContestant.bind(this);
        this.handleDownloadAllContestant = this.handleDownloadAllContestant.bind(this);
        this.handleSearchContestant = this.handleSearchContestant.bind(this);
    }

    componentDidMount(): void {
        const { competitionType } = this.props;
        if (competitionType === "CRYSTAL") {
            this.props.history.replace("/profile/crystal");
        }
        else if (competitionType === "ISOTERM") {
            this.props.history.replace("/profile/isoterm");
        }
        this.props.getContestantDataList(null);
    }

    componentDidUpdate(prevProps: any): void {
        const { verifyMessageResponse, deleteMessageResponse } = this.props;
        const { keyword } = this.state;
        if (prevProps.verifyMessageResponse !== verifyMessageResponse && verifyMessageResponse ||
            prevProps.deleteMessageResponse !== deleteMessageResponse && deleteMessageResponse) {
            this.props.getContestantDataList(keyword);
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

    private handleChange(e: any): void {
        const { name, value } = e.target;
        this.setState({
            [name]: value
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

    private handleDownloadAllContestant(): void {
        this.props.downloadAllContestant();
    }

    private handleSearchContestant(): void {
        const { keyword } = this.state;
        this.props.getContestantDataList(keyword);
    }

    render() {
        const { contestantsDataResponse } = this.props;
        const { showModal, shrink, keyword } = this.state;
        return (
            <ContestantDashboardComponent
                {...this.props}
                contestantsDataResponse={contestantsDataResponse}
                showModal={showModal}
                shrink={shrink}
                keyword={keyword}
                toggleModal={this.toggleModal}
                toggleSidebar={this.toggleSidebar}
                handleChange={this.handleChange}
                handleVerifyContestant={this.handleVerifyContestant}
                handleDeleteContestant={this.handleDeleteContestant}
                handleDownloadContestant={this.handleDownloadContestant}
                handleDownloadAllContestant={this.handleDownloadAllContestant}
                handleSearchContestant={this.handleSearchContestant}
            />
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        contestantsDataResponse: contestantsDataSelector(state),
        verifyMessageResponse: verifyMessageSelector(state),
        deleteMessageResponse: deleteMessageSelector(state),
        downloadMessageResponse: downloadMessageSelector(state),
        downloadAllMessageResponse: downloadAllMessageSelector(state)
    };
};

function mapDispatchToProps(dispatch: any) {
    return {
        getContestantDataList: (params: any) => dispatch(getContestantsData(params)),
        verifyContestant: (params: any) => dispatch(verifyContestantData(params)),
        deleteContestant: (params: any) => dispatch(deleteContestantData(params)),
        downloadContestant: (params: any) => dispatch(downloadContestantData(params)),
        downloadAllContestant: () => dispatch(downloadAllContestantData()),
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContestantDashboardContainer);