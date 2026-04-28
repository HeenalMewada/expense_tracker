import React, { use } from "react";
import "./Modal.css";
import { GiCrossMark } from "react-icons/gi";
import { useState } from "react";

function Modal({ setShow, type }) {
    const [amount, setAmount] = useState("");
    const [source, setSource] = useState("Salary");
    const [category, setCategory] = useState("food");
    const [loading, setLoading] = useState(false);




    async function handleSubmit(e) {
        e.preventDefault();
        if (loading) return; // prevent double click

        setLoading(true);

        console.log(amount, category, type, source);

        await fetch("http://localhost/expense-tracker/tracker/backend/transaction.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                amount: amount,
                type: type,
                source: type === "income" ? source : null,
                category: type === "expense" ? category : null
            })
        });
    }
    return (
        <div className="modal">
            <div className="modal-content">

                {/* <p>{type === "income" ? "Total Income" : "Total Expense"}</p> */}

                {type === "income" && (
                    <form id="modalForm" onSubmit={handleSubmit}>
                        <div>
                            <label>Amount</label>
                            <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
                        </div>

                        <div>
                            <label>Source</label>
                            <select value={source} onChange={(e) => { setSource(e.target.value) }}>
                                <option value="salary">Salary</option>
                                <option value="freelance">Freelance</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                        <button disabled={!amount}>Add income</button>
                    </form>
                )}

                {type === "expense" && (
                    <form id="modalForm" onSubmit={handleSubmit}>
                        <div>
                            <label>Amount</label>
                            <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
                        </div>

                        <div>
                            <label>Category</label>
                            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option value="food">Food</option>
                                <option value="shopping">Shopping</option>
                                <option value="travel">Travel</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                        <button disabled={!amount}>Add Expense</button>
                    </form>
                )}

                <button className="dltModal" onClick={() => setShow(false)}>
                    <GiCrossMark />
                </button>

            </div>
        </div>
    );
}

export default Modal;