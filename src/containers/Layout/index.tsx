import { lazy, PureComponent, Suspense } from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { loadingSelector } from "./selector";
import { getLoaderState } from "./action";
import LoadingIndicator from "../../components/Loading";

const RegisterContainer = lazy(() => import("../Register"));

export class LayoutContainer extends PureComponent<any, any> {
    static propTypes = {
        loadingResponse: PropTypes.bool,
        history: PropTypes.any,
    }
    
    constructor(props: any) {
        super(props);
    }

    render() {
        const { loadingResponse } = this.props;
        return (
            <div className="bg-gray" style={{ height: "100vh", overflowX: "hidden" }}>
                <Suspense fallback={<LoadingIndicator show={true}/>}>
                    {loadingResponse ? <LoadingIndicator show={true}/> : null}
                    <Switch>
                        <Route
                            path={"/"}
                            render={(props: any) => {
                            return <RegisterContainer {...this.props} {...props} />;
                            }}
                        />
                    </Switch>
                </Suspense>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        loadingResponse: loadingSelector(state),
    };
};
  
function mapDispatchToProps(dispatch: any) {
    return {
        setLoading: (params: any) => dispatch(getLoaderState(params)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);