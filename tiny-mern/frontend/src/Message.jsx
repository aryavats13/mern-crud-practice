import { useState, useEffect } from 'react';
import axios from "axios";

function Message() {
  const [msg, setMsg] = useState("");

  const fetchMessage = async () => {
    try {
      const res = await axios.get("http://localhost:5000/message");
      setMsg(res.data.text);
    } catch (err) {
      console.log(err);
      setMsg("Error fetching message");
    }
  };

  const handleClick = async () => {
    try {
      const res = await axios.post("http://localhost:5000/message/click", { clicked: true });
      setMsg(res.data.text);
    } catch (err) {
      console.error(err);
      setMsg("Error sending click");
    }
  };

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <div style={{ marginBottom: "40px", padding: "20px", border: "2px solid rgba(204, 204, 204, 1)" }}>
      <h2>Message Project</h2>
      <h1>{msg}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Message;