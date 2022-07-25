import "./citizen.css"


export default function citizen() {
  return (
    <div className="citizen">
        <div className="Titles">
             <span className="titlePq">COMPLAINT REGISTRATION FORM</span>
        <div className="locationMenu">
          <form className="form1"action="">
          STARTING POINT:<select className="sp" name="To" id="To">
            <option value="" selected="selected">SELECT LOCATION</option>
            </select>
          DESTIATION : <select className="ds" name="Des" id="Des">
          <option value="" selected="selected">SELECT LOCATION</option>
          </select>
          </form>
          <div className="Text">
          <span className="Note">
            <b>INFORMATION</b> 
            </span>
            <p className="Info">If you want to register a complaint you need to select location from statring point to destination 
            and you need to submit your personal details like <b>DRIVING LISCENCE</b> and your <b>PAN CARD </b> at last you have to descibe your problem and post 
            it with a video...
            </p>
          </div>
        </div>
        <div className="form2">
            <span classname="cf">
              <b>REGISTER FOR THE COMPLAINT</b>
            </span>
            <form className="cf1" action="">
                <label className="names" >USERNAME:</label><br />
                <input className="text" type="text" /><br />
                <label className="names" for="name">ENTER FULL NAME:</label><br />
                <input className="text" type="text"  /><br />
                <label className="names" for="mailid">ENTER MAIL ID:</label><br />
                <input className="text" type="text"  /><br />
                <label className="names" for="city">NAME OF THE CITY:</label><br />
                <input className="text" type="text" /><br />
                <label className="names" >UPLOAD DRIVING LISCENCE</label><br />
                <input  className="fil" type="file" /><br />
                <button className="buton">upload</button><br />
                <label className="names">UPLOAD PAN CARD:</label><br />
                <input className="fil" type="file" /><br />
                <button className="buton">upload</button><br />
                <label className="names">DESCRIPTION OF PROBLEM:</label><br />
                <textarea placeholder="Enter your problem"></textarea><br />
                <button className="post">POST</button>
            </form>
          </div>

        </div>
        <img className="headerimg" src="https://www.policebank.com.au/wp-content/uploads/2021/09/GettyImages-170958625.jpg" alt="" />

    </div>
  )
}
