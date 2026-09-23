'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from 'framer-motion'
import {
  ArrowRight,
  Code2,
  Sparkles,
  Target,
  Rocket,
  CheckCircle2,
  MessageSquareCode,
  GraduationCap,
  ShieldCheck,
  Heart,
  ChevronRight,
  MapPin,
  Laptop,
  Users2,
  Building2,
  Globe,
  HelpCircle,
  ChevronDown,
} from 'lucide-react'

// ─────────────────────────────────────────────────────────────────────────────
// DATA & TYPES
// ─────────────────────────────────────────────────────────────────────────────

const impactStats = [
  { value: '350+', label: 'Graduates Trained', desc: 'Working across top tech hubs & remote' },
  { value: '90%', label: 'Placement Rate', desc: 'Land developer roles within 6 months' },
  { value: '12 Wks', label: 'Intensive Bootcamp', desc: 'Hands-on practical execution' },
  { value: '2.5×', label: 'Avg Salary Increase', desc: 'From starting pay to developer level' },
]

const coreValues = [
  {
    icon: Code2,
    title: 'Practical Over Theoretical',
    desc: 'We replace outdated textbook theory with real-world React, Next.js, and TypeScript production workflows. Every lesson ends in working code.',
    badge: 'Real-World Focus',
  },
  {
    icon: MessageSquareCode,
    title: 'Rigorous Code Reviews',
    desc: 'No student builds in isolation. Instructors review every pull request line-by-line to teach clean architecture, performance, and best practices.',
    badge: '1-on-1 Feedback',
  },
  {
    icon: Target,
    title: 'Career Placement & Portfolios',
    desc: 'We train developers to get hired. Students graduate with 3+ production-grade projects deployed to live URLs and optimized GitHub profiles.',
    badge: 'Job Ready',
  },
  {
    icon: Heart,
    title: 'Inclusive & Supportive Community',
    desc: 'Whether learning online from anywhere in Ethiopia or in-person in Addis Ababa, our small cohort sizes ensure nobody is left behind.',
    badge: 'Ethiopia Wide',
  },
]

const learningJourneySteps = [
  {
    step: '01',
    title: 'Modern Web Foundations',
    subtitle: 'HTML5, Modern CSS & ES6+ JavaScript',
    desc: 'Master semantic web structure, flexbox, grid, Tailwind CSS, and asynchronous JavaScript fundamentals.',
  },
  {
    step: '02',
    title: 'React Ecosystem Mastery',
    subtitle: 'Component Architecture & State Management',
    desc: 'Learn React 19, hooks, custom state management, REST API integration, and clean component patterns.',
  },
  {
    step: '03',
    title: 'Production Next.js & Fullstack',
    subtitle: 'App Router, Server Components & Auth',
    desc: 'Build fast, SEO-optimized fullstack applications using Next.js, server actions, and database integrations.',
  },
  {
    step: '04',
    title: 'Capstone & Career Launch',
    subtitle: 'Portfolio Review, CV & Mock Interviews',
    desc: 'Engineer a capstone project, refine your portfolio, complete mock technical interviews, and connect with hiring partners.',
  },
]

const teamMembers = [
  {
    name: 'Lead Technical Instructors',
    role: 'Senior Software Engineers',
    location: 'Addis Ababa & Remote',
    desc: 'Active Ethiopian software developers with experience architecting high-scale frontend systems, fintech payment portals, and enterprise web applications.',
    img: '/ethiopian_student1.png',
  },
  {
    name: 'Student Mentors & Reviewers',
    role: 'Frontend Engineering Mentors',
    location: 'Addis Ababa, Ethiopia',
    desc: 'Dedicated mentors who provide code reviews on GitHub, run daily Q&A sessions on Telegram, and guide capstone projects.',
    img: '/ethiopian_student2.png',
  },
]

const aboutFaqs = [
  {
    q: 'What makes TechVision different from university or online courses?',
    a: 'TechVision is 100% project-first. Instead of watching lectures passively, you build real software, get your code reviewed line-by-line by senior developers, and graduate with a production portfolio deployed to live URLs.',
  },
  {
    q: 'Do I need prior coding experience to join?',
    a: 'No prior degree or professional background is required. We start from modern web foundations and guide you step-by-step through advanced Next.js development over 12 intensive weeks.',
  },
  {
    q: 'How does live online bootcamp learning work?',
    a: 'For students across Ethiopia, we conduct live interactive online sessions with structured Telegram support groups, daily mentor office hours, and line-by-line GitHub code reviews.',
  },
  {
    q: 'What career support does TechVision provide?',
    a: 'During the final 2 weeks, we optimize your GitHub profile, tailor your technical CV, conduct mock technical interviews, and introduce top graduates to hiring partners and remote opportunities.',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT: HERO SECTION
// ─────────────────────────────────────────────────────────────────────────────

function AboutHero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden pt-36 pb-20 px-6">
      {/* Background Deep Glows */}
      <div className="absolute inset-0 bg-[#050B08] -z-10" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none -z-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,200,83,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,83,1) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      {/* Radiant Glow Center */}
      <motion.div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0,200,83,0.15) 0%, transparent 68%)',
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.95, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        {/* Top Pill */}
        <motion.div variants={itemVariants} className="inline-flex items-center justify-center">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-[#00C853]/30 bg-[#00C853]/10 px-5 py-2 text-xs sm:text-sm font-bold text-[#00C853] backdrop-blur-md shadow-[0_0_20px_rgba(0,200,83,0.15)]">
            <Sparkles size={14} className="text-[#00C853]" />
            <span>About TechVision Academy</span>
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="mt-8 text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight text-white"
        >
          Dedicated to Building Ethiopia&apos;s Premier{' '}
          <span className="bg-gradient-to-r from-[#00C853] via-[#69FF99] to-[#B2FF59] bg-clip-text text-transparent">
            Software Developers.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed text-[#9FB3A8]"
        >
          TechVision is an intensive frontend engineering academy based in Addis Ababa, Ethiopia. We empower ambitious learners with hands-on bootcamps, real-world project portfolios, and active developer mentorship.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="https://learn.techvision.edu.et/batch-application"
            className="group relative flex items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-[#00C853] to-[#00A844] px-8 py-4 font-bold text-black shadow-[0_0_36px_rgba(0,200,83,0.35)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(0,200,83,0.55)] w-full sm:w-auto"
          >
            <span className="relative">Apply for Next Batch</span>
            <ArrowRight size={18} className="relative transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <a
            href="#our-mission"
            className="group flex items-center justify-center gap-2.5 rounded-xl border border-white/12 bg-white/[0.04] px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-[#00C853]/40 hover:bg-white/[0.08] w-full sm:w-auto"
          >
            <span>Explore Our Story</span>
            <ChevronRight size={16} className="text-[#00C853] group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT: IMPACT STATS SECTION
// ─────────────────────────────────────────────────────────────────────────────

function ImpactStatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-[#050B08] py-16 px-6 relative border-y border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-[#0C1812]/70 border border-white/[0.06] hover:border-[#00C853]/30 transition-all duration-300 text-center flex flex-col items-center justify-center"
            >
              <div className="text-3xl sm:text-4xl font-black text-white bg-gradient-to-r from-[#00C853] to-[#B2FF59] bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-white mb-1">{stat.label}</div>
              <div className="text-xs text-[#8FA99A]">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT: OUR MISSION & STORY
// ─────────────────────────────────────────────────────────────────────────────

function OurMissionSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [25, -25]), { stiffness: 60, damping: 20 })

  return (
    <section id="our-mission" ref={ref} className="bg-[#08110D] py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div style={{ y }} className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story Visual Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative w-full"
          >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-[#00C853]/10 rounded-[28px] blur-2xl pointer-events-none" />

            <div className="relative bg-[#0C1812]/90 border border-white/[0.1] rounded-[28px] p-8 shadow-2xl z-10 flex flex-col justify-between overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00C853] animate-pulse" />
                    <span className="text-xs font-bold text-white/50 tracking-widest uppercase">TechVision Origin</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#B2FF59] bg-[#00C853]/15 px-2.5 py-1 rounded-full border border-[#00C853]/25">
                    Addis Ababa, Ethiopia
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  Bridging the Tech Gap
                </h3>
                <p className="text-[#8FA99A] text-xs sm:text-sm leading-relaxed mb-6">
                  Traditional education often focuses heavily on theory without giving students modern framework skills or code review experience. We created TechVision to change that.
                </p>
              </div>

              {/* Live Feature Checkmarks */}
              <div className="space-y-3 pt-4 border-t border-white/[0.08]">
                {[
                  'Project-First Curriculum',
                  'Live Developer Mentorship',
                  'Stricter Code Review Standards',
                  'Career & Job Application Support',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs text-white font-medium">
                    <CheckCircle2 size={16} className="text-[#00C853] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Badge */}
              <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#00C853]/15 border border-[#00C853]/30 flex items-center justify-center text-[#00C853] shrink-0">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <div className="text-white text-xs font-bold">12-Week Transformation</div>
                  <div className="text-[#8FA99A] text-[11px]">From Beginner to Hired Frontend Dev</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Mission Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 text-[#00C853] text-xs font-bold tracking-[0.2em] uppercase mb-3">
                <span className="w-6 h-px bg-gradient-to-r from-transparent to-[#00C853]/50" />
                Why We Exist
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-6">
                We Build Software Developers, Not Just{' '}
                <span className="bg-gradient-to-r from-[#00C853] to-[#B2FF59] bg-clip-text text-transparent">
                  Tutorial Viewers.
                </span>
              </h2>

              <p className="text-[#9FB3A8] text-sm sm:text-base leading-relaxed mb-6">
                Learning to code can feel overwhelming when trapped watching hours of videos without building production applications. TechVision provides a structured, immersive environment where students build real-world software from day one.
              </p>

              <p className="text-[#9FB3A8] text-sm sm:text-base leading-relaxed mb-8">
                Whether you are a university student looking to get job-ready, a self-taught developer struggling to stand out, or a career switcher, our 12-week bootcamp gives you the skills, guidance, and portfolio needed to succeed in tech.
              </p>

              {/* Highlights Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#0C1812] border border-white/[0.06]">
                  <div className="text-[#00C853] font-bold text-sm mb-1 flex items-center gap-2">
                    <Rocket size={16} /> Production Capstones
                  </div>
                  <p className="text-[#8FA99A] text-xs leading-relaxed">
                    Build multi-page Next.js applications integrated with live APIs and databases.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0C1812] border border-white/[0.06]">
                  <div className="text-[#B2FF59] font-bold text-sm mb-1 flex items-center gap-2">
                    <ShieldCheck size={16} /> Verified Skills
                  </div>
                  <p className="text-[#8FA99A] text-xs leading-relaxed">
                    Pass code reviews and mock technical interviews with active engineering mentors.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}



// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT: CORE VALUES SECTION
// ─────────────────────────────────────────────────────────────────────────────

function CoreValuesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-[#08110D] py-24 px-6 relative overflow-hidden border-t border-white/[0.04]">
      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-[#00C853] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-[#00C853]/50" />
            Our Core Pillars
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-[#00C853]/50" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            The Principles That Drive{' '}
            <span className="bg-gradient-to-r from-[#00C853] to-[#B2FF59] bg-clip-text text-transparent">
              Our Academy
            </span>
          </h2>
          <p className="text-[#9FB3A8] mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Every aspect of TechVision is engineered to produce confident, high-performing software engineers.
          </p>
        </motion.div>

        {/* Grid of Values */}
        <div className="grid md:grid-cols-2 gap-6">
          {coreValues.map((val, idx) => {
            const Icon = val.icon
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-8 rounded-3xl bg-[#0C1812]/80 border border-white/[0.08] hover:border-[#00C853]/40 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,200,83,0.1)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#00C853]/15 border border-[#00C853]/30 flex items-center justify-center text-[#00C853] group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>
                    <span className="text-[10px] font-bold text-[#B2FF59] bg-[#00C853]/10 px-3 py-1 rounded-full border border-[#00C853]/20">
                      {val.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00C853] transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-[#9FB3A8] text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT: LEARNING JOURNEY TIMELINE
// ─────────────────────────────────────────────────────────────────────────────

function LearningJourneySection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-[#050B08] py-24 px-6 relative overflow-hidden border-t border-white/[0.04]">
      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-[#00C853] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-[#00C853]/50" />
            Curriculum Structure
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-[#00C853]/50" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            The 12-Week Developer{' '}
            <span className="bg-gradient-to-r from-[#00C853] to-[#B2FF59] bg-clip-text text-transparent">
              Roadmap
            </span>
          </h2>
          <p className="text-[#9FB3A8] mt-4 max-w-xl mx-auto text-sm sm:text-base">
            From essential fundamentals to enterprise-grade Next.js development.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningJourneySteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-6 rounded-2xl bg-[#0C1812] border border-white/[0.06] hover:border-[#00C853]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-black text-[#00C853]/30 block mb-3 font-mono">
                  {step.step}
                </span>
                <h3 className="text-lg font-bold text-white mb-1">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-[#00C853] mb-3">
                  {step.subtitle}
                </p>
                <p className="text-[#8FA99A] text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT: INSTRUCTORS & MENTORS HIGHLIGHT
// ─────────────────────────────────────────────────────────────────────────────

function TeamSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-[#08110D] py-24 px-6 relative overflow-hidden border-t border-white/[0.04]">
      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-[#00C853] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-[#00C853]/50" />
            Addis Ababa & Remote Mentors
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-[#00C853]/50" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Learn Alongside Active{' '}
            <span className="bg-gradient-to-r from-[#00C853] to-[#B2FF59] bg-clip-text text-transparent">
              Ethiopian Software Developers
            </span>
          </h2>
          <p className="text-[#9FB3A8] mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Our team brings local & global industry development experience from Addis Ababa to ensure you learn modern code conventions and real-world practices.
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[#0C1812] border border-white/[0.08] hover:border-[#00C853]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden ring-2 ring-[#00C853]/30 shrink-0 relative">
                    <Image src={member.img} alt={member.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{member.name}</h3>
                    <p className="text-xs text-[#00C853] font-semibold">{member.role}</p>
                    <span className="text-[10px] font-mono text-[#8FA99A]">{member.location}</span>
                  </div>
                </div>

                <p className="text-[#9FB3A8] text-xs sm:text-sm leading-relaxed">
                  {member.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT: ABOUT FAQ ACCORDION
// ─────────────────────────────────────────────────────────────────────────────

function AboutFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-[#050B08] py-24 px-6 relative overflow-hidden border-t border-white/[0.04]">
      <div ref={ref} className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-[#00C853] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-[#00C853]/50" />
            Common Questions
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-[#00C853]/50" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-[#00C853] to-[#B2FF59] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-[#9FB3A8] mt-3 text-sm sm:text-base">
            Everything you need to know about TechVision Academy.
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {aboutFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={faq.q}
                className="rounded-2xl border border-white/[0.08] bg-[#0C1812] overflow-hidden transition-colors duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-base font-bold text-white pr-4">{faq.q}</span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-[#00C853]/20 text-[#00C853] rotate-180' : 'bg-white/5 text-[#8FA99A]'
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 border-t border-white/[0.04]"
                    >
                      <p className="text-xs sm:text-sm text-[#9FB3A8] leading-relaxed pt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT: FINAL CTA BANNER
// ─────────────────────────────────────────────────────────────────────────────

function AboutCtaSection() {
  return (
    <section className="bg-[#050B08] py-20 px-6 relative border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0C1812] via-[#0E2218] to-[#0C1812] border border-[#00C853]/30 p-10 md:p-16 text-center shadow-[0_0_60px_rgba(0,200,83,0.15)]">
          {/* Background Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00C853]/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#00C853] bg-[#00C853]/15 border border-[#00C853]/30 px-4 py-1.5 rounded-full mb-4">
              Start Your Developer Journey
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
              Ready to Become a Professional Frontend Engineer?
            </h2>

            <p className="text-[#9FB3A8] text-sm sm:text-base mb-8">
              Join our upcoming 12-week batch. Limited to 20 students per cohort to ensure direct 1-on-1 mentor support.
            </p>

            <Link
              href="https://learn.techvision.edu.et/batch-application"
              className="inline-flex items-center justify-center gap-2 text-sm font-bold text-black bg-gradient-to-r from-[#00C853] to-[#00A844] px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(0,200,83,0.35)] hover:shadow-[0_0_45px_rgba(0,200,83,0.55)] hover:scale-105 transition-all duration-300"
            >
              <span>Apply for Next Batch</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN ABOUT CLIENT EXPORT
// ─────────────────────────────────────────────────────────────────────────────

export function AboutClient() {
  return (
    <main className="min-h-screen bg-[#050B08] text-[#DDE7E1]">
      <AboutHero />
      <ImpactStatsSection />
      <OurMissionSection />
      <CoreValuesSection />
      <LearningJourneySection />
      <TeamSection />
      <AboutFaqSection />
      <AboutCtaSection />
    </main>
  )
}
