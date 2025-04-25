
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, ArrowUpRight, ArrowDownRight, Clock } from "lucide-react";
import MerchantSidebar from "@/components/merchant/MerchantSidebar";
import TransactionTable from "@/components/merchant/TransactionTable";
import AnalyticsCards from "@/components/merchant/AnalyticsCards";
import RevenueChart from "@/components/merchant/RevenueChart";

const MerchantDashboard = () => {
  return (
    <div className="flex min-h-screen bg-futuristic-darker">
      <MerchantSidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold text-white mb-8">Merchant Dashboard</h1>
          
          {/* Analytics Cards */}
          <AnalyticsCards />
          
          {/* Charts */}
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="bg-futuristic-dark/30 backdrop-blur-md border-gray-800">
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <RevenueChart />
              </CardContent>
            </Card>
            
            {/* Transaction History */}
            <Card className="bg-futuristic-dark/30 backdrop-blur-md border-gray-800">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <TransactionTable />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MerchantDashboard;
