
import { useState } from "react";
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

const Flora = () => {
  const [selectedType, setSelectedType] = useState(sections.types[0]);

  return (
    <div className="min-h-screen bg-[#E9DDC8]/10">
      <Header />
      
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
