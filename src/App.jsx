import React, { useEffect, useState } from "react";

const BUSINESS_EMAIL = "makertech.it.solutions@gmail.com";

// =========================================================
// UPDATE THESE CONTACT DETAILS
// =========================================================

// Philippine mobile number format:
// Example: 09171234567 becomes 639171234567
// Remove spaces, + signs, and dashes.
const VIBER_PHONE = "639751920231";
const WHATSAPP_PHONE = "639707689275";

// Enter your actual Facebook Page URL.
const FACEBOOK_PAGE_URL = "https://www.facebook.com/profile.php?id=61593960652597";

// Automatically generated contact links.
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}`;
const VIBER_URL = `viber://chat?number=%2B${VIBER_PHONE}`;

const LOGO = "/image-1129428076500800.webp";

const bannerImages = [
  {
    image: "/images/banner-1.jpg",
    alt: "MakerTech IT Solutions technology banner",
  },
  {
    image: "/images/banner-2.jpg",
    alt: "MakerTech IT Solutions business technology banner",
  },
  {
    image: "/images/banner-3.jpg",
    alt: "MakerTech IT Solutions software development banner",
  },
];

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    number: "01",
    icon: "⌘",
    title: "Custom Software Development",
    description:
      "We develop web-based and desktop business applications designed around your organization's actual processes and requirements.",
    tags: ["Web Applications", "Business Systems", "Custom Solutions"],
  },
  {
    number: "02",
    icon: "▦",
    title: "Business Automation",
    description:
      "Improve productivity by automating repetitive tasks, organizing business workflows, and reducing manual operations.",
    tags: ["Workflow Automation", "Digital Records", "Process Improvement"],
  },
  {
    number: "03",
    icon: "◉",
    title: "Electronics & IoT Solutions",
    description:
      "Practical electronics and IoT solutions that connect devices, collect information, and support smarter monitoring.",
    tags: ["IoT", "Monitoring", "Electronics"],
  },
  {
    number: "04",
    icon: "▤",
    title: "Attendance & Payroll Systems",
    description:
      "Employee attendance and payroll management solutions that help businesses organize time records and payroll processes.",
    tags: ["Attendance", "Employee Records", "Payroll"],
  },
  {
    number: "05",
    icon: "⚙",
    title: "IT Solutions & Consultation",
    description:
      "Technical assistance, system planning, troubleshooting, and technology recommendations for individuals and businesses.",
    tags: ["IT Support", "Consultation", "Troubleshooting"],
  },
  {
    number: "06",
    icon: "⌘",
    title: "System Integration",
    description:
      "Connect software, hardware, and business processes to create a more organized and efficient working environment.",
    tags: ["Hardware", "Software", "Integration"],
  },
];

const solutions = [
  {
    number: "01",
    name: "AquaBill",
    category: "Water Billing Management",
    description:
      "A water billing and monitoring solution designed to help water service providers manage customer records, meter readings, and billing operations.",
    image: "/images/aquabill.png",
    features: ["Customer Records", "Water Billing", "Meter Reading"],
  },
  {
    number: "02",
    name: "StockWisePro",
    category: "Sales & Inventory Management",
    description:
      "A business management solution designed to organize sales transactions, inventory records, and everyday business operations.",
    image: "/images/stockwisepro.png",
    features: ["Sales Management", "Inventory Monitoring", "Business Records"],
  },
  {
    number: "03",
    name: "Attendance & Payroll",
    category: "Employee Management",
    description:
      "An employee management solution focused on attendance tracking, work records, and payroll-related processes.",
    image: "/images/attendance-system.png",
    features: ["Employee Attendance", "Time Records", "Payroll Management"],
  },
  {
    number: "04",
    name: "PickleBook",
    category: "Pickleball Court Reservation Management",
    description:
      "A pickleball court reservation management system designed to simplify court bookings, manage court availability, organize reservation schedules, and streamline facility operations through an intuitive management platform.",
    image: "/images/picklebook.png",
    features: [
      "Court Reservation Management",
      "Court Availability & Scheduling",
      "Booking Management",
      "Facility Operations",
    ],
  },
];

