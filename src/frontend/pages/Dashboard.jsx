import React from "react";
import "./Dashboard.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { CgPlayButton } from "react-icons/cg";
import { useEffect } from "react";
import Card from "./Card.jsx"
import PieChart from "./PieChart.jsx";
import RecentTransactions from "./RecentTransactions.jsx"
import { exportToExcel } from "./ExportExcel.jsx";


function Dashboard() {
    const [transaction, setTransaction] = useState([]); 
    const [show, setShow] = useState(false);
    const [type, setType] = useState("");
    const [editItem, setEditItem] = useState(null);


    const modal = useNavigate();
   useEffect(()=>{
fetch(`${import.meta.env.VITE_API_URL}dashboard.php`)

            .then((res) => (res.json()))
            .then((data) => {
                
                
                setTransaction(data) })
            .catch((err) => (err.message))
   },[])
        

const incomeData = transaction.filter((item) => item.type === "income");
const expenseData = transaction.filter((item) => item.type === "expense");
const totalIncome = incomeData.reduce((acc, item) => acc + Number(item.amount), 0);
const totalExpense = expenseData.reduce((acc, item) => acc + Number(item.amount), 0);
const totalbalance = totalIncome-totalExpense;
let label = "";

if (totalbalance <=5000) {
  label = "⚠ Overspent";
}
// const expenseData = transaction.filter(item => item.type === "expense");

const categoryMap = {};

expenseData.forEach(item => {
  const cat = item.category;
  const amt = Number(item.amount);

  if (categoryMap[cat]) {
    categoryMap[cat] += amt;
  } else {
    categoryMap[cat] = amt;
  }
});
function handleDelete(id) {
  const updated = transaction.filter((item) => Number(item.id) !== id);
  setTransaction(updated);
  console.log(id);
  console.log(updated);
 
  
  
}
function handleEdit(item) {
  setEditItem(item);
  setType(item.type);
  setShow(true);
}
function handleExportIncome() {
  const incomeData = transaction.filter(
    (item) => item.type === "income"
    

  );

  exportToExcel(incomeData, "income.xlsx");
}
    return (
        
        <div className="dashboard">
<div className="cards">
   
  <Card type="Balance" amount={totalbalance} className="balance"  />
  <p style={{color:"red"}} className="label">{label}</p>
  
  <Card type="Income" amount={totalIncome}  onClick={() =>{setType("income"); setShow(true)}} onExport={handleExportIncome}  className="income"/>
  <Card type="Expense" amount={totalExpense} onClick={() => {
      setType("expense");
      setShow(true);
      setEditItem(item); 
    }} className="expense"/>

    
</div>




{show && <Modal setShow={setShow} type={type}  editItem={editItem}/>}
<div className="pie" style={{ width: "100%", height: "300px", marginTop:"50px" , display:"flex",justifyContent:"space-evenly"}}>
  <div className="recent_transactions">
<RecentTransactions transaction={transaction} onDelete={handleDelete}  onEdit={handleEdit}> </RecentTransactions>
</div>
<PieChart 
  totalIncome={totalIncome} 
  totalExpense={totalExpense} 
/>
<PieChart categoryMap={categoryMap} />


</div>
        </div>

    )
}

export default Dashboard;