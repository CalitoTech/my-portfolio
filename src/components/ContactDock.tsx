import { Dock, DockIcon } from "@/components/ui/dock";
import { 
  Linkedin, 
  Github, 
  Mail, 
  MessageCircle, 
  Phone 
} from "lucide-react";

const ContactDock = () => {
  const socialLinks = [
    {
      title: "LinkedIn",
      icon: <Linkedin className="h-full w-full" />,
      href: "https://linkedin.com/in/tu-usuario",
      hoverColor: "hover:text-blue-500",
    },
    {
      title: "GitHub",
      icon: <Github className="h-full w-full" />,
      href: "https://github.com/tu-usuario",
      hoverColor: "hover:text-slate-200",
    },
    {
      title: "WhatsApp",
      icon: <MessageCircle className="h-full w-full" />,
      href: "https://wa.me/tu-numero",
      hoverColor: "hover:text-green-500",
    },
    {
      title: "Email",
      icon: <Mail className="h-full w-full" />,
      href: "mailto:tu@correo.com",
      hoverColor: "hover:text-red-400",
    },
    {
      title: "Teléfono",
      icon: <Phone className="h-full w-full" />,
      href: "tel:+123456789",
      hoverColor: "hover:text-blue-300",
    },
  ];

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <Dock 
        direction="middle" 
        className="flex-col bg-white/5 border border-white/10 backdrop-blur-xl p-3 rounded-full"
      >
        {socialLinks.map((link) => (
          <DockIcon key={link.title}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex h-full w-full items-center justify-center text-slate-400 transition-colors duration-300 ${link.hoverColor}`}
              aria-label={link.title}
            >
              <div className="h-6 w-6">
                {link.icon}
              </div>
            </a>
          </DockIcon>
        ))}
      </Dock>
    </div>
  );
};

export default ContactDock;