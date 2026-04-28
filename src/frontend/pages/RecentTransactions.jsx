import React from "react";
import "./RecentTransaction.css"
import { useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";


function RecentTransactions({transaction}){
  const [showAll, setShowAll] = useState(false); 
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
  return(
    <div className="transactions">
      <h4>Recent Expenses</h4>
       
{recent.map((item, index)=>{
  return(
  <div key={index}>
    <div className="transaction-item">
      <div style={{display:"flex",gap:"20px",verticalAlign:"center",justifyContent:"space-around",alignItems:"centerc"}}>
        <p>{icons[item.category]} </p>
      <p>₹ {item.amount}</p>
<p className="category"> {item.category}</p>
</div>

<p className="date">{new Date(item.created_at).toLocaleDateString("en-IN", {
  day: "numeric",
  month: "short"
})}</p>

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