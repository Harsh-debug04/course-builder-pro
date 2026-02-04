import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import TopicSidebar from "@/components/TopicSidebar";
import TopicContent from "@/components/TopicContent";
import MobileTopicNav from "@/components/MobileTopicNav";
import { getAllTopics, getTopicById } from "@/data/courseData";

const CourseTopics = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const topics = getAllTopics();
  
  // Get initial topic from URL or default to first topic
  const initialTopicId = searchParams.get("topic") || topics[0]?.id;
  const [activeTopicId, setActiveTopicId] = useState(initialTopicId);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const activeTopic = getTopicById(activeTopicId);

  // Update URL when topic changes
  useEffect(() => {
    setSearchParams({ topic: activeTopicId });
  }, [activeTopicId, setSearchParams]);

  // Scroll to top when topic changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTopicId]);

  const handleTopicSelect = (topicId: string) => {
    setActiveTopicId(topicId);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      
      {/* Mobile Navigation */}
      <MobileTopicNav
        topics={topics}
        activeTopic={activeTopic}
        onTopicSelect={handleTopicSelect}
      />

      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block sticky top-16 h-[calc(100vh-4rem)]">
          <TopicSidebar
            topics={topics}
            activeTopicId={activeTopicId}
            onTopicSelect={handleTopicSelect}
            isCollapsed={isSidebarCollapsed}
            onToggleCollapse={toggleSidebar}
          />
        </div>

        {/* Main Content - Natural page-level scrolling */}
        <main className="flex-1 min-w-0">
          <div className="max-w-4xl mx-auto px-4 py-8 lg:px-8 lg:py-12">
            <TopicContent topic={activeTopic} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default CourseTopics;
