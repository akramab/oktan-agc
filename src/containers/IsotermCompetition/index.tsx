import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";

const IsotermCompetitionComponent = lazy(() => import("../../components/IsotermCompetition"));

export class IsotermCompetitionContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
    };

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <IsotermCompetitionComponent />
        )
    }
}
  
export default IsotermCompetitionContainer;