'use client';

import { useStore } from '@/store/store';

export function ThemeToggle() {
  // স্টোর থেকে নতুন স্টেট ও ফাংশন নিন
  const { isDarkMode, toggleDarkMode } = useStore();
  
  return (
    <button 
      onClick={toggleDarkMode}
      className={`p-2 rounded-md ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      }`}
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}