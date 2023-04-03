import React, { useState } from 'react';
import Loading from '../components/Loading';
import "./register.css";
import { registerUser } from '../actions/userActions';
import Error from '../components/Error';
import Success from '../components/Success';
import { useDispatch, useSelector } from 'react-redux';

export default function Register() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const registerstate = useSelector((state)=>state.registerUserReducer);
  const {error,loading,success} = registerstate;

  const dispatch = useDispatch();

  function register(){
    if(password !== cpassword){
      alert("Passwords didn't match")
    } else{
      const user = {
        name,
        email,
        password,
      };
      console.log(user);
      dispatch(registerUser(user))
    }
  }


  return (
    <div className='register'>
    <div className="row justify-content-center mt-5">
    <div class="row justify-content-center">
    {loading && <Loading/>}
    {success && 
    
    <Success sucess="User Register Successfully"/>
    }
    {error && <Error error="EmailId Already Registered"/>}
    <h2 className="text-center m-2 " style={{ fontSize: "35px",color:"red" }}>Register</h2>
    <hr/>
    <br/><br/>

    </div>
    <div class="box" >

    <input required type="text"
        placeholder='Enter your name'
        class="form-control mt-2" 
        value={name}
        onChange={(e)=>{
          setname(e.target.value)
        }}
        
    /><br/>
    <input required type="email"
        placeholder='Enter your emailId'
        className="form-control mt-2"
        value={email}
        onChange={(e)=>{setemail(e.target.value)}}
    />

    <br/>
    <input required type="password"
        placeholder='Password'
        className="form-control mt-2"
        value={password}
        onChange={(e) => {setpassword(e.target.value);}}
    />

    <br/>
    <input required type="password"
        placeholder='Confirm Password'
        className="form-control mt-2"
        value={cpassword}
        onChange={(e)=>{setcpassword(e.target.value)}}
    /><br/>
    <button className="btn mt-3 mb-3" style={{background:"blue"}}
    onClick={register}
    >Register</button>
    </div>
    

    </div><br/><br/><br/>
    <p>Already Have an Account?</p>
    <p>Click Here to 

    <a style={{ color: "red" }} href="/login"> Login</a>
    </p>
      
    </div>
  )
}
