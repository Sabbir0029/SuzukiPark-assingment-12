import React, { useState } from 'react';


const Admin = () => {
  const [email, setEmail] = useState('');
  const handeAddAdmin = e =>{
    setEmail(e.target.value)
  }
  const handelAdmin = e =>{
    const user = {email};
    fetch('https://damp-dusk-48668.herokuapp.com/users/admin',{
      method:'PUT',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
    })
    e.preventDefault()
  }
  return (
    <div className='container w-50'>
      <h1>Make an Admin</h1>
      <form onSubmit={handelAdmin}>
      <input
             type="email"
             className="form-control" 
             placeholder='Add Admin Email'
             name='email'
             onBlur={handeAddAdmin}
             />
            <input className='m-5 text-success fw-bold' type="submit" value="Add Admin" />
      </form>
    </div>
  );
};

export default Admin;