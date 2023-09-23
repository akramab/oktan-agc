import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";

const HomeComponent = lazy(() => import("../../components/Home"));

export class HomeContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
    };

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <HomeComponent />
        )
    }
}
  
export default HomeContainer;