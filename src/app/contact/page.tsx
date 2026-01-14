import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import SocialLinks from "@/components/SocialLinks";
import VisualAccent from "@/components/VisualAccent";

export default function ContactPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center py-8 md:py-12 px-4 md:px-6">
      <div className="max-w-[1100px] w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
        <ContactForm />

        {/* Right Column: Info & Socials */}
        <div className="lg:col-span-5 flex flex-col gap-8 md:gap-10 lg:pl-8 py-4">
          <ContactInfo />
          <SocialLinks />
          <VisualAccent />
        </div>
      </div>
    </main>
  );
}
