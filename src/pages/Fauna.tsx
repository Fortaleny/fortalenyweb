
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
      image: `${import.meta.env.BASE_URL}fauna/Focha.jpg`
    },
    {
      id: 2,
      title: "Polla d'aigua/polla d'aigua (Gallinula chloropus)",
      description: "Inconfusible pel seu “escudete” vermell i escaig vermell i groc, de tonalitat verdosa-blavosa i potes grogues que es tornen vermelles en el tars. Té actituds molt similars a la gallina de terra, ja que caboteja molt, d'aquí el seu nom. S'alimenta, principalment, de vegetació i pot arribar a bussejar per a buscar menjar. Abunda en zona d'arrossars, per la qual cosa la veiem fàcilment en aquesta zona. La cria s'observa en els mesos de maig a juny, obtenint una tonalitat marró pàl·lida.",
      image: `${import.meta.env.BASE_URL}fauna/Gallineta.jpg`
    },
    {
      id: 3,
      title: "Collverd (Anas platyrhynchos)",
      description: "Mascle inconfusible pel seu color verd brillant (el qual li dona el nom), collaret blanc i escaig groc, de major grandària que les femelles, les quals presenten un plomatge brunenc clapejat, ressaltant únicament el “espejuelo”, el qual presenta un color blau i violeta, igual que el mascle. La seva principal alimentació és la vegetació aquàtica, encara que no li importa ingerir insectes, cucs o petits peixos. Es pot veure el festeig de les parelles a partir del mes de febrer i sobre els mesos de maig a juny a les cries acompanyant a les mares, les quals poden nedar i bussejar a les poques hores de vida.",
      image: `${import.meta.env.BASE_URL}fauna/Coll-vert.jpg`
    },
    {
      id: 4,
      title: "Oreneta comuna (Hirundo rustica) i Avió comú (Delichon urbicum)",
      description: "Ens brinden amb la seva magnífica presència durant els mesos càlids i estivals, presentant els seus balls en vol sobre el riu a la recerca de menjar (insectes, principalment) i per a recollir fang amb el qual fabriquen els seus nius als balcons i façanes. L'oreneta sol volar a menor altura que l'avió comú i la seva principal diferència es troba en el plomatge i fisiologia: l'oreneta una mica més llarga, front i “barbejo” vermells i collaret negre són els seus principals característiques. L'avió caracteritzat pel seu plomatge blavós en la part dorsal i part ventral blanca, durant el vol inconfusible pel seu “obispillo” blanc.Una característica molt peculiar de totes dues espècies és que sempre que tornen habiten els mateixos nius que van construir amb anterioritat, per això és important no destruir les seves llars, els quals els porta massa temps i energia tornar-los a construir. ",
      image: `${import.meta.env.BASE_URL}fauna/Golondrina.jpg`
    },
    {
      id: 5,
      title: "Blauet (Alcedo atthis)",
      description: "Quan vegis passar una fletxa blava, pràcticament imperceptible a l'ull humà, aquí està aquesta preciositat d'ocell, la cridarem “la fada del riu”. Presenta un viu colorit, amb cap i escaig grans i potes curtes. Li agraden les zones tranquil·les, sense pràcticament contaminació acústica, posant-se en branques de la vegetació de les ribes i excava nius en els talussos.Es capbussa en l'aigua per a pescar, sent la seva alimentació des de larves, insectes aquàtics, amfibis, capgrossos… Un regal quan et brinda amb la seva presència!",
      image: `${import.meta.env.BASE_URL}fauna/Martinpescador.jpg`
    }
  ],
  "AMBFIBIS I REPTILS": [
    {
      id: 1,
      title: "Gripau comú (Buf spinosus)",
      description: "Gripau que li agraden les zones aquàtiques, de tamany considerablement gran, des de 120 a 180 cm de longitud, sent les femelles més grans que els mascles. Presenten un color marró, vermellós o ataronjat, extremitats curtes i robustes i iris vermellós, característica que permet no confondre-ho amb altres exemplars de la mateixa família. Presenten activitat nocturna excepte en època de zel que poden veure's durant el dia, no són difícils de veure per la seva grandària, però sí pel seu camuflatge. L'època reproductora és des de gener a març i la posada d'ous es fa en l'aigua,  apareixent els capgrossos després de 3-4 mesos després, formant agregacions en les ribes.",
      image: `${import.meta.env.BASE_URL}fauna/Sapo.jpg`
    },
    {
      id: 2,
      title: "Colobra viperina (Natrix maura)",
      description: "Aquesta serp aconsegueix una grandària entre 50-70 cm, sent les femelles les que aconsegueixen major longitud, i de cap triangular. Cal aclarir que NO és verinosa, tenint la peculiaritat que quan se sent amenaçada és capaç de fer semblar el seu cap encara més triangular. De tonalitat brunenca amb taques laterals. És aquàtica, sent molt bona nedadora i bussejadora. S'alimenta, principalment, de peixos i amfibis, encara que també pot caçar insectes i invertebrats. Amb l'augment de la temperatura comença la seva època de reproducció i de cria.",
      image: `${import.meta.env.BASE_URL}fauna/Culebra.jpg`
    }
  ],
  "TORTUGUES I PEIXOS": [
    {
      id: 1,
      title: "Tortuga d'estany (Emys orbicularis)",
      description: "Li agraden les zones d'aigua d'escàs corrent i amb vegetació, la qual forma part 	de la seva alimentació, però a més pot alimentar-se d'insectes, amfibis, peixos i carronya. Presenten una grandària petita, entre 20-30 cm, i una coloració de la closca negra coberta per dibuixos grocs, sent les femelles més clares i presentant els mascles major longitud de cua. Amb activitat diürna, principalment en les primeres hores del matí, poden observar-se reposant sobre troncs i objectes flotants, si se sent amenaçada es llança a l'aigua, dirigint-se al fons, on s'enterra fins que passi el perill. Es troba en situació crítica al llarg del mediterrani, a causa de la presència de l’espècie invasora: la Trachemys scripta.",
      image: `${import.meta.env.BASE_URL}fauna/Europeoagua.jpg`
    },
    {
      id: 2,
      title: "Tortuga de rierol (Mauremys leprosa)",
      description: "Presentant un color marró en la seva closca, tornant-se verdós amb el pas del temps, rep aquest nom per les erosions que rep el mateix conforme els anys. En el coll es poden apreciar tres línies grogues. Poden aconseguir una longitud de 20cm, sent les femelles de major grandària. S'alimenten, principalment, de peixos, però, també, invertebrats, amfibis i mol·luscos.Durant els mesos de març a juliol s'aparien sota l'aigua i després d'uns mesos la 	femella fa la posada d'ous. Al cap d'unes setmanes les cries trenquen la closca. Finalment, durant els mesos més freds, hibernen en el fons de l'aigua.",
      image: `${import.meta.env.BASE_URL}fauna/LeprosoII.jpg`
    },
    {
      id: 3,
      title: "Carpa (Cyprinus carpio)",
      description: "Si vas passejant per la vora del riu i escoltes un capbussó, saluda les nostres amigues les carpes. Aquest peix presenta un cos allargat, robust i comprimit lateralment, amb una coloració marró-verdosa i daurada, i amb grans escates. Les femelles, més grans que els mascles, poden arribar als 40 kg. Li encanten les aigües temperades, per això es troba molt a gust en aquesta zona. La seua alimentació és omnívora, i pot menjar cucs, insectes, crustacis, plantes i algues. Té una tècnica per aconseguir aliment que consisteix a remoure els sediments.",
      image: `${import.meta.env.BASE_URL}fauna/Carpa.jpg`
    },
    {
      id: 4,
      title: "Barbus (Barbus barbus)",
      description: "Rep el nom per les característiques barbes o bigots. És més complicat de veure que la resta de companys aquàtics, ja que li agraden les aigües mitjanes a profundes i viu en bancs. Habita aigües temperades i prefereix fons arenosos o pedregosos. És una espècie que hiberna formant petits grups sota les pedres o la vegetació. Té una tonalitat verd oliva amb reflexos daurats a la part superior i un ventre groguenc. La seua mida oscil·la entre els 30 i 120 cm, i és molt actiu i energètic. La seua alimentació és omnívora, encara que principalment herbívora.",
      image: `${import.meta.env.BASE_URL}fauna/Barbo.jpg`
    },
    {
      id: 5,
      title: "Anguila (Anguilla anguilla)",
      description: "Les anguiles tenen curiositats molt interessants. Per començar, són una espècie catàdroma, és a dir, viatgen a la mar per a reproduir-se i/o desovar, a grans profunditats. Viuen a la mar entre 3 i 7 anys, i després d’aquest període viatgen als rius adquirint la maduresa sexual. Arribat aquest moment poden tornar a la mar per a reproduir-se o patir hipertrofia i quedar-se als rius fins a edats molt avançades. És una espècie amb el cos molt allargat i cilíndric, presenta tonalitats diverses: negroses, verdes i groguenques. Té una única aleta contínua que comença prop del cap i una mandíbula inferior més prominent que la superior, amb dents fines. La seua alimentació és omnívora i també carronyera.",
      image: `${import.meta.env.BASE_URL}fauna/Anguila.jpg`
    },
    {
      id: 6,
      title: "Black Bass (Micropterus dolomieu)",
      description: "Originari de Nord-amèrica, és característic pel seu cap, que ocupa una tercera part del cos, i per la mandíbula inferior, més gran que la superior. Té un cos ovalat amb tonalitat verdosa i taques fosques. El seu cos creix al llarg de la seua vida, i pot arribar als 10 kg i 70 cm de longitud. No li agraden les aigües fredes i es troba en rius, grans llacs i xicotetes masses d’aigua. La seua alimentació es basa en caçar qualsevol animal en moviment (peixos, granotes, serps, cucs…), que succiona a gran velocitat. Entre els mesos d’abril i juny es produeix la posta: fan un niu d’aproximadament 1 m de diàmetre on la femella pon els ous. Poden arribar a fer diversos nius, cadascun vigilat per un mascle, que els defensa amb agressivitat davant qualsevol amenaça.",
      image: `${import.meta.env.BASE_URL}fauna/Blackbass.jpg`
    },
    {
      id: 7,
      title: "Alburns (Alburnus alburnus)",
      description: "Li agrada viure a la superfície de l’aigua, formant bancs de peixos. Té una mida menuda (13–15 cm), encara que de manera poc habitual pot arribar als 25 cm i 100 g de pes. Té una coloració platejada i brillant, amb llom blavós o verdós. El cos és allargat i estret; les femelles tenen un aspecte més robust per l’abdomen més arrodonit. Tenen la mandíbula prominent. Solen viure en aigües temperades, amb una mica de corrent, prop de la superfície, i es desplacen en bancs. És una espècie ovípara, amb postes de fins a 2.000 ous sobre substrats i amb una alta taxa de fecunditat. Té una alimentació omnívora i voraç, podent competir amb altres espècies i posar-les en perill.",
      image: `${import.meta.env.BASE_URL}fauna/Alburno.jpg`
    }
  ]
};

