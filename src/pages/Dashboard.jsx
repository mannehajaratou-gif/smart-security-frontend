import { useEffect, useState } from "react"

function Dashboard() {
  const [logs, setLogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://127.0.0.1:8000/logs")
      .then(res => res.json())
      .then(data => {
        setLogs(data)
        setLoading(false)
      })
      .catch(err => {
        console.error("Error loading logs:", err)
        setLoading(false)
      })
  }, [])

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Security Activity Logs</h2>

      {loading && (
        <p className="text-gray-500">Loading logs...</p>
      )}

      {!loading && logs.length === 0 && (
        <p className="text-gray-500">No activity recorded yet</p>
      )}

      <div className="grid gap-4">
        {logs.map(log => (
          <div
            key={log.id}
            className="bg-white rounded-lg shadow p-4 flex items-center justify-between"
          >
            <div>
              <p className="font-semibold text-lg">{log.name}</p>
              <p className="text-sm text-gray-600">{log.action}</p>
              <p className="text-xs text-gray-400">
                {new Date(log.timestamp).toLocaleString()}
              </p>
            </div>

            {log.image_url && (
              <a
                href={log.image_url}
                target="_blank"
                className="text-blue-600 text-sm hover:underline"
              >
                View Image
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard
