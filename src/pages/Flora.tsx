
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import ImageCarousel from "@/components/ImageCarousel";
import AudioPlayer from "@/components/AudioPlayer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const floraImages = [
  { url: "https://source.unsplash.com/photo-1465146344425-f00d5f5c8f07", alt: "Orange flowers" },
  { url: "https://source.unsplash.com/photo-1509316975850-ff9c5deb0cd9", alt: "Pine trees" },
  { url: "https://source.unsplash.com/photo-1518495973542-4542c06a5843", alt: "Sunlit trees" },
];

const sections = {
  title: "Flora de Fortaleny",
  types: ["Árboles", "Flores", "Arbustos"],
  content: {
    "Árboles": "Los árboles más comunes en Fortaleny son los pinos y olivos...",
    "Flores": "En primavera, nuestros campos se llenan de amapolas y margaritas...",
    "Arbustos": "El romero y el tomillo son arbustos típicos de nuestra región...",
  }
};

const Leaf = ({ style }) => (
  <div 
    className="absolute pointer-events-none"
    style={style}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 21C6 21 3 17 3 12C3 7 6 3 12 3C18 3 21 7 21 12C21 17 18 21 18 21" 
        stroke="#86A789" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 21V12" stroke="#86A789" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

const Flora = () => {
  const [selectedType, setSelectedType] = useState(sections.types[0]);
  const [showLeaves, setShowLeaves] = useState(true);
  
  useEffect(() => {
    // Hide leaves after animation completes
    const timer = setTimeout(() => {
      setShowLeaves(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  // Generate random positions for leaves
  const leaves = Array.from({ length: 12 }, (_, i) => ({
    top: `${Math.random() * 60 + 10}%`,
    left: `${-Math.random() * 10}%`,
    size: Math.random() * 0.5 + 0.7,
    delay: Math.random() * 0.8,
    duration: Math.random() * 1 + 2,
    rotation: Math.random() * 360,
  }));

  return (
    <div className="min-h-screen bg-[#E9DDC8]/10 overflow-hidden relative">
      <Header />
      
      {showLeaves && (
        <div className="absolute w-full h-full pointer-events-none z-10">
          {leaves.map((leaf, index) => (
            <Leaf
              key={index}
              style={{
                top: leaf.top,
                left: leaf.left,
                transform: `scale(${leaf.size}) rotate(${leaf.rotation}deg)`,
                animation: `leaf-wind ${leaf.duration}s ${leaf.delay}s forwards ease-in-out`,
              }}
            />
          ))}
        </div>
      )}
      
      <main className="container mx-auto px-4 pt-24 pb-24">
        <section className="mb-16 scroll-mt-20">
          <ImageCarousel images={floraImages} />
          <div className="mt-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 animate-fade-in">{sections.title}</h2>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sections.types.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <p key={selectedType} className="text-gray-700 leading-relaxed animate-fade-in">
              {sections.content[selectedType]}
            </p>
          </div>
        </section>
      </main>

      <AudioPlayer 
        audioTitle={`Guía de ${selectedType}`}
        audioSrc="/demo-audio.mp3"
      />
    </div>
  );
};

export default Flora;
