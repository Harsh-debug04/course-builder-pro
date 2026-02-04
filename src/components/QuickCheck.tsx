import { useState } from "react";
import { QuizQuestion } from "@/data/courseData";
import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuickCheckProps {
  questions: QuizQuestion[];
  topicTitle?: string;
}

const QuickCheck = ({ questions }: QuickCheckProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState<Record<string, boolean>>({});

  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = selectedAnswers[currentQuestion.id];
  const showResult = showResults[currentQuestion.id];

  const handleSelectAnswer = (optionId: string) => {
    if (showResult) return; // Don't allow changes after submitting
    setSelectedAnswers(prev => ({ ...prev, [currentQuestion.id]: optionId }));
  };

  const handleCheckAnswer = () => {
    setShowResults(prev => ({ ...prev, [currentQuestion.id]: true }));
  };

  const getSelectedOption = () => {
    return currentQuestion.options.find(opt => opt.id === selectedAnswer);
  };

  const isCorrect = getSelectedOption()?.isCorrect;

  const getAnsweredCount = () => {
    return questions.filter(q => showResults[q.id]).length;
  };

  const getCorrectCount = () => {
    return questions.filter(q => {
      const answer = selectedAnswers[q.id];
      const option = q.options.find(opt => opt.id === answer);
      return showResults[q.id] && option?.isCorrect;
    }).length;
  };

  return (
    <div className="my-8 rounded-lg border-2 border-primary/20 bg-primary/5 overflow-hidden">
      {/* Header - Always visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 hover:bg-primary/10 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <HelpCircle className="h-5 w-5" />
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-foreground">Quick Check</h3>
            <p className="text-sm text-muted-foreground">
              {getAnsweredCount() > 0 
                ? `${getCorrectCount()}/${getAnsweredCount()} correct • ${questions.length - getAnsweredCount()} remaining`
                : `${questions.length} questions to test your understanding`
              }
            </p>
          </div>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        )}
      </button>

      {/* Quiz Content - Expandable */}
      {isExpanded && (
        <div className="border-t border-primary/20 p-4">
          {/* Question Navigation */}
          <div className="flex gap-2 mb-4">
            {questions.map((q, index) => {
              const answered = showResults[q.id];
              const correct = answered && q.options.find(o => o.id === selectedAnswers[q.id])?.isCorrect;
              
              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentQuestionIndex(index)}
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-all",
                    index === currentQuestionIndex
                      ? "ring-2 ring-primary ring-offset-2"
                      : "",
                    answered
                      ? correct
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>

          {/* Current Question */}
          <div className="space-y-4">
            <p className="text-lg font-medium text-foreground">
              {currentQuestion.question}
            </p>

            {/* Options */}
            <div className="space-y-2">
              {currentQuestion.options.map((option) => {
                const isSelected = selectedAnswer === option.id;
                const showCorrectness = showResult;
                
                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelectAnswer(option.id)}
                    disabled={showResult}
                    className={cn(
                      "w-full flex items-center gap-3 p-3 rounded-lg border-2 text-left transition-all",
                      !showResult && "hover:border-primary/50 hover:bg-primary/5",
                      isSelected && !showResult && "border-primary bg-primary/10",
                      showCorrectness && option.isCorrect && "border-green-500 bg-green-50 dark:bg-green-950",
                      showCorrectness && isSelected && !option.isCorrect && "border-red-500 bg-red-50 dark:bg-red-950",
                      !isSelected && !showCorrectness && "border-border"
                    )}
                  >
                    <span className={cn(
                      "flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold",
                      isSelected && !showResult && "bg-primary text-primary-foreground",
                      showCorrectness && option.isCorrect && "bg-green-500 text-white",
                      showCorrectness && isSelected && !option.isCorrect && "bg-red-500 text-white",
                      !isSelected && !showCorrectness && "bg-muted text-muted-foreground"
                    )}>
                      {option.id.toUpperCase()}
                    </span>
                    <span className="flex-1 text-sm">{option.text}</span>
                    {showCorrectness && option.isCorrect && (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    )}
                    {showCorrectness && isSelected && !option.isCorrect && (
                      <XCircle className="h-5 w-5 text-red-500" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Check Answer Button */}
            {!showResult && (
              <Button
                onClick={handleCheckAnswer}
                disabled={!selectedAnswer}
                className="w-full"
              >
                Check Answer
              </Button>
            )}

            {/* Explanation */}
            {showResult && (
              <div className={cn(
                "p-4 rounded-lg",
                isCorrect 
                  ? "bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800" 
                  : "bg-amber-100 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800"
              )}>
                <p className={cn(
                  "font-medium mb-2",
                  isCorrect ? "text-green-700 dark:text-green-300" : "text-amber-700 dark:text-amber-300"
                )}>
                  {isCorrect ? "✓ Correct!" : "✗ Not quite right"}
                </p>
                <p className="text-sm text-muted-foreground">
                  {currentQuestion.explanation}
                </p>
              </div>
            )}

            {/* Navigation */}
            {showResult && currentQuestionIndex < questions.length - 1 && (
              <Button
                variant="outline"
                onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                className="w-full"
              >
                Next Question →
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickCheck;
