import { useAuth } from "@/hooks/useAuth";
import { useProgress } from "@/hooks/useProgress";
import { pythonCourse, getAllTopics } from "@/data/courseData";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Code, Trophy, ArrowRight, Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";

const Dashboard = () => {
  const { user } = useAuth();
  const { progressPercentage, completedTopics } = useProgress();
  const navigate = useNavigate();

  const allTopics = getAllTopics();
  const completedCount = completedTopics.length;
  const totalCount = allTopics.length;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold tracking-tight text-primary">Welcome back, {user?.name || "Student"}!</h1>
          <p className="text-muted-foreground mt-2">Pick up where you left off and keep learning.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Courses in Progress</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-muted-foreground">Python Fundamentals</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Topics Completed</CardTitle>
              <Code className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{completedCount}</div>
              <p className="text-xs text-muted-foreground">/{totalCount} Topics</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3 Days</div>
              <p className="text-xs text-muted-foreground">Keep it up!</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Achievements</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{progressPercentage >= 100 ? "Master" : progressPercentage >= 50 ? "Intermediate" : "Beginner"}</div>
              <p className="text-xs text-muted-foreground">{progressPercentage}% Course Complete</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Main Course Card */}
          <Card className="col-span-2 shadow-md hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle>Current Course</CardTitle>
              <CardDescription>Continue your journey in Python mastery</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">Py</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{pythonCourse.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">{pythonCourse.description}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{progressPercentage}% Complete</span>
                  <span className="text-muted-foreground">{completedCount}/{totalCount} Topics</span>
                </div>
                <Progress value={progressPercentage} className="h-2" />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => navigate(`/courses/${pythonCourse.id}/topics`)} className="w-full">
                Continue Learning <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          {/* Recommended / Activity Feed */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Recommended Next</CardTitle>
              <CardDescription>Based on your progress</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer" onClick={() => navigate(`/courses/${pythonCourse.id}/topics?topic=intro-to-python`)}>
                <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Review: Introduction</p>
                  <p className="text-xs text-muted-foreground">10 mins • 500 XP</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer" onClick={() => navigate("/playground")}>
                <Code className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Daily Coding Challenge</p>
                  <p className="text-xs text-muted-foreground">Hard • Arrays</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" onClick={() => navigate("/playground")}>
                Go to Playground
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
