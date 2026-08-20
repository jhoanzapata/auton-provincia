import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from "./pages/Landing";
import { LegalNotice } from "./pages/LegalNotice";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { CookiePolicy } from "./pages/CookiePolicy";
import { Accessibility } from "./pages/Accessibility";
import { TermsConditions } from "./pages/TermsConditions";
import { CookieBanner } from "./components/CookieBanner";
import { ScrollToTop } from "./components/ScrollToTop";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/aviso-legal" element={<LegalNotice />} />
        <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
        <Route path="/politica-cookies" element={<CookiePolicy />} />
        <Route path="/accesibilidad" element={<Accessibility />} />
        <Route path="/terminos" element={<TermsConditions />} />
      </Routes>
      <CookieBanner />
      <ScrollToTop />
    </BrowserRouter>
  );
}
