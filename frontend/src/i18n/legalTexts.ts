import { companyInfo } from "../config/companyData";

export interface ILegalContent {
  title: string;
  subtitle: string;
  s1Title: string;
  s1Text: string;
  s2Title: string;
  s2Text: string;
  s3Title: string;
  s3Text: string;
  s4Title: string;
  s4Text: string;
  s5Title: string;
  s5Text: string;
}

export const mLegalNoticeTexts: Record<string, any> = {
  es: {
    title: "Aviso Legal",
    subtitle: "Información legal y condiciones de uso del sitio web de Automatismos La Provincia.",
    s1Title: "1. Datos identificativos del titular",
    s2Title: "2. Objeto y ámbito de aplicación",
    s2Text: `El presente Aviso Legal regula el acceso y uso del sitio web ${companyInfo.website}, que Automatismos La Provincia pone a disposición de los usuarios de Internet.\nEl acceso al Sitio Web implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal, la Política de Privacidad y la Política de Cookies.`,
    s3Title: "3. Condiciones de acceso y uso",
    s3Text: "El usuario se compromete a hacer un uso adecuado, lícito y diligente del Sitio Web de conformidad con la legislación vigente y la buena fe.",
    s4Title: "4. Propiedad intelectual e industrial",
    s4Text: "Todos los contenidos del Sitio Web (textos, imágenes, diseños, marcas) son propiedad de Automatismos La Provincia o de terceros autorizados.",
    s5Title: "5. Legislación aplicable",
    s5Text: "El presente Aviso Legal se rige por la legislación española. Para cualquier controversia, las partes se someten a los Tribunales de España.",
  },
  en: {
    title: "Legal Notice",
    subtitle: "Legal information and terms of use for the Automatismos La Provincia website.",
    s1Title: "1. Owner Identification Data",
    s2Title: "2. Object and Scope of Application",
    s2Text: `This Legal Notice regulates access to and use of the website ${companyInfo.website}, made available to Internet users by Automatismos La Provincia.\nAccessing the Website implies full and unreserved acceptance of all provisions included in this Legal Notice, the Privacy Policy, and the Cookie Policy.`,
    s3Title: "3. Terms of Access and Use",
    s3Text: "The user agrees to make proper, lawful, and diligent use of the Website in compliance with current legislation and good faith.",
    s4Title: "4. Intellectual and Industrial Property",
    s4Text: "All website content (texts, images, designs, trademarks) is the property of Automatismos La Provincia or authorized third parties.",
    s5Title: "5. Applicable Law",
    s5Text: "This Legal Notice is governed by Spanish law. For any dispute, the parties submit to the Courts of Spain.",
  },
  de: {
    title: "Impressum & Rechtliche Hinweise",
    subtitle: "Rechtliche Informationen und Nutzungsbedingungen der Website von Automatismos La Provincia.",
    s1Title: "1. Anbieterkennzeichnung",
    s2Title: "2. Gegenstand und Geltungsbereich",
    s2Text: `Dieses Impressum regelt den Zugang und die Nutzung der Website ${companyInfo.website}, die von Automatismos La Provincia bereitgestellt wird.\nDer Zugriff auf die Website beinhaltet die vollständige Zustimmung zu allen Bestimmungen dieses Impressums sowie der Datenschutzerklärung.`,
    s3Title: "3. Nutzungsbedingungen",
    s3Text: "Der Nutzer verpflichtet sich zu einer angemessenen und rechtmäßigen Nutzung der Website in Übereinstimmung mit dem geltenden Recht.",
    s4Title: "4. Urheberrecht",
    s4Text: "Alle Inhalte der Website (Texte, Bilder, Marken) sind Eigentum von Automatismos La Provincia oder autorisierten Dritten.",
    s5Title: "5. Anwendbares Recht",
    s5Text: "Es gilt spanisches Recht. Für alle Streitigkeiten sind die Gerichte in Spanien zuständig.",
  },
};

