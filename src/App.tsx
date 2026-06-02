import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SiTelegram, SiYoutube, SiKick } from "react-icons/si";
import { Mail, ChevronRight, Zap, TrendingUp, Code, Megaphone, Users, Globe, PlayCircle } from "lucide-react";
import avatarImg from "@assets/9b923465-e3b6-440b-b6c6-e257bc05b47a-fullsize_1780424452711.jpg";
import gertvImg from "@assets/descarga_(7)_1780424452711.jpg";

// ── Translations ─────────────────────────────────────────────────────────────
type Lang = "es" | "en";

const t = {
  es: {
    badge: "Agencia Digital & Crecimiento Web3",
    heroTitle1: "Escala Tu Marca.",
    heroTitle2: "Domina El Espacio.",
    heroSub: "GerTV es la agencia digital líder para creadores de contenido, proyectos crypto y marcas que se niegan a pasar desapercibidas. Construimos audiencias, diseñamos experiencias y lanzamos proyectos ganadores.",
    heroCta: "Iniciar Proyecto",
    heroServices: "Ver Servicios",
    kickBadge: "Top Streamer",
    web3Badge: "ROI Comprobado",
    statsProjects: "Proyectos Lanzados",
    statsHours: "Horas de Streaming",
    statsBrands: "Marcas Promovidas",
    statsVolume: "Volumen de Clientes",
    aboutTitle1: "El Hustle es",
    aboutTitle2: "Digital.",
    aboutP1: "Ger no es un jefe de agencia cualquiera. Como creador de contenido carismático y educador crypto con una audiencia leal en Kick y YouTube, sabe lo que se necesita para construir una comunidad desde cero.",
    aboutP2: "Conectamos proyectos brillantes con las audiencias que merecen. Desde una presencia web impresionante, hasta una estrategia de streaming sólida o un lanzamiento de marca masivo — tenemos la red, las habilidades y la ejecución.",
    aboutTrust: "Con la confianza de los mejores creadores y fundadores Web3",
    servicesTitle: "Servicios de la",
    servicesTitle2: "Agencia",
    servicesSub: "Todo lo que necesitas para escalar tu presencia digital, bajo un mismo techo.",
    services: [
      { title: "Consultoría de Streaming", desc: "Gestión experta para Kick y YouTube. Crece tu canal, gana audiencia real y monetiza tu marca de streaming." },
      { title: "Estrategia Crypto", desc: "Visibilidad para NFT, DeFi y exchanges. Creamos estrategias de contenido que generan confianza y volumen." },
      { title: "Diseño y Desarrollo Web", desc: "Sitios web profesionales y de alta conversión. Diseñados con cuidado, funcionales y optimizados." },
      { title: "Automatización de Marketing", desc: "Escala tus redes sociales. Sistemas que trabajan mientras duermes para captar y convertir leads." },
      { title: "Conexión con Creadores", desc: "Red de contactos en gaming, finanzas y lifestyle. Pon tu producto frente a la audiencia correcta." },
      { title: "Lanzamientos de Marca", desc: "Promoción vía livestream para proyectos de inversión. Genera hype masivo para tu próximo lanzamiento." },
    ],
    testimonialsTitle: "Resultados",
    testimonialsTitle2: "Reales",
    testimonialsSub: "No te fíes solo de nuestra palabra.",
    testimonials: [
      { name: "Alex V.", role: "Fundador, Apex DeFi", text: "GerTV transformó completamente nuestra estrategia de lanzamiento. Alcanzamos $1M en volumen de trading en las primeras 48 horas. Una leyenda." },
      { name: "Marcos T.", role: "Streamer en Kick", text: "Estaba atascado en 50 viewers promedio. Después de 3 meses con Ger, estoy llegando a 800+ concurrentes y acabo de ser partner." },
      { name: "Sara J.", role: "Líder de Proyecto NFT", text: "Mi proyecto NFT ganó 500 nuevos seguidores en 2 días. La promo de streaming fue brutal. La energía de Ger no tiene rival." },
      { name: "David K.", role: "Dueño de Marca Crypto", text: "Ger construyó mi web en 48 horas y queda increíble. La tasa de conversión subió 300% de inmediato." },
      { name: "Elena R.", role: "Creadora de Contenido", text: "Los sistemas de automatización me ahorran 20 horas semanales. Ahora solo me enfoco en crear contenido." },
    ],
    ctaTitle1: "Listo para",
    ctaTitle2: "Tomar el Control?",
    ctaSub: "Deja de jugar pequeño. Vamos a construir tu marca, lanzar tu proyecto y dominar tu nicho.",
    ctaTelegram: "Mensaje en Telegram",
    ctaEmail: "Escríbenos",
    navAbout: "Nosotros",
    navServices: "Servicios",
    navContact: "Contacto",
    navHire: "Contrátanos",
    socialTitle: "Encuéntranos en",
    footerRights: "Todos los derechos reservados. Vamos a construir.",
    socialSection: "Conéctate con GerTV",
    socialSub: "Síguenos en nuestras plataformas y contáctanos directamente.",
  },
  en: {
    badge: "Digital Agency & Web3 Growth",
    heroTitle1: "Scale Your Brand.",
    heroTitle2: "Dominate The Space.",
    heroSub: "GerTV is the premier digital agency for content creators, crypto projects, and brands that refuse to be ignored. We build audiences, design experiences, and launch projects that win.",
    heroCta: "Start Your Project",
    heroServices: "View Services",
    kickBadge: "Top Streamer",
    web3Badge: "Proven ROI",
    statsProjects: "Projects Launched",
    statsHours: "Streaming Hours",
    statsBrands: "Brands Promoted",
    statsVolume: "Client Volume",
    aboutTitle1: "The Hustle is",
    aboutTitle2: "Digital.",
    aboutP1: "Ger isn't just another agency head. As a charismatic content creator and crypto educator with a massive loyal audience across Kick and YouTube, he knows what it takes to build a community from the ground up.",
    aboutP2: "We bridge the gap between brilliant projects and the audiences they deserve. Whether you need a stunning web presence, a bulletproof streaming strategy, or a massive brand launch — we have the network, the skills, and the execution.",
    aboutTrust: "Trusted by top creators & web3 founders",
    servicesTitle: "Agency",
    servicesTitle2: "Services",
    servicesSub: "Everything you need to scale your digital presence under one roof.",
    services: [
      { title: "Streaming Consulting", desc: "Expert management for Kick and YouTube. Grow your channel, gain real viewership, and monetize your streaming brand." },
      { title: "Crypto Content Strategy", desc: "Visibility for NFT, DeFi, and exchange platforms. We craft content strategies that build trust and drive volume." },
      { title: "Web Design & Dev", desc: "Professional, high-converting websites. Beautifully designed, fully functional, and optimized for conversions." },
      { title: "Marketing Automation", desc: "Scale your social media management. Systems that work while you sleep to capture and convert leads." },
      { title: "Creator Connections", desc: "Network bridging across gaming, finance, and lifestyle niches. Get your product in front of the right audiences." },
      { title: "Brand Launches", desc: "Live streaming promotion for investment projects. Massive hype generation for your next big launch." },
    ],
    testimonialsTitle: "Real",
    testimonialsTitle2: "Results",
    testimonialsSub: "Don't just take our word for it.",
    testimonials: [
      { name: "Alex V.", role: "Founder, Apex DeFi", text: "GerTV completely transformed our launch strategy. We hit $1M in trading volume in the first 48 hours. Absolute legend." },
      { name: "Marcus T.", role: "Kick Streamer", text: "I was stuck at 50 average viewers. After 3 months with Ger, I'm pulling 800+ concurrents and just got partnered." },
      { name: "Sarah J.", role: "NFT Project Lead", text: "My NFT project got 500 new followers in 2 days. The streaming promo was insane. The energy Ger brings is unmatched." },
      { name: "David K.", role: "Crypto Brand Owner", text: "Ger built my website in 48 hours and it looks incredible. The conversion rate jumped 300% instantly." },
      { name: "Elena R.", role: "Content Creator", text: "The marketing automation systems they set up saved me 20 hours a week. Now I just focus on creating content." },
    ],
    ctaTitle1: "Ready to",
    ctaTitle2: "Take Over?",
    ctaSub: "Stop playing small. Let's build your brand, launch your project, and dominate your niche.",
    ctaTelegram: "Message on Telegram",
    ctaEmail: "Email Us",
    navAbout: "About",
    navServices: "Services",
    navContact: "Contact",
    navHire: "Hire Us",
    socialTitle: "Find us on",
    footerRights: "All rights reserved. Let's build.",
    socialSection: "Connect with GerTV",
    socialSub: "Follow us on our platforms and reach out directly.",
  },
} as const;

