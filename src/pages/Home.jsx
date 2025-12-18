import "./Home.css";

export default function Home() {
  return (
    <div className="dashboard">
      <h1>Smart Security System</h1>
      <p className="subtitle">
        Monitor and track security activity in real time
      </p>

      <div className="card">
        <h2>🔐 Security Activity Logs</h2>
        <p className="empty">No activity recorded yet</p>
      </div>
    </div>
  );
}
