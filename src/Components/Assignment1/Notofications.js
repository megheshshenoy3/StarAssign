import React, { useState } from 'react'
import './Notifications.css'
import NotificationElements from './CommonComponents/NotepadElements'

export default function Notofications() {
    const datalogs = [{
        img: "#FFD9D9",
        type: "Admin",
        description: "Your faculty uploaded the syllabus.",
        time: "3 minutes ago"
    }, {
        img: "#D9FFE1",
        type: "Student",
        description: "Your faculty uploaded the syllabus.",
        time: "3 minutes ago"
    },
    {
        img: "#BA99FF",
        type: "Teacher",
        description: "Your faculty uploaded the syllabus.",
        time: "3 minutes ago"
    },
    {
        img: "#F5E764",
        type: "Admin",
        description: "Your faculty uploaded the syllabus.",
        time: "3 minutes ago"
    },
    {
        img: "#F5E764",
        type: "Admin",
        description: "Your faculty uploaded the syllabus.",
        time: "3 minutes ago"
    },
    {
        img: "#F5E764",
        type: "Admin",
        description: "Your faculty uploaded the syllabus.",
        time: "3 minutes ago"
    }]
    const [active, setactive] = useState("Notification")
    const onselectionchange = (type) => {
        setactive(type)
    }
    return (
        <div className="parent_notifications">
            <div className="parent_icons_notifications">
                <div onClick={() => { onselectionchange("Notification") }} className={`icons_notifications ${active === "Notification" ? "active_slice_notepadelements" : ""}`}>
                    <span>Notifications</span>
                </div>
                <div onClick={() => { onselectionchange("Events") }} className={`icons_notifications ${active === "Events" ? "active_slice_notepadelements" : ""}`}>
                    <span>Events</span>
                </div>
            </div>
            <br />
            <div className="displaylogs_notepadelements">

                {datalogs.map((ele, i) => {
                    return (<NotificationElements img={ele.img} type={ele.type} last={i === datalogs.length - 1} description={ele.description} time={ele.time} />)
                })

                }
                <center>
                    <div className="view_button_notepadcomp">View All</div>
                </center>
            </div>
        </div>
    )
}
