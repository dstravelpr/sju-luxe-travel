import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";

const content = {
  en: {
    title: "Privacy Policy | SJU Luxe Travel",
    description:
      "Privacy policy for SJU Luxe Travel. Learn how we collect, use, and protect your personal information.",
    canonical: "https://www.sjuluxetravel.com/privacy",
    breadcrumbHome: "Home",
    breadcrumbPrivacy: "Privacy Policy",
    h1: "Privacy Policy",
    lastUpdated: "Last updated: April 12, 2026",
    introTitle: "1. Introduction",
    introBody:
      'SJU Luxe Travel ("we," "us," or "our") is a boutique luxury travel agency based in San Juan, Puerto Rico. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://www.sjuluxetravel.com" class="text-gold underline">www.sjuluxetravel.com</a> or interact with our services.',
    infoCollectTitle: "2. Information We Collect",
    infoProvidedTitle: "Personal Information You Provide",
    infoProvidedIntro:
      "When you contact us through our website, email, or phone, we may collect:",
    infoProvidedItems: [
      "Full name",
      "Email address",
      "Phone number",
      "Travel preferences and itinerary details",
      "Any other information you voluntarily provide",
    ],
    infoAutoTitle: "Information Collected Automatically",
    infoAutoIntro:
      "When you visit our website, we automatically collect certain information, including:",
    infoAutoItems: [
      "IP address and approximate location",
      "Browser type and operating system",
      "Pages visited and time spent on pages",
      "Referring website or source",
      "Device information",
    ],
    cookiesTitle: "3. Cookies & Tracking Technologies",
    metaTitle: "Meta (Facebook) Pixel",
    metaBody:
      'We use the Meta Pixel to measure the effectiveness of our advertising, understand how visitors use our website, and deliver relevant advertisements. The Meta Pixel collects data such as pages visited, actions taken, and device information. This data is shared with Meta Platforms, Inc. You can learn more about Meta\'s data practices at <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" class="text-gold underline">Meta\'s Privacy Policy</a>.',
    optOutTitle: "Opting Out",
    optOutBody:
      'You can opt out of interest-based advertising through the <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" class="text-gold underline">Digital Advertising Alliance</a> or by adjusting your browser settings to block cookies.',
    gaTitle: "Google Analytics",
    gaBody:
      'We use Google Analytics 4 to understand how visitors find and use our website, including pages visited, traffic sources, approximate location, and device information. This helps us improve our content and services. Google Analytics uses cookies to distinguish visitors and sessions. Data is processed by Google LLC. You can learn more about Google\'s data practices at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="text-gold underline">https://policies.google.com/privacy</a>, and opt out of Google Analytics tracking at <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" class="text-gold underline">https://tools.google.com/dlpage/gaoptout</a>.',
    useInfoTitle: "4. How We Use Your Information",
    useInfoItems: [
      "To respond to your inquiries and provide travel planning services",
      "To create and manage bespoke travel itineraries",
      "To communicate with you about your travel plans",
      "To improve our website and services",
      "To measure advertising effectiveness",
      "To comply with legal obligations",
    ],
    sharingTitle: "5. Sharing Your Information",
    sharingIntro:
      "We do not sell your personal information. We may share your information with:",
    sharingItems: [
      "<strong>Travel partners</strong> — hotels, airlines, cruise lines, and tour operators necessary to fulfill your travel bookings",
      "<strong>NCM Concierge / Travel Leaders</strong> — our host travel agency network, as needed to process bookings",
      "<strong>Meta Platforms</strong> — through the Meta Pixel for advertising purposes",
      "<strong>Google LLC</strong> — through Google Analytics for website analytics purposes",
      "<strong>Legal authorities</strong> — when required by law or to protect our rights",
    ],
    securityTitle: "6. Data Security",
    securityBody:
      "We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your data.",
    rightsTitle: "7. Your Rights",
    rightsIntro:
      "Depending on your location, you may have the right to:",
    rightsItems: [
      "Access the personal information we hold about you",
      "Request correction of inaccurate information",
      "Request deletion of your personal information",
      "Opt out of marketing communications",
      "Opt out of the sale or sharing of personal information (California residents under CCPA)",
    ],
    rightsContact:
      'To exercise any of these rights, please contact us at <a href="mailto:info@sjuluxetravel.com" class="text-gold underline">info@sjuluxetravel.com</a>.',
    childrenTitle: "8. Children's Privacy",
    childrenBody:
      "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.",
    changesTitle: "9. Changes to This Policy",
    changesBody:
      'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date.',
    contactTitle: "10. Contact Us",
    contactIntro: "If you have questions about this Privacy Policy, please contact us:",
    contactName: "SJU Luxe Travel",
    contactLocation: "San Juan, Puerto Rico",
    contactEmailLabel: "Email:",
    contactPhoneLabel: "Phone:",
    contactEmail: "info@sjuluxetravel.com",
    contactPhone: "(617) 935-5714",
  },
  es: {
    title: "Política de Privacidad | SJU Luxe Travel",
    description:
      "Política de privacidad de SJU Luxe Travel. Conozca cómo recopilamos, usamos y protegemos su información personal.",
    canonical: "https://www.sjuluxetravel.com/privacy",
    breadcrumbHome: "Inicio",
    breadcrumbPrivacy: "Política de Privacidad",
    h1: "Política de Privacidad",
    lastUpdated: "Última actualización: 12 de abril de 2026",
    introTitle: "1. Introducción",
    introBody:
      'SJU Luxe Travel ("nosotros") es una agencia de viajes de lujo boutique con sede en San Juan, Puerto Rico. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información cuando visita nuestro sitio web <a href="https://www.sjuluxetravel.com" class="text-gold underline">www.sjuluxetravel.com</a> o interactúa con nuestros servicios.',
    infoCollectTitle: "2. Información que Recopilamos",
    infoProvidedTitle: "Información Personal que Usted Proporciona",
    infoProvidedIntro:
      "Cuando se comunica con nosotros a través de nuestro sitio web, correo electrónico o teléfono, podemos recopilar:",
    infoProvidedItems: [
      "Nombre completo",
      "Dirección de correo electrónico",
      "Número de teléfono",
      "Preferencias de viaje y detalles del itinerario",
      "Cualquier otra información que nos proporcione voluntariamente",
    ],
    infoAutoTitle: "Información Recopilada Automáticamente",
    infoAutoIntro:
      "Cuando visita nuestro sitio web, recopilamos automáticamente cierta información, incluyendo:",
    infoAutoItems: [
      "Dirección IP y ubicación aproximada",
      "Tipo de navegador y sistema operativo",
      "Páginas visitadas y tiempo dedicado a las páginas",
      "Sitio web de referencia o fuente",
      "Información del dispositivo",
    ],
    cookiesTitle: "3. Cookies y Tecnologías de Rastreo",
    metaTitle: "Meta (Facebook) Pixel",
    metaBody:
      'Utilizamos el Meta Pixel para medir la efectividad de nuestra publicidad, entender cómo los visitantes usan nuestro sitio web y entregar anuncios relevantes. El Meta Pixel recopila datos como las páginas visitadas, las acciones realizadas y la información del dispositivo. Estos datos se comparten con Meta Platforms, Inc. Puede obtener más información sobre las prácticas de datos de Meta en la <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" class="text-gold underline">Política de Privacidad de Meta</a>.',
    optOutTitle: "Opciones de Exclusión",
    optOutBody:
      'Puede optar por no recibir publicidad basada en intereses a través de la <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" class="text-gold underline">Alianza de Publicidad Digital</a> o ajustando la configuración de su navegador para bloquear cookies.',
    gaTitle: "Google Analytics",
    gaBody:
      'Utilizamos Google Analytics 4 para entender cómo los visitantes encuentran y usan nuestro sitio web, incluyendo páginas visitadas, fuentes de tráfico, ubicación aproximada e información del dispositivo. Esto nos ayuda a mejorar nuestro contenido y servicios. Google Analytics utiliza cookies para distinguir visitantes y sesiones. Los datos son procesados por Google LLC. Puede conocer más sobre las prácticas de datos de Google en <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="text-gold underline">https://policies.google.com/privacy</a> y desactivar el rastreo de Google Analytics en <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" class="text-gold underline">https://tools.google.com/dlpage/gaoptout</a>.',
    useInfoTitle: "4. Cómo Usamos su Información",
    useInfoItems: [
      "Para responder a sus consultas y proporcionar servicios de planificación de viajes",
      "Para crear y gestionar itinerarios de viaje personalizados",
      "Para comunicarnos con usted sobre sus planes de viaje",
      "Para mejorar nuestro sitio web y servicios",
      "Para medir la efectividad de la publicidad",
      "Para cumplir con obligaciones legales",
    ],
    sharingTitle: "5. Compartir su Información",
    sharingIntro:
      "No vendemos su información personal. Podemos compartir su información con:",
    sharingItems: [
      "<strong>Socios de viaje</strong> — hoteles, aerolíneas, líneas de cruceros y operadores turísticos necesarios para cumplir con sus reservas de viaje",
      "<strong>NCM Concierge / Travel Leaders</strong> — nuestra red de agencias de viajes anfitrionas, según sea necesario para procesar reservas",
      "<strong>Meta Platforms</strong> — a través del Meta Pixel para fines publicitarios",
      "<strong>Google LLC</strong> — a través de Google Analytics para fines de analítica web",
      "<strong>Autoridades legales</strong> — cuando lo exija la ley o para proteger nuestros derechos",
    ],
    securityTitle: "6. Seguridad de los Datos",
    securityBody:
      "Implementamos medidas de seguridad razonables para proteger su información personal. Sin embargo, ningún método de transmisión por internet es 100% seguro. No podemos garantizar la seguridad absoluta de sus datos.",
    rightsTitle: "7. Sus Derechos",
    rightsIntro:
      "Dependiendo de su ubicación, puede tener derecho a:",
    rightsItems: [
      "Acceder a la información personal que tenemos sobre usted",
      "Solicitar la corrección de información inexacta",
      "Solicitar la eliminación de su información personal",
      "Optar por no recibir comunicaciones de marketing",
      "Optar por no vender o compartir información personal (residentes de California bajo la CCPA)",
    ],
    rightsContact:
      'Para ejercer cualquiera de estos derechos, contáctenos en <a href="mailto:info@sjuluxetravel.com" class="text-gold underline">info@sjuluxetravel.com</a>.',
    childrenTitle: "8. Privacidad de los Menores",
    childrenBody:
      "Nuestros servicios no están dirigidos a personas menores de 18 años. No recopilamos intencionalmente información personal de menores.",
    changesTitle: "9. Cambios a Esta Política",
    changesBody:
      'Podemos actualizar esta Política de Privacidad de vez en cuando. Los cambios se publicarán en esta página con una fecha de "Última actualización" actualizada.',
    contactTitle: "10. Contáctenos",
    contactIntro:
      "Si tiene preguntas sobre esta Política de Privacidad, contáctenos:",
    contactName: "SJU Luxe Travel",
    contactLocation: "San Juan, Puerto Rico",
    contactEmailLabel: "Correo:",
    contactPhoneLabel: "Teléfono:",
    contactEmail: "info@sjuluxetravel.com",
    contactPhone: "(617) 935-5714",
  },
};

