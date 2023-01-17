import React,{useState} from "react";

function PaymentForm({onAdd}) {
    const[formData, setFormData] = useState({
        description: "",   
        category: "",
        amount: 0,

    })
    function handleChange(e) {
        setFormData({
          ...formData,
            [e.target.name]: e.target.value
        })
    }
    function handleSubmit(e) {
        e.preventDefault();
       fetch("http://localhost:3000/payments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
       }).then(res => res.json ())
       .then(data => onAdd(data))
       .catch(err => console.log(err))

    }
  return (
    <form onSubmit={handleSubmit}>
    
      <div>
        <label htmlFor="description">description</label>
        <input type="text" name="description" onChange={handleChange}/>
      </div>

      <div>
        <label htmlFor="category">category</label>
        <input type="text" name="category"  onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="amount">amount</label>
        <input type="text" name="amount"  onChange={handleChange} />
      </div>
      <button type="submit">submit</button>
    </form>
  );
}

export default PaymentForm;
