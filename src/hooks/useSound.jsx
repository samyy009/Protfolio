import React, { createContext, useContext, useState, useCallback } from 'react';

const SoundContext = createContext();

export const useSound = () => useContext(SoundContext);

export const SoundProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(true);

  const playSound = useCallback((frequency = 440, type = 'sine', duration = 0.1) => {
    if (isMuted) return;

    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    
    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + duration);
  }, [isMuted]);

  const playClick = () => playSound(800, 'square', 0.05);
  const playHover = () => playSound(400, 'sine', 0.02);
  const playToggle = () => isMuted ? playSound(600, 'sine', 0.1) : playSound(300, 'sine', 0.1);

  return (
    <SoundContext.Provider value={{ isMuted, setIsMuted, playClick, playHover, playToggle }}>
      {children}
    </SoundContext.Provider>
  );
};
