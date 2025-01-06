"use client";

import React from "react";
import { PlayCircle, ArrowRight, Star } from "lucide-react";
import AppStoreButton from "../ui/AppStoreButton";

const DownloadSection = () => {
  const reviews = [
    {
      name: "Sarah K.",
      role: "Event Organizer",
      content:
        "NoReplay transformed how we manage music at our events. No more duplicate songs!",
      rating: 5,
    },
    {
      name: "David M.",
      role: "Professional DJ",
      content:
        "The real-time playlist synchronization makes collaborating with other DJs seamless.",
      rating: 5,
    },
    {
      name: "James R.",
      role: "Club Owner",
      content:
        "Essential tool for maintaining the perfect music flow throughout the night.",
      rating: 5,
    },
  ];

  const ReviewCard = ({ review }) => (
    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
      <div className="flex items-center space-x-1 mb-2">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} size={16} className="fill-primary text-primary" />
        ))}
      </div>
      <p className="text-gray-300 mb-4">{review.content}</p>
      <div>
        <div className="font-semibold">{review.name}</div>
        <div className="text-sm text-gray-400">{review.role}</div>
      </div>
    </div>
  );

  return (
    <section
      id="download"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Events?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of event organizers and DJs who are creating
              unforgettable musical experiences with NoReplay.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <AppStoreButton className="btn-primary" />

              <button className="btn bg-white text-black hover:bg-gray-100 flex items-center space-x-2">
                <PlayCircle className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </button>
            </div>

            <div className="flex justify-center items-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <ArrowRight size={16} className="text-primary" />
                <span>Free Download</span>
              </div>
              <div className="flex items-center space-x-2">
                <ArrowRight size={16} className="text-primary" />
                <span>Quick Setup</span>
              </div>
              <div className="flex items-center space-x-2">
                <ArrowRight size={16} className="text-primary" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-2">
                Trusted by Event Professionals
              </h3>
              <p className="text-gray-400">
                Here's what our users are saying about NoReplay
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <ReviewCard key={index} review={review} />
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center bg-primary/10 border border-primary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Start Creating Better Musical Experiences Today
            </h3>
            <p className="text-gray-300 mb-6">
              Join the NoReplay community and elevate your events to the next
              level.
            </p>
            <button className="btn btn-primary">Download NoReplay Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
