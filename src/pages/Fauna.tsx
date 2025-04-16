
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
  { url: "/fauna/fauna1.jpg", alt: "Fauna1" },
  { url: "/fauna/fauna2.jpg", alt: "Fauna2" },
  { url: "/fauna/fauna3.jpg", alt: "Fauna3" },
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
    <div className="min-h-screen bg-[#E9DDC8]/10 overflow-hidden relative">
      <Header />
      
      <main className="container mx-auto px-4 pt-16 pb-24">
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
        audioSrc="/fauna.m4a"
      />
    </div>
  );
};

export default Fauna;
