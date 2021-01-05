import React from 'react'
import './Comments.css'
import ICON from '../../images/Rectangle.svg'
import { Row, Col } from 'react-bootstrap'
export default function Comments(props) {
    return (
        <Row>
            <Col sm={8} className="comment_header_comments">
                <div className="comment_child_comments">
                    <div>
                        <img src={ICON} />
                    </div>
                    <div className="message_header_comments">
                        <div className="commtypes_comments">
                            <div className="postby_comments">
                                {props.username}
                            </div>
                            <div className="space_comments">
                            </div>
                            <div className="post_content_comments">
                                {props.time}
                            </div>
                        </div>
                        <div className="post_comments">
                            {props.content}
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    )
}
