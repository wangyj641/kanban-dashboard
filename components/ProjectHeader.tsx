'use client';

import { LinkIcon, RefreshIcon, ShareIcon, ListIcon, GridIcon, FilterIcon, CalendarIcon } from './icons';

export default function ProjectHeader() {
  const teamMembers = [
    { id: '1', name: 'John', avatar: 'J', color: 'bg-blue-500' },
    { id: '2', name: 'Sarah', avatar: 'S', color: 'bg-green-500' },
    { id: '3', name: 'Mike', avatar: 'M', color: 'bg-purple-500' },
    { id: '4', name: '+2', avatar: '+2', color: 'bg-gray-300' },
  ];

  return (
    <div className="mb-8">
      {/* Project Title and Actions */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold text-gray-900">Mobile App</h1>
          <div className="flex items-center gap-2">
            <button className="btn-icon">
              <LinkIcon />
            </button>
            <button className="btn-icon">
              <RefreshIcon />
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Team Members */}
          <div className="flex items-center gap-2">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className={`w-8 h-8 ${member.color} rounded-full flex items-center justify-center text-white text-sm font-medium border-2 border-white shadow-sm`}
                title={member.name}
              >
                {member.avatar}
              </div>
            ))}
          </div>
          
          {/* Action Buttons */}
          <button className="btn-primary flex items-center gap-2">
            <span className="text-lg font-light">+</span>
            Invite
          </button>
          <button className="btn-secondary flex items-center gap-2">
            <ShareIcon />
            Share
          </button>
          
          {/* View Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1 border border-gray-200">
            <button className="px-3 py-2 bg-primary-600 text-white rounded-md text-sm font-medium transition-colors shadow-sm">
              <ListIcon />
            </button>
            <button className="px-3 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
              <GridIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Filters and Date */}
      <div className="flex items-center gap-3">
        <button className="btn-secondary flex items-center gap-2">
          <FilterIcon />
          Filter
        </button>
        <button className="btn-secondary flex items-center gap-2">
          <CalendarIcon />
          Today
        </button>
      </div>
    </div>
  );
}
