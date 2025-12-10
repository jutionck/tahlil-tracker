
export interface Verse {
  id: number | string;
  arabic: string;
  latin?: string;
  translation?: string;
  title?: string;
  isKhususon?: boolean;
  isHeader?: boolean;
  repeat?: number;
}


export const preYasinReadings: Verse[] = [
  {
    id: 'tawasul_1',
    title: "1. Tawasul Nabi Muhammad SAW",
    arabic: "اِلَى حَضْرَةِ النَّبِيِّ الْمُصْطَفَى صَلَّى اللهُ عَليْهِ وَسَلَّمَ وَاَلِهِ وَصَحْبِهِ وَذُرِّيَّتِهِ وَاَهْلِ بَيْتِهِ اَجْمَعِيْنَ. شَيْءٌ لِلهِ لَهُمُ الْفَاتِحَةُ",
    latin: "Ila hadrotin nabiyyil musthofa shollallohu 'alaihi wasallam, wa alihi wa shohbihi wa dzurriyyatihi wa ahli baitihi ajma'in. Syai'ul lillahi lahumul fatihah.",
    translation: "Ke hadirat Nabi Muhammad SAW, keluarganya, sahabatnya, keturunannya, dan ahli baitnya. Al-Fatihah.",
    isHeader: true
  },
  {
    id: 'fatihah_1',
    title: "Al-Fatihah",
    arabic: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ. اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَ. الرَّحْمٰنِ الرَّحِيْمِ. مٰلِكِ يَوْمِ الدِّيْنِ. اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُ. اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيْمَ. صِرَاطَ الَّذِيْنَ اَنْعَمْتَ عَلَيْهِمْ ۙ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّاۤلِّيْنَ",
    latin: "(Membaca Surat Al-Fatihah...)",
  },
  {
    id: 'tawasul_wali',
    title: "2. Tawasul Para Wali & Syekh Abdul Qodir",
    arabic: "ثُمَّ اِلَى حَضْرَةِ اِخْوَانِهِ مِنَ الْاَنْبِيَاءِ وَالْمُرْسَلِيْنَ وَالْاَوْلِيَاءِ وَالشُّهَدَاءِ وَالصَّالِحِيْنَ وَالصَّحَابَةِ وَالتَّابِعِيْنَ وَالْعُلَمَاءِ الْعَامِلِيْنَ وَالْمُصَنِّفِيْنَ الْمُخْلِصِيْنَ وَجَمِيْعِ الْمَلَائِكَةِ الْمُقَرَّبِيْنَ، خُصُوْصًا اِلَى سَيِّدِنَا الشَّيْخِ عَبْدِ الْقَادِرِ الْجَيْلَانِيِّ رَضِيَ اللهُ عَنْهُ. الْفَاتِحَةُ",
    latin: "Tsumma ila hadroti ikhwanihi minal anbiya'i wal mursalin wal auliya'i wasy syuhada'i wash sholihin... khushushon ila sayyidina Syaikh Abdul Qodir Al-Jailani. Al-Fatihah.",
    isHeader: true
  },
  {
    id: 'fatihah_wali',
    title: "Al-Fatihah",
    arabic: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ. اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَ... (الْفَاتِحَةُ)",
    latin: "(Membaca Surat Al-Fatihah...)",
  },
  {
    id: 'tawasul_2',
    title: "3. Khususon Almarhum/ah",
    arabic: "ثُمَّ اِلَى حَضْرَةِ رُوْحِ ... وَاُصُوْلِهِ وَفُرُوْعِهِ وَاَهْلِ بَيْتِهِ، شَيْءٌ لِلهِ لَهُمُ الْفَاتِحَةُ",
    latin: "Tsumma ila hadroti ruhi {NAMA} wa ushulihi wa furu'ihi wa ahli baitihi, syai'ul lillahi lahumul fatihah.",
    translation: "Khusus untuk ruh {NAMA}, serta para leluhur dan keturunannya. Al-Fatihah.",
    isKhususon: true,
    isHeader: true
  },
  {
    id: 'fatihah_2',
    title: "Al-Fatihah",
    arabic: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ. اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَ... (الْفَاتِحَةُ)",
    latin: "(Membaca Surat Al-Fatihah...)",
  }
];


