'use client';

import { LightbulbIcon } from './icons';

interface Project {
  id: string;
  name: string;
  color: string;
  active: boolean;
}

const projects: Project[] = [
  { id: '1', name: 'Mobile App', color: 'bg-green-500', active: true },
  { id: '2', name: 'Website Redesign', color: 'bg-yellow-500', active: false },
  { id: '3', name: 'Design System', color: 'bg-purple-500', active: false },
  { id: '4', name: 'Wireframes', color: 'bg-blue-500', active: false },
];

const navigationItems = [
  { name: 'Home', icon: '/images/home.png', active: true },
  { name: 'Messages', icon: '/images/messages.png', active: false },
  { name: 'Tasks', icon: '/images/tasks.png', active: false },
  { name: 'Members', icon: '/images/members.png', active: false },
  { name: 'Settings', icon: '/images/settings.png', active: false },
];

interface SidebarProps {
  currentProjectId: string;
  onProjectSelect: (id: string) => void;
}

import Image from 'next/image';

export default function Sidebar({ currentProjectId, onProjectSelect }: SidebarProps) {
  return (
    <div className="h-full w-sidebar bg-sidebar shadow-sidebar z-30">
      <div className="flex flex-col h-screen">
        {/* 满高 + 纵向布局 */}
        {/* Logo Section */}
        <div className="border-b border-gray-200 min-h-[80px] flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <Image src="/images/icon.png" alt="Logo" width={24} height={24} />
            </div>
            <span className="text-xl font-bold text-gray-900">Project M JJJ.</span>
          </div>
          <button className="p-0 m-0 bg-transparent border-none hover:bg-transparent focus:outline-none">
            <Image src="/images/expand.png" alt="Logo" width={26} height={20} />
          </button>
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto">
          {/* Navigation */}
          <nav className="flex-1 p-4">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name} className={`sidebar-item ${item.active ? 'active' : ''}`}>
                  <Image src={item.icon} alt="Logo" width={24} height={24} />
                  <span className="font-medium text-sm">{item.name}</span>
                </div>
              ))}
            </div>
          </nav>

          <hr className="border-t border-gray-200 my-4" />

          {/* My Projects */}
          <div className="px-4 pb-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                My Projects
              </h3>
              <button className="w-6 h-6 rounded-full flex items-center justify-center focus:outline-none border-none">
                <Image src="/images/add.png" alt="Logo" width={16} height={16} />
              </button>
            </div>
            <div className="space-y-2">
              {projects.map((project) => (
                <div key={project.id} className={`project-item`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-2.5 h-2.5 rounded-full ${project.color}`}></div>
                    <span
                      className="font-inter font-extrabold text-base text-[#0D062D] cursor-pointer"
                      onClick={() => onProjectSelect(project.id)}
                    >
                      {project.name}
                    </span>
                  </div>
                  {project.name === 'Mobile App' && (
                    <button className="text-gray-400 hover:text-gray-600 p-1 rounded focus:outline-none border-none">
                      ⋯
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Thoughts Time Widget */}
        <div className="px-4 pb-6 border-t border-gray-200 bg-white">
          <div className="bg-primary-50 rounded-xl p-4 border border-primary-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <LightbulbIcon />
              </div>
              <h4 className="font-semibold text-primary-800">Thoughts Time</h4>
            </div>
            <p className="text-sm text-primary-700 mb-4 leading-relaxed">
              We don&apos;t have any notice for you, till then you can share your thoughts with your
              peers.
            </p>
            <button className="w-full bg-primary-600 text-white py-2.5 px-4 rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium shadow-sm">
              Write a message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
