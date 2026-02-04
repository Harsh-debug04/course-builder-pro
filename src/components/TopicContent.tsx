import { Topic } from "@/data/courseData";
import MarkdownRenderer from "./MarkdownRenderer";
import QuickCheck from "./QuickCheck";

interface TopicContentProps {
  topic: Topic | undefined;
}

const TopicContent = ({ topic }: TopicContentProps) => {
  if (!topic) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Select a topic to view its content</p>
      </div>
    );
  }

  return (
    <article className="w-full">
      <MarkdownRenderer content={topic.content} />
      
      {/* Quick Check Quiz - Naturally integrated at the end of content */}
      {topic.quickCheck && topic.quickCheck.length > 0 && (
        <QuickCheck 
          questions={topic.quickCheck} 
          topicTitle={topic.title}
        />
      )}
    </article>
  );
};

export default TopicContent;
