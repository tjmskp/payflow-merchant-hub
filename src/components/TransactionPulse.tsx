
import { useEffect, useState } from "react";

const TransactionPulse = () => {
  const [transactions, setTransactions] = useState<{ id: number; amount: string; type: string }[]>([]);

  useEffect(() => {
    // Simulate transactions appearing
    const interval = setInterval(() => {
      const newTransaction = {
        id: Date.now(),
        amount: `$${(Math.random() * 1000).toFixed(2)}`,
        type: Math.random() > 0.5 ? "Payment" : "Deposit"
      };
      
      setTransactions(prev => [...prev, newTransaction]);
      
      // Remove old transactions to prevent memory issues
      setTimeout(() => {
        setTransactions(prev => prev.filter(t => t.id !== newTransaction.id));
      }, 5000);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-10 right-10 z-10">
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className="animate-transaction-move bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-lg mb-2 text-white border border-gray-700"
        >
          <div className="flex items-center">
            <div className={`w-2 h-2 rounded-full mr-2 ${transaction.type === "Payment" ? "bg-green-500" : "bg-blue-500"}`}></div>
            <span className="text-sm">{transaction.type}: </span>
            <span className="text-sm font-bold ml-1">{transaction.amount}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionPulse;
