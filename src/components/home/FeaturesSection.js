"use client";

import React from "react";
import { Music2, Users2, Radio, Share2, Shield, Sparkles } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 rounded-2xl bg-gradient-to-b from-gray-900 to-black border border-gray-800 hover:border-primary/50 transition-all duration-300">
    <div className="space-y-4">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: Music2,
      title: "Intelligent Song Tracking",
      description:
        "Prevent song repetition at events with our smart playlist management system that ensures every track plays only once.",
    },
    {
      icon: Users2,
      title: "Multi-DJ Collaboration",
      description:
        "Enable seamless coordination between multiple DJs at your event with real-time playlist synchronization and updates.",
    },
    {
      icon: Radio,
      title: "Music Platform Integration",
      description:
        "Connect seamlessly with popular music services including Spotify, Apple Music, and YouTube Music for comprehensive music access.",
    },
    {
      icon: Shield,
      title: "Event Security",
      description:
        "Secure your event playlist with unique event codes and passwords, ensuring only authorized DJs can contribute to the music selection.",
    },
    {
      icon: Sparkles,
      title: "Genre-Specific Charts",
      description:
        "Access curated top charts for Afrohouse, EDM, and Amapiano, updated daily based on user preferences and likes.",
    },
    {
      icon: Share2,
      title: "Easy Event Creation",
      description:
        "Create and manage different types of events including concerts, DJ sets, and house parties with just a few taps.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the Power of Smart Music Management
          </h2>
          <p className="text-gray-400 text-lg">
            NoReplay combines innovative technology with practical features to
            transform how music is managed at events.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center p-1 rounded-full border border-gray-800 bg-gray-900/50">
            <span className="px-4 py-2 text-sm">
              Want to learn more about our features?
            </span>
            <button className="btn btn-primary">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
