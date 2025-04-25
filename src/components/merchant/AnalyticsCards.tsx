
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, TrendingUp, Clock, AlertCircle } from "lucide-react";

const analyticsData = [
  {
    title: "Total Revenue",
    value: "$12,345",
    change: "+12.5%",
    icon: DollarSign,
    trend: "up",
  },
  {
    title: "Processing",
    value: "$2,345",
    change: "5 pending",
    icon: Clock,
    trend: "neutral",
  },
  {
    title: "Success Rate",
    value: "98.5%",
    change: "+0.8%",
    icon: TrendingUp,
    trend: "up",
  },
  {
    title: "Failed",
    value: "12",
    change: "-2.3%",
    icon: AlertCircle,
    trend: "down",
  },
];

const AnalyticsCards = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {analyticsData.map((item) => (
        <Card 
          key={item.title}
          className="bg-futuristic-dark/30 backdrop-blur-md border-gray-800 hover:border-gray-700 transition-colors"
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <item.icon className="w-8 h-8 text-gray-400" />
              <span className={cn(
                "text-sm px-2.5 py-0.5 rounded-full",
                item.trend === "up" && "bg-green-500/20 text-green-400",
                item.trend === "down" && "bg-red-500/20 text-red-400",
                item.trend === "neutral" && "bg-blue-500/20 text-blue-400"
              )}>
                {item.change}
              </span>
            </div>
            <div className="mt-4">
              <p className="text-gray-400 text-sm">{item.title}</p>
              <h3 className="text-2xl font-bold text-white mt-1">{item.value}</h3>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AnalyticsCards;
