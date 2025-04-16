
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import ImageCarousel from "@/components/ImageCarousel";
import AudioPlayer from "@/components/AudioPlayer";
import { Bird } from "lucide-react";
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
  const [showBirds, setShowBirds] = useState(true);
  
  useEffect(() => {
    // Hide birds after animation completes
    const timer = setTimeout(() => {
      setShowBirds(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#E9DDC8]/10 overflow-hidden relative">
      <Header />
      
      {showBirds && (
        <div className="absolute w-full h-full pointer-events-none z-10">
          <Bird 
            className="absolute text-gray-800 animate-bird-1"
            size={24}
            style={{
              top: '30%',
              left: '10%',
              animation: 'bird-fly-1 2s forwards'
            }}
          />
          <Bird 
            className="absolute text-gray-800 animate-bird-2" 
            size={30}
            style={{
              top: '25%',
              left: '40%',
              animation: 'bird-fly-2 1.7s forwards'
            }}
          />
          <Bird 
            className="absolute text-gray-800 animate-bird-3" 
            size={20}
            style={{
              top: '35%',
              left: '70%',
              animation: 'bird-fly-3 1.5s forwards'
            }}
          />
          <Bird 
            className="absolute text-gray-700 animate-bird-4" 
            size={26}
            style={{
              top: '45%',
              left: '20%',
              animation: 'bird-fly-4 2.2s forwards'
            }}
          />
          <Bird 
            className="absolute text-gray-900 animate-bird-5" 
            size={22}
            style={{
              top: '20%',
              left: '60%',
              animation: 'bird-fly-5 1.8s forwards'
            }}
          />
        </div>
      )}
      
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
