# Modern Course Platform

A comprehensive, responsive, and interactive course platform built with React, TypeScript, and Vite. This project serves as a robust template for educational content, currently demonstrating a "Python Fundamentals" course.

## 🚀 Overview

This application provides a seamless learning experience with a clean user interface. It is designed to host structured course content, featuring modules, topics, rich text rendering, and interactive quizzes. The architecture is data-driven, making it easy to extend or replace the content with your own curriculum.

## ✨ Features

-   **Interactive Learning Interface**: Clean, distraction-free reading environment.
-   **Markdown Support**: Rich text rendering for course content using `react-markdown` and `remark-gfm`.
-   **Syntax Highlighting**: Code blocks are beautifully formatted for better readability using `react-syntax-highlighter`.
-   **Structured Navigation**:
    -   **Collapsible Sidebar**: Easy navigation between modules and topics.
    -   **Mobile Support**: Responsive mobile navigation drawer for smaller screens.
    -   **Progress Tracking**: Visual indicators for course progression (logic ready in `courseData.ts`).
-   **Interactive Quizzes**: Built-in "Quick Check" quizzes at the end of topics to reinforce learning.
-   **Responsive Design**: Fully responsive UI built with Tailwind CSS, ensuring a great experience on Desktop, Tablet, and Mobile.
-   **Modern UI Components**: Utilizes Shadcn UI (based on Radix UI) for accessible and customizable components.

## 🛠️ Tech Stack

-   **Framework**: [React](https://react.dev/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Library**: [Shadcn UI](https://ui.shadcn.com/) / [Radix UI](https://www.radix-ui.com/)
-   **State Management / Data Fetching**: [TanStack Query](https://tanstack.com/query/latest)
-   **Routing**: [React Router](https://reactrouter.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Content Rendering**: `react-markdown`, `remark-gfm`

## 🏁 Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Ensure you have the following installed:
-   [Node.js](https://nodejs.org/) (v16 or higher)
-   [npm](https://www.npmjs.com/) (or yarn/bun/pnpm)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd vite_react_shadcn_ts
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    bun install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    # or
    bun dev
    ```

4.  **Open the application:**
    Open your browser and navigate to `http://localhost:8080` (or the port shown in your terminal).

## 📂 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── ui/             # Shadcn UI primitives (Button, Card, etc.)
│   ├── Header.tsx      # Main application header
│   ├── TopicSidebar.tsx # Navigation sidebar
│   ├── TopicContent.tsx # Renders markdown and quizzes
│   └── ...
├── data/
│   └── courseData.ts   # The core data file containing course structure and content
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and configurations
├── pages/              # Main page views (Index, CourseTopics, NotFound)
├── App.tsx             # Main application entry point with routing
└── main.tsx            # React DOM rendering
```

## ✏️ Customizing Content

The course content is entirely data-driven and located in `src/data/courseData.ts`. To add your own course:

1.  Open `src/data/courseData.ts`.
2.  Modify the `pythonCourse` object or create a new `Course` object following the interfaces defined (`Course`, `Module`, `Topic`).
3.  Each topic supports Markdown content in the `content` field.
4.  You can add quizzes by populating the `quickCheck` array within a topic.

**Example Topic Structure:**
```typescript
{
  id: "my-new-topic",
  number: 1,
  title: "My New Topic",
  content: "# Hello World\nThis is markdown content.",
  quickCheck: [
    {
      id: "q1",
      question: "Is this easy?",
      options: [
        { id: "a", text: "Yes", isCorrect: true },
        { id: "b", text: "No", isCorrect: false }
      ],
      explanation: "Yes, it is designed to be easy!"
    }
  ]
}
```

## 📜 Scripts

-   `npm run dev`: Starts the development server.
-   `npm run build`: Builds the app for production.
-   `npm run lint`: Runs ESLint to check for code quality issues.
-   `npm run preview`: Locally previews the production build.
-   `npm test`: Runs tests using Vitest.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