const Fauna = () => {
  return (
    <div className="min-h-screen bg-[#E9DDC8]/10 overflow-hidden relative">
      <Header />
      
      <main className="container mx-auto px-4 pt-20 pb-32">
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
              <TabsList className="grid w-full grid-cols-3 mb-8 h-auto p-1 bg-primary/20">
                <TabsTrigger 
                  value="OCELLS" 
                  className="text-[10px] xs:text-xs sm:text-sm py-2 px-1 xs:px-2 sm:px-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-primary rounded transition-all whitespace-nowrap overflow-hidden text-ellipsis min-h-[2.5rem] flex items-center justify-center leading-tight"
                >
                  OCELLS
                </TabsTrigger>
                <TabsTrigger 
                  value="AMBFIBIS I REPTILS" 
                  className="text-[9px] xs:text-[10px] sm:text-sm py-2 px-1 xs:px-2 sm:px-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-primary rounded transition-all whitespace-nowrap overflow-hidden text-ellipsis min-h-[2.5rem] flex items-center justify-center leading-tight"
                >
                  AMBFIBIS I REPTILS
                </TabsTrigger>
                <TabsTrigger 
                  value="TORTUGUES I PEIXOS" 
                  className="text-[9px] xs:text-[10px] sm:text-sm py-2 px-1 xs:px-2 sm:px-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-primary rounded transition-all whitespace-nowrap overflow-hidden text-ellipsis min-h-[2.5rem] flex items-center justify-center leading-tight"
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
                          <div className="w-full sm:w-40 h-40 sm:h-32 flex-shrink-0 p-3 sm:p-4">
                            <img
                              src={animal.image}
                              alt={animal.title}
                              className="w-full h-full object-contain rounded-lg bg-gray-50"
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
        audioSrc={`${import.meta.env.BASE_URL}FAUNA.m4a`}/>
    </div>
  );
};

export default Fauna;
