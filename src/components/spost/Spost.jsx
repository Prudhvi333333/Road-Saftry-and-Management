import "./spost.css"
export default function () {
  return (
    <div className="spost">
        <img className="spostImg" src="https://images.pexels.com/photos/2793170/pexels-photo-2793170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="" />
        <div className="spostInfo">
            <div className="spostCats">
                <span className="spostCat">Improvement</span>
            </div>
            <span className="spostTitle">
            Safety Always For All Roads
            </span>
            <hr /> 
            <span className="spostDate">1 hour ago</span>
            
        </div>
        <p className="sPostDesc">
        In view of the anxiety expressed by the citizens on the spate of
road accidents in the State resulting in loss of life, serious injuries and loss of
property, the Transport Department undertook the task of preparing an approach
paper to set in motion a series of measures by various stake holding departments to
improve road safety.
        </p>
    </div>
  )
}
