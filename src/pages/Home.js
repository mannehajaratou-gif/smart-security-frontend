
// Home.js
import React, { useEffect, useState } from "react";

const Home = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/logs`)
      .then((res) => res.json())
      .then((data) => {
        setLogs(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch logs", err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Smart Security System</h1>
      <h3>Security Activity Logs</h3>

      {loading && <p>Loading logs...</p>}

      {!loading && logs.length === 0 && (
        <p>No activity recorded yet</p>
      )}

      {!loading && logs.length > 0 && (
        <ul>
          {logs.map((log, index) => (
            <li key={index}>
              {log.message || JSON.stringify(log)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
