
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PricingTier = ({ name, price, description, features, isPopular = false }: PricingTierProps) => {
  return (
    <div className={`glass-card rounded-xl p-8 ${isPopular ? 'glow-border-purple border-futuristic-purple' : 'border-gray-800'}`}>
      {isPopular && (
        <div className="bg-gradient-to-r from-futuristic-purple to-futuristic-blue text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
          MOST POPULAR
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">{price}</span>
        {price !== 'Custom' && <span className="text-gray-400 ml-1">/month</span>}
      </div>
      <p className="text-gray-400 mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        className={
          isPopular 
            ? "w-full bg-gradient-to-r from-futuristic-purple to-futuristic-blue hover:opacity-90" 
            : "w-full bg-gray-800 hover:bg-gray-700"
        }
      >
        Get Started
      </Button>
    </div>
  );
};

const Pricing = () => {
  const pricingTiers = [
    {
      name: "Starter",
      price: "৳1,999",
      description: "Perfect for small businesses just getting started",
      features: [
        "2.9% + ৳30 per transaction",
        "Standard payouts (2-3 business days)",
        "Basic reporting",
        "Up to ৳5,00,000 in monthly processing",
        "Email support"
      ]
    },
    {
      name: "Growth",
      price: "৳4,999",
      description: "For growing businesses with higher transaction volumes",
      features: [
        "2.5% + ৳25 per transaction",
        "Faster payouts (1-2 business days)",
        "Advanced analytics dashboard",
        "Up to ৳20,00,000 in monthly processing",
        "Priority email & chat support",
        "Multiple user accounts"
      ],
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large businesses with custom requirements",
      features: [
        "Custom pricing",
        "Same-day payouts",
        "Dedicated account manager",
        "Unlimited processing volume",
        "24/7 phone, email & chat support",
        "Custom integration support",
        "Fraud protection suite"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 glow-text-blue">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            No hidden fees or long-term contracts. Pay only for what you use.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <PricingTier
              key={index}
              name={tier.name}
              price={tier.price}
              description={tier.description}
              features={tier.features}
              isPopular={tier.isPopular}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
