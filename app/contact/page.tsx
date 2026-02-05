"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="bg-brand-dark min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow pt-32 pb-24 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[120px]" />
                </div>

                <Container className="relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                        {/* Left Column: Context */}
                        <div className="flex-1 lg:pt-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-mono font-medium border border-brand-blue/20 mb-6">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
                                    </span>
                                    ACCEPTING EARLY ACCESS
                                </div>

                                <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
                                    Deploy agents that actually work.
                                </h1>
                                <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-lg">
                                    Stop building chat toys. Start shipping reliable, compliant, and observable agentic workflows.
                                </p>

                                <div className="space-y-4">
                                    {[
                                        "Enterprise-grade security & RBAC",
                                        "Full observability & reasoning logs",
                                        "Seamless integration with internal APIs",
                                        "Managed infrastructure & scaling"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 shrink-0 border border-green-500/20">
                                                <Check className="w-3 h-3" />
                                            </div>
                                            <span className="text-slate-300 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="flex-1 max-w-lg w-full">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="bg-brand-card/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-2xl relative"
                            >
                                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-purple rounded-t-2xl opacity-50" />

                                <h2 className="text-xl font-bold text-white mb-6">Request Access</h2>

                                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label htmlFor="firstName" className="text-xs font-medium text-slate-400 uppercase tracking-wide">First Name</label>
                                            <Input id="firstName" placeholder="Jane" />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="lastName" className="text-xs font-medium text-slate-400 uppercase tracking-wide">Last Name</label>
                                            <Input id="lastName" placeholder="Doe" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-xs font-medium text-slate-400 uppercase tracking-wide">Work Email</label>
                                        <Input id="email" type="email" placeholder="jane@company.com" />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="company" className="text-xs font-medium text-slate-400 uppercase tracking-wide">Company</label>
                                        <Input id="company" placeholder="Acme Inc." />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-xs font-medium text-slate-400 uppercase tracking-wide">Use Case / Message</label>
                                        <Textarea id="message" placeholder="We're looking to automate..." rows={4} />
                                    </div>

                                    <Button className="w-full justify-center group" size="lg">
                                        Apply for Access
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>

                                    <p className="text-xs text-center text-slate-500 mt-4">
                                        By submitting, you agree to our Terms of Service and Privacy Policy.
                                    </p>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </Container>
            </main>

            <Footer />
        </div>
    );
}
