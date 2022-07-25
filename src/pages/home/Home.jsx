
import Header from "../../components/header/Header"
import Sposts from "../../components/sposts/Sposts"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.css"
export default function Home() {
  return (
    <>
      <Header/>
    <div className="home">
        <Sposts/>
        <Sidebar/>
    </div>
  </>
  )
}
