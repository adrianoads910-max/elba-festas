import { Instagram, Facebook, PhoneCall, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-brand-blue-dark text-brand-gray py-8">
      <div className="max-w-7xl mx-auto px-4 text-center flex flex-col items-center gap-6">

        {/* ✅ Logo */}
        <img
          src="/logo.jpg"
          alt="Elba Festas"
          className="h-20 w-auto opacity-90 rounded-4xl"
        />

        {/* ✅ Endereço com link Google Maps */}
        <p className="flex items-center gap-2 text-brand-metal-medium">
          <MapPin size={20} />
          <a 
            href="https://maps.google.com/?q=Rua+Quinze+de+Novembro,+24,+São+Luís,+MA"
            target="_blank"
            className="hover:underline"
          >
            Rua Quinze de Novembro, 24 - Vila Palmeira - São Luís/MA
          </a>
        </p>

        {/* ✅ Contato WhatsApp */}
        <p className="flex items-center gap-2 text-lg font-medium">
          <PhoneCall size={20} />
          <a 
            href="https://wa.me/5516999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20festas%20🎉"
            target="_blank"
            className="hover:underline"
          >
            WhatsApp: (98) 98866-2897
          </a>
        </p>

        {/* ✅ Redes sociais */}
        <div className="flex gap-6">
          <a 
            href="https://www.instagram.com/elbacamilo.festas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
            target="_blank" 
            className="hover:scale-110 transition-transform" 
            aria-label="Instagram"
          >
            <Instagram size={30} />
          </a>
          <a 
            href="https://facebook.com/seu_perfil" 
            target="_blank" 
            className="hover:scale-110 transition-transform" 
            aria-label="Facebook"
          >
            <Facebook size={30} />
          </a>
        </div>

        {/* ✅ Divisor + Copyright */}
        <div className="w-full border-t border-brand-metal-medium/40 pt-4">
          <p className="text-sm text-brand-metal-medium">
            &copy; {new Date().getFullYear()} Elba Camilo Festas & Eventos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
