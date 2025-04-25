
import { useState } from "react";
import { UserDetailsForm } from "@/components/checkout/UserDetailsForm";
import { CardDetailsForm } from "@/components/checkout/CardDetailsForm";
import { ReviewStep } from "@/components/checkout/ReviewStep";
import { CheckoutSuccess } from "@/components/checkout/CheckoutSuccess";
import { Steps } from "@/components/checkout/Steps";
import { Card, CardContent } from "@/components/ui/card";

export type CheckoutFormData = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  amount: number;
};

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<CheckoutFormData>>({
    amount: 499.99 // Example amount
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const updateFormData = (data: Partial<CheckoutFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    // Simulate payment processing
    setIsSuccess(true);
  };

  if (isSuccess) {
    return <CheckoutSuccess />;
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        <Steps currentStep={currentStep} />
        <Card className="mt-8">
          <CardContent className="pt-6">
            {currentStep === 1 && (
              <UserDetailsForm
                formData={formData}
                onUpdate={updateFormData}
                onNext={handleNextStep}
              />
            )}
            {currentStep === 2 && (
              <CardDetailsForm
                formData={formData}
                onUpdate={updateFormData}
                onNext={handleNextStep}
                onPrev={handlePrevStep}
              />
            )}
            {currentStep === 3 && (
              <ReviewStep
                formData={formData}
                onPrev={handlePrevStep}
                onSubmit={handleSubmit}
              />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Checkout;
