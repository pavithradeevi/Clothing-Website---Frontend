import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { loginUser } from '../actions/userActions';


export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const loginstate = useSelector((state)=>state.loginUserReducer)
  const {loading,error} = loginstate;
  const dispatch = useDispatch()

  useEffect(()=>{
    if(localStorage.getItem("currentUser")){
      window.location.href="/home"
    }
  },[])

  function login(){
    const user = {email,password};
    dispatch(loginUser(user))
  }
  
  return (
    <div className="login">
    <div className="row justify-content-center mt-5 pt-3">
    <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
        <h2 className="text-center mt-2" style={{ fontSize: "35px",color:"red" }}>Login</h2>
        {loading && <Loading/>}
        {error && <Error error="Invalid creditionals"/>}

    <div>
        <input
            required
            type="email"
            placeholder='Enter your EmailId'
            className="form-control mt-4"
            value={email}
            onChange={(e)=>{setemail(e.target.value)}}
        />
         <input
            required
            type="password"
            placeholder='Enter your Password'
            className="form-control mt-4"
            value={password}
            onChange={(e) => {
                setpassword(e.target.value);
              }}
        />
        <br/><br/>
        <div>
        <p style={{fontSize:"17px"}}>
          EmailId:admin@gmail.com
          <br/>
          password:admin12345
        </p>
        </div>
        <button className="btn mt-4 mb-4" 
        onClick={login}
        style={{background:"blue"}}
        >Login</button>
        <p>Don't have an Account?
        
        <a style={{ color: "red" }} href="/register" className="mt-2">
              Register Here
            </a>
        </p>
    </div>

    </div>

    </div>
      
    </div>
  )
}
