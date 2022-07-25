import "./cregister.css"
import { Link } from "react-router-dom"
export default function Cregister() {
  return (
    <div className="cregister">
        <span className="cregisterTitle">CITIZEN REGISTRATION FORM</span>
                <form className="cregisterform" >
                    <label>Username</label>
                    <input type="text" placeholder="Enter your username...."/>
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email...."/>
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password..."/>
                    <label>Retype Password</label>
                    <input type="password" placeholder="RetypePassword..."/>
                    
                    <button className="regbu">REGISTER</button>
                    
                </form>
                    
                
                <button className="reslog">
                <Link className="link" to="/login" >LOGIN</Link>
                </button>
                
            </div>
  )
}
