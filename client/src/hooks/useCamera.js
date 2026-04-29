import { useRef, useState } from "react";

export const useCamera = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);

  const startCamera = async () => {
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video: true,
    });

    videoRef.current.srcObject = mediaStream;
    setStream(mediaStream);
  };

  const capture = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0);

    return canvas.toDataURL("image/png");
  };

  return {
    videoRef,
    canvasRef,
    startCamera,
    capture,
    stream,
  };
};