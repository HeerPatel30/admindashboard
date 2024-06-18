import React from 'react'
import '../Newuser/Newuser.css'
const Newuser = () => {
  return (
    <div className='newuser'>
        <span className="ntitle">New User</span>
        <form className="newuserform">
            <div className="newformitem">
                <label  >Username</label>
                <input type="text" placeholder='Atlas' className='in' />
            </div>
            <div className="newformitem">
                <label  >Fullname</label>
                <input type="text" placeholder='Atlas Corriden' className='in' />
            </div>
            <div className="newformitem">
                <label  >Email</label>
                <input type="text" placeholder='Atlas32@gmail.com' className='in' />
            </div>
            <div className="newformitem">
                <label  >Password</label>
                <input type="text" placeholder='password' className='in' />
            </div>
            <div className="newformitem">
                <label  >Phone</label>
                <input type="text" placeholder='+91 78685 56686' className='in' />
                
            </div>
            <div className="newformitem">
                <label  >Address</label>
                <input type="text" placeholder='USA | New York' className='in' />

            </div>
            
            <div className="newformitem">
                <label  >Gender</label>
                <div className="gen">
                    <input type="radio" name="gender" value="male" id='male' />
                    <label htmlFor="male">male</label>
                    <input type="radio" name="gender" value="female" id='female' />
                    <label htmlFor="female">female</label>
                    <input type="radio" name="gender" value="other" id='other' />
                    <label htmlFor="other">other</label>
                </div>

            </div>
            <div className="newformitem">
                <label >Active</label>
                <select className='selectu' name="active" id="active">
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>


                </select>
            </div>
            <div className="newformitem">
            <button className='newbtn'>Create</button>
            </div>
          
        </form>
    </div>
  )
}

export default Newuser