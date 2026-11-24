import type { ContentTranslation, Messages } from "../i18n";

const notFound = { title: "Page introuvable", back: "Retour à l’accueil" };

export const messages: Messages = {
  name: "Erfan Asadi",
  siteName: "Living Workbench",
  description: "Erfan Asadi est responsable technique frontend et ingénieur produit spécialisé en IA. Découvrez ses études de cas et ses publications scientifiques.",
  skip: "Aller au contenu",
  nav: {
    home: "Accueil", homeLabel: "Erfan Asadi, accueil", main: "Navigation principale",
    work: "Projets", about: "À propos", contact: "Contact",
    education: "Formation", publications: "Publications", resumePdf: "CV au format PDF",
    language: "Langue", search: "Rechercher", searchLabel: "Rechercher des pages et des projets",
    palette: "Palette de commandes", close: "Fermer la palette de commandes",
    placeholder: "Rechercher des pages et des projets…", empty: "Aucune commande correspondante.",
    navigate: "Navigation", cases: "Études de cas",
  },
  home: {
    intro: "Responsable technique frontend et ingénieur produit spécialisé en IA.",
    tagline: "Une ingénierie rigoureuse.", taglineEmphasis: "Un esprit joueur.",
    viewWork: "Voir les projets", welcome: "Bienvenue !", scroll: "Défiler vers le bas",
    portfolio: "Portfolio", selectedWork: "Projets sélectionnés",
    workAlt: "Illustration d’Erfan Asadi travaillant sur un ordinateur portable à côté d’un carnet ouvert",
    career: "Parcours", experience: "Expérience",
    experienceAlt: "Illustration d’Erfan Asadi présentant un tableau de projet à son équipe au bureau",
    thesis: "Mémoire", graduationAlt: "Erfan Asadi en tenue de remise des diplômes",
    researchAlt: "Erfan Asadi prenant des notes de recherche dans une bibliothèque universitaire",
    readPaper: "Lire l’article", newTab: "s’ouvre dans un nouvel onglet",
    aboutTitle: "Quelques mots sur moi",
    bio: "Chez NotionWave, je dirige le développement frontend de la plateforme de revues scientifiques de la Banque égyptienne du savoir. J’ai aussi créé des produits de formation en ligne et intégré des agents IA à un espace de travail pour données personnelles.",
    researchBio: "Je suis également titulaire d’un master en intelligence artificielle de l’université Kharazmi, où j’ai travaillé sur l’évaluation de la qualité vidéo sans référence.",
    download: "Télécharger le PDF", talk: "Échangeons", email: "E-mail", phone: "Téléphone",
  },
  resume: "CV",
  work: {
    title: "Études de cas d’ingénierie",
    description: "Une sélection d’études de cas d’Erfan Asadi sur les flux de travail avec des agents, le développement frontend et l’IA appliquée.",
    intro: "Découvrez les produits, mon rôle et les décisions techniques derrière chaque projet.",
    all: "Toutes les études de cas", read: "Lire l’étude de cas", readFor: "Lire l’étude de cas de {project}",
    migration: "Migration page par page", legacyRoutes: "Anciennes routes", newRoutes: "Nouvelles routes",
    role: "Rôle", stack: "Technologies", details: "Détails de l’étude de cas", view: "Vue de l’étude de cas",
    experience: "Expérience", engineering: "Côté technique",
    artwork: {
      troweb: "Logo de Troweb sur fond bleu",
      doexam: "Logo de DoExam devant des écrans d’évaluation en ligne",
      "lc-bvqa": "Grille d’images vidéo représentant différentes scènes",
    },
  },
  notFound,
};

