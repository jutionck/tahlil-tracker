import React, { useEffect, useState } from 'react';
import { Bell, BellOff, BellRing } from 'lucide-react';
import { DeceasedProfile } from '../types';
import { calculateMilestones } from '../utils/dateUtils';

interface NotificationManagerProps {
  profile: DeceasedProfile;
}

const NotificationManager: React.FC<NotificationManagerProps> = ({ profile }) => {
  const [permission, setPermission] = useState<NotificationPermission>('default');

  useEffect(() => {
    if (!('Notification' in window)) return;
    setPermission(Notification.permission);
  }, []);

  useEffect(() => {
    if (permission === 'granted' && profile.name && profile.deathDate) {
      checkAndNotify();
    }
  }, [permission, profile]);

  const checkAndNotify = () => {
    const milestones = calculateMilestones(profile.deathDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayMilestone = milestones.find(
      (m) => m.date.toDateString() === today.toDateString()
    );

    if (todayMilestone) {
        new Notification(`Hari Selamatan: ${todayMilestone.title}`, {
            body: `Hari ini adalah ${todayMilestone.title} untuk Almarhum/ah ${profile.name}. Ketuk untuk melihat bacaan tahlil.`,
            icon: '/pwa-192x192.png',
            tag: 'tahlil-reminder-' + todayMilestone.id
        });
    }
  };

  const requestPermission = async () => {
    if (!('Notification' in window)) {
      alert('Browser Anda tidak mendukung notifikasi.');
      return;
    }

    const result = await Notification.requestPermission();
    setPermission(result);
    
    if (result === 'granted') {
      new Notification('Notifikasi Aktif', {
        body: 'Pengingat tahlilan akan muncul saat hari selamatan tiba.',
        icon: '/pwa-192x192.png'
      });
    }
  };

  if (!('Notification' in window)) return null;

  return (
    <button
      onClick={requestPermission}
      className={`p-2 rounded-full transition-colors ${
        permission === 'granted' 
          ? 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200' 
          : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
      }`}
      title={permission === 'granted' ? 'Notifikasi Aktif' : 'Aktifkan Notifikasi'}
    >
      {permission === 'granted' ? <BellRing size={20} /> : <BellOff size={20} />}
    </button>
  );
};

export default NotificationManager;
