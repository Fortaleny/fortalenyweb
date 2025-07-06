
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
  "OCELLS": [
    {
      id: 1,
      title: "Fotja comuna (Fulica atra)",
      description: "Aquest simpàtic ocell té la seva principal característica en el seu pic i “escudete” que presenten de color blanc, des de lluny semblen de color negrós però en realitat presenten tons grisencs. Li agraden les aigües tranquil·les i amb abundant vegetació, alimentant-se d'aquesta. Durant els mesos de maig a juny se'ls pot veure acompanyades per les seves meravelloses cries, de color marró i cara i coll blanquinosos.",
      image: "/fauna/Focha.jpg"
    },
    {
      id: 2,
      title: "Polla d'aigua/polla d'aigua (Gallinula chloropus)",
      description: "Inconfusible pel seu “escudete” vermell i escaig vermell i groc, de tonalitat verdosa-blavosa i potes grogues que es tornen vermelles en el tars. Té actituds molt similars a la gallina de terra, ja que caboteja molt, d'aquí el seu nom. S'alimenta, principalment, de vegetació i pot arribar a bussejar per a buscar menjar. Abunda en zona d'arrossars, per la qual cosa la veiem fàcilment en aquesta zona. La cria s'observa en els mesos de maig a juny, obtenint una tonalitat marró pàl·lida.",
      image: "/fauna/Gallineta.jpg"
    },
    {
      id: 3,
      title: "Collverd (Anas platyrhynchos)",
      description: "Mascle inconfusible pel seu color verd brillant (el qual li dona el nom), collaret blanc i escaig groc, de major grandària que les femelles, les quals presenten un plomatge brunenc clapejat, ressaltant únicament el “espejuelo”, el qual presenta un color blau i violeta, igual que el mascle. La seva principal alimentació és la vegetació aquàtica, encara que no li importa ingerir insectes, cucs o petits peixos. Es pot veure el festeig de les parelles a partir del mes de febrer i sobre els mesos de maig a juny a les cries acompanyant a les mares, les quals poden nedar i bussejar a les poques hores de vida.",
      image: "/fauna/Coll-vert.jpg"
    },
    {
      id: 4,
      title: "Oreneta comuna (Hirundo rustica) i Avió comú (Delichon urbicum)",
      description: "Ens brinden amb la seva magnífica presència durant els mesos càlids i estivals, presentant els seus balls en vol sobre el riu a la recerca de menjar (insectes, principalment) i per a recollir fang amb el qual fabriquen els seus nius als balcons i façanes. L'oreneta sol volar a menor altura que l'avió comú i la seva principal diferència es troba en el plomatge i fisiologia: l'oreneta una mica més llarga, front i “barbejo” vermells i collaret negre són els seus principals característiques. L'avió caracteritzat pel seu plomatge blavós en la part dorsal i part ventral blanca, durant el vol inconfusible pel seu “obispillo” blanc.Una característica molt peculiar de totes dues espècies és que sempre que tornen habiten els mateixos nius que van construir amb anterioritat, per això és important no destruir les seves llars, els quals els porta massa temps i energia tornar-los a construir. ",
      image: "/fauna/Golondrina.jpg"
    },
    {
      id: 5,
      title: "Blauet (Alcedo atthis)",
      description: "Quan vegis passar una fletxa blava, pràcticament imperceptible a l'ull humà, aquí està aquesta preciositat d'ocell, la cridarem “la fada del riu”. Presenta un viu colorit, amb cap i escaig grans i potes curtes. Li agraden les zones tranquil·les, sense pràcticament contaminació acústica, posant-se en branques de la vegetació de les ribes i excava nius en els talussos.Es capbussa en l'aigua per a pescar, sent la seva alimentació des de larves, insectes aquàtics, amfibis, capgrossos… Un regal quan et brinda amb la seva presència!",
      image: "/fauna/Martinpescador.jpg"
    }
  ],
  "AMBFIBIS I REPTILS": [
    {
      id: 1,
      title: "Gripau comú (Buf spinosus)",
      description: "Gripau que li agraden les zones aquàtiques, de tamany considerablement gran, des de 120 a 180 cm de longitud, sent les femelles més grans que els mascles. Presenten un color marró, vermellós o ataronjat, extremitats curtes i robustes i iris vermellós, característica que permet no confondre-ho amb altres exemplars de la mateixa família. Presenten activitat nocturna excepte en època de zel que poden veure's durant el dia, no són difícils de veure per la seva grandària, però sí pel seu camuflatge. L'època reproductora és des de gener a març i la posada d'ous es fa en l'aigua,  apareixent els capgrossos després de 3-4 mesos després, formant agregacions en les ribes.",
      image: "/fauna/Sapo.jpg"
    },
    {
      id: 2,
      title: "Colobra viperina (Natrix maura)",
      description: "Aquesta serp aconsegueix una grandària entre 50-70 cm, sent les femelles les que aconsegueixen major longitud, i de cap triangular. Cal aclarir que NO és verinosa, tenint la peculiaritat que quan se sent amenaçada és capaç de fer semblar el seu cap encara més triangular. De tonalitat brunenca amb taques laterals. És aquàtica, sent molt bona nedadora i bussejadora. S'alimenta, principalment, de peixos i amfibis, encara que també pot caçar insectes i invertebrats. Amb l'augment de la temperatura comença la seva època de reproducció i de cria.",
      image: "/fauna/Culebra.jpg"
    }
  ],
  "TORTUGUES I PEIXOS": [
    {
      id: 1,
      title: "Tortuga d'estany (Emys orbicularis)",
      description: "Li agraden les zones d'aigua d'escàs corrent i amb vegetació, la qual forma part 	de la seva alimentació, però a més pot alimentar-se d'insectes, amfibis, peixos i carronya. Presenten una grandària petita, entre 20-30 cm, i una coloració de la closca negra coberta per dibuixos grocs, sent les femelles més clares i presentant els mascles major longitud de cua. Amb activitat diürna, principalment en les primeres hores del matí, poden observar-se reposant sobre troncs i objectes flotants, si se sent amenaçada es llança a l'aigua, dirigint-se al fons, on s'enterra fins que passi el perill. Es troba en situació crítica al llarg del mediterrani, a causa de la presència de l’espècie invasora: la Trachemys scripta.",
      image: "/fauna/Europeoagua.jpg"
    },
    {
      id: 2,
      title: "Tortuga de rierol (Mauremys leprosa)",
      description: "Presentant un color marró en la seva closca, tornant-se verdós amb el pas del temps, rep aquest nom per les erosions que rep el mateix conforme els anys. En el coll es poden apreciar tres línies grogues. Poden aconseguir una longitud de 20cm, sent les femelles de major grandària. S'alimenten, principalment, de peixos, però, també, invertebrats, amfibis i mol·luscos.Durant els mesos de març a juliol s'aparien sota l'aigua i després d'uns mesos la 	femella fa la posada d'ous. Al cap d'unes setmanes les cries trenquen la closca. Finalment, durant els mesos més freds, hibernen en el fons de l'aigua.",
      image: "/fauna/LeprosoII.jpg"
    },
    {
      id: 3,
      title: "XXXX",
      description: "Habita cerca de fuentes y acequias, cazadora eficaz de mosquitos.",
      image: "/fauna/fauna1.jpg"
    },
    {
      id: 4,
      title: "XXX",
      description: "Su característico canto nocturno forma parte de la banda sonora rural.",
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
          
          <div className="mb-8 p-6 bg-white/80 rounded-lg shadow-sm animate-fade-in">
            <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              La fauna que pot trobar-se en zona de ribera és molt diversa i al llarg del Riu Xúquer varia segons l'altitud en la qual ens trobem. Aquí parlarem d'aquelles espècies que veiem amb facilitat cap al final de la seva desembocadura, en concret en l'Assut de Fortaleny. Encara centrant-nos en aquesta única part del riu, continuen sent nombrosos els grups d'animals i espècies de cadascun d'ells que podem albirar. Aquí us deixem les espècies més característiques que trobem en aquesta zona, que per les seves aigües tranquil·les, climatologia, temperatura de l'aigua, tipus d'alimentació, presència anual i sinergia entre totes elles, són més destacables.
            </p>
          </div>
          
          <Tabs defaultValue="OCELLS" className="w-full">
            <div className="mx-2 sm:mx-4 md:mx-8">
              <TabsList className="grid w-full grid-cols-3 mb-8 h-auto p-1 bg-green-100/80">
                <TabsTrigger 
                  value="OCELLS" 
                  className="text-[10px] xs:text-xs sm:text-sm py-2 px-1 xs:px-2 sm:px-3 data-[state=active]:bg-green-600 data-[state=active]:text-white text-green-700 rounded transition-all whitespace-nowrap overflow-hidden text-ellipsis min-h-[2.5rem] flex items-center justify-center leading-tight"
                >
                  OCELLS
                </TabsTrigger>
                <TabsTrigger 
                  value="AMBFIBIS I REPTILS" 
                  className="text-[9px] xs:text-[10px] sm:text-sm py-2 px-1 xs:px-2 sm:px-3 data-[state=active]:bg-green-600 data-[state=active]:text-white text-green-700 rounded transition-all whitespace-nowrap overflow-hidden text-ellipsis min-h-[2.5rem] flex items-center justify-center leading-tight"
                >
                  AMBFIBIS I REPTILS
                </TabsTrigger>
                <TabsTrigger 
                  value="TORTUGUES I PEIXOS" 
                  className="text-[9px] xs:text-[10px] sm:text-sm py-2 px-1 xs:px-2 sm:px-3 data-[state=active]:bg-green-600 data-[state=active]:text-white text-green-700 rounded transition-all whitespace-nowrap overflow-hidden text-ellipsis min-h-[2.5rem] flex items-center justify-center leading-tight"
                >
                  TORTUGUES I PEIXOS
                </TabsTrigger>
              </TabsList>
            </div>
            
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
