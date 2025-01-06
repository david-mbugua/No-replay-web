"use client";

import React from "react";
import { Calendar, Users, Music, CheckCircle } from "lucide-react";

const StepCard = ({ number, icon: Icon, title, description }) => (
  <div className="flex items-start space-x-4 relative">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <div className="flex-grow">
      <div className="absolute -left-4 top-0 text-4xl font-bold text-gray-800 -z-10">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Calendar,
      title: "Create Your Event",
      description:
        "Set up your event with a unique event code and password. Choose from concert, DJ event, or house party options.",
    },
    {
      icon: Users,
      title: "Connect with DJs",
      description:
        "Share your event code with DJs who can request access. Approve DJs to contribute to your event's playlist.",
    },
    {
      icon: Music,
      title: "Manage the Music",
      description:
        "DJs can add songs from integrated music platforms. Our system automatically prevents duplicate song entries.",
    },
    {
      icon: CheckCircle,
      title: "Enjoy the Experience",
      description:
        "Watch as your event unfolds with a perfectly coordinated playlist and no repeated songs.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Steps */}
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  How NoReplay Works
                </h2>
                <p className="text-gray-400 text-lg">
                  Transform your event's musical experience in four simple steps
                </p>
              </div>

              <div className="space-y-12">
                {steps.map((step, index) => (
                  <StepCard
                    key={index}
                    number={index + 1}
                    icon={step.icon}
                    title={step.title}
                    description={step.description}
                  />
                ))}
              </div>

              <div className="inline-block">
                <button className="btn btn-primary">Get Started Now</button>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                <img
                  src="/images/app-demo.png"
                  alt="NoReplay App Demo"
                  className="w-full h-auto"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md max-h-md">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full" />
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Events Created", value: "10K+" },
              { label: "Active DJs", value: "5K+" },
              { label: "Songs Managed", value: "1M+" },
              { label: "Happy Users", value: "50K+" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
