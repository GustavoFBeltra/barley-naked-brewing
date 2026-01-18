import { Metadata } from "next";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import HoursDisplay from "@/components/sections/HoursDisplay";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Barley Naked Brewing Company",
  description: "Visit us at our taproom in Stafford, Virginia. Find our hours, location, and contact information.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-warm-brown">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-heading text-gold mb-6">
            Visit Us
          </h1>
          <p className="text-cream/80 text-lg leading-relaxed">
            We&apos;d love to see you at the taproom! Stop by for a beer, stay for the
            atmosphere, and leave as part of the Barley Naked family.
          </p>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-20 px-4 bg-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Hours Card */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-gold font-heading text-xl">Hours</h2>
              </div>
              <HoursDisplay />
            </Card>

            {/* Location Card */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-gold font-heading text-xl">Location</h2>
              </div>
              <address className="not-italic text-cream/70 space-y-2 mb-6">
                <p className="text-cream font-semibold">Barley Naked Brewing Company</p>
                <p>15 Tech Parkway</p>
                <p>Stafford, Virginia 22556</p>
              </address>
              <a
                href="https://maps.google.com/?q=15+Tech+Parkway+Stafford+Virginia+22556"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold hover:text-amber transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Get Directions
              </a>
            </Card>

            {/* Contact Card */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h2 className="text-gold font-heading text-xl">Phone</h2>
              </div>
              <p className="text-cream/70 mb-4">
                Give us a call for reservations, questions, or just to say hi!
              </p>
              <a
                href="tel:+15406234475"
                className="text-2xl text-gold hover:text-amber transition-colors font-heading"
              >
                (540) 623-4475
              </a>
            </Card>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden border border-gold/20 h-80 bg-dark-brown">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.8892847!2d-77.4608!3d38.4672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6e2b7e0c0c0c1%3A0x0!2s15%20Tech%20Pkwy%2C%20Stafford%2C%20VA%2022556!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Barley Naked Brewing Company Location"
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-warm-brown">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading text-gold mb-4">
              Send Us a Message
            </h2>
            <p className="text-cream/70">
              Have a question or want to plan an event? Fill out the form below
              and we&apos;ll get back to you as soon as possible.
            </p>
          </div>
          <Card className="p-8">
            <ContactForm />
          </Card>
        </div>
      </section>

      {/* Gift Cards & Shop */}
      <section className="py-20 px-4 bg-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Gift Cards */}
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-gold font-heading text-2xl mb-4">Gift Cards</h3>
              <p className="text-cream/70 mb-6">
                Give the gift of great beer! Our gift cards are perfect for
                birthdays, holidays, or just because.
              </p>
              <Button
                href="https://squareup.com/gift/FD326XJR95JSH/order"
                external
                size="lg"
              >
                Buy Gift Cards
              </Button>
            </Card>

            {/* Online Store */}
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-gold font-heading text-2xl mb-4">Online Store</h3>
              <p className="text-cream/70 mb-6">
                Show your Barley Naked pride! Browse our selection of apparel,
                glassware, and merchandise.
              </p>
              <Button
                href="https://www.vatshirt.com/barley_naked_brewing_company/shop/home"
                external
                size="lg"
              >
                Shop Now
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Private Events */}
      <section className="py-20 px-4 bg-warm-brown border-t border-gold/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading text-gold mb-6">
            Private Events
          </h2>
          <p className="text-cream/80 text-lg mb-4">
            Looking to host a private event at our taproom? We offer space for
            birthday parties, corporate events, rehearsal dinners, and more.
          </p>
          <p className="text-cream/70">
            Contact us using the form above or give us a call to discuss your
            event needs. We&apos;d love to help make your celebration special!
          </p>
        </div>
      </section>
    </div>
  );
}
