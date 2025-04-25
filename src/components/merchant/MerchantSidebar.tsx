
import { LayoutDashboard, CreditCard, PieChart, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/merchant" },
  { icon: CreditCard, label: "Transactions", href: "/merchant/transactions" },
  { icon: PieChart, label: "Analytics", href: "/merchant/analytics" },
  { icon: Settings, label: "Settings", href: "/merchant/settings" },
];

const MerchantSidebar = () => {
  return (
    <aside className="w-64 bg-futuristic-dark/50 backdrop-blur-md border-r border-gray-800">
      <div className="flex flex-col h-full">
        <div className="p-6">
          <h2 className="text-xl font-bold text-white">PayFlow</h2>
        </div>
        
        <nav className="flex-1 px-4 space-y-2">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 text-gray-300 rounded-lg",
                "hover:bg-white/5 hover:text-white transition-colors",
                "group"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
        
        <div className="p-4 border-t border-gray-800">
          <button className="flex items-center gap-3 px-4 py-3 text-gray-300 rounded-lg w-full hover:bg-white/5 hover:text-white transition-colors">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default MerchantSidebar;
