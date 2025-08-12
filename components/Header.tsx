'use client';

import Image from 'next/image';

export default function Header() {
  return (
    <header className="h-header bg-white border-b border-gray-200">
      <div className="flex items-center h-full w-full px-6">
        {/* Logo Section */}
        <div className="w-sidebar min-h-[80px] flex items-center gap-3 px-6 border-b border-gray-200">
          <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
            <Image src="/images/icon.png" alt="Logo" width={24} height={24} />
          </div>
          <span className="text-xl font-bold text-gray-900">Project M</span>
          <button className="p-0 m-0 bg-transparent border-none hover:bg-transparent focus:outline-none ml-auto">
            <Image src="/images/expand.png" alt="Logo" width={26} height={20} />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative flex-1 flex justify-center">
          <input
            type="search"
            placeholder="Search for anything..."
            className="w-[617px] h-[44px] pl-10 pr-4 bg-[#DBDBDB] rounded-[12px] text-[14px] leading-[22px] text-gray-700 placeholder-gray-400 border-none focus:outline-none"
          />
          <div className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">
            <Image src="/images/search-normal.png" alt="Search" width={22} height={22} />
          </div>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-x-6 pl-8">
          <div className="flex items-center gap-3">
            <button className="p-0 m-0 bg-transparent border-none hover:bg-transparent focus:outline-none">
              <Image src="/images/calendar-2.png" alt="Logo" width={24} height={24} />
            </button>

            <button className="p-0 m-0 bg-transparent border-none hover:bg-transparent focus:outline-none">
              <Image src="/images/message-question.png" alt="Logo" width={24} height={24} />
            </button>

            <button className="p-0 m-0 bg-transparent border-none hover:bg-transparent focus:outline-none">
              <Image src="/images/notification.png" alt="Logo" width={24} height={24} />
            </button>
          </div>

          {/* User Profile */}
          <div className="flex items-center border-l border-gray-200 pl-6 gap-x-4">
            <div className="text-right">
              <div className="font-inter text-base text-gray-900">Yongjun Wang</div>
              <div className="text-[14px] text-[#787486]">SK, Canada</div>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
              <Image src="/images/user.png" alt="Logo" width={38} height={38} />
            </div>
            <button className="p-0 m-0 bg-transparent border-none hover:bg-transparent focus:outline-none">
              <Image src="/images/arrow-down.png" alt="Logo" width={18} height={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
