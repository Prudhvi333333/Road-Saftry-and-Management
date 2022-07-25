
import "./topbar.css"
import { Link } from "react-router-dom"
export default function  () {
  const user=false;
  return (
    <div class="top">
        <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
        <div className="topCenter">
        <ul className="toplist">
             <li className="toplistItem">
              <Link className="link" to="/" >HOME</Link></li>
             <li className="toplistItem"><Link className="link" to="/" >ABOUT</Link></li>
             <li className="toplistItem"><Link className="link" to="/" >CONTACT</Link></li>
             <li className="toplistItem"><Link className="link" to="/citizen" >WRITE</Link></li>
             <li className="toplistItem">
               {user && "LOGOUT"}
               </li>  
        </ul>
        </div>
        <div className="topRight">
          {user ?(
              <img className="topImg"
            src="https://iconarchive.com/download/i102645/graphicloads/flat-finance/person.ico"
            alt=""
            />
           ):(
              <ul className="toplist">
                <li className="toplistItem">
                <Link className="link" to="/login" >LOGIN</Link>
                </li>
                
              </ul>
            )
          }
            
        </div>
    </div>
  )
}
