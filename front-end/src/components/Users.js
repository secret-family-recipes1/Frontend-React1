import React from 'react';
import { Link } from 'react-router-dom';

export default function Users (props) {

   const {details} = props

    return (
      <div>
        <div className='team-member'>
          <h2>{details.name}</h2>
          <p><strong>Email:</strong> {details.email}</p>
          <p><strong>Password:</strong> {details.password}</p>
        </div>
      </div>
        
    )
    
}