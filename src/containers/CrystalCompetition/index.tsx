import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";

const CrystalCompetitionComponent = lazy(() => import("../../components/CrystalCompetition"));

export class CrystalCompetitionContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
    };

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <CrystalCompetitionComponent {...this.props} />
        )
    }
}
  
export default CrystalCompetitionContainer;