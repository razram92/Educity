import React from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import { useRef } from 'react'


const Testimonials = () => {

    const slider = useRef()
    let tx =0;
    const slideforward =() =>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
 }
    const slidebackward =() =>{
        if(tx < 0){
            tx += 25;
        }
         slider.current.style.transform = `translateX(${tx}%)`

    }
  return (
    <div className='testimonals'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideforward} />
         <img src={back_icon} alt="" className='back-btn' onClick={slidebackward}/>
         <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Deeksha Aggrawal</h3>
                                <span> Panwari, UP </span>
                            </div>
                           
                        </div>
                         <p>
                                The educational program is well-designed, covering core concepts with real-world applications. It helps students
                                 build strong technical skills and enhances problem-solving through interactive sessions and projects.
                            </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Deepak Aggrawal</h3>
                                <span> Gurugram, Haryana</span>
                            </div>
                            
                        </div>
                        <p>
                               The educational program is well-designed, covering core concepts with real-world applications. It helps students
                                build strong technical skills and enhances problem-solving through interactive sessions and projects.
                            </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Aakansha Aggrawal</h3>
                                <span> Rath, UP </span>
                            </div>
                           
                        </div>
                        <p>
                               The educational program is well-designed, covering core concepts with real-world applications. It helps students
                                build strong technical skills and enhances problem-solving through interactive sessions and projects.
                            </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Rohit Aggrawal</h3>
                                <span> Noida, UP </span>
                            </div>
                            
                        </div>
                        <p>
                                The educational program is well-designed, covering core concepts with real-world applications. It helps students
                                 build strong technical skills and enhances problem-solving through interactive sessions and projects.
                            </p>
                    </div>
                </li>
            </ul>
         </div>
      
    </div>
  )
}

export default Testimonials
