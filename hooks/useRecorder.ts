"use client";
import { useRef, useState } from "react";

export default function useRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState("");
const [stream, setStream] = useState<MediaStream | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const chunks = useRef<Blob[]>([]);
const [permissionDenied, setPermissionDenied] =
  useState(false);
  const startRecording = async () => {
    try {
     let stream: MediaStream;

try {
  stream =
    await navigator.mediaDevices.getUserMedia({
      audio: true,
    });

  setPermissionDenied(false);

} catch {
  setPermissionDenied(true);
  return;
}

      streamRef.current = stream;
      setStream(stream);

      chunks.current = [];

      const recorder = new MediaRecorder(stream);

      mediaRecorder.current = recorder;

      recorder.ondataavailable = (event) => {
        chunks.current.push(event.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(chunks.current, {
          type: "audio/webm",
        });

        setAudioURL(URL.createObjectURL(blob));
      };

      recorder.start();

      setIsRecording(true);

    } catch (err) {
      console.error(err);
    }
  };

  const stopRecording = () => {
    mediaRecorder.current?.stop();

    streamRef.current?.getTracks().forEach((track) => track.stop());
    setStream(null);
    setIsRecording(false);
  };

  return {
  isRecording,
  audioURL,
  stream,
  permissionDenied,
  startRecording,
  stopRecording,
};
}