
import React from 'react';
import { Droplet, Waves, Thermometer, Factory, Wind, Zap, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ProcessCard = ({ 
  icon: Icon, 
  title, 
  description, 
  color,
  delay = 0
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  color: string;
  delay?: number;
}) => {
  return (
    <Card 
      className="hover-card border-t-4 p-6 h-full flex flex-col ripple-effect"
      style={{ 
        borderTopColor: color,
        animationDelay: `${delay}s`
      }}
    >
      <div className="mb-4 flex justify-center">
        <div 
          className="p-3 rounded-full" 
          style={{ 
            backgroundColor: `${color}20`,
            boxShadow: `0 0 20px ${color}40`
          }}
        >
          <Icon className="h-8 w-8 color-shift" style={{ color }} />
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2 text-center color-shift">{title}</h3>
      <p className="text-gray-600 text-center flex-grow">{description}</p>
    </Card>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      icon: Waves,
      title: "Seawater Collection",
      description: "Ocean water is collected and channeled into our specialized desalination facility.",
      color: "#0c4a6e",
      delay: 0
    },
    {
      icon: Droplet,
      title: "Desalination Process",
      description: "Seawater undergoes desalination to separate salt and impurities, producing purified water.",
      color: "#0d9488",
      delay: 0.1
    },
    {
      icon: Factory,
      title: "Sand-Filled Boiler",
      description: "Purified water enters a specially designed boiler containing heated sand.",
      color: "#f59e0b",
      delay: 0.2
    },
    {
      icon: Thermometer,
      title: "Steam Generation",
      description: "Water is rapidly converted to high-pressure steam through contact with the heated sand.",
      color: "#f59e0b",
      delay: 0.3
    },
    {
      icon: Wind,
      title: "Turbine Rotation",
      description: "The high-pressure steam rotates specialized turbines in our generation facility.",
      color: "#3b82f6",
      delay: 0.4
    },
    {
      icon: Zap,
      title: "Electricity Production",
      description: "Turbine rotation drives generators, producing clean, sustainable electricity.",
      color: "#3b82f6",
      delay: 0.5
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-shore-blue mb-4 relative inline-block">
            How It Works
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-shore-blue via-shore-teal to-shore-electric"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our innovative technology transforms seawater into electricity through a sustainable, efficient process.
          </p>
        </div>
        
        {/* Process Flow Diagram */}
        <div className="mb-16 overflow-hidden relative">
          <div className="hidden lg:block h-[2px] bg-gray-200 absolute top-1/2 left-[15%] right-[15%] transform -translate-y-1/2">
            <div className="h-full w-1/3 bg-gradient-to-r from-shore-blue via-shore-teal to-shore-teal absolute animate-flow-right"></div>
            <div className="h-full w-1/3 bg-gradient-to-r from-shore-teal via-shore-amber to-shore-amber absolute animate-flow-right" style={{ animationDelay: "1s" }}></div>
            <div className="h-full w-1/3 bg-gradient-to-r from-shore-amber via-shore-electric to-shore-electric absolute animate-flow-right" style={{ animationDelay: "2s" }}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center" style={{ 
                opacity: 0,
                animation: 'fade-in 0.7s ease-out forwards',
                animationDelay: `${index * 0.1 + 0.1}s`
              }}>
                <ProcessCard {...step} />
                {index < steps.length - 1 && (
                  <div className="hidden lg:block">
                    <ArrowRight className="process-arrow mt-4 h-8 w-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Interactive Process Visualization */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover-card">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-shore-blue mb-4 relative inline-block">
                Innovative Energy Conversion
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-shore-blue to-shore-electric transition-all duration-700 group-hover:w-full"></span>
              </h3>
              <p className="text-gray-600 mb-6">
                Our process integrates advanced desalination with thermal energy transfer to efficiently convert seawater into clean electricity.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 hover-card p-2 rounded-lg transition-all">
                  <div className="bg-shore-blue/10 rounded-full p-1 mt-1">
                    <Waves className="h-4 w-4 text-shore-blue animate-pulse" />
                  </div>
                  <span>Minimal environmental impact with zero carbon emissions</span>
                </li>
                <li className="flex items-start gap-3 hover-card p-2 rounded-lg transition-all">
                  <div className="bg-shore-teal/10 rounded-full p-1 mt-1">
                    <Droplet className="h-4 w-4 text-shore-teal animate-pulse" />
                  </div>
                  <span>Produces clean water as a valuable byproduct</span>
                </li>
                <li className="flex items-start gap-3 hover-card p-2 rounded-lg transition-all">
                  <div className="bg-shore-electric/10 rounded-full p-1 mt-1">
                    <Zap className="h-4 w-4 text-shore-electric animate-pulse" />
                  </div>
                  <span>Higher efficiency than traditional renewable energy sources</span>
                </li>
              </ul>
            </div>
            <div className="relative bg-gradient-to-br from-shore-blue/10 to-shore-teal/10 p-8 md:p-12 flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square bg-white rounded-lg shadow-md overflow-hidden">
                <div className="absolute bottom-0 w-full h-1/4 bg-gradient-to-r from-shore-blue/70 to-shore-blue/30">
                  <div className="absolute top-0 w-full h-1 bg-white/30 animate-wave"></div>
                  
                  {/* Water ripple effect */}
                  {[1, 2, 3].map((i) => (
                    <div 
                      key={i}
                      className="absolute top-0 left-1/2 w-4 h-4 rounded-full bg-white/40"
                      style={{
                        animation: `water-ripple 3s infinite linear`,
                        animationDelay: `${i * 0.8}s`
                      }}
                    />
                  ))}
                </div>
                
                <div className="absolute left-1/4 top-1/4 w-1/2 h-1/2 rounded-lg border-2 border-shore-amber flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-shore-amber/40 rounded-lg animate-pulse-glow"></div>
                  <Thermometer className="absolute h-6 w-6 text-red-500 animate-pulse" />
                  
                  {/* Heat pulse rings */}
                  {[1, 2, 3].map((i) => (
                    <div 
                      key={i}
                      className="absolute w-full h-full rounded-lg border border-red-400/30"
                      style={{
                        animation: `pulse-ring 2s infinite linear`,
                        animationDelay: `${i * 0.5}s`
                      }}
                    />
                  ))}
                </div>
                
                {/* Water flow animation to boiler with gradient */}
                <div className="absolute left-[10%] top-1/2 w-[15%] h-2 bg-gradient-to-r from-shore-blue/70 to-shore-teal/70 animate-flow-right"></div>
                
                {/* Steam flow animation from boiler to turbine */}
                <div className="absolute right-[10%] top-1/2 w-[15%] h-2 bg-gradient-to-r from-gray-300/60 to-white/40 animate-flow-right"></div>
                
                <Wind className="absolute right-[20%] top-1/2 h-12 w-12 text-shore-electric animate-rotate" />
                
                <Zap className="absolute right-[15%] top-[25%] h-6 w-6 text-shore-electric animate-pulse" />
                
                {/* Electric pulses */}
                {[1, 2].map((i) => (
                  <div 
                    key={i}
                    className="absolute right-[15%] top-[25%] w-6 h-6 rounded-full border border-shore-electric"
                    style={{
                      animation: `pulse-ring 1.5s infinite linear`,
                      animationDelay: `${i * 0.6}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
