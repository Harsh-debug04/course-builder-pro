import { ChevronLeft } from "lucide-react";
import { Topic } from "@/data/courseData";
import { cn } from "@/lib/utils";

interface TopicSidebarProps {
  topics: Topic[];
  activeTopicId: string;
  onTopicSelect: (topicId: string) => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

const TopicSidebar = ({
  topics,
  activeTopicId,
  onTopicSelect,
  isCollapsed = false,
  onToggleCollapse,
}: TopicSidebarProps) => {
  return (
    <aside
      className={cn(
        "flex flex-col h-full bg-sidebar border-r border-sidebar-border transition-all duration-300",
        isCollapsed ? "w-0 overflow-hidden" : "w-64 lg:w-72"
      )}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        <h2 className="text-lg font-semibold text-sidebar-foreground">
          Course Topics
        </h2>
        {onToggleCollapse && (
          <button
            onClick={onToggleCollapse}
            className="p-1 rounded-md hover:bg-sidebar-accent transition-colors"
            aria-label="Toggle sidebar"
          >
            <ChevronLeft className="h-5 w-5 text-sidebar-foreground" />
          </button>
        )}
      </div>

      {/* Topic List */}
      <nav className="flex-1 overflow-y-auto py-2">
        <ul className="space-y-1 px-2">
          {topics.map((topic) => {
            const isActive = topic.id === activeTopicId;
            return (
              <li key={topic.id}>
                <button
                  onClick={() => onTopicSelect(topic.id)}
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
                  <span className="text-sm font-medium truncate">
                    {topic.title}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default TopicSidebar;
