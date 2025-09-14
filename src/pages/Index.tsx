
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Leaf, PawPrint } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#E9DDC8]/10">
      <Header />
      
      <main className="container mx-auto px-4 pt-24">
        <div className="max-w-2xl mx-auto text-center">
          <img 
            src={`${import.meta.env.BASE_URL}fortaleny.jpg`}
            alt="Fortaleny Village" 
            className="w-full h-64 object-cover rounded-lg mb-8 animate-fade-in"
          />
          
          <h1 className="text-3xl font-semibold text-gray-900 mb-4 animate-fade-in">
            Benvinguts i benvingudes a Fortaleny
          </h1>
          
          <p className="text-gray-700 leading-relaxed mb-8 animate-fade-in">
            Descobreix la rica biodiversitat del nostre poble valencià. Un lloc on la natura i la tradició es troben, creant un paisatge únic al cor de la Comunitat Valenciana. Explora la nostra diversa flora i fauna local a través d’aquesta guia interactiva.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              onClick={() => navigate("/flora")}
              className="w-full sm:w-auto gap-2 hover:scale-105 transition-transform"
            >
              <Leaf className="h-5 w-5" />
              Explorar Flora
            </Button>
            <Button 
              onClick={() => navigate("/fauna")}
              className="w-full sm:w-auto gap-2 hover:scale-105 transition-transform"
            >
              <PawPrint className="h-5 w-5" />
              Explorar Fauna
            </Button>
          </div>
          <div className="mt-8 mb-8 animate-fade-in">
            <img 
              src={`${import.meta.env.BASE_URL}logo-turisme.jpg`}
              alt="Paisaje de Fortaleny mostrando la biodiversidad local" 
              className="w-full max-w-4xl mx-auto h-48 sm:h-64 md:h-72 object-cover rounded-lg shadow-lg"
            />
            </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
