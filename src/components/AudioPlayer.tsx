
import { Volume2, Pause, Play } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

interface AudioPlayerProps {
  audioTitle: string;
  audioSrc: string;
}

const AudioPlayer = ({ audioTitle, audioSrc }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex items-center gap-4 z-50">
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
        <h3 className="text-sm font-medium">{audioTitle}</h3>
        <div className="h-1 bg-gray-200 rounded-full mt-2">
          <div className="h-full w-1/3 bg-[#86A789] rounded-full" />
        </div>
      </div>
      <Button variant="ghost" size="icon" className="h-10 w-10">
        <Volume2 className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default AudioPlayer;
