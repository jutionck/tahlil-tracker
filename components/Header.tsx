import React from 'react';
import { Moon } from 'lucide-react';
import NotificationManager from './NotificationManager';
import { DeceasedProfile } from '../types';

interface HeaderProps {
  profile: DeceasedProfile;
}

const Header: React.FC<HeaderProps> = ({ profile }) => {
  return (
    <header className="bg-emerald-700 text-white p-6 shadow-md rounded-b-3xl mb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
      <div className="container mx-auto max-w-2xl flex flex-col items-center relative z-10">
        <div className="flex gap-3 mb-3">
             <div className="p-3 bg-emerald-800 rounded-full border-2 border-emerald-500">
                <Moon size={32} className="text-yellow-400" />
            </div>
            <div className="p-3 bg-white rounded-full border-2 border-emerald-500 flex items-center justify-center">
                <NotificationManager profile={profile} />
            </div>
        </div>
        <h1 className="text-3xl font-bold font-arabic mb-1">Pengingat Tahlil</h1>
        <p className="text-emerald-100 text-sm opacity-90">Kalkulator Hari Selamatan & Pembuat Undangan</p>
      </div>
    </header>
  );
};

export default Header;