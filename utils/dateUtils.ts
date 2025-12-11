import { CalculationMethod, Milestone } from '../types';

const DAYS = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const MONTHS = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

const PASARAN = ['Legi', 'Pahing', 'Pon', 'Wage', 'Kliwon'];

export const formatDateIndonesian = (date: Date): string => {
  const dayName = DAYS[date.getDay()];
  const day = date.getDate();
  const month = MONTHS[date.getMonth()];
  const year = date.getFullYear();
  return `${dayName}, ${day} ${month} ${year}`;
};

export const getJavanesePasaran = (date: Date): string => {
  const refDate = new Date(2024, 0, 1); // Jan 1 2024
  const diffTime = date.getTime() - refDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  let pasaranIndex = (1 + diffDays) % 5;

  if (pasaranIndex < 0) pasaranIndex += 5;

  return PASARAN[pasaranIndex];
};

export const calculateMilestones = (
  deathDateStr: string,
  method: CalculationMethod = CalculationMethod.TRADITIONAL
): Milestone[] => {
  if (!deathDateStr) return [];

  const deathDate = new Date(deathDateStr);
  deathDate.setHours(12, 0, 0, 0);

  const offset = method === CalculationMethod.TRADITIONAL ? -1 : 0;

  const createMilestone = (daysToAdd: number, title: string, javaneseName: string, desc: string): Milestone => {
    const targetDate = new Date(deathDate);
    targetDate.setDate(deathDate.getDate() + daysToAdd + offset);

    return {
      id: `m-${daysToAdd}`,
      title,
      javaneseName,
      description: desc,
      date: targetDate,
      daysFromDeath: daysToAdd
    };
  };

  const milestones: Milestone[] = [
    createMilestone(3, '3 Hari', 'Nelu', 'Doa bersama hari ke-3'),
    createMilestone(7, '7 Hari', 'Mitung Dina', 'Tahlilan 7 hari berturut-turut'),
    createMilestone(40, '40 Hari', 'Matang Puluh', 'Peringatan 40 hari'),
    createMilestone(100, '100 Hari', 'Nyatus', 'Peringatan 100 hari'),
    createMilestone(354, '1 Tahun (Haul 1)', 'Mendak Pisan', 'Peringatan 1 tahun (Hijriah/Jawa)'),
    createMilestone(708, '2 Tahun (Haul 2)', 'Mendak Pindo', 'Peringatan 2 tahun'),
    createMilestone(1000, '1000 Hari', 'Nyewu', 'Peringatan 1000 hari (Penutup)'),
  ];

  return milestones;
};

export const generateGoogleCalendarUrl = (milestone: Milestone, deceasedName: string): string => {
  const date = milestone.date;
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const dateStr = `${yyyy}${mm}${dd}`;

  const nextDay = new Date(date);
  nextDay.setDate(date.getDate() + 1);
  const nYyyy = nextDay.getFullYear();
  const nMm = String(nextDay.getMonth() + 1).padStart(2, '0');
  const nDd = String(nextDay.getDate()).padStart(2, '0');
  const nextDateStr = `${nYyyy}${nMm}${nDd}`;

  const title = encodeURIComponent(`Tahlilan ${milestone.title} - ${deceasedName}`);
  const details = encodeURIComponent(
    `Peringatan ${milestone.title} (${milestone.javaneseName}) untuk Almarhum/ah ${deceasedName}.\n\n` +
    `${milestone.description}\n` +
    `Hari/Pasaran: ${formatDateIndonesian(date)} (${getJavanesePasaran(date)})`
  );

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dateStr}/${nextDateStr}&details=${details}`;
};