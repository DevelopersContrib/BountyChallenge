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
  title: "BountyChallenge - Create a Bounty or Join a Challenge on the Blockchain",
  description: "Join. Contribute. Build. Get Rewarded with Bounty Challenge."
  // other metadata
};


export default function Home() {
  return (
    <main>
      
    
      <HeroCenter />
   
    </main>
  );
}
