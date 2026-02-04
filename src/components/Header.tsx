import { BookOpen, Code, LayoutDashboard, LogIn, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="flex h-16 items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">TL</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <Button variant="ghost" className="text-foreground hover:text-primary">
            <BookOpen className="h-4 w-4 mr-2" />
            Learn
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-primary">
            <Code className="h-4 w-4 mr-2" />
            Build
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-primary">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            Dashboard
          </Button>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="outline">
            <LogIn className="h-4 w-4 mr-2" />
            Log In
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
