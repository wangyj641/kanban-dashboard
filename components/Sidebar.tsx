'use client';

interface Project {
  id: string;
  name: string;
  color: string;
}

const projects: Project[] = [
  { id: '1', name: 'Mobile App', color: 'bg-green-500' },
  { id: '2', name: 'Website Redesign', color: 'bg-yellow-500' },
  { id: '3', name: 'Design System', color: 'bg-purple-500' },
  { id: '4', name: 'Wireframes', color: 'bg-blue-500' },
];

const navigationItems = [
  { name: 'Home', icon: '/images/category.png' },
  { name: 'Messages', icon: '/images/message.png' },
  { name: 'Tasks', icon: '/images/task-square.png' },
  { name: 'Members', icon: '/images/profile-2user.png' },
  { name: 'Settings', icon: '/images/setting-2.png' },
];

interface SidebarProps {
  currentProjectId: string;
  onProjectSelect: (id: string) => void;
}

import Image from 'next/image';

export default function Sidebar({ currentProjectId, onProjectSelect }: SidebarProps) {
  return (
    <div className="h-sidebar w-sidebar bg-sidebar shadow-sidebar z-30">
      <div className="flex flex-col h-screen">
        {/* 满高 + 纵向布局 */}
        <div className="flex-1 min-h-0 overflow-y-auto">
          {/* Navigation */}
          <nav className="flex-1 p-4">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <div
                  key={item.name}
                  className={`sidebar-item cursor-pointer hover:bg-gray-100 active:bg-gray-200 ${item.active ? 'active' : ''}`}
                >
                  <Image src={item.icon} alt="Logo" width={24} height={24} />
                  <span className="font-medium text-sm">{item.name}</span>
                </div>
              ))}
            </div>
          </nav>

          <hr className="border-t border-gray-200 my-4" />

          {/* My Projects */}
          <div className="px-4 pb-4">
            <div className="flex items-center justify-between w-[203px] sidebar-item">
              <span className="text-sm">My project</span>
              <button className="w-8 h-8 rounded-full flex items-center justify-center focus:outline-none border-none">
                <Image src="/images/add.png" alt="Logo" width={16} height={16} />
              </button>
            </div>

            <div className="space-y-1">
              {projects.map((project) => (
                <div key={project.id} className={`project-item`}>
                  <div className="sidebar-item cursor-pointer hover:bg-gray-100 active:bg-gray-200">
                    <Image src="/images/Ellipse.png" alt="Logo" width={8} height={8} />
                    <span
                      className="font-medium text-sm"
                      onClick={() => onProjectSelect(project.id)}
                    >
                      {project.name}
                    </span>
                  </div>
                  {currentProjectId === project.id && <span className="text-base">...</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
