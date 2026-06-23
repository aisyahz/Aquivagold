import { Product, WhyChoose, Review, FAQItem } from "./types";
import sprayImage from "./assets/images/spray.jpeg";
import essenceImage from "./assets/images/Essence.jpeg";
import dropImage from "./assets/images/Drop.jpeg";
import heroBanner from "./assets/images/hero-banner.png";

export const PRODUCTS: Product[] = [
  {
    id: "millenia-spray",
    title: "Black Millenia Water (BMW) Spray",
    category: "Semburan Penyegar Wajah & Badan",
    description: "Semburan penyegar wajah dan badan yang membekalkan kelembapan seketika, mengembalikan kesegaran kulit serta-merta, sesuai sepanjang hari.",
    benefits: [
      "Menyegarkan kulit wajah & badan seketika",
      "Formula ultra-ringan memelihara kelembapan semulajadi",
      "Selesa, cepat meresap dan tidak melekit di kulit",
      "Amat sesuai untuk penggunaan sepanjang hari",
      "Reka bentuk botol yang praktikal dan mudah dibawa",
      "Sesuai disembur sebelum atau selepas solekan"
    ],
    price: "RM 59.00",
    originalPrice: "RM 79.00",
    images: [
      sprayImage,
      heroBanner
    ],
    directions: "Sembur secara lembut pada kulit wajah atau badan pada jarak yang bersesuaian pada bila-bila masa sepanjang hari apabila memerlukan kesegaran.",
    faqs: [
      {
        question: "Bolehkah saya menggunakan Black Millenia Water (BMW) Spray pada kulit sensitif?",
        answer: "Ya. Formula lembut tanpa alkohol ini dihasilkan khas untuk memberikan ketenangan kulit terbaik, mesra bagi semua jenis kulit termasuk yang kering atau memerlukan keselesaan ekstra harian."
      },
      {
        question: "Adakah ia membantu mengekalkan kelembapan solekan?",
        answer: "Benar. Semburan ini menghasilkan zarah mikros halus yang mengunci seri dan memastikan solekan anda kelihatan segar, terutama dalam persekitaran kering atau berhawa dingin."
      }
    ],
    reviews: [
      {
        rating: 5,
        text: "Semburan yang sangat halus dan begitu nyaman di wajah. Saya sentiasa simpan satu botol di dalam beg tangan dan satu lagi di sebelah katil untuk memulakan hari.",
        author: "Datin Sophia L.",
        date: "24 Mei 2026"
      },
      {
        rating: 5,
        text: "Kotak hantaran yang sungguh memukau. Sangat sesuai untuk iklim tropika di Malaysia demi kebaikan kelembapan kulit wajah harian.",
        author: "Sarah Tan",
        date: "02 Jun 2026"
      }
    ],
    bgClass: "bg-ivory" // Section 1 Warm Ivory
  },
  {
    id: "millenia-essence",
    title: "Black Millenia Water (BMW) Essence",
    category: "Terapi Mandian Essence Premium",
    description: "Black Millenia Water (BMW) Essence is intended for Therapy Tangas usage.",
    benefits: [
      "Mencipta suasana ritual rehat yang sangat tenang",
      "Membawakan suasana spa lima bintang di rumah anda",
      "Sesuai sebagai sebahagian daripada rutin pemulihan diri",
      "Haruman botani aromaterapi yang menenangkan minda"
    ],
    price: "RM 65.00",
    originalPrice: "RM 85.00",
    images: [
      essenceImage,
      heroBanner
    ],
    directions: "Titiskan terus ke dalam air suam mandian, atau gunakan semasa mandi biasa untuk wap aromaterapi murni.",
    faqs: [
      {
        question: "Apakah profil aroma yang membina ketenangan minda bagi produk ini?",
        answer: "Haruman indah ini menggabungkan kelunakan aroma botani spa, amber-vanila yang mesra, serta sentuhan kayu-kayuan lembut murni yang melegakan."
      },
      {
        question: "Bagaimanakah cara menggunakannya sekiranya rumah saya tiada tab mandi?",
        answer: "Sangat mudah. Anda boleh menitiskan beberapa titis pada bucu lantai bilik mandi yang basah ketika menggunakan air pancuran suam untuk mencipta wap mandian aromaterapi semulajadi yang penuh relaksasi."
      }
    ],
    reviews: [
      {
        rating: 5,
        text: "Mengubah bilik mandi biasa menjadi ruang terapi rehat yang luar biasa. Haruman botaninya sangat mewah seperti di resort eksklusif.",
        author: "Dr. Adrian Wong",
        date: "18 Mei 2026"
      },
      {
        rating: 5,
        text: "Kotak beriben sutera yang sangat indah, khidmat yang cemerlang. Sangat membantu menenangkan diri selepas seharian sibuk bekerja.",
        author: "Amira J.",
        date: "29 Mei 2026"
      }
    ],
    bgClass: "bg-[#EFEAE2]" // Section 2 Soft Stone
  },
  {
    id: "millenia-drop",
    title: "Black Millenia Water (BMW) Drop",
    category: "Suplemen Kesejahteraan Premium",
    description: "Pilihan titisan kesejahteraan berkualiti tinggi yang dirumus untuk menyokong keharmonian tubuh dan kecergasan gaya hidup moden secara praktikal.",
    benefits: [
      "Titisan botani yang praktikal dan ringkas diamalkan",
      "Membantu membina rutin penjagaan diri yang bersistematik",
      "Formulasi berkualiti tinggi demi gaya hidup aktif harian"
    ],
    price: "RM 179.00",
    originalPrice: "RM 199.00",
    images: [
      dropImage,
      heroBanner
    ],
    directions: "Campurkan 10 hingga 15 titis ke dalam gelas air kosong (kira-kira 500ml) setiap pagi sebelum memulakan aktiviti.",
    faqs: [
      {
        question: "Apakah yang membezakan kualiti formula titisan ini?",
        answer: "Ia dihasilkan menerusi kaedah ekstraksi bersih berpiawaian tinggi bagi mengekalkan ketulenan formulasi botaninya, tanpa pewarna tiruan atau bahan pengawet keras."
      },
      {
        question: "Bolehkah saya membeli sebotol sahaja untuk permulaan?",
        answer: "Ya, kami menawarkan pembelian sebotol individu, namun ramai pelanggan setia lebih menyukai set trio lengkap untuk bimbingan rutin berkala yang lebih jimat."
      }
    ],
    reviews: [
      {
        rating: 5,
        text: "Rutin pagi terbaik yang sangat mudah diamalkan. Kualiti titisan botani yang murni memberikan rasa yang segar dan bersih sepanjang hari.",
        author: "Michelle Teh",
        date: "15 April 2026"
      },
      {
        rating: 5,
        text: "Kemasan bungkusan yang anggun menunjukkan tahap profesionalisme AQUIVA GOLD yang amat dipercayai.",
        author: "Khairul Amin",
        date: "05 Jun 2026"
      }
    ],
    bgClass: "bg-[#F5F0E6]" // Section 3 Champagne Beige
  }
];

