import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingUpdateTitle">Update Your Account</span>
                <span className="settingDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm" >
                <label className="ppp">Profile Picture</label>
                <div className="settingPP">
                    <img 
                    src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80" 
                    alt="" />
                <label htmlFor="fileInput">
                    <i className="settingsPPIcon far fa-user-circle"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                </div>
                <label>Username</label>
                <input type="text"  placeholder="Prudhvi" />
                <label>Email</label>
                <input type="email"  placeholder="pudhviattuluri@gmail.com" />
                <label>Password</label>
                <input type="text" />
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
            <Sidebar/>
    </div>
  )
}
