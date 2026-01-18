import { Metadata } from "next";
import TeamMember from "@/components/sections/TeamMember";
import { getTeamByCategory } from "@/lib/team";

export const metadata: Metadata = {
  title: "About Us | Barley Naked Brewing Company",
  description: "Meet the team behind Barley Naked Brewing Company. Learn about our story, our passion for craft beer, and the people who make it all happen.",
};

export default function AboutPage() {
  const leadership = getTeamByCategory("leadership");
  const operations = getTeamByCategory("operations");
  const brewing = getTeamByCategory("brewing");
  const vips = getTeamByCategory("vip");
  const crew = getTeamByCategory("crew");

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-warm-brown">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-heading text-gold mb-6">
            Our Story
          </h1>
          <p className="text-cream/80 text-lg leading-relaxed">
            Barley Naked Brewing Company was born from a simple idea: create a place
            where the community can come together over great craft beer. What started
            as a passion for brewing has grown into a beloved gathering spot in
            Stafford, Virginia, where every guest is treated like family.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading text-gold mb-6">
                More Than Just Beer
              </h2>
              <p className="text-cream/80 text-lg leading-relaxed mb-6">
                At Barley Naked, we&apos;re committed to crafting exceptional beers while
                fostering a welcoming environment for everyone. Our taproom is a place
                where conversations flow as freely as our brews, where live music fills
                the air, and where memories are made.
              </p>
              <p className="text-cream/80 text-lg leading-relaxed">
                We believe in supporting our local community, partnering with local food
                trucks, hosting live musicians, and creating a space where people from
                all walks of life can find common ground over a shared love of good beer
                and good company.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-warm-brown rounded-lg p-6 text-center">
                <span className="text-3xl mb-2 block">🍺</span>
                <p className="text-gold font-heading text-lg">Quality</p>
                <p className="text-cream/60 text-sm mt-1">In every batch</p>
              </div>
              <div className="bg-warm-brown rounded-lg p-6 text-center">
                <span className="text-3xl mb-2 block">🤝</span>
                <p className="text-gold font-heading text-lg">Community</p>
                <p className="text-cream/60 text-sm mt-1">First & foremost</p>
              </div>
              <div className="bg-warm-brown rounded-lg p-6 text-center">
                <span className="text-3xl mb-2 block">🎵</span>
                <p className="text-gold font-heading text-lg">Entertainment</p>
                <p className="text-cream/60 text-sm mt-1">Live music weekly</p>
              </div>
              <div className="bg-warm-brown rounded-lg p-6 text-center">
                <span className="text-3xl mb-2 block">❤️</span>
                <p className="text-gold font-heading text-lg">Passion</p>
                <p className="text-cream/60 text-sm mt-1">In everything we do</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 px-4 bg-warm-brown">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-heading text-gold mb-12 text-center">
            Leadership
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((member) => (
              <TeamMember key={member.id} member={member} size="large" />
            ))}
          </div>
        </div>
      </section>

      {/* Operations Section */}
      <section className="py-20 px-4 bg-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-heading text-gold mb-12 text-center">
            Operations
          </h2>
          <div className="max-w-md mx-auto">
            {operations.map((member) => (
              <TeamMember key={member.id} member={member} size="large" />
            ))}
          </div>
        </div>
      </section>

      {/* Brewing Team Section */}
      <section className="py-20 px-4 bg-warm-brown">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-heading text-gold mb-12 text-center">
            The Brewing Team
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {brewing.map((member) => (
              <TeamMember key={member.id} member={member} size="large" />
            ))}
          </div>
        </div>
      </section>

      {/* VIPs Section */}
      <section className="py-20 px-4 bg-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-heading text-gold mb-4 text-center">
            The VIPs
          </h2>
          <p className="text-cream/70 text-center mb-12 max-w-2xl mx-auto">
            No brewery is complete without its four-legged friends. Meet Barley and Hops,
            our official mascots and chief happiness officers.
          </p>
          <div className="max-w-md mx-auto">
            {vips.map((member) => (
              <TeamMember key={member.id} member={member} size="large" />
            ))}
          </div>
        </div>
      </section>

      {/* Brew Crew Section */}
      <section className="py-20 px-4 bg-warm-brown">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-heading text-gold mb-4 text-center">
            The Brew Crew
          </h2>
          <p className="text-cream/70 text-center mb-12 max-w-2xl mx-auto">
            Our incredible taproom staff makes every visit special. They&apos;re the friendly
            faces that greet you, help you find your new favorite beer, and ensure you
            have an amazing experience every time.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {crew.map((member) => (
              <TeamMember key={member.id} member={member} size="small" />
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-20 px-4 bg-dark border-t border-gold/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading text-gold mb-6">
            Behind the Scenes
          </h2>
          <p className="text-cream/80 text-lg leading-relaxed">
            Every great brewery has countless people working behind the scenes to make
            the magic happen. From our suppliers and partners to the local businesses
            we work with, we&apos;re grateful for everyone who contributes to our success.
            Thank you for being part of the Barley Naked family.
          </p>
        </div>
      </section>
    </div>
  );
}
