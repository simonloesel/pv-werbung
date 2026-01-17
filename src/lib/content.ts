// Content-Bausteine für die gesamte Website

export const heroContent = {
  h1: "PV auf Ihrem Standort – Anlage entwickeln lassen und Strom direkt abnehmen",
  subline: "Sie stellen die Fläche (Dach/Fassade/Parkplatz/Freifläche). Wir entwickeln, finanzieren und realisieren die PV-Anlage – und Sie beziehen den Strom langfristig zu planbaren Konditionen.",
  ctaPrimary: { text: "Projekt prüfen lassen", href: "/projekt" },
  ctaSecondary: { text: "So funktioniert's", href: "/loesung" },
  trustBar: ["Standortanalyse", "Wirtschaftlichkeitsmodell", "Genehmigungen", "EPC-Steuerung", "Finanzierung", "Betrieb"],
};

export const targetRoles = [
  {
    title: "Unternehmen",
    description: "Fläche + Strombedarf",
  },
  {
    title: "Kommunen",
    description: "Flächeneffizienz & lokale Erzeugung",
  },
  {
    title: "Generalunternehmer/EPC",
    description: "baureife Pipeline",
  },
  {
    title: "Investoren",
    description: "strukturierte Projekte",
  },
];

export const corePromises = [
  {
    title: "Stromkosten senken",
    description: "durch direkten PV-Strom am Standort",
  },
  {
    title: "Planungssicherheit",
    description: "durch langfristige Liefer- und Nutzungsstruktur",
  },
  {
    title: "Zero-Hassle",
    description: "Entwicklung, Partner, Genehmigungen, Umsetzung aus einer Hand",
  },
];

export const modelSection = {
  headline: "Ein Vertrag. Ein Projekt. Ein klarer Vorteil.",
  points: [
    "Sie ermöglichen die Anlage (Flächenbereitstellung)",
    "Wir strukturieren Entwicklung, EPC und Finanzierung",
    "Sie nehmen Strom ab (Onsite/PPA) und profitieren sofort",
  ],
  cta: { text: "Projekt starten", href: "/projekt" },
};

export const processSteps = [
  {
    number: 1,
    title: "Daten erfassen",
    description: "Fläche, Anschluss, Lastprofil",
  },
  {
    number: 2,
    title: "Machbarkeit",
    description: "Statik/Netz/Ertrag/Wirtschaftlichkeit",
  },
  {
    number: 3,
    title: "Strukturierung",
    description: "Pacht/Nutzung, Stromlieferung, EPC, Invest",
  },
  {
    number: 4,
    title: "Genehmigung & Bau",
    description: "Partnerkoordination, Bau, Inbetriebnahme",
  },
  {
    number: 5,
    title: "Betrieb",
    description: "Monitoring, Service, Reporting",
  },
];

export const companyBenefits = [
  "Planbarer Strompreis (langfristig)",
  "Reduktion Netzbezug & Preisvolatilität",
  "ESG/CO₂-Reporting",
  "Keine eigene Projektsteuerung notwendig",
  "Optional: Ladeinfrastruktur/Lastmanagement integrierbar",
];

export const leadCtaSection = {
  headline: "In 3 Minuten prüfen lassen, ob Ihr Standort geeignet ist.",
  cta: { text: "Eignungscheck starten", href: "/projekt" },
};

// CTA Variationen
export const ctaVariations = {
  eligibilityCheck: "Eignungscheck starten",
  checkLocation: "Standort prüfen lassen",
  requestProject: "Projekt unverbindlich anfragen",
};

// Benefits für Vorteile-Seite
export const benefitsContent = {
  unternehmen: {
    title: "Unternehmen",
    subtitle: "Fläche + Stromabnahme",
    categories: {
      kosten: {
        title: "Kosten",
        points: [
          "Planbarer Bezugspreis für PV-Strom direkt am Standort",
          "Geringere Spitzenlasten durch Eigenversorgung",
          "Weniger Netzstrom, mehr Versorgungssicherheit",
        ],
      },
      risiko: {
        title: "Risiko",
        points: [
          "Kein Bau-/EPC-Handling erforderlich",
          "Vertragliche Garantien für Leistung und Verfügbarkeit",
          "Klare SLAs für Wartung und Monitoring",
        ],
      },
      nachhaltigkeit: {
        title: "Nachhaltigkeit",
        points: [
          "CO₂-Reduktion durch erneuerbare Energie",
          "ESG-Kennzahlen verbessern",
          "Positive Wirkung auf Kunden und Stakeholder",
        ],
      },
      betrieb: {
        title: "Betrieb",
        points: [
          "Automatisches Monitoring der Anlagenleistung",
          "Wartung und Service inklusive",
          "Regelmäßiges Reporting zu Erzeugung und Verbrauch",
        ],
      },
    },
  },
  kommunen: {
    title: "Kommunen",
    subtitle: "Flächeneffizienz & lokale Erzeugung",
    points: [
      "Flächeneffiziente Nutzung von Dächern und Freiflächen",
      "Lokale Erzeugung für lokalen Verbrauch",
      "Beitrag zu Klimazielen und Energiewende",
      "Erhöhte Standortattraktivität für Unternehmen",
      "Transparente Kommunikation mit Bürgern und Stakeholdern",
      "Optionale Einbindung lokaler Wertschöpfung",
    ],
  },
  epc: {
    title: "EPC/Generalunternehmer",
    subtitle: "baureife Pipeline",
    points: [
      "Baureife Projekt-Pipeline ohne eigene Akquise",
      "Klare Spezifikationen und Anforderungen",
      "Weniger Verhandlung, mehr Realisierung",
      "Standardisierte Prozesse und Ausschreibungen",
      "Lange Laufzeiten und wiederkehrende Aufträge",
    ],
  },
  investoren: {
    title: "Investoren",
    subtitle: "strukturierte Projekte",
    points: [
      "Strukturierte Projekte mit definierten Cashflows",
      "ESG-konforme Investitionen",
      "Klare Risiko- und Rollenallokation",
      "Langfristige PPA-Verträge mit stabilen Erlösen",
      "Professionelles Projektmanagement inklusive",
    ],
  },
};

