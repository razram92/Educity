import React from 'react'

import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {

    
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c5d0d04c-5d8f-4698-a851-b1920c857302");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message<img src={msg_icon} alt="" /></h3>
        
        <p>Lorem ipsum dolor sit amet, consectetur
             adipisicing elit. Quam voluptatibus quis explicabo ullam aspernatur asperiores temporibus 
             autem dolor ipsam, quibusdam doloremque porro deleniti voluptatum ad id qui? Totam, rem minus.</p>
             <ul>
                <li> <img src={mail_icon} alt="" /> Contact@razram92@gmail.com </li>
                <li> <img src={phone_icon} alt="" /> +1 990-878-987 </li>
                <li> <img src={location_icon} alt="" /> Panwari Mahobha(210429) <br/>UP, I </li>
                
             </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}> 
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter Your Name' reuired="true"/>
            <label>Telephone</label>
            <input type="tel" name='phone' placeholder='Enter Your Telephone' reuired="true"/>
            <label>Enter Your message</label>
            <input type="textarea" name='message' rows="6" placeholder='Type your message here' reuired="true" />
            <button  type= "submit" className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>
            {result}
           </span>
      </div>
    </div>
  )
}

export default Contact
