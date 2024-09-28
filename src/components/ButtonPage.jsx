import {MdMessage} from "react-icons/md";
import {MdCall} from "react-icons/md";
import {RiMessageFill} from "react-icons/ri";

const ButtonPage = () => {
  return (
    <div className="btn">
        <div className="r">
      <div className="btn-top">
        <button className="btn-1"><MdMessage className="btn-1.0" /> VIA SUPPORT CHAT </button>
        <button className="btn-2"><MdCall /> VIA CALL </button>
      </div>
      
    <div className="btn-mid">
        <button><RiMessageFill /> VIA EMAIL FORM</button>
    </div>

    <div className="btn-buttom">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="E-Mail" />
        <textarea type="textarea" placeholder="TEXT"  className="textarea"/>
        <input type="submit" className="submit" />
    </div>

    </div>


    <div className="btn-img">
        <img src="/images/contact.png" alt="contact image" />
    </div>


    </div>
    
  )
}

export default ButtonPage;
