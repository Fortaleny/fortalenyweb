
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
    {
      id: 1,
      title: "Canyís (Phgramites australis)",
      description: "Característica per trobar-se en zones d'aigua és una espècie molt confusible amb la canya comuna (“Arundo donax”), per la seva gran semblança. No obstant això, presenta unes certes diferències per a distingir una de l'altra, com la presència de les seves fulles més llises i fines i que no presenta nusos. Pot aconseguir els 3 metres d'altura i les flors són plomalls sedosos de color vermellós, tornant-se més marrons després. Els Canyissars té un alt valor ecològic, ja que molts ocells els utilitzen de refugi i granja. Pots observar-los en la riba d'aquest propi arenal.",
      image: `${import.meta.env.BASE_URL}flores/Carrizo.jpg`
    },
    {
      id: 2,
      title: "Lliri groc (Iris psudacorus)",
      description: "Espècie autòctona molt utilitzada en restauració de riberes i marenys. Característica per agradar-li les zones molt humides i/o amb aigua, poden viure amb sol directe o zones de semiombra. Presenten un creixement ràpid i rizomes gruixuts. Presenten fulles llargues, podent aconseguir més d'un metre de longitud, i amples de color verd marró fosc. Després de la seva floració a la primavera (entre els mesos d'abril-juliol) es poden 	apreciar flors de gran grandària, nombroses i de color groc, aportant bellesa a la riba del riu junt les seves companyes, i presenta llavors brunenques. És una planta tòxica després de la seva ingestió.",
      image: `${import.meta.env.BASE_URL}flores/Lirio.jpg`
    },
    {
      id: 3,
      title: "Salzes - Gerga i Mimbrera (Salix eleagnos i Salix purpurea)",
      description: "En aquest arenal podem trobar tots dos tipus de salzes, tots dos autòctons i molt utilitzats per a restaurar llits i fixar talussos. A les dues espècies els agrada estar prop de l'aigua, però una mica allunyades de la riba. Totes dues espècies són molt semblants, les veurem  per separat per a poder identificar-les i conèixer-les una mica millor. Per a començar, totes dues espècies s'utilitzen per a obtenir vímet per al seu ús en cistelleria. Aconsegueixen una altura de 6m i les seves rametes presenten tonalitats grogues i vermelloses. La seva principal diferència està en les fulles: en la Gerga presenten un feix verd fosc i el revés amb pèl i blanquinós, les fulles de la mimbrera estan desproveïdes de pèls i són brillants. A més, la gerga les tenen alternes i la mimbrera oposades. Com a curiositat, que el Salix purpurea és precursor del conegut àcid salicílic, emprat per a elaborar l'aspirina. ",
      image: `${import.meta.env.BASE_URL}flores/Sarga.jpg`
    },
    {
      id: 4,
      title: "Jonc rodó i Jonc comú (Juncus acutus i Scirpus holoschoenus)",
      description: "Totes dues espècies són característiques en zona de ribera, aquí en l'arenal pots trobar les dues espècies junt a la riba del riu. El jonc rodó és el clàssic jonc d'albufera que forma grans mates denses amb les fulles i tiges punxants, aconseguint els 2 metres d'altura i presenta tiges verdes fosques, la final dels quals creixen les seves flors marrons vermelloses i fruits rosats. El seu ús tradicional és la cistelleria, pitjor també com a planta medicinal. Conegut com a Jonc per la seva gran semblança als mateix, pertany a una altra família de flora. Li agrada estar en zones pròximes de cursos d'aigua, per la qual cosa és fàcil trobar-ho pròxim als rius, al sol o zones de semiombra. com ocorre en l'Arenal de Fortaleny. Planta robusta que presenta tiges toves, gran diferència amb els joncs, i inflorescències esfèriques de color marró. Molt utilitzat en restauracions ambientals d'aiguamolls.",
      image: `${import.meta.env.BASE_URL}flores/Juncus.jpg`
    },
    {
      id: 5,
      title: "Avellanillo o arraclán (Frangula alnus)",
      description: "Arbust o petit arbre, amb abundants branques que pot aconseguir aproximadament els 10 metres, presenta una escorça vermellosa-grisa quan és jove, tornant-se negrosa amb el temps. Fulles amb forma ovalada, àpex agut i un verd intens pel feix i mat per el revés, són caduques i es troben alternes. Les flors apareixen solitàries, generalment i el seu fruit és una drupa de color vermellós, que es torna negra en madurar. Aquesta espècie es troba en els catàlegs d'espècies amenaçades i protegides de la Comunitat Valenciana.",
      image: `${import.meta.env.BASE_URL}flores/Avellanillo.jpg`
    }
  ]
;

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
              Observant al llarg de la riba del riu, durant el seu recorregut i a l'ample d'aquesta, es troben diverses famílies de flora que conformen la vegetació de ribera, ja siguen plantes autòctones com a invasores. Per a conèixer una mica més sobre ella, a continuació, es nomena les espècies autòctones més destacables que podem trobar al llarg de l'arenal. 
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
