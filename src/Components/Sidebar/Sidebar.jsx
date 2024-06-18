import React from 'react'
import '../Sidebar/Sidebar.css'
import {Link} from "react-router-dom"
import{LineStyle,Timeline,TrendingUp,Person,Storefront,AttachMoney,Report, Mail, Feedback, Message,BusinessCenter, Equalizer} from "@material-ui/icons"
const Sidebar = () => {
  return (
    <div className='sidebar '>
        <div className="sidebarwrapper">
            <div className="menubar">
                <h3 className="sidebartitle">Dashboard</h3>
                <ul className="menulist">
                   <Link to={"/"} className='Link'>
                    <li className='menulistname active'>
                        <LineStyle className='icon' />
                        Home
                    </li>
                   </Link>
                    <li className='menulistname'>
                        <Timeline className='icon'/>
                        Analytics
                    </li>
                    <li className='menulistname'>
                        <TrendingUp className='icon'/>
                        Sales
                    </li>
                </ul>
            </div>
            <div className="menubar">
                <h3 className="sidebartitle">Quick Menu</h3>
                <ul className="menulist">
                    <Link to={"/userlist"}  className='Link'> 
                    <li className='menulistname'>
                        <Person className='icon'/>
                        Users
                    </li>
                    </Link>
                    <Link to={"/product"} className='Link'>
                    <li className='menulistname'>
                        <Storefront className='icon'/>
                        Products
                    </li>
                    </Link>
                    <li className='menulistname'>
                        <AttachMoney className='icon'/>
                        Transcations
                    </li>
                    <li className='menulistname'>
                        <Equalizer className='icon'/>
                        Report
                     </li>
                </ul>
            </div>
            <div className="menubar">
                <h3 className="sidebartitle">Notifications</h3>
                <ul className="menulist">
                    <li className='menulistname'>
                        <Mail className='icon'/>
                        Mail
                    </li>
                    <li className='menulistname'>
                        <Feedback className='icon'/>
                        Feedback
                    </li>
                    <li className='menulistname'>
                        <Message className='icon'/>
                        Messages
                    </li>
                </ul>
            </div>
            <div className="menubar">
                <h3 className="sidebartitle">Staff</h3>
                <ul className="menulist">
                    <li className='menulistname'>
                        <BusinessCenter className='icon'/>
                        Manage
                    </li>
                    <li className='menulistname'>
                        <Timeline className='icon'/>
                        Analytics
                    </li>
                    <li className='menulistname'>
                        <Report className='icon'/>
                        Report
                    </li>
                </ul>
            </div>
        </div>


    </div>
  )
}

export default Sidebar