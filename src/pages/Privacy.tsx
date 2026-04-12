import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";

const Privacy = () => {
  return (
    <Layout>
      <SEOHead
        title="Privacy Policy | SJU Luxe Travel"
        description="Privacy policy for SJU Luxe Travel. Learn how we collect, use, and protect your personal information."
        canonical="https://www.sjuluxetravel.com/privacy"
      />

      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-12">Last updated: April 12, 2026</p>

          <div className="space-y-10 text-foreground/90 font-body leading-relaxed">
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-3">1. Introduction</h2>
              <p>
                SJU Luxe Travel ("we," "us," or "our") is a boutique luxury travel agency based in San Juan, Puerto Rico. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                our website <a href="https://www.sjuluxetravel.com" className="text-gold underline">www.sjuluxetravel.com</a> or 
                interact with our services.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-3">2. Information We Collect</h2>
              <h3 className="font-heading text-lg text-foreground mt-4 mb-2">Personal Information You Provide</h3>
              <p className="mb-3">When you contact us through our website, email, or phone, we may collect:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Travel preferences and itinerary details</li>
                <li>Any other information you voluntarily provide</li>
              </ul>

              <h3 className="font-heading text-lg text-foreground mt-4 mb-2">Information Collected Automatically</h3>
              <p className="mb-3">When you visit our website, we automatically collect certain information, including:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>IP address and approximate location</li>
                <li>Browser type and operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website or source</li>
                <li>Device information</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-3">3. Cookies & Tracking Technologies</h2>
              <p className="mb-3">We use the following tracking technologies:</p>
              <h3 className="font-heading text-lg text-foreground mt-4 mb-2">Meta (Facebook) Pixel</h3>
              <p>
                We use the Meta Pixel to measure the effectiveness of our advertising, understand how visitors use our 
                website, and deliver relevant advertisements. The Meta Pixel collects data such as pages visited, 
                actions taken, and device information. This data is shared with Meta Platforms, Inc. You can learn more 
                about Meta's data practices at{" "}
                <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-gold underline">
                  Meta's Privacy Policy
                </a>.
              </p>
              <h3 className="font-heading text-lg text-foreground mt-4 mb-2">Opting Out</h3>
              <p>
                You can opt out of interest-based advertising through the{" "}
                <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-gold underline">
                  Digital Advertising Alliance
                </a>{" "}
                or by adjusting your browser settings to block cookies.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-3">4. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>To respond to your inquiries and provide travel planning services</li>
                <li>To create and manage bespoke travel itineraries</li>
                <li>To communicate with you about your travel plans</li>
                <li>To improve our website and services</li>
                <li>To measure advertising effectiveness</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-3">5. Sharing Your Information</h2>
              <p>We do not sell your personal information. We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-1 mt-3">
                <li><strong>Travel partners</strong> — hotels, airlines, cruise lines, and tour operators necessary to fulfill your travel bookings</li>
                <li><strong>NCM Concierge / Travel Leaders</strong> — our host travel agency network, as needed to process bookings</li>
                <li><strong>Meta Platforms</strong> — through the Meta Pixel for advertising purposes</li>
                <li><strong>Legal authorities</strong> — when required by law or to protect our rights</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-3">6. Data Security</h2>
              <p>
                We implement reasonable security measures to protect your personal information. However, no method of 
                transmission over the internet is 100% secure. We cannot guarantee absolute security of your data.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-3">7. Your Rights</h2>
              <p className="mb-3">Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Opt out of the sale or sharing of personal information (California residents under CCPA)</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us at{" "}
                <a href="mailto:dsantiago@ncmconcierge.com" className="text-gold underline">dsantiago@ncmconcierge.com</a>.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-3">8. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal 
                information from children.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-3">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an 
                updated "Last updated" date.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-3">10. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us:
              </p>
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

export default Privacy;
