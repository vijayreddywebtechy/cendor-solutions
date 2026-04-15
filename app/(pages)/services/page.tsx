import Footer from "@/components/Footer";
import PageHero from "@/components/common/PageHero";
import ServicesList from "@/components/ServicesList";
import DeliveryApproach from "@/components/DeliveryApproach";
import ContactCendor from "@/components/ContactCendor";

export default function ServicesPage() {
  return (
    <>
      <main>
        <PageHero
          heading="Salesforce Services"
          paragraph="Cendor partners with mid-market and enterprise organisations across industries to implement and optimise Salesforce. We understand the unique challenges and requirements of different sectors."
          wrapperClassName="max-w-5xl"
          paragraphClassName="max-w-4xl"
        />

        <ServicesList />
        <DeliveryApproach />
        <ContactCendor />
      </main>
      <Footer />
    </>
  );
}
