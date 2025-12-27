"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const screenshots = [
  { src: "/shuolio/conversation-v2.png", alt: "Conversation practice" },
  { src: "/shuolio/exercise-list.png", alt: "Exercise selection" },
  { src: "/shuolio/exercise-detail.png", alt: "Exercise details" },
];

export default function Home() {
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-advance every 4 seconds unless hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveScreenshot((prev) => (prev + 1) % screenshots.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero - Compact with gradient */}
      <section className="hero-gradient pt-16 pb-14 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-5 animate-fade-in">
            <span className="text-accent">Colin</span> Sanders
          </h1>
          <p className="text-xl md:text-2xl text-muted mb-6 max-w-2xl animate-fade-in-delay-1">
            Senior engineer at Amazon building high-scale infrastructure and AI tooling.
            Shipping products on the side.
          </p>
          <div className="flex flex-wrap gap-6 text-sm font-medium animate-fade-in-delay-2">
            <a
              href="https://linkedin.com/in/colin-c-sanders"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/CCSanders"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="mailto:colinsandersdev@outlook.com"
              className="text-muted hover:text-accent transition-colors duration-200"
            >
              colinsandersdev@outlook.com
            </a>
          </div>
        </div>
      </section>

      {/* Shuolio - Featured Project */}
      <section className="py-20 px-6 md:px-16 lg:px-24 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-8">
            Featured Project
          </p>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <Image
                src="/shuolio/logo-white.svg"
                alt="Shuolio"
                width={200}
                height={48}
                className="h-12 w-auto mb-8"
              />
              <p className="text-lg text-muted mb-5 leading-relaxed">
                An AI-powered Mandarin learning app. I&apos;m building it while learning
                the language myself, using it to work through the gaps that existing
                tools leave open.
              </p>
              <p className="text-muted mb-5 leading-relaxed">
                The first release focuses on conversation practice: real-time voice
                conversations with an AI tutor. Next is a full curriculum system with
                structured lessons and spaced repetition.
              </p>
              <p className="text-muted mb-8 leading-relaxed">
                AI has handed us tools that can orchestrate learning, adapt to individual
                levels, and surface information instantly. Most of the assumptions behind
                how we teach and learn haven&apos;t caught up. I&apos;m interested in what
                happens when you rebuild from those new primitives.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1.5 bg-surface text-muted text-sm rounded-full border border-border">
                  React Native
                </span>
                <span className="px-3 py-1.5 bg-surface text-muted text-sm rounded-full border border-border">
                  FastAPI
                </span>
                <span className="px-3 py-1.5 bg-surface text-muted text-sm rounded-full border border-border">
                  Claude API
                </span>
                <span className="px-3 py-1.5 bg-surface text-muted text-sm rounded-full border border-border">
                  ElevenLabs
                </span>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://apps.apple.com/us/app/shuolio/id6756590792"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-80"
                >
                  <Image
                    src="/shuolio/app-store-badge.svg"
                    alt="Download on the App Store"
                    width={140}
                    height={47}
                    className="h-11 w-auto"
                  />
                </a>
                <a
                  href="https://www.shuolio.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-sm font-medium text-muted border border-border rounded-full hover:border-accent hover:text-accent transition-colors duration-200"
                >
                  Website
                </a>
              </div>
            </div>

            {/* Screenshot Carousel */}
            <div
              className="flex flex-col items-center"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative mb-6">
                <div className="absolute -inset-8 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent rounded-[3rem] blur-2xl" />
                <div className="relative w-[260px] h-[565px] overflow-hidden rounded-[2rem]">
                  {screenshots.map((screenshot, index) => (
                    <Image
                      key={index}
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      className={`object-cover shadow-2xl border border-border transition-opacity duration-500 ${
                        index === activeScreenshot ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="relative z-10 flex gap-4">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveScreenshot(index)}
                    className="p-3 -m-3 group cursor-pointer"
                    aria-label={`View screenshot ${index + 1}`}
                  >
                    <span
                      className={`block w-3 h-3 rounded-full transition-all duration-200 ${
                        index === activeScreenshot
                          ? "bg-accent"
                          : "bg-border group-hover:bg-accent/50"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 px-6 md:px-16 lg:px-24 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Experience
          </h2>
          <p className="text-muted mb-14 max-w-2xl">
            Senior engineer at Amazon, currently in the vulnerability management org.
            I build systems that route security vulnerabilities to the right owners with
            enough context to act on them.
          </p>

          <div className="grid gap-12">
            <div>
              <h3 className="text-lg font-semibold text-accent-soft mb-3">
                High-throughput data infrastructure
              </h3>
              <p className="text-muted leading-relaxed">
                Security signals come from everywhere: host agents, network scanners, container monitoring,
                cloud configuration, network telemetry, access management changes. The systems I build ingest millions of these signals,
                enable security engineers to precisely assess risk in real time, and route it to the teams responsible.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-accent-soft mb-3">
                Developer tooling and rule engines
              </h3>
              <p className="text-muted leading-relaxed">
                Engineers need to define rules for how findings get classified and routed,
                and test those rules before they go live. I&apos;ve built interpreters and
                execution engines for custom rule languages and scanning platforms, and preview systems that simulate
                rule changes against production data.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-accent-soft mb-3">
                AI-assisted operations
              </h3>
              <p className="text-muted leading-relaxed">
                When a vulnerability shows up, it is critical to figure out who owns the affected
                system and whether it&apos;s exploitable in context. I built MCP tools that
                augment and enhance this research, searching internal documentation and ticket history to
                find ownership and assess exploitability.
              </p>
            </div>

            <div className="pt-8 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Past work
              </h3>
              <p className="text-muted leading-relaxed">
                Centralized congestion control infrastructure that restored scanning across millions of AWS accounts
                after emergency throttling. Detection authoring tooling and interfaces for cloud compliance scanning systems.
                Integration platform for Amazon Business external partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 md:px-16 lg:px-24 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
            About
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-muted">
              <p className="leading-relaxed">
                Based in Seattle. At Amazon, I lead an engineering team and review MCP tooling
                for the broader GenAI community. I also run workshops on AI-accelerated
                development.
              </p>
              <p className="leading-relaxed">
                Outside of work: published author, currently learning Mandarin, and
                increasingly interested in knowledge and intelligence as subjects
                in themselves.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">Education</h3>
              <p className="text-muted">MS Computer Science, University of Alabama</p>
              <p className="text-muted">BS Computer Science, University of Alabama</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-16 lg:px-24 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <p className="text-muted text-sm">Colin Sanders</p>
            <div className="flex gap-6 text-sm">
              <a
                href="mailto:colinsandersdev@outlook.com"
                className="text-muted hover:text-accent transition-colors duration-200"
              >
                Email
              </a>
              <a
                href="https://linkedin.com/in/colin-c-sanders"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/CCSanders"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors duration-200"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 pt-6 border-t border-border">
            <p className="text-muted/60 text-xs">
              All opinions are my own and not representative of any employer.
            </p>
            <p className="text-muted/60 text-xs">
              Made with{" "}
              <a
                href="https://claude.com/claude-code"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent/70 hover:text-accent transition-colors duration-200"
              >
                Claude Code
              </a>
              {" "}(Opus 4.5)
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