export const content: ContentTranslation = {
  projects: {
    ekb: {
      category: "Modernisation frontend",
      title: "Modernisation d’une plateforme de revues scientifiques",
      summary: "Une refonte progressive de la plateforme de revues de la Banque égyptienne du savoir avec React, Next.js et une interface bilingue.",
      role: "Responsable technique frontend chez NotionWave",
      experience: [
        { title: "Le problème", body: "La plateforme de revues scientifiques de la Banque égyptienne du savoir devait renouveler son frontend tout en permettant aux utilisateurs de continuer à travailler dans le système PHP existant." },
        { title: "Mon rôle", body: "Je dirige quatre ingénieurs frontend chez NotionWave, définis les standards d’architecture et de composants et collabore avec les équipes backend et produit à la refonte de la plateforme." },
      ],
      engineering: [
        { title: "Migration page par page", body: "Nous migrons les routes vers React et Next.js sous le chemin /new, une page à la fois. Le système historique continue ainsi de prendre en charge les usages existants pendant la migration." },
        { title: "Interface bilingue et API typées", body: "L’interface prend en charge l’arabe et l’anglais, y compris l’affichage de droite à gauche. Nous utilisons Orval pour générer des clients typés à partir de la spécification OpenAPI." },
      ],
    },
    troweb: {
      category: "IA agentique",
      title: "Un espace de travail pour les données",
      summary: "Un espace de travail pour données personnelles qui réunit des flux multi-agents dans une application web.",
      role: "Responsable technique frontend et développeur d’agents IA",
      linkLabel: "Visiter Troweb",
      experience: [
        { title: "Le problème", body: "Les utilisateurs d’un espace de données personnelles doivent pouvoir traiter leurs données sans quitter l’application. Troweb réunit ces tâches et les flux assistés par IA dans le même produit." },
        { title: "Mon rôle", body: "De 2023 à 2026, j’ai piloté le développement frontend chez NotionWave, encadré trois ingénieurs frontend seniors et supervisé l’architecture, la revue de code et les livraisons." },
      ],
      engineering: [
        { title: "Remplacement progressif du frontend", body: "J’ai remplacé l’ancien frontend par étapes dans le cadre de la migration frontend-v2. Ce remplacement progressif a permis de maintenir l’application disponible en production." },
        { title: "Orchestration d’agents indépendante du modèle", body: "J’ai intégré des agents LangChain et LangGraph au moyen d’une couche compatible avec GPT, Claude et Gemini. Les agents automatisaient les tâches dans l’espace de données personnelles." },
      ],
    },
    doexam: {
      category: "Ingénierie frontend",
      title: "Évaluation en ligne du primaire au lycée",
      summary: "Une plateforme d’examens en ligne avec une interface bilingue, des rapports de résultats et une correction asynchrone.",
      role: "Développeur frontend",
      linkLabel: "Visiter DoExam",
      experience: [
        { title: "Le problème", body: "Lorsqu’un examen en ligne à grande échelle commence à une heure commune, la distribution des sujets et la correction dans le flux de passage de l’examen peuvent provoquer un pic de charge." },
        { title: "Mon rôle", body: "Chez NotionWave, j’ai construit l’interface d’examen en anglais et en persan, y compris l’affichage de droite à gauche, ainsi que les rapports de résultats pour les élèves et les groupes." },
      ],
      engineering: [
        { title: "Distribution des sujets d’examen", body: "Nous mettions à l’avance les dossiers d’examen chiffrés en cache sur le CDN et publiions les clés de déchiffrement au début de l’épreuve. Les élèves pouvaient recevoir l’essentiel des données avant le lancement commun." },
        { title: "Correction indépendante", body: "J’ai créé un module de correction asynchrone pour dissocier la correction des sessions d’examen en cours." },
      ],
    },
    "lc-bvqa": {
      category: "IA appliquée",
      title: "Estimer la qualité vidéo sans référence",
      summary: "Un système d’apprentissage profond à faible complexité pour évaluer la qualité vidéo sans référence.",
      role: "Recherche et mise en œuvre",
      linkLabel: "Voir le code source",
      experience: [
        { title: "Le problème", body: "L’évaluation sans référence estime la qualité perceptuelle d’une vidéo à partir de la seule vidéo examinée. Elle est utile quand aucune version originale non dégradée n’est disponible." },
        { title: "Mon rôle", body: "Dans le cadre de mon master en intelligence artificielle, j’ai développé un système d’apprentissage profond à faible complexité pour cette tâche." },
      ],
      engineering: [
        { title: "Traitement et évaluation", body: "L’implémentation publique sépare l’extraction des images, l’extraction des caractéristiques, l’agrégation et la régression à vecteurs de support. Elle utilise OpenCV pour le traitement vidéo, PyTorch et CUDA pour le modèle, et scikit-learn pour l’évaluation." },
        { title: "Un choix de conception", body: "Estimer la qualité d’une vidéo suppose de déterminer le coût de calcul à consacrer à l’extraction des caractéristiques de ses images. Le projet explore ce compromis avec un traitement des caractéristiques à faible complexité." },
      ],
    },
  },
  experience: [
    { role: "Responsable technique frontend", period: "Depuis 2026", detail: "Je dirige l’équipe frontend qui refond la plateforme de revues scientifiques de la Banque égyptienne du savoir." },
    { role: "Responsable technique frontend et développeur d’agents IA", period: "2023–2026", detail: "J’ai piloté le développement frontend et intégré des agents IA à un espace de données personnelles." },
    { role: "Développeur frontend", period: "2021–2023", detail: "J’ai créé l’interface d’examen bilingue, les rapports de résultats et la correction asynchrone." },
    { role: "Développeur d’applications web", period: "2019–2021", detail: "J’ai développé une plateforme intégrant salle de classe virtuelle, banque de questions et outils d’évaluation." },
  ],
  education: [
    { degree: "Master en intelligence artificielle", institution: "Université Kharazmi", location: "Téhéran, Iran", thesis: "Évaluation de la qualité vidéo sans référence à faible complexité", honor: "Bourse nationale pour talents exceptionnels" },
    { degree: "Licence en génie informatique", institution: "Université du Guilan", location: "Racht, Iran", thesis: "Extraction de métadonnées à partir d’articles scientifiques", honor: "Diplômé avec distinction pour l’excellence du parcours" },
  ],
  publications: [
    { venue: "MVIP 2026 · Accepté", award: null, summary: "Évalue la qualité des images générées par IA à partir de caractéristiques visuelles sensibles aux fréquences et de la cohérence sémantique." },
    { venue: "IPRIA 2025", award: "Prix du meilleur article", summary: "Exploite les corrélations entre des caractéristiques finement ajustées pour estimer la qualité d’une vidéo sans référence." },
    { venue: "Ateliers IEEE/CVF CVPR · 2024", award: null, summary: "Présente un défi comparant des méthodes d’évaluation de la qualité perceptuelle des images et vidéos générées par IA." },
  ],
};
