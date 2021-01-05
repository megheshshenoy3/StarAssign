import React from 'react'
import './NotepadElements.css'
export default function NotepadElements(props) {
    return (
            <div style={props.last?{border:"none"}:{}}  className="each_notification_notepadelements">
                <div style={{background:props.img}} className="image_notepadelements">

                </div>
                <div className="each_content_notepadelements">
                    <div>
                       <span className="typetext_notepadelements">{props.type}</span> 
                    </div>
                    <div>
                        <span className="description_notepadelements">{props.description} </span>
                    </div>
                    <div>
                        <span className="time_notepadelements">{props.time}</span>
                    </div>
                </div>
            </div>
    )
}
