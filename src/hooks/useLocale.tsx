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
    
    // Disparar evento personalizado para que el layout recargue
    window.dispatchEvent(new Event("localeChange"));
    
    // Recargar la página para aplicar cambios
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  return { locale, setLocale };
}