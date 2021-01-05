import React from 'react'
import './NewPost.css'
import TextField from '@material-ui/core/TextField';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { Row, Col } from 'react-bootstrap';
import ICON from '../../images/Rectangle.svg'
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GeneratedPost from './GeneratedPost'
import Comments from "./Comments";
import { useDispatch, useSelector } from 'react-redux'
import { UpdatepageState } from '../../Actions'
import moment from 'moment'
export default function NewPost() {
    const [value, setValue] = React.useState("")
    const data = useSelector(state => state.posts)
    const [elements, setelements] = React.useState(<p>Hi</p>)
    const dispatch = useDispatch()
    const [tweets, setTweets] = React.useState(useSelector(state => state.posts));
    React.useEffect(() => {
        let tempele = []
        console.log("LL")
        console.log(data)
        setTweets(data)
        for (let i = 0; i < data.length; i++) {
            tempele.push(<GeneratedPost recordindex={i} id={data[i].id} username={data[i].postby} time={data[i].time} content={data[i].post} />)
            for (let j = 0; j < data[i].commentsthreads.length; j++) {
                tempele.push(<Comments img={data[i].img} username={data[i].commentsthreads[j].commentby} time={data[i].commentsthreads[j].time} content={data[i].commentsthreads[j].commentcontent} />)
            }
        }
        setelements(tempele)
    }, [data])
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const PushNewPost = () => {
        let temp = [...tweets];
        let newpost = {
            tweetid: "id" + Math.floor(Math.random() * (1111111111 - 10000000000 + 1) + 10000000000),
            postby: "Teacher",
            img: ICON,
            time: moment().format('MMMM Do YYYY, h:mm a'),
            post: value,
            commentsthreads: []
        }
        alert("HI")
        temp.unshift(newpost)
        console.log(temp)
        dispatch(UpdatepageState(temp))
        localStorage.setItem("Posts", JSON.stringify(temp));
    }
    return (
        <div >
            <Row >
                <Col sm={8} className="text_input_newpost">
                    <TextField
                        id="standard-multiline-static"
                        multiline
                        className="text_inputtextbox_newpost"
                        rows={4}
                        value={value}
                        onChange={handleChange}
                        placeholder="Share Something with your class...."
                    />
                </Col>
                <Col sm={8} className="optionscol_newpost">
                    <div className="options_newpost">
                        <div className="cancel_option_newpost" onClick={() => { setValue(" ") }}>
                            Cancel
                        </div>
                        <div className="spaceoptions_newpost">
                        </div>
                        <div className="postoptions_newpost">
                            <div className="pin_icon_div_newpost">
                                <AttachFileIcon className="pin_icon_newpost" />
                            </div>
                            <div className="sharediv_newpost">
                                <div>
                                    <Button disabled={value.length === 0} onClick={PushNewPost} size="large" style={{ outline: "none", border: "none", color: "white" }} className="sharebutton_newpost" variant="contained">
                                        Share
                                </Button>
                                </div>
                                <div className="expand_icon_newpost">
                                    <ExpandMoreIcon />
                                </div>

                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            {
                elements
            }
        </div>
    )
}
