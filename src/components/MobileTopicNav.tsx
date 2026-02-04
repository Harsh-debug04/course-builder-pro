import { ChevronDown } from "lucide-react";
import { Topic } from "@/data/courseData";
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

  const handleTopicSelect = (topicId: string) => {
    onTopicSelect(topicId);
    setOpen(false);
  };

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
                {activeTopic?.number || 1}
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
            <SheetTitle>Course Topics</SheetTitle>
          </SheetHeader>
          <nav className="py-2 overflow-y-auto max-h-[calc(100vh-80px)]">
            <ul className="space-y-1 px-2">
              {topics.map((topic) => {
                const isActive = topic.id === activeTopic?.id;
                return (
                  <li key={topic.id}>
                    <button
                      onClick={() => handleTopicSelect(topic.id)}
                      className={cn(
                        "topic-item w-full text-left",
                        isActive && "active"
                      )}
                    >
                      <span
                        className={cn(
                          "topic-number",
                          isActive && "bg-primary text-primary-foreground"
                        )}
                      >
                        {topic.number}
                      </span>
                      <span className="text-sm font-medium">{topic.title}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileTopicNav;
