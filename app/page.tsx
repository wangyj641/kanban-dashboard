'use client';

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import ProjectHeader from '@/components/ProjectHeader';
import KanbanBoard from '@/components/KanbanBoard';
import { useState } from 'react';

function View() {
  return (
    <>
      <ProjectHeader />
      <KanbanBoard />
    </>
  );
}

const projectPages = {
  '1': <View />,
  '2': <div>Todo: Website Redesign</div>,
  '3': <div>Todo: Design System</div>,
  '4': <div>Todo: Wireframes</div>,
};

export default function Home() {
  const [currentProjectId, setCurrentProjectId] = useState('1');

  return (
    <div className="min-h-screen bg-gray-50 flex-1">
      <Header />
      <div className="flex">
        <Sidebar currentProjectId={currentProjectId} onProjectSelect={setCurrentProjectId} />
        <div className="py-10 max-w-6xl mx-auto">
          <div className="mt-4">{projectPages[currentProjectId]}</div>
        </div>
      </div>
    </div>
  );
}