// ── Motion Variants ───────────────────────────────────────────────────────────
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

// ── Social Links Data ─────────────────────────────────────────────────────────
const socialLinks = [
  {
    href: "https://t.me/YoutubeMulti",
    icon: SiTelegram,
    label: "Telegram",
    handle: "@YoutubeMulti",
    color: "hover:bg-[#0088cc]/20 hover:border-[#0088cc]/60",
    iconColor: "text-[#0088cc]",
    bgGlow: "shadow-[#0088cc]/10",
  },
  {
    href: "https://kick.com/gerrtv",
    icon: SiKick,
    label: "Kick",
    handle: "kick.com/gerrtv",
    color: "hover:bg-[#53f510]/20 hover:border-[#53f510]/60",
    iconColor: "text-[#53f510]",
    bgGlow: "shadow-[#53f510]/10",
  },
  {
    href: "https://www.youtube.com/@GerrTVV",
    icon: SiYoutube,
    label: "YouTube",
    handle: "@GerrTVV",
    color: "hover:bg-[#ff0000]/20 hover:border-[#ff0000]/60",
    iconColor: "text-[#ff0000]",
    bgGlow: "shadow-[#ff0000]/10",
  },
  {
    href: "mailto:geroytgame@hotmail.com",
    icon: Mail,
    label: "Email",
    handle: "geroytgame@hotmail.com",
    color: "hover:bg-primary/20 hover:border-primary/60",
    iconColor: "text-primary",
    bgGlow: "shadow-primary/10",
  },
];

