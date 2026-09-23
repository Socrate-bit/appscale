// WhatsApp number in international format, digits only (+33 6 62 82 22 38).
export const WHATSAPP_NUMBER = "33662822238";

// Default pre-filled message when opening a WhatsApp conversation.
export function whatsappUrl(
  text = "Bonjour AppScales, vos services m'intéressent et j'aimerais en discuter."
) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
