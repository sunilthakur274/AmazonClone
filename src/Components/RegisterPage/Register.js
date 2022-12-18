import React, { useState } from "react";
import { register } from "../Shared/Common";
import "./Register.css";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function Register(props) 
{
  const [userdata, setUserData] = useState({
    firstName: "",
    lastName: "",
    Email: "",
    Image: "",
    Password: "",
})

  const[errMsg,setErrMsg] = useState('');
  
  const[submitButtonDisabled,setSubmitButtonDisabled] = useState(false)

  const RegisterData = (event) => {
    return setUserData((prevdata) => {
      return { ...prevdata, [event.target.name]: event.target.value };
    });
  };

  const submitHandle = (event) => {
    event.preventDefault()
    if(!userdata.firstName || !userdata.lastName || !userdata.Email || !userdata.Image || !userdata.Password)
    {
        setErrMsg('Fill all Feilds');
        return ;
    }
    setErrMsg('');
   
    console.log(userdata)

    createUserWithEmailAndPassword(auth,userdata.Email,userdata.Password).then((res)=>{ console.log(res)}).then((err)=>{
      setSubmitButtonDisabled(false);
      setErrMsg(err.message
        )});
    }

  return (
    <>
      <form onSubmit={submitHandle}>
      
    <Link to='/'>
      <img src='/images/amazone1.jpg' width='10%' style={{margin:'50px 0px 0px 613px'}} /></Link>
     
        <div className="register">
          <h2 style={{ margin: "20px" }}>Create Account</h2>

          {register.map(function (value) {
            return (
              <div>
                <h5 style={{ display: "inline", padding: "20px" }}>
                  {value.place}{" "}
                </h5>

                <input
                  size={value.size}
                  name={value.name}
                  type={value.type}
                  id="input13"
                  onChange={RegisterData}
                />
                
              </div>
            );
          })}
              {errMsg}

       
          <button type="submit" id="btn12" disabled={submitButtonDisabled}> 
          <Link to='/' >   
            Submit
          </Link> 
          </button>
       

        </div>
      </form>
    </>
  );
}
export default Register;
