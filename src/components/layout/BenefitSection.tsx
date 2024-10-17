import { FC } from "react";
import { Box, DollarSign, Headphones, CreditCard, Mail } from "lucide-react";
import { Typography } from "../ui/typography";

const BenefitSection: FC = () => {
  const benefits = [
    {
      icon: Box,
      title: "Free Shipping",
      description: "Free shipping for order above $150",
    },
    {
      icon: DollarSign,
      title: "Money Guarantee",
      description: "Within 30 days for an exchange",
    },
    {
      icon: Headphones,
      title: "Online Support",
      description: "24 hours a day, 7 days a week",
    },
    {
      icon: CreditCard,
      title: "Flexible Payment",
      description: "Pay with multiple credit cards",
    },
  ];

  return (
    <section className="py-12 bg-gray-100 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 md:gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={benefit.title}
            className="flex flex-col items-center text-center"
          >
            <benefit.icon className="w-12 h-12 mb-4 text-primary" />
            <Typography
              variant="h3"
              value={benefit.title}
              className="text-lg font-semibold mb-2"
            />
            <Typography
              variant="p"
              value={benefit.description}
              className="text-sm text-gray-600"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitSection;
