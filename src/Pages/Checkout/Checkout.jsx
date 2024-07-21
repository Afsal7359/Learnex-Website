import React, { useState } from 'react'
import './checkout.css'
import image from '../../assets/image/checkoutimg.gif'
import Success from './Success'
import { useLocation } from 'react-router-dom'

const Checkout = (props) => {
  const location = useLocation();

  const {CourseName,CourseDuration,Courseprice} = location.state

console.log(CourseName , "Name",CourseDuration,"duration",Courseprice,"price");
const [Checkoutpage,setcheckoutpage]=useState(true)
const [successpage,setSuccesspage]=useState(false)

    const handlesubmit =()=>{
        try {
            setcheckoutpage(false)
            setSuccesspage(true)
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
   {Checkoutpage && <div className='maindiv'>
<div className="mainscreen">
  {/* <img src="https://image.freepik.com/free-vector/purple-background-with-neon-frame_52683-34124.jpg"  class="bgimg " alt="">*/}
  <div className="card">
    <div className="leftside">
      <img
        // src="https://i.pinimg.com/originals/18/9d/dc/189ddc1221d9c1c779dda4ad37a35fa1.png"
        src={image}
        className="product"
        alt="Shoes"
      />
    </div>
    <div className="rightside">
      <form action="">
        <h1 style={{fontSize:"35px",fontWeight:"900"}}>CheckOut</h1>
        <h2 style={{fontSize:"20px",fontWeight:"500"}}>Payment Information</h2>

        <p>Name</p>
        <input type="text" className="inputbox" name="name" required  />

        <p>Mobile Number</p>
        <input type="number" className="inputbox" name="name" required  />

        <p>Email</p>
        <input type="email" className="inputbox" name="name" required  />

        <p>Course Details</p>
        <input type="text" className="inputbox" name="name" required=""  value={CourseName?CourseName:""} readOnly/>
        <p>Amount</p>
        <input
          type="number"
          className="inputbox"
          name="card_number"
          id="card_number"
          value={Courseprice?Courseprice:""}
          readOnly
          required=""
        />
        <p>Course Duration</p>
        <input
          className="inputbox"
          name="card_type"
          id="card_type"
          value={CourseDuration?CourseDuration:""}
          required=""
          readOnly
        />
       
        <p />
        
        <button type="submit" className="button" onClick={handlesubmit}>
          CheckOut
        </button>
      </form>
    </div>
  </div>
</div>
    </div>}
    {successpage && <Success/>}
    </>
  )
}

export default Checkout