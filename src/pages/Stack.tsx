import React from 'react';
import { Target, Users, Heart } from 'lucide-react';
import HighlightOnScroll from '../components/HighlightOnScroll';

const Stack = () => {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <section className="text-left mb-16 pt-12">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-black mb-6 leading-tight tracking-tight">
              <HighlightOnScroll className="font-semibold">SevenX Global</HighlightOnScroll>
              <span className="block text-gray-600 mt-4">Stack</span>
            </h1>
          </div>

          <p className="text-2xl md:text-3xl text-gray-700 mb-12 max-w-5xl leading-relaxed">
            Our foundation built on <HighlightOnScroll>purpose</HighlightOnScroll>, strategy, and culture that drives intelligent solutions.
          </p>
        </section>

        {/* Main Stack Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Purpose Stack */}
            <div className="text-left">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-teal/10 rounded-2xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-teal" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-black">Purpose</h2>
                  <h2 className="text-3xl font-bold text-black">Stack</h2>
                </div>
              </div>
              
              <p className="text-sm font-medium text-teal uppercase tracking-wider mb-12">
                Why & What for We Exist
              </p>

              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-4">Vision</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    A world where every decision enriches human experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-4">Mission</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Empower businesses to transform data into decisive intelligence.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-4">Brand Promise</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Data to Decisions — Intelligently.
                  </p>
                </div>
              </div>
            </div>

            {/* Strategy Stack */}
            <div className="text-left">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-purple/10 rounded-2xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-black">Strategy</h2>
                  <h2 className="text-3xl font-bold text-black">Stack</h2>
                </div>
              </div>
              
              <p className="text-sm font-medium text-purple uppercase tracking-wider mb-12">
                How We Deliver Results
              </p>

              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-4">People</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Visionaries · Leaders · Executors
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-4">Process</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Repeatable. Reliable. Measurable
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-4">Technology</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Future-Ready · Innovative
                  </p>
                </div>
              </div>
            </div>

            {/* Culture Stack */}
            <div className="text-left">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-golden/10 rounded-2xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-golden" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-black">Culture</h2>
                  <h2 className="text-3xl font-bold text-black">Stack</h2>
                </div>
              </div>
              
              <p className="text-sm font-medium text-golden uppercase tracking-wider mb-12">
                Values That Drive Us
              </p>

              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-4">Mindset First</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Well-Being · Merit that wins
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-4">Integrity Always</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Transparent and Explainable
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-4">Impact Forever</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Being a change agent
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Stack;