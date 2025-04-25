
import { 
  Shield, 
  Clock, 
  PieChart, 
  Globe, 
  CreditCard, 
  Smartphone 
} from "lucide-react";

const FeatureCard = ({ icon, title, description }: { 
  icon: React.ReactNode, 
  title: string, 
  description: string 
}) => {
  return (
    <div className="glass-card p-6 rounded-xl hover:glow-border-blue transition duration-300">
      <div className="bg-gradient-to-br from-futuristic-purple to-futuristic-blue w-12 h-12 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Shield className="text-white" />,
      title: "Bank-Level Security",
      description: "End-to-end encryption and PCI DSS compliance keep your transactions safe."
    },
    {
      icon: <Clock className="text-white" />,
      title: "Instant Settlements",
      description: "Get your funds within hours, not days. Real-time transaction processing."
    },
    {
      icon: <PieChart className="text-white" />,
      title: "Advanced Analytics",
      description: "Gain insights into your payment data with our powerful dashboard."
    },
    {
      icon: <Globe className="text-white" />,
      title: "Global & Local",
      description: "Accept international cards and local payment methods like bKash."
    },
    {
      icon: <CreditCard className="text-white" />,
      title: "Multiple Payment Options",
      description: "Support for credit cards, digital wallets, and bank transfers."
    },
    {
      icon: <Smartphone className="text-white" />,
      title: "Mobile-First Design",
      description: "Optimized checkout experience for all devices."
    }
  ];

  return (
    <section id="features" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 glow-text-blue">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to accept payments and grow your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