// ── Components ────────────────────────────────────────────────────────────────

function Header({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const tx = t[lang];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container px-4 h-20 mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={avatarImg} alt="Logo" className="w-10 h-10 rounded-full border border-primary" />
          <span className="text-2xl font-black">Ger<span className="text-primary">TV</span></span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">{tx.navAbout}</a>
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">{tx.navServices}</a>
          <a href="#social" className="text-muted-foreground hover:text-foreground transition-colors">{tx.navContact}</a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            data-testid="button-lang-toggle"
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="inline-flex items-center justify-center h-9 px-4 text-xs font-bold rounded-md border border-border bg-card hover:bg-muted transition-colors tracking-widest uppercase"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <a
            href="#social"
            data-testid="link-hire-us"
            className="inline-flex items-center justify-center h-10 px-5 text-sm font-bold bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            {tx.navHire}
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero({ lang }: { lang: Lang }) {
  const tx = t[lang];
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 pb-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-secondary/20 rounded-full blur-[120px] mix-blend-screen"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              {tx.badge}
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
              {tx.heroTitle1} <br />
              <span className="text-gradient">{tx.heroTitle2}</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              {tx.heroSub}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a href="#social" data-testid="link-hero-cta" className="inline-flex items-center justify-center h-14 px-8 text-base font-bold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors glow-primary">
                {tx.heroCta} <ChevronRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#services" data-testid="link-hero-services" className="inline-flex items-center justify-center h-14 px-8 text-base font-bold bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors">
                {tx.heroServices}
              </a>
            </motion.div>
          </motion.div>

          <motion.div className="flex-1 relative" initial="hidden" animate="visible" variants={scaleIn}>
            <div className="relative w-full max-w-md mx-auto aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-2xl opacity-40 animate-pulse"></div>
              <img
                src={avatarImg}
                alt="GerTV Avatar"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-background shadow-2xl glow-primary"
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-8 bg-card border border-border px-4 py-3 rounded-xl flex items-center gap-3 shadow-xl z-20"
              >
                <div className="w-10 h-10 rounded-full bg-[#53f510]/10 flex items-center justify-center">
                  <SiKick className="text-[#53f510] text-xl" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Kick Partner</p>
                  <p className="text-sm font-bold">{tx.kickBadge}</p>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -right-8 bg-card border border-border px-4 py-3 rounded-xl flex items-center gap-3 shadow-xl z-20"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="text-primary text-xl" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Web3 Growth</p>
                  <p className="text-sm font-bold">{tx.web3Badge}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stats({ lang }: { lang: Lang }) {
  const tx = t[lang];
  const stats = [
    { value: "200+", label: tx.statsProjects },
    { value: "15K+", label: tx.statsHours },
    { value: "50+", label: tx.statsBrands },
    { value: "$5M+", label: tx.statsVolume },
  ];
  return (
    <section className="py-12 border-y border-border bg-card/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center">
              <h3 className="text-4xl md:text-5xl font-black text-foreground mb-2">{stat.value}</h3>
              <p className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About({ lang }: { lang: Lang }) {
  const tx = t[lang];
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn} className="flex-1 w-full">
            <div className="relative rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-500 z-10"></div>
              <img src={gertvImg} alt="GerTV Brand" className="w-full h-auto aspect-video object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 border-2 border-primary/50 rounded-2xl z-20 pointer-events-none"></div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex-1">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-black mb-6">
              {tx.aboutTitle1} <span className="text-gradient">{tx.aboutTitle2}</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-6 text-muted-foreground text-lg">
              <p>{tx.aboutP1}</p>
              <p>{tx.aboutP2}</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-8 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-background bg-card flex items-center justify-center overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}Ger`} alt="Client" />
                  </div>
                ))}
              </div>
              <div className="text-sm font-semibold">{tx.aboutTrust}</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Services({ lang }: { lang: Lang }) {
  const tx = t[lang];
  const icons = [
    <PlayCircle className="w-8 h-8 text-primary" />,
    <Zap className="w-8 h-8 text-secondary" />,
    <Code className="w-8 h-8 text-primary" />,
    <Megaphone className="w-8 h-8 text-secondary" />,
    <Users className="w-8 h-8 text-primary" />,
    <Globe className="w-8 h-8 text-secondary" />,
  ];
  return (
    <section id="services" className="py-24 bg-card/30 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            {tx.servicesTitle} <span className="text-gradient">{tx.servicesTitle2}</span>
          </h2>
          <p className="text-lg text-muted-foreground">{tx.servicesSub}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tx.services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: index * 0.1 } } }}
              className="bg-card border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="mb-6 w-16 h-16 rounded-xl bg-background border border-border flex items-center justify-center group-hover:scale-110 transition-transform">
                {icons[index]}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials({ lang }: { lang: Lang }) {
  const tx = t[lang];
  const colors = ["bg-blue-500", "bg-green-500", "bg-purple-500", "bg-orange-500", "bg-pink-500"];
  return (
    <section className="py-24 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto mb-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            {tx.testimonialsTitle} <span className="text-gradient">{tx.testimonialsTitle2}</span>
          </h2>
          <p className="text-lg text-muted-foreground">{tx.testimonialsSub}</p>
        </motion.div>
      </div>

      <div className="flex gap-6 px-4 pb-8 overflow-x-auto snap-x snap-mandatory" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        {tx.testimonials.map((item, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { delay: i * 0.1 } } }}
            className="min-w-[320px] md:min-w-[400px] snap-center bg-card border border-border p-8 rounded-2xl shrink-0"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-12 h-12 rounded-full ${colors[i]} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                {item.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-foreground">{item.name}</h4>
                <p className="text-sm text-primary">{item.role}</p>
              </div>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed italic">"{item.text}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function SocialSection({ lang }: { lang: Lang }) {
  const tx = t[lang];
  return (
    <section id="social" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-14"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black mb-4">
            {tx.socialSection}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-xl mx-auto">
            {tx.socialSub}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto"
        >
          {socialLinks.map((s, i) => (
            <motion.a
              key={i}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              data-testid={`link-social-${s.label.toLowerCase()}`}
              variants={fadeInUp}
              whileHover={{ scale: 1.04, y: -4 }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-5 p-6 bg-card border border-border rounded-2xl transition-all duration-300 cursor-pointer shadow-lg ${s.color} ${s.bgGlow} group`}
            >
              <div className="w-14 h-14 rounded-xl bg-background border border-border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <s.icon className={`w-7 h-7 ${s.iconColor}`} />
              </div>
              <div className="text-left min-w-0">
                <p className="font-bold text-base">{s.label}</p>
                <p className="text-sm text-muted-foreground truncate">{s.handle}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Footer({ lang }: { lang: Lang }) {
  const tx = t[lang];
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
              <img src={avatarImg} alt="GerTV Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-black tracking-tight">Ger<span className="text-primary">TV</span></span>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                data-testid={`link-footer-${s.label.toLowerCase()}`}
                className={`text-muted-foreground transition-colors ${s.iconColor.replace("text-", "hover:text-")}`}
              >
                <s.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} GerTV Agency. {tx.footerRights}
        </div>
      </div>
    </footer>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
function App() {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-[100dvh] bg-background text-foreground font-sans selection:bg-primary/30">
      <Header lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Stats lang={lang} />
        <About lang={lang} />
        <Services lang={lang} />
        <Testimonials lang={lang} />
        <SocialSection lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}

export default App;
