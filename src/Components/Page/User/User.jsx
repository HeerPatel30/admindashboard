import React from 'react'
import "../User/User.css"
import {Link} from "react-router-dom"
import {CalendarToday,Publish, Email,  LocationSearching, PermIdentity, PhoneAndroid} from "@material-ui/icons"
const User = () => {
  return (
    <div className='userc'>
        <div className="usertitlec">
            <h1 className='usertitle'>Edit</h1>
           
           <Link to="/newuser">
            <button className='createbtn'>Create</button>
           </Link>
        </div>
        <div className="usercontainer">
            <div className="usershow">
                <div className='usershowtop'> 

                <img src='https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q' className='imgs'/>
                <div className='userdetail'>
                        <span className='uname'>Ryle</span>
                        <span className='ujob'>Software Enginner</span>
                </div>
             </div>
             <div className="showbottom">
                    
                    <div className="usershowtitle">
                      <span className='showtitle'>
                        Account Details
                     </span>
                     <div className="showinfo">
                        <PermIdentity className='showlogo'/>
                        <span className="showname">Goku99</span>

                     </div>
                     <div className="showinfo">
                        <CalendarToday className='showlogo'/>
                        <span className="showname">12/10/2002</span>

                     </div>
                     <span className='showtitle'>
                        Contact
                     </span>
                     <div className="showinfo">

                        <Email className='showlogo'/>
                        <span className="showname">ryle78@gmail.com</span>

                     </div>
                     <div className="showinfo">
                        <PhoneAndroid className='showlogo'/>
                        <span className="showname">+91 85692 35884</span>

                     </div>
                     <div className="showinfo">
                        <LocationSearching className='showlogo'/>
                        <span className="showname">USA | New york</span>

                     </div>
                    </div>
            
            </div>



            </div>
            <div className="userup">
                <span className="uptitle">Edit</span>
                <div className="upform">
                   <div className="upleft">
                      <div className="formitem">
                        <label >Username </label>
                        <input type="text" placeholder='Goku99' className='upinput'/>
                      </div>
                      <div className="formitem">
                        <label >Fullname </label>
                        <input type="text" placeholder='Ryle'className='upinput'/>
                      </div>
                      <div className="formitem">
                        <label >Email </label>
                        <input type="text" placeholder='ryle78@gmail.com' className='upinput'/>
                      </div>
                      <div className="formitem">
                        <label >Phone </label>
                        <input type="text" placeholder='+91 85692 35884' className='upinput'/>
                      </div>
                      
                      <div className="formitem">
                        <label >Location </label>
                        <input type="text" placeholder='USA | New york' className='upinput'/>
                      </div>
                      
                   </div>
                   <div className="upright">
                      <div className="upimg">
                      <img src='https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q' className='updateimg'/>
                       <label htmlFor="file" className='upric'><Publish/></label>
                       <input type="file" id='file'  style={{display:"none"}}/>
                      </div>
                      <div>
                        <button className='uprightbtn'>Update</button>
                      </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default User