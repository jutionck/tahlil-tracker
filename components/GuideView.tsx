import React, { useState } from 'react';
import { funeralGuides, GuideSection } from '../data/guides';
import { ChevronDown, ChevronUp, Book } from 'lucide-react';

const GuideView: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('memandikan');

  const toggleSection = (id: string) => {
    setActiveSection(activeSection === id ? '' : id);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 overflow-hidden mb-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-emerald-50 p-6 border-b border-emerald-100 text-center">
        <h2 className="text-2xl font-bold text-emerald-800 mb-2 flex items-center justify-center gap-2">
            <Book className="text-emerald-600" />
            Panduan Pengurusan
        </h2>
        <p className="text-gray-600 text-sm">Tata cara Tajhiz Jenazah sesuai syariat.</p>
      </div>

      <div className="divide-y divide-gray-100">
        {funeralGuides.map((section: GuideSection) => {
          const isOpen = activeSection === section.id;

          return (
            <div key={section.id} className="transition-all duration-300">
              <button
                onClick={() => toggleSection(section.id)}
                className={`w-full flex items-center justify-between p-5 text-left transition-colors ${
                    isOpen ? 'bg-emerald-50/50' : 'hover:bg-gray-50'
                }`}
              >
                <div>
                  <h3 className={`font-bold text-lg ${isOpen ? 'text-emerald-700' : 'text-gray-800'}`}>
                    {section.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">{section.description}</p>
                </div>
                {isOpen ? (
                    <ChevronUp className="text-emerald-500" />
                ) : (
                    <ChevronDown className="text-gray-400" />
                )}
              </button>
              
              {isOpen && (
                <div className="p-5 bg-white border-t border-gray-100 space-y-8 animate-in slide-in-from-top-2">
                    {section.steps.map((step) => (
                        <div key={step.id} className="relative pl-4 border-l-2 border-emerald-100">
                             <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-100 border-2 border-emerald-200"></div>
                             
                             <h4 className="font-bold text-emerald-800 mb-2">{step.title}</h4>
                             
                             {step.arabic && (
                                 <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-3 text-right">
                                     <p className="font-arabic text-2xl leading-loose text-gray-800" dir="rtl">{step.arabic}</p>
                                 </div>
                             )}
                             
                             <div className="space-y-2 text-sm text-gray-700">
                                 {step.description && <p>{step.description}</p>}
                                 
                                 {step.latin && (
                                     <p className="font-medium text-emerald-700 italic">"{step.latin}"</p>
                                 )}
                                 
                                 {step.translation && (
                                     <p className="text-gray-500">Artinya: {step.translation}</p>
                                 )}
                                 
                                 {step.bullets && (
                                     <ul className="list-disc list-outside ml-4 space-y-1 text-gray-600 marker:text-emerald-400">
                                         {step.bullets.map((bullet, idx) => (
                                             <li key={idx}>{bullet}</li>
                                         ))}
                                     </ul>
                                 )}
                             </div>
                        </div>
                    ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GuideView;
