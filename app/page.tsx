"use client";

import { motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import BeerCard from "@/components/sections/BeerCard";
import HoursDisplay from "@/components/sections/HoursDisplay";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/animations/FadeIn";
import CountUp from "@/components/animations/CountUp";
import { getFeaturedBeers } from "@/lib/beers";

export default function HomePage() {
  const featuredBeers = getFeaturedBeers();

  return (
    <div>
      <Hero />

      {/* Welcome Section */}
      <section className="py-24 px-4 bg-dark relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-gold mb-6 decorative-line">
              Welcome to Barley Naked
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-cream/80 text-lg md:text-xl leading-relaxed mb-10">
              At Barley Naked Brewing Company, we believe great beer should be enjoyed
              in great company. Located in the heart of Stafford, Virginia, our taproom
              is more than just a place to grab a drink—it&apos;s a community gathering spot
              where friends become family and every visit feels like coming home.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/about">Our Story</Button>
              <Button href="/contact" variant="outline">
                Plan Your Visit
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* Beer Philosophy Section */}
      <section className="py-24 px-4 bg-warm-brown relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn direction="right">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-gold mb-8">
                  Our Beer Standard
                </h2>
              </FadeIn>
              <FadeIn direction="right" delay={0.2}>
                <p className="text-cream/80 text-lg leading-relaxed mb-6">
                  Every batch we brew is crafted with care, quality ingredients, and a
                  passion for the art of brewing. From our flagship ales to our seasonal
                  specialties, we maintain the highest standards because we believe you
                  deserve nothing less.
                </p>
              </FadeIn>
              <FadeIn direction="right" delay={0.3}>
                <p className="text-cream/80 text-lg leading-relaxed mb-10">
                  Whether you prefer a crisp pilsner, a hoppy IPA, or something dark and
                  roasty, we&apos;ve got something for every palate. And if beer isn&apos;t your thing,
                  our gluten-free seltzers offer a refreshing alternative.
                </p>
              </FadeIn>
              <FadeIn direction="right" delay={0.4}>
                <Button href="/menu">Explore Our Menu</Button>
              </FadeIn>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: 12, suffix: "+", label: "Beers on Tap" },
                { value: 100, suffix: "%", label: "Craft Brewed" },
                { text: "Local", label: "Community Focus" },
                { text: "Award", label: "Winning Beers" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-dark/50 rounded-xl p-6 text-center border border-gold/10 hover:border-gold/30 transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  {stat.value ? (
                    <CountUp
                      value={stat.value}
                      suffix={stat.suffix}
                      className="text-4xl md:text-5xl font-heading text-gold"
                    />
                  ) : (
                    <span className="text-4xl md:text-5xl font-heading text-gold">
                      {stat.text}
                    </span>
                  )}
                  <p className="text-cream/70 mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* Featured Beers Section */}
      <section className="py-24 px-4 bg-dark relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-gold mb-4 decorative-line">
                Featured Beers
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-cream/70 max-w-2xl mx-auto mt-8">
                A taste of what&apos;s waiting for you at our taproom. Come in to explore
                our full lineup.
              </p>
            </FadeIn>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBeers.map((beer, index) => (
              <BeerCard key={beer.id} beer={beer} index={index} />
            ))}
          </div>
          <FadeIn delay={0.5} className="text-center mt-12">
            <Button href="/menu" size="lg">
              View Full Menu
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* Quick Info Section */}
      <section className="py-24 px-4 bg-warm-brown relative">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading text-gold decorative-line">
              Plan Your Visit
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Hours */}
            <FadeIn delay={0.1}>
              <Card className="h-full">
                <h3 className="text-gold font-heading text-xl mb-4 flex items-center gap-3">
                  <motion.div
                    className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </motion.div>
                  Hours
                </h3>
                <HoursDisplay variant="compact" />
              </Card>
            </FadeIn>

            {/* Location */}
            <FadeIn delay={0.2}>
              <Card className="h-full">
                <h3 className="text-gold font-heading text-xl mb-4 flex items-center gap-3">
                  <motion.div
                    className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring" }}
                  >
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </motion.div>
                  Location
                </h3>
                <address className="not-italic text-cream/70 space-y-1">
                  <p>15 Tech Parkway</p>
                  <p>Stafford, Virginia 22556</p>
                </address>
                <motion.a
                  href="https://maps.google.com/?q=15+Tech+Parkway+Stafford+Virginia+22556"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-gold hover:text-amber transition-colors text-sm group"
                  whileHover={{ x: 5 }}
                >
                  Get Directions
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </Card>
            </FadeIn>

            {/* Contact */}
            <FadeIn delay={0.3}>
              <Card className="h-full">
                <h3 className="text-gold font-heading text-xl mb-4 flex items-center gap-3">
                  <motion.div
                    className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring" }}
                  >
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </motion.div>
                  Contact
                </h3>
                <p className="text-cream/70 mb-4">
                  Questions? We&apos;d love to hear from you.
                </p>
                <motion.a
                  href="tel:+15406234475"
                  className="block text-gold hover:text-amber transition-colors font-semibold text-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  (540) 623-4475
                </motion.a>
                <div className="mt-4">
                  <Button href="/contact" variant="outline" size="sm">
                    Contact Us
                  </Button>
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* CTA Section */}
      <section className="py-24 px-4 bg-dark relative overflow-hidden">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
        </motion.div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-gold mb-6">
              Ready for a Great Time?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-cream/80 text-lg md:text-xl mb-10">
              Join us for craft beer, live music, delicious food trucks, and a
              welcoming atmosphere. See you soon!
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/events" size="lg">
                See What&apos;s Happening
              </Button>
              <Button
                href="https://squareup.com/gift/FD326XJR95JSH/order"
                variant="outline"
                size="lg"
                external
              >
                Buy Gift Cards
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
