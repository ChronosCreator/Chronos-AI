"use client";

import { Mic, Square } from "lucide-react";

import CandidateAvatar from "./CandidateAvatar";
import InterviewTimer from "./InterviewTimer";
import Waveform from "./Waveform";
import { useEffect } from "react";
import useRecorder from "@/hooks/useRecorder";
import useSpeechRecognition from "@/hooks/useSpeechRecognition";
import TranscriptPanel from "./TranscriptPanel";
import { useInterviewContext } from "@/contexts/InterviewContext";

export default function CandidatePanel() {
 const {
  isRecording,
  audioURL,
  stream,
  startRecording,
  stopRecording,
} = useRecorder();

  const {
  transcript,
  startListening,
  stopListening,
} = useSpeechRecognition();

const {
  setTranscript,
} = useInterviewContext();

useEffect(() => {
  setTranscript(transcript);
}, [transcript, setTranscript]);

  const handleStart = async () => {
    await startRecording();
    startListening();
  };

  const handleStop = async () => {
  stopRecording();
  stopListening();
};

  return (
    <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-cyan-300">
            Candidate
          </p>

          <h3 className="mt-1 text-2xl font-bold text-white">
            You
          </h3>

        </div>

        <div className="flex items-center gap-3">

          <div
            className={`h-3 w-3 rounded-full ${
              isRecording
                ? "animate-pulse bg-red-500"
                : "bg-slate-500"
            }`}
          />

          <span
            className={`text-sm ${
              isRecording
                ? "text-red-400"
                : "text-slate-400"
            }`}
          >
            {isRecording ? "Recording" : "Ready"}
          </span>

          {isRecording && <InterviewTimer />}

        </div>

      </div>

      {/* Avatar */}

      <div className="mt-10 flex justify-center">
        <CandidateAvatar />
      </div>

      {/* Waveform */}

      <div className="mt-10">
       <Waveform
  stream={stream}
  isRecording={isRecording}
/>
      </div>

      {/* Controls */}

      <div className="mt-10 flex justify-center">

        {isRecording ? (

          <button
            onClick={handleStop}
            className="flex items-center gap-3 rounded-2xl bg-red-500 px-6 py-3 font-semibold transition hover:scale-105"
          >
            <Square size={18} />
            Stop Recording
          </button>

        ) : (

          <button
            onClick={handleStart}
            className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold transition hover:scale-105"
          >
            <Mic size={18} />
            Start Recording
          </button>

        )}

      </div>

     <TranscriptPanel
  transcript={transcript}
/>

      {/* Recording Preview */}

      {audioURL && (
        <div className="mt-8">

          <p className="mb-3 text-center text-sm text-cyan-300">
            Recording Preview
          </p>

          <audio
            controls
            src={audioURL}
            className="w-full"
          />

        </div>
      )}

    </div>
  );
}