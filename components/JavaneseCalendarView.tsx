import React, { useState } from 'react';
import { getJavanesePasaran } from '../utils/dateUtils';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

const JavaneseCalendarView: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const getDaysInMonth = (year: number, month: number) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (year: number, month: number) => {
        return new Date(year, month, 1).getDay();
    };

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const renderCalendarDays = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const daysInMonth = getDaysInMonth(year, month);
        const firstDay = getFirstDayOfMonth(year, month);
        
        const days = [];
        const today = new Date();
        today.setHours(0,0,0,0);

        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="h-20 bg-gray-50/50 border border-gray-100"></div>);
        }

        for (let d = 1; d <= daysInMonth; d++) {
            const date = new Date(year, month, d);
            const pasaran = getJavanesePasaran(date);
            const isToday = date.toDateString() === today.toDateString();
            const isWeekend = date.getDay() === 0 || date.getDay() === 6;

            days.push(
                <div 
                    key={d} 
                    className={`h-20 relative p-1 border border-gray-100 flex flex-col justify-between transition-colors
                        ${isToday ? 'bg-emerald-50 ring-inset ring-2 ring-emerald-500 z-10' : 'bg-white hover:bg-gray-50'}
                    `}
                >
                    <span className={`text-sm font-semibold ml-1 ${isWeekend ? 'text-red-500' : 'text-gray-700'}`}>
                        {d}
                    </span>
                    <span className="text-[10px] font-medium text-center text-emerald-600 bg-emerald-50 rounded py-0.5 mx-1 mb-1">
                        {pasaran}
                    </span>
                </div>
            );
        }

        return days;
    };

    const monthNames = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mb-24">
            <div className="p-4 bg-white border-b border-gray-200 flex items-center justify-between sticky top-0 z-20">
                <button 
                    onClick={handlePrevMonth}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <ChevronLeft size={20} className="text-gray-600" />
                </button>
                <div className="text-center">
                    <h2 className="text-lg font-bold text-gray-800">
                        {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                    </h2>
                    <p className="text-xs text-gray-500">Kalender Masehi & Pasaran Jawa</p>
                </div>
                <button 
                    onClick={handleNextMonth}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <ChevronRight size={20} className="text-gray-600" />
                </button>
            </div>

            <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-200">
                {['M', 'S', 'S', 'R', 'K', 'J', 'S'].map((day, i) => (
                    <div key={i} className={`py-2 text-center text-xs font-bold ${i === 0 ? 'text-red-500' : 'text-gray-500'}`}>
                        {day}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7">
                {renderCalendarDays()}
            </div>
            <div className="p-3 bg-gray-50 border-t border-gray-200 text-xs text-center text-gray-500">
                 <div className="flex justify-center items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Hari Ini</span>
                 </div>
                 <p className="italic scale-90">Pasaran Jawa: Legi, Pahing, Pon, Wage, Kliwon</p>
            </div>
        </div>
    );
};

export default JavaneseCalendarView;
