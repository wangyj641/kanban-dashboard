'use client';

import { SearchIcon, CalendarIcon, BellIcon, ChatIcon } from './icons';

export default function Header() {
  return (
    <header className="h-header bg-white border-b border-gray-200 px-6">
      <div className="flex items-center justify-between h-full">
        {/* Left Side - Project Info */}

        {/* Search Bar */}
        <div className="flex-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for anything..."
              className="w-[417px] pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm placeholder-gray-400"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <SearchIcon />
            </div>
          </div>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-3">
          {/* Calendar */}
          <button className="btn-icon">
            <CalendarIcon />
          </button>

          {/* Notifications */}
          <button className="btn-icon relative">
            <BellIcon />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-white"></div>
          </button>

          {/* Chat */}
          <button className="btn-icon">
            <ChatIcon />
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-3 ml-4 pl-4 border-l border-gray-200">
            <div className="text-right">
              <div className="text-sm font-medium text-gray-900">Anima Agrawal</div>
              <div className="text-xs text-gray-500">U.P, India</div>
            </div>
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                A
              </div>
              <button className="absolute -bottom-1 -right-1 w-4 h-4 bg-gray-100 rounded-full flex items-center justify-center border border-white">
                <span className="text-gray-600 text-xs">▼</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
