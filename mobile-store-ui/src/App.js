import React, { useState } from "react";
import "./App.css";

function App() {
  // Customer state
  const [customer, setCustomer] = useState({
    customer_id: "",
    customer_name: "",
    email_id: "",
  });

  // Mobile state
  const [mobile, setMobile] = useState({
    brand_id: "",
    brand_name: "",
    price: "",
  });

  // Transaction state
  const [transaction, setTransaction] = useState({
    customer_id: "",
    mobile_id: "",
    quantity: "",
  });

  const [mobiles, setMobiles] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [totalSales, setTotalSales] = useState(0);

  // Add customer
  const addCustomer = () => {
    alert("Customer Added Successfully");
    console.log(customer);
  };

  // Add mobile
  const addMobile = () => {
    setMobiles([...mobiles, mobile]);
    alert("Mobile Added Successfully");
  };

  // Create transaction
  const createTransaction = () => {
    setTransactions([...transactions, transaction]);
    alert("Transaction Created Successfully");
  };

  // Calculate total sales
  const calculateTotalSales = () => {
    let total = 0;
    transactions.forEach((t) => {
      const mob = mobiles.find((m) => m.brand_id === t.mobile_id);
      if (mob) {
        total += mob.price * t.quantity;
      }
    });
    setTotalSales(total);
  };

  return (
    <div className="app">
      <h1>📱 Mobile E-Commerce App</h1>

      {/* Customer Section */}
      <div className="card">
        <h2>Customer Details</h2>
        <input
          placeholder="Customer ID"
          onChange={(e) =>
            setCustomer({ ...customer, customer_id: e.target.value })
          }
        />
        <input
          placeholder="Customer Name"
          onChange={(e) =>
            setCustomer({ ...customer, customer_name: e.target.value })
          }
        />
        <input
          placeholder="Email ID"
          onChange={(e) =>
            setCustomer({ ...customer, email_id: e.target.value })
          }
        />
        <button onClick={addCustomer}>Add Customer</button>
      </div>

      {/* Mobile Section */}
      <div className="card">
        <h2>Mobile Details</h2>
        <input
          placeholder="Brand ID"
          onChange={(e) =>
            setMobile({ ...mobile, brand_id: e.target.value })
          }
        />
        <input
          placeholder="Brand Name"
          onChange={(e) =>
            setMobile({ ...mobile, brand_name: e.target.value })
          }
        />
        <input
          placeholder="Price"
          type="number"
          onChange={(e) =>
            setMobile({ ...mobile, price: Number(e.target.value) })
          }
        />
        <button onClick={addMobile}>Add Mobile</button>
      </div>

      {/* Transaction Section */}
      <div className="card">
        <h2>Transaction Details</h2>
        <input
          placeholder="Transaction ID"
          onChange={(e) =>
            setTransaction({ ...transaction, customer_id: e.target.value })
          }
        />
        <input
          placeholder="Mobile ID"
          onChange={(e) =>
            setTransaction({ ...transaction, mobile_id: e.target.value })
          }
        />
        <input
          placeholder="Quantity"
          type="number"
          onChange={(e) =>
            setTransaction({ ...transaction, quantity: Number(e.target.value) })
          }
        />
        <button onClick={createTransaction}>Create Transaction</button>
      </div>

      {/* Total Sales */}
      <div className="card">
        <h2>Total Sales</h2>
        <button onClick={calculateTotalSales}>Get Total Sales</button>
        <h3>₹ {totalSales}</h3>
      </div>
    </div>
  );
}

export default App;