export const WHY_CHOOSE_US: WhyChoose[] = [
  {
    title: "Kualiti Premium",
    description: "Setiap formulasi melalui proses kurasi yang ketat bagi menghasilkan produk yang sangat halus, selamat, dan bertaraf elit untuk tubuh anda.",
    iconName: "ShieldCheck"
  },
  {
    title: "Inspirasi Alam Semulajadi",
    description: "Diperoleh daripada sumber alam yang terpelihara, produk kami membawakan kebaikan botani terbaik untuk mengembalikan ketenangan dan kesegaran tubuh.",
    iconName: "Leaf"
  },
  {
    title: "Penjagaan Diri Harian",
    description: "Direka khas untuk melengkapi gaya hidup moden, memudahkan anda meluangkan masa untuk penjagaan diri yang eksklusif di sebalik kesibukan harian.",
    iconName: "Sparkles"
  },
  {
    title: "Dipercayai Ramai",
    description: "Menjadi pilihan tokoh berpengaruh, golongan ternama, pengamal gaya hidup sihat, serta spa mewah bertaraf lima bintang di seluruh Asia Tenggara.",
    iconName: "Award"
  }
];

export const REVIEWS: Review[] = [
  {
    rating: 5,
    text: "Pembungkusan premium dan layanan yang sangat memuaskan. Dari pertanyaan awal hinggalah penghantaran kotak beriben yang elegan, AQUIVA GOLD memahami erti kemewahan sebenar.",
    author: "Zarina Abdullah",
    location: "Kuala Lumpur",
    date: "01 Jun 2026"
  },
  {
    rating: 5,
    text: "Sangat menyukai pengalaman menyegarkan ini. Black Millenia Water (BMW) Spray benar-benar memikat; zarah semburannya sangat ringan dan berbau sangat harum.",
    author: "Elena Petrova",
    location: "Mont Kiara",
    date: "28 Mei 2026"
  },
  {
    rating: 5,
    text: "Persembahan produk yang menawan serta penghantaran yang pantas. Ia kelihatan amat elegan di atas meja hiasan bilik mandi utama saya. Hasil seni yang sangat halus dan bernilai tinggi.",
    author: "Marcus Lim",
    location: "Bukit Damansara",
    date: "04 Jun 2026"
  }
];

