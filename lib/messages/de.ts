import type { ContentTranslation, Messages } from "../i18n";

const notFound = { title: "Seite nicht gefunden", back: "Zurück zur Startseite" };

export const messages: Messages = {
  name: "Erfan Asadi",
  siteName: "Living Workbench",
  description: "Erfan Asadi leitet die Frontend-Entwicklung und entwickelt KI-Produkte. Entdecken Sie seine technischen Fallstudien und wissenschaftlichen Veröffentlichungen.",
  skip: "Zum Inhalt springen",
  nav: {
    home: "Startseite", homeLabel: "Erfan Asadi, Startseite", main: "Hauptnavigation",
    work: "Projekte", about: "Über mich", contact: "Kontakt",
    education: "Ausbildung", publications: "Publikationen", resumePdf: "Lebenslauf als PDF",
    language: "Sprache", search: "Suchen", searchLabel: "Seiten und Projekte suchen",
    palette: "Befehlspalette", close: "Befehlspalette schließen",
    placeholder: "Seiten und Projekte suchen…", empty: "Keine passenden Befehle.",
    navigate: "Navigation", cases: "Fallstudien",
  },
  home: {
    intro: "Technischer Leiter für Frontend-Entwicklung und Entwickler von KI-Produkten.",
    tagline: "Sorgfältige Entwicklungsarbeit.", taglineEmphasis: "Spielerisches Denken.",
    viewWork: "Projekte ansehen", welcome: "Willkommen!", scroll: "Nach unten scrollen",
    portfolio: "Portfolio", selectedWork: "Ausgewählte Projekte",
    workAlt: "Illustration von Erfan Asadi beim Tippen an einem Schreibtisch mit Laptop und offenem Skizzenbuch",
    career: "Beruflicher Werdegang", experience: "Berufserfahrung",
    experienceAlt: "Illustration von Erfan Asadi, der seinem Team im Büro eine Projektübersicht erläutert",
    thesis: "Abschlussarbeit", graduationAlt: "Erfan Asadi in Talar und Doktorhut bei der Abschlussfeier",
    researchAlt: "Erfan Asadi schreibt Forschungsnotizen in einer Universitätsbibliothek",
    readPaper: "Artikel lesen", newTab: "öffnet sich in einem neuen Tab",
    aboutTitle: "Ein bisschen über mich",
    bio: "Bei NotionWave leite ich die Frontend-Entwicklung für die Fachzeitschriftenplattform der Egyptian Knowledge Bank. Außerdem habe ich digitale Lernprodukte entwickelt und KI-Agenten in einen Arbeitsbereich für persönliche Daten integriert.",
    researchBio: "Ich habe einen Masterabschluss in Künstlicher Intelligenz von der Kharazmi-Universität. Dort habe ich zur referenzfreien Bewertung von Videoqualität gearbeitet.",
    download: "PDF herunterladen", talk: "Sprechen wir miteinander", email: "E-Mail", phone: "Telefon",
  },
  resume: "Lebenslauf",
  work: {
    title: "Technische Fallstudien",
    description: "Ausgewählte Fallstudien von Erfan Asadi zu Agenten-Workflows, Frontend-Entwicklung und angewandter KI.",
    intro: "Erfahren Sie mehr über die Produkte, meine Rolle und die technischen Entscheidungen hinter den Projekten.",
    all: "Alle Fallstudien", read: "Fallstudie lesen", readFor: "Fallstudie zu {project} lesen",
    migration: "Seitenweise Migration", legacyRoutes: "Bestehende Routen", newRoutes: "Neue Routen",
    role: "Rolle", stack: "Technologien", details: "Details zur Fallstudie", view: "Ansicht der Fallstudie",
    experience: "Erfahrungsbericht", engineering: "Technischer Einblick",
    artwork: {
      troweb: "Troweb-Logo auf blauem Hintergrund",
      doexam: "DoExam-Logo vor Ansichten einer Online-Prüfung",
      "lc-bvqa": "Raster aus Einzelbildern verschiedener Videoszenen",
    },
  },
  notFound,
};