const projects = [
  {
    number: "01",
    name: "AquaBill",
    category: "Water Billing System",
    description:
      "A water billing and monitoring system designed to organize customer information, meter readings, and billing activities.",
    image: "/images/aquabill.png",
    tags: ["Water Billing", "Monitoring", "Management"],
  },
  {
    number: "02",
    name: "SakayGo",
    category: "Transportation Management",
    description:
      "A transportation-focused mobile and administrative system designed to support route management, ticketing, and operational records.",
    image: "/images/sakaygo.png",
    tags: ["Mobile Application", "Ticketing", "Admin Dashboard"],
  },
  {
    number: "03",
    name: "BentaPOS",
    category: "Point of Sale System",
    description:
      "A point-of-sale solution designed to organize sales transactions and support everyday business operations.",
    image: "/images/bentapos.png",
    tags: ["POS", "Sales", "Transactions"],
  },
  {
    number: "04",
    name: "StockWisePro",
    category: "Sales & Inventory Management",
    description:
      "A sales and inventory management system designed to help businesses monitor products, sales activities, and inventory records.",
    image: "/images/stockwisepro.png",
    tags: ["Sales", "Inventory", "Business Management"],
  },
  {
    number: "05",
    name: "Attendance & Payroll System",
    category: "Human Resource Management",
    description:
      "An employee attendance and payroll management solution designed to organize employee time records and payroll processes.",
    image: "/images/attendance-system.png",
    tags: ["Attendance", "Employee Management", "Payroll"],
  },
  {
    number: "06",
    name: "Job Portal",
    category: "Recruitment Web Application",
    description:
      "An online recruitment platform designed to connect job seekers and employers through job listings and application management.",
    image: "/images/job-portal.png",
    tags: ["Job Listings", "Applications", "Recruitment"],
  },
  {
    number: "07",
    name: "Online Registration System",
    category: "Registration Web Application",
    description:
      "An online registration solution designed to simplify information collection, registration submissions, and record management.",
    image: "/images/online-registration.png",
    tags: ["Online Forms", "Registration", "Records"],
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn about your goals, challenges, and the processes you want to improve.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define the requirements, system structure, and practical development approach.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We build and refine the solution based on the agreed requirements.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We present the completed solution and provide technical guidance for its use.",
  },
];

// =========================================================
// SOCIAL CONTACT LINKS
// =========================================================

