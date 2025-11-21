import React, { useState } from 'react';
import { 
  Code, 
  Scale, 
  Cpu, 
  Globe, 
  BookOpen, 
  Award, 
  Mic, 
  Terminal, 
  ChevronRight,
  ExternalLink,
  Quote,
  Building2,
  Zap,
  Layout,
  ShieldCheck,
  FileText,
  Trophy,
  Target,
  Briefcase,
  Camera,
  User
} from 'lucide-react';
import employeePhoto from './thmoralg.jpg';
import kbPdf from './KB.pdf';
import nbPdf from './NB.pdf';
import chPdf from './CH.pdf';

// --- DATA SOURCES ---

const ELIGIBILITY_PERIOD = "1 Oct 2024 – 30 Sep 2025";

const INNOVATIONS = [
  {
    id: 1,
    title: "Swyftx Token Listing AI",
    role: "Lead Developer & Legal Architect",
    icon: <Zap className="w-8 h-8 text-yellow-400" />, 
    desc: "Proprietary internal tool utilizing AI to scan asset whitepapers against risk appetite matrices. Automates compliance extraction and creates audit trails.",
    tech: ["AI/LLM", "Compliance", "Internal Tool"],
    features: [
      "Automated Whitepaper Ingestion",
      "Risk Matrix Matching (Green/Amber/Red)",
      "Audit-Ready PDF Generation"
    ],
    impact: "Reduced manual vetting hours & standardized decision making."
  },
  {
    id: 2,
    title: "Marketing Compliance Bot",
    role: "Creator (Swyftx)",
    icon: <ShieldCheck className="w-8 h-8 text-red-400" />,
    desc: "An automated copy-review bot trained specifically on ASIC Regulatory Guide 234 (RG234) and the Swyftx internal marketing playbook.",
    tech: ["NLP", "ASIC Regs", "Slack Bot"],
    features: [
      "Real-time Slack Integration",
      "RG234 Cross-Referencing",
      "Marketing Playbook Alignment"
    ],
    impact: "Pre-screens 90% of social content, reducing legal bottleneck."
  },
  {
    id: 3,
    title: "Humminvoice",
    role: "Full Stack Developer",
    icon: <Layout className="w-8 h-8 text-blue-400" />,
    desc: "Bespoke practice management system built for Stirling & Rose. Replaced generic legal software with an agile, Kanban-based operating system.",
    link: "https://stirlingandrose.com",
    tech: ["Full Stack", "Workflow", "Ops"],
    features: [
      "Real-time Billing Dashboard",
      "Kanban Matter Flow",
      "Automated Client Updates"
    ],
    impact: "Bridged the gap between legal file management and agile software."
  },
  {
    id: 4,
    title: "AI Readiness Tool",
    role: "Developer",
    icon: <Target className="w-8 h-8 text-orange-400" />,
    desc: "A diagnostic tool used to assess client tech stacks for AI integration risks, generating a gap analysis report automatically.",
    tech: ["Diagnostic", "Risk Ops", "Report Gen"],
    features: [
      "Tech Stack Audit Matrix",
      "Gap Analysis Generation",
      "Implementation Roadmap"
    ],
    impact: "Streamlined the initial consultation phase for AI advisory."
  },
  {
    id: 5,
    title: "The Moralgorithm",
    role: "Creator & Developer",
    icon: <Cpu className="w-8 h-8 text-purple-400" />,
    desc: "Interactive, gamified digital experience testing ethical frameworks in AI. Users navigate complex scenarios to visualize the difficulty of encoding morality.",
    link: "https://stirlingandrose.com/moralgorithm/",
    tech: ["Game Logic", "EdTech", "Web"],
    features: [
      "Gamified Ethics Scenarios",
      "User Choice Tracking",
      "Educational Visualizations"
    ],
    impact: "Primary BD tool for engaging non-legal clients on AI safety."
  },
  {
    id: 6,
    title: "Nooriam",
    role: "Legal Engineer",
    icon: <Code className="w-8 h-8 text-emerald-400" />,
    desc: "Smart Legal Contract platform. Bridged the gap between legal logic (contract law) and product code to allow agreements to self-execute.",
    link: "https://nooriam.com",
    tech: ["Blockchain", "Smart Contracts", "Logic"],
    features: [
      "Self-Executing Clauses",
      "On-Chain Logic",
      "Legal Prose to Code Bridge"
    ],
    impact: "Operationalized complex legal clauses into executable code."
  }
];

