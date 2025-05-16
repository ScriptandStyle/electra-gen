
import React from 'react';
import { Sun, Droplet, Factory, Zap, Leaf, Thermometer } from 'lucide-react';
import { Card } from '@/components/ui/card';

const BenefitCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) => {
  return (
    <Card className="hover-card border p-6 h-full transition-all duration-300 hover:border-shore-electric group">
      <div className="mb-4">
        <div className="p-3 rounded-full bg-shore-blue/10 group-hover:bg-shore-electric/10 transition-colors duration-300 inline-block">
          <Icon className="h-6 w-6 text-shore-blue group-hover:text-shore-electric transition-colors duration-300" />
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Leaf,
      title: "Environmentally Friendly",
      description: "Zero carbon emissions and minimal environmental impact compared to traditional energy sources."
    },
    {
      icon: Droplet,
      title: "Clean Water Byproduct",
      description: "Our process produces clean, desalinated water as a valuable byproduct for communities."
    },
    {
      icon: Zap,
      title: "Reliable Energy",
      description: "Consistent energy production regardless of weather conditions, unlike solar or wind power."
    },
    {
      icon: Sun,
      title: "Renewable Resource",
      description: "Utilizes the virtually unlimited resource of ocean water for sustainable energy production."
    },
    {
      icon: Factory,
      title: "Scalable Technology",
      description: "Our modular design allows for easy scaling to meet the energy needs of any community."
    },
    {
      icon: Thermometer,
      title: "Efficient Conversion",
      description: "Our sand heating technology maximizes energy transfer efficiency in the conversion process."
    }
  ];

  return (
    <section id="benefits" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-shore-blue mb-4">Benefits of Shore Energy</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our innovative sand-to-electricity technology offers numerous advantages over traditional and even other renewable energy sources.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-shore-blue/5 rounded-xl border border-shore-blue/20">
            <h3 className="text-2xl font-bold text-shore-blue mb-4">Sustainable Future</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Shore Energy is committed to creating a sustainable energy future by harnessing the power of natural resources in an environmentally responsible way.
            </p>
            <div className="mt-6">
              <button className="bg-shore-blue hover:bg-shore-electric text-white font-medium px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                Join Our Mission
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
