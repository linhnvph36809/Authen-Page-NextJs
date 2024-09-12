"use client";
import { useTranslation } from "react-i18next";
import "../i18n";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <html lang="en">
      <body>
        <div className="flex gap-x-2">
          <button className="text-sm" onClick={() => changeLanguage("en")}>
            English
          </button>
          <button className="text-sm" onClick={() => changeLanguage("vi")}>
            Tiếng Việt
          </button>
        </div>
        {children}
        <script src="https://cdn.tailwindcss.com"></script>
      </body>
    </html>
  );
}
