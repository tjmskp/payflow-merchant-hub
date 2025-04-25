
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface PaymentCardProps extends HTMLAttributes<HTMLDivElement> {
  type: "visa" | "mastercard" | "bkash";
  isFloating?: boolean;
}

const PaymentCard = ({ type, isFloating = true, className, ...props }: PaymentCardProps) => {
  const cardClasses = {
    visa: "bg-gradient-to-br from-blue-600 to-blue-900",
    mastercard: "bg-gradient-to-br from-red-500 to-orange-500",
    bkash: "bg-gradient-to-br from-pink-600 to-pink-800",
  };

  const iconText = {
    visa: "VISA",
    mastercard: "MasterCard",
    bkash: "bKash",
  };

  return (
    <div
      className={cn(
        "relative w-64 h-40 rounded-xl px-6 py-4 shadow-lg text-white glow-border-purple",
        cardClasses[type],
        isFloating && "animate-float",
        className
      )}
      {...props}
    >
      <div className="absolute top-3 right-4 opacity-70">
        <div className="font-bold text-lg">{iconText[type]}</div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="font-mono tracking-wider mb-4">
          **** **** **** 4242
        </div>
        <div className="flex justify-between items-center mt-auto">
          <div className="text-sm opacity-80">
            <div>Card Holder</div>
            <div className="font-bold">JOHN DOE</div>
          </div>
          <div className="text-sm opacity-80">
            <div>Expires</div>
            <div>12/25</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
