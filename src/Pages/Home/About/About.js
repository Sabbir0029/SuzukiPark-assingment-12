import React from "react";
import {Container} from "react-bootstrap";
import "./About.css";
import img from "../../../img/selection-154-500x500.png"

const About = () => {
  return (
    <div>
      <Container>
        <h1 className='m-5 text-success fw-bold'>About us</h1>
        <div class="container">
            <div class="row">
              <div class="col">
                <p>Suzuki is the Japanese automotive brand under the Suzuki Motor Corporation. The company formerly known as Suzuki Loom Works that established in 1909 by the inventor and businessman Michio Suzuki.

                Currently, Suzuki is globally known as the manufacturer of the four-wheeler, two-wheeler, ATV, marine engine, and internal-combustion engines. Further, they also manufacture other types of products in a limited range and have a contribution in world sports.
                Primarily they tied with Suzuki Motorcycle India which is serving this subcontinent being an important part of Suzuki Japan.

                 In the following year 2014 after establishment, the first shipment of Suzuki motorcycle arrived in CBU condition. That time all the imported motorcycles sold one month before the arrival of the shipment.

                Further, the positive market response strengthened the newly formed company. Resulting, they established the assembly factory from the beginning and did CKD condition motorcycle imports.</p>
              </div>
              <div class="col">
                <img src={img}/>
              </div>
            </div>
           </div>
      </Container>
    </div>
  );
};

export default About;
