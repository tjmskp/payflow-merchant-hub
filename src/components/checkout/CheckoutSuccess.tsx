
import { useEffect } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const CheckoutSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Optionally auto-redirect after success
      // navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="mx-auto w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center animate-scale-up">
          <Check className="h-12 w-12 text-primary animate-check" />
        </div>
        <h2 className="mt-6 text-3xl font-extrabold">Payment Successful!</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Thank you for your purchase. You will receive a confirmation email shortly.
        </p>
        <div className="mt-6">
          <Button onClick={() => navigate("/")} variant="outline">
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  );
};
