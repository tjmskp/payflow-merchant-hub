
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

const transactions = [
  {
    id: "TX123",
    amount: "$299.99",
    status: "completed",
    date: "2025-04-25",
    customer: "John Doe",
  },
  {
    id: "TX124",
    amount: "$199.50",
    status: "processing",
    date: "2025-04-25",
    customer: "Jane Smith",
  },
  {
    id: "TX125",
    amount: "$599.99",
    status: "failed",
    date: "2025-04-25",
    customer: "Bob Johnson",
  },
];

const TransactionTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((tx) => (
          <TableRow key={tx.id}>
            <TableCell className="font-medium">{tx.id}</TableCell>
            <TableCell>{tx.customer}</TableCell>
            <TableCell>{tx.amount}</TableCell>
            <TableCell>
              <span className={cn(
                "px-2.5 py-0.5 rounded-full text-xs font-medium",
                tx.status === "completed" && "bg-green-500/20 text-green-400",
                tx.status === "processing" && "bg-blue-500/20 text-blue-400",
                tx.status === "failed" && "bg-red-500/20 text-red-400"
              )}>
                {tx.status}
              </span>
            </TableCell>
            <TableCell>{tx.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TransactionTable;
