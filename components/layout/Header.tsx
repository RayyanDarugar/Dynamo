"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "bg-brand-dark/80 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent py-5"
            )}
        >
            <Container className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Logo variant="white" width={150} height={32} />
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {["Product", "Solutions", "Enterprise", "Pricing"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="/login" className="text-sm font-medium text-white hover:text-brand-cyan hidden sm:block">
                        Log in
                    </Link>
                    <Link href="/contact">
                        <Button size="sm" className="bg-white/10 text-white hover:bg-white/20 border-white/5 border">Get Started</Button>
                    </Link>
                </div>
            </Container>
        </header >
    );
}
