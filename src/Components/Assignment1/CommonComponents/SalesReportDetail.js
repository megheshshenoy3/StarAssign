import React from 'react'
import './SalesReportDetail.css'
export default function SalesReportDetail(props) {
    
    return (
        <div className="block_salesreportdetail" style={{backgroundColor:`${props.backgroundcolor}`}}>
            <p>{props.notation?props.notation+props.digit:""+ props.digit }</p>
            <p>{props.heading}</p>
        </div>
    )
}
