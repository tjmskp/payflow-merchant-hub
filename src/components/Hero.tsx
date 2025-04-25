
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glow-text-purple">
            Next-Gen Payment Solutions for Bangladesh & Beyond
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Seamless, secure, and lightning-fast payment gateway designed for modern businesses. Accept payments globally with lower fees.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-futuristic-purple to-futuristic-blue hover:opacity-90 text-lg px-8 py-6"
            >
              <span>Get Started</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              See Demo
            </Button>
          </div>
          
          <div className="mt-16">
            <p className="text-sm text-gray-400 mb-4">TRUSTED BY LEADING COMPANIES</p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
              <div className="text-white font-bold text-xl">Company 1</div>
              <div className="text-white font-bold text-xl">Company 2</div>
              <div className="text-white font-bold text-xl">Company 3</div>
              <div className="text-white font-bold text-xl">Company 4</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative circles */}
      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-futuristic-purple/20 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-futuristic-blue/20 blur-3xl"></div>
    </section>
  );
};

export default Hero;
