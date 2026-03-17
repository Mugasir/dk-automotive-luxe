import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/256706285674"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-foreground" />
      </a>
      <a
        href="tel:+256706285674"
        className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        style={{ boxShadow: "var(--shadow-glow)" }}
        aria-label="Call"
      >
        <Phone className="w-6 h-6 text-primary-foreground" />
      </a>
    </div>
  );
};

export default FloatingButtons;
