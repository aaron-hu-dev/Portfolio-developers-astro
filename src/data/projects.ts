export const TAGS = {
    ASTRO: {
        name: "Astro",
        class: "bg-[#7836cf]/20 text-[#bc95ff]",
        icon: "lucide:rocket",
    },
    REACT: {
        name: "React",
        class: "bg-[#23272f] text-[#58c4dc]",
        icon: "lucide:atom",
    },
    TAILWIND: {
        name: "Tailwind CSS",
        class: "bg-[#003159] text-white",
        icon: "lucide:wind",
    },
    NODE: {
        name: "Node.js",
        class: "bg-[#339933]/20 text-[#6cc24a]",
        icon: "lucide:server",
    },
    EARTH: {
        name: "WordPress",
        class: "bg-[#0a74da]/20 text-[#0a74da]",
        icon: "lucide:earth",
    },
    HTML: {
        name: "HTML",
        class: "bg-[#e34f26]/20 text-[#e34f26]",
        icon: "lucide:file-code",
    },
    CSS: {
        name: "CSS",
        class: "bg-[#264de4]/20 text-[#264de4]",
        icon: "lucide:eclipse",
    },
    PHP: {
        name: "PHP",
        class: "bg-[#777bb4]/20 text-[#777bb4]",
        icon: "lucide:philippine-peso",
    },
    SEO: {
        name: "SEO",
        class: "bg-[#ff9900]/20 text-[#ff9900]",
        icon: "lucide:trending-up",
    },
    COMPUTERVISION: {
        name: "Computer Vision",
        class: "bg-[#ff6f61]/20 text-[#ff6f61]",
        icon: "lucide:camera",
    },
    REACTNATIVE: {
        name: "React Native",
        class: "bg-[#61dafb]/20 text-[#61dafb]",
        icon: "lucide:smartphone",
    },
    IoT: {
        name: "IoT",
        class: "bg-[#f0db4f]/20 text-[#f0db4f]",
        icon: "lucide:cpu",
    },
    C: {
        name: "C Programming",
        class: "bg-[#a8b9cc]/20 text-[#a8b9cc]",
        icon: "lucide:code",
    },
    STREAMING: {
        name: "Streaming",
        class: "bg-[#ff4500]/20 text-[#ff4500]",
        icon: "lucide:video",
    },
    ANDROID: {
        name: "Android",
        class: "bg-[#3ddc84]/20 text-[#3ddc84]",
        icon: "lucide:smartphone",
    },
    GCP: {
        name: "Google Cloud Platform",
        class: "bg-[#4285f4]/20 text-[#4285f4]",
        icon: "lucide:cloud",
    },
    Firebase: {
        name: "Firebase",
        class: "bg-[#ffca28]/20 text-[#ffca28]",
        icon: "lucide:flame",
    },
};

export const PROJECTS = [
    {
        title: "myGuard",
        description:
            "Developed from scratch, a Computer Vision & Motion Sensor-Based lightweight and scalable indoor surveillance system developed from sketch. Alarms are triggered by wireless coin-size accelerator motion sensors connected with a Raspberry Pi by BLE and sync camera footage by live streaming and recording in real-time to Android app.",
        link: "https://www.youtube.com/watch?v=2eFJDDNn4Qc",
        github: "https://github.com/aaron-hu-dev/myguard/tree/main",
        image: "/projects/myguard.webp",
        tags: [TAGS.COMPUTERVISION, TAGS.REACTNATIVE,TAGS.ANDROID, TAGS.IoT, TAGS.C, TAGS.STREAMING, TAGS.GCP, TAGS.Firebase],
    },
    {
        title: "Portfolio Website",
        description:
            "A personal portfolio website to showcase my projects and skills, built with Astro, React and Tailwind CSS.",
        link: "https://aaron-hu.dev/",
        github: "https://github.com/aaron-hu-dev/Portfolio-developers-astro",
        image: "/projects/profolio.webp",
        tags: [TAGS.ASTRO, TAGS.REACT, TAGS.TAILWIND],
    },
    {
        title: "Chinese South Australia Christian Church",
        description:
            "Developed from scratch, a community-focused website for a local church, built with WordPress, HTML, CSS and PHP.",
        link: "https://csacc.org.au/",
        image: "/projects/csacc.webp",
        tags: [TAGS.EARTH, TAGS.HTML, TAGS.CSS, TAGS.PHP],
    },
    {
        title: "XtraCare Auto Detailing",
        description:
            "Developed from scratch, a professional website for an auto detailing service, built with WordPress, HTML, CSS and PHP, and SEO rank raised by 100% within a year by optimizing content and meta tags.",
        link: "https://xtracareautodetailing.com.au/",
        image: "/projects/xtracare.webp",
        tags: [TAGS.EARTH, TAGS.HTML, TAGS.CSS, TAGS.PHP, TAGS.SEO],
    },
];
