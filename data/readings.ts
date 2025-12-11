
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
    latin: "Bismillāhir-raḥmānir-raḥīm. Al-ḥamdu lillāhi rabbil-‘ālamīn. Ar-raḥmānir-raḥīm. Māliki yaumid-dīn. Iyyāka na‘budu wa iyyāka nasta‘īn. Ihdinaṣ-ṣirāṭal-mustaqīm. Ṣirāṭal-lażīna an‘amta ‘alaihim gairil-magḍūbi ‘alaihim wa laḍ-ḍāllīn.",
  },
  {
    id: 'tawasul_wali',
    title: "2. Tawasul Para Wali & Syekh Abdul Qodir",
    arabic: "ثُمَّ اِلَى حَضْرَةِ اِخْوَانِهِ مِنَ الْاَنْبِيَاءِ وَالْمُرْسَلِيْنَ وَالْاَوْلِيَاءِ وَالشُّهَدَاءِ وَالصَّالِحِيْنَ وَالصَّحَابَةِ وَالتَّابِعِيْنَ وَالْعُلَمَاءِ الْعَامِلِيْنَ وَالْمُصَنِّفِيْنَ الْمُخْلِصِيْنَ وَجَمِيْعِ الْمَلَائِكَةِ الْمُقَرَّبِيْنَ، خُصُوْصًا اِلَى سَيِّدِنَا الشَّيْخِ عَبْدِ الْقَادِرِ الْجَيْلَانِيِّ رَضِيَ اللهُ عَنْهُ. الْفَاتِحَةُ",
    latin: "Tsumma ila hadroti ikhwanihi minal anbiya'i wal mursalin wal auliya'i wasy syuhada'i wash sholihin, wash shohabati wat tabi'in, wal 'ulama'il 'amilin, wal mushonnifinal mukhlishin, wa jami'il malaikatil muqorrobin, khushushon ila sayyidina Syaikh Abdul Qodir Al-Jailani radhiyallahu 'anhu. Al-Fatihah.",
    isHeader: true
  },
  {
    id: 'fatihah_wali',
    title: "Al-Fatihah",
    arabic: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ. اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَ. الرَّحْمٰنِ الرَّحِيْمِ. مٰلِكِ يَوْمِ الدِّيْنِ. اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُ. اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيْمَ. صِرَاطَ الَّذِيْنَ اَنْعَمْتَ عَلَيْهِمْ ۙ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّاۤلِّيْنَ",
    latin: "Bismillāhir-raḥmānir-raḥīm. Al-ḥamdu lillāhi rabbil-‘ālamīn. Ar-raḥmānir-raḥīm. Māliki yaumid-dīn. Iyyāka na‘budu wa iyyāka nasta‘īn. Ihdinaṣ-ṣirāṭal-mustaqīm. Ṣirāṭal-lażīna an‘amta ‘alaihim gairil-magḍūbi ‘alaihim wa laḍ-ḍāllīn.",
  },
  {
    id: 'tawasul_2',
    title: "3. Khususon Almarhum/ah",
    arabic: "ثُمَّ اِلَى حَضْرَةِ رُوْحِ {NAMA} وَاُصُوْلِهِ وَفُرُوْعِهِ وَاَهْلِ بَيْتِهِ، شَيْءٌ لِلهِ لَهُمُ الْفَاتِحَةُ",
    latin: "Tsumma ila hadroti ruhi {NAMA} wa ushulihi wa furu'ihi wa ahli baitihi, syai'ul lillahi lahumul fatihah.",
    translation: "Khusus untuk ruh {NAMA}, serta para leluhur dan keturunannya. Al-Fatihah.",
    isKhususon: true,
    isHeader: true
  },
  {
    id: 'fatihah_2',
    title: "Al-Fatihah",
    arabic: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ. اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَ. الرَّحْمٰنِ الرَّحِيْمِ. مٰلِكِ يَوْمِ الدِّيْنِ. اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُ. اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيْمَ. صِرَاطَ الَّذِيْنَ اَنْعَمْتَ عَلَيْهِمْ ۙ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّاۤلِّيْنَ",
    latin: "Bismillāhir-raḥmānir-raḥīm. Al-ḥamdu lillāhi rabbil-‘ālamīn. Ar-raḥmānir-raḥīm. Māliki yaumid-dīn. Iyyāka na‘budu wa iyyāka nasta‘īn. Ihdinaṣ-ṣirāṭal-mustaqīm. Ṣirāṭal-lażīna an‘amta ‘alaihim gairil-magḍūbi ‘alaihim wa laḍ-ḍāllīn.",
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
  { id: 19, arabic: "وَمَآ اَنْزَلْنَا عَلٰى قَوْمِهٖ مِنْۢ بَعْدِهٖ مِنْ جُنْدٍ مِّنَ السَّمَاۤءِ وَمَا كُنَّا مُنْزِلِيْنَ", latin: "Wa mā anzalnā ‘alā qaumihī mim ba‘dihī min jundim minas-samā'i wa mā kunnā munzilīn(a).", translation: "Dan setelah dia (meninggal), Kami tidak menurunkan suatu pasukan pun dari langit kepada kaumnya, dan Kami tidak perlu menurunkannya." },
  { id: 20, arabic: "اِنْ كَانَتْ اِلَّا صَيْحَةً وَّاحِدَةً فَاِذَا هُمْ خٰمِدُوْنَ", latin: "In kānat illā ṣaiḥataw wāḥidatan fa iżā hum khāmidūn(a).", translation: "Hanya ada satu teriakan saja (dari Jibril), maka mereka semua mati kaku." },
  { id: 21, arabic: "يٰحَسْرَةً عَلَى الْعِبَادِۚ مَا يَأْتِيْهِمْ مِّنْ رَّسُوْلٍ اِلَّا كَانُوْا بِهٖ يَسْتَهْزِءُوْنَ", latin: "Yā ḥasratan ‘alal-‘ibād(i), mā ya'tīhim mir rasūlin illā kānū bihī yastahzi'ūn(a).", translation: "Alangkah besar penyesalan terhadap hamba-hamba itu, setiap datang seorang rasul kepada mereka, mereka selalu memperolok-olokkannya." },
  { id: 22, arabic: "اَلَمْ يَرَوْا كَمْ اَهْلَكْنَا قَبْلَهُمْ مِّنَ الْقُرُوْنِ اَنَّهُمْ اِلَيْهِمْ لَا يَرْجِعُوْنَ", latin: "Alam yarau kam ahlaknā qablahum minal-qurūni annahum ilaihim lā yarji‘ūn(a).", translation: "Tidakkah mereka mengetahui berapa banyak umat-umat sebelum mereka yang telah Kami binasakan. Orang-orang (yang telah Kami binasakan) itu tidak ada yang kembali kepada mereka." },
  { id: 23, arabic: "وaاِنْ كُلٌّ لَّمَّا جَمِيْعٌ لَّدَيْنَا مُحْضَرُوْنَ ࣖ", latin: "Wa in kullul ammā jamī‘ul ladainā muḥḍarūn(a).", translation: "Dan setiap (umat), semuanya akan dihadapkan kepada Kami." },
  { id: 24, arabic: "وَاٰيَةٌ لَّهُمُ الْاَرْضُ الْمَيْتَةُ ۖاَحْيَيْنٰهَا وَاَخْرَجْنَا مِنْهَا حَبًّا فَمِنْهُ يَأْكُلُوْنَ", latin: "Wa āyatul lahumul-arḍul-maitatu aḥyaināhā wa akhrajnā minhā ḥabban fa minhu ya'kulūn(a).", translation: "Dan suatu tanda (kekuasaan Allah) bagi mereka adalah bumi yang mati (tandus). Kami hidupkan bumi itu dan Kami keluarkan darinya biji-bijian, maka dari (biji-bijian) itu mereka makan." },
  { id: 25, arabic: "وَجَعَلْنَا فَيْهَا جَنّٰتٍ مِّنْ نَّخِيْلٍ وَّاَعْنَابٍ وَّفَجَّرْنَا فِيْهَا مِنَ الْعُيُوْنِۙ", latin: "Wa ja‘alnā fīhā jannātim min nakhīliw wa a‘nābiw wa fajjarnā fīhā minal-‘uyūn(i).", translation: "Dan Kami jadikan padanya di bumi itu kebun-kebun kurma dan anggur dan Kami pancarkan padanya beberapa mata air," },
  { id: 26, arabic: "لِيَأْكُلُوْا مِنْ ثَمَرِهٖۙ وَمَا عَمِلَتْهُ اَيْدِيْهِمْ ۗ اَفَلَا يَشْكُرُوْنَ", latin: "Liya'kulū min ṡamarihī wa mā ‘amilathu aidīhim, afalā yasykurūn(a).", translation: "agar mereka dapat makan dari buahnya, dan dari hasil usaha tangan mereka. Maka mengapa mereka tidak bersyukur?" },
  { id: 27, arabic: "سُبْحٰنَ الَّذِيْ خَلَقَ الْاَزْوَاجَ كُلَّهَا مِمَّا تُنۢبِتُ الْاَرْضُ وَمِنْ اَنْفُسِهِمْ وَمِمَّا لَا يَعْلَمُوْنَ", latin: "Subḥānal-lażī khalaqal-azwāja kullahā mimmā tumbitul-arḍu wa min anfusihim wa mimmā lā ya‘lamūn(a).", translation: "Mahasuci (Allah) yang telah menciptakan semuanya berpasang-pasangan, baik dari apa yang ditumbuhkan oleh bumi dan dari diri mereka sendiri, maupun dari apa yang tidak mereka ketahui." },
  { id: 28, arabic: "وَاٰيَةٌ لَّهُمُ الَّيْلُ ۖنَسْلَخُ مِنْهُ النَّهَارَ فَاِذَا هُمْ مُّظْلِمُوْنَۙ", latin: "Wa āyatul lahumul-lailu naslakhu minhun-nahāra fa iżā hum muẓlimūn(a).", translation: "Dan suatu tanda (kekuasaan Allah) bagi mereka adalah malam; Kami tanggalkan siang dari (malam) itu, maka seketika itu mereka (berada dalam) kegelapan," },
  { id: 29, arabic: "وَالشَّمْسُ تَجْرِيْ لِمُسْتَقَرٍّ لَّهَا ۗذٰلِكَ تَقْدِيْرُ الْعَزِيْزِ الْعَلِيْمِۗ", latin: "Wasy-syamsu tajrī limustaqarril lahā, żālika taqdīrul-‘azīzil-‘alīm(i).", translation: "dan matahari berjalan di tempat peredarannya. Demikianlah ketetapan (Allah) Yang Mahaperkasa, Maha Mengetahui." },
  { id: 30, arabic: "وَالْقَمَرَ قَدَّرْنٰهُ مَنَازِلَ حَتّٰى عَادَ كَالْعُرْجُوْنِ الْقَدِيْمِ", latin: "Wal-qamara qaddarnāhu manāzila ḥattā ‘āda kal-‘urjūnil-qadīm(i).", translation: "Dan telah Kami tetapkan tempat peredaran bagi bulan, sehingga (setelah ia sampai ke tempat peredaran yang terakhir) kembalilah ia seperti bentuk tandan yang tua." },
  { id: 31, arabic: "لَا الشَّمْسُ يَنْۢبَغِيْ لَهَآ اَنْ تُدْرِكَ الْقَمَرَ وَلَا الَّيْلُ سَابِقُ النَّهَارِ ۗوَكُلٌّ فِيْ فَلَكٍ يَّسْبَحُوْنَ", latin: "Lasy-syamsu yambagī lahā an tudrikal-qamara wa lal-lailu sābiqun-nahār(i), wa kullun fī falakiy yasbaḥūn(a).", translation: "Tidaklah mungkin bagi matahari mengejar bulan dan malam pun tidak dapat mendahului siang. Masing-masing beredar pada garis edarnya." },
  { id: 32, arabic: "وَاٰيَةٌ لَّهُمْ اَنَّا حَمَلْنَا ذُرِّيَّتَهُمْ فِي الْفُلْكِ الْمَشْحُوْنِۙ", latin: "Wa āyatul lahum annā ḥamalnā żurriyyatahum fil-fulkil-masyḥūn(i).", translation: "Dan suatu tanda (kebesaran Allah) bagi mereka adalah bahwa Kami angkut keturunan mereka dalam kapal yang penuh muatan," },
  { id: 33, arabic: "وَخَلَقْنَا لَهُمْ مِّنْ مِّثْلِهٖ مَا يَرْكَبُوْنَ", latin: "Wa khalaqnā lahum mim miṡlihī mā yarkabūn(a).", translation: "dan Kami ciptakan (juga) untuk mereka (angkutan lain) seperti apa yang mereka kendarai." },
  { id: 34, arabic: "وaاِنْ نَّشَأْ نُغْرِقْهُمْ فَلَا صَرِيْخَ لَهُمْ وَلَا هُمْ يُنْقَذُوْنَۙ", latin: "Wa in nasya' nugriqhum falā ṣarīkha lahum wa lā hum yunqażūn(a).", translation: "Dan jika Kami menghendaki, Kami tenggelamkan mereka; maka tidak ada penolong bagi mereka dan tidak (pula) mereka diselamatkan," },
  { id: 35, arabic: "اِلَّا رَحْمَةً مِّنَّا وَمَتَاعًا اِلٰى حِيْنٍ", latin: "Illā raḥmatam minnā wa matā‘an ilā ḥīn(in).", translation: "melainkan (Kami selamatkan mereka) karena rahmat dari Kami dan untuk memberikan kesenangan hidup sampai waktu tertentu." },
  { id: 36, arabic: "وَاِذَا قِيْلَ لَهُمُ اتَّقُوْا مَا بَيْنَ اَيْدِيْكُمْ وَمَا خَلْفَكُمْ لَعَلَّكُمْ تُرْحَمُوْنَ", latin: "Wa iżā qīla lahumuttaqū mā baina aidīkum wa mā khalfakum la‘allakum turḥamūn(a).", translation: "Dan apabila dikatakan kepada mereka, “Takutlah kamu akan siksa yang di hadapanmu (di dunia) dan azab yang akan datang (akhirat) agar kamu mendapat rahmat.”" },
  { id: 37, arabic: "وَمَا تَأْتِيْهِمْ مِّنْ اٰيَةٍ مِّنْ اٰيٰتِ رَبِّهِمْ اِلَّا كَانُوْا عَنْهَا مُعْرِضِيْنَ", latin: "Wa mā ta'tīhim min āyatim min āyāti rabbihim illā kānū ‘anhā mu‘riḍīn(a).", translation: "Dan setiap kali suatu tanda dari tanda-tanda (kebesaran) Tuhan datang kepada mereka, mereka selalu berpaling darinya." },
  { id: 38, arabic: "وَاِذَا قِيْلَ لَهُمْ اَنْفِقُوْا مِمَّا رَزَقَكُمُ اللّٰهُ ۙقَالَ الَّذِيْنَ كَفَرُوْا لِلَّذِيْنَ اٰمَنُوْٓا اَنُطْعِمُ مَنْ لَّوْ يَشَاۤءُ اللّٰهُ اَطْعَمَهٗٓ ۖاِنْ اَنْتُمْ اِلَّا فِيْ ضَلٰلٍ مُّبِيْنٍ", latin: "Wa iżā qīla lahum anfiqū mimmā razaqakumullāh(u), qālal-lażīna kafarū lil-lażīna āmanū anuṭ‘imu mal lau yasyā'ullāhu aṭ‘amah(ū), in antum illā fī ḍalālim mubīn(in).", translation: "Dan apabila dikatakan kepada mereka, “Infakkanlah sebagian rezeki yang diberikan Allah kepadamu,” orang-orang yang kafir itu berkata kepada orang-orang yang beriman, “Apakah pantas kami memberi makan kepada orang-orang yang jika Allah menghendaki Dia akan memberinya makan? Kamu benar-benar dalam kesesatan yang nyata.”" },
  { id: 39, arabic: "وَيَقُوْلُوْنَ مَتٰى هٰذَا الْوَعْدُ اِنْ كُنْتُمْ صٰدِقِيْنَ", latin: "Wa yaqūlūna matā hāżal-wa‘du in kuntum ṣādiqīn(a).", translation: "Dan mereka berkata, “Kapan janji (hari Kebangkitan) ini (terjadi) jika kamu orang yang benar?”" },
  { id: 40, arabic: "مَا يَنْظُرُوْنَ اِلَّا صَيْحَةً وَّاحِدَةً تَأْخُذُهُمْ وَهُمْ يَخِصِّمُوْنَ", latin: "Mā yanẓurūna illā ṣaiḥataw wāḥidatan ta'khużuhum wa hum yakhiṣṣimūn(a).", translation: "Mereka hanya menunggu satu teriakan, yang akan membinasakan mereka saat mereka sedang bertengkar." },
  { id: 41, arabic: "وَاٰيَةٌ لَّهُمْ اَنَّا حَمَلْنَا ذُرِّيَّتَهُمْ فِي الْفُلْكِ الْمَشْحُوْنِۙ", latin: "Wa āyatul lahum annā ḥamalnā żurriyyatahum fil-fulkil-masyḥūn(i).", translation: "Dan suatu tanda (kebesaran Allah) bagi mereka adalah bahwa Kami angkut keturunan mereka dalam kapal yang penuh muatan," },
  { id: 42, arabic: "وَخَلَقْنَا لَهُمْ مِّنْ مِّثْلِهٖ مَا يَرْكَبُوْنَ", latin: "Wa khalaqnā lahum mim miṡlihī mā yarkabūn(a).", translation: "dan Kami ciptakan (juga) untuk mereka (angkutan lain) seperti apa yang mereka kendarai." },
  { id: 43, arabic: "وaاِنْ نَّشَأْ نُغْرِقْهُمْ فَلَا صَرِيْخَ لَهُمْ وَلَا هُمْ يُنْقَذُوْنَۙ", latin: "Wa in nasya' nugriqhum falā ṣarīkha lahum wa lā hum yunqażūn(a).", translation: "Dan jika Kami menghendaki, Kami tenggelamkan mereka; maka tidak ada penolong bagi mereka dan tidak (pula) mereka diselamatkan," },
  { id: 44, arabic: "اِلَّا رَحْمَةً مِّنَّا وَمَتَاعًا اِلٰى حِيْنٍ", latin: "Illā raḥmatam minnā wa matā‘an ilā ḥīn(in).", translation: "melainkan (Kami selamatkan mereka) karena rahmat dari Kami dan untuk memberikan kesenangan hidup sampai waktu tertentu." },
  { id: 45, arabic: "وَاِذَا قِيْلَ لَهُمُ اتَّقُوْا مَا بَيْنَ اَيْدِيْكُمْ وَمَا خَلْفَكُمْ لَعَلَّكُمْ تُرْحَمُوْنَ", latin: "Wa iżā qīla lahumuttaqū mā baina aidīkum wa mā khalfakum la‘allakum turḥamūn(a).", translation: "Dan apabila dikatakan kepada mereka, “Takutlah kamu akan siksa yang di hadapanmu (di dunia) dan azab yang akan datang (akhirat) agar kamu mendapat rahmat.”" },
  { id: 46, arabic: "وَمَا تَأْتِيْهِمْ مِّنْ اٰيَةٍ مِّنْ اٰيٰتِ رَبِّهِمْ اِلَّا كَانُوْا عَنْهَا مُعْرِضِيْنَ", latin: "Wa mā ta'tīhim min āyatim min āyāti rabbihim illā kānū ‘anhā mu‘riḍīn(a).", translation: "Dan setiap kali suatu tanda dari tanda-tanda (kebesaran) Tuhan datang kepada mereka, mereka selalu berpaling darinya." },
  { id: 47, arabic: "وَاِذَا قِيْلَ لَهُمْ اَنْفِقُوْا مِمَّا رَزَقَكُمُ اللّٰهُ ۙقَالَ الَّذِيْنَ كَفَرُوْا لِلَّذِيْنَ اٰمَنُوْٓا اَنُطْعِمُ مَنْ لَّوْ يَشَاۤءُ اللّٰهُ اَطْعَمَهٗٓ ۖاِنْ اَنْتُمْ اِلَّا فِيْ ضَلٰلٍ مُّبِيْنٍ", latin: "Wa iżā qīla lahum anfiqū mimmā razaqakumullāh(u), qālal-lażīna kafarū lil-lażīna āmanū anuṭ‘imu mal lau yasyā'ullāhu aṭ‘amah(ū), in antum illā fī ḍalālim mubīn(in).", translation: "Dan apabila dikatakan kepada mereka, “Infakkanlah sebagian rezeki yang diberikan Allah kepadamu,” orang-orang yang kafir itu berkata kepada orang-orang yang beriman, “Apakah pantas kami memberi makan kepada orang-orang yang jika Allah menghendaki Dia akan memberinya makan? Kamu benar-benar dalam kesesatan yang nyata.”" },
  { id: 48, arabic: "وَيَقُوْلُوْنَ مَتٰى هٰذَا الْوَعْدُ اِنْ كُنْتُمْ صٰدِقِيْنَ", latin: "Wa yaqūlūna matā hāżal-wa‘du in kuntum ṣādiqīn(a).", translation: "Dan mereka berkata, “Kapan janji (hari Kebangkitan) ini (terjadi) jika kamu orang yang benar?”" },
  { id: 49, arabic: "مَا يَنْظُرُوْنَ اِلَّا صَيْحَةً وَّاحِدَةً تَأْخُذُهُمْ وَهُمْ يَخِصِّمُوْنَ", latin: "Mā yanẓurūna illā ṣaiḥataw wāḥidatan ta'khużuhum wa hum yakhiṣṣimūn(a).", translation: "Mereka hanya menunggu satu teriakan, yang akan membinasakan mereka saat mereka sedang bertengkar." },
  { id: 50, arabic: "فَلَا يَسْتَطِيْعُوْنَ تَوْصِيَةً وَّلَآ اِلٰٓى اَهْلِهِمْ يَرْجِعُوْنَ ࣖ", latin: "Falā yastaṭī‘ūna tauṣiyataw wa lā ilā ahlihim yarji‘ūn(a).", translation: "Maka mereka tidak mampu membuat suatu wasiat dan tidak (pula) dapat kembali kepada keluarganya." },
  { id: 51, arabic: "وَنُفِخَ فِي الصُّوْرِ فَاِذَا هُمْ مِّنَ الْاَجْدَاثِ اِلٰى رَبِّهِمْ يَنْسِلُوْنَ", latin: "Wa nufikha fiṣ-ṣūri fa iżā hum minal-ajdāṡi ilā rabbihim yansilūn(a).", translation: "Dan sangkakala pun ditiup, maka seketika itu mereka keluar dari kuburnya (dalam keadaan hidup), menuju kepada Tuhannya." },
  { id: 52, arabic: "قَالُوْا يٰوَيْلَنَا مَنْۢ بَعَثَنَا مِنْ مَّرْقَدِنَا ۜهٰذَا مَا وَعَدَ الرَّحْمٰنُ وَصَدَقَ الْمُرْسَلُوْنَ", latin: "Qālū yā wailanā mam ba‘aṡanā mim marqadinā, hāżā mā wa‘adar-raḥmānu wa ṣadaqal-mursalūn(a).", translation: "Mereka berkata, “Celakalah kami! Siapakah yang membangkitkan kami dari tempat tidur kami (kubur)?” Inilah yang dijanjikan (Allah) Yang Maha Pengasih dan benarlah para rasul(-Nya)." },
  { id: 53, arabic: "اِنْ كَانَتْ اِلَّا صَيْحَةً وَّاحِدَةً فَاِذَا هُمْ جَمِيْعٌ لَّدَيْنَا مُحْضَرُوْنَ", latin: "In kānat illā ṣaiḥataw wāḥidatan fa iżā hum jamī‘ul ladainā muḥḍarūn(a).", translation: "Teriakan itu hanya sekali saja, maka seketika itu mereka semua dihadapkan kepada Kami (untuk dihisab)." },
  { id: 54, arabic: "فَالْيَوْمَ لَا تُظْلَمُ نَفْسٌ شَيْـًٔا وَّلَا تُجْزَوْنَ اِلَّا مَا كُنْتُمْ تَعْمَلُوْنَ", latin: "Fal-yauma lā tuẓlamu nafsun syai'aw wa lā tujzauna illā mā kuntum ta‘malūn(a).", translation: "Maka pada hari itu tidak ada suatu jiwa pun yang dirugikan sedikit pun dan kamu tidak akan diberi balasan, kecuali sesuai dengan apa yang telah kamu kerjakan." },
  { id: 55, arabic: "اِنَّ اَصْحٰبَ الْجَنَّةِ الْيَوْمَ فِيْ شُغُلٍ فٰكِهُوْنَ ۚ", latin: "Inna aṣḥābal-jannatil-yauma fī syugulin fākihūn(a).", translation: "Sesungguhnya penghuni surga pada hari itu bersenang-senang dalam kesibukan (mereka)." },
  { id: 56, arabic: "هُمْ وَاَزْوَاجُهُمْ فِيْ ظِلٰلٍ عَلَى الْاَرَاۤىِٕكِ مُتَّكِـُٔوْنَ ۚ", latin: "Hum wa azwājuhum fī ẓilālin ‘alal-arā'iki muttaki'ūn(a).", translation: "Mereka dan pasangan-pasangannya berada dalam tempat yang teduh, bersandar di atas dipan-dipan." },
  { id: 57, arabic: "لَهُمْ فِيْهَا فَاكِهَةٌ وَّلَهُمْ مَّا يَدَّعُوْنَ ۚ", latin: "Lahum fīhā fākihatuw wa lahum mā yadda‘ūn(a).", translation: "Di surga itu mereka memperoleh buah-buahan dan memperoleh apa saja yang mereka minta." },
  { id: 58, arabic: "سَلٰمٌۗ قَوْلًا مِّنْ رَّبٍّ رَّحِيْمٍ", latin: "Salāmun qaulam mir rabbir raḥīm(in).", translation: "(Kepada mereka dikatakan), “Salam,” sebagai ucapan selamat dari Tuhan Yang Maha Penyayang." },
  { id: 59, arabic: "وَامْتَازُوا الْيَوْمَ اَيُّهَا الْمُجْرِمُوْنَ", latin: "Wamtāzul-yauma ayyuhal-mujrimūn(a).", translation: "Dan (dikatakan kepada orang-orang kafir), “Berpisahlah kamu (dari orang-orang mukmin) pada hari ini, wahai orang-orang yang berdosa!" },
  { id: 60, arabic: "اَلَمْ اَعْهَدْ اِلَيْكُمْ يٰبَنِيْٓ اٰدَمَ اَنْ لَّا تَعْبُدُوا الشَّيْطٰنَۚ اِنَّهٗ لَكُمْ عَدُوٌّ مُّبِيْنٌ", latin: "Alam a‘had ilaikum yā banī ādama al lā ta‘budusy-syaiṭān(a), innahū lakum ‘aduwwum mubīn(un).", translation: "Bukankah Aku telah memerintahkan kepadamu wahai anak cucu Adam agar kamu tidak menyembah setan? Sungguh, setan itu musuh yang nyata bagi kamu," },
  { id: 61, arabic: "وَّاَنِ اعْبُدُوْنِيْ ۗهٰذَا صِرَاطٌ مُّسْتَقِيْمٌ", latin: "Wa ani‘budūnī, hāżā ṣirāṭum mustaqīm(un).", translation: "dan hendaklah kamu menyembah-Ku. Inilah jalan yang lurus.”" },
  { id: 62, arabic: "وَلَقَدْ اَضَلَّ مِنْكُمْ جِبِلًّا كَثِيْرًا ۗاَفَلَمْ تَكُوْنُوْا تَعْقِلُوْنَ", latin: "Wa laqad aḍalla minkum jibillan kaṡīrā(n), afalam takūnū ta‘qilūn(a).", translation: "Dan sungguh, ia (setan itu) telah menyesatkan sebagian besar di antara kamu. Maka apakah kamu tidak mengerti?" },
  { id: 63, arabic: "hٰذِهٖ جَهَنَّمُ الَّتِيْ كُنْتُمْ تُوْعَدُوْنَ", latin: "Hāżihī jahannamul-latī kuntum tū‘adūn(a).", translation: "Inilah (neraka) Jahanam yang dahulu telah diperingatkan kepadamu." },
  { id: 64, arabic: "اِصْلَوْهَا الْيَوْمَ بِمَا كُنْتُمْ تَكْفُرُوْنَ", latin: "Iṣlauhal-yauma bimā kuntum takfurūn(a).", translation: "Masuklah ke dalamnya pada hari ini karena dahulu kamu mengingkarinya." },
  { id: 65, arabic: "اَلْيَوْمَ نَخْتِمُ عَلٰىٓ اَفْوَاهِهِمْ وَتُكَلِّمُنَآ اَيْدِيْهِمْ وَتَشْهَدُ اَرْجُلُهُمْ بِمَا كَانُوْا يَكْسِبُوْنَ", latin: "Al-yauma nakhtimu ‘alā afwāhihim wa tukallimunā aidīhim wa tasyhadu arjuluhum bimā kānū yaksibūn(a).", translation: "Pada hari ini Kami tutup mulut mereka; tangan mereka akan berkata kepada Kami dan kaki mereka akan memberi kesaksian terhadap apa yang dahulu mereka kerjakan." },
  { id: 66, arabic: "وَلَوْ نَشَاۤءُ لَطَمَسْنَا عَلٰىٓ اَعْيُنِهِمْ فَاسْتَبَقُوا الصِّرَاطَ فَاَنّٰى يُبْصِرُوْنَ", latin: "Wa lau nasyā'u laṭamasnā ‘alā a‘yunihim fastabaquṣ-ṣirāṭa fa annā yubṣirūn(a).", translation: "Dan jika Kami menghendaki, pastilah Kami hapuskan penglihatan mata mereka; sehingga mereka berlomba-lomba (mencari) jalan. Maka bagaimana mungkin mereka dapat melihat?" },
  { id: 67, arabic: "وَلَوْ نَشَاۤءُ لَمَسَخْنٰهُمْ عَلٰى مَكَانَتِهِمْ فَمَا اسْتَطَاعُوْا مُضِيًّا وَّلَا يَرْجِعُوْنَ ࣖ", latin: "Wa lau nasyā'u lamasakhnāhum ‘alā makānatihim famastaṭā‘ū muḍiyyaw wa lā yarji‘ūn(a).", translation: "Dan jika Kami menghendaki, pastilah Kami ubah bentuk mereka di tempat mereka berada; sehingga mereka tidak sanggup berjalan lagi dan juga tidak sanggup kembali." },
  { id: 68, arabic: "وَمَنْ نُّعَمِّرْهُ نُنَكِّسْهُ فِي الْخَلْقِۗ اَفَلَا يَعْقِلُوْنَ", latin: "Wa man nu‘ammirhu nunakkishu fil-khalq(i), afalā ya‘qilūn(a).", translation: "Dan barangsiapa Kami panjangkan umurnya, niscaya Kami kembalikan dia kepada awal kejadiannya. Maka mengapa mereka tidak mengerti?" },
  { id: 69, arabic: "وَمَا عَلَّمْنٰهُ الشِّعْرَ وَمَا يَنْۢبَغِيْ لَهٗ ۗاِنْ هُوَ اِلَّا ذِكْرٌ وَّقُرْاٰنٌ مُّبِيْنٌ ۙ", latin: "Wa mā ‘allamnāhusy-syi‘ra wa mā yambagī lah(ū), in huwa illā żikruw wa qur'ānum mubīn(un).", translation: "Dan Kami tidak mengajarkan syair kepadanya (Muhammad), dan bersyair itu tidaklah pantas baginya. Al-Qur'an itu tidak lain hanyalah pelajaran dan Kitab yang jelas," },
  { id: 70, arabic: "لِّيُنْذِرَ مَنْ كَانَ حَيًّا وَّيَحِقَّ الْقَوْلُ عَلَى الْكٰفِرِيْنَ", latin: "Liyunżira man kāna ḥayyaw wa yaḥiqqal-qaulu ‘alal-kāfirīn(a).", translation: "agar dia memberi peringatan kepada orang-orang yang hidup (hatinya) dan agar pasti ketetapan (azab) terhadap orang-orang kafir." },
  { id: 71, arabic: "اَوَلَمْ يَرَوْا اَنَّا خَلَقْنَا لَهُمْ مِّمَّا عَمِلَتْ اَيْدِيْنَآ اَنْعَامًا فَهُمْ لَهَا مَالِكُوْنَ", latin: "Awalam yarau annā khalaqnā lahum mimmā ‘amilat aidīnā an‘āman fahum lahā mālikūn(a).", translation: "Dan tidakkah mereka melihat bahwa Kami telah menciptakan hewan ternak untuk mereka, yaitu sebagian dari apa yang telah Kami ciptakan dengan kekuasaan Kami, lalu mereka menguasainya?" },
  { id: 72, arabic: "وَذَلَّلْنٰهَا لَهُمْ فَمِنْهَا رَكُوْبُهُمْ وَمِنْهَا يَأْكُلُوْنَ", latin: "Wa żallalnāhā lahum fa minhā rakūbuhum wa minhā ya'kulūn(a).", translation: "Dan Kami menundukkannya (hewan-hewan itu) untuk mereka; lalu sebagiannya menjadi tunggangan mereka dan sebagian lagi mereka makan." },
  { id: 73, arabic: "وَلَهُمْ فَيْهَا مَنَافِعُ وَمَشَارِبُۗ اَفَلَا يَشْكُرُوْنَ", latin: "Wa lahum fīhā manāfi‘u wa masḥārib(u), afalā yasykurūn(a).", translation: "Dan pada hewan-hewan itu terdapat berbagai manfaat dan minuman untuk mereka. Maka mengapa mereka tidak bersyukur?" },
  { id: 74, arabic: "وَاتَّخَذُوْا مِنْ دُوْنِ اللّٰهِ اٰلِهَةً لَّعَلَّهُمْ يُنْصَرُوْنَ ۗ", latin: "Wattakhażū min dūnillāhi ālihatal la‘allahum yunṣarūn(a).", translation: "Dan mereka mengambil sesembahan selain Allah agar mereka mendapat pertolongan." },
  { id: 75, arabic: "لَا يَسْتَطِيْعُوْنَ نَصْرَهُمْۙ وَهُمْ لَهُمْ جُنْدٌ مُّحْضَرُوْنَ", latin: "Lā yastaṭī‘ūna naṣrahum, wa hum lahum jundum muḥḍarūn(a).", translation: "Mereka (sesembahan) itu tidak dapat menolong mereka; padahal mereka itu menjadi tentara yang dihadirkan untuk menjaga (sesembahan) itu." },
  { id: 76, arabic: "فَلَا يَحْزُنْكَ qَوْلُهُمْ ۘاِنَّا نَعْلَمُ مَا يُسِرُّوْنَ وَمَا يُعْلِنُوْنَ", latin: "Falā yaḥzunka qauluhum, innā na‘lamu mā yusirrūna wa mā yu‘linūn(a).", translation: "Maka janganlah engkau (Muhammad) bersedih hati karena perkataan mereka. Sungguh, Kami mengetahui apa yang mereka rahasiakan dan apa yang mereka nyatakan." },
  { id: 77, arabic: "اَوَلَمْ يَرَ الْاِنْسَانُ اَنَّا خَلَقْنٰهُ مِنْ نُّطْفَةٍ فَاِذَا هُوَ خَصِيْمٌ مُّبِيْنٌ", latin: "Awalam yaral-insānu annā khalaqnāhu min nuṭfatin fa iżā huwa khaṣīmum mubīn(un).", translation: "Dan tidakkah manusia memperhatikan bahwa Kami menciptakannya dari setetes mani, ternyata dia menjadi musuh yang nyata!" },
  { id: 78, arabic: "وَضَرَبَ لَنَا مَثَلًا وَّنَسِيَ خَلْقَهٗۗ قَالَ مَنْ يُّحْيِ الْعِظَامَ وَهِيَ رَمِيْمٌ", latin: "Wa ḍaraba lanā maṡalaw wa nasiya khalqah(ū), qāla may yuḥyil-‘iẓāma wa hiya ramīm(un).", translation: "Dan dia membuat perumpamaan bagi Kami dan melupakan asal kejadiannya; dia berkata, “Siapakah yang dapat menghidupkan tulang-belulang, yang telah hancur luluh?”" },
  { id: 79, arabic: "قُلْ يُحْيِيْهَا الَّذِيْٓ اَنْشَاَهَآ اَوَّلَ مَرَّةٍ ۗوَهُوَ بِكُلِّ خَلْقٍ عَلِيْمٌ ۙ", latin: "Qul yuḥyīhal-lażī ansya'ahā awwala marrah(tin), wa huwa bikulli khalqin ‘alīm(un).", translation: "Katakanlah (Muhammad), “Yang akan menghidupkannya ialah (Allah) yang menciptakannya pertama kali. Dan Dia Maha Mengetahui tentang segala makhluk," },
  { id: 80, arabic: "اۨلَّذِيْ جَعَلَ لَكُمْ مِّنَ الشَّجَرِ الْاَخْضَرِ نَارًاۙ فَاِذَآ اَنْتُمْ مِّنْهُ تُوْقِدُوْنَ", latin: "Allażī ja‘ala lakum minasy-sajaril-akhḍari nāran fa iżā antum minhu tūqidūn(a).", translation: "yaitu (Allah) yang menjadikan api untukmu dari kayu yang hijau, maka seketika itu kamu nyalakan (api) dari kayu itu.”" },
  { id: 81, arabic: "اَوَلَيْسَ الَّذِيْ خَلَقَ السَّمٰوٰتِ وَالْاَرْضَ بِقٰدِرٍ عَلٰىٓ اَنْ يَّخْلُقَ مِثْلَهُمْ ۗبَلٰى وَهُوَ الْخَلّٰقُ الْعَلِيْمُ", latin: "Awa laisal-lażī khalaqas-samāwāti wal-arḍa biqādirin ‘alā ay yakhluqa miṡlahum, balā wa huwal-khallāqul-‘alīm(u).", translation: "Dan bukankah (Allah) yang menciptakan langit dan bumi, Mahakuasa (pula) menciptakan yang serupa mereka? Benar, dan Dia Maha Pencipta, Maha Mengetahui." },
  { id: 82, arabic: "اِنَّمَآ اَمْرُهٗٓ اِذَآ اَرَادَ شَيْـًٔاۖ اَنْ يَّقُوْلَ لَهٗ كُنْ فَيَكُوْنُ", latin: "Innamā amruhū iżā arāda syai'an ay yaqūla lahū kun fa yakūn(u).", translation: "Sesungguhnya urusan-Nya apabila Dia menghendaki sesuatu Dia hanya berkata kepadanya, “Jadilah!” Maka jadilah sesuatu itu." },
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
    arabic: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ. اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَ. الرَّحْمٰنِ الرَّحِيْمِ. مٰلِكِ يَوْمِ الدِّيْنِ. اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُ. اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيْمَ. صِرَاطَ الَّذِيْنَ اَنْعَمْتَ عَلَيْهِمْ ۙ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّاۤلِّيْنَ",
    latin: "Bismillāhir-raḥmānir-raḥīm. Al-ḥamdu lillāhi rabbil-‘ālamīn. Ar-raḥmānir-raḥīm. Māliki yaumid-dīn. Iyyāka na‘budu wa iyyāka nasta‘īn. Ihdinaṣ-ṣirāṭal-mustaqīm. Ṣirāṭal-lażīna an‘amta ‘alaihim gairil-magḍūbi ‘alaihim wa laḍ-ḍāllīn.",
  },
  {
    id: 'baqarah_1_5',
    title: "Awal Surat Al-Baqarah",
    arabic: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ. الۤمۤ ۚ. ذٰلِكَ الْكِتٰبُ لَا رَيْبَ ۛ فِيْهِ ۛ هُدًى لِّلْمُتَّقِيْنَ ۙ. الَّذِيْنَ يُؤْمِنُوْنَ بِالْغَيْبِ وَيُقِيْمُوْنَ الصَّلٰوةَ وَمِمَّا رَزَقْنٰهُمْ يُنْفِقُوْنَ ۙ. وَالَّذِيْنَ يُؤْمِنُوْنَ بِمَآ اُنْزِلَ اِلَيْكَ وَمَآ اُنْزِلَ مِنْ قَبْلِكَ ۚ وَبِالْاٰخِرَةِ هُمْ يُوْقِنُوْنَ ۗ. اُولٰۤىِٕكَ عَلٰى هُدًى مِّنْ رَّبِّهِمْ ۙ وَاُولٰۤىِٕكَ هُمُ الْمُفْلِحُوْنَ",
    latin: "Bismillāhir-raḥmānir-raḥīm. Alif lām mīm. Żālikal-kitābu lā raiba fīh(i), hudal lil-muttaqīn(a). Allażīna yu'minūna bil-gaibi wa yuqīmūnaṣ-ṣalāta wa mimmā razaqnāhum yunfiqūn(a). Wal-lażīna yu'minūna bimā unzila ilaika wa mā unzila min qablika, wa bil-ākhirati hum yūqinūn(a). Ulā'ika ‘alā hudam mir rabbihim wa ulā'ika humul-mufliḥūn(a).",
  },
  {
    id: 'ayat_kursi',
    title: "Ayat Kursi (Al-Baqarah 255)",
    arabic: "اَللّٰهُ لَآ اِلٰهَ اِلَّا هُوَۚ اَلْحَيُّ الْقَيُّوْمُ ەۚ لَا تَأْخُذُهٗ سِنَةٌ وَّلَا نَوْمٌۗ لَهٗ مَا فِي السَّمٰوٰتِ وَمَا فِي الْاَرْضِۗ مَنْ ذَا الَّذِيْ يَشْفَعُ عِنْدَهٗٓ اِلَّا بِاِذْنِهٖۗ يَعْلَمُ مَا بَيْنَ اَيْدِيْهِمْ وَمَا خَلْفَهُمْۚ وَلَا يُحِيْطُوْنَ بِشَيْءٍ مِّنْ عِلْمِهٖٓ اِلَّا بِمَا شَاۤءَۚ وَسِعَ كُرْسِيُّهُ السَّمٰوٰتِ وَالْاَرْضَۚ وَلَا يَـُٔوْدُهٗ حِفْظُهُمَاۚ وَهُوَ الْعَلِيُّ الْعَظِيْمُ",
    latin: "Allāhu lā ilāha illā huwal-ḥayyul-qayyūm(u). Lā ta’khużuhū sinatuw wa lā naum(un). Lahū mā fis-samāwāti wa mā fil-arḍ(i). Man żal-lażī yasyfa‘u ‘indahū illā bi'iżnih(ī). Ya‘lamu mā baina aidīhim wa mā khalfahum, wa lā yuḥīṭūna bisyai'im min ‘ilmihī illā bimā syā'(a). Wasi‘a kursiyyuhus-samāwāti wal-arḍ(a), wa lā ya'ūduhū ḥifẓuhumā, wa huwal-‘aliyyul-‘aẓīm(u).",
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
    latin: "Alhamdulillahi rabbil 'aalamiin. Hamdasy syaakiriin, hamdan naa'imiin, hamdany yuwaafii ni'amahuu wa yukaafi'u maziidah. Yaa rabbanaa lakal hamdu kamaa yanbaghii lijalaali wajhika wa 'azhiimi sulthaanik. Allahumma shalli wa sallim 'alaa sayyidinaa Muhammadin wa 'alaa aali sayyidinaa Muhammad.",
    isHeader: true
  },
  {
    id: 'doa_arwah_1',
    title: "Doa Penyampaian Pahala",
    arabic: "اَللّٰهُمَّ تَقَبَّلْ وَاَوْصِلْ ثَوَابَ مَا قَرَأْنَاهُ مِنَ الْقُرْآنِ الْعَظِيْمِ وَمَا هَلَّلْنَا وَمَا سَبَّحْنَا وَمَا اسْتَغْفَرْنَا وَمَا صَلَّيْنَا عَلَى سَيِّدِنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ هَدِيَّةً وَاصِلَةً وَرَحْمَةً نَازِلَةً وَبَرَكَةً شَامِلَةً اِلَى حَضْرَةِ حَبِيْبِنَا وَشَفِيْعِنَا وَقُرَّةِ اَعْيُنِنَا سَيِّدِنَا وَمَوْلَانَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَاِلَى جَمِيْعِ اِخْوَانِهِ مِنَ الْاَنْبِيَاءِ وَالْمُرْسَلِيْنَ وَالْاَوْلِيَاءِ وَالشُّهَدَاءِ وَالصَّالِحِيْنَ وَالصَّحَابَةِ وَالتَّابِعِيْنَ وَالْعُلَمَاءِ الْعَامِلِيْنَ وَالْمُصَنِّفِيْنَ الْمُخْلِصِيْنَ وَجَمِيْعِ الْمُجَاهِدِيْنَ فِيْ سَبِيْلِ اللهِ رَبِّ الْعَالَمِيْنَ وَالْمَلَائِكَةِ الْمُقَرَّبِيْنَ، خُصُوْصًا اِلَى سَيِّدِنَا الشَّيْخِ عَبْدِ الْقَادِرِ الْجَيْلَانِيِّ",
    latin: "Allahumma taqobbal wa aushil tsawaba maa qoro'naahu minal qur'aanil 'azhiim, wa maa hallalnaa wa maa sabbahnaa wa mastaghfarnaa wa maa shollainaa 'alaa sayyidinaa Muhammadin shollallahu 'alaihi wa sallama hadiyiatan waashilatan wa rahmatan naazilatan wa barokatan syaamilatan ilaa hadhrati habiibinaa wa syafi'inaa wa qurrati a'yuninaa sayyidinaa wa maulaanaa Muhammadin shollallahu 'alaihi wa sallam, wa ilaa jamii'i ikhwaanihii minal anbiyaa'i wal mursaliin wal auliyaa'i wasy syuhadaa'i wash shoolihiin wash shohaabati wat taabi'iin wal 'ulamaa'il 'aamiliin wal mushonnifiinal mukhlishiin wa jamii'il mujaahidiina fii sabiilillaahi rabbil 'aalamiin wal malaa'ikatil muqarrabiin, khushushon ilaa sayyidinaa asy-Syaikh 'Abdul Qoodir al-Jailaani.",
  },
  {
    id: 'doa_khususon',
    title: "Doa Khusus Almarhum/ah",
    arabic: "ثُمَّ اِلَى جَمِيْعِ اَهْلِ الْقُبُوْرِ مِنَ الْمُسْلِمِيْنَ وَالْمُسْلِمَاتِ وَالْمُؤْمِنِيْنَ وَالْمُؤْمِنَاتِ مِنْ مَشَارِقِ الْاَرْضِ اِلَى مَغَارِبِهَا بَرِّهَا وَبَحْرِهَا، خُصُوْصًا اِلَى آبَائِنَا وَاُمَّهَاتِنَا وَاَجْدَادِنَا وَجَدَّاتِنَا وَنَخُصُّ خُصُوْصًا اِلَى مَنِ اجْتَمَعْنَا هٰهُنَا بِسَبَبِهِ وَلِاَجْلِهِ ...",
    latin: "Tsumma ilaa jamii'i ahlil qubuur minal muslimiina wal muslimaat wal mu'miniina wal mu'minaat min masyaariqil ardhi ilaa maghaaribihaa barrihaa wa bahrihaa, khushushon ilaa aabaa'inaa wa ummahaatinaa wa ajdaadinaa wa jaddaatinaa wa nakhushshu khushushon ilaa manijtama'naa haahunaa bisababihii wa li'ajlihii... {NAMA}",
    translation: "Kemudian kepada seluruh ahli kubur dari kaum muslimin dan muslimat, mukminin dan mukminat dari timur hingga barat, darat dan laut. Khususnya kepada bapak-bapak kami, ibu-ibu kami, kakek-kakek kami, nenek-nenek kami, dan terkhusus kepada orang yang menyebabkan kami berkumpul di sini... {NAMA}",
    isKhususon: true
  },
  {
    id: 'doa_ampunan',
    arabic: "اَللّٰهُمَّ اغْفِرْ لَهُمْ وَارْحَمْهُمْ وَعَافِهِمْ وَاعْفُ عَنْهُمْ. اَللّٰهُمَّ اَنْزِلِ الرَّحْمَةَ وَالْمَغْفِرَةَ عَلَى اَهْلِ الْقُبُوْرِ مِنْ اَهْلِ لَااِلٰهَ اِلَّا اللهُ مُحَمَّدٌ رَسُوْلُ اللهِ",
    latin: "Allahummaghfirlahum warhamhum wa 'aafihim wa'fu 'anhum. Allahumma anzilir rahmata wal maghfirata 'alaa ahlil qubuuri min ahli laa ilaaha illallaah Muhammadur rasuulullaah.",
  },
  {
    id: 'fatihah_doa_1',
    title: "Al-Fatihah (Penutup Doa 1)",
    arabic: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ. اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَ. الرَّحْمٰنِ الرَّحِيْمِ. مٰلِكِ يَوْمِ الدِّيْنِ. اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُ. اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيْمَ. صِرَاطَ الَّذِيْنَ اَنْعَمْتَ عَلَيْهِمْ ۙ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّاۤلِّيْنَ",
    latin: "Bismillāhir-raḥmānir-raḥīm. Al-ḥamdu lillāhi rabbil-‘ālamīn. Ar-raḥmānir-raḥīm. Māliki yaumid-dīn. Iyyāka na‘budu wa iyyāka nasta‘īn. Ihdinaṣ-ṣirāṭal-mustaqīm. Ṣirāṭal-lażīna an‘amta ‘alaihim gairil-magḍūbi ‘alaihim wa laḍ-ḍāllīn.",
    isHeader: true
  },
  {
    id: 'doa_2_start',
    title: "Doa 2: Doa Selamat & Penutup (Singkat)",
    arabic: "اَللّٰهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ صَلَاةً تُنْجِيْنَا بِهَا مِنْ جَمِيْعِ الْاَهْوَالِ وَالْاٰفَاتِ، وَتَقْضِيْ لَنَا بِهَا جَمِيْعَ الْحَاجَاتِ، وَتُطَهِّرُنَا بِهَا مِنْ جَمِيْعِ السَّيِّئَاتِ، وَتَرْفَعُنَا بِهَا عِنْدَكَ اَعْلَى الدَّرَجَاتِ، وَتُبَلِّغُنَا بِهَا اَقْصَى الْغَايَاتِ مِنْ جَمِيْعِ الْخَيْرَاتِ فِي الْحَيَاةِ وَبَعْدَ الْمَمَاتِ",
    latin: "Allahumma sholli 'ala sayyidina Muhammadin sholatan tunjiina biha min jami'il ahwali wal aafaat, wa taqdhi lanaa bihaa jami'al haajaat, wa tuthahhirunaa bihaa min jami'is sayyi'aat, wa tarfa'unaa bihaa 'indaka a'lad darajaat, wa tuballighunaa biha aqshal ghaayaat min jami'il khairaati fil hayaati wa ba'dal mamaat.",
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
    latin: "Bismillāhir-raḥmānir-raḥīm. Al-ḥamdu lillāhi rabbil-‘ālamīn. Ar-raḥmānir-raḥīm. Māliki yaumid-dīn. Iyyāka na‘budu wa iyyāka nasta‘īn. Ihdinaṣ-ṣirāṭal-mustaqīm. Ṣirāṭal-lażīna an‘amta ‘alaihim gairil-magḍūbi ‘alaihim wa laḍ-ḍāllīn.",
    isHeader: true
  }
];
