// app/layout.tsx
import "@/app/globals.css";
// import "@/app/text-img-slider.css";

import { locales } from "@/i18n.config";
import "@fontsource/poppins";
import {
  NextIntlClientProvider,
  useTranslations,
} from "next-intl";
import {
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import localFont from "next/font/local";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import useTextDirection from "../hooks/useTextDirection";


//English Fonts
// const CircularStd= localFont({
//   src: [
//     {
//       path: "../fonts/CircularStd.otf",
//       weight: "400",
//     },
//   ],
//   variable: "--font-circularStd",
// });
const Montserrat = localFont({
  src: [
    {
      path: "../fonts/Montserrat.ttf",
      weight: "400",
    },
  ],
  variable: "--font-montserrat",
});

// Arabic Fonts
const GeLight = localFont({
  src: [
    {
      path: "../fonts/GeLight.otf",
    },
  ],
  variable: "--font-ge-light",
});
const GeMedium = localFont({
  src: [
    {
      path: "../fonts/GeMedium.otf",
    },
  ],
  variable: "--font-ge-medium",
});
const GeBold = localFont({
  src: [
    {
      path: "../fonts/GeBold.otf",
    },
  ],
  variable: "--font-ge-bold",
});




export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale,
    namespace: "Layout.metaData",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  const dir = useTextDirection();
  const header = useTranslations("Header");
  const navLinksData = {
    home: header("home"),
    aboutUs: header("about-us"),
  };

  return (
    <html lang={locale} dir={dir}>
      <head>
        {/* Other meta tags, stylesheets, etc. */}
        <link rel="icon" href="/ov-logo.svg" />
      </head>
      <body
      className={` ${GeLight.variable} ${GeMedium.variable} ${GeBold.variable} ${Montserrat.variable} font-sans light`}
      >
        <NextIntlClientProvider locale={locale}>
          <Header
            navLinksData={navLinksData}
            locale={locale}
          />
          {children}
          
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