function SocialLinks({ compact = false }) {
  const socialLinks = [
    {
      name: "WhatsApp",
      description: "Chat with us on WhatsApp",
      href: WHATSAPP_URL,
      icon: "◉",
      color: "hover:border-green-400/50 hover:bg-green-500/10",
      iconColor: "text-green-400",
    },
    {
      name: "Viber",
      description: "Message us through Viber",
      href: VIBER_URL,
      icon: "◈",
      color: "hover:border-purple-400/50 hover:bg-purple-500/10",
      iconColor: "text-purple-400",
    },
    {
      name: "Facebook Page",
      description: "Visit our Facebook Page",
      href: FACEBOOK_PAGE_URL,
      icon: "f",
      color: "hover:border-blue-400/50 hover:bg-blue-500/10",
      iconColor: "text-blue-400",
    },
  ];

  return (
    <div className={compact ? "flex flex-wrap gap-3" : "grid gap-3"}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className={`group flex items-center gap-4 rounded-xl border border-white/10 bg-[#0b1425] p-4 transition duration-300 ${social.color}`}
        >
          <span
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-xl font-black ${social.iconColor}`}
          >
            {social.icon}
          </span>

          {!compact && (
            <div>
              <p className="text-sm font-bold text-white">{social.name}</p>
              <p className="mt-1 text-xs text-slate-500">
                {social.description}
              </p>
            </div>
          )}

          {compact && (
            <span className="text-xs font-bold text-slate-300">
              {social.name}
            </span>
          )}

          <span className="ml-auto text-slate-500 transition group-hover:translate-x-1 group-hover:text-white">
            ↗
          </span>
        </a>
      ))}
    </div>
  );
}

// =========================================================
// MAKERTECH INTRO LOADER
// =========================================================

function MakerTechLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsVisible(false);
    }, 3200);

    return () => window.clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="maker-loader" aria-label="Loading MakerTech IT Solutions">
      <div className="loader-grid" />

      <div className="loader-glow loader-glow-one" />
      <div className="loader-glow loader-glow-two" />

      <div className="loader-curtain loader-curtain-left" />
      <div className="loader-curtain loader-curtain-right" />

      <div className="loader-content">
        <div className="loader-logo">
          <img src={LOGO} alt="MakerTech IT Solutions" />
        </div>

        <div className="loader-brand">
          <h1>
            MAKER<span>TECH</span>
          </h1>
          <p>IT SOLUTIONS</p>
        </div>

        <div className="loader-tagline">SIMPLE. SMART. EFFICIENT.</div>

        <div className="rocket-stage">
          <div className="rocket-orbit orbit-one" />
          <div className="rocket-orbit orbit-two" />

          <div className="rocket">
            <span>🚀</span>
          </div>

          <div className="rocket-flame" />
        </div>

        <div className="loader-progress">
          <div className="loader-progress-bar" />
        </div>

        <p className="loader-status">
          INITIALIZING INNOVATION
          <span className="loading-dots">...</span>
        </p>
      </div>

      <div className="loader-corner loader-corner-top">MT / 001</div>

      <div className="loader-corner loader-corner-bottom">
        TECHNOLOGY FOR BETTER BUSINESS
      </div>
    </div>
  );
}

// =========================================================
// BRAND LOGO
// =========================================================

function BrandLogo({ className = "h-11 w-11" }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={`${className} flex shrink-0 items-center justify-center overflow-hidden rounded-xl`}
    >
      {!imageError ? (
        <img
          src={LOGO}
          alt="MakerTech IT Solutions logo"
          className="h-full w-full object-contain"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-xl bg-blue-600 text-lg font-black text-white">
          MT
        </div>
      )}
    </div>
  );
}

// =========================================================
// SECTION HEADING
// =========================================================

function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <div className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}

// =========================================================
// PROJECT IMAGE
// =========================================================

function ProjectImage({ src, alt }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-blue-950">
        <div className="text-center">
          <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-500/10 text-3xl text-blue-400">
            ◈
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Project Preview
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-[16/10] overflow-hidden bg-slate-900">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        onError={() => setImageError(true)}
      />
    </div>
  );
}

// =========================================================
// BANNER CAROUSEL
// =========================================================

function BannerCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % bannerImages.length);
  };

  const previousSlide = () => {
    setActiveSlide(
      (current) =>
        (current - 1 + bannerImages.length) % bannerImages.length
    );
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % bannerImages.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="showcase"
      className="relative overflow-hidden border-y border-white/10 bg-[#030711] py-12 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
              MakerTech Showcase
            </p>

            <h2 className="text-2xl font-black text-white sm:text-3xl">
              Technology. Creativity.{" "}
              <span className="text-gradient">Growth.</span>
            </h2>
          </div>

          <p className="text-xs text-slate-500">
            Discover what we can build together.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-blue-400/20 bg-[#07101f] shadow-2xl shadow-blue-950/30">
          <div className="relative aspect-[2.67/1] min-h-[170px] w-full sm:min-h-[260px] lg:min-h-[360px]">
            {bannerImages.map((banner, index) => (
              <div
                key={banner.image}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  activeSlide === index
                    ? "z-10 opacity-100"
                    : "z-0 opacity-0"
                }`}
                aria-hidden={activeSlide !== index}
              >
                <img
                  src={banner.image}
                  alt={banner.alt}
                  className="h-full w-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}

            <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-[#030711]/20 via-transparent to-transparent" />

            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous banner"
              className="absolute left-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-xl text-white backdrop-blur-md transition hover:border-blue-400 hover:bg-blue-600 sm:left-5 sm:h-12 sm:w-12"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next banner"
              className="absolute right-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-xl text-white backdrop-blur-md transition hover:border-blue-400 hover:bg-blue-600 sm:right-5 sm:h-12 sm:w-12"
            >
              ›
            </button>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          {bannerImages.map((banner, index) => (
            <button
              key={banner.image}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to banner ${index + 1}`}
              aria-current={activeSlide === index}
              className={`h-2 rounded-full transition-all duration-500 ${
                activeSlide === index
                  ? "w-9 bg-blue-500"
                  : "w-2 bg-slate-600 hover:bg-blue-300"
              }`}
            />
          ))}
        </div>

        <p className="mt-4 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-slate-600">
          {String(activeSlide + 1).padStart(2, "0")} /{" "}
          {String(bannerImages.length).padStart(2, "0")}
        </p>
      </div>
    </section>
  );
}

// =========================================================
// MAIN APPLICATION
// =========================================================

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Website Inquiry - ${form.service || "General Inquiry"}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nInterested In: ${form.service}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#050914] font-sans text-white">
      <MakerTechLoader />

      <style>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 90px;
        }

        body {
          background: #050914;
        }

        /* MAKERTECH INTRO LOADER */

        .maker-loader {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #030711;
          animation: loaderFadeOut .7s ease 2.65s forwards;
        }

        .loader-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(59,130,246,.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,.07) 1px, transparent 1px);
          background-size: 45px 45px;
          opacity: .6;
        }

        .loader-glow {
          position: absolute;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          filter: blur(110px);
          pointer-events: none;
          animation: loaderGlow 3s ease-in-out infinite alternate;
        }

        .loader-glow-one {
          top: -150px;
          left: -100px;
          background: rgba(37,99,235,.35);
        }

        .loader-glow-two {
          right: -100px;
          bottom: -150px;
          background: rgba(6,182,212,.2);
          animation-delay: .5s;
        }

        .loader-curtain {
          position: absolute;
          top: 0;
          width: 50.5%;
          height: 100%;
          z-index: 5;
          background: linear-gradient(135deg, #030711, #071326);
          border-color: rgba(59,130,246,.25);
          border-style: solid;
        }

        .loader-curtain-left {
          left: 0;
          border-width: 0 1px 0 0;
          animation: curtainLeft 1.1s cubic-bezier(.77,0,.18,1) 2.05s forwards;
        }

        .loader-curtain-right {
          right: 0;
          border-width: 0 0 0 1px;
          animation: curtainRight 1.1s cubic-bezier(.77,0,.18,1) 2.05s forwards;
        }

        .loader-content {
          position: relative;
          z-index: 4;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          animation: loaderContentExit .65s ease 2.05s forwards;
        }

        .loader-logo {
          width: 85px;
          height: 85px;
          margin-bottom: 20px;
          padding: 8px;
          overflow: hidden;
          border: 1px solid rgba(59,130,246,.5);
          border-radius: 22px;
          background: rgba(15,23,42,.7);
          box-shadow: 0 0 35px rgba(37,99,235,.35);
          animation: logoReveal .8s cubic-bezier(.2,.8,.2,1) both;
        }

        .loader-logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .loader-brand h1 {
          color: white;
          font-size: clamp(30px, 6vw, 46px);
          font-weight: 900;
          letter-spacing: 4px;
          line-height: 1;
          animation: textReveal .8s ease .15s both;
        }

        .loader-brand h1 span {
          color: #3b82f6;
        }

        .loader-brand p {
          margin-top: 10px;
          color: #60a5fa;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 7px;
        }

        .loader-tagline {
          margin-top: 16px;
          color: #94a3b8;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 4px;
          animation: textReveal .8s ease .3s both;
        }

        .rocket-stage {
          position: relative;
          width: 150px;
          height: 115px;
          margin-top: 12px;
        }

        .rocket-orbit {
          position: absolute;
          left: 50%;
          top: 50%;
          border: 1px solid rgba(59,130,246,.22);
          border-radius: 50%;
          transform: translate(-50%,-50%);
        }

        .orbit-one {
          width: 85px;
          height: 85px;
          animation: spinSlow 8s linear infinite;
        }

        .orbit-two {
          width: 125px;
          height: 125px;
          border-style: dashed;
          animation: spinSlow 12s linear infinite reverse;
        }

        .rocket {
          position: absolute;
          left: 50%;
          top: 50%;
          z-index: 2;
          font-size: 42px;
          transform: translate(-50%,-50%) rotate(-45deg);
          animation: rocketLaunch 1.5s ease-in .5s forwards;
        }

        .rocket-flame {
          position: absolute;
          left: 50%;
          top: 65%;
          width: 7px;
          height: 35px;
          border-radius: 50%;
          background: linear-gradient(#38bdf8, #2563eb, transparent);
          filter: blur(4px);
          opacity: .9;
          transform: translateX(-50%);
          animation: flamePulse .25s ease-in-out infinite alternate;
        }

        .loader-progress {
          width: 190px;
          height: 3px;
          margin-top: 8px;
          overflow: hidden;
          border-radius: 10px;
          background: #1e293b;
        }

        .loader-progress-bar {
          width: 0;
          height: 100%;
          border-radius: 10px;
          background: linear-gradient(90deg,#2563eb,#38bdf8);
          box-shadow: 0 0 12px #3b82f6;
          animation: progressLoad 2.4s ease forwards;
        }

        .loader-status {
          margin-top: 12px;
          color: #64748b;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 3px;
        }

        .loading-dots {
          animation: dots 1s steps(4,end) infinite;
        }

        .loader-corner {
          position: absolute;
          z-index: 6;
          color: #475569;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .loader-corner-top {
          top: 25px;
          left: 25px;
        }

        .loader-corner-bottom {
          right: 25px;
          bottom: 25px;
          text-align: right;
        }

        @keyframes logoReveal {
          from { opacity: 0; transform: scale(.5) rotate(-15deg); }
          to { opacity: 1; transform: scale(1) rotate(0); }
        }

        @keyframes textReveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes rocketLaunch {
          0% { transform: translate(-50%,-50%) rotate(-45deg); }
          35% { transform: translate(-50%,-80%) rotate(-45deg); }
          100% {
            opacity: 0;
            transform: translate(120px,-190px) rotate(-45deg);
          }
        }

        @keyframes flamePulse {
          from { opacity: .4; height: 20px; }
          to { opacity: 1; height: 38px; }
        }

        @keyframes progressLoad {
          to { width: 100%; }
        }

        @keyframes curtainLeft {
          to { transform: translateX(-100%); }
        }

        @keyframes curtainRight {
          to { transform: translateX(100%); }
        }

        @keyframes loaderFadeOut {
          to {
            visibility: hidden;
            opacity: 0;
            pointer-events: none;
          }
        }

        @keyframes loaderContentExit {
          to {
            opacity: 0;
            transform: scale(.9);
          }
        }

        @keyframes loaderGlow {
          from { opacity: .35; transform: scale(.9); }
          to { opacity: .8; transform: scale(1.15); }
        }

        @keyframes dots {
          0% { opacity: .2; }
          50% { opacity: 1; }
          100% { opacity: .2; }
        }

        @keyframes spinSlow {
          from { transform: translate(-50%,-50%) rotate(0deg); }
          to { transform: translate(-50%,-50%) rotate(360deg); }
        }

        /* WEBSITE ANIMATIONS */

        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity .8s ease, transform .8s ease;
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: .35; transform: scale(1); }
          50% { opacity: .65; transform: scale(1.08); }
        }

        .animate-fade-up {
          animation: fadeUp .8s ease both;
        }

        .animate-float {
          animation: float 5s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulseGlow 5s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spinSlow 24s linear infinite;
        }

        .glass {
          background: rgba(15,23,42,.65);
          border: 1px solid rgba(148,163,184,.12);
          backdrop-filter: blur(16px);
        }

        .blue-gradient {
          background: linear-gradient(135deg,#2563eb,#38bdf8);
        }

        .text-gradient {
          background: linear-gradient(110deg,#60a5fa,#38bdf8,#a5f3fc);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .grid-pattern {
          background-image:
            linear-gradient(rgba(59,130,246,.045) 1px,transparent 1px),
            linear-gradient(90deg,rgba(59,130,246,.045) 1px,transparent 1px);
          background-size: 45px 45px;
        }

        .card-hover {
          transition: transform .35s ease, border-color .35s ease, box-shadow .35s ease;
        }

        .card-hover:hover {
          transform: translateY(-7px);
          border-color: rgba(59,130,246,.5);
          box-shadow: 0 20px 60px rgba(0,0,0,.25);
        }

        .nav-link {
          position: relative;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: -7px;
          left: 0;
          width: 0;
          height: 2px;
          background: #38bdf8;
          transition: width .3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        input, textarea, select {
          color-scheme: dark;
        }

        input:focus, textarea:focus, select:focus {
          outline: none;
          border-color: #3b82f6 !important;
          box-shadow: 0 0 0 3px rgba(59,130,246,.12);
        }

        @media (max-width: 480px) {
          .loader-corner { font-size: 7px; }
          .loader-corner-top { top: 15px; left: 15px; }
          .loader-corner-bottom { right: 15px; bottom: 15px; }
          .loader-brand h1 { letter-spacing: 2px; }
          .loader-brand p { letter-spacing: 5px; }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            scroll-behavior: auto !important;
            animation-duration: .01ms !important;
            animation-delay: 0ms !important;
            transition-duration: .01ms !important;
          }

          .reveal {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      {/* NAVIGATION */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#050914]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
            <BrandLogo />

            <div>
              <p className="text-sm font-black tracking-wide text-white">
                MakerTech
              </p>
              <p className="text-[10px] font-medium tracking-[0.18em] text-blue-400">
                IT SOLUTIONS
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full bg-blue-600 px-5 py-3 text-xs font-bold text-white transition hover:bg-blue-500 md:inline-flex"
          >
            Let's Talk <span className="ml-2">↗</span>
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-xl md:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <nav className="animate-fade-up border-t border-white/10 bg-[#080f20] px-6 py-5 md:hidden">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="block border-b border-white/5 py-4 text-sm font-medium text-slate-300 transition hover:text-blue-400"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-5 block rounded-lg bg-blue-600 px-5 py-3 text-center text-sm font-bold"
            >
              Let's Talk
            </a>
          </nav>
        )}
      </header>

      <main>
        {/* HERO */}
        <section
          id="home"
          className="relative grid-pattern flex min-h-screen items-center overflow-hidden pt-28"
        >
          <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-blue-600/15 blur-[120px] animate-pulse-glow" />
          <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[130px] animate-pulse-glow" />

          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_.85fr]">
            <div>
              <div className="animate-fade-up mb-7 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-blue-300">
                  Technology for Better Business
                </span>
              </div>

              <h1 className="animate-fade-up text-5xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Technology
                <br />
                That Works
                <br />
                <span className="text-gradient">For Your Business.</span>
              </h1>

              <p className="animate-fade-up mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
                We build practical software, business management systems, and
                technology solutions that help organizations work smarter,
                operate efficiently, and grow with confidence.
              </p>

              <div className="animate-fade-up mt-9 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="blue-gradient rounded-full px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:shadow-blue-500/30"
                >
                  Explore Our Projects <span className="ml-2">↗</span>
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-white/15 px-7 py-4 text-sm font-bold text-white transition hover:border-blue-400 hover:bg-blue-500/10"
                >
                  Start a Project
                </a>
              </div>

              <div className="animate-fade-up mt-14 grid max-w-lg grid-cols-3 gap-5 border-t border-white/10 pt-7">
                <div>
                  <p className="text-2xl font-black text-white">Custom</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Software Solutions
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-black text-white">Smart</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Business Systems
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-black text-white">Practical</p>
                  <p className="mt-1 text-xs text-slate-500">Technology</p>
                </div>
              </div>
            </div>

            <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
              <div className="absolute h-[330px] w-[330px] rounded-full border border-blue-400/10 animate-spin-slow" />
              <div className="absolute h-[270px] w-[270px] rounded-full border border-dashed border-blue-400/20 animate-spin-slow" />
              <div className="absolute h-[220px] w-[220px] rounded-full bg-blue-600/20 blur-[70px]" />

              <div className="relative z-10 flex h-64 w-64 items-center justify-center rounded-[42px] border border-blue-400/20 bg-gradient-to-br from-slate-800/90 to-blue-950/80 p-8 shadow-2xl shadow-blue-950/60 animate-float sm:h-72 sm:w-72">
                <div className="flex h-full w-full items-center justify-center rounded-[30px] border border-white/10 bg-[#07101f]/80 p-9">
                  <BrandLogo className="h-full w-full" />
                </div>
              </div>

              <div className="glass absolute -left-4 top-10 rounded-2xl px-4 py-3 shadow-xl sm:-left-12">
                <p className="text-xs font-bold text-white">Software</p>
                <p className="mt-1 text-[10px] text-blue-300">Development</p>
              </div>

              <div className="glass absolute -right-4 top-24 rounded-2xl px-4 py-3 shadow-xl sm:-right-12">
                <p className="text-xs font-bold text-white">Business</p>
                <p className="mt-1 text-[10px] text-blue-300">Automation</p>
              </div>

              <div className="glass absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-2xl px-5 py-3 shadow-xl">
                <p className="text-xs font-bold text-white">
                  Electronics & IoT
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BRAND STRIP */}
        <section className="border-y border-white/5 bg-[#080f1e]">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-5 px-5 py-8 text-xs font-bold uppercase tracking-[0.16em] text-slate-500 sm:px-8 md:justify-between">
            <span>Software Development</span>
            <span className="text-blue-500">✦</span>
            <span>Business Automation</span>
            <span className="text-blue-500">✦</span>
            <span>Electronics & IoT</span>
            <span className="text-blue-500">✦</span>
            <span>IT Solutions</span>
          </div>
        </section>

        {/* BANNER CAROUSEL */}
        <BannerCarousel />

        {/* ABOUT */}
        <section id="about" className="relative py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
            <div className="reveal">
              <SectionHeading
                eyebrow="About MakerTech"
                title={
                  <>
                    Simple Ideas.
                    <br />
                    <span className="text-gradient">Smart Solutions.</span>
                  </>
                }
              />

              <p className="leading-8 text-slate-400">
                MakerTech IT Solutions provides technology services focused on
                software development, business automation, electronics, and
                practical IT solutions.
              </p>

              <p className="mt-5 leading-8 text-slate-400">
                We believe technology should solve real problems. Our goal is
                to help businesses and organizations improve their processes
                through useful, reliable, and thoughtfully developed systems.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400">
                  ✦
                </div>

                <div>
                  <p className="font-bold text-white">
                    Simple. Smart. Efficient.
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Our approach to technology.
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal delay-200 relative">
              <div className="absolute -inset-5 rounded-[35px] bg-blue-600/10 blur-2xl" />

              <div className="relative grid grid-cols-2 gap-4">
                {[
                  ["⌘", "Software", "Applications built around your needs."],
                  ["▦", "Automation", "More organized business processes."],
                  ["◉", "Electronics", "Connected and practical technology."],
                  ["⚙", "IT Solutions", "Technical support and integration."],
                ].map(([icon, title, description]) => (
                  <div
                    key={title}
                    className="card-hover rounded-2xl border border-white/10 bg-[#0c1527] p-6"
                  >
                    <span className="text-3xl text-blue-400">{icon}</span>
                    <h3 className="mt-5 font-bold text-white">{title}</h3>
                    <p className="mt-2 text-xs leading-6 text-slate-500">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MISSION, VISION & GOALS - ADDED */}
          <div className="mx-auto mt-20 max-w-7xl px-5 sm:px-8">
            <div className="reveal mb-10 text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
                Our Direction
              </p>
              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                Mission, Vision <span className="text-gradient">& Goals.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400">
                The principles that guide how we create technology and serve
                businesses, organizations, and communities.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <article className="reveal card-hover rounded-2xl border border-white/10 bg-[#0b1425] p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-3xl text-blue-400">
                  🎯
                </div>
                <h3 className="mt-6 text-xl font-black text-white">Our Mission</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  To provide practical, innovative, and reliable technology
                  solutions that simplify operations, improve productivity,
                  and help solve real-world challenges through software,
                  automation, electronics, and IT services.
                </p>
              </article>

              <article className="reveal card-hover delay-100 rounded-2xl border border-white/10 bg-[#0b1425] p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-3xl text-cyan-400">
                  🔭
                </div>
                <h3 className="mt-6 text-xl font-black text-white">Our Vision</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  To become a trusted technology solutions provider recognized
                  for innovation, quality, and excellence, making useful and
                  forward-thinking technology more accessible to businesses
                  and organizations.
                </p>
              </article>

              <article className="reveal card-hover delay-200 rounded-2xl border border-white/10 bg-[#0b1425] p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-3xl text-indigo-400">
                  🚀
                </div>
                <h3 className="mt-6 text-xl font-black text-white">Our Goals</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  To develop dependable and user-friendly software, help
                  businesses automate everyday processes, expand our
                  electronics and IoT capabilities, and build lasting client
                  relationships through quality service and continuous
                  improvement.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="bg-[#080f1e] py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="reveal">
              <SectionHeading
                eyebrow="What We Do"
                title={
                  <>
                    Our <span className="text-gradient">Services</span>
                  </>
                }
                description="Technology services designed to help businesses improve operations, solve problems, and build better digital experiences."
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <article
                  key={service.number}
                  className={`reveal card-hover rounded-2xl border border-white/10 bg-[#0b1425] p-7 ${
                    index % 3 === 1 ? "delay-100" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl text-blue-400">
                      {service.icon}
                    </span>
                    <span className="text-xs font-bold tracking-widest text-slate-600">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {service.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-medium text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="mt-7 inline-flex items-center gap-2 text-xs font-bold text-blue-400 transition hover:text-cyan-300"
                  >
                    Inquire About This Service <span>↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTIONS */}
        <section id="solutions" className="py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="reveal">
              <SectionHeading
                eyebrow="Our Software Products"
                title={
                  <>
                    Solutions for
                    <br />
                    <span className="text-gradient">Everyday Operations.</span>
                  </>
                }
                description="Explore our software solutions designed to support business operations, employee management, and organized workflows."
              />
            </div>

            <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
              {solutions.map((solution, index) => (
                <article
                  key={solution.number}
                  className={`reveal card-hover group overflow-hidden rounded-2xl border border-white/10 bg-[#0b1425] ${
                    index === 1
                      ? "delay-100"
                      : index === 2
                        ? "delay-200"
                        : ""
                  }`}
                >
                  <div className="relative overflow-hidden">
                    <ProjectImage
                      src={solution.image}
                      alt={`${solution.name} software screenshot`}
                    />

                    <div className="absolute left-4 top-4 rounded-full border border-blue-300/20 bg-[#07101f]/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-300">
                      Software Solution
                    </div>
                  </div>

                  <div className="p-7">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-400">
                      {solution.category}
                    </p>

                    <h3 className="mt-3 text-2xl font-black text-white">
                      {solution.name}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {solution.description}
                    </p>

                    <div className="mt-6 space-y-3">
                      {solution.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 text-xs text-slate-300"
                        >
                          <span className="text-blue-400">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 text-sm font-bold text-white transition hover:text-blue-400"
                    >
                      Ask About This Solution <span>↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="bg-[#080f1e] py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="reveal">
              <SectionHeading
                eyebrow="Our Portfolio"
                title={
                  <>
                    Projects & <span className="text-gradient">Systems</span>
                  </>
                }
                description="Explore our collection of software systems, business applications, and digital solutions developed or explored by MakerTech IT Solutions."
              />
            </div>

            <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                Featured Projects
              </p>

              <p className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-bold text-blue-300">
                {String(projects.length).padStart(2, "0")} Projects
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <article
                  key={project.number}
                  className={`reveal card-hover group overflow-hidden rounded-2xl border border-white/10 bg-[#0b1425] ${
                    index % 3 === 1 ? "delay-100" : ""
                  }`}
                >
                  <div className="relative">
                    <ProjectImage
                      src={project.image}
                      alt={`${project.name} project preview`}
                    />

                    <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-[#07101f]/90 px-3 py-1.5 text-[10px] font-bold text-slate-300">
                      {project.number}
                    </span>
                  </div>

                  <div className="p-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-400">
                      {project.category}
                    </p>

                    <h3 className="mt-3 text-xl font-black text-white transition group-hover:text-blue-300">
                      {project.name}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="reveal mt-14 rounded-2xl border border-blue-400/20 bg-gradient-to-r from-blue-950/60 to-[#0b1425] p-8 text-center sm:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                Have a Project in Mind?
              </p>

              <h3 className="mt-4 text-2xl font-black text-white sm:text-3xl">
                Let's build something useful together.
              </h3>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
                Tell us about your business needs and let's discuss a practical
                technology solution.
              </p>

              <a
                href="#contact"
                className="mt-7 inline-flex rounded-full bg-blue-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-blue-500"
              >
                Discuss Your Project <span className="ml-2">↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="reveal">
              <SectionHeading
                eyebrow="How We Work"
                title={
                  <>
                    From Idea to <span className="text-gradient">Solution.</span>
                  </>
                }
                description="A straightforward process that keeps your goals and requirements at the center of every project."
                center
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((step, index) => (
                <div
                  key={step.number}
                  className={`reveal relative rounded-2xl border border-white/10 bg-[#0b1425] p-7 ${
                    index === 1
                      ? "delay-100"
                      : index === 2
                        ? "delay-200"
                        : ""
                  }`}
                >
                  <p className="text-5xl font-black text-blue-500/20">
                    {step.number}
                  </p>

                  <h3 className="mt-6 text-xl font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="px-5 pb-10 sm:px-8">
          <div className="reveal relative mx-auto max-w-7xl overflow-hidden rounded-[30px] border border-blue-400/20 bg-gradient-to-br from-blue-950 via-[#101c38] to-[#07101f] px-7 py-16 text-center sm:px-14 sm:py-20">
            <div className="pointer-events-none absolute -right-20 -top-40 h-96 w-96 rounded-full bg-blue-500/20 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[100px]" />

            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-300">
                Let's Work Together
              </p>

              <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-black leading-tight text-white sm:text-5xl">
                Looking for a system that works for your business?
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-300">
                Whether you need business software, automation, employee
                management, or a custom application, MakerTech IT Solutions
                can help you explore the right approach.
              </p>

              <a
                href="#contact"
                className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-sm font-black text-blue-950 transition hover:-translate-y-1 hover:bg-blue-100"
              >
                Let's Discuss Your Requirements <span className="ml-2">↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-28">
          <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr]">
            <div className="reveal">
              <SectionHeading
                eyebrow="Get in Touch"
                title={
                  <>
                    Let's Start a
                    <br />
                    <span className="text-gradient">Conversation.</span>
                  </>
                }
                description="Have an idea, a business challenge, or a project in mind? Send us a message and let's discuss how technology can help."
              />

              <div className="mt-10 space-y-6">
                {/* EMAIL */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400">
                    ✉
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Email Address</p>

                    <a
                      href={`mailto:${BUSINESS_EMAIL}`}
                      className="mt-1 block text-sm font-semibold text-white transition hover:text-blue-400"
                    >
                      {BUSINESS_EMAIL}
                    </a>
                  </div>
                </div>

                {/* BUSINESS INQUIRIES */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400">
                    ◷
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      Business Inquiries
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      Software, Systems & IT Solutions
                    </p>
                  </div>
                </div>
              </div>

              {/* SOCIAL MEDIA CONTACTS */}
              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  Connect With Us
                </p>

                <SocialLinks />
              </div>

              <div className="mt-10 border-t border-white/10 pt-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  Our Philosophy
                </p>

                <p className="mt-3 text-xl font-black text-white">
                  Simple. Smart. Efficient.
                </p>
              </div>
            </div>

            {/* CONTACT FORM */}
            <form
              onSubmit={handleSubmit}
              className="reveal delay-100 rounded-3xl border border-white/10 bg-[#0b1425] p-7 sm:p-9"
            >
              <h3 className="text-2xl font-black text-white">
                Send Us a Message
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Fill out the form to prepare an inquiry through your email app.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-bold text-slate-300">
                    Your Name
                  </label>

                  <input
                    required
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-white/10 bg-[#070e1b] px-4 py-3.5 text-sm text-white placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold text-slate-300">
                    Email Address
                  </label>

                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-[#070e1b] px-4 py-3.5 text-sm text-white placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-xs font-bold text-slate-300">
                  What are you interested in?
                </label>

                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#070e1b] px-4 py-3.5 text-sm text-white"
                >
                  <option value="">Select a service or solution</option>
                  <option value="AquaBill">AquaBill</option>
                  <option value="SakayGo">SakayGo</option>
                  <option value="BentaPOS">BentaPOS</option>
                  <option value="StockWisePro">StockWisePro</option>
                  <option value="PickleBook">PickleBook</option>
                  <option value="Attendance & Payroll System">
                    Attendance & Payroll System
                  </option>
                  <option value="Sales & Inventory Management System">
                    Sales & Inventory Management System
                  </option>
                  <option value="Job Portal">Job Portal</option>
                  <option value="Online Registration System">
                    Online Registration System
                  </option>
                  <option value="Custom Software Development">
                    Custom Software Development
                  </option>
                  <option value="Business Automation">
                    Business Automation
                  </option>
                  <option value="Electronics & IoT">
                    Electronics & IoT
                  </option>
                  <option value="IT Consultation">IT Consultation</option>
                  <option value="Other">Other Inquiry</option>
                </select>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-xs font-bold text-slate-300">
                  Your Message
                </label>

                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about your project or requirements..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#070e1b] px-4 py-3.5 text-sm text-white placeholder:text-slate-600"
                />
              </div>

              <button
                type="submit"
                className="blue-gradient mt-6 flex w-full items-center justify-center gap-3 rounded-xl px-6 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/20"
              >
                Prepare Email Inquiry <span>↗</span>
              </button>

              <p className="mt-4 text-center text-[10px] leading-5 text-slate-500">
                This form opens your default email application. It does not
                directly store or submit information to a website database.
              </p>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#030711]">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
          <div className="grid gap-10 md:grid-cols-[1.2fr_.8fr_1fr]">
            {/* BRAND */}
            <div className="max-w-sm">
              <div className="flex items-center gap-3">
                <BrandLogo />

                <div>
                  <p className="font-black text-white">MakerTech</p>
                  <p className="text-[10px] font-bold tracking-[0.18em] text-blue-400">
                    IT SOLUTIONS
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Practical software, business systems, and technology solutions
                built to make everyday operations smarter and more efficient.
              </p>

              <p className="mt-4 text-xs font-bold tracking-wider text-blue-400">
                SIMPLE. SMART. EFFICIENT.
              </p>

              {/* SOCIAL LINKS IN FOOTER */}
              <div className="mt-7">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  Follow & Contact Us
                </p>

                <SocialLinks compact />
              </div>
            </div>

            {/* QUICK LINKS */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                Quick Links
              </p>

              <div className="mt-5 grid grid-cols-2 gap-x-10 gap-y-4">
                {navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-sm text-slate-500 transition hover:text-blue-400"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                Contact
              </p>

              <a
                href={`mailto:${BUSINESS_EMAIL}`}
                className="mt-5 block break-all text-sm text-slate-400 transition hover:text-blue-400"
              >
                {BUSINESS_EMAIL}
              </a>

              <div className="mt-5 space-y-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-500 transition hover:text-green-400"
                >
                  <span className="text-green-400">◉</span>
                  WhatsApp
                  <span>↗</span>
                </a>

                <a
                  href={VIBER_URL}
                  className="flex items-center gap-2 text-sm text-slate-500 transition hover:text-purple-400"
                >
                  <span className="text-purple-400">◈</span>
                  Viber
                  <span>↗</span>
                </a>

                <a
                  href={FACEBOOK_PAGE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-500 transition hover:text-blue-400"
                >
                  <span className="font-black text-blue-400">f</span>
                  Facebook Page
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-xs text-slate-600 sm:flex-row">
            <p>
              © {new Date().getFullYear()} MakerTech IT Solutions. All rights
              reserved.
            </p>

            <p>Simple. Smart. Efficient.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}