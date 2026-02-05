import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/layout/Hero";
import { Problem } from "@/components/sections/Problem";
import { Insight } from "@/components/sections/Insight";
import { Solution } from "@/components/sections/Solution";
import { Architecture } from "@/components/sections/Architecture";
import { Composable } from "@/components/sections/Composable";
import { Deployment } from "@/components/sections/Deployment";
import { ProductDemo } from "@/components/sections/ProductDemo";
import { WhyDynamo } from "@/components/sections/WhyDynamo";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans overflow-x-hidden pt-20">
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Insight />
        <Solution />
        <Architecture />
        <Composable />
        <Deployment />
        <ProductDemo />
        <WhyDynamo />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
