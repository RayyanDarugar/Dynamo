"use client";

import { Container } from "@/components/ui/Container";
import { ScrollReveal, revealChildVariants } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function WhyDynamo() {
    return (
        <section className="py-24 bg-brand-dark">
            <Container>
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold tracking-tight text-white mb-6">
                            Enterprise-Grade by Default
                        </h2>
                        <p className="text-lg text-slate-400 mb-8 max-w-xl">
                            We've solved the hard infrastructure problems so you can focus on building intelligent agents. Reliability, compliance, and scale are built in.
                        </p>

                        <ScrollReveal staggerChildren={0.05} className="grid sm:grid-cols-2 gap-4">
                            {[
                                "Autonomous background execution",
                                "Human-in-the-loop for exceptions",
                                "Explainable reasoning logs",
                                "Managed runtime & scaling",
                                "SOC2 Type II Compliant",
                                "RBAC & SSO Integration"
                            ].map((item, i) => (
                                <motion.div key={i} variants={revealChildVariants} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                                        <Check className="w-3 h-3" />
                                    </div>
                                    <span className="text-slate-300 font-medium">{item}</span>
                                </motion.div>
                            ))}
                        </ScrollReveal>

                        <div className="mt-10 p-6 bg-brand-card rounded-lg border border-white/10">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue font-bold border border-brand-blue/20">PD</div>
                                <div>
                                    <div className="font-bold text-white">Parand Tony Darugar</div>
                                    <div className="text-xs text-slate-500 uppercase tracking-wide">Founder</div>
                                </div>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                "After 30 years building platforms at <span className="text-white">Yahoo</span> and <span className="text-white">Coupa</span>, and founding four companies, I've seen the same pattern: enterprise automation is brittle. I built Dynamo to be the infrastructure I wish I had—resilient, observable, and ready for scale."
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 w-full bg-black rounded-xl p-8 text-slate-300 font-mono text-sm leading-relaxed overflow-hidden shadow-2xl relative border border-white/10">
                        <div className="absolute top-0 right-0 p-4 opacity-50">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                        </div>
                        <div className="text-green-400 mb-4">$ dynamo audit --agent=finance_bot</div>
                        <div className="opacity-70">
                            [INFO] Starting audit trace for agent: finance_bot<br />
                            [INFO] Execution ID: 8f9a-2b3c-4d5e<br />
                            [WARN] Confidence score &lt; 0.85 on processing invoice #9921<br />
                            [ACTION] Escalating to human review queue (Reason: Low Confidence)<br />
                            [INFO] Human reviewer approved action.<br />
                            [SUCCESS] Step completed. Duration: 240ms<br />
                            [INFO] Policy check passed for "ACME_FINANCE_POLICY_V2"<br />
                            [SUCCESS] Workflow completed successfully.
                        </div>
                        <div className="mt-2 animate-pulse">_</div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
