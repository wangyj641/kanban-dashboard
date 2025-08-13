'use client';

import Image from 'next/image';

export default function ProjectHeader() {
  const teamMembers = [
    { id: '1', icon: '/images/someone1.png', color: 'bg-blue-500' },
    { id: '2', icon: '/images/someone2.png', color: 'bg-green-500' },
    { id: '3', icon: '/images/someone3.png', color: 'bg-purple-500' },
    { id: '4', icon: '/images/someone4.png', color: 'bg-gray-300' },
  ];

  return (
    <div className="mb-8">
      {/* Project Title and Actions */}

      <div className="flex items-center justify-between mb-6">
        {/* Project Title */}
        <div className="flex items-center gap-3">
          <h1 className="font-inter text-3xl font-bold text-gray-900">Mobile App</h1>
          <div className="flex items-center gap-x-3">
            <button
              className="
                p-2 m-0 bg-transparent border-none rounded-md
                hover:bg-gray-100 active:bg-gray-200 active:scale-95
                transition-colors transition-transform duration-150
                focus:outline-none
              "
            >
              <Image src="/images/arrow-square-up.png" alt="Logo" width={30} height={30} />
            </button>

            <button
              className="
                p-2 m-0 bg-transparent border-none rounded-md
                hover:bg-gray-100 active:bg-gray-200 active:scale-95
                transition-colors transition-transform duration-150
                focus:outline-none
              "
            >
              <Image src="/images/link.png" alt="Logo" width={30} height={30} />
            </button>
          </div>
        </div>
        {/* Project Actions */}
        <div className="flex items-center gap-3">
          {/* Team Members */}
          <div className="flex items-center gap-3">
            {/* Action Buttons */}
            <button
              className="
                flex items-center m-0 bg-transparent border-none gap-3
                px-2 py-1 rounded-md
                text-gray-700
                hover:bg-gray-100 hover:text-gray-900
                active:bg-gray-200 active:scale-95
                transition-colors transition-transform duration-150
                focus:outline-none
              "
            >
              <Image src="/images/add-square.png" alt="Logo" width={16} height={16} />
              Invite
            </button>

            {teamMembers.map((member) => (
              <div
                key={member.id}
                className={`w-8 h-8 ${member.color} rounded-full flex items-center justify-center text-white font-medium shadow-sm border-none`}
              >
                <Image src={member.icon} alt="Logo" width={30} height={30} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters and Date */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            className="
              btn-secondary flex items-center gap-3
              hover:bg-gray-200 hover:text-gray-900
              active:bg-gray-300 active:scale-95
              transition-colors transition-transform duration-150
            "
          >
            <Image src="/images/filter.png" alt="Logo" width={16} height={16} />
            Filter
            <Image src="/images/arrow-down.png" alt="Logo" width={16} height={16} />
          </button>

          <button
            className="
              btn-secondary flex items-center gap-3
              hover:bg-gray-200 hover:text-gray-900
              active:bg-gray-300 active:scale-95
              transition-colors transition-transform duration-150
            "
          >
            <Image src="/images/calendar.png" alt="Logo" width={16} height={16} />
            Today
            <Image src="/images/arrow-down.png" alt="Logo" width={16} height={16} />
          </button>
        </div>

        <div className="flex items-center gap-3">
          {/* 图标+文字按钮 */}
          <button
            className="
              btn-secondary flex items-center gap-3
              hover:bg-gray-200 hover:text-gray-900
              active:bg-gray-300 active:scale-95
              transition-colors transition-transform duration-150
            "
          >
            <Image src="/images/profile-2user.png" alt="Logo" width={16} height={16} />
            Share
          </button>

          {/* 图标按钮容器 */}
          <div className="flex bg-gray-100 gap-2 p-1 rounded-md">
            {/* 大图标按钮 */}
            <button
              className="
                flex items-center justify-center p-2 bg-transparent border-none rounded-md
                hover:bg-gray-200 active:bg-gray-300 active:scale-95
                transition-colors transition-transform duration-150
                focus:outline-none
              "
            >
              <Image src="/images/Group614.png" alt="Logo" width={40} height={40} />
            </button>

            {/* 小图标按钮 */}
            <button
              className="
                flex items-center justify-center p-2 bg-transparent border-none rounded-md
                hover:border-gray-400 active:bg-gray-300 active:scale-95
                transition-colors transition-transform duration-150
                focus:outline-none
              "
            >
              <Image src="/images/menu.png" alt="Logo" width={21} height={21} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
