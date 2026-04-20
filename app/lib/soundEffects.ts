// Sound effects using Web Audio API - no external files needed
// This generates the sounds programmatically

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
    const audioContext = getAudioContext();
    const now = audioContext.currentTime;

    // Create a happy ascending tone
    const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
    const noteDuration = 0.15;

    notes.forEach((frequency, index) => {
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();

      osc.connect(gain);
      gain.connect(audioContext.destination);

      osc.type = "sine";
      osc.frequency.value = frequency;

      gain.gain.setValueAtTime(0.3, now + index * noteDuration);
      gain.gain.exponentialRampToValueAtTime(
        0.01,
        now + index * noteDuration + noteDuration - 0.01,
      );

      osc.start(now + index * noteDuration);
      osc.stop(now + index * noteDuration + noteDuration);
    });
  } catch (error) {
    console.log("Audio context not available or blocked");
  }
};

export const playWrongSound = () => {
  try {
    const audioContext = getAudioContext();
    const now = audioContext.currentTime;

    // Create a sad descending buzz
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(audioContext.destination);

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(400, now);
    osc.frequency.exponentialRampToValueAtTime(100, now + 0.3);

    filter.type = "highpass";
    filter.frequency.value = 200;

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

    osc.start(now);
    osc.stop(now + 0.3);
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
