import React, { useEffect, useState } from 'react';
import {  Container, Table } from 'react-bootstrap';
import { FaTrash } from "react-icons/fa";

import Admin from './admin/admin';
const Manage = () => {
    const [orders,setOrders] = useState([])
  
    useEffect(()=>{
      fetch('https://damp-dusk-48668.herokuapp.com/users')
      .then(res => res.json())
      .then(data => setOrders(data))
    },[])



    const deleteBtn = id => {
        const confirm = window.confirm('are you sure to delete this ?')
        if (confirm) {
            fetch(`https://damp-dusk-48668.herokuapp.com/users/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                alert('Deleted Seccessfully')
                const newAllUser = orders.filter(a => a._id !== id)
                setOrders(newAllUser)
                
            }
        })
        }
    }
    return (
        
        <div>
            {
                (orders.length !==0) ? <Container>
                <h1 className="text-center">Dashboard</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Event</th>
                    <th>User Name</th>
                    <th>User email</th>
                    <th>Action</th>
                    </tr>
                </thead>
                {
                    orders.map(or => <tbody>
                        <tr>
                        <td>{or?.title}</td>
                        <td>{or?.name}</td>
                        <td>{or?.email}</td>
                        <td><FaTrash onClick={()=>deleteBtn(or._id)}/></td>
                        </tr>
                    </tbody>)
                }
                </Table>
            </Container> : <h1>Loading...</h1> 
            }
        </div>
    );
};

export default Manage;