const ACHIEVEMENTS = [
  {
    title: "Employee of the Quarter",
    role: "Recipient (FY 2026)",
    date: "Q1 FY26",
    icon: <Trophy className="text-yellow-400" />,
    hasPhoto: true,
    points: [
      "Awarded Swyftx Employee of the Quarter across the entire organization.",
      "Recognized for bridging the gap between commercial objectives and legal risk.",
      "First Legal Team member to receive this distinction."
    ]
  },
  {
    title: "M&A Transaction: Caleb & Brown",
    role: "Key Internal Counsel",
    date: "Jul 2025",
    icon: <Briefcase className="text-blue-400" />,
    points: [
      "Acted as key internal legal counsel for Swyftx's $100M+ acquisition.",
      "Managed due diligence across multiple jurisdictions with minimal oversight.",
      "Balanced commercial speed with strict regulatory protection mechanisms."
    ]
  },
  {
    title: "Easy Crypto Integration",
    role: "Integration Lead",
    date: "Aug 2025",
    icon: <Globe className="text-cyan-400" />,
    points: [
      "Led the complex legal integration of Easy Crypto NZ operations post-acquisition.",
      "Harmonized compliance frameworks across ANZ jurisdictions.",
      "Managed cross-border data privacy alignment and entity structuring."
    ]
  },
  {
    title: "Terms of Use & Privacy Overhaul",
    role: "Lead Counsel",
    date: "Mar 2025",
    icon: <Scale className="text-emerald-400" />,
    points: [
      "Executed the first complete overhaul of Swyftx Terms of Use & Privacy Policy.",
      "Redrafted entire consumer-facing legal suite for plain language compliance.",
      "Implemented new consent flows aligned with updated privacy regulations."
    ]
  },
  {
    title: "Major Product Development",
    role: "Lead Product Counsel",
    date: "2024 - 2025",
    icon: <Zap className="text-purple-400" />,
    points: [
      "Primary legal counsel for major product rollouts within the Swyftx ecosystem.",
      "Structured 'Earn' and 'Staking' products to mitigate regulatory risk.",
      "Worked directly with engineering squads to embed compliance at the code level."
    ]
  },
  {
    title: "First-of-Kind AI Policy",
    role: "Author & Architect",
    date: "Feb 2025",
    icon: <FileText className="text-pink-400" />,
    points: [
      "Drafted and implemented a generative AI usage policy for Swyftx employees.",
      "Established data leakage protocols while enabling engineering efficiency.",
      "Cited as a model policy for fintech operational risk management."
    ]
  }
];

const ENGAGEMENTS = [
  {
    date: "Sep - Oct 2025",
    title: "Hackathon Mentor & Speaker",
    org: "Murdoch University",
    type: "Mentorship",
    desc: "Mentored law & CS students on 'Hacking Back Against Scams'. Guided teams on regulatory implications of counter-scamming."
  },
  {
    date: "30 Jun 2025",
    title: "Keynote: Career Accelerator",
    org: "Scotch Global",
    type: "Speaking",
    desc: "Presented to aspiring students on non-linear career paths, advocating for CS skills in legal education. Recommendation by Sam Sterrett."
  },
  {
    date: "9 May 2025",
    title: "Generative AI Roundtable",
    org: "Adelaide University",
    type: "Expert Delegate",
    desc: "Flown to Adelaide for closed-door session with the Chief Justice of SA regarding AI evidence reliability and future drafting."
  },
  {
    date: "Jan 2025",
    title: "Guest Lecturer: Reimagining Law",
    org: "Murdoch University (LLB434)",
    type: "Academic",
    desc: "Deep dive lecture on Legal APIs, smart contracts, and automated governance."
  },
  {
    date: "2025",
    title: "Textbook Co-Editor",
    org: "Springer Nature",
    type: "Publication",
    desc: "Co-Editor/Author for 'Digital Assets and Private Law', specifically the chapter on Smart Legal Contracts."
  },
  {
    date: "In Progress",
    title: "Research: AI vs Consumers",
    org: "With Dr. Mark Giancaspro",
    type: "Research",
    desc: "Empirical study comparing human lawyer accuracy vs LLMs in analyzing consumer contracts to improve access to justice."
  }
];

