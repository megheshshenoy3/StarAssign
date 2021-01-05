import React from 'react'
import { Row, Col } from "react-bootstrap";
import ChartImg from '../../images/Chart.png'
import DataPoints from '../../images/Hover Elements.png'
import './SalesReport.css'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SalesBlock from './CommonComponents/SalesReportDetail'
export default function SalesReport() {
    return (
        <div>
            <div>
                <div className="searchbox_salesreport">
                    <SearchOutlinedIcon style={{ opacity: "0.3" }} />
                    <input className="searchboxinput_salesreport" disabled type="text" />
                </div>
            </div>
            <Row style={{ width: "100%" }} className="row_parent_salesreport">
                <Col sm={9}>
                    <div className="parent_salesreport">
                        <span className="text_salesreport">Sales Report</span><span className="text_fade_salesreport">&nbsp;September 2020</span>
                        <div className="graph_salesreport">
                            <img className="graph_salesreport" src={ChartImg} />
                            <div className="data_points_salesreport">
                                <img className="datapointsimg_salesreport" src={DataPoints} />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col sm={3}>
                    <div className="detailsblock_salesreport">
                        <Col sm={12}> <span className="date_salesreport">17&nbsp;Sep</span></Col>

                        <Col sm={12}>
                            <SalesBlock backgroundcolor={"#FFE700"} notation={"$"} digit={"1,204.33"} heading={"Revenue"} />
                        </Col>
                        <Col sm={12}>
                            <SalesBlock backgroundcolor={"#1FFD77"} digit={"33"} heading={"Quotations"} />
                        </Col>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
