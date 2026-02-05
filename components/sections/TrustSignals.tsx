import { Container } from "@/components/ui/Container";
import { Building2, Globe, LayoutGrid, Network, Landmark } from "lucide-react";

const companies = [
    { name: "Acme Corp", icon: Building2 },
    { name: "GlobalBank", icon: Landmark },
    { name: "Nexus Systems", icon: Network },
    { name: "TerraForm", icon: Globe },
    { name: "GridLock", icon: LayoutGrid },
];

export function TrustSignals() {
    return (
        <section className="py-12 border-b border-slate-100 bg-white">
            <Container>
                <p className="text-center text-sm font-medium text-slate-500 mb-8">
                    TRUSTED BY INNOVATIVE ENGINEERING TEAMS
                </p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {companies.map((company) => (
                        <div key={company.name} className="flex items-center gap-2 group">
                            <company.icon className="w-6 h-6 text-slate-800 group-hover:text-brand-blue transition-colors" />
                            <span className="font-bold text-lg text-slate-800 group-hover:text-brand-blue transition-colors">{company.name}</span>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
