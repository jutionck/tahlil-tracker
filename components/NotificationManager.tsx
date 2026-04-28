import React, { useEffect, useState } from 'react';
import { BellOff, BellRing } from 'lucide-react';
import { DeceasedProfile } from '../types';
import { calculateMilestones } from '../utils/dateUtils';

const REMINDER_WINDOW_DAYS = 3;
const REMINDER_CHECK_INTERVAL_MS = 60 * 60 * 1000;

const getDayKey = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

const getDaysUntil = (targetDate: Date, baseDate: Date): number => {
  const target = new Date(targetDate);
  target.setHours(12, 0, 0, 0);

  const base = new Date(baseDate);
  base.setHours(12, 0, 0, 0);

  return Math.round(
    (target.getTime() - base.getTime()) / (1000 * 60 * 60 * 24),
  );
};

const getReminderStorageKey = (
  profile: DeceasedProfile,
  milestoneId: string,
  dateKey: string,
): string =>
  `tahlil-reminder:${profile.deathDate}:${profile.name}:${milestoneId}:${dateKey}`;

interface NotificationManagerProps {
  profile: DeceasedProfile;
}

const NotificationManager: React.FC<NotificationManagerProps> = ({
  profile,
}) => {
  const [permission, setPermission] =
    useState<NotificationPermission>('default');

  useEffect(() => {
    if (!('Notification' in window)) return;
    setPermission(Notification.permission);
  }, []);

  useEffect(() => {
    if (permission !== 'granted' || !profile.name || !profile.deathDate) return;

    const checkAndNotify = () => {
      const milestones = calculateMilestones(profile.deathDate);
      const today = new Date();

      const upcomingMilestone = milestones
        .map((milestone) => ({
          milestone,
          daysUntil: getDaysUntil(milestone.date, today),
        }))
        .filter(
          ({ daysUntil }) =>
            daysUntil >= 0 && daysUntil <= REMINDER_WINDOW_DAYS,
        )
        .sort((left, right) => left.daysUntil - right.daysUntil)[0];

      if (!upcomingMilestone) return;

      const { milestone, daysUntil } = upcomingMilestone;
      const dateKey = getDayKey(today);
      const storageKey = getReminderStorageKey(profile, milestone.id, dateKey);

      if (localStorage.getItem(storageKey)) return;

      localStorage.setItem(storageKey, 'sent');

      const timingLabel = daysUntil === 0 ? 'hari ini' : `H-${daysUntil}`;
      new Notification(`Pengingat Selamatan: ${milestone.title}`, {
        body: `${timingLabel} untuk Almarhum/ah ${profile.name}. ${milestone.description}. Ketuk untuk melihat bacaan tahlil.`,
        icon: '/pwa-192x192.png',
        tag: `tahlil-reminder-${milestone.id}-${dateKey}`,
      });
    };

    checkAndNotify();

    const intervalId = window.setInterval(
      checkAndNotify,
      REMINDER_CHECK_INTERVAL_MS,
    );

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        checkAndNotify();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.clearInterval(intervalId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [permission, profile.name, profile.deathDate]);

  const requestPermission = async () => {
    if (!('Notification' in window)) {
      alert('Browser Anda tidak mendukung notifikasi.');
      return;
    }

    const result = await Notification.requestPermission();
    setPermission(result);

    if (result === 'granted') {
      new Notification('Notifikasi Aktif', {
        body: `Pengingat tahlilan otomatis aktif untuk ${REMINDER_WINDOW_DAYS} hari menjelang hari selamatan.`,
        icon: '/pwa-192x192.png',
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
      title={
        permission === 'granted' ? 'Notifikasi Aktif' : 'Aktifkan Notifikasi'
      }
    >
      {permission === 'granted' ? (
        <BellRing size={20} />
      ) : (
        <BellOff size={20} />
      )}
    </button>
  );
};

export default NotificationManager;
