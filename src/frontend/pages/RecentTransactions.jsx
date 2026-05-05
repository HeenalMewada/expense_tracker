import React from "react";
import "./RecentTransaction.css"
import { useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { exportToExcel } from "./ExportExcel";


function RecentTransactions({transaction,onDelete, onEdit}){
  const [showAll, setShowAll] = useState(false); 
  const [active, setActive] = useState(null);
   const expenseData = transaction.filter((item) => item.type === "expense");
  const data = [...expenseData].sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)

  );
 const icons = {
  food: "🍔",
  travel: "✈️",
  shopping: "🛍️",
  others: "📦"
}
const recent = showAll ? data : data.slice(0, 5);
function showData(){
  const show = data.slice(0);
}

function handleExportExpense() {
  const expenseData = transaction.filter(
    (item) => item.type === "expense"
  );

  exportToExcel(expenseData, "expenses.xlsx");
}

  return(
    <div className="transactions">
     <div className="container">
      <h4>Recent Expenses</h4>
      <button onClick={handleExportExpense} className="exportBtn">Export Excel</button>
      </div>
       
{recent.map((item, index)=>{
  return(
  <div key={index}>
    <div className="transaction-item" onClick={()=>setActive(item.id)}>
      <div style={{display:"flex",gap:"20px",verticalAlign:"center",justifyContent:"space-around",alignItems:"centerc"}}>
        <p>{icons[item.category]} </p>
      <p>₹ {item.amount}</p>
<p className="category" > {item.category}</p>
</div>

<p className="date">{new Date(item.created_at).toLocaleDateString("en-IN", {
  day: "numeric",
  month: "short"
})}</p>
        {item.id === active && (
          <>
  <button onClick={() => onDelete(Number(item.id))} className="dltbtn">
    <RxCross2 />
  </button>
  <button onClick={() => onEdit(item)} className="editbtn">
      ✏️
    </button>
    </>
)}
</div>

</div>
  )
})}
 {data.length > 5 && (
        <a onClick={() => setShowAll(!showAll)}>
          {showAll ? "← Show Less" : "View All →"}
        </a>
      )}

    </div>
  
  )
}

export default RecentTransactions;