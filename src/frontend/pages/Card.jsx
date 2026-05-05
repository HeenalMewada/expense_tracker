import React from "react";
import "./Card.css"
import { IoIosAdd } from "react-icons/io";


function Card({ type, amount, onClick, className, onExport }) {
    return (

        <div className={`card ${className}`}>
            {/* <Card title="Balance" amount={totalIncome - totalExpense} />

            <Card title="Income" amount={totalIncome} type="income" />

            <Card title="Expense" amount={totalExpense} type="expense" /> */}
            <h2 className="card_title">{type}</h2>
            <p className="card_amount">₹ {amount}</p>
            {onClick && (
                <>
                <button onClick={onClick} className="btn">

                   <IoIosAdd /> Add

                </button>

               
               </>
            )}
            {onExport && (<button onClick={onExport} className="export">  ⬇ Export</button>
)}
 
        </div>



    )
}

export default Card;