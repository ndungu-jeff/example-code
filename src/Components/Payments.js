import React,{useEffect,useState} from 'react'
import PaymentsDisplay from './PaymentsDisplay'
import PaymentForm from './PaymentForm'
function Payments() {
    const [payments,setPayments] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/payments')
      .then(res=>res.json())
      .then(data=>{
            setPayments(data)
        })
    },[])
  
    function onHandleAdd() {
        console.log('add')
    }
  return (
    <div>
        
        <PaymentForm  onAdd={onHandleAdd}/>
        {payments.map(payment=><PaymentsDisplay key={payment.id} id={payment.id} description={payment.description} category={payment.category} amount={payment.amount}/>)}
    </div>

  )
}

export default Payments
