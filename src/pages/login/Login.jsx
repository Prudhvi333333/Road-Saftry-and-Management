import "./login.css"
import { Link } from "react-router-dom"

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
                <form className="loginform" >
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email...."/>
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password..."/>
                    <button className="logbu">Login</button>
                </form>
                    
                <div class="dropdown">
                  <button class="dropbtn">Register</button>
                  <div class="dropdown-content">
                    <a href="/cregister">CITIZEN</a>
                    <a href="/rregister">OFFICER</a>
                  </div>
                </div>
                

                    
            </div>
  )
}
