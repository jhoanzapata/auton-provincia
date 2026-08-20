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
  fr: {
    title: "Mentions Légales",
    subtitle: "Informations légales et conditions d'utilisation du site web d'Automatismos La Provincia.",
    s1Title: "1. Données d'identification du propriétaire",
    s2Title: "2. Objet et champ d'application",
    s2Text: `Les présentes mentions légales régissent l'accès et l'utilisation du site web ${companyInfo.website}, mis à disposition par Automatismos La Provincia.\nL'accès au site web implique l'acceptation pleine et sans réserve de toutes les dispositions incluses dans ces mentions légales, la politique de confidentialité et la politique de cookies.`,
    s3Title: "3. Conditions d'accès et d'utilisation",
    s3Text: "L'utilisateur s'engage à faire un usage approprié, licite et diligent du site web conformément à la législation en vigueur et à la bonne foi.",
    s4Title: "4. Propriété intellectuelle et industrielle",
    s4Text: "Tous les contenus du site web (textes, images, designs, marques) sont la propriété d'Automatismos La Provincia ou de tiers autorisés.",
    s5Title: "5. Législation applicable",
    s5Text: "Les présentes mentions légales sont régies par la législation espagnole. Pour tout litige, les parties se soumettent aux tribunaux d'Espagne.",
  },
  nl: {
    title: "Juridische Kennisgeving",
    subtitle: "Juridische informatie en gebruiksvoorwaarden van de website van Automatismos La Provincia.",
    s1Title: "1. Identificatiegegevens van de eigenaar",
    s2Title: "2. Onderwerp en toepassingsgebied",
    s2Text: `Deze Juridische Kennisgeving regelt de toegang tot en het gebruik van de website ${companyInfo.website}, ter beschikking gesteld door Automatismos La Provincia.\nToegang tot de website houdt volledige aanvaarding in van alle bepalingen in deze Juridische Kennisgeving, het Privacybeleid en het Cookiebeleid.`,
    s3Title: "3. Voorwaarden voor toegang en gebruik",
    s3Text: "De gebruiker verplicht zich tot een gepast, rechtmatig en zorgvuldig gebruik van de website overeenkomstig de geldende wetgeving en de goede trouw.",
    s4Title: "4. Intellectuele en industriële eigendom",
    s4Text: "Alle inhoud van de website (teksten, afbeeldingen, ontwerpen, merken) is eigendom van Automatismos La Provincia of gemachtigde derden.",
    s5Title: "5. Toepasselijk recht",
    s5Text: "Deze Juridische Kennisgeving wordt beheerst door de Spaanse wetgeving. Voor geschillen onderwerpen partijen zich aan de Spaanse rechtbanken.",
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
  fr: {
    title: "Politique de Confidentialité",
    subtitle: "Informations sur le traitement de vos données personnelles conformément au RGPD.",
    s1Title: "1. Responsable du traitement",
    s1Text: `Responsable: ${companyInfo.legalName} (${companyInfo.name})\nNuméro fiscal: ${companyInfo.nif}\nAdresse: ${companyInfo.address}\nE-mail de contact: ${companyInfo.email}`,
    s2Title: "2. Finalité du traitement",
    s2Text: "Les données personnelles fournies via les formulaires ou le contact direct sont utilisées exclusivement pour répondre aux demandes et envoyer des devis.",
    s3Title: "3. Base légale",
    s3Text: "La base légale du traitement est le consentement explicite de l'utilisateur lors de la demande d'information ou de devis.",
    s4Title: "4. Droits des utilisateurs",
    s4Text: `Vous pouvez exercer vos droits d'accès, de rectification et de suppression en envoyant un e-mail à ${companyInfo.email}.`,
  },
  nl: {
    title: "Privacybeleid",
    subtitle: "Informatie over de verwerking van uw persoonsgegevens overeenkomstig de AVG (GDPR).",
    s1Title: "1. Verwerkingsverantwoordelijke",
    s1Text: `Verantwoordelijke: ${companyInfo.legalName} (${companyInfo.name})\nBTW / NIF: ${companyInfo.nif}\nAdres: ${companyInfo.address}\nContact E-mail: ${companyInfo.email}`,
    s2Title: "2. Doel van de verwerking",
    s2Text: "Persoonsgegevens verstrekt via formulieren of direct contact worden uitsluitend gebruikt om vragen te beantwoorden en offertes te versturen.",
    s3Title: "3. Rechtsgrond",
    s3Text: "De rechtsgrond voor gegevensverwerking is de uitdrukkelijke toestemming van de gebruiker bij een aanvraag.",
    s4Title: "4. Rechten van gebruikers",
    s4Text: `U kunt uw rechten op inzage, rectificatie en verwijdering uitoefenen door een e-mail te sturen naar ${companyInfo.email}.`,
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
  fr: {
    title: "Politique de Cookies",
    subtitle: "Informations transparentes sur l'utilisation des cookies sur notre site web.",
    s1Title: "1. Qu'est-ce qu'un cookie ?",
    s1Text: "Un cookie est un petit fichier texte stocké dans votre navigateur lorsque vous visitez notre site web.",
    s2Title: "2. Gestion du consentement",
    s2Text: "Vous pouvez configurer vos préférences de cookies à tout moment via le bouton 'Paramètres des cookies' dans le pied de page.",
  },
  nl: {
    title: "Cookiebeleid",
    subtitle: "Transparante informatie over het gebruik van cookies op onze website.",
    s1Title: "1. Wat is een cookie?",
    s1Text: "Een cookie is een klein tekstbestand dat op uw browser wordt opgeslagen wanneer u onze website bezoekt.",
    s2Title: "2. Beheer van toestemming",
    s2Text: "U kunt uw cookievoorkeuren op elk moment aanpassen via de knop 'Cookie-instellingen' in de footer.",
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
  fr: {
    title: "Déclaration d'Accessibilité",
    subtitle: "Engagement d'Automatismos La Provincia envers l'accessibilité numérique WCAG 2.1 AA.",
    s1Title: "1. État de conformité",
    s1Text: "Ce site web est pleinement conforme au niveau AA des Règles d'accessibilité aux contenus web (WCAG 2.1).",
  },
  nl: {
    title: "Toegankelijkheidsverklaring",
    subtitle: "Engagement van Automatismos La Provincia voor digitale toegankelijkheid WCAG 2.1 AA.",
    s1Title: "1. Nalevingsstatus",
    s1Text: "Deze website voldoet volledig aan niveau AA van de Web Content Accessibility Guidelines (WCAG 2.1).",
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
  fr: {
    title: "Conditions Générales de Vente (CGV)",
    subtitle: "Conditions générales de contrat et d'utilisation du site web.",
    s1Title: "1. Conditions générales",
    s1Text: "Tous les devis émis sont valables pendant 30 jours calendaires à compter de la date d'émission.",
  },
  nl: {
    title: "Algemene Voorwaarden",
    subtitle: "Algemene contract- en gebruiksvoorwaarden van de website.",
    s1Title: "1. Algemene voorwaarden",
    s1Text: "Alle uitgebrachte offertes zijn 30 kalenderdagen geldig vanaf de datum van afgifte.",
  },
};
