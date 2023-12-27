import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
    cbtInfoSelector
} from "./selector";
import {
    getCBTInfo
} from "./action";

const CBTDashboardComponent = lazy(() => import("../../components/CBTDashboard"));

export class CBTDashboardContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
        cbtInfoResponse: PropTypes.any,
    };

    constructor(props: any) {
        super(props);
        this.state = {
            shrink: false
        };

        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    componentDidMount(): void {
        this.props.getCBTInfoData();
    }

    private toggleSidebar(): void {
        this.setState({
            shrink: !this.state.shrink
        });
    }

    render() {
        const { cbtInfoResponse } = this.props;
        const { shrink } = this.state;
        return (
            <CBTDashboardComponent
                {...this.props}
                cbtInfoResponse={cbtInfoResponse}
                shrink={shrink}
                toggleSidebar={this.toggleSidebar}
            />
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        cbtInfoResponse: cbtInfoSelector(state)
    };
};

function mapDispatchToProps(dispatch: any) {
    return {
        getCBTInfoData: () => dispatch(getCBTInfo())
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CBTDashboardContainer);