export const coreYasinVerses: Verse[] = [
  { id: 1, arabic: "يٰسۤ", latin: "Yā sīn.", translation: "Ya Sin." },
  { id: 2, arabic: "وَالْقُرْاٰنِ الْحَكِيْمِۙ", latin: "Wal-qur'ānil-ḥakīm(i).", translation: "Demi Al-Qur'an yang penuh hikmah," },
  { id: 3, arabic: "اِنَّكَ لَمِنَ الْمُرْسَلِيْنَۙ", latin: "Innaka laminal-mursalīn(a).", translation: "sungguh, engkau (Muhammad) adalah salah seorang dari rasul-rasul," },
  { id: 4, arabic: "عَلٰى صِرَاطٍ مُّسْتَقِيْمٍۗ", latin: "‘Alā ṣirāṭim mustaqīm(in).", translation: "(yang berada) di atas jalan yang lurus," },
  { id: 5, arabic: "تَنْزِيْلَ الْعَزِيْزِ الرَّحِيْمِۙ", latin: "Tanzīlal-‘azīzir-raḥīm(i).", translation: "(sebagai wahyu) yang diturunkan oleh (Allah) Yang Mahaperkasa, Maha Penyayang," },
  { id: 6, arabic: "لِتُنْذِرَ قَوْمًا مَّآ اُنْذِرَ اٰبَاۤؤُهُمْ فَهُمْ غٰفِلُوْنَ", latin: "Litunżira qaumam mā unżira ābā'uhum fahum gāfilūn(a).", translation: "agar engkau memberi peringatan kepada suatu kaum yang nenek moyangnya belum pernah diberi peringatan, karena itu mereka lalai." },
  { id: 7, arabic: "لَقَدْ حَقَّ الْقَوْلُ عَلٰىٓ اَكْثَرِهِمْ فَهُمْ لَا يُؤْمِنُوْنَ", latin: "Laqad ḥaqqal-qaulu ‘alā akṡarihim fahum lā yu'minūn(a).", translation: "Sungguh, pasti berlaku perkataan (hukuman) terhadap kebanyakan mereka, karena mereka tidak beriman." },
  { id: 8, arabic: "اِنَّا جَعَلْنَا فِيْٓ اَعْنَاقِهِمْ اَغْلٰلًا فَهِ ي اِلَى الْاَذْقَانِ فَهُمْ مُّقْمَحُوْنَ", latin: "Innā ja‘alnā fī a‘nāqihim aglālan fahiya ilal-ażqāni fahum muqmaḥūn(a).", translation: "Sungguh, Kami telah memasang belenggu di leher mereka, lalu (tangan mereka diangkat) ke dagu, karena itu mereka tertengadah." },
  { id: 9, arabic: "وَجَعَلْنَا مِنْۢ بَيْنِ اَيْدِيِهِمْ سَدًّا وَّمِنْ خَلْفِهِمْ سَدًّا فَاَغْشَيْنٰهُمْ فَهُمْ لَا يُبْصِرُوْنَ", latin: "Wa ja‘alnā mim baini aidīhim saddaw wa min khalfihim saddan fa agsyaināhum fahum lā yubṣirūn(a).", translation: "Dan Kami jadikan di hadapan mereka sekat (dinding) dan di belakang mereka juga sekat, dan Kami tutup (mata) mereka sehingga mereka tidak dapat melihat." },
  { id: 10, arabic: "وَسَوَاۤءٌ عَلَيْهِمْ ءَاَنْذَرْتَهُمْ اَمْ لَمْ تُنْذِرْهُمْ لَا يُؤْمِنُوْنَ", latin: "Wa sawā'un ‘alaihim a anżartahum am lam tunżirhum lā yu'minūn(a).", translation: "Dan sama saja bagi mereka, apakah engkau memberi peringatan kepada mereka atau engkau tidak memberi peringatan kepada mereka, mereka tidak akan beriman." },
  { id: 11, arabic: "اِنَّمَا تُنْذِرُ مَنِ اتَّبَعَ الذِّكْرَ وَخَشِيَ الرَّحْمٰنَ بِالْغَيْبِۚ فَبَشِّرْهُ بِمَغْفِرَةٍ وَّاَجْرٍ كَرِيْمٍ", latin: "Innamā tunżiru manittaba‘aż-żikra wa khasyiyar-raḥmāna bil-gaib(i), fa basy-syirhu bi magfiritiw wa ajrin karīm(in).", translation: "Sesungguhnya engkau hanya memberi peringatan kepada orang-orang yang mau mengikuti peringatan dan yang takut kepada Tuhan Yang Maha Pengasih, walaupun mereka tidak melihat-Nya. Maka berilah mereka kabar gembira dengan ampunan dan pahala yang mulia." },
  { id: 12, arabic: "اِنَّا نَحْنُ نُحْيِ الْمَوْتٰى وَنَكْتُبُ مَا قَدَّمُوْا وَاٰثَارَهُمْۗ وَكُلَّ شَيْءٍ اَحْصَيْنٰهُ فِيْٓ اِمَامٍ مُّبِيْنٍ", latin: "Innā naḥnu nuḥyil-mautā wa naktubu mā qaddamū wa āṡārahum, wa kulla syai'in aḥṣaināhu fī imāmim mubīn(in).", translation: "Sungguh, Kamilah yang menghidupkan orang-orang yang mati, dan Kamilah yang mencatat apa yang telah mereka kerjakan dan bekas-bekas yang mereka tinggalkan. Dan segala sesuatu Kami kumpulkan dalam Kitab Induk yang nyata (Lauh Mahfuz)." },
  { id: 13, arabic: "وَاضْرِبْ لَهُمْ مَّثَلًا اَصْحٰبَ الْقَرْيَةِۘ اِذْ جَاۤءَهَا الْمُرْسَلُوْنَۚ", latin: "Waḍrib lahum maṡalan aṣḥābal-qaryah(ti), iż jā'ahal-mursalūn(a).", translation: "Dan buatlah suatu perumpamaan bagi mereka, yaitu penduduk suatu negeri, ketika utusan-utusan datang kepada mereka;" },
  { id: 14, arabic: "اِذْ اَرْسَلْنَآ اِلَيْهِمُ اثْنَيْنِ فَكَذَّبُوْهُمَا فَعَزَّزْنَا بِثَالِثٍ فَقَالُوْٓا اِنَّآ اِلَيْكُمْ مُّرْسَلُوْنَ", latin: "Iż arsalnā ilaihimuṡnaini fa każżabūhumā fa ‘azzaznā biṡāliṡin fa qālū innā ilaikum mursalūn(a).", translation: "(yaitu) ketika Kami mengutus kepada mereka dua orang utusan, lalu mereka mendustakan keduanya; kemudian Kami kuatkan dengan (utusan) yang ketiga, maka ketiga utusan itu berkata, “Sungguh, kami adalah orang-orang yang diutus kepadamu.”" },
  { id: 15, arabic: "قَالُوْا مَآ اَنْتُمْ اِلَّا بَشَرٌ مِّثْلُنَاۙ وَمَآ اَنْزَلَ الرَّحْمٰنُ مِنْ شَيْءٍۙ اِنْ اَنْتُمْ اِلَّا تَكْذِبُوْنَ", latin: "Qālū mā antum illā basyarum miṡlunā wa mā anzalar-raḥmānu min syai'(in), in antum illā takżibūn(a).", translation: "Mereka (penduduk negeri) menjawab, “Kamu ini hanyalah manusia seperti kami, dan (Allah) Yang Maha Pengasih tidak menurunkan sesuatu apa pun; kamu hanyalah pendusta belaka.”" },
  { id: 16, arabic: "قَالُوْا رَبُّنَا يَعْلَمُ اِنَّآ اِلَيْكُمْ لَمُرْسَلُوْنَ", latin: "Qālū rabbunā ya‘lamu innā ilaikum lamursalūn(a).", translation: "Mereka (utusan-utusan) berkata, “Tuhan kami mengetahui sesungguhnya kami adalah orang-orang yang diutus kepada kamu." },
  { id: 17, arabic: "وَمَا عَلَيْنَآ اِلَّا الْبَلٰغُ الْمُبِيْنُ", latin: "Wa mā ‘alainā illal-balāgul-mubīn(u).", translation: "Dan kewajiban kami hanyalah menyampaikan (perintah Allah) dengan jelas.”" },
  { id: 18, arabic: "قَالُوْٓا اِنَّا تَطَيَّرْنَا بِكُمْۚ لَىِٕنْ لَّمْ تَنْتَهُوْا لَنَرْجُمَنَّكُمْ وَلَيَمَسَّنَّكُمْ مِّنَّا عَذَابٌ اَلِيْمٌ", latin: "Qālū innā taṭayyarnā bikum, la'il lam tantahū lanarjumannakum wa layamassan-nakum minnā ‘ażābun alīm(un).", translation: "Mereka menjawab, “Sesungguhnya kami bernasib malang karena kamu. Sungguh, jika kamu tidak berhenti (menyeru kami), niscaya kami rajam kamu dan kamu pasti akan merasakan siksaan yang pedih dari kami.”" },
  { id: 83, arabic: "فَسُبْحٰنَ الَّذِيْ بِيَدِهٖ مَلَكُوْتُ كُلِّ شَيْءٍ وَّاِلَيْهِ تُرْجَعُوْنَ ࣖ", latin: "Fa subḥānal-lażī biyadihī malakūtu kulli syai'iw wa ilaihi turja‘ūn(a).", translation: "Maka Mahasuci (Allah) yang di tangan-Nya kekuasaan atas segala sesuatu dan kepada-Nya kamu dikembalikan." }
];

