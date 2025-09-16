import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => handleNavigation("/")}
        >
          <img 
              src={`${import.meta.env.BASE_URL}aj-fortaleny.png`}
            alt="Logo Ajuntament de Fortaleny" 
            className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
          />
          <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
            Ajuntament de Fortaleny
          </h1>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col gap-4 mt-8">
              <a
                href="#"
                className={`text-lg transition-colors ${location.pathname === "/" ? "text-[#86A789]" : "hover:text-[#86A789]"}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/");
                }}
              >
                Inicio
              </a>
              <a
                href="#"
                className={`text-lg transition-colors ${location.pathname === "/flora" ? "text-[#86A789]" : "hover:text-[#86A789]"}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/flora");
                }}
              >
                Flora
              </a>
              <a
                href="#"
                className={`text-lg transition-colors ${location.pathname === "/fauna" ? "text-[#86A789]" : "hover:text-[#86A789]"}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/fauna");
                }}
              >
                Fauna
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
