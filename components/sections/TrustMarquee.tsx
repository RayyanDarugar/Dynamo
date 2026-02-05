"use client";

import { Container } from "@/components/ui/Container";

const companies = [
    "Acme Corp", "Global Bank", "TechFlow", "DataSystems", "CloudScale", "Nebula", "Vortex", "Horizon", "Zenith", "Apex"
];

export function TrustMarquee() {
    return (
        <section className="py-12 border-b border-white/5 bg-brand-dark overflow-hidden">
            <Container>
                <p className="text-center text-sm font-mono text-slate-500 mb-8 uppercase tracking-widest">
                    Trusted by engineering teams at
                </p>

                <div className="relative flex overflow-x-hidden group">
                    <div className="animate-marquee flex whitespace-nowrap gap-16">
                        {/* First Set */}
                        {companies.map((company, i) => (
                            <span key={i} className="text-xl font-bold text-slate-600 hover:text-white transition-colors duration-300 flex items-center gap-2">
                                <div className="w-6 h-6 rounded bg-slate-800" /> {/* Placeholder Icon */}
                                {company}
                            </span>
                        ))}
                        {/* Duplicate Set for Loop */}
                        {companies.map((company, i) => (
                            <span key={`dup-${i}`} className="text-xl font-bold text-slate-600 hover:text-white transition-colors duration-300 flex items-center gap-2">
                                <div className="w-6 h-6 rounded bg-slate-800" /> {/* Placeholder Icon */}
                                {company}
                            </span>
                        ))}
                    </div>

                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-dark to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-brand-dark to-transparent z-10" />
                </div>
            </Container>
        </section>
    );
}
