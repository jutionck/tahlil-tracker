export interface GuideStep {
  id: string;
  title: string;
  arabic?: string;
  latin?: string;
  translation?: string;
  description?: string;
  bullets?: string[];
}

export interface GuideSection {
  id: string;
  title: string;
  description: string;
  steps: GuideStep[];
}

export const funeralGuides: GuideSection[] = [
  {
    id: 'memandikan',
    title: '1. Memandikan Jenazah',
    description: 'Tata cara memandikan jenazah sesuai syariat Islam.',
    steps: [
      {
        id: 'syarat',
        title: 'Syarat Wajib',
        bullets: [
          'Jenazah orang Islam.',
          'Ada tubuhnya (meski sedikit).',
          'Bukan mati syahid (mati dalam peperangan membela agama).',
        ]
      },
      {
        id: 'niat_laki',
        title: 'Niat Memandikan (Jenazah Laki-laki)',
        arabic: 'نَوَيْتُ الْغُسْلَ لِاَدَاءِ هَذَا الْمَيِّتِ لِلهِ تَعَالَى',
        latin: 'Nawaitul ghusla li adaa-i haadzal mayyiti lillaahi ta\'aala.',
        translation: 'Sengaja saya niat memandikan untuk memenuhi kewajiban dari mayit (laki-laki) ini karena Allah Ta\'ala.'
      },
      {
        id: 'niat_perempuan',
        title: 'Niat Memandikan (Jenazah Perempuan)',
        arabic: 'نَوَيْتُ الْغُسْلَ لِاَدَاءِ هَذِهِ الْمَيِّتَةِ لِلهِ تَعَالَى',
        latin: 'Nawaitul ghusla li adaa-i haadzihil mayyitati lillaahi ta\'aala.',
        translation: 'Sengaja saya niat memandikan untuk memenuhi kewajiban dari mayit (perempuan) ini karena Allah Ta\'ala.'
      },
      {
        id: 'tata_cara',
        title: 'Ringkasan Tata Cara',
        bullets: [
          'Letakkan jenazah di tempat tinggi (dipan).',
          'Tutup auratnya dengan kain.',
          'Bersihkan kotoran (istinja) dan rongga mulut/hidung.',
          'Wudhukan jenazah.',
          'Basuh seluruh tubuh dengan air sabun/bidara dari kanan ke kiri.',
          'Bilas dengan air bersih.',
          'Disunnahkan bilasan terakhir menggunakan air kapur barus.'
        ]
      }
    ]
  },
  {
    id: 'mengkafani',
    title: '2. Mengkafani',
    description: 'Ketentuan jumlah kain kafan.',
    steps: [
      {
        id: 'laki',
        title: 'Untuk Laki-laki',
        description: 'Disunnahkan 3 (tiga) lapis kain putih tanpa baju jubah dan sorban. Namun boleh juga menggunakan gamis dan sorban.'
      },
      {
        id: 'perempuan',
        title: 'Untuk Perempuan',
        description: 'Disunnahkan 5 (lima) lembar kain, terdiri dari:',
        bullets: [
          'Kain basahan (penutup bawah).',
          'Baju kurung.',
          'Kerudung (tutup kepala).',
          'Dua lembar kain penutup seluruh tubuh.'
        ]
      }
    ]
  },
  {
    id: 'menyolatkan',
    title: '3. Menyolatkan',
    description: 'Rukun dan bacaan Sholat Jenazah (4 Takbir tanpa rukuk/sujud).',
    steps: [
      {
        id: 'niat_laki',
        title: 'Niat (Laki-laki)',
        arabic: 'اُصَلِّى عَلَى هَذَا الْمَيِّتِ اَرْبَعَ تَكْبِيْرَاتٍ فَرْضَ كِفَايَةٍ اِمَامًا/مَأْمُوْمًا ِللهِ تَعَالَى',
        latin: 'Usholli \'ala haadzal mayyiti arba\'a takbiirotin fardho kifaayatin (imaaman/ma\'muuman) lillahi ta\'aala.',
        translation: 'Saya niat sholat atas mayit ini empat kali takbir fardhu kifayah, karena Allah Ta\'ala.'
      },
      {
        id: 'niat_perempuan',
        title: 'Niat (Perempuan)',
        arabic: 'اُصَلِّى عَلَى هَذِهِ الْمَيِّتَةِ اَرْبَعَ تَكْبِيْرَاتٍ فَرْضَ كِفَايَةٍ اِمَامًا/مَأْمُوْمًا ِللهِ تَعَالَى',
        latin: 'Usholli \'ala haadzihil mayyitati arba\'a takbiirotin fardho kifaayatin (imaaman/ma\'muuman) lillahi ta\'aala.'
      },
      {
        id: 'takbir_1',
        title: 'Takbir Pertama (Membaca Al-Fatihah)',
        description: 'Setelah Takbiratul Ihram, membaca Surat Al-Fatihah.'
      },
      {
        id: 'takbir_2',
        title: 'Takbir Kedua (Sholawat)',
        arabic: 'اللّٰهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ',
        latin: 'Allahumma sholli \'ala sayyidina Muhammad wa \'ala aali sayyidina Muhammad.'
      },
      {
        id: 'takbir_3',
        title: 'Takbir Ketiga (Doa Mayit)',
        arabic: 'اللّٰهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ',
        latin: 'Allahummaghfir lahu (lahaa) warhamhu (haa) wa \'aafihi (haa) wa\'fu \'anhu (haa).',
        translation: 'Ya Allah ampunilah dia, berilah rahmat, ksejahteraan, dan maafkanlah kesalahannya. (Ganti hu dengan haa jika perempuan)'
      },
      {
        id: 'takbir_4',
        title: 'Takbir Keempat (Doa Penutup)',
        arabic: 'اللّٰهُمَّ لَا تَحْرِمْنَا أَجْرَهُ وَلَا تَفْتِنَّا بَعْدَهُ وَاغْفِرْ لَنَا وَلَهُ',
        latin: 'Allahumma laa tahrimnaa ajrahu wa laa taftinnaa ba\'dahu waghfir lanaa wa lahu.',
        translation: 'Ya Allah janganlah Engkau halangi pahalanya sampai kepada kami, dan janganlah Engkau beri fitnah kepada kami sepeninggalnya, dan ampunilah kami dan dia.'
      },
      {
        id: 'salam',
        title: 'Salam',
        description: 'Mengucapkan salam ke kanan dan ke kiri.'
      }
    ]
  },
  {
    id: 'menguburkan',
    title: '4. Menguburkan',
    description: 'Doa saat memasukkan jenazah ke liang kubur.',
    steps: [
      {
        id: 'doa_masuk',
        title: 'Doa Memasukkan Jenazah',
        arabic: 'بِسْمِ اللهِ وَعَلَى مِلَّةِ رَسُوْلِ اللهِ',
        latin: 'Bismillahi wa \'ala millati rasuulillah.',
        translation: 'Dengan nama Allah dan atas agama Rasulullah.'
      },
      {
        id: 'posisi',
        title: 'Posisi Jenazah',
        bullets: [
          'Jenazah diletakkan miring menghadap Kiblat.',
          'Pipi kanan menempel ke tanah.',
          'Tali ikatan kain kafan dilepas.',
          'Azan dan Iqamah (sunnah menurut sebagian ulama).'
        ]
      }
    ]
  }
];
