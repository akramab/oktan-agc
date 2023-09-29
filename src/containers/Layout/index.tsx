import { lazy, PureComponent, Suspense } from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { loadingSelector } from "./selector";
import { getLoaderState } from "./action";
import LoadingIndicator from "../../components/Loading";
import { getAuthToken, getAuthType } from "../../utils/general";

const ComingSoonContainer = lazy(() => import("../ComingSoon"));
const RegisterContainer = lazy(() => import("../Register"));
const LoginContainer = lazy(() => import("../Login"));
const HomeContainer = lazy(() => import("../Home"));
const CrystalCompetitionContainer = lazy(() => import("../CrystalCompetition"));
const IsotermCompetitionContainer = lazy(() => import("../IsotermCompetition"));
const CrystalProfileContainer = lazy(() => import("../CrystalProfile"));
const IsotermProfileContainer = lazy(() => import("../IsotermProfile"));

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
                            exact path={"/"}
                            render={(props: any) => {
                            return <HomeContainer {...this.props} {...props} />;
                            }}
                        />
                        <Route
                            path={"/register"}
                            render={(props: any) => {
                            return <RegisterContainer {...this.props} {...props} />;
                            }}
                        />
                        <Route
                            path={"/login"}
                            render={(props: any) => {
                            return <LoginContainer {...this.props} {...props} />;
                            }}
                        />
                        <Route
                            exact path={"/competition/crystal"}
                            render={(props: any) => {
                            return <CrystalCompetitionContainer {...this.props} {...props} />;
                            }}
                        />
                        <Route
                            exact path={"/competition/isoterm"}
                            render={(props: any) => {
                            return <IsotermCompetitionContainer {...this.props} {...props} />;
                            }}
                        />
                        <Route
                            exact path={"/profile/crystal"}
                            render={(props: any) => {
                            return <CrystalProfileContainer {...this.props} {...props} />;
                            }}
                        />
                        <Route
                            exact path={"/profile/isoterm"}
                            render={(props: any) => {
                            return <IsotermProfileContainer {...this.props} {...props} />;
                            }}
                        />
                        <Route
                            path={"/*"}
                            render={(props: any) => {
                            return <ComingSoonContainer {...this.props} {...props} />;
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