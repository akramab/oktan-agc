import { lazy } from "react";
import moment from "moment";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const Topbar = lazy(() => import("../../components/General/Topbar"));
const Sidebar = lazy(() => import("../General/Sidebar"));
const ContestantItem = lazy(() => import("../General/ContestantItem"));
const Searchbar = lazy(() => import("../General/Searchbar"));
const CustomButton = lazy(() => import("../General/CustomButton"));

const ContestantDashboardComponent = (props: any) => {
    const items = [
        {
            category: "CRYSTAL",
            date: moment(),
            verified: false,
            name: {
                team: "Rajawali",
                member: "Nama Peserta"
            },
            institution: {
                name: "ITB",
                instructor: "Nama Dosen"
            }
        },
        {
            category: "CRYSTAL",
            date: moment(),
            name: {
                team: "Rajawali",
                member: "Nama Peserta"
            },
            institution: {
                name: "ITB",
                instructor: "Nama Dosen"
            }
        },
        {
            category: "CRYSTAL",
            date: moment(),
            name: {
                team: "Rajawali",
                member: "Nama Peserta"
            },
            institution: {
                name: "ITB",
                instructor: "Nama Dosen"
            }
        }
    ]
    return (
        <>
            <Topbar title="Data Peserta" />
            <Sidebar isAdmin />
            <div className="side-content bg-gray p-4">
                <Row className="justify-content-between align-items-center my-2">
                    <Col className="p-0">
                        <Searchbar />
                    </Col>
                    <Col className="p-0 text-end">
                        <CustomButton
                            bg="bg-purple-dope"
                            text={<>
                                <FontAwesomeIcon icon={faFilter} className="me-2" />
                                Filter
                            </>}
                        />
                    </Col>
                </Row>
                <Row className="my-4">
                    <Col xs={1}>
                        <p>Kategori</p>
                    </Col>
                    <Col xs={2}>
                        <p>Tanggal Daftar</p>
                    </Col>
                    <Col xs={1}>
                        <p>Nama Tim</p>
                    </Col>
                    <Col xs={2}>
                        <p>Nama Peserta</p>
                    </Col>
                    <Col xs={1}>
                        <p>Instansi</p>
                    </Col>
                    <Col xs={2}>
                        <p>Dosen/Guru</p>
                    </Col>
                    <Col xs={3}>
                        <p>Aksi</p>
                    </Col>
                </Row>
                {items.length !== 0 && items.map((item: any, index: number) => {
                    return (<ContestantItem data={item} key={index}  />)
                })}
                <ContestantItem
                    data={{
                        category: "ISOTERM",
                        date: moment(),
                        verified: true,
                        name: {
                            team: "Rajawali",
                            member: "Nama Peserta"
                        },
                        institution: {
                            name: "ITB",
                            instructor: "Nama Dosen"
                        }
                    }}
                />
            </div>
        </>
    )
}

export default ContestantDashboardComponent;