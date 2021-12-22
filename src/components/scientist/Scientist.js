import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import './Scientist.css'

const Scientist = (props) => {
  const element = <FontAwesomeIcon icon={faAddressCard} />;
  /* destructuring his name age image salary influence and country  */
  const {key,name,age,img,salary,influence,country} = props.scientist;

  return (
    /* three card for large device and two card for medium device */
  <div className="col-lg-4 col-md-6">
    <div className="card scientist-card  mb-3" style={{maxWidth: "540px"}}>
      <div className="row g-0">
      <div className="col-md-4">
      <img src={img} className="img-fluid rounded-start rounded-circle img-thumbnail" height="236" alt={name}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">
          Name:  {name}</h5>
          <h6>Influence : <span className="text-decoration-underline">{influence}</span></h6>
          <p>Age: {age}</p>
          <p>Country: <b>{country}</b> </p>
          <p>Salary: {salary}$/month</p>
        <p className="card-text">
          <button className="contact-button" onClick={(e) => props.handleHiring(key,name,salary,influence,e)}> {element} Contract Paper</button></p>
      </div>
    </div>
  </div>
</div>
</div>
);
};

export default Scientist;
