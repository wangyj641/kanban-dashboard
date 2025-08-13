# Task 2 – Next.js (Web)

# Kanban Dashboard - Project Management Tool

A modern, responsive project management dashboard built with Next.js, TypeScript, and TailwindCSS.

## 🚀 Features

### Core Functionality

- **Kanban Board**: Three-column layout (To Do, On Progress, Done)
- **Drag & Drop**: Smooth drag-and-drop functionality using @hello-pangea/dnd
- **State Persistence**: Data persists across browser sessions using Zustand
- **Responsive Design**: Works seamlessly on various screen sizes

## 📁 Project Structure

```
kanban-dashboard/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Main dashboard page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Top navigation header
│   ├── Sidebar.tsx        # Left sidebar navigation
│   ├── KanbanBoard.tsx    # Main kanban board
│   ├── KanbanColumn.tsx   # Individual kanban columns
│   ├── KanbanCard.tsx     # Task cards
│   └── ProjectHeader.tsx  # Project-specific header
├── store/                 # State management
│   └── kanban.ts          # Zustand store for kanban data
├── types/                 # TypeScript type definitions
│   └── kanban.ts          # Kanban-related types
└── public/                # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd kanban-dashboard
```

2. Install dependencies:

```bash
npm install
```

3. Set up your TMDb API key in a `.env` file:

```
TMDB_API_KEY=your_tmdb_api_key
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

# Task 3 – Axios + TypeScript (No UI)

- Location: `lib/http/` (client, types, endpoints)
- Demo scripts: `scripts/task3-tmdb-fetch.ts`
- Strong typing with Zod validation on both response and request
- Centralized Axios instance with error normalization

### Run

```bash
npm run task3:tmdb
```
