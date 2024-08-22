"use client";

import {
  locales,
  usePathname,
  useRouter,
  type Locale,
} from "@/i18n.config";

export default function LocaleSwitcher({
  locale,
}: {
  locale: Locale;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const getNextLocale = (currentLocale: Locale) => {
    const currentIndex = locales.indexOf(currentLocale);
    const nextIndex = (currentIndex + 1) % locales.length;
    return locales[nextIndex];
  };

  const changeLang = () => {
    const newLocale = getNextLocale(locale);
    router.replace(pathname, { locale: newLocale });
  };
  const switchText = () => {
    if (locale === "en") {
      return "العربية";
    } else if (locale === "ar") {
      return "English";
    }
  };
  return (
    <div className="lang-switch flex h-full items-center justify-center">
      <button
        className="lang-dropdown-select flex cursor-pointer flex-row items-center justify-center gap-[10px] lg:px-[0px] px-[20px] border-x-[2px] border-[#ffffff80]"
        style={{ direction: "ltr" }}
        onClick={changeLang}
      >
        <span className="vo-navbar-links lg:!text-black">
          {switchText()}
        </span>
      </button>
    </div>
  );
}