const HtmlList = ({ items }: { items: string[] }) => (
  <ul className="list-disc pl-6 space-y-1">
    {items.map((item, idx) => (
      <li
        key={idx}
        className="text-foreground/90 font-body leading-relaxed"
        dangerouslySetInnerHTML={{ __html: item }}
      />
    ))}
  </ul>
);

const Privacy = () => {
  const { language, localPath } = useLanguage();
  const t = content[language];

  return (
    <Layout>
      <SEOHead
        title={t.title}
        description={t.description}
        canonical={t.canonical}
        breadcrumbs={[
          { name: t.breadcrumbHome, url: "https://www.sjuluxetravel.com" },
          { name: t.breadcrumbPrivacy, url: "https://www.sjuluxetravel.com/privacy" },
        ]}
      />

      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            {t.h1}
          </h1>
          <p className="text-muted-foreground mb-12">{t.lastUpdated}</p>

          <div className="space-y-10 text-foreground/90 font-body leading-relaxed">
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-3">
                {t.introTitle}
              </h2>
              <p dangerouslySetInnerHTML={{ __html: t.introBody }} />
            </div>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-3">
                {t.infoCollectTitle}
              </h2>
              <h3 className="font-heading text-lg text-foreground mt-4 mb-2">
                {t.infoProvidedTitle}
              </h3>
              <p className="mb-3">{t.infoProvidedIntro}</p>
              <HtmlList items={t.infoProvidedItems} />

              <h3 className="font-heading text-lg text-foreground mt-4 mb-2">
                {t.infoAutoTitle}
              </h3>
              <p className="mb-3">{t.infoAutoIntro}</p>
              <HtmlList items={t.infoAutoItems} />
            </div>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-3">
                {t.cookiesTitle}
              </h2>
              <h3 className="font-heading text-lg text-foreground mt-4 mb-2">
                {t.metaTitle}
              </h3>
              <p dangerouslySetInnerHTML={{ __html: t.metaBody }} />
              <h3 className="font-heading text-lg text-foreground mt-4 mb-2">
                {t.optOutTitle}
              </h3>
              <p dangerouslySetInnerHTML={{ __html: t.optOutBody }} />
              <h3 className="font-heading text-lg text-foreground mt-4 mb-2">
                {t.gaTitle}
              </h3>
              <p dangerouslySetInnerHTML={{ __html: t.gaBody }} />
            </div>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-3">
                {t.useInfoTitle}
              </h2>
              <HtmlList items={t.useInfoItems} />
            </div>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-3">
                {t.sharingTitle}
              </h2>
              <p>{t.sharingIntro}</p>
              <div className="mt-3">
                <HtmlList items={t.sharingItems} />
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-3">
                {t.securityTitle}
              </h2>
              <p>{t.securityBody}</p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-3">
                {t.rightsTitle}
              </h2>
              <p className="mb-3">{t.rightsIntro}</p>
              <HtmlList items={t.rightsItems} />
              <p
                className="mt-3"
                dangerouslySetInnerHTML={{ __html: t.rightsContact }}
              />
            </div>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-3">
                {t.childrenTitle}
              </h2>
              <p>{t.childrenBody}</p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-3">
                {t.changesTitle}
              </h2>
              <p>{t.changesBody}</p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-3">
                {t.contactTitle}
              </h2>
              <p>{t.contactIntro}</p>
              <ul className="list-none mt-3 space-y-1">
                <li>
                  <strong>{t.contactName}</strong>
                </li>
                <li>{t.contactLocation}</li>
                <li>
                  {t.contactEmailLabel}{" "}
                  <a
                    href={`mailto:${t.contactEmail}`}
                    className="text-gold underline"
                  >
                    {t.contactEmail}
                  </a>
                </li>
                <li>
                  {t.contactPhoneLabel}{" "}
                  <a
                    href={`tel:+16179355714`}
                    className="text-gold underline"
                  >
                    {t.contactPhone}
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-12 pt-6 border-t border-gold/20 text-sm text-muted-foreground">
              <Link to={localPath("/")} className="text-gold hover:text-gold-light underline">
                {language === "es" ? "← Volver al inicio" : "← Back to home"}
              </Link>
              {" · "}
              <Link to={localPath("/contact")} className="text-gold hover:text-gold-light underline">
                {language === "es" ? "Contáctanos" : "Contact us"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
