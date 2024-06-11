import React from 'react'
import '../Toolbar/Toolbar.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import LanguageIcon from '@material-ui/icons/Language';
const Toolbar = () => {
  return (
<>
    <div className='toolbar'>
        <div className='toolbarwrapper'>
                <div className='left'>
                       <span className='logo'>ADMIN PANEL</span>
                </div>
                <div className='right'>
                       <div className='toolbaricon'>
                            <NotificationsIcon/>
                        <span className='iconbadge'>2</span>
                        </div>
                       <div className='toolbaricon'>
                            <LanguageIcon/>
                        <span className='iconbadge'>2</span>
                        </div>
                       <div className='toolbaricon'>
                            <SettingsIcon/>
                   
                        </div>
                        <img className='avatar' src='https://avatarfiles.alphacoders.com/347/347546.png'></img>
                </div>



        </div>



    </div>


</>
  )
}

export default Toolbar