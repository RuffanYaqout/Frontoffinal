import React from 'react';
import './styling.css';
//components
import Navi from './components/navi';
import Footer from './components/foot';
//Bootsrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//IMPORT IMGS
import map from './images/maps.jpg';
import ambualancePic from './images/ambulance.png';
import customer from './images/customer-support.png';
import get from './images/rescue-by-one-click.png';
import patient from './images/patient.png';

function App() {
  return (
    <div> 
      <Navi/>
    
     
      <div class ="container-fluid">
        <img src={map} alt="nearest hospital" width='100%' height='450px' />
        <Button  class="btn" id="findButton" >FIND NEAREST HOSPITAL</Button>
      </div>
      
{/*Ambulance */}

      <br/>
      <div className="d-flex justify-content-center mx-3">
        <Card style={{ width: '50%', border: '2px solid #AC1018' }}>
        <div className="p-2 -circle d-flex align-items-center justify-content-center">
          <Card.Img variant="top" src={ambualancePic} id="ambulancePic" className="rounded-circle" />
        </div>
        <Card.Body className="d-flex flex-column align-items-center">
          <Card.Title>24/7 AMBULANCE</Card.Title>
          <Button variant="primary" style={{ backgroundColor: '#AC1018', borderColor: '#AC1018' }}>ORDER NOW</Button>
        </Card.Body>
        </Card>
      </div>
      <br></br>

   {/*benefits section */}

   <div class="text-center">
    <h3>H.E.L.P Features</h3> <br />
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-4 mb-3">
        <div class="card" style={{ width: '18rem', border: '0px solid #AC1018' }}>
          <div class="p-2  d-flex align-items-center justify-content-center">
            <img src={customer} class="card-img-top" style={{ height: '100px', width: '100px', boxShadow: 'none' }} alt="24/7 Customer Support" />
          </div>
          <div class="card-body d-flex flex-column align-items-center">
            <h5 class="card-title font-weight-light">24/7 Customer Support</h5>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="card" style={{ width: '18rem', border: '0px solid #AC1018' }}>
          <div class="p-2 d-flex align-items-center justify-content-center">
            <img src={get} class="card-img-top" style={{ height: '100px', width: '100px', boxShadow: 'none' }} alt="24/7 Technical Assistance" />
          </div>
          <div class="card-body text-center flex-column">
            <h5 class="card-title font-weight-light">Get Rescued By A Click</h5>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="card" style={{ width: '18rem', border: '0px solid #AC1018' }}>
          <div class="p-2 d-flex align-items-center justify-content-center">
            <img src={patient} class="card-img-top" style={{ height: '100px', width: '100px', boxShadow: 'none' }} alt="Fast Response Time" />
          </div>
          <div class="card-body text-center flex-column">
            <h5 class="card-title font-weight-light">Patient First Policy</h5>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</div>

  );
}

export default App;