export const GENERAL_FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Apakah Black Millenia Water (BMW) Spray?",
    answer: "Ia merupakan semburan penyegar zarah halus untuk wajah dan kulit tubuh, dirumus untuk mengekalkan kelembapan kulit di samping melegakan kulit letih sepanjang hari. Hadir dalam botol kaca gelap premium yang melindungi khasiat bahan botani semula jadinya."
  },
  {
    id: "faq-2",
    question: "Bagaimanakah cara menggunakan Black Millenia Water (BMW) Essence?",
    answer: "Cuma titiskan sebanyak 8 hingga 12 titis terus ke dalam besen air pancuran suam, atau titiskan di sudut lantai bilik mandi suam untuk mewujudkan wap spa beraroma segar murni, meredakan ketegangan fizikal dan mental."
  },
  {
    id: "faq-3",
    question: "Bagaimanakah cara untuk membuat pesanan?",
    answer: "AQUIVA GOLD menolak amalan robot layan diri yang dingin. Semua khidmat tempahan dikendalikan secara peribadi dan selamat oleh pasukan perunding manusia kami menerusi pesanan WhatsApp, demi memastikan bimbingan tersuai yang telus dan mesra."
  },
  {
    id: "faq-4",
    question: "Berapa lamakah tempoh penghantaran kurier?",
    answer: "Penghantaran adalah sangat pantas menerusi khidmat kurier ekspres terpilih. Bagi kawasan Kuala Lumpur & Selangor, barangan tiba dalam tempoh singkat (kurang 24 jam), manakala negeri-negeri lain diselesaikan dengan segera dalam 2 hingga 3 hari bekerja."
  }
];

export const MALAYSIAN_STATES = [
  "Kuala Lumpur",
  "Selangor",
  "Penang",
  "Johor",
  "Perak",
  "Melaka",
  "Negeri Sembilan",
  "Pahang",
  "Kedah",
  "Terengganu",
  "Kelantan",
  "Sabah",
  "Sarawak",
  "Putrajaya",
  "Labuan",
  "Perlis"
];

export const DEMO_AGES = [
  "Bawah 25",
  "25 - 34",
  "35 - 44",
  "45 - 54",
  "55 tahun ke atas"
];

export const DESIGN_QUANTITIES = [
  "1 Botol",
  "2 Botol (Set Duo Popular)",
  "Koleksi Lengkap Trio (Disyorkan)",
  "Set Hadiah Eksklusif (Kuantiti Tersuai)"
];

export const BUDGET_RANGES = [
  "RM 200 - RM 400",
  "RM 400 - RM 800",
  "RM 800 - RM 1,200",
  "RM 1,200 ke atas"
];
