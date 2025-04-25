
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 3000 },
  { name: 'Mar', revenue: 5000 },
  { name: 'Apr', revenue: 2780 },
  { name: 'May', revenue: 1890 },
  { name: 'Jun', revenue: 2390 },
];

const RevenueChart = () => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis 
            dataKey="name" 
            stroke="#94a3b8"
            strokeWidth={0.5}
          />
          <YAxis 
            stroke="#94a3b8"
            strokeWidth={0.5}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(15, 23, 42, 0.9)",
              border: "1px solid rgba(148, 163, 184, 0.2)",
              borderRadius: "8px",
            }}
          />
          <Line 
            type="monotone" 
            dataKey="revenue" 
            stroke="#8B5CF6"
            strokeWidth={2}
            dot={{ fill: "#8B5CF6" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
