
import { Volume2, Pause, Play } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";

interface AudioPlayerProps {
  audioTitle: string;
  audioSrc: string;
}

const AudioPlayer = ({ audioTitle, audioSrc }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(audioSrc);
    
    audioRef.current.addEventListener('timeupdate', () => {
      if (audioRef.current) {
        const percentage = (audioRef.current.currentTime / audioRef.current.duration) * 100;
        setProgress(percentage);
      }
    });

    audioRef.current.addEventListener('ended', () => {
      setIsPlaying(false);
      setProgress(0);
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [audioSrc]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t p-4 flex items-center gap-4 z-50 animate-slide-up">
      <Button
        variant="ghost"
        size="icon"
        className="h-10 w-10"
        onClick={togglePlay}
      >
        {isPlaying ? (
          <Pause className="h-6 w-6" />
        ) : (
          <Play className="h-6 w-6" />
        )}
      </Button>
      <div className="flex-1">
        <h3 className="text-sm font-medium animate-fade-in">{audioTitle}</h3>
        <div className="h-1 bg-gray-200 rounded-full mt-2">
          <div 
            className="h-full bg-[#86A789] rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <Button variant="ghost" size="icon" className="h-10 w-10">
        <Volume2 className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default AudioPlayer;
