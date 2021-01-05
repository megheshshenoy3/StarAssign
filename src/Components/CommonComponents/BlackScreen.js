import React from 'react'
import './BlackScreen.css'
export default function BlackScreen(props) {
    return (
        <div onClick={()=>{props.onClickChange()}} className="position_blackscreen">
            
        </div>
    )
}
