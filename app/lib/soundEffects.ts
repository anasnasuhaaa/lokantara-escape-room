// Sound effects using audio files from public/sounds

interface AudioContextType {
  audioContext: AudioContext | null;
}

let audioState: AudioContextType = {
  audioContext: null,
};

const getAudioContext = (): AudioContext => {
  if (!audioState.audioContext) {
    audioState.audioContext = new (
      window.AudioContext || (window as any).webkitAudioContext
    )();
  }
  return audioState.audioContext;
};

export const playCorrectSound = () => {
  try {
    // Resume audio context if suspended
    const audioContext = getAudioContext();
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    // Play the correct sound file
    const audio = new Audio("/sounds/correct.mp3");
    audio.play().catch((error) => {
      console.log("Could not play correct sound:", error);
    });
  } catch (error) {
    console.log("Audio context not available or blocked");
  }
};

export const playWrongSound = () => {
  try {
    // Resume audio context if suspended
    const audioContext = getAudioContext();
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    // Play the wrong sound file
    const audio = new Audio("/sounds/wrong.mp3");
    audio.play().catch((error) => {
      console.log("Could not play wrong sound:", error);
    });
  } catch (error) {
    console.log("Audio context not available or blocked");
  }
};

export const resumeAudioContext = async () => {
  try {
    const audioContext = getAudioContext();
    if (audioContext.state === "suspended") {
      await audioContext.resume();
    }
  } catch (error) {
    console.log("Could not resume audio context");
  }
};
