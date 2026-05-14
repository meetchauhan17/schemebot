import { Scheme } from "@/types";

export function shareOnWhatsApp(scheme: Scheme, language: string): void {
  const applyUrl = scheme.officialLinks.apply || scheme.officialLinks.officialWebsite;
  const mandatoryDocs = scheme.documents
    .filter((d) => d.mandatory)
    .map((d) => d.name)
    .join(", ");

  const messages: Record<string, string> = {
    en: `🏛️ *${scheme.name}*\n💰 Benefit: ${scheme.benefitAmount}\n✅ You may qualify!\n📋 Documents: ${mandatoryDocs}\n🔗 Apply: ${applyUrl}\n\nFind more schemes at: https://schemebot-india.vercel.app`,
    hi: `🏛️ *${scheme.nameHindi}*\n💰 लाभ: ${scheme.benefitAmount}\n✅ आप पात्र हो सकते हैं!\n🔗 आवेदन: ${applyUrl}\n\nSchemeBot India पर और योजनाएं खोजें: https://schemebot-india.vercel.app`,
    gu: `🏛️ *${scheme.nameGujarati || scheme.name}*\n💰 લाભ: ${scheme.benefitAmount}\n✅ तमे पात्र होई शको!\n🔗 अरजी: ${applyUrl}\n\nSchemeBot India पर वधु योजनाओ शोधो: https://schemebot-india.vercel.app`,
  };

  const message = messages[language] ?? messages.en;
  window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank");
}

export async function copySchemeLink(schemeId: string): Promise<void> {
  const url = `${window.location.origin}/schemes/${schemeId}`;
  try {
    await navigator.clipboard.writeText(url);
  } catch {
    // Fallback for older browsers
    const el = document.createElement("textarea");
    el.value = url;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  }
}

export async function nativeShare(scheme: Scheme): Promise<void> {
  if (navigator.share) {
    try {
      await navigator.share({
        title: scheme.name,
        text: `${scheme.benefitAmount} — ${scheme.description.slice(0, 100)}...`,
        url: `${window.location.origin}/schemes/${scheme.id}`,
      });
    } catch (err) {
      console.error("Error sharing", err);
    }
  }
}