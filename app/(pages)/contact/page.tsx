import PageHero from "@/components/common/PageHero";
import ContactSection from "@/components/ContactSection";

export default function ContactPage() {
  return (
    <>
      <main>
        <PageHero
          heading="Get in Touch"
          paragraph="Ready to discuss your Salesforce implementation, optimisation, or support needs? Let's have a conversation about how Cendor can support your business objectives."
          paragraphClassName="max-w-4xl"
        />
        <ContactSection />
      </main>
    </>
  );
}
