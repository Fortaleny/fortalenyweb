
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

const faunaImages = [
  { url: "https://source.unsplash.com/photo-1472396961693-142e6e269027", alt: "Deer" },
  { url: "https://source.unsplash.com/photo-1466721591366-2d5fba72006d", alt: "Antelope and zebra" },
];

const sections = {
  title: "Fauna de Fortaleny",
  types: ["Aves", "Mamíferos", "Insectos"],
  content: {
    "Aves": "Las cigüeñas y golondrinas son visitantes habituales...",
    "Mamíferos": "Los conejos y zorros habitan en nuestros bosques...",
    "Insectos": "Las mariposas y abejas son fundamentales para nuestro ecosistema...",
  }
};

const Fauna = () => {
  const [selectedType, setSelectedType] = useState(sections.types[0]);

  return (
    <div className="min-h-screen bg-[#E9DDC8]/10">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-24">
        <section className="mb-16 scroll-mt-20">
          <ImageCarousel images={faunaImages} />
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

export default Fauna;
