import React, { useState, useEffect } from 'react'
import './NotepadAndWidgets.css'
import Collapse from '@material-ui/core/Collapse';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import { Row, Col } from 'react-bootstrap'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import Pagination from '@material-ui/lab/Pagination';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Modal } from 'react-bootstrap';
import Chart from 'chart.js'
// import { Line } from '@reactchartjs/react-chart.js'
export default function NotepadAndWidgets() {
    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
    }));
    const classes = useStyles()
    const [selectedid, setId] = useState(0);
    const [newheader, setnewheader] = useState("")
    const [newdescription, setnewdescription] = useState("")
    const [notepadelelements, setnotepadelelements] = useState([{
        id: "101",
        header: "USED MATERAIL UI",
        description: "ADDING NEW ELEMENTS",
    },
    {
        id: "102",
        header: "GOOD IN REACTJs",
        description: "ADDING NEW ELEMENTS"
    },
    {
        id: "103",
        header: "PLUS NODEJS",
        description: "ADDING NEW ELEMENTS"
    },
    {
        id: "104",
        header: "KNOWLEDGE ON HEROKU",
        description: "ADDING NEW ELEMENTS"
    },
    {
        id: "105",
        header: "KNOWLEDGE ON HEROKU",
        description: "ADDING NEW ELEMENTS"
    },
    ]);
    const [totalpages, settotalpages] = useState(0)
    const [rowsPerPage, setrowsPerPage] = useState(4)
    const [currentpage, setcurrentpage] = useState(1)
    const [actualcurrentpage, setactualcurrentpage] = useState(0)
    const [chartsteppedgreen, setchartsteppedgreen] = useState()
    const [modaldisplay, setmodaldisplay] = useState(false)
    const [oldheader, changeheader] = useState("")
    const [oldescription, changedescription] = useState()

    useEffect(() => {
        settotalpages(Math.ceil(notepadelelements.length / rowsPerPage))
        console.log(Math.ceil(notepadelelements.length / rowsPerPage))
    }, [notepadelelements, totalpages])
    useEffect(() => {
        var speedCanvas = document.getElementById("speedChart");

        Chart.defaults.global.defaultFontFamily = "Lato";
        Chart.defaults.global.defaultFontSize = 18;
        var data = {
            labels: ["0", "100", "200", "300", "400", "500"],
            backgroundColor: "",
            datasets: [
                {
                    data: [100, 200, 150, 350, 200, 275],
                    fill: true,
                    backgroundColor: 'rgba(0, 255, 17, 0.19)',
                    borderColor: 'rgba(46, 178, 75, 1)',
                    pointBorderColor: 'rgba(46, 178, 75, 0)',
                    pointBorderWidth: '0px',
                    pointHoverRadius: 0,
                    pointHitRadius: 0,
                    pointRadius: 0,
                }]
        };

        var options = {
            responsive: true,
            maintainAspectRatio: false,
            responsiveAnimationDuration: 1000,
            legend: {
                display: false
            },
            layout: {
                margin: {
                    left: -20,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            scales: {
                xAxes: [{
                    type: 'category',
                    labels: ['27', '26', '1', '2', '3', '4'],
                    scaleLabel: {
                        display: true,
                        labelString: 'Febuary March',
                        fontSize: 8,
                    },
                    gridLines: {
                        color: "transparent",
                        zeroLineColor: 'transparent'
                    },
                    ticks: {
                        fontSize: 8,
                    }
                }

                ],
                yAxes: [{
                    scaleFontSize: 10,
                    gridLines: {
                        zeroLineColor: 'rgba(0,0,0,0)',
                        zeroLineWidth: 0.0,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: true
                    },
                    ticks: {
                        max: 500,
                        min: 0,
                        stepSize: 100,
                        fontSize: 8
                    },

                }]
            }

        };

        var myLineChart = new Chart(speedCanvas, {
            type: 'line',
            data: data,
            options: options
        });
    }, [])
    useEffect(() => {
        var thismonth = document.getElementById("thismonth");
        Chart.defaults.global.defaultFontFamily = "Lato";
        Chart.defaults.global.defaultFontSize = 18;
        let data = {
            labels: ["0", "100", "200", "300", "400", "500", "600"],
            backgroundColor: "",
            datasets: [
                {
                    data: [0, 100, 50, 133, 60, 150, 80, 160],
                    fill: true,
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 255, 1)',
                    pointBorderColor: 'rgba(46, 178, 75, 0)',
                    pointBorderWidth: '3px',
                    pointHoverRadius: 0,
                    pointHitRadius: 0,
                    pointRadius: 0,
                }]
        };

        let options = {
            responsive: true,
            maintainAspectRatio: false,
            responsiveAnimationDuration: 1000,
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    type: 'category',
                    labels: ['27', '26', '1', '2', '3', '4'],
                    scaleLabel: {
                        display: false,
                    },
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        display: false
                    }
                }

                ],
                yAxes: [{
                    scaleFontSize: 10,
                    gridLines: {
                        zeroLineColor: 'rgba(0,0,0,0)',
                        zeroLineWidth: 0.0,
                        drawBorder: false,
                        display: false
                    },
                    scaleLabel: {
                        display: false
                    },
                    ticks: {
                        display: false
                    },

                }]
            }

        };

        var thislinemonthchart = new Chart(thismonth, {
            type: 'line',
            data: data,
            options: options
        });
    }, [])
    useEffect(() => {
        var lastmonth = document.getElementById("lastmonth");
        Chart.defaults.global.defaultFontFamily = "Lato";
        Chart.defaults.global.defaultFontSize = 0;
        let data = {
            labels: ["0", "100", "200", "300", "400", "500"],
            backgroundColor: "",
            datasets: [
                {
                    data: [100, 40, 100, 90, 150, 110],
                    yAxisID: 'left-y-axis',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 255, 1)',
                    pointBorderColor: 'rgba(46, 178, 75, 0)',
                    pointBorderWidth: '3px',
                    pointHoverRadius: 0,
                    pointHitRadius: 0,
                    pointRadius: 0,
                }, {
                    data: [30, 0, 80, 70, 130, 100],
                    yAxisID: 'right-y-axis',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(211, 0, 255, 1)',
                    pointBorderColor: 'rgba(46, 178, 75, 0)',
                    pointBorderWidth: '3px',
                    pointHoverRadius: 0,
                    pointHitRadius: 0,
                    pointRadius: 0,
                }]
        };

        let options = {
            responsive: true,
            maintainAspectRatio: false,
            responsiveAnimationDuration: 1000,
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    type: 'category',
                    scaleLabel: {
                        display: false
                    },
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        display: false
                    }
                }

                ],
                yAxes: [
                    {
                        id: 'left-y-axis',
                        type: 'linear',
                        position: 'left'
                    }, {
                        id: 'right-y-axis',
                        type: 'linear',
                        position: 'right'
                    }, {
                        gridLines: {
                            display: false,
                        },
                        scaleLabel: {
                            display: false
                        },
                        ticks: {
                            display: false
                        },

                    }]
            }

        };

        var lastmonth = new Chart(lastmonth, {
            type: 'line',
            data: data,
            options: options
        });
    }, [])
    const onChangenewheader = (event) => {
        if (event.target.value.length > 2) {
            setnewheader(event.target.value)
        }
    }
    const onChangenewdescription = (event) => {
        setnewdescription(event.target.value)
    }
    const handleClick = (id) => {
        console.log(id)
        if (id === selectedid) {
            setId(" ")
        }
        else {
            setId(id)
        }
        console.log(selectedid)
    }
    const handlemodalDisplay = (e) => {
        setmodaldisplay(true)
    }
    const onheaderChange = (event, i) => {
        const temp = [...notepadelelements]
        if (event.target.value.length > 0) {
            temp[i].header = event.target.value
            setnotepadelelements(temp)
        }
    }
    const onDescriptionChange = (event, i) => {
        const temp = [...notepadelelements]
        temp[i].description = event.target.value
        setnotepadelelements(temp)
    }
    const handlePageChange = (event, page) => {
        console.log(page)
        setcurrentpage(page)
        setactualcurrentpage(page - 1)
    }
    const onNewRecordSubmit = () => {
        let temp = [...notepadelelements]
        temp.push({
            id: Math.floor(Math.random() * (1111111111 - 10000000000 + 1) + 10000000000),
            header: newheader,
            description: newdescription
        })
        setnotepadelelements(temp)
        setmodaldisplay(false)
    }
    return (
        <div>
            <Row>
                <Col sm={4}>
                    <div className="notepad_main_notepadcomp">
                        <p className="notepadtext_notepadcomp">Notepad</p>
                        <div className="notes_notepadcomp">
                            <div >
                                <List
                                    component="nav"
                                    aria-labelledby="nested-list-subheader"
                                    className={classes.root}
                                >
                                    {
                                        notepadelelements.slice(actualcurrentpage * rowsPerPage, actualcurrentpage * rowsPerPage + rowsPerPage).map((ele, i) => {
                                            return (
                                                <React.Fragment key={ele.id} >
                                                    <ListItem key={ele.id} onClick={() => { handleClick(ele.id) }} button>
                                                        <ListItemText className="text_header_notepadcomp" key={ele.id} primary={ele.header} />
                                                        {selectedid === ele.id ? <ExpandLess /> : <ExpandMore />}
                                                    </ListItem>
                                                    <Collapse key={ele.id + ele.id} in={selectedid === ele.id} timeout="auto" unmountOnExit>
                                                        <List key={ele.id + ele.id} component="div" disablePadding>
                                                            <ListItem key={ele.id + ele.id} className={classes.nested}>
                                                                <div>
                                                                    <div>
                                                                        <TextField id="standard-basic" fullWidth value={ele.header} onChange={(event) => { onheaderChange(event, i) }} label="Header" />
                                                                    </div>
                                                                    <div>
                                                                        <TextField id="standard-basic" fullWidth value={ele.description} onChange={(event) => { onDescriptionChange(event, i) }} label="Description" />
                                                                    </div>
                                                                </div>

                                                            </ListItem>
                                                        </List>
                                                    </Collapse>
                                                </React.Fragment>)
                                        })
                                    }
                                </List>
                            </div>
                            <div className="addnew_notepadcomp" onClick={handlemodalDisplay}>
                                <AddCircleIcon style={{ color: "#FF6C40" }} fontSize="large" />
                            </div>
                        </div>
                        <Pagination count={totalpages} page={parseInt(currentpage)} color="secondary" onChange={handlePageChange} />
                    </div>
                </Col>
                <Col sm={4}>
                    <Col className="febmarchgraphcolumn_notepadcomp">
                        <center>
                            <div className="febmarchgraph_notepadcomp">
                                <canvas style={{ transform: "translateX(0px)", paddingTop: "10px", width: "227px!important", height: "158px!important" }} id="speedChart"></canvas>
                            </div>
                        </center>

                    </Col>
                    <br />
                    <Col className="inbox_col_notepadcomp">
                        <div className="inbox_notepadcomp">
                            <div>
                                <span className="inbox_text_notepadcomp">INBOX</span>
                            </div>
                            <div>
                                <span className="inbox_number_notepadcomp">23</span>
                            </div>
                        </div>
                    </Col>
                </Col>
                <Col sm={4}>
                    <Col>
                        <div className="thismonth_parent_notepadcomp">
                            <div className="monthheader_notepadcomp">
                                This&nbsp;Month
                        </div>
                            <div className="thismonth_child_notepadcomp">
                                <div>
                                    <span>+7.8%</span>
                                </div>
                                <div className="thismonth_graph_notepadcomp">
                                    <canvas style={{ position: "relative", transform: "translateX(-21px)", paddingTop: "10px", width: "71", height: "33" }} id="thismonth" width="71" height="33"></canvas>
                                </div>
                            </div>
                        </div>

                    </Col>
                    <br />
                    <Col >
                        <div className="lastmonth_parent_notepadcomp">
                            <div className="monthheader_notepadcomp">
                                Last&nbsp;Month
                        </div>
                            <div className="lastmonth_child_notepadcomp">
                                <div>
                                    <span>+67.4%</span>
                                </div>
                                <div className="lastmonth_graph_notepadcomp">
                                    <canvas style={{ transform: "translateX(-21px)", paddingTop: "10px" }} id="lastmonth" height="40" width="200" ></canvas>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Col>
            </Row>
            <Modal show={modaldisplay} onHide={() => { setmodaldisplay(false) }}>
                <Modal.Header closeButton>
                    <Modal.Title><span>ADD NEW NOTE</span></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div >
                        <div className="modal_content_notepadcomp" >
                            <div className="modal_headercontent_notepadcomp">
                                <span>Note Header </span>
                            </div>
                            <div className="modal_headerinput_notepadcomp">
                                <TextField value={newheader} id="standard-basic" onChange={onChangenewheader} placeholder="Enter Header" />
                            </div>
                        </div>
                        <br />
                        <div className="modal_content_notepadcomp">
                            <span>Note Description</span>
                            <span className="modal_headermultiinput_notepadcomp">
                                <TextField
                                    id="outlined-multiline-static"
                                    multiline
                                    rows={5}
                                    onChange={onChangenewdescription}
                                    value={newdescription}
                                    placeholder="Enter Description"
                                    variant="outlined"
                                />
                            </span>

                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            value={newheader}
                            startIcon={<DeleteIcon />}
                            style={{ marginLeft: "-3px" }}
                            onClick={() => { setmodaldisplay(false) }}
                        >
                            Delete
                                    </Button>
                    </div>
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={(newdescription.length === 0 && newheader.length === 0)}
                            onClick={onNewRecordSubmit}
                            value={newdescription}
                            className={classes.button}
                            startIcon={<SaveIcon />}
                        >
                            Save
                                    </Button>
                    </div>

                </Modal.Footer>
            </Modal>
        </div>
    )
}
