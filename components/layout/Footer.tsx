import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

const footerLinks = {
    Product: ["Agents", "Workflows", "Integrations", "Enterprise", "Pricing"],
    Company: ["About", "Blog", "Careers", "Contact"],
    Resources: ["Documentation", "API Reference", "Community", "Status"],
    Legal: ["Privacy", "Terms", "Security"],
};

export function Footer() {
    return (
        <footer className="bg-brand-dark/95 border-t border-white/10 py-12 md:py-16 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-brand-blue/5 pointer-events-none" />

            <Container className="relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-12 gap-8 lg:gap-12">
                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-4 lg:col-span-5">
                        <Link href="/" className="inline-block mb-6">
                            <Logo variant="white" width={140} height={40} />
                        </Link>
                        <p className="text-slate-400 text-sm max-w-sm mb-6 leading-relaxed">
                            The enterprise standard for building, deploying, and managing AI agents at scale. Reliability meets natural language.
                        </p>
                        <div className="text-sm text-slate-500 font-mono">
                            © {new Date().getFullYear()} AGENT DYNAMO. ALL RIGHTS RESERVED.
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="col-span-2 md:col-span-8 lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
                        {Object.entries(footerLinks).map(([category, links]) => (
                            <div key={category}>
                                <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">{category}</h3>
                                <ul className="space-y-3">
                                    {links.map((link) => (
                                        <li key={link}>
                                            <Link
                                                href="#"
                                                className="text-sm text-slate-400 hover:text-brand-cyan hover:translate-x-1 transition-all duration-200 inline-block"
                                            >
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    );
}
