import { useEffect, useRef } from "react";

export default function CameraFeed() {
  const videoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(stream => {
        videoRef.current.srcObject = stream;
      })
      .catch(err => {
        console.error("Camera error:", err);
      });
  }, []);

  return (
    <div>
      <h3>Live Camera Feed</h3>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{ width: "100%", maxWidth: "500px", borderRadius: "10px" }}
      />
    </div>
  );
}
