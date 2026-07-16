import ContactCTA from "@/components/contact/ContactCTA";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactFeatures from "@/components/contact/ContactFeatures";
import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata = {
  title: "Contact | EventSphere",
  description:
    "Get in touch with the EventSphere team. We're here to help you organize, discover, and manage amazing events across Bangladesh.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactFeatures />
      <ContactFAQ />
      <ContactCTA />
    </>
  );
}
