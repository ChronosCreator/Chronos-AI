"use client";

import { useEffect, useRef, useState } from "react";
const DEFAULT_LEVELS = Array(24).fill(8);

export default function useAudioVisualizer(
  stream: MediaStream | null
) {
 

const [levels, setLevels] =
  useState<number[]>(DEFAULT_LEVELS);

  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!stream) {
  if (animationRef.current !== null) {
    cancelAnimationFrame(animationRef.current);
  }

      if (
        audioContextRef.current &&
        audioContextRef.current.state !== "closed"
      ) {
        audioContextRef.current.close();
      }

      audioContextRef.current = null;

      return;
    }

    const audioContext = new AudioContext();

    audioContextRef.current = audioContext;

    const analyser = audioContext.createAnalyser();

    analyser.fftSize = 64;

    analyserRef.current = analyser;

    const source =
      audioContext.createMediaStreamSource(stream);

    source.connect(analyser);

    const data = new Uint8Array(
      analyser.frequencyBinCount
    );

    const animate = () => {
      analyser.getByteFrequencyData(data);

      setLevels(
        Array.from({ length: 24 }, (_, i) => {
          const value = data[i] ?? 0;
          return Math.max(8, value * 0.5);
        })
      );

      animationRef.current =
        requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }

      if (
        audioContextRef.current &&
        audioContextRef.current.state !== "closed"
      ) {
        audioContextRef.current.close();
      }
setLevels(DEFAULT_LEVELS);
      audioContextRef.current = null;
      
    };
  }, [stream]);

  return levels;
}