
import { Check } from "lucide-react";

interface StepsProps {
  currentStep: number;
}

export const Steps = ({ currentStep }: StepsProps) => {
  const steps = [
    { number: 1, title: "Personal Info" },
    { number: 2, title: "Card Details" },
    { number: 3, title: "Review" },
  ];

  return (
    <nav aria-label="Progress">
      <ol role="list" className="flex items-center justify-center space-x-8">
        {steps.map((step) => (
          <li key={step.number} className="relative">
            <div className="flex items-center">
              <span
                className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium ring-2 ${
                  step.number < currentStep
                    ? "bg-primary text-primary-foreground ring-primary"
                    : step.number === currentStep
                    ? "border-2 border-primary text-primary ring-primary/20"
                    : "ring-muted text-muted-foreground"
                }`}
              >
                {step.number < currentStep ? (
                  <Check className="h-4 w-4" />
                ) : (
                  step.number
                )}
              </span>
              <span className="ml-3 text-sm font-medium text-muted-foreground">
                {step.title}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};
