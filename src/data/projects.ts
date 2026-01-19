export type Project = {
  name: string;
  title: string;
  subtitle: string;

  techStack: string[];
  heroImage: string;

  challenge: string[];
  solution: {
    description: string;
    strategies: string[];
  };

  results: {
    label: string;
    value: string;
  }[];

  links: {
    live?: string;
    source?: string;
  };

  meta: {
    role: string;
    duration: string;
    team: string;
  };
};

export const projects: Project[] = [
  {
    name: "task-gynie",
    title: "Task Gynie",
    subtitle:
      "A mission-driven service marketplace connecting users with trusted local professionals for everyday household needs.",

    techStack: ["Next.js", "Express.js", "MongoDB", "Paystack API"],
    heroImage:
      "https://res.cloudinary.com/dbeyl29fl/image/upload/v1768329374/fywjoumyw4yzlpola8l7.png",

    challenge: [
      "Finding reliable service providers for household tasks was fragmented and trust-based.",
      "Users needed a simple way to book, pay, and manage services securely.",
    ],

    solution: {
      description:
        "Task Gynie centralizes service discovery, booking, and payments into a single platform.",
      strategies: [
        "Verified service provider onboarding",
        "Integrated Paystack payments",
        "Role-based dashboards for customers and professionals",
      ],
    },

    results: [
      { label: "Service booking efficiency", value: "+45%" },
      { label: "Payment success rate", value: "99%" },
      { label: "User onboarding time", value: "-60%" },
    ],

    links: {
      live: "https://task-gynie.vercel.app",
    },

    meta: {
      role: "Full-Stack Developer",
      duration: "3 Months (2024)",
      team: "Agbam Kingsley (Solo)",
    },
  },

  {
    name: "idonatio",
    title: "iDonatio",
    subtitle:
      "A cashless donation platform enabling secure, transparent, and fast contributions between donors and organizations.",

    techStack: ["Next.js", "Express.js", "MongoDB", "Paystack API"],
    heroImage:
      "https://res.cloudinary.com/dbeyl29fl/image/upload/v1768329373/bmvzikmsfnurm2d92p20.png",

    challenge: [
      "Traditional donation systems were slow, opaque, and hard to manage.",
      "Donors lacked visibility into how funds were tracked and distributed.",
    ],

    solution: {
      description:
        "iDonatio provides a modern donation experience with real-time tracking and seamless payments.",
      strategies: [
        "Cashless donation workflows",
        "Donation history and analytics dashboards",
        "Secure transaction handling via Paystack",
      ],
    },

    results: [
      { label: "Donation completion rate", value: "+50%" },
      { label: "Transaction processing time", value: "<2s" },
      { label: "Platform reliability", value: "99.9%" },
    ],

    links: {
      live: "https://www.idonatio.com",
    },

    meta: {
      role: "Backend & Frontend Engineer",
      duration: "2 Months (2024)",
      team: "Agbam Kingsley (Solo)",
    },
  },

  {
    name: "meride-haven",
    title: "Meride Haven",
    subtitle:
      "A premium transport and hospitality brand delivering secure, professional, and comfortable mobility services.",

    techStack: ["Next.js", "Express.js", "MongoDB", "Ercas API"],
    heroImage:
      "https://res.cloudinary.com/dbeyl29fl/image/upload/v1768329379/itplrm6l3v9gmmrgyddg.png",

    challenge: [
      "Clients required reliable, high-trust transportation services.",
      "Manual booking and coordination caused inefficiencies.",
    ],

    solution: {
      description:
        "Meride Haven digitizes booking, coordination, and service management.",
      strategies: [
        "Streamlined booking workflows",
        "API-driven service management",
        "Secure customer communication channels",
      ],
    },

    results: [
      { label: "Booking turnaround time", value: "-40%" },
      { label: "Customer satisfaction", value: "High" },
      { label: "Operational efficiency", value: "+35%" },
    ],

    links: {
      live: "https://meride-haven.com",
    },

    meta: {
      role: "Lead Full-Stack Developer",
      duration: "4 Months (2023)",
      team: "Agbam Kingsley (Solo)",
    },
  },

  {
    name: "forever-ecommerce",
    title: "Forever E-commerce",
    subtitle:
      "A high-performance e-commerce platform with advanced search, caching, and custom content management.",

    techStack: ["React", "Express.js", "MongoDB", "Paystack API"],
    heroImage:
      "https://res.cloudinary.com/dbeyl29fl/image/upload/v1768329372/x0iwhuhqolqwvw8296xw.png",

    challenge: [
      "Scaling product listings without sacrificing performance.",
      "Managing content without relying on third-party CMS tools.",
    ],

    solution: {
      description:
        "The platform uses custom backend tooling and performance optimizations.",
      strategies: [
        "Optimized API queries",
        "Custom-built headless CMS",
        "Secure payment integration",
      ],
    },

    results: [
      { label: "Page load improvement", value: "-55%" },
      { label: "Search response time", value: "<200ms" },
      { label: "Checkout success rate", value: "98%" },
    ],

    links: {
      live: "https://forever-ecommerce-ns8g.onrender.com",
      source: "https://github.com/Kingsley-codes/forever-ecommerce",
    },

    meta: {
      role: "Backend-Focused Full-Stack Developer",
      duration: "3 Months (2023)",
      team: "Agbam Kingsley (Solo)",
    },
  },

  {
    name: "drivenest",
    title: "Drivenest",
    subtitle:
      "A modern car marketplace platform for buying and renting both luxury and everyday vehicles, offering wide brand coverage and flexible ownership options.",

    techStack: ["Next.js", "Express.js", "MongoDB", "Paystack API"],
    heroImage:
      "https://res.cloudinary.com/dbeyl29fl/image/upload/v1768822788/djhto5uv0456dba32jli.png",
    challenge: [
      "Finding reliable platforms that combine car sales and rentals in one place was difficult.",
      "Users needed access to a wide range of vehicle brands and model years with transparent pricing.",
    ],

    solution: {
      description:
        "Drivenest unifies car sales and rentals into a single digital marketplace with secure payments and an extensive vehicle catalog.",
      strategies: [
        "Unified buy and rent workflows",
        "Support for luxury and standard vehicle categories",
        "Integrated Paystack payments for secure transactions",
      ],
    },

    results: [
      { label: "Vehicle discovery speed", value: "+50%" },
      { label: "Transaction completion rate", value: "97%" },
      { label: "User booking confidence", value: "High" },
    ],

    links: {
      live: "https://drivenest-se33.onrender.com",
      source: "https://github.com/Kingsley-codes/drivenest",
    },

    meta: {
      role: "Full-Stack Developer",
      duration: "3 Months (2024)",
      team: "Agbam Kingsley (Solo)",
    },
  },

  {
    name: "funlearn",
    title: "FunLearn",
    subtitle:
      "An AI-powered, gamified learning platform that transforms study materials into interactive experiences.",

    techStack: ["Next.js", "Express.js", "MongoDB", "Socket.io", "AI"],
    heroImage:
      "https://res.cloudinary.com/dbeyl29fl/image/upload/v1768581063/gzgkavevsc5ucg7fxsmf.png",

    challenge: [
      "Students struggled to stay engaged with traditional study methods.",
      "Collaborative learning tools were often fragmented.",
    ],

    solution: {
      description:
        "FunLearn combines AI explanations, quizzes, and real-time collaboration.",
      strategies: [
        "AI-powered document explanations",
        "Gamified quizzes and leaderboards",
        "Real-time chatrooms via Socket.io",
      ],
    },

    results: [
      { label: "User engagement", value: "+60%" },
      { label: "Study session retention", value: "+45%" },
      { label: "Real-time sync latency", value: "<100ms" },
    ],

    links: {
      live: "https://funlearn-frontend.vercel.app",
      source: "https://github.com/Kingsley-codes/funlearn",
    },

    meta: {
      role: "Full-Stack Engineer",
      duration: "4 Months (2024)",
      team: "Agbam Kingsley (Solo)",
    },
  },

  {
    name: "lamalog",
    title: "LamaLog",
    subtitle:
      "A lightweight blogging and CMS platform focused on simplicity and ease of content creation.",

    techStack: ["React", "Express.js", "MongoDB"],
    heroImage:
      "https://res.cloudinary.com/dbeyl29fl/image/upload/v1768329378/abd1znzcrcmpu4hhfejx.png",

    challenge: [
      "Existing CMS platforms were overly complex for small creators.",
      "Writers needed a distraction-free authoring experience.",
    ],

    solution: {
      description: "LamaLog provides a minimal, intuitive blogging workflow.",
      strategies: [
        "Clean markdown-based editor",
        "Simple post management system",
        "Fast content rendering",
      ],
    },

    results: [
      { label: "Content publishing speed", value: "+50%" },
      { label: "Learning curve", value: "Low" },
      { label: "System stability", value: "99.8%" },
    ],

    links: {
      live: "https://blog-mtrs.onrender.com",
      source: "https://github.com/Kingsley-codes/blog",
    },

    meta: {
      role: "Frontend & Backend Developer",
      duration: "2 Months (2023)",
      team: "Agbam Kingsley (Solo)",
    },
  },

  {
    name: "we-listen",
    title: "We-Listen",
    subtitle:
      "An anonymous mental wellness platform connecting users with verified therapists in a safe environment.",

    techStack: ["React", "Express.js", "MongoDB", "Socket.io"],
    heroImage:
      "https://res.cloudinary.com/dbeyl29fl/image/upload/v1768581227/w5szfl5qshhnefsvwnyq.png",

    challenge: [
      "Users feared stigma and exposure when seeking mental health support.",
      "Real-time communication needed to be secure and anonymous.",
    ],

    solution: {
      description:
        "We-Listen enables anonymous, real-time therapist communication.",
      strategies: [
        "Anonymous user sessions",
        "Verified therapist onboarding",
        "Encrypted real-time chat",
      ],
    },

    results: [
      { label: "User trust rating", value: "High" },
      { label: "Message delivery latency", value: "<150ms" },
      { label: "Session reliability", value: "99.9%" },
    ],

    links: {
      live: "https://we-listen.co",
    },

    meta: {
      role: "Full-Stack Developer",
      duration: "3 Months (2024)",
      team: "Agbam Kingsley (Solo)",
    },
  },

  {
    name: "help-a-child-africa",
    title: "Help A Child Africa",
    subtitle:
      "An NGO platform supporting humanitarian projects through awareness and secure donations.",

    techStack: ["Next.js", "Express.js", "MongoDB", "Paystack API"],
    heroImage:
      "https://res.cloudinary.com/dbeyl29fl/image/upload/v1756125957/s1mivkwemckrcextnqan.png",

    challenge: [
      "NGOs needed a trustworthy way to collect and manage donations.",
      "Donors wanted transparency and ease of use.",
    ],

    solution: {
      description:
        "The platform simplifies donations while highlighting ongoing projects.",
      strategies: [
        "Secure online donation flow",
        "Project-focused storytelling",
        "Mobile-friendly accessibility",
      ],
    },

    results: [
      { label: "Donation conversion rate", value: "+35%" },
      { label: "Mobile usability score", value: "Excellent" },
      { label: "Platform uptime", value: "99.9%" },
    ],

    links: {
      live: "https://help-a-child-africa.onrender.com",
      source: "https://github.com/Kingsley-codes/thrive",
    },

    meta: {
      role: "Full-Stack Developer",
      duration: "2 Months (2023)",
      team: "Agbam Kingsley (Solo)",
    },
  },
];
