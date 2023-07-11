import { useState } from "react";
import "./Expense.css";
const Expense = () => {
  const [amount, setAmount] = useState(500);
  const [value, setValue] = useState(0);
  const [trans,setTrans] = useState([])
  const ChangeValue = () => {
    setAmount(amount + parseInt(value));
    let date = new Date().toJSON()
    let data= [`${date} - ₹${value} - Add`]
    setTrans([...trans,data])
    setValue(0)
  };
  const RemoveValue=()=>{
    setAmount(amount - value)
    let date = new Date().toJSON()
    let data= [`${date} - ₹${value} - Remove`]
    setTrans([...trans,data])
    setValue(0)
  }
  return (
    <div className="container">
      <h3 className="textwrite">Expense Tracker - Basic</h3>
      <div className="expense">
        <h4>Balance: ₹{amount}</h4>
        <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
        <br />
        <button className="btn" onClick={ChangeValue}>
          Add
        </button>
        <button className="btn" onClick={RemoveValue}>Remove</button>
      </div>
      <div className="transaction">
        <h4>Transactions:</h4>
        {trans.map((val)=>{
            return(
                <div key={val}>{val}</div>
            )
        })}
      </div>
    </div>
  );
};
export default Expense;
