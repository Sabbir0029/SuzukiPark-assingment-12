import React, { useState } from "react";
import { Form } from "react-bootstrap";

const CreateNewEvent = () => {

  const [updateEvent,setUpdateEvent] = useState({})

  const handleAll = e => {
    const {name,value} = e.target
    setUpdateEvent({...updateEvent,[name]:value})
  }

  const handleEvent = e =>{
    fetch('https://damp-dusk-48668.herokuapp.com/card',{
      method:'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(updateEvent)
    }).then(res => res.json())
    .then(data => {
      if (data.insertedId) {
        alert('Successfully added a new Event')
      }
    })

    e.preventDefault()
  }


  return (
    <div>
      <div className="event-title text-white pt-3">
        <h1 className="fw-bold">Create New Event</h1>
        <div className="">
          <Form onSubmit={handleEvent} className="w-50 mx-auto">
            <Form.Group className="mb-3 fw-bold" controlId="formGroupText">
              <Form.Label>Event Title</Form.Label>
              <Form.Control onChange={handleAll} name="name" type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3 fw-bold" controlId="formGroupText">
              <Form.Label>Image Ulr</Form.Label>
              <Form.Control onChange={handleAll} name="img" type="text" placeholder="Set image url" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupText">
              <Form.Label>Fee</Form.Label>
              <Form.Control onChange={handleAll} name="fee" type="number" placeholder="Price" />
            </Form.Group>
            <Form.Group className="mb-3 fw-bold" controlId="formGroupText">
              <Form.Label>Description</Form.Label>
              <Form.Control onChange={handleAll} name="des" as="textarea" rows={3} placeholder="Description"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Control
                className="text-white bg-primary border-0 fw-bold"
                type="submit"
              />
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateNewEvent;
