
import React, { useState, useEffect } from 'react';
import { DeceasedProfile, Gender, Milestone } from './types';
import { calculateMilestones } from './utils/dateUtils';
import Header from './components/Header';
import ProfileForm from './components/ProfileForm';
import MilestoneCard from './components/MilestoneCard';
import ReadingView from './components/ReadingView';
import GuideView from './components/GuideView';
import { useDeceasedProfile } from './hooks/useDeceasedProfile';
import InstallPrompt from './components/InstallPrompt';
import { Calculator, BookOpen, BookHeart } from 'lucide-react';

const App: React.FC = () => {
  const { profile, setProfile } = useDeceasedProfile();

  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [hasCalculated, setHasCalculated] = useState(false);
  const [activeTab, setActiveTab] = useState<'calculator' | 'readings' | 'guides'>('calculator');
  


  useEffect(() => {
    if (profile.name && profile.deathDate) {
      handleCalculate();
    }
  }, []);

  const handleCalculate = () => {
    if (profile.name && profile.deathDate) {
      const results = calculateMilestones(profile.deathDate);
      setMilestones(results);
      setHasCalculated(true);
      setActiveTab('calculator'); 
    }
  };

  const today = new Date();
  today.setHours(0,0,0,0);

  return (
    <div className="min-h-screen islamic-pattern pb-24 pb-safe">
      <InstallPrompt />
      <Header profile={profile} />

      <main className="container mx-auto px-4 max-w-3xl">
        
        {activeTab === 'calculator' && (
          <div className="animate-fade-in-up">
             <ProfileForm 
              profile={profile} 
              setProfile={setProfile} 
              onCalculate={handleCalculate} 
            />

            {hasCalculated ? (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-800">Daftar Hari Selamatan</h2>
                  <span className="text-xs font-medium px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                    {milestones.length} Jadwal
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {milestones.map((milestone) => {
                    const isToday = milestone.date.toDateString() === today.toDateString();
                    return (
                        <MilestoneCard
                            key={milestone.id}
                            milestone={milestone}
                            isToday={isToday}
                            deceasedName={profile.name}
                        />
                    );
                  })}
                </div>
                
                <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
                    <p className="font-bold mb-1">Catatan Perhitungan:</p>
                    <p>Perhitungan menggunakan metode tradisional di mana hari wafat dihitung sebagai hari pertama (Geblag). Tanggal Pasaran Jawa dihitung secara matematis.</p>
                </div>
              </div>
            ) : (
                <div className="text-center py-12 text-gray-400">
                    <p>Masukkan data almarhum untuk melihat jadwal tahlilan.</p>
                </div>
            )}
          </div>
        )}

        {activeTab === 'readings' && (
           <div className="animate-fade-in-up">
              <ReadingView profile={profile} />
           </div>
        )}

        {activeTab === 'guides' && (
           <div className="animate-fade-in-up">
              <GuideView />
           </div>
        )}

      </main>

      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-40 pb-safe">
        <div className="container mx-auto max-w-3xl flex">
            <button 
                onClick={() => setActiveTab('calculator')}
                className={`flex-1 py-4 flex flex-col items-center gap-1 transition-colors ${
                    activeTab === 'calculator' ? 'text-emerald-600 font-bold' : 'text-gray-400 hover:text-gray-600'
                }`}
            >
                <Calculator size={24} />
                <span className="text-xs">Hitung Hari</span>
            </button>
            <button 
                 onClick={() => setActiveTab('readings')}
                 className={`flex-1 py-4 flex flex-col items-center gap-1 transition-colors ${
                    activeTab === 'readings' ? 'text-emerald-600 font-bold' : 'text-gray-400 hover:text-gray-600'
                }`}
            >
                <BookOpen size={24} />
                <span className="text-xs">Bacaan Yasin</span>
            </button>
            <button 
                 onClick={() => setActiveTab('guides')}
                 className={`flex-1 py-4 flex flex-col items-center gap-1 transition-colors ${
                    activeTab === 'guides' ? 'text-emerald-600 font-bold' : 'text-gray-400 hover:text-gray-600'
                }`}
            >
                <BookHeart size={24} />
                <span className="text-xs">Panduan</span>
            </button>
        </div>
      </div>


    </div>
  );
};

export default App;