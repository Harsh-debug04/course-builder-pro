import { ChevronLeft, ChevronDown, ChevronRight } from "lucide-react";
import { Topic, pythonCourse, getModuleByTopicId } from "@/data/courseData";
import { cn } from "@/lib/utils";
import { useState } from "react";

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
  const activeModule = getModuleByTopicId(activeTopicId);
  const [expandedModules, setExpandedModules] = useState<Set<string>>(
    new Set(activeModule ? [activeModule.id] : [pythonCourse.modules[0]?.id])
  );

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

  // Calculate topic numbers globally
  let globalTopicNumber = 0;

  return (
    <aside
      className={cn(
        "flex flex-col h-full bg-sidebar border-r border-sidebar-border transition-all duration-300",
        isCollapsed ? "w-0 overflow-hidden" : "w-64 lg:w-72"
      )}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        <div>
          <h2 className="text-lg font-semibold text-sidebar-foreground">
            {pythonCourse.title}
          </h2>
          <p className="text-xs text-muted-foreground">
            {pythonCourse.modules.length} modules • {topics.length} topics
          </p>
        </div>
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

      {/* Module List */}
      <nav className="flex-1 overflow-y-auto py-2">
        {pythonCourse.modules.map((module) => {
          const isExpanded = expandedModules.has(module.id);
          const hasActiveTopic = module.topics.some(t => t.id === activeTopicId);
          
          return (
            <div key={module.id} className="mb-1">
              {/* Module Header */}
              <button
                onClick={() => toggleModule(module.id)}
                className={cn(
                  "w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-sidebar-accent transition-colors",
                  hasActiveTopic && "bg-primary/5"
                )}
              >
                {isExpanded ? (
                  <ChevronDown className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                )}
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-medium text-muted-foreground">
                    Module {module.number}
                  </span>
                  <p className={cn(
                    "text-sm font-medium truncate",
                    hasActiveTopic ? "text-primary" : "text-sidebar-foreground"
                  )}>
                    {module.title}
                  </p>
                </div>
              </button>

              {/* Topics within Module */}
              {isExpanded && (
                <ul className="space-y-0.5 px-2 pb-2">
                  {module.topics.map((topic) => {
                    globalTopicNumber++;
                    const currentNumber = globalTopicNumber;
                    const isActive = topic.id === activeTopicId;
                    
                    return (
                      <li key={topic.id}>
                        <button
                          onClick={() => onTopicSelect(topic.id)}
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
                          <span className="text-sm font-medium truncate">
                            {topic.title}
                          </span>
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
    </aside>
  );
};

export default TopicSidebar;
