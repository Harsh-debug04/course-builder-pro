import { Topic } from "@/data/courseData";
import MarkdownRenderer from "./MarkdownRenderer";

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
    </article>
  );
};

export default TopicContent;
