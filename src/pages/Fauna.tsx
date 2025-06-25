
import Header from "@/components/Header";
import AudioPlayer from "@/components/AudioPlayer";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

const faunaData = {
  "Aves": [
    {
      id: 1,
      title: "Cigüeña Blanca",
      description: "Visitante habitual en primavera, anida en campanarios y torres altas del pueblo.",
      image: "/fauna/fauna1.jpg"
    },
    {
      id: 2,
      title: "Golondrina Común",
      description: "Llega cada año desde África, construye nidos de barro bajo los aleros.",
      image: "/fauna/fauna2.jpg"
    },
    {
      id: 3,
      title: "Gorrión Común",
      description: "Residente permanente, muy sociable y adaptado a la vida urbana.",
      image: "/fauna/fauna3.jpg"
    },
    {
      id: 4,
      title: "Mirlo Común",
      description: "Su melodioso canto se escucha al amanecer desde los jardines del pueblo.",
      image: "/fauna/fauna1.jpg"
    }
  ],
  "Mamíferos": [
    {
      id: 1,
      title: "Conejo de Monte",
      description: "Habita en los matorrales cercanos, muy activo durante el crepúsculo.",
      image: "/fauna/fauna2.jpg"
    },
    {
      id: 2,
      title: "Zorro Común",
      description: "Cazador nocturno que se aproxima al pueblo en busca de alimento.",
      image: "/fauna/fauna3.jpg"
    },
    {
      id: 3,
      title: "Murciélago Común",
      description: "Controla la población de insectos volando al atardecer.",
      image: "/fauna/fauna1.jpg"
    }
  ],
  "Insectos": [
    {
      id: 1,
      title: "Mariposa Monarca",
      description: "Polinizadora esencial, vuela entre las flores silvestres de los campos.",
      image: "/fauna/fauna2.jpg"
    },
    {
      id: 2,
      title: "Abeja Melífera",
      description: "Fundamental para la polinización de cultivos y plantas ornamentales.",
      image: "/fauna/fauna3.jpg"
    },
    {
      id: 3,
      title: "Libélula Azul",
      description: "Habita cerca de fuentes y acequias, cazadora eficaz de mosquitos.",
      image: "/fauna/fauna1.jpg"
    },
    {
      id: 4,
      title: "Grillo de Campo",
      description: "Su característico canto nocturno forma parte de la banda sonora rural.",
      image: "/fauna/fauna2.jpg"
    }
  ],
  "Reptiles": [
    {
      id: 1,
      title: "Lagarto Común",
      description: "Reptil inofensivo que toma el sol en muros y rocas durante el día.",
      image: "/fauna/fauna3.jpg"
    },
    {
      id: 2,
      title: "Gecko Común",
      description: "Pequeño reptil nocturno que habita en grietas de paredes antiguas.",
      image: "/fauna/fauna1.jpg"
    },
    {
      id: 3,
      title: "Culebra de Escalera",
      description: "Serpiente no venenosa que controla poblaciones de roedores.",
      image: "/fauna/fauna2.jpg"
    }
  ]
};

const Fauna = () => {
  return (
    <div className="min-h-screen bg-[#E9DDC8]/10 overflow-hidden relative">
      <Header />
      
      <main className="container mx-auto px-4 pt-20 pb-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-semibold text-gray-900 mb-8 text-center animate-fade-in">
            Fauna de Fortaleny
          </h1>
          
          <Tabs defaultValue="Aves" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 h-auto p-1 bg-slate-100/80">
              <TabsTrigger 
                value="Aves" 
                className="text-sm py-2 px-3 data-[state=active]:bg-slate-900 data-[state=active]:text-slate-50 text-slate-600 rounded transition-all hover:bg-slate-200"
              >
                Aves
              </TabsTrigger>
              <TabsTrigger 
                value="Mamíferos" 
                className="text-sm py-2 px-3 data-[state=active]:bg-slate-900 data-[state=active]:text-slate-50 text-slate-600 rounded transition-all hover:bg-slate-200"
              >
                Mamíferos
              </TabsTrigger>
              <TabsTrigger 
                value="Insectos" 
                className="text-sm py-2 px-3 data-[state=active]:bg-slate-900 data-[state=active]:text-slate-50 text-slate-600 rounded transition-all hover:bg-slate-200"
              >
                Insectos
              </TabsTrigger>
              <TabsTrigger 
                value="Reptiles" 
                className="text-sm py-2 px-3 data-[state=active]:bg-slate-900 data-[state=active]:text-slate-50 text-slate-600 rounded transition-all hover:bg-slate-200"
              >
                Reptiles
              </TabsTrigger>
            </TabsList>
            
            {Object.entries(faunaData).map(([category, animals]) => (
              <TabsContent key={category} value={category} className="animate-fade-in">
                <div className="grid gap-4 md:gap-6 px-2 md:px-0">
                  {animals.map((animal) => (
                    <Card key={animal.id} className="transition-all duration-200 hover:shadow-md">
                      <CardContent className="p-0">
                        <div className="flex flex-col sm:flex-row">
                          <div className="w-full sm:w-32 h-32 sm:h-24 flex-shrink-0 p-3 sm:p-4">
                            <img
                              src={animal.image}
                              alt={animal.title}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                          <div className="flex-1 p-4 sm:p-6 sm:pl-2">
                            <CardTitle className="text-lg mb-2 text-gray-900">
                              {animal.title}
                            </CardTitle>
                            <CardDescription className="text-gray-700 leading-relaxed">
                              {animal.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>

      <AudioPlayer 
        audioTitle="Guía de Fauna"
        audioSrc="/fauna.m4a"
      />
    </div>
  );
};

export default Fauna;
