import { lazy } from "react";
import { Row, Col } from "react-bootstrap";

const Topbar = lazy(() => import("../../components/General/Topbar"));
const Sidebar = lazy(() => import("../General/Sidebar"));
const CustomButton = lazy(() => import("../General/CustomButton"));

const CBTDashboardComponent = (props: any) => {
    return (
        <>
            <Topbar title="" onBarsClick={props?.toggleSidebar} />
            <Sidebar isCrystal verified={props?.verified} shrink={props?.shrink} />
            <div className={`side-content bg-gray p-4 ${props?.shrink && "shrink"}`}>
                <p>CBT INFO</p>
            </div>
        </>
    )
}

export default CBTDashboardComponent;