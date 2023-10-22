import { Metadata } from "next";
import HeroCenter from "@/components/Hero/hero_center";
import FAQ from "@/components/FAQ";
import Mission from "@/components/Mission";
import CTA from "@/components/CTA";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";





    



export const metadata: Metadata = {
  title: "The Leading Blockchain Venture Platform for Digital Assets",
  description: "Your Next Gen Digital Asset Platform"
  // other metadata
};


export default function Home() {
  return (
    <main>
      
    
      <HeroCenter />
   
    </main>
  );
}
