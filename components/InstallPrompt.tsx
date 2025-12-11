import React, { useEffect, useState } from 'react';
import { Download, X } from 'lucide-react';

const InstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setShowPrompt(false);
    }
    setDeferredPrompt(null);
  };

  const handleClose = () => {
    setShowPrompt(false);
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed top-4 left-4 right-4 z-50 bg-white rounded-xl shadow-xl p-4 border border-emerald-100 flex items-center justify-between animate-in slide-in-from-top duration-500">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
            <Download size={20} />
        </div>
        <div>
            <h4 className="font-bold text-gray-800 text-sm">Install Aplikasi</h4>
            <p className="text-xs text-gray-500">Akses lebih cepat & offline</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button 
            onClick={handleClose}
            className="p-2 text-gray-400 hover:text-gray-600"
        >
            <X size={18} />
        </button>
        <button 
            onClick={handleInstallClick}
            className="bg-emerald-600 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-emerald-700 transition"
        >
            Install
        </button>
      </div>
    </div>
  );
};

export default InstallPrompt;
