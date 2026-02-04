import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to course topics page
    navigate("/courses/python-fundamentals/topics");
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <div className="animate-bounce">
          <div className="h-8 w-8 mx-auto rounded-full bg-primary shadow-lg shadow-primary/50"></div>
        </div>
        <p className="mt-4 text-muted-foreground animate-pulse font-medium">Loading course...</p>
      </div>
    </div>
  );
};

export default Index;
