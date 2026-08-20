import { MessageCircle } from "lucide-react";

export function WhatsAppBtn() {
  const vPhoneNumber = "34694917083";
  const vMessage = encodeURIComponent(
    "¡Hola! Necesito información sobre los servicios de Automatismos La Provincia.",
  );
  const vWaUrl = `https://wa.me/${vPhoneNumber}?text=${vMessage}`;

  return (
    <a
      href={vWaUrl}
      target="_blank"
      rel="external nofollow noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chatear por WhatsApp (se abre en nueva ventana)"
    >
      <MessageCircle size={32} />
    </a>
  );
}
