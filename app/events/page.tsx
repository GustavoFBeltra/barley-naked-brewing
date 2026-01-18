import { Metadata } from "next";
import EventItem from "@/components/sections/EventItem";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { getEventsByDay } from "@/lib/events";

export const metadata: Metadata = {
  title: "Food & Music | Barley Naked Brewing Company",
  description: "Check out our weekly schedule of food trucks and live music. Great beer, great food, and great entertainment!",
};

const days = ["Thursday", "Friday", "Saturday", "Sunday"];

export default function EventsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-warm-brown">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-heading text-gold mb-6">
            Food & Music
          </h1>
          <p className="text-cream/80 text-lg leading-relaxed">
            We partner with local food trucks and musicians to bring you the complete
            taproom experience. Check out our weekly schedule below—there&apos;s always
            something happening at Barley Naked!
          </p>
        </div>
      </section>

      {/* Schedule Notice */}
      <section className="py-8 px-4 bg-dark border-b border-gold/20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gold/10 border border-gold/30 rounded-lg p-4 flex items-start gap-4">
            <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-gold font-semibold">Schedule Changes Weekly</p>
              <p className="text-cream/70 text-sm mt-1">
                Our food truck and live music lineup changes each week. Follow us on social
                media or give us a call for the most up-to-date schedule!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-20 px-4 bg-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-heading text-gold mb-12 text-center">
            Weekly Schedule
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {days.map((day) => {
              const dayEvents = getEventsByDay(day);
              return (
                <Card key={day} className="p-6">
                  <h3 className="text-gold font-heading text-2xl mb-6 pb-4 border-b border-gold/20">
                    {day}
                  </h3>
                  <div className="space-y-4">
                    {dayEvents.length > 0 ? (
                      dayEvents.map((event) => (
                        <EventItem key={event.id} event={event} />
                      ))
                    ) : (
                      <p className="text-cream/50 text-center py-4">
                        Check back for updates!
                      </p>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closed Days Notice */}
      <section className="py-12 px-4 bg-warm-brown">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-cream/70">
            <span className="text-gold font-semibold">Note:</span> We are closed
            Monday through Wednesday. See you Thursday!
          </p>
        </div>
      </section>

      {/* Food Trucks Info */}
      <section className="py-20 px-4 bg-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-heading text-gold mb-6">
                Food Trucks
              </h2>
              <p className="text-cream/80 mb-6">
                We partner with a rotating selection of local food trucks to bring
                delicious food right to our doorstep. From BBQ to tacos, pizza to
                comfort food, there&apos;s always something tasty to pair with your beer.
              </p>
              <p className="text-cream/80">
                Food trucks typically set up during our busiest hours, making it easy
                to grab a bite without leaving the taproom. Check our social media
                each week to see who&apos;s joining us!
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-heading text-gold mb-6">
                Live Music
              </h2>
              <p className="text-cream/80 mb-6">
                Live music is a big part of the Barley Naked experience. We host
                local musicians every Friday and Saturday evening, creating the
                perfect atmosphere for a night out with friends.
              </p>
              <p className="text-cream/80">
                From acoustic sets to full bands, our lineup features a variety
                of genres to keep things interesting. Come early to grab a good
                seat and enjoy the show!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Private Events */}
      <section className="py-20 px-4 bg-warm-brown">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading text-gold mb-6">
            Host Your Event With Us
          </h2>
          <p className="text-cream/80 text-lg mb-8">
            Looking for a unique venue for your next celebration? Our taproom is
            available for private events, parties, and corporate gatherings. Contact
            us to learn more about our event space and packages.
          </p>
          <Button href="/contact" size="lg">
            Inquire About Events
          </Button>
        </div>
      </section>

      {/* Social Media CTA */}
      <section className="py-20 px-4 bg-dark border-t border-gold/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-heading text-gold mb-4">
            Stay In The Loop
          </h2>
          <p className="text-cream/70 mb-8">
            Follow us on social media for the latest updates on food trucks,
            live music, new beer releases, and more!
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.facebook.com/barleynakedbrewing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cream hover:text-gold transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
            <a
              href="https://www.instagram.com/barleynakedbrewing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cream hover:text-gold transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
