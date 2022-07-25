import "./sidebar.css"
import "./pic.png"

export default function sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img className="img" 
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                entium deleniti corrupti aliquam molestias autem, aperiam nesciunt minima nulla?
                Prudhiv poooja dharnin mikesh
            </p>
        </div>
    <div className="sidebarItem">
      <span className="sidebarTitle">EXPERIENCE</span>
      <ul className="sidebarList">
        <li className="sidebarListItem">SRM UNIVERSITY</li>
        <li className="sidebarListItem">APSSDC</li>
        <li className="sidebarListItem">MICROSOFT</li>
      </ul>
    </div>
    <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      <div class="sidebarItem">
        <div className="sidebartop">
        <i className="sidebarIcon fab fa-facebook-square"></i>
        <i className="sidebarIcon fab fa-instagram-square"></i>
        <i className="sidebarIcon fab fa-twitter-square"></i>
      </div>
    </div>
  </div>
  </div>
  )
}
