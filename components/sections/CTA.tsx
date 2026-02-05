"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function CTA() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <section ref={ref} className="py-32 bg-brand-dark relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    style={{ y: y1 }}
                    className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-3xl opacity-50"
                />
                <motion.div
                    style={{ y: y2 }}
                    className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-3xl opacity-50"
                />
            </div>

            <Container className="relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
                >
                    Stop Experimenting. <span className="text-brand-cyan">Start Executing.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-slate-300 max-w-2xl mx-auto mb-10"
                >
                    Agent Dynamo turns AI from demos into dependable systems that actually run your business.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link href="/contact">
                        <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white shadow-lg shadow-brand-blue/25 px-8">
                            Request Access <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="outline" size="lg" className="border-white/10 text-white hover:bg-white/5 hover:border-brand-cyan/50 hover:text-brand-cyan transition-all">
                            Talk to Us
                        </Button>
                    </Link>
                </motion.div>
            </Container>
        </section>
    );
}
