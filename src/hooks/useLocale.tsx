"use client";

import { useState, useEffect } from "react";
import { useLocale as useNextIntlLocale } from "next-intl";

export function useLocale() {
  const currentLocale = useNextIntlLocale();
  const [locale, setLocaleState] = useState(currentLocale);

  useEffect(() => {
    // Cargar idioma guardado en localStorage
    const savedLocale = localStorage.getItem("locale");
    if (savedLocale) {
      setLocaleState(savedLocale);
    }
  }, []);

  const setLocale = (newLocale: string) => {
    localStorage.setItem("locale", newLocale);
    setLocaleState(newLocale);
    window.location.reload(); 
  };

  return { locale, setLocale };
}