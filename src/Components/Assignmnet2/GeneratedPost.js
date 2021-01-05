import React from 'react'
import './GeneratedPost.css'
import ICON from '../../images/Rectangle.svg'
import { Row, Col } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';
import TelegramIcon from '@material-ui/icons/Telegram';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux'
import { UpdatepageState } from '../../Actions'
import moment from 'moment'
export default function GeneratedPost(props) {
    const [value, setValue] = React.useState("")
    const data = useSelector(state => state.posts)
    const dispatch = useDispatch()
    const onChange = (event) => {
        setValue(event.target.value)
        // recordindex

    }
    const PushComments = () => {
        const record = {
            commentid: "id" + Math.floor(Math.random() * (11111111 - 100000000 + 1) + 100000000),
            commentby: "UserName",
            commentorimg: ICON,
            time: moment().format('MMMM Do YYYY, h:mm a'),
            commentcontent: value
        }
        let tempdata = [...data]
        let commentsby = tempdata[props.recordindex].commentsthreads
        commentsby.unshift(record)
        dispatch(UpdatepageState(tempdata))
        console.log(tempdata)
        localStorage.setItem("Posts", JSON.stringify(tempdata));

    }
    return (
        <div>
            <Row>
                <Col sm={8} className="posts_parent_generated">
                    <div className="posts_generated">
                        <div>
                            <div>
                                <img src={ICON} />
                            </div>
                        </div>
                        <div className="posts_content_generated">
                            <div className="postheader_generated">
                                <div className="postby_generated">
                                    {props.username}
                                </div>
                                <div className="space_generated">
                                </div>
                                <div className="post_content_generated">
                                    {props.time}
                                </div>
                            </div >
                            <div className="postcontents_generated">{props.content}</div>
                        </div>
                    </div>
                </Col>
                <Col sm={8} className="com_parent_generated">
                    <div className="com_child_generated">
                        <div className="com_img_div_generated">
                            <img className="com_img_generated" src={ICON} />
                        </div>
                        <div className="com_inputdiv_generated">
                            <TextField style={{ width: "100%" }} id="standard-basic" onChange={onChange} placeholder="|Write a comment...." />
                        </div>
                        <div>
                            <Button disabled={value.length === 0} onClick={PushComments} variant="contained" className="send_generated" color="primary">
                                <TelegramIcon style={{ fontSize: "28px", color: "black" }} />
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>

        </div>
    )
}
