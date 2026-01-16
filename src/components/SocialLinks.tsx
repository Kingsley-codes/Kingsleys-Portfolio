import { FiLink, FiGithub, FiShare2, FiArrowRight } from "react-icons/fi";
import { SocialLink } from "@/types";

export default function SocialLinks() {
  const socialLinks: SocialLink[] = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/kingsley-agbam",
      icon: "link",
    },
    {
      name: "GitHub",
      href: "https://github.com/Kingsley-codes",
      icon: "code",
    },
    {
      name: "Twitter / X",
      href: "https://x.com/kingsley_agbam",
      icon: "share",
    },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "link":
        return <FiLink />;
      case "code":
        return <FiGithub />;
      case "share":
        return <FiShare2 />;
      default:
        return <FiLink />;
    }
  };

  return (
    <div>
      <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-6">
        Digital Footprint
      </h3>
      <div className="flex flex-col gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="flex items-center justify-between p-4 rounded-lg bg-gray-900 text-gray-300 dark:bg-surface-dark border border-slate-700 dark:border-border-dark hover:border-primary/50 transition-all group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-4">
              <span className="group-hover:text-primary transition-colors">
                {getIcon(link.icon)}
              </span>
              <span className="font-medium">{link.name}</span>
            </div>
            <FiArrowRight className="text-sm opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
          </a>
        ))}
      </div>
    </div>
  );
}
