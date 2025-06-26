# Tasks App Client

**The client component for the Tasks App - Final project from the Technion Web Development Course (June 2022)**

> **Note:** Only this README file was created with the help of AI to provide clear project documentation.

## 📋 Project Description

This is the frontend client for a comprehensive Task Management System built with Angular. It provides a user-friendly interface for managing tasks, posts, and users. The application communicates with external APIs to fetch and manage data.

## ✨ Features

- **User Management**: Browse, add, and manage users
- **Task Management**: Browse, add, and manage tasks (todos)
- **Post Management**: Browse, add, and manage posts
- **Card-based UI**: Clean card interface for displaying data
- **Service Architecture**: Angular services for API communication
- **Component-based Design**: Modular Angular components

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or Angular CLI
- External APIs for users, tasks, and posts

### Installation

1. Clone the repository
2. Navigate to the client directory
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   ng serve
   ```
5. Open [http://localhost:4200](http://localhost:4200) to view it in the browser

## 📁 Project Structure

```
src/
├── main.ts                # Angular app entry point
├── index.html            # Main HTML file
├── styles.css            # Global styles
├── app/
│   ├── app.component.ts   # Root component
│   ├── app.module.ts      # Main app module
│   ├── services/
│   │   ├── user.service.ts    # User API service
│   │   ├── task.service.ts    # Task API service
│   │   └── post.service.ts    # Post API service
│   ├── components/
│   │   ├── main/              # Main component
│   │   ├── users-cards/       # Users listing component
│   │   ├── user-card/         # Individual user card
│   │   ├── add-user/          # Add user form
│   │   ├── todos-cards/       # Tasks listing component
│   │   ├── todo-card/         # Individual task card
│   │   ├── add-task/          # Add task form
│   │   ├── posts-cards/       # Posts listing component
│   │   ├── post-card/         # Individual post card
│   │   ├── add-post/          # Add post form
│   │   ├── extra-info/        # Additional information component
│   │   └── other-data/        # Other data component
│   └── environments/
│       ├── environment.ts     # Development environment
│       └── environment.prod.ts # Production environment
```

## 🔧 Technologies Used

- **Angular** - Frontend framework
- **TypeScript** - Programming language
- **Angular CLI** - Development tools
- **RxJS** - Reactive programming
- **HTTP Client** - API communication
- **Angular Components** - UI building blocks

## 🌐 API Integration

The client communicates with external APIs for:

- **Users**: User management and data fetching
- **Tasks (Todos)**: Task management operations
- **Posts**: Post content management

## 📱 Application Flow

1. **Main Component**: Central navigation and layout
2. **Users**: View, add, and manage users through card interface
3. **Tasks**: Browse and manage todos with card-based display
4. **Posts**: Handle post creation and viewing
5. **Extra Info**: Additional data and information display

## 🎯 Key Components

- `AppComponent` - Root application component
- `MainComponent` - Main application layout
- `UsersCardsComponent` - Users listing interface
- `TodosCardsComponent` - Tasks management interface
- `PostsCardsComponent` - Posts management interface

## 🔧 Available Scripts

- `ng serve` - Runs the app in development mode
- `ng build` - Builds the app for production
- `ng test` - Runs unit tests via Karma
- `ng lint` - Lints the project files

---

📌 **Important Notice**

1. This project was created before ChatGPT and the AI era!
2. Developed during June 2022 as part of the Technion Web Development Course
3. Built with Angular framework and TypeScript

**Contact**: yoavlevavi@gmail.com, +972 50-331-1442
