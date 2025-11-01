import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Products from '../components/Products';
import Approach from '../components/Approach';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Acantix Global | AI-Native Platforms & AI Solutions</title>
        <meta name="description" content="Next-generation AI company building intelligent systems that transform real-world data into decisive intelligence. AI-Native Platforms, Edge Systems, Enterprise Solutions & Data Engineering." />
        <meta name="keywords" content="AI-Native Platforms, Edge Systems, Enterprise AI Solutions, Data AI Engineering, artificial intelligence, intelligent automation, machine learning, edge computing, real-time analytics, predictive analytics, AI consulting, enterprise automation, data visualization, business intelligence, agentic AI systems" />
        <link rel="canonical" href="https://acantix.com/" />
        <meta property="og:title" content="Acantix Global | AI-Native Platforms & AI Solutions" />
        <meta property="og:description" content="Next-generation AI company building intelligent systems that transform real-world data into decisive intelligence." />
        <meta property="og:url" content="https://acantix.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Acantix Global | AI-Native Platforms & AI Solutions" />
        <meta name="twitter:description" content="Next-generation AI company building intelligent systems that transform real-world data into decisive intelligence." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Acantix Global - AI-Native Platforms & Solutions",
            "description": "Transform your business with AI-native platforms, edge systems, and enterprise solutions that deliver measurable results.",
            "url": "https://acantix.com/",
            "mainEntity": {
              "@type": "Organization",
              "name": "Acantix Global",
              "description": "AI-native company building intelligent systems for enterprise transformation"
            }
          })}
        </script>
      </Helmet>
      <Hero />
      <About />
      <Services />
      <Products />
      <Approach />
      <Contact />
    </>
  );
};

export default Home;