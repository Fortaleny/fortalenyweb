
import { useState } from "react";
import Header from "@/components/Header";
import AudioPlayer from "@/components/AudioPlayer";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

const floraData = [
  // Árboles
  {
    id: 1,
    title: "Pino Mediterráneo",
    description: "Árbol perenne característico de nuestra región, resistente a la sequía y con copa en forma de parasol.",
    image: "/flores/flor1.jpg"
  },
  {
    id: 2,
    title: "Olivo Centenario",
    description: "Símbolo de la agricultura tradicional valenciana, algunos ejemplares superan los 300 años de antigüedad.",
    image: "/flores/flor2.webp"
  },
  {
    id: 3,
    title: "Algarrobo",
    description: "Árbol de frutos dulces muy valorado históricamente, adaptado perfectamente al clima mediterráneo.",
    image: "/flores/flor3.avif"
  },
  // Flores
  {
    id: 4,
    title: "Amapola Silvestre",
    description: "Flores rojas que tiñen los campos en primavera, símbolo de la belleza natural efímera.",
    image: "/flores/flor2.webp"
  },
  {
    id: 5,
    title: "Margarita Común",
    description: "Flores blancas con centro amarillo que adornan prados y cunetas durante todo el año.",
    image: "/flores/flor3.avif"
  },
  {
    id: 6,
    title: "Lavanda Silvestre",
    description: "Aromática planta que perfuma el aire y atrae a las abejas con sus espigas violáceas.",
    image: "/flores/flor1.jpg"
  },
  {
    id: 7,
    title: "Diente de León",
    description: "Planta medicinal de flores amarillas que se transforma en esferas de semillas voladoras.",
    image: "/flores/flor2.webp"
  },
  // Arbustos
  {
    id: 8,
    title: "Romero",
    description: "Arbusto aromático perenne usado en la cocina tradicional y como planta medicinal.",
    image: "/flores/flor3.avif"
  },
  {
    id: 9,
    title: "Tomillo",
    description: "Pequeño arbusto de intenso aroma que cubre laderas y es esencial en la gastronomía local.",
    image: "/flores/flor1.jpg"
  },
  {
    id: 10,
    title: "Jara Blanca",
    description: "Arbusto de flores blancas que florece en primavera y resiste bien los veranos secos.",
    image: "/flores/flor2.webp"
  }
];

const Flora = () => {
  return (
    <div className="min-h-screen bg-[#E9DDC8]/10 overflow-hidden relative">
      <Header />
      
      <main className="container mx-auto px-4 pt-20 pb-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-semibold text-gray-900 mb-8 text-center animate-fade-in">
            Flora de Fortaleny
          </h1>
          
          <div className="mb-8 p-6 bg-white/80 rounded-lg shadow-sm animate-fade-in">
            <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              Descubre la rica diversidad vegetal de Fortaleny, donde la naturaleza mediterránea se despliega en toda su magnificencia. 
              Desde majestuosos árboles centenarios hasta delicadas flores silvestres, nuestro territorio alberga una extraordinaria 
              variedad de especies que han sabido adaptarse al clima y suelo de la región. Cada planta cuenta una historia de 
              resistencia y belleza, formando un ecosistema único que define el paisaje de nuestro querido pueblo.
            </p>
          </div>
          
          <div className="grid gap-4 md:gap-6 px-2 md:px-0 animate-fade-in">
            {floraData.map((plant) => (
              <Card key={plant.id} className="transition-all duration-200 hover:shadow-md">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 h-32 sm:h-24 flex-shrink-0 p-3 sm:p-4">
                      <img
                        src={plant.image}
                        alt={plant.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1 p-4 sm:p-6 sm:pl-2">
                      <CardTitle className="text-lg mb-2 text-gray-900">
                        {plant.title}
                      </CardTitle>
                      <CardDescription className="text-gray-700 leading-relaxed">
                        {plant.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <AudioPlayer 
        audioTitle="Guía de Flora"
        audioSrc="/flor.m4a"
      />
    </div>
  );
};

export default Flora;
