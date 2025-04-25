
import PaymentCard from "./PaymentCard";

const CardsShowcase = () => {
  return (
    <section className="py-20 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 glow-text-purple">
            Accept All Major Payment Methods
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From credit cards to mobile payments, we've got you covered
          </p>
        </div>
        
        <div className="relative h-[400px]">
          {/* Animated floating cards */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <PaymentCard 
              type="visa" 
              className="animate-float"
            />
          </div>
          
          <div className="absolute left-[calc(50%-200px)] top-[calc(50%-50px)] transform -rotate-12">
            <PaymentCard 
              type="mastercard" 
              className="animate-float-slow"
            />
          </div>
          
          <div className="absolute left-[calc(50%+100px)] top-[calc(50%+30px)] transform rotate-6">
            <PaymentCard 
              type="bkash" 
              className="animate-float-fast"
            />
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center gap-8 flex-wrap max-w-2xl mx-auto">
            <div className="text-3xl font-bold text-white">VISA</div>
            <div className="text-3xl font-bold text-white">MASTERCARD</div>
            <div className="text-3xl font-bold text-pink-600">bKash</div>
            <div className="text-3xl font-bold text-white">AMEX</div>
            <div className="text-3xl font-bold text-white">PayPal</div>
            <div className="text-3xl font-bold text-white">Stripe</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsShowcase;
