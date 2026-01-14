import { FiMail, FiMapPin } from "react-icons/fi";

export default function ContactInfo() {
  const contactInfo = {
    email: "hello@kingsley.dev",
    location: "Lagos, Nigeria",
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-6">
          Connection Details
        </h3>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
              <FiMail className="text-lg" />
            </div>
            <div>
              <p className="text-sm opacity-50 mb-1">Email</p>
              <a
                className="text-lg font-medium hover:text-primary transition-colors"
                href={`mailto:${contactInfo.email}`}
              >
                {contactInfo.email}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
              <FiMapPin className="text-lg" />
            </div>
            <div>
              <p className="text-sm opacity-50 mb-1">Base Location</p>
              <p className="text-lg font-medium">{contactInfo.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
