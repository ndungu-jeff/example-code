import React from 'react'

function PaymentsDisplay({id, category, amount,description}) {
  return (
   
      <div style={{border:"2px solid black"}}>
        <h3>{description}</h3>
        <h4>Category: {category}</h4>
        <h4>Amount: ${amount}</h4>
      </div>
      
      
  )
}

export default PaymentsDisplay