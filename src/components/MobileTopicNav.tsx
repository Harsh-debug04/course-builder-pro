import { ChevronDown, ChevronRight } from "lucide-react";
import { Topic, pythonCourse, getModuleByTopicId } from "@/data/courseData";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface MobileTopicNavProps {
  topics: Topic[];
  activeTopic: Topic | undefined;
  onTopicSelect: (topicId: string) => void;
}

const MobileTopicNav = ({
  topics,
  activeTopic,
  onTopicSelect,
}: MobileTopicNavProps) => {
  const [open, setOpen] = useState(false);
  const activeModule = getModuleByTopicId(activeTopic?.id || "");
  const [expandedModules, setExpandedModules] = useState<Set<string>>(
    new Set(activeModule ? [activeModule.id] : [pythonCourse.modules[0]?.id])
  );

  const handleTopicSelect = (topicId: string) => {
    onTopicSelect(topicId);
    setOpen(false);
  };

  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev => {
      const newSet = new Set(prev);
      if (newSet.has(moduleId)) {
        newSet.delete(moduleId);
      } else {
        newSet.add(moduleId);
      }
      return newSet;
    });
  };

  // Calculate topic number
  const getTopicNumber = (topicId: string): number => {
    let number = 0;
    for (const module of pythonCourse.modules) {
      for (const topic of module.topics) {
        number++;
        if (topic.id === topicId) return number;
      }
    }
    return 1;
  };

  let globalTopicNumber = 0;

  return (
    <div className="lg:hidden sticky top-16 z-40 bg-card border-b border-border">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="w-full justify-between h-14 rounded-none px-4"
          >
            <span className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded bg-primary text-xs font-semibold text-primary-foreground">
                {activeTopic ? getTopicNumber(activeTopic.id) : 1}
              </span>
              <span className="font-medium truncate">
                {activeTopic?.title || "Select Topic"}
              </span>
            </span>
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80 p-0">
          <SheetHeader className="p-4 border-b border-border">
            <SheetTitle>{pythonCourse.title}</SheetTitle>
            <p className="text-xs text-muted-foreground">
              {pythonCourse.modules.length} modules • {topics.length} topics
            </p>
          </SheetHeader>
          <nav className="py-2 overflow-y-auto max-h-[calc(100vh-100px)]">
            {pythonCourse.modules.map((module) => {
              const isExpanded = expandedModules.has(module.id);
              const hasActiveTopic = module.topics.some(t => t.id === activeTopic?.id);
              
              return (
                <div key={module.id} className="mb-1">
                  {/* Module Header */}
                  <button
                    onClick={() => toggleModule(module.id)}
                    className={cn(
                      "w-full flex items-center gap-2 px-4 py-2 text-left hover:bg-muted transition-colors",
                      hasActiveTopic && "bg-primary/5"
                    )}
                  >
                    <ChevronRight className={cn(
                      "h-4 w-4 text-muted-foreground flex-shrink-0 transition-transform",
                      isExpanded && "rotate-90"
                    )} />
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-medium text-muted-foreground">
                        Module {module.number}
                      </span>
                      <p className={cn(
                        "text-sm font-medium truncate",
                        hasActiveTopic ? "text-primary" : "text-foreground"
                      )}>
                        {module.title}
                      </p>
                    </div>
                  </button>

                  {/* Topics */}
                  {isExpanded && (
                    <ul className="space-y-0.5 px-2 pb-2">
                      {module.topics.map((topic) => {
                        globalTopicNumber++;
                        const currentNumber = globalTopicNumber;
                        const isActive = topic.id === activeTopic?.id;
                        
                        return (
                          <li key={topic.id}>
                            <button
                              onClick={() => handleTopicSelect(topic.id)}
                              className={cn(
                                "topic-item w-full text-left ml-4",
                                isActive && "active"
                              )}
                            >
                              <span
                                className={cn(
                                  "topic-number",
                                  isActive && "bg-primary text-primary-foreground"
                                )}
                              >
                                {currentNumber}
                              </span>
                              <span className="text-sm font-medium">{topic.title}</span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileTopicNav;
