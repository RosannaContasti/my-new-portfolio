"use client";

import { useState, useEffect } from "react";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [locale, setLocale] = useState("en");
  const [messages, setMessages] = useState({});

  useEffect(() => {
    // Cargar idioma desde localStorage
    const savedLocale = localStorage.getItem("locale") || "en";
    setLocale(savedLocale);

    // Cargar mensajes dinámicamente
    import(`../../messages/${savedLocale}.json`)
      .then((module) => setMessages(module.default))
      .catch(() => {
        // Si falla, cargar inglés por defecto
        import(`../../messages/en.json`)
          .then((module) => setMessages(module.default));
      });
  }, []);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
