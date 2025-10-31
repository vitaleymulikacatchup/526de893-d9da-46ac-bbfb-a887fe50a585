"use client"
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, BookOpen, Building2, Clock, CreditCard, Globe, HelpCircle, Linkedin, MapPin, MessageSquare, Plane, Star, Ticket, TrendingUp, Users } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            {name: "Destinations", id: "product"},
            {name: "Fleet", id: "feature"},
            {name: "Experience", id: "about"},
            {name: "Support", id: "faq"},
            {name: "Contact", id: "contact"}
          ]}
          logoSrc="https://images.pexels.com/photos/30000612/pexels-photo-30000612.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          logoAlt="IndiGo Airlines"
          brandName="IndiGo"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Fly fly"
          description="Experience India's favorite airline with on-time performance, affordable fares, and exceptional service across 100+ destinations."
          tag="India's Leading Airline"
          tagIcon={Plane}
          buttons={[
            {text: "Book Now", href: "https://www.goindigo.in"},
            {text: "View Routes", href: "product"}
          ]}
          imageSrc="https://images.pexels.com/photos/804804/pexels-photo-804804.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="IndiGo aircraft flying through blue skies"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="The IndiGo Experience"
          description="Discover why millions of passengers choose IndiGo for their travel needs across India and beyond."
          tag="Why Choose Us"
          tagIcon={Award}
          bulletPoints={[
            {title: "On-Time Performance", description: "Industry-leading punctuality with 85%+ on-time performance", icon: Clock},
            {title: "Extensive Network", description: "Connect to 100+ destinations across India and international routes", icon: Globe},
            {title: "Modern Fleet", description: "Young fleet of Airbus A320 family aircraft with latest technology", icon: Plane},
            {title: "Affordable Fares", description: "Low-cost carrier with transparent pricing and no hidden charges", icon: CreditCard}
          ]}
          imageSrc="https://images.pexels.com/photos/7662848/pexels-photo-7662848.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern IndiGo aircraft cabin interior"
          imagePosition="right"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Modern Fleet & Services"
          description="Experience comfort and reliability with our state-of-the-art aircraft and premium services."
          tag="Fleet"
          tagIcon={Plane}
          features={[
            {title: "Airbus A320 Family", description: "Modern, fuel-efficient aircraft with advanced safety systems and comfortable seating", imageSrc: "https://images.pexels.com/photos/20848208/pexels-photo-20848208.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", imageAlt: "IndiGo Airbus A320 aircraft"},
            {title: "Premium Cabin Experience", description: "Spacious interiors with comfortable seating and excellent in-flight service", imageSrc: "https://images.pexels.com/photos/7662848/pexels-photo-7662848.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", imageAlt: "IndiGo aircraft cabin interior"}
          ]}
          layout="default"
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Popular Destinations"
          description="Explore India's top destinations with IndiGo's extensive network and affordable fares."
          tag="Routes"
          tagIcon={MapPin}
          products={[
            {id: "mumbai", name: "Mumbai", price: "From ₹3,999", imageSrc: "https://images.pexels.com/photos/1462641/pexels-photo-1462641.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", imageAlt: "Mumbai city skyline", onProductClick: () => window.open('https://www.goindigo.in', '_blank')},
            {id: "delhi", name: "New Delhi", price: "From ₹4,499", imageSrc: "https://images.pexels.com/photos/698675/pexels-photo-698675.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", imageAlt: "Delhi Red Fort landmark", onProductClick: () => window.open('https://www.goindigo.in', '_blank')},
            {id: "bangalore", name: "Bangalore", price: "From ₹3,599", imageSrc: "https://images.pexels.com/photos/29773997/pexels-photo-29773997.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", imageAlt: "Bangalore technology city", onProductClick: () => window.open('https://www.goindigo.in', '_blank')},
            {id: "goa", name: "Goa", price: "From ₹5,299", imageSrc: "https://images.pexels.com/photos/4428280/pexels-photo-4428280.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", imageAlt: "Goa beach coastline", onProductClick: () => window.open('https://www.goindigo.in', '_blank')}
          ]}
          layout="default"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Travel Options"
          description="Choose the perfect travel experience that suits your needs and budget."
          tag="Pricing"
          tagIcon={Ticket}
          plans={[
            {id: "saver", price: "From ₹2,999", name: "Saver", buttons: [{text: "Book Now", href: "https://www.goindigo.in"}, {text: "Learn More", href: "contact"}], features: ["No baggage", "Seat selection fee", "No meals", "No changes/cancellation"]},
            {id: "value", badge: "Most Popular", badgeIcon: Star, price: "From ₹4,999", name: "Value", buttons: [{text: "Book Now", href: "https://www.goindigo.in"}, {text: "Learn More", href: "contact"}], features: ["15kg checked baggage", "Free seat selection", "Complimentary snacks", "One free change"]},
            {id: "premium", price: "From ₹7,999", name: "Premium", buttons: [{text: "Book Now", href: "https://www.goindigo.in"}, {text: "Learn More", href: "contact"}], features: ["25kg checked baggage", "Priority boarding", "Premium meals", "Multiple changes", "Extra legroom seats"]}
          ]}
          layout="default"
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardTwo
          title="IndiGo by Numbers"
          description="Leading India's aviation industry with exceptional performance and customer satisfaction."
          tag="Achievements"
          tagIcon={TrendingUp}
          metrics={[
            {id: "passengers", value: "100M+", description: "Annual Passengers"},
            {id: "destinations", value: "100+", description: "Destinations Served"},
            {id: "ontime", value: "85%+", description: "On-Time Performance"},
            {id: "fleet", value: "300+", description: "Aircraft Fleet Size"}
          ]}
          layout="default"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Leadership Team"
          description="Meet the experienced professionals leading IndiGo's mission to connect India and beyond."
          tag="Leadership"
          tagIcon={Users}
          members={[
            {id: "ceo", name: "Pieter Elbers", role: "Chief Executive Officer", description: "Former CEO of KLM Royal Dutch Airlines with over 30 years of aviation experience leading IndiGo's growth strategy.", imageSrc: "https://images.pexels.com/photos/7581004/pexels-photo-7581004.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", imageAlt: "Pieter Elbers CEO", socialLinks: [{icon: Linkedin, url: "https://linkedin.com/in/pieterelbers"}]},
            {id: "cfo", name: "Gaurav Negi", role: "Chief Financial Officer", description: "Financial expert with extensive experience in airline operations and strategic planning for sustainable growth.", imageSrc: "https://images.pexels.com/photos/7580821/pexels-photo-7580821.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", imageAlt: "Gaurav Negi CFO", socialLinks: [{icon: Linkedin, url: "https://linkedin.com/in/gauravnegi"}]}
          ]}
          layout="default"
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardThree
          title="What Our Passengers Say"
          description="Real experiences from millions of satisfied IndiGo passengers across India and international routes."
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {id: "passenger1", name: "Priya Sharma", handle: "@priya_travels", testimonial: "Excellent on-time performance and courteous staff. IndiGo has never disappointed me in my 50+ flights with them.", imageSrc: "https://images.pexels.com/photos/7580821/pexels-photo-7580821.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", imageAlt: "Priya Sharma passenger"},
            {id: "passenger2", name: "Rajesh Kumar", handle: "@rajesh_biz", testimonial: "Best value for money airline in India. Clean aircraft, punctual flights, and professional service every time.", imageSrc: "https://images.pexels.com/photos/7581004/pexels-photo-7581004.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", imageAlt: "Rajesh Kumar passenger"},
            {id: "passenger3", name: "Anita Patel", handle: "@anita_wanderer", testimonial: "Love the hassle-free booking and check-in process. IndiGo makes domestic travel so convenient and affordable.", imageSrc: "https://images.pexels.com/photos/31790426/pexels-photo-31790426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", imageAlt: "Anita Patel passenger"},
            {id: "passenger4", name: "Suresh Gupta", handle: "@suresh_family", testimonial: "Perfect for family travels. Kids love the smooth flights and we appreciate the transparent pricing with no hidden fees.", imageSrc: "https://images.pexels.com/photos/54380/pexels-photo-54380.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", imageAlt: "Suresh Gupta family"},
            {id: "passenger5", name: "Kavya Menon", handle: "@kavya_corporate", testimonial: "As a frequent business traveler, IndiGo's punctuality and efficiency help me stay productive. Highly recommend!", imageSrc: "https://images.pexels.com/photos/12122505/pexels-photo-12122505.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", imageAlt: "Kavya Menon business traveler"}
          ]}
          layout="default"
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Leading Companies"
          description="Join thousands of corporate clients who trust IndiGo for their business travel needs."
          tag="Corporate Partners"
          tagIcon={Building2}
          logos={[
            "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9497771/pexels-photo-9497771.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={40}
          showCard={true}
          layout="default"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about IndiGo flights, bookings, and services."
          tag="Help"
          tagIcon={HelpCircle}
          faqs={[
            {id: "baggage", title: "What is the baggage allowance on IndiGo flights?", content: "Hand baggage: 7kg (55cm x 35cm x 25cm). Checked baggage varies by fare type: Saver (no baggage), Value (15kg), Premium (25kg). Additional baggage can be purchased online or at the airport."},
            {id: "checkin", title: "When can I check-in for my IndiGo flight?", content: "Online check-in opens 48 hours before departure and closes 1 hour before domestic flights or 2 hours before international flights. You can also check-in at the airport counter."},
            {id: "changes", title: "Can I change my IndiGo flight booking?", content: "Yes, flight changes are allowed based on your fare type. Saver fares don't allow changes, Value fares allow one free change, and Premium fares allow multiple changes. Change fees may apply."},
            {id: "refund", title: "What is IndiGo's refund policy?", content: "Refunds depend on your fare type and timing. Saver fares are non-refundable, Value and Premium fares offer partial refunds. Cancellations made within 24 hours of booking are eligible for full refund."},
            {id: "food", title: "Do you serve food on IndiGo flights?", content: "IndiGo offers buy-on-board meals and beverages. Value and Premium fare passengers receive complimentary snacks. Pre-book meals online for better variety and pricing."},
            {id: "seats", title: "Can I select my preferred seat?", content: "Yes, seat selection is available during booking or manage booking. Standard seats are free for Value and Premium fares, while extra legroom and preferred seats are available for an additional fee."}
          ]}
          animationType="smooth"
          layout="default"
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Travel Insights"
          description="Stay updated with the latest travel tips, destination guides, and IndiGo news."
          tag="Blog"
          tagIcon={BookOpen}
          blogs={[
            {id: "travel-tips", category: "Travel Tips", title: "Essential Travel Tips for First-Time Flyers", excerpt: "Everything you need to know for a smooth and comfortable flying experience with IndiGo.", imageSrc: "https://images.pexels.com/photos/7662848/pexels-photo-7662848.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", imageAlt: "Aircraft cabin interior", authorName: "Travel Team", authorAvatar: "https://images.pexels.com/photos/7581004/pexels-photo-7581004.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", date: "15 Jan 2025"},
            {id: "destinations", category: "Destinations", title: "Top 10 Must-Visit Cities in India", excerpt: "Discover incredible destinations across India accessible through IndiGo's extensive network.", imageSrc: "https://images.pexels.com/photos/1462641/pexels-photo-1462641.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", imageAlt: "Mumbai city skyline", authorName: "Destination Expert", authorAvatar: "https://images.pexels.com/photos/7580821/pexels-photo-7580821.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", date: "12 Jan 2025"},
            {id: "offers", category: "Offers", title: "Latest Flight Deals and Discounts", excerpt: "Save more on your travels with IndiGo's special offers and promotional fares.", imageSrc: "https://images.pexels.com/photos/804804/pexels-photo-804804.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", imageAlt: "IndiGo aircraft", authorName: "Offers Team", authorAvatar: "https://images.pexels.com/photos/31790426/pexels-photo-31790426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", date: "10 Jan 2025"}
          ]}
          layout="default"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get in Touch with IndiGo"
          description="Have questions about your booking or need assistance? Our customer service team is here to help 24/7."
          inputs={[
            {name: "name", type: "text", placeholder: "Full Name", required: true},
            {name: "email", type: "email", placeholder: "Email Address", required: true},
            {name: "phone", type: "tel", placeholder: "Phone Number", required: false},
            {name: "booking", type: "text", placeholder: "Booking Reference (Optional)", required: false}
          ]}
          textarea={{name: "message", placeholder: "How can we help you?", rows: 5, required: true}}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoSrc="https://images.pexels.com/photos/30000612/pexels-photo-30000612.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          logoAlt="IndiGo Airlines"
          logoText="IndiGo"
          columns={[
            {items: [{label: "Book Flight", href: "https://www.goindigo.in"}, {label: "Manage Booking", href: "https://www.goindigo.in/manage-booking"}, {label: "Check-in", href: "https://www.goindigo.in/check-in"}]},
            {items: [{label: "Flight Status", href: "https://www.goindigo.in/flight-status"}, {label: "Baggage Info", href: "faq"}, {label: "Travel Guidelines", href: "https://www.goindigo.in/travel-guidelines"}]},
            {items: [{label: "About IndiGo", href: "about"}, {label: "Press Releases", href: "https://www.goindigo.in/press-releases"}, {label: "Careers", href: "https://www.goindigo.in/careers"}]},
            {items: [{label: "Customer Support", href: "contact"}, {label: "Feedback", href: "contact"}, {label: "Terms & Conditions", href: "https://www.goindigo.in/terms"}]}
          ]}
        />
      </div>
    </ThemeProvider>
  );
}