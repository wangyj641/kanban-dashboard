'use client';

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import ProjectHeader from '@/components/ProjectHeader';
import KanbanBoard from '@/components/KanbanBoard';
import { useState } from 'react';

function View() {
  return (
    <div className="flex-1">
      <ProjectHeader />
      <KanbanBoard />
    </div>
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
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar currentProjectId={currentProjectId} onProjectSelect={setCurrentProjectId} />

      {/* 右侧：套一个“内边距容器”，强制留空隙 */}
      <div className="flex-1">
        <div className="px-8 md:px-12 lg:px-16">
          {' '}
          {/* ← 这里是关键 */}
          <Header />
          <div className="mt-4">{projectPages[currentProjectId]}</div>
        </div>
      </div>
    </div>
  );
}
