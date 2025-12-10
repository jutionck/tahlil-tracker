import { CalculationMethod, Milestone } from '../types';

// Standard day names in Indonesian
const DAYS = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const MONTHS = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

// Javanese Pasaran cycle (5 days)
const PASARAN = ['Legi', 'Pahing', 'Pon', 'Wage', 'Kliwon'];

// Helper to get formatted date string
export const formatDateIndonesian = (date: Date): string => {
  const dayName = DAYS[date.getDay()];
  const day = date.getDate();
  const month = MONTHS[date.getMonth()];
  const year = date.getFullYear();
  return `${dayName}, ${day} ${month} ${year}`;
};

// Helper to calculate Javanese Pasaran
// Using a known reference date: Jan 1, 2024 was a Monday Pahing
export const getJavanesePasaran = (date: Date): string => {
  const refDate = new Date(2024, 0, 1); // Jan 1 2024
  const diffTime = date.getTime() - refDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  // 1 Jan 2024 was Pahing (Index 1).
  // Modulo math to find current day index
  let pasaranIndex = (1 + diffDays) % 5;
  
  // Handle negative days if date is before ref
  if (pasaranIndex < 0) pasaranIndex += 5;
  
  return PASARAN[pasaranIndex];
};

export const calculateMilestones = (
  deathDateStr: string,
  method: CalculationMethod = CalculationMethod.TRADITIONAL
): Milestone[] => {
  if (!deathDateStr) return [];
  
  const deathDate = new Date(deathDateStr);
  // Reset hours to avoid timezone issues affecting day calculation
  deathDate.setHours(12, 0, 0, 0);

  // Traditional Javanese/Islamic counting usually counts the day of death as Day 1.
  // Modern/Mathematical might count 24 hours later as Day 1.
  // Here we implement the subtraction factor.
  // If Traditional: Day 7 is (DeathDate + 6 days).
  // If Modern (Strict +7): (DeathDate + 7 days).
  
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

// Generate Google Calendar URL
export const generateGoogleCalendarUrl = (milestone: Milestone, deceasedName: string): string => {
  // Format date to YYYYMMDD
  const date = milestone.date;
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const dateStr = `${yyyy}${mm}${dd}`;

  // Use next day for end date (for all-day event)
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
  
  // action=TEMPLATE creates a new event
  // dates=START/END
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dateStr}/${nextDateStr}&details=${details}`;
};