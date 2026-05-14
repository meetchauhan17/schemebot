import Groq from "groq-sdk";

let _groq: Groq | null = null;

function getGroqClient() {
  if (_groq) return _groq;
  
  const apiKey = process.env.GROQ_API_KEY || process.env.NEXT_PUBLIC_GROQ_API_KEY;
  
  if (!apiKey && typeof window === "undefined") {
    console.warn("GROQ_API_KEY is missing. Translation features will be disabled.");
  }

  _groq = new Groq({
    apiKey: apiKey || "missing-key",
    dangerouslyAllowBrowser: true,
  });
  
  return _groq;
}

// ─── UI String translations (hardcoded for instant loading, no API call needed) ────────

export const UI_STRINGS: Record<string, Record<string, string>> = {
  en: {
    welcome: "Welcome! I'm SchemeBot India 🇮🇳. Let me help you find government schemes you qualify for.",
    typeMessage: "Type your message...",
    findSchemes: "Find My Schemes",
    browsing: "Browsing schemes...",
    saved: "Scheme Saved!",
    loading: "Loading...",
    noResults: "No schemes found for your profile.",
    applyNow: "Apply Now",
    checkEligibility: "Check Eligibility",
    shareScheme: "Share Scheme",
    saveScheme: "Save Scheme",
    voiceInput: "Voice Input",
    stopVoice: "Stop Recording",
    speakResponse: "Speak Response",
    stopSpeaking: "Stop Speaking",
    clearChat: "Clear Chat",
    retry: "Retry",
  },
  hi: {
    welcome: "नमस्ते! मैं SchemeBot India 🇮🇳 हूं। आइए आपके लिए सरकारी योजनाएं खोजते हैं।",
    typeMessage: "अपना संदेश लिखें...",
    findSchemes: "मेरी योजनाएं खोजें",
    browsing: "योजनाएं देख रहे हैं...",
    saved: "योजना सहेजी गई!",
    loading: "लोड हो रहा है...",
    noResults: "आपकी प्रोफ़ाइल के लिए कोई योजना नहीं मिली।",
    applyNow: "अभी आवेदन करें",
    checkEligibility: "पात्रता जांचें",
    shareScheme: "योजना साझा करें",
    saveScheme: "योजना सहेजें",
    voiceInput: "आवाज़ इनपुट",
    stopVoice: "रिकॉर्डिंग बंद करें",
    speakResponse: "उत्तर सुनें",
    stopSpeaking: "बोलना बंद करें",
    clearChat: "चैट साफ़ करें",
    retry: "दोबारा कोशिश करें",
  },
  gu: {
    welcome: "નમસ્તે! હું SchemeBot India 🇮🇳 છું. ચાલો તમારા માટે સરકારી યોજનાઓ શોધીએ।",
    typeMessage: "તમારો સંદેશ લખો...",
    findSchemes: "મારી યોજनाઓ શોધો",
    browsing: "યોજनाઓ જોઈ રહ્યા છીએ...",
    saved: "યોजना સાચવવામાં આવી!",
    loading: "લોડ થઈ રહ્યું છે...",
    noResults: "તમારી પ્રોફ઼ાઇl માટે કોઈ يوजना नहीं मिली.",
    applyNow: "અભી अरজ करो",
    checkEligibility: "पात्रता तपासो",
    shareScheme: "योजना शेयर करो",
    saveScheme: "योजना सहेजो",
    voiceInput: "अवाज इनपुट",
    stopVoice: "रिकॉर्डिंग बंद",
    speakResponse: "जवाब सांभळो",
    stopSpeaking: "बोलना बंद करो",
    clearChat: "ચैट साफ करो",
    retry: "ফिर कोशिश करो",
  },
  bn: {
    welcome: "স্বাগতম! আমি SchemeBot India 🇮🇳। আসুন আপনার জন্য সরকারি প্রকল্প খুঁজি।",
    typeMessage: "আপনার বার্তা লিখুন...",
    findSchemes: "আমার প্রকল্প খুঁজুন",
    browsing: "প্রকল্প দেখছি...",
    saved: "প্রকল্প সংরক্ষিত!",
    loading: "লোড হচ্ছে...",
    noResults: "আপনার প্রোফাইলের জন্য কোনো প্রকল্প পাওয়া যায়নি।",
    applyNow: "এখনই আবেদন করুন",
    checkEligibility: "যোগ্যতা যাচাই করুন",
    shareScheme: "প্রকল্প শেয়ার করুন",
    saveScheme: "প্রকল্প সংরক্ষণ করুন",
    voiceInput: "ভয়েস ইনপুট",
    stopVoice: "রেকর্ডিং বন্ধ করুন",
    speakResponse: "উত্তর শুনুন",
    stopSpeaking: "বলা বন্ধ করুন",
    clearChat: "চ্যাট পরিষ্কার করুন",
    retry: "পুনরায় চেষ্টা করুন",
  },
  ta: {
    welcome: "வணக்கம்! நான் SchemeBot India 🇮🇳. உங்களுக்கான அரசு திட்டங்களை கண்டுபிடிக்கலாம்.",
    typeMessage: "உங்கள் செய்தியை தட்டச்சு செய்யுங்கள்...",
    findSchemes: "என் திட்டங்களை கண்டுபிடி",
    browsing: "திட்டங்களை பார்க்கிறோம்...",
    saved: "திட்டம் சேமிக்கப்பட்டது!",
    loading: "ஏற்றுகிறது...",
    noResults: "உங்கள் சுயவிவரத்திற்கு திட்டங்கள் இல்லை.",
    applyNow: "இப்போதே விண்ணப்பிக்கவும்",
    checkEligibility: "தகுதி சரிபார்க்கவும்",
    shareScheme: "திட்டத்தை பகிரவும்",
    saveScheme: "திட்டத்தை சேமிக்கவும்",
    voiceInput: "குரல் உள்ளீடு",
    stopVoice: "பதிவு நிறுத்தவும்",
    speakResponse: "பதிலை கேளுங்கள்",
    stopSpeaking: "பேச்சை நிறுத்தவும்",
    clearChat: "அரட்டையை அழிக்கவும்",
    retry: "மீண்டும் முயற்சிக்கவும்",
  },
  te: {
    welcome: "నమస్కారం! నేను SchemeBot India 🇮🇳. మీకు ప్రభుత్వ పథకాలు కనుగొందాం.",
    typeMessage: "మీ సందేశం టైప్ చేయండి...",
    findSchemes: "నా పథకాలు కనుగొనండి",
    browsing: "పథకాలు చూస్తున్నాం...",
    saved: "పథకం సేవ్ అయింది!",
    loading: "లోడ్ అవుతోంది...",
    noResults: "మీ ప్రొఫైల్‌కు పథకాలు కనుగొనబడలేదు.",
    applyNow: "ఇప్పుడే దరఖాస్తు చేయండి",
    checkEligibility: "అర్హత తనిఖీ చేయండి",
    shareScheme: "పథకం షేర్ చేయండి",
    saveScheme: "పథకం సేవ్ చేయండి",
    voiceInput: "వాయిస్ ఇన్‌పుట్",
    stopVoice: "రికార్డింగ్ ఆపండి",
    speakResponse: "సమాధానం వినండి",
    stopSpeaking: "మాట్లాడడం ఆపండి",
    clearChat: "చాట్ క్లియర్ చేయండి",
    retry: "మళ్లీ ప్రయత్నించండి",
  },
  mr: {
    welcome: "नमस्कार! मी SchemeBot India 🇮🇳 आहे. तुमच्यासाठी सरकारी योजना शोधूया.",
    typeMessage: "तुमचा संदेश टाइप करा...",
    findSchemes: "माझ्या योजना शोधा",
    browsing: "योजना पाहत आहोत...",
    saved: "योजना जतन केली!",
    loading: "लोड होत आहे...",
    noResults: "तुमच्या प्रोफाइलसाठी योजना सापडल्या नाहीत.",
    applyNow: "आत्ता अर्ज करा",
    checkEligibility: "पात्रता तपासा",
    shareScheme: "योजना शेअर करा",
    saveScheme: "योजना जतन करा",
    voiceInput: "व्हॉइस इनपुट",
    stopVoice: "रेकॉर्डिंग थांबवा",
    speakResponse: "उत्तर ऐका",
    stopSpeaking: "बोलणे थांबवा",
    clearChat: "चॅट साफ करा",
    retry: "पुन्हा प्रयत्न करा",
  },
  kn: {
    welcome: "ನಮಸ್ಕಾರ! ನಾನು SchemeBot India 🇮🇳. ನಿಮಗಾಗಿ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕೋಣ.",
    typeMessage: "ನಿಮ್ಮ ಸಂದೇಶ ಟೈಪ್ ಮಾಡಿ...",
    findSchemes: "ನನ್ನ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ",
    browsing: "ಯೋಜನೆಗಳನ್ನು ನೋಡುತ್ತಿದ್ದೇವೆ...",
    saved: "ಯೋಜನೆ ಉಳಿಸಲಾಗಿದೆ!",
    loading: "ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
    noResults: "ನಿಮ್ಮ ಪ್ರೊಫೈಲ್‌ಗೆ ಯೋಜನೆಗಳು ಕಂಡುಬಂದಿಲ್ಲ.",
    applyNow: "ಈಗಲೇ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ",
    checkEligibility: "ಅರ್ಹತೆ ಪರಿಶೀಲಿಸಿ",
    shareScheme: "ಯೋಜನೆ ಹಂಚಿಕೊಳ್ಳಿ",
    saveScheme: "ಯೋಜನೆ ಉಳಿಸಿ",
    voiceInput: "ಧ್ವನಿ ಇನ್‌ಪುಟ್",
    stopVoice: "ರೆಕಾರ್ಡಿಂಗ್ ನಿಲ್ಲಿಸಿ",
    speakResponse: "ಉತ್ತರ ಕೇಳಿ",
    stopSpeaking: "ಮಾತನಾಡುವುದನ್ನು ನಿಲ್ಲಿಸಿ",
    clearChat: "ಚಾಟ್ ತೆರವುಗೊಳಿಸಿ",
    retry: "ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ",
  },
  ml: {
    welcome: "നമസ്കാരം! ഞാൻ SchemeBot India 🇮🇳 ആണ്. നിങ്ങൾക്കുള്ള സർക്കാർ പദ്ധതികൾ കണ്ടെത്താം.",
    typeMessage: "നിങ്ങളുടെ സന്ദേശം ടൈപ്പ് ചെയ്യുക...",
    findSchemes: "എന്റെ പദ്ധതികൾ കണ്ടെത്തൂ",
    browsing: "പദ്ധതികൾ നോക്കുന്നു...",
    saved: "പദ്ധതി സംരക്ഷിച്ചു!",
    loading: "ലോഡ് ചെയ്യുന്നു...",
    noResults: "നിങ്ങളുടെ പ്രൊഫൈലിനായി പദ്ധതികൾ കണ്ടെത്തിയില്ല.",
    applyNow: "ഇപ്പോൾ അപേക്ഷിക്കൂ",
    checkEligibility: "യോഗ്യത പരിശോധിക്കൂ",
    shareScheme: "പദ്ധതി പങ്കിടൂ",
    saveScheme: "പദ്ധതി സംരക്ഷിക്കൂ",
    voiceInput: "ശബ്ദ ഇൻപുട്ട്",
    stopVoice: "റെക്കോർഡിംഗ് നിർത്തൂ",
    speakResponse: "ഉത്തരം കേൾക്കൂ",
    stopSpeaking: "സംസാരം നിർത്തൂ",
    clearChat: "ചാറ്റ് മായ്ക്കൂ",
    retry: "വീണ്ടും ശ്രമിക്കൂ",
  },
  pa: {
    welcome: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ SchemeBot India 🇮🇳 ਹਾਂ। ਆਓ ਤੁਹਾਡੇ ਲਈ ਸਰਕਾਰੀ ਯੋਜਨਾਵਾਂ ਲੱਭੀਏ।",
    typeMessage: "ਆਪਣਾ ਸੁਨੇਹਾ ਟਾਈਪ ਕਰੋ...",
    findSchemes: "ਮੇਰੀਆਂ ਯੋਜਨਾਵਾਂ ਲੱਭੋ",
    browsing: "ਯੋਜਨਾਵਾਂ ਦੇਖ ਰਹੇ ਹਾਂ...",
    saved: "ਯੋਜਨਾ ਸੁਰੱਖਿਅਤ ਕੀਤੀ!",
    loading: "ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...",
    noResults: "ਤੁਹਾਡੇ ਪ੍ਰੋਫਾਈਲ ਲਈ ਕੋਈ ਯੋਜਨਾ ਨਹੀਂ ਮਿਲੀ।",
    applyNow: "ਹੁਣੇ ਅਰਜ਼ੀ ਦਿਓ",
    checkEligibility: "ਯੋਗਤਾ ਜਾਂਚੋ",
    shareScheme: "ਯੋਜਨਾ ਸਾਂਝੀ ਕਰੋ",
    saveScheme: "ਯੋਜਨਾ ਸੁਰੱਖਿਅਤ ਕਰੋ",
    voiceInput: "ਆਵਾਜ਼ ਇਨਪੁੱਟ",
    stopVoice: "ਰਿਕਾਰਡਿੰਗ ਬੰਦ ਕਰੋ",
    speakResponse: "ਜਵਾਬ ਸੁਣੋ",
    stopSpeaking: "ਬੋਲਣਾ ਬੰਦ ਕਰੋ",
    clearChat: "ਚੈਟ ਸਾਫ਼ ਕਰੋ",
    retry: "ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ",
  },
  or: {
    welcome: "ନମସ୍କାର! ମୁଁ SchemeBot India 🇮🇳। ଆସନ୍ତୁ ଆପଣଙ୍କ ପାଇଁ ସରକାରୀ ଯୋଜନା ଖୋଜିବା।",
    typeMessage: "ଆପଣଙ୍କ ବାର୍ତ୍ତା ଟାଇପ୍ କରନ୍ତୁ...",
    findSchemes: "ମୋ ଯୋଜନା ଖୋଜ",
    browsing: "ଯୋଜନା ଦେଖୁଛୁ...",
    saved: "ଯୋଜନା ସଞ୍ଚୟ ହୋଇଛି!",
    loading: "ଲୋଡ ହେଉଛି...",
    noResults: "ଆପଣଙ୍କ ପ୍ରୋଫାଇଲ ପାଇଁ ଯୋଜନା ମିଳିଲା ନାହିଁ।",
    applyNow: "ବର୍ତ୍ତମାନ ଆବେଦନ କରନ୍ତୁ",
    checkEligibility: "ଯୋଗ୍ୟତା ଯାଞ୍ଚ କରନ୍ତୁ",
    shareScheme: "ଯୋଜନା ଅଂଶୀଦାର କରନ୍ତୁ",
    saveScheme: "ଯୋଜନା ସଞ୍ଚୟ କରନ୍ତୁ",
    voiceInput: "ଭଏସ ଇନପୁଟ",
    stopVoice: "ରେକର୍ଡିଂ ବନ୍ଦ କରନ୍ତୁ",
    speakResponse: "ଉତ୍ତର ଶୁଣନ୍ତୁ",
    stopSpeaking: "କହିବା ବନ୍ଦ କରନ୍ତୁ",
    clearChat: "ଚ୍ୟାଟ ସଫା କରନ୍ତୁ",
    retry: "ପୁଣି ଚେଷ୍ଟା କରନ୍ତୁ",
  },
  ur: {
    welcome: "السلام علیکم! میں SchemeBot India 🇮🇳 ہوں۔ آئیے آپ کے لیے سرکاری اسکیمیں تلاش کریں۔",
    typeMessage: "اپنا پیغام ٹائپ کریں...",
    findSchemes: "میری اسکیمیں تلاش کریں",
    browsing: "اسکیمیں دیکھ رہے ہیں...",
    saved: "اسکیم محفوظ ہو گئی!",
    loading: "لوڈ ہو رہا ہے...",
    noResults: "آپ کی پروفائل کے لیے اسکیمیں نہیں ملیں۔",
    applyNow: "ابھی درخواست کریں",
    checkEligibility: "اہلیت جانچیں",
    shareScheme: "اسکیم شیئر کریں",
    saveScheme: "اسکیم محفوظ کریں",
    voiceInput: "آواز کی معلومات",
    stopVoice: "ریکارڈنگ بند کریں",
    speakResponse: "جواب سنیں",
    stopSpeaking: "بولنا بند کریں",
    clearChat: "چیٹ صاف کریں",
    retry: "دوبارہ کوشش کریں",
  },
};

