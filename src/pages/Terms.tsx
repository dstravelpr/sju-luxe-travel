import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";

const Terms = () => {
  return (
    <Layout>
      <SEOHead
        title="Terms of Service | SJU Luxe Travel"
        description="Terms of service for SJU Luxe Travel. Review our policies on travel bookings, cancellations, liability, and service agreements."
        canonical="https://www.sjuluxetravel.com/terms"
      />

      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-12">Last updated: April 12, 2026</p>

          <div className="space-y-10 text-foreground/90 font-body leading-relaxed">
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing or using the website of SJU Luxe Travel ("we," "us," or "our") at{" "}
                <a href="https://www.sjuluxetravel.com" className="text-gold underline">www.sjuluxetravel.com</a>,
                or by engaging our travel planning services, you agree to be bound by these Terms of Service. 
                If you do not agree, please do not use our website or services.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-3">2. Services</h2>
              <p>
                SJU Luxe Travel is a boutique luxury travel agency based in San Juan, Puerto Rico, operating as an 
                independent agent of NCM Concierge, part of Travel Leaders. We provide personalized travel planning, 
                itinerary design, booking assistance, and concierge services for leisure and corporate travel.
              </p>
              <p className="mt-3">
                We act as an intermediary between you and travel suppliers (airlines, hotels, cruise lines, tour 
                operators, etc.). We are not the direct provider of travel services and do not own, operate, or 
                control any transportation, accommodation, or tour services.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-3">3. Booking & Payment</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All bookings are subject to availability and confirmation by the respective travel supplier.</li>
                <li>Prices quoted are subject to change until fully confirmed and paid.</li>
                <li>Payment terms, including deposits and final payment deadlines, will be communicated at the time of booking.</li>
                <li>You are responsible for ensuring the accuracy of all traveler names, dates, and details provided.</li>
                <li>Service fees may apply for itinerary planning, research, and booking management.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-3">4. Cancellations & Changes</h2>
              <p className="mb-3">
                Cancellation and change policies are determined by each individual travel supplier (airline, hotel, 
                cruise line, etc.). We will communicate the applicable policies at the time of booking.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cancellation fees imposed by travel suppliers are your responsibility.</li>
                <li>SJU Luxe Travel service fees are non-refundable once services have been rendered.</li>
                <li>We strongly recommend purchasing comprehensive travel insurance to protect your investment.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-3">5. Travel Insurance</h2>
              <p>
                We strongly recommend that all clients purchase comprehensive travel insurance covering trip 
                cancellation, interruption, medical emergencies, baggage loss, and evacuation. SJU Luxe Travel 
                is not responsible for losses incurred due to lack of adequate insurance coverage.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-3">6. Travel Documents & Responsibilities</h2>
              <p>
                You are solely responsible for obtaining and maintaining valid travel documents, including passports, 
                visas, health certificates, and any other documentation required for your destination(s). SJU Luxe 
                Travel is not liable for denied boarding or entry due to insufficient or invalid documentation.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-3">7. Limitation of Liability</h2>
              <p>
                SJU Luxe Travel acts solely as an agent for travel suppliers. We are not liable for any injury, 
                damage, loss, accident, delay, or irregularity that may occur due to the acts, omissions, or 
                defaults of any third-party travel supplier, including but not limited to airlines, hotels, cruise 
                lines, tour operators, or transportation companies.
              </p>
              <p className="mt-3">
                We are not responsible for force majeure events including but not limited to weather, natural 
                disasters, pandemics, government actions, civil unrest, or acts of terrorism.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-3">8. Intellectual Property</h2>
              <p>
                All content on this website — including text, images, logos, graphics, and design — is the property 
                of SJU Luxe Travel and is protected by copyright and intellectual property laws. You may not 
                reproduce, distribute, or use any content without our prior written consent.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-3">9. Website Use</h2>
              <p>
                You agree to use our website only for lawful purposes. You may not use our website in any way that 
                could damage, disable, or impair the site or interfere with any other party's use. We reserve the 
                right to modify or discontinue the website at any time without notice.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-3">10. Governing Law</h2>
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of the 
                Commonwealth of Puerto Rico and applicable federal laws of the United States. Any disputes 
                arising from these terms shall be resolved in the courts of Puerto Rico.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-3">11. Licensing</h2>
              <p>SJU Luxe Travel operates under the following registrations:</p>
              <ul className="list-disc pl-6 space-y-1 mt-3">
                <li>Puerto Rico: AV-166 Lic. 237</li>
                <li>Florida Seller of Travel # ST15578</li>
                <li>California Seller of Travel No. 2090937-50</li>
                <li>Washington UBID No. 603189022</li>
                <li>Iowa Registered Agency # 1202</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-3">12. Changes to These Terms</h2>
              <p>
                We reserve the right to update these Terms of Service at any time. Changes will be posted on this 
                page with an updated "Last updated" date. Continued use of our services after changes constitutes 
                acceptance of the revised terms.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-3">13. Contact Us</h2>
              <p>If you have questions about these Terms of Service, please contact us:</p>
              <ul className="list-none mt-3 space-y-1">
                <li><strong>SJU Luxe Travel</strong></li>
                <li>San Juan, Puerto Rico</li>
                <li>Email: <a href="mailto:dsantiago@ncmconcierge.com" className="text-gold underline">dsantiago@ncmconcierge.com</a></li>
                <li>Phone: <a href="tel:+16179355714" className="text-gold underline">(617) 935-5714</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
