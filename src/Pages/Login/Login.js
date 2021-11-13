import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const {handleGoogle,setUser,setError,loginUser} = useAuth()
  const location = useLocation()
  const history = useHistory()
  const redirect_url = location.state?.from || '/home'

  // Email and Password
  const handleOnChange = e =>{
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = {...loginData};
    newLoginData[field] = value;
    setLoginData(newLoginData);
  }
  const submitBtn = e =>{
    loginUser(loginData.email, loginData.password)
    .then((result) => {
      setUser(result.user)
      history.push(redirect_url)
    })
    .catch((error) => {
        setError(error.message)
    });
    e.preventDefault();
  }

  // google login
  const handleGoogleAndRedirect = () => {
      handleGoogle()
      .then((result) => {
          setUser(result.user)
          history.push(redirect_url)
  })
  .catch((error) => {
      setError(error.message)
  });
 
  }
  return (
    <div className="container w-50">

<form onSubmit={submitBtn} className="row g-3">
          <h1 className='register'>Please Login</h1>
            <input 
            type="email" 
            className="form-control"
            placeholder='Your Email'
            id="inputEmail4"
            name='email'
            onChange={handleOnChange}
              />
            <input
             type="password"
             className="form-control" 
             placeholder='Your Passeord' id="inputPassword4"
             name='password'
            onChange={handleOnChange}
             />
            <input type="submit" value="Login" />
            <p>New user? Please Register<Link to='/register'>Register</Link></p>
        </form>

      <h2>login With Google</h2>
      <button onClick={handleGoogleAndRedirect} className="btn bg-warning text-white border-0">
        Google SingIn
      </button>
    </div>
  );
};

export default Login;
