
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
            Bienvenidos a Fortaleny
          </h1>
          
          <p className="text-gray-700 leading-relaxed mb-8 animate-fade-in">
            Descubre la rica biodiversidad de nuestro pueblo valenciano. Un lugar donde la naturaleza 
            y la tradición se encuentran, creando un paisaje único en el corazón de la Comunidad Valenciana. 
            Explora nuestra diversa flora y fauna local a través de esta guía interactiva.
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
        </div>
      </main>
    </div>
  );
};

export default Index;
