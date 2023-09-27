import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";

const CrystalProfileComponent = lazy(() => import("../../components/CrystalProfile"));

export class CrystalProfileContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
    };

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <CrystalProfileComponent />
        )
    }
}
  
export default CrystalProfileContainer;