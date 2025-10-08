import { useState, useEffect } from 'react';
import axios from "axios";

function Counter() {
  const [count, setCount] = useState(0);

  const fetchCount = async () => {
    try {
      const res = await axios.get("http://localhost:5000/counter");
      setCount(res.data.count);
    } catch (err) {
      console.error("Error fetching count:", err);
    }
  };

  const handleClickIncre = async () => {
    try {
      const res = await axios.post("http://localhost:5000/counter/increment");
      setCount(res.data.count);
    } catch (err) {
      console.error("Error incrementing:", err);
    }
  };

  const handleClickDecre = async () => {
    try {
      const res = await axios.post("http://localhost:5000/counter/decrement");
      setCount(res.data.count);
    } catch (err) {
      console.error("Error decrementing:", err);
    }
  };

  useEffect(() => {
    fetchCount();
  }, []);

  return (
    <div style={{ padding: "20px", border: "2px solid #ccc" }}>
      <h2>Counter Project</h2>
      <button onClick={handleClickIncre}>+1</button>
      <p style={{ fontSize: "24px", margin: "10px" }}>{count}</p>
      <button onClick={handleClickDecre}>-1</button>
    </div>
  );
}

export default Counter;