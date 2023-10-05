import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";

const ContestantDashboardComponent = lazy(() => import("../../components/ContestantDashboard"));

export class ContestantDashboardContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
    };

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <ContestantDashboardComponent {...this.props} />
        )
    }
}
  
export default ContestantDashboardContainer;