export const mPrivacyTexts: Record<string, any> = {
  es: {
    title: "Política de Privacidad",
    subtitle: "Información sobre el tratamiento de tus datos personales según RGPD y LOPDGDD.",
    s1Title: "1. Responsable del tratamiento",
    s1Text: `Responsable: ${companyInfo.legalName} (${companyInfo.name})\nNIF / CIF: ${companyInfo.nif}\nDomicilio: ${companyInfo.address}\nEmail de contacto: ${companyInfo.email}`,
    s2Title: "2. Finalidad del tratamiento",
    s2Text: "Los datos personales facilitados a través de formularios o contacto directo se utilizan exclusivamente para atender consultas, enviar presupuestos e informarle sobre el estado de sus pedidos de puertas metálicas.",
    s3Title: "3. Legitimación",
    s3Text: "La base legal para el tratamiento de sus datos es el consentimiento expreso del usuario al realizar una consulta o solicitar un presupuesto.",
    s4Title: "4. Derechos de los usuarios",
    s4Text: `Puede ejercer sus derechos de acceso, rectificación, supresión, oposición y limitación enviando un correo electrónico a ${companyInfo.email}.`,
  },
  en: {
    title: "Privacy Policy",
    subtitle: "Information on personal data processing in compliance with GDPR.",
    s1Title: "1. Data Controller",
    s1Text: `Controller: ${companyInfo.legalName} (${companyInfo.name})\nTax ID: ${companyInfo.nif}\nAddress: ${companyInfo.address}\nContact Email: ${companyInfo.email}`,
    s2Title: "2. Purpose of Processing",
    s2Text: "Personal data provided via forms or direct contact is used exclusively to answer inquiries, send quotes, and update you on metal door orders.",
    s3Title: "3. Legal Basis",
    s3Text: "The legal basis for data processing is the explicit consent of the user when making an inquiry or requesting a quote.",
    s4Title: "4. User Rights",
    s4Text: `You may exercise your rights of access, rectification, erasure, and objection by sending an email to ${companyInfo.email}.`,
  },
  de: {
    title: "Datenschutzerklärung",
    subtitle: "Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO.",
    s1Title: "1. Verantwortlicher für die Datenverarbeitung",
    s1Text: `Verantwortlicher: ${companyInfo.legalName} (${companyInfo.name})\nSteuernummer: ${companyInfo.nif}\nAdresse: ${companyInfo.address}\nE-Mail: ${companyInfo.email}`,
    s2Title: "2. Zweck der Verarbeitung",
    s2Text: "Die übermittelten personenbezogenen Daten werden ausschließlich zur Beantwortung von Anfragen und Zusendung von Angeboten verwendet.",
    s3Title: "3. Rechtsgrundlage",
    s3Text: "Rechtsgrundlage ist die ausdrückliche Einwilligung des Nutzers bei einer Anfrage.",
    s4Title: "4. Ihre Rechte",
    s4Text: `Sie können Ihre Rechte auf Auskunft, Berichtigung und Löschung per E-Mail an ${companyInfo.email} ausüben.`,
  },
};

export const mCookieTexts: Record<string, any> = {
  es: {
    title: "Política de Cookies",
    subtitle: "Información transparente sobre el uso de cookies en nuestro sitio web.",
    s1Title: "1. ¿Qué es una cookie?",
    s1Text: "Una cookie es un pequeño archivo de texto que se almacena en su navegador cuando visita nuestro sitio web.",
    s2Title: "2. Gestión del consentimiento",
    s2Text: "Puede configurar sus preferencias de cookies en cualquier momento desde el botón de 'Configurar cookies' situado en el pie de página.",
  },
  en: {
    title: "Cookie Policy",
    subtitle: "Transparent information about cookie usage on our website.",
    s1Title: "1. What is a cookie?",
    s1Text: "A cookie is a small text file stored in your browser when you visit our website.",
    s2Title: "2. Consent Management",
    s2Text: "You can configure your cookie preferences at any time via the 'Cookie Settings' button in the footer.",
  },
  de: {
    title: "Cookie-Richtlinie",
    subtitle: "Transparente Informationen zur Verwendung von Cookies auf unserer Website.",
    s1Title: "1. Was ist ein Cookie?",
    s1Text: "Ein Cookie ist eine kleine Textdatei, die in Ihrem Browser gespeichert wird.",
    s2Title: "2. Einwilligungsverwaltung",
    s2Text: "Sie können Ihre Cookie-Einstellungen jederzeit über die Schaltfläche 'Cookie-Einstellungen' im Footer anpassen.",
  },
};

export const mAccessibilityTexts: Record<string, any> = {
  es: {
    title: "Declaración de Accesibilidad",
    subtitle: "Compromiso de Automatismos La Provincia con la accesibilidad web WCAG 2.1 AA.",
    s1Title: "1. Estado de cumplimiento",
    s1Text: "Este sitio web es plenamente conforme con el nivel AA de las Pautas de Accesibilidad al Contenido en la Web (WCAG 2.1).",
  },
  en: {
    title: "Accessibility Statement",
    subtitle: "Automatismos La Provincia commitment to WCAG 2.1 AA web accessibility.",
    s1Title: "1. Compliance Status",
    s1Text: "This website is fully compliant with Level AA of the Web Content Accessibility Guidelines (WCAG 2.1).",
  },
  de: {
    title: "Erklärung zur Barrierefreiheit",
    subtitle: "Verpflichtung von Automatismos La Provincia zur digitalen Barrierefreiheit gemäß WCAG 2.1 AA.",
    s1Title: "1. Stand der Vereinbarkeit",
    s1Text: "Diese Website ist mit der Konformitätsstufe AA der Richtlinien für barrierefreie Webinhalte (WCAG 2.1) vollständig vereinbar.",
  },
};

export const mTermsTexts: Record<string, any> = {
  es: {
    title: "Términos y Condiciones",
    subtitle: "Condiciones generales de contratación y uso del sitio web.",
    s1Title: "1. Condiciones generales",
    s1Text: "Todos los presupuestos emitidos tienen una validez de 30 días naturales a partir de la fecha de expedición.",
  },
  en: {
    title: "Terms & Conditions",
    subtitle: "General conditions of contract and use of the website.",
    s1Title: "1. General Conditions",
    s1Text: "All issued quotations are valid for 30 calendar days from the date of issue.",
  },
  de: {
    title: "Allgemeine Geschäftsbedingungen (AGB)",
    subtitle: "Allgemeine Vertrags- und Nutzungsbedingungen der Website.",
    s1Title: "1. Allgemeine Bedingungen",
    s1Text: "Alle erstellten Angebote sind ab dem Ausstellungsdatum 30 Kalendertage lang gültig.",
  },
};
