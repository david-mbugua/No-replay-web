"use client";

import React from "react";
import { ArrowRight, PlayCircle } from "lucide-react";
import AppStoreButton from "../ui/AppStoreButton";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              No More Repeated Songs at Your
              <span className="text-primary"> Events</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300">
              Transform your events with NoReplay's intelligent playlist
              management. Prevent song repetition and create unforgettable
              musical experiences.
            </p>

            <div className="flex flex-wrap gap-4">
              <AppStoreButton className="btn-primary" />

              <button className="btn bg-white text-black hover:bg-gray-100 flex items-center space-x-2">
                <PlayCircle size={20} />
                <span>Google Play</span>
              </button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Free Download</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>No Credit Card Required</span>
              </div>
            </div>
          </div>

          {/* App Preview */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/images/app-preview.png"
                alt="NoReplay App Interface"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
