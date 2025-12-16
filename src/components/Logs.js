import { useEffect, useState } from "react";
import { getLogs } from "../services/api";

export default function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    loadLogs();
  }, []);

  const loadLogs = async () => {
    const data = await getLogs();
    setLogs(data);
  };

  return (
    <div>
      <h2>Security Logs</h2>

      {logs.map((log, index) => (
        <div key={index}>
          <p><b>Name:</b> {log.name}</p>
          <p><b>Action:</b> {log.action}</p>
          <p><b>Image:</b> <a href={log.image_url}>View</a></p>
          <p><b>Time:</b> {log.time}</p>
          <hr/>
        </div>
      ))}
    </div>
  );
}
