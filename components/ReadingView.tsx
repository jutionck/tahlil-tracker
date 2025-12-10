
import React, { useState } from 'react';
import { yasinVerses, tahlilReadings, Verse } from '../data/readings';
import { DeceasedProfile } from '../types';
import { Settings, BookOpen, Heart } from 'lucide-react';

interface ReadingViewProps {
  profile: DeceasedProfile;
}

const ReadingView: React.FC<ReadingViewProps> = ({ profile }) => {
  const [activeTab, setActiveTab] = useState<'yasin' | 'tahlil'>('yasin');
  const [fontSize, setFontSize] = useState<number>(26);

  const renderVerse = (verse: Verse, index: number) => {
    let latinText = verse.latin;
    let transText = verse.translation;

    if (verse.isKhususon && profile.name) {
      latinText = latinText?.replace('{NAMA}', profile.name);
      transText = transText?.replace('{NAMA}', profile.name);
    }

    const isHeaderBlock = verse.isHeader;

    return (
      <div 
        key={verse.id} 
        className={`py-6 border-b border-gray-100 last:border-0 ${
            isHeaderBlock ? 'bg-emerald-50/80 rounded-xl p-5 mb-6 border border-emerald-100 shadow-sm' : 'px-2'
        }`}
      >
        {/* Section Title & Repeat Badge */}
        {(verse.title || verse.repeat) && (
          <div className="flex flex-wrap items-center gap-2 mb-4">
             {verse.title && (
                 <span className={`${
                    isHeaderBlock 
                        ? 'bg-emerald-600 text-white shadow-emerald-200' 
                        : 'bg-emerald-100 text-emerald-800'
                    } text-sm font-semibold px-3 py-1.5 rounded-full shadow-sm`}>
                   {verse.title}
                 </span>
             )}
             
             {verse.repeat && (
                <span className="flex items-center justify-center bg-yellow-100 text-yellow-800 border border-yellow-200 text-xs font-bold px-2.5 py-1 rounded-full">
                    {verse.repeat}x
                </span>
             )}
          </div>
        )}

        <div 
            className="font-arabic text-right leading-[2.2] text-gray-800 mb-4"
            style={{ fontSize: `${fontSize}px` }}
            dir="rtl"
        >
          {verse.arabic}
          {activeTab === 'yasin' && !verse.isHeader && typeof verse.id === 'number' && (
              <span className="inline-flex items-center justify-center w-8 h-8 text-sm bg-emerald-50 text-emerald-600 rounded-full border border-emerald-200 mr-3 align-middle font-sans shadow-sm select-none">
                  {verse.id}
              </span>
          )}
        </div>



        {!verse.isHeader && (
            <div className="space-y-2.5 text-left">
                {latinText && (
                    <p className="text-emerald-700 font-medium text-sm md:text-base leading-relaxed tracking-wide">
                        {latinText}
                    </p>
                )}
                {transText && (
                    <p className="text-gray-500 text-sm italic leading-relaxed">
                        "{transText}"
                    </p>
                )}
            </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-24">
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 px-4 py-3 shadow-sm transition-all">
        
        <div className="flex bg-gray-100 p-1.5 rounded-xl mb-4">
            <button
                onClick={() => setActiveTab('yasin')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-bold rounded-lg transition-all ${
                    activeTab === 'yasin' 
                    ? 'bg-white text-emerald-700 shadow-sm ring-1 ring-black/5' 
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
                }`}
            >
                <BookOpen size={18} />
                Surat Yasin
            </button>
            <button
                onClick={() => setActiveTab('tahlil')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-bold rounded-lg transition-all ${
                    activeTab === 'tahlil' 
                    ? 'bg-white text-emerald-700 shadow-sm ring-1 ring-black/5' 
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
                }`}
            >
                <Heart size={18} />
                Tahlil & Doa
            </button>
        </div>

        <div className="flex items-center gap-4 text-gray-500 bg-gray-50 px-4 py-3 rounded-xl border border-gray-100">
            <div className="flex items-center gap-2 min-w-fit">
                <Settings size={16} className="text-emerald-600" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Ukuran Teks</span>
            </div>
            <div className="flex items-center gap-3 flex-1">
                <span className="text-xs font-bold text-gray-400">Aa</span>
                <input 
                    type="range" 
                    min="20" 
                    max="56" 
                    step="2"
                    value={fontSize}
                    onChange={(e) => setFontSize(parseInt(e.target.value))}
                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600 hover:accent-emerald-500 transition-all"
                />
                <span className="text-xl font-bold text-gray-600">Aa</span>
            </div>
        </div>
      </div>

      <div className="p-5 min-h-[500px]">
        {activeTab === 'yasin' ? (
            <div className="animate-in fade-in duration-300">
                <div className="text-center mb-8 bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                    <h2 className="text-3xl font-bold font-arabic text-emerald-800 mb-2">يس</h2>
                    <p className="text-gray-700 font-semibold">Surat Yasin</p>
                    <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">Makkiyah • 83 Ayat</p>
                </div>
                {yasinVerses.map(renderVerse)}
                
                <div className="mt-8 text-center p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <p className="text-gray-500 text-sm">Selesai membaca Surat Yasin.</p>
                    <button 
                        onClick={() => setActiveTab('tahlil')}
                        className="mt-3 text-emerald-600 font-bold text-sm hover:underline"
                    >
                        Lanjut ke Tahlil &rarr;
                    </button>
                </div>
            </div>
        ) : (
            <div className="animate-in fade-in duration-300">
                 <div className="text-center mb-8 bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                    <h2 className="text-3xl font-bold font-arabic text-emerald-800 mb-2">التَّهْلِيْل</h2>
                    <p className="text-gray-700 font-semibold">Bacaan Tahlil & Doa Arwah</p>
                    {profile.name ? (
                        <div className="mt-3 text-sm bg-white inline-block px-4 py-1.5 rounded-full text-emerald-700 border border-emerald-200 shadow-sm">
                            Khususon: <strong>{profile.name}</strong>
                        </div>
                    ) : (
                        <div className="mt-3 text-sm text-gray-500 italic">
                            (Nama almarhum belum diisi)
                        </div>
                    )}
                </div>
                {tahlilReadings.map(renderVerse)}
            </div>
        )}
      </div>
    </div>
  );
};

export default ReadingView;
