import React from 'react';
import { Milestone } from '../types';
import { formatDateIndonesian, getJavanesePasaran, generateGoogleCalendarUrl } from '../utils/dateUtils';
import { Calendar, CalendarPlus } from 'lucide-react';

interface MilestoneCardProps {
  milestone: Milestone;
  isToday: boolean;
  deceasedName: string;
  gender: string;
}

const MilestoneCard: React.FC<MilestoneCardProps> = ({ milestone, isToday, deceasedName, gender }) => {
  const pasaran = getJavanesePasaran(milestone.date);
  
  const handleAddToCalendar = () => {
    const url = generateGoogleCalendarUrl(milestone, deceasedName, gender);
    window.open(url, '_blank');
  };
  
  return (
    <div className={`relative overflow-hidden rounded-xl border transition-all duration-300 ${isToday ? 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-300 shadow-xl scale-[1.02]' : 'bg-white border-gray-200 hover:shadow-lg'}`}>
      {isToday && (
        <div className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 absolute top-0 right-0 rounded-bl-xl">
          HARI INI
        </div>
      )}
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
            <div>
                <h3 className="text-lg font-bold text-gray-800">{milestone.title}</h3>
                <p className="text-emerald-600 font-medium text-sm italic">{milestone.javaneseName}</p>
            </div>
            <div className="text-right">
                <span className="block text-2xl font-bold text-gray-900 font-arabic">{milestone.date.getDate()}</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">{milestone.date.toLocaleString('id-ID', { month: 'short' })}</span>
            </div>
        </div>

        <div className="flex items-center gap-2 text-gray-600 text-sm mb-4 bg-gray-50 p-2 rounded-lg">
            <Calendar size={16} />
            <span>{formatDateIndonesian(milestone.date)} ({pasaran})</span>
        </div>

        <p className="text-gray-500 text-xs mb-4">{milestone.description}</p>

        <div className="flex gap-2">
            <button
                onClick={handleAddToCalendar}
                className="w-full py-2.5 px-3 rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-emerald-600 hover:border-emerald-200 font-medium text-xs flex items-center justify-center gap-1.5 transition shadow-sm"
                title="Simpan ke Google Calendar"
            >
                <CalendarPlus size={16} />
                <span>Simpan ke Google Calendar</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default MilestoneCard;