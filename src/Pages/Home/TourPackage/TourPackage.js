import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = () => {

  const [packages,setPakages] = useState([])

  useEffect(()=>{
    fetch('https://damp-dusk-48668.herokuapp.com/card')
    .then(res => res.json())
    .then(data => setPakages(data))
  },[])


  return (
    <>
    {
      (packages.length !== 0) ? <div className="my-5">
        <h1 className='m-5 text-success fw-bold'>Available Suzuki Bikes In BD 2021</h1>
      <div className="tour-card">
        <Container>
          <Row xs={1} md={3} className="g-4">
            {
              packages.map(pack => <Col>
                <Card>
                  <Card.Img
                  style={{height:'250px'}}
                    variant="top"
                    src={pack.photoImg}
                  />
                  <Card.Body>
                    <Card.Title>{pack.name}</Card.Title>
                    <Card.Text>Mileage :{pack.Mileage}</Card.Text>
                    <Card.Text>Price :{pack.Price}</Card.Text>
                  </Card.Body>
                  <Link to={`/selected/${pack._id}`}><button className="btn bg-primary text-white ">
                    Buy Now
                  </button></Link>
                </Card>
              </Col>)
            }
          </Row>
        </Container>
      </div>
    </div> : <h1>Loading...</h1>
    }
    </>
    
  );
};

export default Products;
