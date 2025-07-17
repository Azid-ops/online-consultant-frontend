'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  GraduationCap, 
  User, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  BookOpen,
  Heart,
  Bell,
  ChevronDown
} from 'lucide-react';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';

interface SidebarProps {
  user?: {
    username?: string;
    userId?: string;
  };
  onLogout?: () => void;
}

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

const navItems: NavItem[] = [
  {
    label: 'Dashboard',
    href: '/user/dashboard',
    icon: Home
  },
  {
    label: 'Universities',
    href: '/user/universties',
    icon: GraduationCap
  },
  {
    label: 'My Applications',
    href: '/user/applications',
    icon: BookOpen,
    badge: 'New'
  },
  {
    label: 'Favorites',
    href: '/user/favorites',
    icon: Heart
  },
  {
    label: 'Notifications',
    href: '/user/notifications',
    icon: Bell
  },
  {
    label: 'Profile',
    href: '/user/profile',
    icon: User
  },
  {
    label: 'Settings',
    href: '/user/settings',
    icon: Settings
  }
];

export default function Sidebar({ user }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

  const userImage = useSelector((state: RootState) => (state as any)?.profile?.imageLink);

  if(!user) {
    return <div>Loading...</div>;
  }

  const isActive = (href: string) => {
    if (href === '/user/dashboard') {
      return pathname === '/user/dashboard';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 lg:hidden bg-white rounded-lg p-2 shadow-md"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 lg:static lg:z-auto
        w-64
      `}>
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center">
            <div className="bg-blue-500 rounded-lg p-2 mr-3">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">UniConnect</h1>
              <p className="text-sm text-gray-600">Student Portal</p>
            </div>
          </div>
        </div>

        {/* User Profile Section */}
        {user && (
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <button
                onClick={toggleProfile}
                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    {
                      userImage ? (
                        <img src={userImage} alt="User" width={40} height={40} style={{borderRadius: '50%'}}/>
                      ) : (
                        <User className="h-5 w-5 text-white" />
                      )
                    }
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {user.username || 'User'}
                    </p>
                    <p className="text-xs text-gray-500">Student</p>
                  </div>
                </div>
                <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Profile Dropdown */}
              {isProfileOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  <div className="p-3 border-b border-gray-100">
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="text-sm font-medium text-gray-900 truncate">{user.username}</p>
                  </div>
                  <div className="p-2">
                    <Link href="/user/profile">
                      <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors">
                        View Profile
                      </button>
                    </Link>
                    <Link href="/user/settings">
                      <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors">
                        Settings
                      </button>
                    </Link>
                    <button
                      className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors flex items-center"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Navigation Menu */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              
              return (
                <li key={item.href}>
                  <Link href={item.href}>
                    <button
                      className={`
                        w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors
                        ${active 
                          ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' 
                          : 'text-gray-700 hover:bg-gray-50'
                        }
                      `}
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center">
                        <Icon className={`h-5 w-5 mr-3 ${active ? 'text-blue-600' : 'text-gray-500'}`} />
                        <span className="font-medium">{item.label}</span>
                      </div>
                      {item.badge && (
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-2">Need help?</p>
            <Link href="/support">
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                Contact Support
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
