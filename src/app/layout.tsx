import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SevenX Global - AI Services and AI Products',
  description: 'Next-generation AI company building intelligent systems that transform real-world data into decisive intelligence. Specializing in AI-Native Platforms, Edge Systems, and Enterprise Solutions.',
  keywords: 'AI-Native Platforms, Edge Systems, Enterprise AI Solutions, Data AI Engineering, artificial intelligence, intelligent automation, machine learning, edge computing, real-time analytics, predictive analytics, AI consulting, enterprise automation, data visualization, business intelligence, agentic AI systems, AI platform development, edge AI processing, computer vision, enterprise security, AI assurance, cyber security, mobile AI apps, intelligent systems, scalable AI solutions, SevenX Global, data to decisions, closed-loop intelligence, AI transformation, digital transformation, AI implementation, enterprise modernization, intelligent platforms',
  authors: [{ name: 'SevenX Global' }],
  publisher: 'SevenX Global',
  robots: 'index, follow',
  themeColor: '#000000',
  openGraph: {
    type: 'website',
    url: 'https://sevenx.global',
    title: 'SevenX Global - AI Services and AI Products',
    description: 'Next-generation AI company building intelligent systems that transform real-world data into decisive intelligence. Specializing in AI-Native Platforms, Edge Systems, and Enterprise Solutions.',
    images: [
      {
        url: 'https://sevenx.global/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SevenX Global'
      }
    ],
    siteName: 'SevenX Global',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@SevenX Global',
    creator: '@SevenX Global',
    title: 'SevenX Global',
    description: 'Next-generation AI company building intelligent systems that transform real-world data into decisive intelligence. AI-Native Platforms, Edge Systems, and Enterprise Solutions.',
    images: ['https://sevenx.global/og-image.jpg']
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png'
  },
  alternates: {
    canonical: 'https://sevenx.global'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9KRJJ4C50S"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9KRJJ4C50S');
            `,
          }}
        />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SevenX Global",
              "alternateName": "SevenX",
              "url": "https://sevenx.global",
              "logo": "https://sevenx.global/logo.png",
              "description": "Next-generation AI company building intelligent systems that transform real-world data into decisive intelligence through AI-Native Platforms, Edge Systems, Enterprise Solutions, and Data Engineering.",
              "foundingDate": "2025",
              "slogan": "Data to Decisions, Intelligently",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-0000-000-000",
                "contactType": "customer service",
                "email": "200@sevenx.global",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://twitter.com/sevenxglobal",
                "https://linkedin.com/company/sevenxglobal",
                "https://github.com/sevenxglobal"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Remote First",
                "addressCountry": "Global"
              },
              "services": [
                "AI-Native Platforms",
                "Edge Systems",
                "Enterprise Solutions",
                "Data & AI Engineering"
              ],
              "industry": "Artificial Intelligence",
              "knowsAbout": [
                "Artificial Intelligence",
                "Machine Learning",
                "Edge Computing",
                "Enterprise Automation",
                "Data Analytics",
                "Computer Vision",
                "Predictive Analytics",
                "Business Intelligence"
              ],
              "areaServed": {
                "@type": "Place",
                "name": "Worldwide"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        
        {/* Hidden form for Netlify Forms detection */}
        <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" data-netlify-emails="200@sevenx.global" style={{ display: 'none' }}>
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message"></textarea>
          <input name="bot-field" />
        </form>
      </body>
    </html>
  )
}