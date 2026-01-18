import { Metadata } from "next";
import BeerCard from "@/components/sections/BeerCard";
import { getBeersByCategory } from "@/lib/beers";

export const metadata: Metadata = {
  title: "Beer Menu | Barley Naked Brewing Company",
  description: "Explore our full lineup of craft beers, from flagship favorites to seasonal specialties and gluten-free seltzers.",
};

export default function MenuPage() {
  const flagshipBeers = getBeersByCategory("flagship");
  const specialtyBeers = getBeersByCategory("specialty");
  const seasonalBeers = getBeersByCategory("seasonal");
  const seltzers = getBeersByCategory("seltzer");

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-warm-brown">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-heading text-gold mb-6">
            Our Beer Menu
          </h1>
          <p className="text-cream/80 text-lg leading-relaxed">
            From crisp lagers to bold IPAs, smooth stouts to refreshing seltzers,
            we&apos;ve got something for every taste. All our beers are crafted in-house
            with quality ingredients and a whole lot of love.
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <nav className="sticky top-20 z-40 bg-dark/95 backdrop-blur-sm border-b border-gold/20 py-4 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-4 justify-center">
          <a href="#flagship" className="text-cream hover:text-gold transition-colors text-sm uppercase tracking-wider">
            Flagship
          </a>
          <span className="text-gold/30">|</span>
          <a href="#specialty" className="text-cream hover:text-gold transition-colors text-sm uppercase tracking-wider">
            Specialty
          </a>
          <span className="text-gold/30">|</span>
          <a href="#seasonal" className="text-cream hover:text-gold transition-colors text-sm uppercase tracking-wider">
            Seasonal
          </a>
          <span className="text-gold/30">|</span>
          <a href="#seltzers" className="text-cream hover:text-gold transition-colors text-sm uppercase tracking-wider">
            Seltzers
          </a>
        </div>
      </nav>

      {/* Flagship Beers */}
      <section id="flagship" className="py-20 px-4 bg-dark scroll-mt-32">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-heading text-gold mb-4">
              Flagship Beers
            </h2>
            <p className="text-cream/70">
              Our year-round favorites that define the Barley Naked experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {flagshipBeers.map((beer) => (
              <BeerCard key={beer.id} beer={beer} />
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Beers */}
      <section id="specialty" className="py-20 px-4 bg-warm-brown scroll-mt-32">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-heading text-gold mb-4">
              Specialty Beers
            </h2>
            <p className="text-cream/70">
              Unique creations that push the boundaries of flavor.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialtyBeers.map((beer) => (
              <BeerCard key={beer.id} beer={beer} />
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Beers */}
      <section id="seasonal" className="py-20 px-4 bg-dark scroll-mt-32">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-heading text-gold mb-4">
              Seasonal Beers
            </h2>
            <p className="text-cream/70">
              Limited-time offerings that celebrate the seasons. Ask us what&apos;s currently on tap!
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seasonalBeers.map((beer) => (
              <BeerCard key={beer.id} beer={beer} />
            ))}
          </div>
        </div>
      </section>

      {/* Seltzers */}
      <section id="seltzers" className="py-20 px-4 bg-warm-brown scroll-mt-32">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-heading text-gold mb-4">
              Hard Seltzers
            </h2>
            <p className="text-cream/70">
              Light, refreshing, and gluten-free. Perfect for those who want something different.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-green-900/30 rounded text-green-400 text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              All seltzers are gluten-free
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seltzers.map((beer) => (
              <BeerCard key={beer.id} beer={beer} />
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-20 px-4 bg-dark border-t border-gold/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-heading text-gold mb-4">
            Menu Subject to Change
          </h2>
          <p className="text-cream/70">
            Our beer selection rotates regularly as we introduce new creations and
            bring back favorites. Check our social media or give us a call to see
            what&apos;s currently on tap. We&apos;re always brewing something new!
          </p>
        </div>
      </section>
    </div>
  );
}
