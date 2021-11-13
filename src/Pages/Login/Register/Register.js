import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const {register, isLoading} = useAuth();

  const handleOnChange = e =>{
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = {...loginData};
    newLoginData[field] = value;
    setLoginData(newLoginData);
  }
  const submitBtn = e =>{
    if(loginData.password !== loginData.password2){
      alert('not match')
      return
    }
    register(loginData.email, loginData.password)
    e.preventDefault();
  }
  return (
    <div className="container w-50">
        <h1 className='register'>Please Register</h1>
        {!isLoading && <form onSubmit={submitBtn} className="row g-3">
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
            <input
             type="password"
             className="form-control" 
             placeholder='Confrom Passeord' id="inputPassword4"
             name='password2'
            onChange={handleOnChange}
             />
            <input type="submit" value="Register" />
            <p>Already Registered? Please <Link to='/login'>Login</Link></p>
        </form>}
        {isLoading && <button className="btn btn-primary" type="button" disabled>
  <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>}
    </div>
  );
};

export default Register;