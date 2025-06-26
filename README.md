# Tasks App Client

**The client component for the Tasks App - Final project from the Technion Web Development Course (2022)**

> **Note:** Only this README file was created with the help of AI to provide clear project documentation.

## 📋 Project Description

This is the frontend client for a comprehensive Task Management System built with React. It provides a user-friendly interface for managing tasks, projects, user assignments, and user authentication. The application communicates with a backend API server running on localhost:8000.

## ✨ Features

- **User Authentication**: Login system with Redux state management
- **Task Management**: Browse, search, add, edit, and delete tasks
- **Project Management**: Handle project organization and task groupings
- **Assignment System**: Track and manage user task assignments
- **Route-based Navigation**: React Router for seamless navigation
- **State Management**: Redux for global state handling

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend server running on `http://localhost:8000`

### Installation

1. Clone the repository
2. Navigate to the client directory
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## 📁 Project Structure

```
src/
├── App.js                 # Main App component
├── index.js              # React app entry point
├── AppReducer.js          # Redux reducer
├── components/
│   ├── MainComp.js        # Main component with routing
│   ├── HomeComp.js        # Home page component
│   ├── Login/
│   │   └── LoginComp.js   # Login component
│   ├── tasks/
│   │   ├── TasksComp.js   # Tasks listing component
│   │   ├── TaskComp.js    # Individual task component
│   │   ├── CreateTaskComp.js # Add new task form
│   │   ├── EditTaskComp.js   # Edit task form
│   │   └── UserTasksComp.js  # User's assigned tasks
│   ├── projects/
│   │   ├── ProjectsComp.js # Projects listing component
│   │   ├── ProjectComp.js  # Individual project component
│   │   ├── AddProjectComp.js # Add project form
│   │   └── EditProjectComp.js # Edit project form
│   └── assignments/
│       ├── AssignmentsComp.js # Assignments main component
│       ├── AssignmentComp.js  # Assignment details component
│       └── AddAssignmentComp.js # Add assignment form
└── services/
    ├── UserService.js     # User API calls
    ├── TaskService.js     # Task API calls
    ├── ProjectService.js  # Project API calls
    └── AssignmentService.js # Assignment API calls
```

## 🔧 Technologies Used

- **React** - Frontend framework
- **React Router** - Client-side routing
- **Redux** - State management
- **Axios** - HTTP client for API calls
- **Bootstrap** - CSS framework for styling
- **Query String** - URL query parameter parsing

## 🌐 API Integration

The client communicates with the backend API server at `http://localhost:8000/api/` for:

- **Users**: Authentication and user management
- **Tasks**: Task catalog operations
- **Projects**: Project management
- **Assignments**: Task assignment tracking

## 📱 Application Flow

1. **Login**: Users authenticate through the login component
2. **Navigation**: Access to Tasks, Projects, and User Management
3. **Tasks**: View, search, add, edit, and delete tasks
4. **Projects**: Manage project organization and task groupings
5. **Assignments**: Handle user task assignments and progress tracking

## 🎯 Key Components

- [`MainComp`](src/components/MainComp.js) - Main application wrapper with routing
- [`LoginComp`](src/components/Login/LoginComp.js) - User authentication
- [`TasksComp`](src/components/tasks/TasksComp.js) - Task management interface
- [`ProjectsComp`](src/components/projects/ProjectsComp.js) - Project management
- [`AssignmentsComp`](src/components/assignments/AssignmentsComp.js) - Assignment management

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

---

📌 **Important Notice**

1. This project was created before ChatGPT and the AI era!
2. Developed during June 2022 as part of the Technion Web Development Course
3. Requires the backend server to be running on port 8000

**Contact**: yoavlevavi@gmail.com, +972 50-331-1442