export const yasinVerses: Verse[] = [...preYasinReadings, ...coreYasinVerses];


export const tahlilReadings: Verse[] = [
  {
    id: 'ikhlas',
    title: "Surat Al-Ikhlas",
    arabic: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ. قُلْ هُوَ اللّٰهُ اَحَدٌۚ. اَللّٰهُ الصَّمَدُۚ. لَمْ يَلِدْ وَلَمْ يُوْلَدْۙ. وَلَمْ يَكُنْ لَّهٗ كُفُوًا اَحَدٌ",
    latin: "Bismillahirrohmaanirrohiim. Qul huwallāhu aḥad. Allāhuṣ-ṣamad. Lam yalid wa lam yūlad. Wa lam yakul lahū kufuwan aḥad.",
    repeat: 3
  },
  {
    id: 'takbir_1',
    arabic: "لَا اِلَهَ اِلَّا اللهُ وَاللهُ اَكْبَرُ",
    latin: "Laa ilaaha illallahu wallahu akbar.",
  },
  {
    id: 'falaq',
    title: "Surat Al-Falaq",
    arabic: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ. قُلْ اَعُوْذُ بِرَبِّ الْفَلَقِۙ. مِنْ شَرِّ مَا خَلَقَۙ. وَمِنْ شَرِّ غَاسِقٍ اِذَا وَقَبَۙ. وَمِنْ شَرِّ النَّفّٰثٰتِ فِي الْعُقَدِۙ. وَمِنْ شَرِّ حَاسِدٍ اِذَا حَسَدَ",
    latin: "Bismillahirrohmaanirrohiim. Qul a‘ūżu birabbil-falaq. Min syarri mā khalaq. Wa min syarri gāsiqin iżā waqab. Wa min syarrin-naffāṡāti fil-‘uqad. Wa min syarri ḥāsidin iżā ḥasad.",
  },
  {
    id: 'takbir_2',
    arabic: "لَا اِلَهَ اِلَّا اللهُ وَاللهُ اَكْبَرُ",
    latin: "Laa ilaaha illallahu wallahu akbar.",
  },
  {
    id: 'annas',
    title: "Surat An-Nas",
    arabic: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ. قُلْ اَعُوْذُ بِرَبِّ النَّاسِۙ. مَلِكِ النَّاسِۙ. اِلٰهِ النَّاسِۙ. مِنْ شَرِّ الْوَسْوَاسِ ەۙ الْخَنَّاسِۖ. الَّذِيْ يُوَسْوِسُ فِيْ صُدُوْرِ النَّاسِۙ. مِنَ الْجِنَّةِ وَالنَّاسِ ࣖ",
    latin: "Bismillahirrohmaanirrohiim. Qul a‘ūżu birabbin-nās. Malikin-nās. Ilāhin-nās. Min syarril-waswāsil-khannās. Każī yuwaswisu fī ṣudūrin-nās. Minal-jinnati wan-nās.",
  },
  {
    id: 'takbir_3',
    arabic: "لَا اِلَهَ اِلَّا اللهُ وَاللهُ اَكْبَرُ وَلِلهِ الْحَمْدُ",
    latin: "Laa ilaaha illallahu wallahu akbar walillahil hamd.",
  },
  {
    id: 'fatihah_tahlil',
    title: "Al-Fatihah",
    arabic: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ. اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَ. الرَّحْمٰنِ الرَّحِيْمِ... (الْفَاتِحَةُ)",
    latin: "(Membaca Surat Al-Fatihah...)",
  },
  {
    id: 'baqarah_1_5',
    title: "Awal Surat Al-Baqarah",
    arabic: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ. الۤمۤ ۚ. ذٰلِكَ الْكِتٰبُ لَا رَيْبَ ۛ فِيْهِ ۛ هُدًى لِّلْمُتَّقِيْنَ ۙ. الَّذِيْنَ يُؤْمِنُوْنَ بِالْغَيْبِ وَيُقِيْمُوْنَ الصَّلٰوةَ وَمِمَّا رَزَقْنٰهُمْ يُنْفِقُوْنَ ۙ. وَالَّذِيْنَ يُؤْمِنُوْنَ بِمَآ اُنْزِلَ اِلَيْكَ وَمَآ اُنْزِلَ مِنْ قَبْلِكَ ۚ وَبِالْاٰخِرَةِ هُمْ يُوْقِنُوْنَ ۗ. اُولٰۤىِٕكَ عَلٰى هُدًى مِّنْ رَّبِّهِمْ ۙ وَاُولٰۤىِٕكَ هُمُ الْمُفْلِحُوْنَ",
    latin: "Alif-Laam-Miim. Dzaalikal kitaabu laa raiba fiih; hudal lil-muttaqiin. Alladziina yu'minuuna bil-ghaibi wa yuqiimuunash-shalaata wa mimmaa razaqnaahum yunfiquun...",
  },
  {
    id: 'ayat_kursi',
    title: "Ayat Kursi (Al-Baqarah 255)",
    arabic: "اَللّٰهُ لَآ اِلٰهَ اِلَّا هُوَۚ اَلْحَيُّ الْقَيُّوْمُ ەۚ لَا تَأْخُذُهٗ سِنَةٌ وَّلَا نَوْمٌۗ لَهٗ مَا فِي السَّمٰوٰتِ وَمَا فِي الْاَرْضِۗ مَنْ ذَا الَّذِيْ يَشْفَعُ عِنْدَهٗٓ اِلَّا بِاِذْنِهٖۗ يَعْلَمُ مَا بَيْنَ اَيْدِيْهِمْ وَمَا خَلْفَهُمْۚ وَلَا يُحِيْطُوْنَ بِشَيْءٍ مِّنْ عِلْمِهٖٓ اِلَّا بِمَا شَاۤءَۚ وَسِعَ كُرْسِيُّهُ السَّمٰوٰتِ وَالْاَرْضَۚ وَلَا يَـُٔوْدُهٗ حِفْظُهُمَاۚ وَهُوَ الْعَلِيُّ الْعَظِيْمُ",
    latin: "Allaahu laa ilaaha illaa huwal hayyul qayyuum. Laa ta'khudzuhuu sinatuw wa laa naum...",
  },
  {
    id: 'istighfar',
    title: "Istighfar",
    arabic: "اَسْتَغْفِرُاللهَ الْعَظِيْمَ",
    latin: "Astaghfirullaahal 'azhiim",
    repeat: 3
  },
  {
    id: 'tahlil_core',
    title: "Tahlil",
    arabic: "لَااِلٰهَ اِلَّا اللهُ",
    latin: "Laa ilaaha illallah",
    repeat: 33
  },
  {
    id: 'kalimat_thoyyibah',
    arabic: "لَا اِلَهَ اِلَّا اللهُ مُحَمَّدٌ رَسُوْلُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ",
    latin: "Laa ilaaha illallahu Muhammadur Rasuulullah shallallahu 'alaihi wa sallam.",
  },
  {
    id: 'doa_penutup_opening',
    title: "Doa 1: Doa Arwah (Panjang)",
    arabic: "اَلْحَمْدُ لِلهِ رَبِّ الْعَالَمِيْنَ حَمْدًا الشَّاكِرِيْنَ حَمْدَ النَّاعِمِيْنَ حَمْدًا يُوَافِيْ نِعَمَهُ وَيُكَافِئُ مَزِيْدَهُ، يَا رَبَّنَا لَكَ الْحَمْدُ كَمَا يَنْبَغِيْ لِجَلَالِ وَجْهِكَ وَعَظِيْمِ سُلْطَانِكَ. اَللّٰهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى اٰلِى سَيِّدِنَا مُحَمَّدٍ",
    latin: "Alhamdulillahi rabbil 'aalamiin... Ya rabbana lakal hamdu kamaa yanbaghii lijalaali wajhika wa 'azhiimi sulthaanik. Allahumma shalli wa sallim 'alaa sayyidinaa Muhammad...",
    isHeader: true
  },
  {
    id: 'doa_arwah_1',
    title: "Doa Penyampaian Pahala",
    arabic: "اَللّٰهُمَّ تَقَبَّلْ وَاَوْصِلْ ثَوَابَ مَا قَرَأْنَاهُ مِنَ الْقُرْآنِ الْعَظِيْمِ وَمَا هَلَّلْنَا وَمَا سَبَّحْنَا وَمَا اسْتَغْفَرْنَا وَمَا صَلَّيْنَا عَلَى سَيِّدِنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ هَدِيَّةً وَاصِلَةً وَرَحْمَةً نَازِلَةً وَبَرَكَةً شَامِلَةً اِلَى حَضْرَةِ حَبِيْبِنَا وَشَفِيْعِنَا وَقُرَّةِ اَعْيُنِنَا سَيِّدِنَا وَمَوْلَانَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَاِلَى جَمِيْعِ اِخْوَانِهِ مِنَ الْاَنْبِيَاءِ وَالْمُرْسَلِيْنَ وَالْاَوْلِيَاءِ وَالشُّهَدَاءِ وَالصَّالِحِيْنَ وَالصَّحَابَةِ وَالتَّابِعِيْنَ وَالْعُلَمَاءِ الْعَامِلِيْنَ وَالْمُصَنِّفِيْنَ الْمُخْلِصِيْنَ وَجَمِيْعِ الْمُجَاهِدِيْنَ فِيْ سَبِيْلِ اللهِ رَبِّ الْعَالَمِيْنَ وَالْمَلَائِكَةِ الْمُقَرَّبِيْنَ، خُصُوْصًا اِلَى سَيِّدِنَا الشَّيْخِ عَبْدِ الْقَادِرِ الْجَيْلَانِيِّ",
    latin: "Allahumma taqobbal wa aushil tsawaba maa qoro'naahu minal qur'aanil 'azhiim... (Ya Allah, terimalah dan sampaikanlah pahala bacaan kami...)",
  },
  {
    id: 'doa_khususon',
    title: "Doa Khusus Almarhum/ah",
    arabic: "ثُمَّ اِلَى جَمِيْعِ اَهْلِ الْقُبُوْرِ مِنَ الْمُسْلِمِيْنَ وَالْمُسْلِمَاتِ وَالْمُؤْمِنِيْنَ وَالْمُؤْمِنَاتِ مِنْ مَشَارِقِ الْاَرْضِ اِلَى مَغَارِبِهَا بَرِّهَا وَبَحْرِهَا، خُصُوْصًا اِلَى آبَائِنَا وَاُمَّهَاتِنَا وَاَجْدَادِنَا وَجَدَّاتِنَا وَنَخُصُّ خُصُوْصًا اِلَى مَنِ اجْتَمَعْنَا هٰهُنَا بِسَبَبِهِ وَلِاَجْلِهِ ...",
    latin: "Tsumma ila jami'i ahlil qubuur... Khushushon ila... {NAMA}",
    translation: "Kemudian kepada seluruh ahli kubur... Khususnya kepada {NAMA}...",
    isKhususon: true
  },
  {
    id: 'doa_ampunan',
    arabic: "اَللّٰهُمَّ اغْفِرْ لَهُمْ وَارْحَمْهُمْ وَعَافِهِمْ وَاعْفُ عَنْهُمْ. اَللّٰهُمَّ اَنْزِلِ الرَّحْمَةَ وَالْمَغْفِرَةَ عَلَى اَهْلِ الْقُبُوْرِ مِنْ اَهْلِ لَااِلٰهَ اِلَّا اللهُ مُحَمَّدٌ رَسُوْلُ اللهِ",
    latin: "Allahummaghfirlahum warhamhum wa 'aafihim wa'fu 'anhum...",
  },
  {
    id: 'fatihah_doa_1',
    title: "Al-Fatihah (Penutup Doa 1)",
    arabic: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ. اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَ. الرَّحْمٰنِ الرَّحِيْمِ. مٰلِكِ يَوْمِ الدِّيْنِ. اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُ. اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيْمَ. صِرَاطَ الَّذِيْنَ اَنْعَمْتَ عَلَيْهِمْ ۙ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّاۤلِّيْنَ",
    latin: "(Membaca Surat Al-Fatihah...)",
    isHeader: true
  },
  {
    id: 'doa_2_start',
    title: "Doa 2: Doa Selamat & Penutup (Singkat)",
    arabic: "اَللّٰهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ صَلَاةً تُنْجِيْنَا بِهَا مِنْ جَمِيْعِ الْاَهْوَالِ وَالْاٰفَاتِ، وَتَقْضِيْ لَنَا بِهَا جَمِيْعَ الْحَاجَاتِ، وَتُطَهِّرُنَا بِهَا مِنْ جَمِيْعِ السَّيِّئَاتِ، وَتَرْفَعُنَا بِهَا عِنْدَكَ اَعْلَى الدَّرَجَاتِ، وَتُبَلِّغُنَا بِهَا اَقْصَى الْغَايَاتِ مِنْ جَمِيْعِ الْخَيْرَاتِ فِي الْحَيَاةِ وَبَعْدَ الْمَمَاتِ",
    latin: "Allahumma sholli 'ala sayyidina Muhammadin sholatan tunjiina biha min jami'il ahwali wal aafaat...",
    isHeader: true
  },
  {
    id: 'doa_sapu_jagat',
    arabic: "رَبَّنَا اٰتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْاٰخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ. سُبْحَانَ رَبِّكَ رَبِّ الْعِزَّةِ عَمَّا يَصِفُوْنَ وَسَلَامٌ عَلَى الْمُرْسَلِيْنَ وَالْحَمْدُ لِلهِ رَبِّ الْعَالَمِيْنَ",
    latin: "Rabbanaa aatinaa fid-dunyaa hasanah wa fil-aakhirati hasanah wa qinaa 'adzaaban-naar. Subhaana rabbika rabbil 'izzati 'ammaa yashifuun wa salaamun 'alal mursaliin wal hamdulillahi rabbil 'aalamiin.",
  },
  {
    id: 'fatihah_closing',
    title: "Al-Fatihah (Penutup Majelis)",
    arabic: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ. اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَ. الرَّحْمٰنِ الرَّحِيْمِ. مٰلِكِ يَوْمِ الدِّيْنِ. اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُ. اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيْمَ. صِرَاطَ الَّذِيْنَ اَنْعَمْتَ عَلَيْهِمْ ۙ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّاۤلِّيْنَ",
    latin: "(Membaca Surat Al-Fatihah...)",
    isHeader: true
  }
];
