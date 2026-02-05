import { useState, useEffect, createContext, useContext, ReactNode } from "react";
import { getAllTopics } from "@/data/courseData";

interface ProgressContextType {
  completedTopics: string[];
  markAsComplete: (topicId: string) => void;
  markAsIncomplete: (topicId: string) => void;
  isCompleted: (topicId: string) => boolean;
  progressPercentage: number;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);

  // Load from local storage on mount
  useEffect(() => {
    const stored = localStorage.getItem("completedTopics");
    if (stored) {
      setCompletedTopics(JSON.parse(stored));
    }
  }, []);

  const markAsComplete = (topicId: string) => {
    if (!completedTopics.includes(topicId)) {
      const newCompleted = [...completedTopics, topicId];
      setCompletedTopics(newCompleted);
      localStorage.setItem("completedTopics", JSON.stringify(newCompleted));
    }
  };

  const markAsIncomplete = (topicId: string) => {
    const newCompleted = completedTopics.filter((id) => id !== topicId);
    setCompletedTopics(newCompleted);
    localStorage.setItem("completedTopics", JSON.stringify(newCompleted));
  };

  const isCompleted = (topicId: string) => completedTopics.includes(topicId);

  // Calculate percentage
  const allTopics = getAllTopics();
  const progressPercentage = Math.round((completedTopics.length / Math.max(allTopics.length, 1)) * 100);

  return (
    <ProgressContext.Provider value={{ completedTopics, markAsComplete, markAsIncomplete, isCompleted, progressPercentage }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
};
