
import Background3D from "@/components/Background3D";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CardsShowcase from "@/components/CardsShowcase";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import TransactionPulse from "@/components/TransactionPulse";

const Index = () => {
  return (
    <div className="min-h-screen bg-futuristic-darker text-white overflow-x-hidden">
      {/* 3D Animated Background */}
      <Background3D />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Features Section */}
        <Features />
        
        {/* Cards Showcase */}
        <CardsShowcase />
        
        {/* Pricing Section */}
        <Pricing />
        
        {/* CTA Section */}
        <CTA />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Transaction Pulse Animation */}
      <TransactionPulse />
    </div>
  );
};

export default Index;
