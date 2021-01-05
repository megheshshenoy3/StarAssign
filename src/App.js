import logo from './logo.svg';
import './App.css';
import React from 'react'
import Assignment1 from './Components/Assignment1/Index'
import SideMenu from './Components/CommonComponents/Sidebar'
import ICON from './images/Rectangle.svg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useDispatch } from 'react-redux'
import { UpdatepageState } from './Actions'
import Assignment2 from './Components/Assignmnet2/Index'
function App() {
  const dispatch = useDispatch()
  React.useEffect(() => {
    if (!localStorage.getItem("Posts")) {
      dispatch(UpdatepageState(("Posts", [{
        tweetid: "id2303209390",
        postby: "Teacher",
        img: ICON,
        time: "November 29th 2020, 8:58 pm",
        post: '"KORA ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        commentsthreads: [{
          commentid: "id12567883",
          commentby: "Bulbul",
          commentorimg: ICON,
          time: "November 29th 2020, 8:58 pm",
          commentcontent: 'Used Redux and Material UI '
        },
        {
          commentid: "id12569039",
          commentby: "Chulbul",
          commentorimg: ICON,
          time: "November 29th 2020, 8:56 pm",
          commentcontent: 'Used Local Storage and then syncing it with Redux'
        },
        {
          commentid: "id32569039",
          commentby: "PandeyJi",
          commentorimg: ICON,
          time: "November 28th 2020, 8:55 pm",
          commentcontent: '"Jasprit Bumrah ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut '
        }]

      }
      ])))
    }
    else {
      const datafromlocal=JSON.parse(localStorage.getItem("Posts"))
      dispatch(UpdatepageState(datafromlocal))
    }
    
  }, [])
return (
  <div className="App">
    <Router>
      <SideMenu />
      <Switch>
        <Route path="/assignment1">
          <Assignment1 />
        </Route>
        <Route path="/">
          <Assignment2 />
        </Route>
      </Switch>
    </Router>

  </div>
);
}

export default App;
