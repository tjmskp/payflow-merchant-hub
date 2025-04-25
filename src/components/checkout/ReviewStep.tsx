
import { Button } from "@/components/ui/button";
import type { CheckoutFormData } from "@/pages/Checkout";

interface ReviewStepProps {
  formData: Partial<CheckoutFormData>;
  onPrev: () => void;
  onSubmit: () => void;
}

export const ReviewStep = ({ formData, onPrev, onSubmit }: ReviewStepProps) => {
  const maskCardNumber = (number: string = "") => {
    return `**** **** **** ${number.slice(-4)}`;
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Order Summary</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <p className="text-muted-foreground">Name</p>
            <p>{formData.firstName} {formData.lastName}</p>
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground">Email</p>
            <p>{formData.email}</p>
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground">Address</p>
            <p>{formData.address}</p>
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground">Card Number</p>
            <p>{maskCardNumber(formData.cardNumber)}</p>
          </div>
        </div>
        <div className="border-t pt-4 mt-6">
          <div className="flex justify-between">
            <span className="text-lg font-medium">Total Amount</span>
            <span className="text-lg font-medium">
              ${formData.amount?.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={onPrev}>
          Back
        </Button>
        <Button onClick={onSubmit}>Confirm Payment</Button>
      </div>
    </div>
  );
};
