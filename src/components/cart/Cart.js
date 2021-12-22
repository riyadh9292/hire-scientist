import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowman,faHandshake } from "@fortawesome/free-solid-svg-icons";
import './Cart.css'

const Cart = ({hired}) => {
    const element = <FontAwesomeIcon 
    icon={faSnowman} />;
    const contact = <FontAwesomeIcon icon={faHandshake} />;
    //getting total salary using reduce
    const totalSalary = hired.reduce((prev,curr)=>prev+curr.salary,0)
    return (
     <>
       <div className='cart'>
          <h1>Total added {hired.length} {element}</h1>
            <div className="hired-scientist">
            {
                //as every key is unique. we can use name as key
            hired.map(hire => <small key={hire.key}>
                <b>{hire.name}</b>--{hire.influence}
                </small>
                )
            }
            </div>
            
            <p className='total'>Estimated cost: {totalSalary} <small>usd</small> </p>
            <button className='cart-button' title="submit your proposal">{contact}</button>
        </div>
      </>

    );
};

export default Cart;