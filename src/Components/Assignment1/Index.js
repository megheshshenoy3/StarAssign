import React from 'react'
import SalesReport from './SalesReport'
import { Row, Col } from 'react-bootstrap'
import NotepadWidget from './NotepadAndWidgets'
import Notifications from './Notofications';
import './Index.css'
export default function Index() {
    return (
        <div style={{ marginLeft: "19%" }}>
            <Row style={{ width: "100%" }}>
                <Col sm={9} >
                    <Col sm={12}>
                        <SalesReport />
                    </Col>
                    <Col sm={12}>
                        <br />
                        <NotepadWidget />
                    </Col>
                </Col>
                <Col sm={3} className="notification_index" style={{ background: "white" }}>
                    <Notifications />
                </Col>
            </Row>
        </div>
    )
}
