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
        <div className="animate-pulse">
          <div className="h-8 w-8 mx-auto rounded-full bg-primary"></div>
        </div>
        <p className="mt-4 text-muted-foreground">Loading course...</p>
      </div>
    </div>
  );
};

export default Index;
