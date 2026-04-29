import { useRef, useState } from "react";

export default function CameraCapture({ onCapture }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [isCameraOn, setIsCameraOn] = useState(false);
  const [error, setError] = useState("");

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      setIsCameraOn(true);
    } catch (err) {
      console.error(err);
      setError("Camera permission denied or not available");
    }
  };

  const captureImage = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    if (!video || !canvas) return;

    const videoWidth = video.videoWidth;
    const videoHeight = video.videoHeight;

    const scale = 0.4;

    canvas.width = videoWidth * scale;
    canvas.height = videoHeight * scale;

    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      video,
      0,
      0,
      videoWidth,
      videoHeight,
      0,
      0,
      canvas.width,
      canvas.height
    );

    const image = canvas.toDataURL("image/jpeg", 0.6);

    onCapture(image);
  };

  const stopCamera = () => {
    const stream = videoRef.current?.srcObject;

    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }

    setIsCameraOn(false);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow mt-4">
      <h3 className="font-bold mb-2">Selfie Capture</h3>

      {error && <p className="text-red-500">{error}</p>}

      <video
        ref={videoRef}
        autoPlay
        className="w-64 h-48 object-cover bg-black rounded"
      />

      <canvas ref={canvasRef} className="hidden" />

      <div className="flex gap-2 mt-3">
        {!isCameraOn ? (
          <button
            onClick={startCamera}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            Start Camera
          </button>
        ) : (
          <>
            <button
              onClick={captureImage}
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              Capture
            </button>

            <button
              onClick={stopCamera}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Stop
            </button>
          </>
        )}
      </div>
    </div>
  );
}