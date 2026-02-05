import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, RotateCcw, CheckCircle2 } from "lucide-react";

const Playground = () => {
  const [code, setCode] = useState(`# Write your Python code here\n\ndef solution(nums, target):\n    # Your solution\n    return []\n\nprint(solution([2, 7, 11, 15], 9))`);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = () => {
    setIsRunning(true);
    setOutput("");

    // Simulate execution
    setTimeout(() => {
      setIsRunning(false);
      setOutput("Output:\n[0, 1]\n\nProcess finished with exit code 0");
    }, 1000);
  };

  const handleReset = () => {
    setCode(`# Write your Python code here\n\ndef solution(nums, target):\n    # Your solution\n    return []\n\nprint(solution([2, 7, 11, 15], 9))`);
    setOutput("");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6 flex flex-col gap-6 h-[calc(100vh-4rem)]">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Coding Playground</h1>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleReset}>
              <RotateCcw className="mr-2 h-4 w-4" /> Reset
            </Button>
            <Button onClick={handleRun} disabled={isRunning}>
              {isRunning ? (
                "Running..."
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" /> Run Code
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 flex-1 min-h-0">
          {/* Code Editor Area */}
          <Card className="flex flex-col overflow-hidden border-2 focus-within:border-primary/50 transition-colors">
            <div className="bg-muted px-4 py-2 border-b flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">main.py</span>
              <span className="text-xs text-muted-foreground">Python 3.10</span>
            </div>
            <div className="flex-1 relative">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="absolute inset-0 w-full h-full p-4 font-mono text-sm bg-background resize-none focus:outline-none"
                spellCheck={false}
              />
            </div>
          </Card>

          {/* Output Area */}
          <Card className="flex flex-col overflow-hidden bg-zinc-950 text-zinc-50 border-zinc-800">
            <div className="bg-zinc-900 px-4 py-2 border-b border-zinc-800 flex items-center justify-between">
              <span className="text-sm font-medium text-zinc-400">Terminal</span>
              {output && <span className="text-xs text-green-500 flex items-center gap-1"><CheckCircle2 className="h-3 w-3" /> Executed</span>}
            </div>
            <div className="flex-1 p-4 font-mono text-sm whitespace-pre-wrap overflow-y-auto">
              {output || <span className="text-zinc-600 italic">Run code to see output...</span>}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Playground;
