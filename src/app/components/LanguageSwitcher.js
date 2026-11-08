"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const segments = pathname.split("/");
  const currentLang = segments[1];

  const remainingPath = segments.slice(2).join("/");

  const newLang = currentLang === "en" ? "ar" : "en";

  const languageLabel = currentLang === "en" ? "العربية" : "English";

  const href = `/${newLang}${
    remainingPath ? `/${remainingPath}` : ""
  }`;

  return (
    <Link
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        textDecoration: "none",
      }}
    >
      <span>🌐</span>
      <span>{languageLabel}</span>
    </Link>
  );
}