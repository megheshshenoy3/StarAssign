import React from 'react'
import './Sidebar.css'
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom'
import FolderSpecialTwoToneIcon from '@material-ui/icons/FolderSpecialTwoTone';
import MenuIcon from '@material-ui/icons/Menu';
import BlackScreen from './BlackScreen'
export default function Sidebar() {
    const [activeMenu, setActiveMenu] = React.useState(0)
    const [burgermenu, setburgermenu] = React.useState(false)
    return (
        <React.Fragment>
            <span onClick={() => { setburgermenu(true) }}><MenuIcon className="burgericon_sidemenu" /></span>

            <div className={`parent_sidemenu ${burgermenu ? "transition_sidemenu" : "onclose_sidemenu"}`}>
                <ul>
                    <li>
                        <div className={`each_menuitem_sidemenu ${activeMenu === "Dashboard" ? "active_sidemenu" : ""}`} onClick={() => { setActiveMenu("Dashboard") }}>
                            <div className="icons_parent_sidemenu">
                                <DashboardIcon className="icons_sidemenu" />
                            </div>
                            <div className="item_name_sidemenu">
                                Dashboard
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className={`each_menuitem_sidemenu ${activeMenu === "Lorem" ? "active_sidemenu" : ""}`} onClick={() => { setActiveMenu("Lorem") }}>
                            <div className="icons_parent_sidemenu">
                                <i className="fas fa-graduation-cap icons_sidemenu"></i>

                            </div>
                            <div className="item_name_sidemenu">
                                Lorem
                        </div>
                        </div>
                    </li>
                    <li>

                        <div className={`each_menuitem_sidemenu ${activeMenu === "Ipsum" ? "active_sidemenu" : ""}`} onClick={() => { setActiveMenu("Ipsum") }}>
                            <div className="icons_parent_sidemenu">
                                < SettingsIcon className="icons_sidemenu" />
                            </div>
                            <div className="item_name_sidemenu">
                                Ipsum
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link to="/">
                            <div className={`each_menuitem_sidemenu ${activeMenu === "Assignment1" ? "active_sidemenu" : ""}`} onClick={() => { setActiveMenu("Assignment1") }}>
                                <div className="icons_parent_sidemenu">
                                    < FolderSpecialTwoToneIcon className="icons_sidemenu" />
                                </div>
                                <div className="item_name_sidemenu">
                                    Assignment&nbsp;1
                            </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/assignment1">
                            <div className={`each_menuitem_sidemenu ${activeMenu === "Assignment2" ? "active_sidemenu" : ""}`} onClick={() => { setActiveMenu("Assignment2") }}>
                                <div className="icons_parent_sidemenu">
                                    < FolderSpecialTwoToneIcon className="icons_sidemenu" />
                                </div>
                                <div className="item_name_sidemenu">
                                    Assignment&nbsp;2
                            </div>
                            </div>
                        </Link>

                    </li>
                </ul>
            </div>
            {burgermenu ? <BlackScreen onClickChange={() => { setburgermenu(false) }} /> : false}
        </React.Fragment>
    )
}