// ─── Helper: get UI string with fallback ─────────────────────────────────────

export function getUIString(
  key: string,
  language: string,
  fallback?: string
): string {
  const lang = UI_STRINGS[language] ?? UI_STRINGS["en"];
  return lang[key] ?? UI_STRINGS["en"][key] ?? fallback ?? key;
}

// ─── translateText — uses Groq llama-3.1-8b-instant ──────────────────────────

export async function translateText(
  text: string,
  targetLanguage: string
): Promise<string> {
  if (!text.trim()) return text;

  const languageNames: Record<string, string> = {
    en: "English", hi: "Hindi", gu: "Gujarati", bn: "Bengali",
    ta: "Tamil", te: "Telugu", mr: "Marathi", kn: "Kannada",
    ml: "Malayalam", pa: "Punjabi", or: "Odia", ur: "Urdu",
  };

  const targetName = languageNames[targetLanguage] ?? targetLanguage;

  try {
    const groq = getGroqClient();
    const res = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: `Translate the following text to ${targetName}. Return ONLY the translated text, nothing else — no explanations, no quotes, no labels.`,
        },
        { role: "user", content: text },
      ],
      temperature: 0.1,
      max_tokens: 1024,
    });
    return res.choices[0]?.message?.content?.trim() ?? text;
  } catch {
    // Fail gracefully — return original text
    return text;
  }
}

// ─── detectLanguage — returns BCP-47 code ─────────────────────────────────────

export async function detectLanguage(text: string): Promise<string> {
  if (!text.trim()) return "en";

  try {
    const groq = getGroqClient();
    const res = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content:
            "Detect the language of the text. Reply with ONLY a two-letter ISO 639-1 language code (e.g. en, hi, gu, ta, te, bn, mr, kn, ml, pa, or, ur). Nothing else.",
        },
        { role: "user", content: text },
      ],
      temperature: 0,
      max_tokens: 5,
    });

    const code = res.choices[0]?.message?.content?.trim().toLowerCase() ?? "en";
    // Validate — return only known codes
    const knownCodes = ["en","hi","gu","bn","ta","te","mr","kn","ml","pa","or","ur"];
    return knownCodes.includes(code) ? code : "en";
  } catch {
    return "en";
  }
}