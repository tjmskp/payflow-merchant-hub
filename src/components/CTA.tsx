
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="glass-card rounded-3xl overflow-hidden">
          <div className="bg-gradient-to-br from-futuristic-purple/20 to-futuristic-blue/20 p-12 md:p-16 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 glow-text-purple">
                Ready to Transform Your Payment Experience?
              </h2>
              <p className="text-xl text-gray-300 mb-10">
                Join thousands of businesses across Bangladesh and around the world that trust PayFlow for their payment processing needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-futuristic-purple to-futuristic-blue hover:opacity-90 text-lg px-8 py-6"
                >
                  <span>Get Started for Free</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6"
                >
                  Contact Sales
                </Button>
              </div>
              <p className="mt-6 text-gray-400">
                No credit card required. Free setup and support.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-futuristic-darker to-transparent"></div>
    </section>
  );
};

export default CTA;
