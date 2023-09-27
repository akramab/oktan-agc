import { lazy } from "react";
import { Row, Col, Image, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"

const CustomInput = lazy(() => import("../../components/General/CustomInput"));
const Sidebar = lazy(() => import("../../components/General/Sidebar"));
const Topbar = lazy(() => import("../../components/General/Topbar"));
const CustomButton = lazy(() => import("../General/CustomButton"));

const CrystalProfileComponent = (props: any) => {
    return (
        <>
            <Topbar title="Lengkapi Profil Tim" />
            <Sidebar isCrystal/>
            <div className="side-content">
            </div>
        </>
    )
}

export default CrystalProfileComponent;