export const content: ContentTranslation = {
  projects: {
    ekb: {
      category: "Frontend-Modernisierung",
      title: "Modernisierung einer Fachzeitschriftenplattform",
      summary: "Ein schrittweiser Neuaufbau der Zeitschriftenplattform der Egyptian Knowledge Bank mit React, Next.js und einer zweisprachigen Oberfläche.",
      role: "Technischer Leiter für Frontend-Entwicklung bei NotionWave",
      experience: [
        { title: "Die Herausforderung", body: "Die Plattform für wissenschaftliche Zeitschriften der Egyptian Knowledge Bank brauchte ein neues Frontend. Die bisherigen Nutzerinnen und Nutzer sollten währenddessen im bestehenden PHP-System weiterarbeiten können." },
        { title: "Meine Rolle", body: "Bei NotionWave leite ich vier Frontend-Entwickler, definiere Standards für Architektur und Komponenten und arbeite mit den Backend- und Produktteams am Umbau der Plattform." },
      ],
      engineering: [
        { title: "Seitenweise Migration", body: "Wir migrieren die Routen Seite für Seite zu React und Next.js unter dem Pfad /new. Währenddessen unterstützt das bisherige System weiterhin die bestehenden Arbeitsabläufe." },
        { title: "Zweisprachige Oberfläche und typisierte APIs", body: "Die Oberfläche unterstützt Arabisch und Englisch, einschließlich eines Layouts von rechts nach links. Mit Orval generieren wir typisierte Clients aus der OpenAPI-Spezifikation." },
      ],
    },
    troweb: {
      category: "Agentenbasierte KI",
      title: "Ein Arbeitsbereich für Daten",
      summary: "Ein Arbeitsbereich für persönliche Daten, der Abläufe mit mehreren KI-Agenten in einer Webanwendung zusammenführt.",
      role: "Technischer Leiter für Frontend und Entwickler von KI-Agenten",
      linkLabel: "Troweb besuchen",
      experience: [
        { title: "Die Herausforderung", body: "Wer mit persönlichen Daten arbeitet, soll Aufgaben direkt im Arbeitsbereich erledigen können. Troweb vereint diese Aufgaben und KI-gestützte Arbeitsabläufe in einem Produkt." },
        { title: "Meine Rolle", body: "Von 2023 bis 2026 leitete ich die Frontend-Entwicklung bei NotionWave. Ich führte ein Team aus drei erfahrenen Frontend-Entwicklern und verantwortete Architektur, Code-Reviews und Auslieferung." },
      ],
      engineering: [
        { title: "Schrittweiser Ersatz des Frontends", body: "Im Rahmen der Migration zu frontend-v2 ersetzte ich das alte Frontend schrittweise. Mit dem Strangler-Muster konnten wir Teile der Anwendung austauschen und den Produktivbetrieb aufrechterhalten." },
        { title: "Modellunabhängige Agenten-Orchestrierung", body: "Ich integrierte LangChain- und LangGraph-Agenten über eine Schicht mit Unterstützung für GPT, Claude und Gemini. Die Agenten automatisierten Aufgaben im Arbeitsbereich für persönliche Daten." },
      ],
    },
    doexam: {
      category: "Frontend-Entwicklung",
      title: "Online-Prüfungen für Schulen",
      summary: "Eine Online-Prüfungsplattform mit zweisprachiger Oberfläche, Leistungsberichten und asynchroner Korrektur.",
      role: "Frontend-Entwickler",
      linkLabel: "DoExam besuchen",
      experience: [
        { title: "Die Herausforderung", body: "Wenn eine große Online-Prüfung für alle gleichzeitig beginnt, kann die Bereitstellung der Prüfungsunterlagen und die Korrektur innerhalb des laufenden Prüfungsablaufs eine Lastspitze verursachen." },
        { title: "Meine Rolle", body: "Bei NotionWave entwickelte ich die Prüfungsoberfläche auf Englisch und Persisch, einschließlich der Rechts-nach-links-Darstellung, sowie Leistungsberichte für einzelne Lernende und Gruppen." },
      ],
      engineering: [
        { title: "Bereitstellung der Prüfungsunterlagen", body: "Wir legten verschlüsselte Prüfungspakete vorab im CDN ab und gaben die Schlüssel zu Prüfungsbeginn frei. Die Lernenden konnten den Großteil der Daten bereits vor dem gemeinsamen Start empfangen." },
        { title: "Entkopplung der Korrektur", body: "Ich entwickelte eine asynchrone Korrekturkomponente, damit die Bewertung unabhängig von den laufenden Prüfungssitzungen erfolgen konnte." },
      ],
    },
    "lc-bvqa": {
      category: "Angewandte KI",
      title: "Videoqualität ohne Referenz schätzen",
      summary: "Ein Deep-Learning-System mit geringer Komplexität zur referenzfreien Bewertung von Videoqualität.",
      role: "Forschung und Implementierung",
      linkLabel: "Quellcode ansehen",
      experience: [
        { title: "Die Herausforderung", body: "Die referenzfreie Bewertung schätzt die wahrgenommene Qualität anhand des Videos selbst. Sie eignet sich für Fälle, in denen kein unverfälschtes Original zum Vergleich verfügbar ist." },
        { title: "Meine Rolle", body: "Im Rahmen meines Masterstudiums in Künstlicher Intelligenz entwickelte ich für diese Aufgabe ein Deep-Learning-System mit geringer Komplexität." },
      ],
      engineering: [
        { title: "Verarbeitung und Auswertung", body: "Die öffentliche Implementierung trennt die Extraktion von Einzelbildern und Merkmalen, das Pooling und die Support-Vektor-Regression. Sie nutzt OpenCV für die Videoverarbeitung, PyTorch und CUDA für das Modell und scikit-learn für die Auswertung." },
        { title: "Eine Entwurfsfrage", body: "Bei der Schätzung von Videoqualität stellt sich die Frage, wie viel Rechenaufwand die Merkmalsextraktion aus Einzelbildern rechtfertigt. Das Projekt untersucht diesen Zielkonflikt anhand einer Merkmalsverarbeitung mit geringer Komplexität." },
      ],
    },
  },
  experience: [
    { role: "Technischer Leiter für Frontend-Entwicklung", period: "Seit 2026", detail: "Ich leite das Frontend-Team beim Neuaufbau der Fachzeitschriftenplattform der Egyptian Knowledge Bank." },
    { role: "Technischer Leiter für Frontend und Entwickler von KI-Agenten", period: "2023–2026", detail: "Ich leitete die Frontend-Entwicklung und integrierte KI-Agenten in einen Arbeitsbereich für persönliche Daten." },
    { role: "Frontend-Entwickler", period: "2021–2023", detail: "Ich entwickelte die zweisprachige Prüfungsoberfläche, Leistungsberichte und eine asynchrone Korrektur." },
    { role: "Webanwendungsentwickler", period: "2019–2021", detail: "Ich entwickelte eine Plattform mit Online-Klassenzimmer, Fragenpool und Prüfungsfunktionen." },
  ],
  education: [
    { degree: "M.Sc. in Künstlicher Intelligenz", institution: "Kharazmi-Universität", location: "Teheran, Iran", thesis: "Referenzfreie Bewertung von Videoqualität mit geringer Komplexität", honor: "Nationales Stipendium für besondere Begabung" },
    { degree: "B.Sc. in Technischer Informatik", institution: "Universität Guilan", location: "Rascht, Iran", thesis: "Extraktion von Metadaten aus wissenschaftlichen Fachartikeln", honor: "Studienabschluss mit Auszeichnung für herausragende Leistungen" },
  ],
  publications: [
    { venue: "MVIP 2026 · Angenommen", award: null, summary: "Bewertet die Qualität KI-generierter Bilder anhand frequenzsensitiver visueller Merkmale und semantischer Konsistenz." },
    { venue: "IPRIA 2025", award: "Preis für den besten Beitrag", summary: "Nutzt Korrelationen zwischen feinabgestimmten Merkmalen, um die Videoqualität ohne Referenzvideo zu schätzen." },
    { venue: "IEEE/CVF CVPR Workshops · 2024", award: null, summary: "Berichtet über einen Wettbewerb zum Vergleich von Verfahren, die die wahrgenommene Qualität KI-generierter Bilder und Videos bewerten." },
  ],
};
