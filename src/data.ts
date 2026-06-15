import { Product, WhyChoose, Review, FAQItem } from "./types";
import sprayImage from "./assets/images/spray.jpeg";
import essenceImage from "./assets/images/Essence.jpeg";
import dropImage from "./assets/images/Drop.jpeg";
import heroBanner from "./assets/images/hero-banner.png";

export const PRODUCTS: Product[] = [
  {
    id: "millenia-spray",
    title: "BLACK MILLENIA SPRAY",
    category: "Semburan Penyegar Wajah & Badan",
    description: "Semburan wajah dan badan yang memberikan kesegaran serta keselesaan sepanjang hari.",
    benefits: [
      "Menyegarkan semula kulit",
      "Formula ultra-ringan",
      "Selesa dan tidak melekit",
      "Sesuai untuk penggunaan harian",
      "Mudah dibawa ke mana-mana",
      "Sesuai sebelum dan selepas solekan"
    ],
    price: "RM 280",
    images: [
      sprayImage,
      heroBanner
    ],
    directions: "Semburkan botol eksklusif ini pada jarak kira-kira 15-20cm dari wajah atau badan. Pejamkan mata dan sembur secara perlahan dengan gerakan bulat. Gunakan pada bila-bila masa—pagi, petang, atau malam—untuk mengembalikan kesegaran, atau sapukan sejurus selepas pembersihan bagi mengunci kelembapan harian.",
    faqs: [
      {
        question: "Bolehkah saya menggunakan Black Millenia Spray pada kulit sensitif?",
        answer: "Ya, semburan jernih kami dirumus khas dengan formula tanpa alkohol yang sangat lembut dan bebas haruman sintetik, amat mesra untuk memelihara lapisan perlindungan kulit tanpa menyebabkan iritasi."
      },
      {
        question: "Adakah ia membantu mengekalkan solekan?",
        answer: "Benar. Ia berfungsi sebagai semburan penyegar zarah mikro yang mengekalkan kelembapan solekan agar kelihatan segar dan berseri, serta melindunginya daripada kekeringan akibat persekitaran berhawa dingin."
      }
    ],
    reviews: [
      {
        rating: 5,
        text: "Zarah semburannya sangat halus dan lembut seperti sutera apabila menyentuh kulit. Saya sentiasa membawa satu di dalam beg tangan dan meletakkan satu lagi di meja kerja.",
        author: "Datin Sophia L.",
        date: "24 Mei 2026"
      },
      {
        rating: 5,
        text: "Persembahan produk yang sangat indah dan penghantaran pantas. Sangat sesuai dengan cuaca di Malaysia untuk keseimbangan kulit yang optimum. Amat mengesyorkan semburan eksklusif ini.",
        author: "Sarah Tan",
        date: "02 Jun 2026"
      }
    ],
    bgClass: "bg-ivory" // Section 1 Warm Ivory
  },
  {
    id: "millenia-essence",
    title: "BLACK MILLENIA ESSENCE",
    category: "Terapi Mandian Essence Premium",
    description: "Essence terapi mandian premium untuk pengalaman relaksasi yang lebih menenangkan.",
    benefits: [
      "Ritual mandian yang menenangkan",
      "Pengalaman spa eksklusif di rumah",
      "Sesuai untuk rutin kesejahteraan diri",
      "Pengalaman aromaterapi yang mewah"
    ],
    price: "RM 390",
    images: [
      essenceImage,
      heroBanner
    ],
    directions: "Titiskan 8 hingga 12 titis essence eksklusif ini ke dalam air mandian suam. Kacau perlahan agar formulanya tersebar sekata. Berbaring bertenang, tarik nafas dalam-dalam, dan nikmati wap terapi spa yang menenangkan selama 15 hingga 20 minit.",
    faqs: [
      {
        question: "Apakah profil aroma utama bagi produk ini?",
        answer: "Aromanya merupakan gabungan sofistikated bukan sintetik daripada kehangatan kayu-kayuan lembut, sentuhan amber manis amber-vanila, dan botani spa yang menenangkan."
      },
      {
        question: "Bolehkah saya menggunakannya semasa mandi biasa jika tiada tab mandi?",
        answer: "Sudah tentu. Anda boleh menitiskan beberapa titis pada tuala mandi suam yang lembap atau pada lantai bilik mandi yang jauh dari aliran terus air bagi menghasilkan ruang wap aromaterapi yang menenangkan."
      }
    ],
    reviews: [
      {
        rating: 5,
        text: "Sangat menyukai pengalaman yang menyegarkan dan menenangkan minda ini. Bilik mandi rumah saya kini berbau harum bagaikan berada di resort kesejahteraan bertaraf 6 bintang di Langkawi.",
        author: "Dr. Adrian Wong",
        date: "18 Mei 2026"
      },
      {
        rating: 5,
        text: "Pembungkusan yang sangat eksklusif dan servis yang luar biasa. Produk ini telah meningkatkan kualiti ritual rehat hujung minggu saya dengan ketara.",
        author: "Amira J.",
        date: "29 Mei 2026"
      }
    ],
    bgClass: "bg-[#EFEAE2]" // Section 2 Soft Stone
  },
  {
    id: "millenia-drop",
    title: "BLACK MILLENIA DROP",
    category: "Suplemen Kesejahteraan Premium",
    description: "Formula premium yang direka untuk melengkapkan rutin kesejahteraan harian anda.",
    benefits: [
      "Format titisan yang praktikal",
      "Rutin harian yang mudah",
      "Formulasi gred premium"
    ],
    price: "RM 480",
    images: [
      dropImage,
      heroBanner
    ],
    directions: "Dengan menggunakan pipet emas yang elegan, titiskan 3 hingga 5 titis ke dalam segelas air mineral suam atau teh organik kegemaran anda. Kacau perlahan dan amalkan setiap pagi untuk menyokong kesejahteraan jangka panjang dan kecergasan menyeluruh.",
    faqs: [
      {
        question: "Apakah perbezaan produk ini berbanding suplemen kesihatan biasa?",
        answer: "Kami menggunakan teknologi ekstraksi premium yang bersih untuk menghasilkan kestabilan molekul yang terpelihara. Setiap ramuan ditapis dengan teliti bagi memenuhi piawaian kualiti tinggi yang eksklusif."
      },
      {
        question: "Adakah pembelian sekotak sahaja disediakan?",
        answer: "Ya, walaupun sebahagian besar pelanggan kami lebih gemar memilih langganan eksklusif 3 kotak untuk memastikan rutin penjagaan diri harian yang konsisten."
      }
    ],
    reviews: [
      {
        rating: 5,
        text: "Sentuhan kemewahan yang ringkas namun eksklusif. Sangat mudah diamalkan dalam rutin pagi saya. Terasa begitu suci, berkualiti tinggi, dan benar-benar memulihkan tenaga harian saya.",
        author: "Michelle Teh",
        date: "15 April 2026"
      },
      {
        rating: 5,
        text: "Kotak hantaran yang sangat memukau. Ia membuktikan kualiti sains penjagaan diri elit yang sangat bernilai tinggi.",
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
    text: "Pembungkusan premium dan layanan yang sangat memuaskan. Dari pertanyaan awal hinggalah penghantaran kotak beriben yang elegan, AquivaGold memahami erti kemewahan sebenar.",
    author: "Zarina Abdullah",
    location: "Kuala Lumpur",
    date: "01 Jun 2026"
  },
  {
    rating: 5,
    text: "Sangat menyukai pengalaman menyegarkan ini. Black Millenia Spray benar-benar memikat; zarah semburannya sangat ringan dan berbau sangat harum.",
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
    question: "Apakah Black Millenia Spray?",
    answer: "Black Millenia Spray ialah semburan penyegar wajah dan badan yang dirumus khas untuk menghidrat dan menyegarkan kulit. Ditampilkan dalam botol kaca hitam matte yang eksklusif, ia menggunakan teknologi titisan mikro yang membolehkan air botani diserap secara serta-merta ke dalam kulit untuk sensasi semula jadi."
  },
  {
    id: "faq-2",
    question: "Bagaimanakah cara menggunakan Black Millenia Essence?",
    answer: "Essence mandian terapi kami boleh dititiskan terus (8 hingga 12 titis) ke dalam air mandian suam, atau digunakan sebagai terapi wap semasa mandi biasa. Ia menghasilkan suasana aromaterapi menenangkan yang menyerupai pengalaman rehat di pusat spa mewah bertaraf dunia."
  },
  {
    id: "faq-3",
    question: "Bagaimanakah cara untuk membuat pesanan?",
    answer: "Bagi memastikan khidat nasihat yang diperibadikan mengikut standard butik premium, semua pesanan dilakukan melalui sistem rundingan WhatsApp kami yang selamat dan eksklusif. Hanya hantar butiran anda, dan perunding peribadi kami akan membantu anda dengan pilihan produk, panduan penggunaan, serta urusan penghantaran kurier ekspres yang diyakini."
  },
  {
    id: "faq-4",
    question: "Berapa lamakah tempoh penghantaran?",
    answer: "Penghantaran adalah sangat pantas demi keselesaan anda. Kami bekerjasama dengan perkhidmatan kurier ekspres terpilih. Penghantaran di sekitar Kuala Lumpur dan Selangor mengambil masa kurang 24 jam selepas pengesahan, manakala negeri-negeri lain di seluruh Semenanjung dan Sabah/Sarawak mengambil masa 2 hingga 3 hari bekerja."
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