const TESTIMONIALS = [
  {
    name: "Kristen Boulton",
    role: "Chief Legal Officer, Swyftx",
    quote: "When Ty is in the room... I know the company's risk appetite is being accurately represented. He cuts through the noise and focuses on the commercial outcome.",
    hasPdf: true,
    pdfLink: kbPdf
  },
  {
    name: "Natasha E Blycha",
    role: "Managing Director, Stirling & Rose",
    quote: "Ty is one of the few young lawyers I have encountered who genuinely possesses a hybrid skillset. He knows how to both leverage technology in the legal field and build it.",
    hasPdf: true,
    pdfLink: nbPdf
  },
  {
    name: "Campbell Hedley",
    role: "Senior Legal Counsel, Swyftx",
    quote: "Ty consistently absorbs new information and translates it into actionable advice for our product and engineering teams faster than most.",
    hasPdf: true,
    pdfLink: chPdf
  }
];

// --- COMPONENTS ---

const NavItem = ({ active, label, icon: Icon, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-5 py-3 rounded-full transition-all duration-300 whitespace-nowrap ${
      active 
        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
        : 'text-slate-400 hover:text-white hover:bg-slate-800'
    }`}
  >
    <Icon size={16} />
    <span className="font-medium text-sm">{label}</span>
  </button>
);

const TechCard = ({ item }) => (
  <div className="group relative p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col h-full">
    <div className="mb-6 p-4 rounded-xl bg-slate-900 w-fit border border-slate-700 group-hover:scale-110 transition-transform duration-300">
      {item.icon}
    </div>

    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
    <p className="text-sm text-blue-400 font-medium mb-4">{item.role}</p>
    
    <p className="text-slate-300 text-sm leading-relaxed mb-6">
      {item.desc}
    </p>

    <div className="mt-auto space-y-4">
      <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/50">
        <p className="text-xs text-slate-500 font-bold mb-2 uppercase tracking-wider">Key Features</p>
        <ul className="space-y-1">
          {item.features.map((f, i) => (
            <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
              <span className="text-blue-500 mt-0.5">•</span>
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {item.tech.map((t, i) => (
          <span key={i} className="text-xs font-mono px-2 py-1 rounded bg-slate-900 text-slate-400 border border-slate-700">
            {t}
          </span>
        ))}
      </div>

      {item.link && (
        <a 
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all text-sm font-medium group/btn"
        >
          Try Now
          <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
        </a>
      )}
    </div>
  </div>
);

const AchievementCard = ({ item }) => (
  <div className={`flex flex-col md:flex-row gap-6 items-start p-6 rounded-2xl border transition-all ${item.hasPhoto ? 'bg-gradient-to-r from-slate-900 to-slate-800 border-blue-500/40 shadow-lg shadow-blue-900/10' : 'bg-slate-900 border-slate-800 hover:border-purple-500/30'}`}>
    
    {/* Left Icon Column */}
    <div className={`p-3 rounded-xl shrink-0 ${item.hasPhoto ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-800'}`}>
      {React.cloneElement(item.icon, { size: 24 })}
    </div>

    {/* Content Column */}
    <div className="flex-grow">
      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
        <h3 className="text-xl font-bold text-white">{item.title}</h3>
        <span className={`text-xs font-mono py-1 px-2 rounded w-fit ${item.hasPhoto ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'}`}>
          {item.date}
        </span>
      </div>
      <p className="text-blue-400 text-sm font-medium mb-4">{item.role}</p>
      <ul className="space-y-2">
        {item.points.map((point, i) => (
          <li key={i} className="text-slate-300 text-sm flex gap-2">
            <ChevronRight size={14} className="text-slate-500 mt-1 shrink-0" />
            {point}
          </li>
        ))}
      </ul>
    </div>

    {/* Photo Column (If enabled) */}
    {item.hasPhoto && (
      <div className="shrink-0 w-full md:w-48 h-48 rounded-xl overflow-hidden border-2 border-blue-500/40 shadow-lg">
        <img 
          src={employeePhoto} 
          alt="Employee of the Quarter Award" 
          className="w-full h-full object-cover"
        />
      </div>
    )}
  </div>
);

const TimelineItem = ({ item, last }) => (
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className="w-3 h-3 rounded-full bg-blue-500 mt-2 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
      {!last && <div className="w-0.5 flex-grow bg-slate-800 my-2"></div>}
    </div>
    <div className="pb-12">
      <div className="flex items-baseline gap-3 mb-1">
        <span className="text-blue-400 font-mono text-sm">{item.date}</span>
        <h3 className="text-lg font-bold text-white">{item.title}</h3>
      </div>
      <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
        <Building2 size={14} />
        <span>{item.org}</span>
        <span className="w-1 h-1 rounded-full bg-slate-600"></span>
        <span className="text-slate-500">{item.type}</span>
      </div>
      <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
        {item.desc}
      </p>
    </div>
  </div>
);

export default function PortfolioApp() {
  const [activeTab, setActiveTab] = useState('achievements');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      
      {/* HERO SECTION */}
      <header className="relative overflow-hidden border-b border-slate-800 bg-slate-900/50">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 relative z-10">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              30 UNDER 30 NOMINEE
            </div>
            <div className="text-slate-500 text-xs font-mono border border-slate-800 px-3 py-1 rounded-full">
              ELIGIBILITY: {ELIGIBILITY_PERIOD}
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Ty Haberland
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl font-light">
            Legal Counsel at <span className="text-white font-medium">Swyftx</span>. 
            Operationalizing the law through code.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <div className="flex items-center gap-2 text-sm text-slate-500 font-mono">
              <Terminal size={16} />
              <span>REACT / TYPESCRIPT</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500 font-mono">
              <Scale size={16} />
              <span>COMMERCIAL LAW</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500 font-mono">
              <Cpu size={16} />
              <span>SMART CONTRACTS</span>
            </div>
          </div>
        </div>
      </header>

      {/* NAVIGATION */}
      <div className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex gap-2 overflow-x-auto no-scrollbar">
          <NavItem 
            active={activeTab === 'achievements'} 
            label="Key Achievements" 
            icon={Trophy}
            onClick={() => setActiveTab('achievements')}
          />
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-6xl mx-auto px-6 py-12 min-h-[600px]">
        
        {/* ACHIEVEMENTS TAB */}
        {activeTab === 'achievements' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white">Major Milestones</h2>
              <p className="text-slate-400 mt-1">Commercial transactions, policy work, and regulatory impact.</p>
            </div>
            
            <div className="space-y-6 mb-12">
              {ACHIEVEMENTS.map((item, idx) => (
                <AchievementCard key={idx} item={item} />
              ))}
            </div>

            {/* INNOVATION SECTION */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-white">Legal Tech & Operations</h2>
                  <p className="text-slate-400 mt-1">Tools designed and coded during the eligibility period.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {INNOVATIONS.map((item) => (
                  <TechCard key={item.id} item={item} />
                ))}
              </div>
            </div>

            {/* ENGAGEMENTS SECTION */}
            <div className="mb-12">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white">Speaking & Academic</h2>
                <p className="text-slate-400 mt-1">Roundtables, lectures, and mentorship contributions.</p>
              </div>

              <div className="pl-2">
                {ENGAGEMENTS.map((item, idx) => (
                  <TimelineItem 
                    key={idx} 
                    item={item} 
                    last={idx === ENGAGEMENTS.length - 1} 
                  />
                ))}
              </div>
            </div>

            {/* ENDORSEMENTS SECTION */}
            <div>
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white">Endorsements</h2>
                <p className="text-slate-400 mt-1">Excerpts from supporting letters.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {TESTIMONIALS.map((t, i) => (
                  <div key={i} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 relative flex flex-col h-full hover:border-blue-500/30 transition-colors">
                    <Quote size={40} className="absolute top-6 right-6 text-slate-800" />
                    <p className="text-slate-300 italic mb-6 leading-relaxed relative z-10 flex-grow">
                      "{t.quote}"
                    </p>
                    <div className="mt-4 pt-6 border-t border-slate-800">
                      <p className="text-white font-bold">{t.name}</p>
                      <p className="text-blue-400 text-sm mb-4">{t.role}</p>
                      
                      {t.hasPdf && (
                        <a 
                          href={t.pdfLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition-all text-xs font-medium group"
                        >
                          <FileText size={14} />
                          VIEW PDF REFERENCE
                          <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-12 mt-12 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <p>© 2025 Ty Haberland. All rights reserved.</p>
          <div className="flex items-center gap-4">
             <span>30 Under 30 Submission</span>
             <div className="w-1 h-1 bg-slate-700 rounded-full"></div>
             <span>Perth / Remote</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

