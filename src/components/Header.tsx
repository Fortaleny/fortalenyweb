
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-900">
          Ayuntamiento de Fortaleny
        </h1>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col gap-4 mt-8">
              <a
                href="#flora"
                className="text-lg hover:text-[#86A789] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Flora
              </a>
              <a
                href="#fauna"
                className="text-lg hover:text-[#86A789] transition-colors"
                onClick={() => setIsOpen(false)}
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
