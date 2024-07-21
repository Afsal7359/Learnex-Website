import React from 'react'
import Successimg from '../../assets/image/success.gif'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div  style={{backgroundColor:"#000",height:"100vh" ,padding:"45px"}}>
       <center><img src={Successimg} alt="" style={{justifyContent:"center",alignItems:"center"}} width={"40%"} height={"55px"}/></center> 
       <p style={{fontWeight:"900",fontSize:"25px",textAlign:"center",color:"#fff"}}>Payment SuccessFully Completed</p>
   <center>    <Link to={'/'} style={{justifyContent:"center",alignItems:"center",width:"45px",padding:"10px",backgroundColor:"#000",color:"#fff",borderRadius:"15px", background: 'linear-gradient(92deg, #FF8E26 30.11%, #9C4DFF 80.07%)',  color: 'white',marginTop:"45px" }}>Back to Home</Link>
</center>
    </div>
  )
}

export default Success