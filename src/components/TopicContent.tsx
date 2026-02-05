import { Topic } from "@/data/courseData";
import MarkdownRenderer from "./MarkdownRenderer";
import QuickCheck from "./QuickCheck";
import { Button } from "@/components/ui/button";
import { CheckCircle, Circle } from "lucide-react";
import { useProgress } from "@/hooks/useProgress";

interface TopicContentProps {
  topic: Topic | undefined;
}

const TopicContent = ({ topic }: TopicContentProps) => {
  const { markAsComplete, markAsIncomplete, isCompleted } = useProgress();

  if (!topic) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Select a topic to view its content</p>
      </div>
    );
  }

  const completed = isCompleted(topic.id);

  const toggleCompletion = () => {
    if (completed) {
      markAsIncomplete(topic.id);
    } else {
      markAsComplete(topic.id);
    }
  };

  return (
    <article className="w-full pb-20">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-primary">{topic.title}</h1>
        <Button
          variant={completed ? "default" : "outline"}
          onClick={toggleCompletion}
          className="gap-2"
        >
          {completed ? (
            <>
              <CheckCircle className="h-4 w-4" />
              Completed
            </>
          ) : (
            <>
              <Circle className="h-4 w-4" />
              Mark as Complete
            </>
          )}
        </Button>
      </div>

      <MarkdownRenderer content={topic.content} />
      
      {/* Quick Check Quiz - Naturally integrated at the end of content */}
      {topic.quickCheck && topic.quickCheck.length > 0 && (
        <QuickCheck 
          questions={topic.quickCheck} 
          topicTitle={topic.title}
        />
      )}

      {/* Bottom Action Bar */}
      <div className="mt-12 pt-8 border-t flex justify-end">
         <Button
          size="lg"
          variant={completed ? "secondary" : "default"}
          onClick={toggleCompletion}
          className="gap-2"
        >
          {completed ? "Mark as Incomplete" : "Complete Topic & Continue"}
        </Button>
      </div>
    </article>
  );
};

export default TopicContent;