// Lösungsseite Content
export const solutionContent = {
  whatIs: {
    title: "Was bedeutet Onsite-PV + Stromabnahme?",
    description:
      "Onsite-PV bedeutet, dass die Photovoltaik-Anlage direkt auf oder bei Ihrem Standort installiert wird. Sie nehmen den erzeugten Strom direkt vor Ort ab – entweder über eine Eigenversorgung oder über einen Power Purchase Agreement (PPA). Das senkt Ihre Stromkosten und reduziert Abhängigkeit vom Netz.",
  },
  suitableAreas: {
    title: "Welche Flächen sind geeignet?",
    areas: [
      {
        type: "Dach",
        description: "Dachflächen (Flach- und Schrägdächer) von Gewerbe- und Industriegebäuden",
      },
      {
        type: "Parkplatz",
        description: "Parkflächen mit und ohne Überdachung",
      },
      {
        type: "Freifläche",
        description: "Nicht genutzte Freiflächen auf dem Betriebsgelände",
      },
      {
        type: "Fassade",
        description: "Sonnenseitige Fassadenflächen für gebäudeintegrierte PV",
      },
    ],
  },
  requiredData: {
    title: "Welche Daten werden benötigt?",
    data: [
      "Lastprofil: Wann und wie viel Strom wird verbraucht? Ein 15-Minuten-Lastprofil erhalten Sie von Ihrem Stromversorger. Wir helfen Ihnen gerne bei der Kommunikation.",
      "Netzanschluss: Welche Leistung ist verfügbar? Wir holen diese Information bei Interesse gerne für Sie ein.",
      "Fläche: Größe, Ausrichtung, Verschattung. Bei Interesse analysieren wir die Fläche gerne vor Ort oder via Google Earth.",
      "Statik: Grobe Angaben zur Tragfähigkeit im Falle einer Dachfläche. Selbstverständlich klären wir die Machbarkeit bei Interesse frühzeitig ab.",
    ],
  },
  projectDuration: {
    title: "Typische Projektdauer",
    description:
      "Von der ersten Kontaktaufnahme bis zur Inbetriebnahme vergehen typischerweise 6-18 Monate, abhängig von Genehmigungen, Netzanschluss und Projektgröße. Nach der Machbarkeitsprüfung (2-4 Wochen) erfolgt die Projektstrukturierung, dann Genehmigung und Bauphase.",
  },
  faq: [
    {
      q: "Wer ist für Genehmigungen zuständig?",
      a: "Wir kümmern uns um alle notwendigen Genehmigungen (Bauantrag, Netzanschluss, etc.) und koordinieren dies mit den zuständigen Behörden.",
    },
    {
      q: "Wer haftet bei Schäden?",
      a: "Die Haftung ist vertraglich klar geregelt. Wir und unsere Partner übernehmen die Verantwortung für Planung und Umsetzung.",
    },
    {
      q: "Was passiert mit der Statik?",
      a: "Wir klären die Statik frühzeitig mit Statikern ab. Falls notwendig, werden Verstärkungen in die Planung einbezogen.",
    },
    {
      q: "Wer übernimmt den Rückbau?",
      a: "Der Rückbau ist vertraglich geregelt und wird am Ende der Laufzeit durchgeführt, falls nicht eine Weiterführung vereinbart wird.",
    },
    {
      q: "Welche Laufzeiten sind üblich?",
      a: "Typische Laufzeiten sind 15-20 Jahre für PPA-Verträge. Die genaue Laufzeit wird individuell vereinbart.",
    },
    {
      q: "Wie wird der Strompreis bestimmt?",
      a: "Der Strompreis wird langfristig und planbar vereinbart, oft mit einer Inflationsanpassung. Details werden individuell ausgehandelt.",
    },
  ],
};
