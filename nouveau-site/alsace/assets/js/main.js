/* ==========================================================================
   Timothy Boxho — Photographe (TYBox)
   Architecture Rhénane · Edition Atelier Alsace
   Theme Switcher (Dark/Light + localStorage), Bilingual i18n (FR default / EN),
   Interactive Hero Showcase Plates, Uncropped Masonry Gallery & Lightbox (Arrows/Esc)
   ========================================================================== */

(function () {
  "use strict";

  const STORAGE_THEME = "tybox-theme";
  const STORAGE_LANG = "tybox-lang";

  const HERO_PLATES = [
    {
      src: "../../assets/images/events-montorido-01.jpg",
      altFr: "Reportage événementiel en plein air au Festival Montorido par Timothy Boxho",
      altEn: "Live open-air stage reportage at Montorido Festival by Timothy Boxho",
      tagKey: "hero.p1Badge",
      titleKey: "hero.p1Title",
      href: "evenementiel.html"
    },
    {
      src: "../../assets/images/portrait-vanessa-01.jpg",
      altFr: "Portrait éditorial en lumière naturelle par Timothy Boxho",
      altEn: "Editorial portrait in natural light by Timothy Boxho",
      tagKey: "hero.p2Badge",
      titleKey: "hero.p2Title",
      href: "portraits.html"
    },
    {
      src: "../../assets/images/animalier-01.jpg",
      altFr: "Photographie animalière haute résolution 61 MP par Timothy Boxho",
      altEn: "61 MP wildlife photograph by Timothy Boxho",
      tagKey: "hero.p3Badge",
      titleKey: "hero.p3Title",
      href: "nature-macro.html"
    }
  ];

  const TRANSLATIONS = {
    fr: {
      "nav.brandSub": "Photographe · Strasbourg",
      "nav.home": "Accueil",
      "nav.events": "Événementiel",
      "nav.portraits": "Portraits",
      "nav.nature": "Nature & Macro",
      "nav.services": "Prestations",
      "nav.about": "À propos",
      "nav.contact": "Contact",
      "nav.cta": "Devis",
      "ui.themeToLight": "Passer en mode clair",
      "ui.themeToDark": "Passer en mode sombre",
      "ui.themeLabelLight": "Clair",
      "ui.themeLabelDark": "Sombre",
      "ui.langSwitch": "Switch to English",
      "ui.openMenu": "Ouvrir le menu",
      "ui.closeLightbox": "Fermer la visionneuse",
      "ui.prevPhoto": "Photo précédente",
      "ui.nextPhoto": "Photo suivante",
      "ui.zoomHint": "Agrandir ↗",
      "ui.masonryNote": "Cadrage d'origine respecté (Portrait & Paysage) · Clavier ← → Échap",
      "ui.kbHint": "← → Naviguer · Échap Fermer",
      "ui.seeSeries": "Voir la série →",

      // Hero Cover
      "home.eyebrow": "Strasbourg · Alsace · Est. 2022",
      "home.coords": "48.5734° N · 7.7521° E",
      "home.title": "Écrire par <em>la lumière</em> avec justesse et caractère.",
      "home.lead": "De la plaine du Rhin aux crêtes des Vosges, j'accompagne festivals, entreprises et particuliers en français, anglais et allemand. Événementiel, portrait en studio nomade, macro et faune sauvage.",
      "home.ctaPrimary": "Demander un devis sous 24h",
      "home.ctaSecondary": "Explorer les galeries",
      "hero.p1TabSub": "Reportage · Scène",
      "hero.p2TabSub": "Studio nomade · Extérieur",
      "hero.p3TabSub": "Sony A7R V · 61 MP",
      "hero.p1Badge": "01 / Reportage & Festivals",
      "hero.p1Title": "Festival Montorido 2025",
      "hero.p2Badge": "02 / Portrait d'auteur",
      "hero.p2Title": "Série Éditoriale — Vanessa",
      "hero.p3Badge": "03 / Faune & Observation",
      "hero.p3Title": "Animalier & Nature 61 MP",
      "hero.railGear": "BOÎTIERS",
      "hero.railLang": "LANGUES",

      // Alsace Split Manifesto
      "manifesto.eyebrow": "Territoire & Exigence",
      "manifesto.title": "Entre la plaine d'Alsace et <em>les crêtes des Vosges</em>.",
      "manifesto.note": "Basé à Strasbourg — Interventions Grand Est, France & transfrontalier (DE / CH)",
      "manifesto.l1Title": "Entreprises, Festivals & Institutions",
      "manifesto.l1Desc": "Congrès, soirées networking (CreatorsLounge), scènes culturelles et savoir-faire d'artisans livrés sous 24–48h pour presse et réseaux.",
      "manifesto.l2Title": "Particuliers, Artistes & Studio Nomade",
      "manifesto.l2Desc": "Portraits corporate ou créatifs en lumière naturelle ou avec éclairage portable Godox V100 installé chez vous.",
      "manifesto.l3Title": "Nature, Animalier & Macrophotographie 1:1",
      "manifesto.l3Desc": "Optique Sony 100mm Macro GM et capteur 61 MP pensés pour le tirage Fine Art grand format.",

      // Home Bento Univers
      "home.univEyebrow": "01 // Univers & Séries",
      "home.univTitle": "Quatre disciplines, une seule signature optique.",
      "home.univDesc": "Chaque série préserve l'intensité naturelle de l'instant, sans retouche artificielle ni mise en scène figée.",
      "home.cardEventsTag": "01 · Reportage & Live",
      "home.cardEventsTitle": "Événementiel",
      "home.cardEventsSub": "Festivals, conférences, networking, concerts et soirées d'entreprise.",
      "home.cardPortraitsTag": "02 · Studio Nomade & Lumière Naturelle",
      "home.cardPortraitsTitle": "Portraits",
      "home.cardPortraitsSub": "Portraits créatifs, corporate LinkedIn, artistes et particuliers.",
      "home.cardNatureTag": "03 · Plein Format 61 MP",
      "home.cardNatureTitle": "Animalier, Nature & Macro",
      "home.cardNatureSub": "Faune sauvage, paysages grands espaces et détails macro 1:1.",
      "home.cardAboutTag": "04 · Biographie & Parc Sony / Godox",
      "home.cardAboutTitle": "À propos & Équipement",
      "home.cardAboutSub": "Parcours depuis 2022, trilingue FR·EN·DE et matériel de terrain.",

      // Home Technical Spec Columns
      "home.pillarsEyebrow": "02 // Approche Technique",
      "home.pillarsTitle": "La maîtrise de la lumière, du terrain au tirage.",
      "home.p1Title": "Double boîtier & réactivité",
      "home.p1Desc": "Sony A7R V à double sauvegarde SD et Sony A7 II pour passer instantanément du plan large architectural au portrait serré f/2-2.8.",
      "home.p2Title": "Dialogue trilingue FR · EN · DE",
      "home.p2Desc": "Indispensable à Strasbourg et en zone rhénane : vos intervenants, invités internationaux et modèles sont dirigés naturellement dans leur langue.",
      "home.p3Title": "Colorimétrie cohérente & livraison rapide",
      "home.p3Desc": "Sélection d'aperçus presse sous 24–48h pour les événements, puis galerie privée HD optimisée web et impression grand format.",

      "home.featEyebrow": "03 // Planches sélectionnées",
      "home.featTitle": "Aperçu du portfolio",
      "home.featCta": "Voir prestations & devis",

      "cta.eyebrow": "Strasbourg · Alsace · Grand Est & France",
      "cta.title": "Discutons de votre prochain projet photographique.",
      "cta.desc": "Partagez votre date, votre lieu et l'ambiance souhaitée pour recevoir un devis précis sous 24 heures.",
      "cta.btn1": "Contacter Timothy",
      "cta.btn2": "Voir les formules",

      // Events Page
      "events.eyebrow": "Reportage · Festivals · Corporate",
      "events.title": "Photographe Événementiel",
      "events.lead": "Capturer l’énergie brute d’un festival, les échanges d’un networking ou les temps forts de votre événement d’entreprise en Alsace, dans le Grand Est et partout en France.",
      "events.filterAll": "Tout voir",
      "events.filterMontorido": "Festival Montorido 2025",
      "events.filterCreators": "CreatorsLounge",
      "events.techEyebrow": "Approche terrain",
      "events.techTitle": "Pensé pour le rythme du direct",
      "events.tech1Title": "Double boîtier réactif",
      "events.tech1Desc": "Sony A7R V (double carte SD pour la sécurité des fichiers) et Sony A7 II pour couvrir plans larges et expressions saisies sur le vif sans temps mort.",
      "events.tech2Title": "Optique & ambiance nocturne",
      "events.tech2Desc": "Tamron 35-150mm f/2-2.8 associé au filtre Marumi Black Mist 1/2 au besoin pour préserver l’atmosphère des lumières de scène et des soirées.",
      "events.tech3Title": "Éclairage maîtrisé",
      "events.tech3Desc": "Flash cobra Godox V100 en rebond discret ou déporté sur pied avec softbox UL-Box 60 cm Octa pour les portraits VIP et photocalls.",

      // Portraits Page
      "portraits.eyebrow": "Studio nomade · Extérieur · Identité",
      "portraits.title": "Photographe Portrait",
      "portraits.lead": "Des portraits authentiques et soignés pour particuliers, artistes, créateurs et dirigeants. En lumière naturelle ou avec studio mobile installé sur le lieu de votre choix.",
      "portraits.filterAll": "Toutes les séries",
      "portraits.approachEyebrow": "Direction & Lumière",
      "portraits.approachTitle": "Un rendu adapté à votre personnalité",
      "portraits.a1Title": "Piqué éditorial ou douceur ciné",
      "portraits.a1Desc": "Sony 100mm f/2.8 Macro GM pour un piqué sculpté et un bokeh crémeux, ou Tamron 35-150mm + Black Mist 1/2 pour un grain cinéma doux sur les hautes lumières.",
      "portraits.a2Title": "Studio nomade chez vous",
      "portraits.a2Desc": "Installation rapide sur place grâce au support Godox S3, flash V100 et boîte à lumière octogonale 60 cm UL-Box pour des portraits professionnels au bureau ou en extérieur.",

      // Nature & Macro Page
      "nature.eyebrow": "61 Mégapixels · Détails & Faune",
      "nature.title": "Animalier, Nature & Macro",
      "nature.lead": "Observer sans déranger, saisir la précision d’une goutte d’eau au rapport 1:1 et restituer la grandeur des paysages avec les 61 MP du Sony A7R V.",
      "nature.filterAll": "Tout explorer",
      "nature.filterAnimals": "Animalier",
      "nature.filterNature": "Nature & Paysages",
      "nature.filterMacro": "Macro 1:1",
      "nature.capAnimal": "Animalier — Série faune & observation",
      "nature.capNature": "Nature — Lumière naturelle & reliefs",
      "nature.capMacro": "Macro — Sony 100mm f/2.8 GM",

      // Services Page
      "services.eyebrow": "Offres claires · Devis sur mesure",
      "services.title": "Prestations & Accompagnement",
      "services.lead": "Chaque projet ayant ses contraintes de durée, de lieu et de diffusion, mes tarifs sont établis sur devis transparent sous 24h. Voici les prestations principales proposées en Alsace, dans le Grand Est et en France.",
      "services.o1Tag": "Festivals · Entreprises · Soirées",
      "services.o1Title": "Reportage Événementiel",
      "services.o1Desc": "Couverture complète de vos conférences, festivals culturels, inaugurations, événements associatifs ou soirées networking.",
      "services.o1L1": "Repérage ou brief préparatoire en amont",
      "services.o1L2": "Couverture demi-journée, journée ou multi-jours",
      "services.o1L3": "Sélection d'aperçus sous 24-48h pour vos réseaux",
      "services.o1L4": "Galerie privée HD + droits de diffusion web/presse inclus",
      "services.o1Badge": "Sur devis · Strasbourg & déplacements",

      "services.o2Tag": "Particuliers · Artistes · Dirigeants",
      "services.o2Title": "Séance Portrait & Studio Mobile",
      "services.o2Desc": "Portraits corporate LinkedIn, books artistes, séances individuelles ou en duo en extérieur ou avec éclairage studio mobile.",
      "services.o2L1": "Conseils tenues, lieu et direction de pose bienveillante",
      "services.o2L2": "Lumière naturelle ou studio Godox V100 + Octa 60 cm",
      "services.o2L3": "Galerie de sélection + retouches fines et naturelles",
      "services.o2L4": "Livraison formats haute définition et web optimisés",
      "services.o2Badge": "Sur devis · 1h à demi-journée",

      "services.o3Tag": "Marques · Artisans · Projets locaux",
      "services.o3Title": "Reportage Métier & Macro Produit",
      "services.o3Desc": "Mise en valeur de votre savoir-faire, ateliers, produits artisanaux ou détails techniques grâce à la macro haute précision.",
      "services.o3L1": "Prises de vue sur site (atelier, boutique, événement)",
      "services.o3L2": "Détails macro 1:1 au Sony 100mm Macro GM (61 MP)",
      "services.o3L3": "Cohérence visuelle pensée pour votre site et Instagram",
      "services.o3L4": "Cession de droits commerciaux adaptée à votre usage",
      "services.o3Badge": "Sur devis · B2B & Artisans",

      "services.o4Tag": "Décoration · Collections · Éditions",
      "services.o4Title": "Nature, Animalier & Tirages d'Art",
      "services.o4Desc": "Commandes pour offices de tourisme, associations, revues ou acquisition de tirages haute définition issus de mes séries nature et faune.",
      "services.o4L1": "Fichiers 61 MP adaptés aux grands formats d'exposition",
      "services.o4L2": "Licences éditoriales ou tirages sur papier Fine Art",
      "services.o4L3": "Reportages patrimoine naturel dans le Grand Est",
      "services.o4L4": "Accompagnement personnalisé selon format et encadrement",
      "services.o4Badge": "Sur demande · Tirages & Licences",

      "services.bookBtn": "Demander un devis",
      "services.faqEyebrow": "Questions fréquentes",
      "services.faqTitle": "Préparer votre séance ou reportage",
      "services.q1": "Dans quelle zone géographique intervenez-vous ?",
      "services.a1": "Je suis basé à Strasbourg en Alsace (Grand Est) et j'interviens régulièrement sur toute la région (Colmar, Mulhouse, Obernai, Nancy, Metz) ainsi que partout en France et en zone transfrontalière (Allemagne, Suisse) selon les projets.",
      "services.q2": "Quels sont vos délais de livraison ?",
      "services.a2": "Pour l'événementiel, je peux fournir une sélection rapide de 10 à 20 photos sous 24 à 48h pour votre communication à chaud, puis la galerie complète sous 5 à 10 jours ouvrés. Pour les portraits, comptez généralement 5 à 7 jours ouvrés.",
      "services.q3": "Parlez-vous d'autres langues lors des prestations ?",
      "services.a3": "Oui, je maîtrise le français, l'anglais et l'allemand, ce qui facilite les événements internationaux, les équipes multiculturelles et les portraits de clients étrangers.",
      "services.q4": "Que se passe-t-il en cas de pluie pour un shooting extérieur ?",
      "services.a4": "Nous prévoyons toujours un plan B : soit un report gratuit à une date proche, soit le repli vers un lieu couvert/intérieur équipé avec mon kit d'éclairage portable Godox.",

      // About Page
      "about.eyebrow": "Photographe depuis 2022 · Alsace & France",
      "about.title": "À propos de Timothy Boxho",
      "about.p1": "Une image vaut mille mots — chacune raconte une histoire. De la passion au professionnalisme, la photographie s'est imposée comme mon langage.",
      "about.p2": "Autodidacte depuis 2022, j'ai construit une maîtrise rigoureuse de toute la chaîne photographique : du choix optique et de l'éclairage sur le terrain jusqu'au développement et à la colorimétrie en post-traitement.",
      "about.p3": "Basé à Strasbourg dans le Grand Est, je parle couramment français, anglais et allemand. Mon objectif reste constant : capter la justesse d'un instant avec une touche personnelle et soignée.",
      "about.cvBtn": "Télécharger mon CV (PDF)",
      "about.igBtn": "Suivre @timi_chiki",
      "about.gearEyebrow": "Parc matériel vérifié",
      "about.gearTitle": "Des outils choisis pour la fiabilité et le rendu",
      "about.g1Tag": "Boîtier Principal · 61 MP",
      "about.g1Title": "Sony Alpha 7R V",
      "about.g1Desc": "Autofocus IA multi-sujets (humain, animal, insecte), plage dynamique élevée, double slot mémoire et définition 61 MP idéale pour l'animalier, la macro et les grands tirages.",
      "about.g2Tag": "Second Boîtier / Backup",
      "about.g2Title": "Sony Alpha 7 II",
      "about.g2Desc": "Boîtier d'appoint en événementiel pour garder deux focales prêtes simultanément et assurer une redondance de sécurité sur le terrain.",
      "about.g3Tag": "Zoom Reportage & Portrait",
      "about.g3Title": "Tamron 35-150mm f/2-2.8 Di III VXD",
      "about.g3Desc": "Grande ouverture et polyvalence du grand-angle au téléportrait sans changer d'objectif en pleine action, complété au besoin par un filtre Marumi Black Mist 1/2.",
      "about.g4Tag": "Macro & Portrait Studio",
      "about.g4Title": "Sony FE 100mm f/2.8 Macro GM",
      "about.g4Desc": "Piqué exceptionnel au rapport 1:1 pour la macrophotographie, les textures produits et les portraits serrés à faible profondeur de champ.",
      "about.g5Tag": "Téléobjectif Extérieur",
      "about.g5Title": "Tamron 70-300mm",
      "about.g5Desc": "Portée légère et mobile pour la faune sauvage, les paysages lointains et les scènes extérieures à distance respectueuse.",
      "about.g6Tag": "Éclairage Portable",
      "about.g6Title": "Godox V100 + Support S3 + UL-Box 60 cm Octa",
      "about.g6Desc": "Flash cobra tête ronde monté sur griffe en reportage ou déporté sur trépied dans une boîte à lumière octogonale de 60 cm pour des portraits doux partout.",

      // Contact Page
      "contact.eyebrow": "Réponse sous 24h · Devis gratuit",
      "contact.title": "Parlons de votre projet",
      "contact.lead": "Que ce soit pour couvrir un événement en Alsace, réserver une séance portrait ou commander un reportage sur mesure en France, utilisez le canal qui vous convient le mieux.",
      "contact.directTitle": "Coordonnées directes",
      "contact.zoneLabel": "Zone d'activité",
      "contact.zoneVal": "Strasbourg · Alsace · Grand Est & France",
      "contact.emailLabel": "Email professionnel",
      "contact.waLabel": "WhatsApp / Téléphone",
      "contact.igLabel": "Instagram",
      "contact.formTitle": "Préparer votre demande de devis",
      "contact.formSub": "Remplissez ce formulaire pour générer instantanément votre demande structurée par email ou WhatsApp.",
      "contact.fName": "Nom / Organisation *",
      "contact.fNamePh": "Votre nom ou nom d'entreprise",
      "contact.fEmail": "Email *",
      "contact.fEmailPh": "vous@exemple.fr",
      "contact.fPhone": "Téléphone",
      "contact.fPhonePh": "+33 6 00 00 00 00",
      "contact.fService": "Type de prestation *",
      "contact.optEvent": "Événementiel / Festival / Corporate",
      "contact.optPortrait": "Portrait individuel / Artistique / Pro",
      "contact.optNature": "Nature / Animalier / Macro / Tirage",
      "contact.optOther": "Autre projet sur mesure",
      "contact.fDetails": "Date & lieu souhaités",
      "contact.fDetailsPh": "Ex : 15 juin 2027 à Strasbourg",
      "contact.fMsg": "Décrivez votre besoin *",
      "contact.fMsgPh": "Nombre de personnes, durée estimée, ambiance souhaitée, usage des photos...",
      "contact.btnEmail": "Envoyer par Email",
      "contact.btnWa": "Envoyer sur WhatsApp",
      "contact.btnCopy": "Copier le récapitulatif",
      "contact.msgCopied": "Récapitulatif copié dans le presse-papier ! Vous pouvez le coller dans votre messagerie.",
      "contact.msgError": "Merci de renseigner votre nom, votre email et une description de votre projet.",
      "contact.msgSentEmail": "Votre application email vient de s'ouvrir avec la demande pré-remplie.",

      // Footer
      "footer.bio": "Photographe polyvalent basé à Strasbourg (Alsace, Grand Est). Événementiel, portrait, macro, animalier et nature — FR · EN · DE.",
      "footer.col1": "Galeries",
      "footer.col2": "Informations",
      "footer.col3": "Contact",
      "footer.copy": "© 2026 Timothy Boxho — Photographe (TYBox). Tous droits réservés."
    },
    en: {
      "nav.brandSub": "Photographer · Strasbourg",
      "nav.home": "Home",
      "nav.events": "Events",
      "nav.portraits": "Portraits",
      "nav.nature": "Nature & Macro",
      "nav.services": "Services",
      "nav.about": "About",
      "nav.contact": "Contact",
      "nav.cta": "Quote",
      "ui.themeToLight": "Switch to light mode",
      "ui.themeToDark": "Switch to dark mode",
      "ui.themeLabelLight": "Light",
      "ui.themeLabelDark": "Dark",
      "ui.langSwitch": "Passer en français",
      "ui.openMenu": "Open menu",
      "ui.closeLightbox": "Close viewer",
      "ui.prevPhoto": "Previous photo",
      "ui.nextPhoto": "Next photo",
      "ui.zoomHint": "Expand ↗",
      "ui.masonryNote": "Original framing preserved (Portrait & Landscape) · Keys ← → Esc",
      "ui.kbHint": "← → Navigate · Esc Close",
      "ui.seeSeries": "View series →",

      // Hero Cover
      "home.eyebrow": "Strasbourg · Alsace · Est. 2022",
      "home.coords": "48.5734° N · 7.7521° E",
      "home.title": "Sculpting stories <em>in natural light</em> with clarity and poise.",
      "home.lead": "From the Rhine plain to the Vosges ridges, I work fluently in French, English, and German for festivals, businesses, and private clients — events, mobile studio portraits, macro, and wildlife.",
      "home.ctaPrimary": "Request a quote within 24h",
      "home.ctaSecondary": "Explore galleries",
      "hero.p1TabSub": "Reportage · Stage",
      "hero.p2TabSub": "Mobile Studio · Outdoor",
      "hero.p3TabSub": "Sony A7R V · 61 MP",
      "hero.p1Badge": "01 / Live & Festivals",
      "hero.p1Title": "Montorido Festival 2025",
      "hero.p2Badge": "02 / Editorial Portrait",
      "hero.p2Title": "Editorial Series — Vanessa",
      "hero.p3Badge": "03 / Wildlife & Nature",
      "hero.p3Title": "61 MP Wildlife & Landscapes",
      "hero.railGear": "BODIES",
      "hero.railLang": "LANGUAGES",

      // Manifesto Split Band
      "manifesto.eyebrow": "Territory & Craft",
      "manifesto.title": "Across the Alsace plain and <em>the Vosges mountains</em>.",
      "manifesto.note": "Based in Strasbourg — Available across Grand Est, France & cross-border (DE / CH)",
      "manifesto.l1Title": "Businesses, Festivals & Institutions",
      "manifesto.l1Desc": "Conferences, networking mixers (CreatorsLounge), cultural stages, and artisan profiles delivered within 24–48h for press and social media.",
      "manifesto.l2Title": "Private Clients, Artists & Mobile Studio",
      "manifesto.l2Desc": "Executive or creative portraits in natural light or illuminated on location with my portable Godox V100 strobe kit.",
      "manifesto.l3Title": "Nature, Wildlife & 1:1 Macro Photography",
      "manifesto.l3Desc": "Sony 100mm Macro GM optics and 61 MP full-frame sensor built for exhibition-grade Fine Art prints.",

      // Home Bento Univers
      "home.univEyebrow": "01 // Specialties & Series",
      "home.univTitle": "Four disciplines, one visual standard.",
      "home.univDesc": "Every series preserves natural intensity and authentic human presence without stiff staging.",
      "home.cardEventsTag": "01 · Documentary & Live",
      "home.cardEventsTitle": "Events",
      "home.cardEventsSub": "Festivals, conferences, networking, concerts, and corporate evenings.",
      "home.cardPortraitsTag": "02 · Mobile Studio & Daylight",
      "home.cardPortraitsTitle": "Portraits",
      "home.cardPortraitsSub": "Creative, editorial, LinkedIn headshots, artists, and private sessions.",
      "home.cardNatureTag": "03 · Full Frame 61 MP",
      "home.cardNatureTitle": "Wildlife, Nature & Macro",
      "home.cardNatureSub": "Wild fauna, sweeping vistas, and intricate 1:1 macro worlds.",
      "home.cardAboutTag": "04 · Story & Sony / Godox Kit",
      "home.cardAboutTitle": "About & Equipment",
      "home.cardAboutSub": "Journey since 2022, fluent FR·EN·DE workflow, and verified camera kit.",

      // Home Technical Spec Columns
      "home.pillarsEyebrow": "02 // Field Architecture",
      "home.pillarsTitle": "Control over light, from capture to print.",
      "home.p1Title": "Dual-body reliability",
      "home.p1Desc": "Sony A7R V with dual SD card redundancy alongside Sony A7 II to switch seamlessly from architectural wide angles to fast f/2-2.8 close portraits.",
      "home.p2Title": "Trilingual dialogue FR · EN · DE",
      "home.p2Desc": "Essential in Strasbourg and cross-border Alsace: speakers, guests, and international clients feel guided comfortably in their own language.",
      "home.p3Title": "Consistent grading & fast delivery",
      "home.p3Desc": "24–48h press/social preview batches for live events, followed by a curated private HD gallery ready for digital and print.",

      "home.featEyebrow": "03 // Curated Plates",
      "home.featTitle": "Portfolio highlights",
      "home.featCta": "Services & quotes",

      "cta.eyebrow": "Strasbourg · Alsace · Grand Est & France",
      "cta.title": "Let's plan your upcoming photo assignment.",
      "cta.desc": "Share your date, city, and vision to receive a clear, bespoke quote within 24 hours.",
      "cta.btn1": "Contact Timothy",
      "cta.btn2": "See packages",

      // Events
      "events.eyebrow": "Reportage · Festivals · Corporate",
      "events.title": "Event Photography",
      "events.lead": "Capturing live festival energy, networking connections, and key moments of your corporate or cultural event in Strasbourg, Grand Est, and across France.",
      "events.filterAll": "All events",
      "events.filterMontorido": "Montorido Festival 2025",
      "events.filterCreators": "CreatorsLounge",
      "events.techEyebrow": "On-site workflow",
      "events.techTitle": "Built for fast-paced live coverage",
      "events.tech1Title": "Dual-body responsiveness",
      "events.tech1Desc": "Sony A7R V with dual SD card redundancy plus Sony A7 II so wide atmosphere and tight expressions are captured without missing a beat.",
      "events.tech2Title": "Low-light & stage rendering",
      "events.tech2Desc": "Tamron 35-150mm f/2-2.8 paired with a Marumi Black Mist 1/2 filter when needed for cinematic stage highlights and night ambiance.",
      "events.tech3Title": "Controlled lighting",
      "events.tech3Desc": "Godox V100 speedlight for subtle bounce fill or off-camera on a stand with the UL-Box 60 cm Octa for VIP portraits.",

      // Portraits
      "portraits.eyebrow": "Mobile Studio · Outdoor · Identity",
      "portraits.title": "Portrait Photography",
      "portraits.lead": "Authentic, intentional portraits for individuals, artists, creators, and executives — shot in natural light or with a portable studio brought directly to your location.",
      "portraits.filterAll": "All series",
      "portraits.approachEyebrow": "Direction & Light",
      "portraits.approachTitle": "Tailored to your presence",
      "portraits.a1Title": "Crisp editorial or soft cinema look",
      "portraits.a1Desc": "Sony 100mm f/2.8 Macro GM for razor-sharp separation, or Tamron 35-150mm + Black Mist 1/2 for smooth skin tones and gentle highlight bloom.",
      "portraits.a2Title": "Mobile studio anywhere",
      "portraits.a2Desc": "Quick setup on location with Godox S3 bracket, V100 strobe, and 60 cm UL-Box Octa softbox for polished studio results outdoors or at your office.",

      // Nature & Macro
      "nature.eyebrow": "61 Megapixels · Details & Wildlife",
      "nature.title": "Wildlife, Nature & Macro",
      "nature.lead": "Patient field observation, true 1:1 macro textures, and rich landscape depth powered by the 61 MP Sony A7R V sensor.",
      "nature.filterAll": "Explore all",
      "nature.filterAnimals": "Wildlife",
      "nature.filterNature": "Nature & Landscapes",
      "nature.filterMacro": "Macro 1:1",
      "nature.capAnimal": "Wildlife — Observation & fauna series",
      "nature.capNature": "Nature — Natural light & landscapes",
      "nature.capMacro": "Macro — Sony 100mm f/2.8 GM",

      // Services
      "services.eyebrow": "Transparent packages · Custom quotes",
      "services.title": "Services & Approach",
      "services.lead": "Because every shoot differs in duration, location, and licensing, quotes are tailored and sent within 24 hours. Explore core offerings across Alsace, Grand Est, and France.",
      "services.o1Tag": "Festivals · Corporate · Networking",
      "services.o1Title": "Event Coverage",
      "services.o1Desc": "Complete documentary coverage for cultural festivals, conferences, business mixers, and private celebrations.",
      "services.o1L1": "Pre-event briefing and shot-list alignment",
      "services.o1L2": "Half-day, full-day, or multi-day coverage",
      "services.o1L3": "Fast 24-48h press/social preview selects available",
      "services.o1L4": "Private HD gallery + web/PR usage rights included",
      "services.o1Badge": "Custom quote · Strasbourg & travel",

      "services.o2Tag": "Individuals · Artists · Executives",
      "services.o2Title": "Portrait & Mobile Studio",
      "services.o2Desc": "LinkedIn headshots, creative artist portfolios, and outdoor or on-site studio sessions.",
      "services.o2L1": "Wardrobe, location guidance, and relaxed posing direction",
      "services.o2L2": "Natural light or Godox V100 + 60 cm Octa studio kit",
      "services.o2L3": "Online proofing gallery + natural, refined retouching",
      "services.o2L4": "Print-ready high resolution and web-optimized files",
      "services.o2Badge": "Custom quote · 1h to half-day",

      "services.o3Tag": "Brands · Makers · Local Businesses",
      "services.o3Title": "Brand Story & Macro Product",
      "services.o3Desc": "Showcase your craftsmanship, workshops, and product details with crisp macro and documentary imagery.",
      "services.o3L1": "On-location shooting (studio, workshop, retail, event)",
      "services.o3L2": "1:1 macro detail shots on Sony 100mm GM (61 MP)",
      "services.o3L3": "Cohesive visual set built for your website and Instagram",
      "services.o3L4": "Commercial licensing tailored to your channels",
      "services.o3Badge": "Custom quote · B2B & Makers",

      "services.o4Tag": "Interiors · Editorial · Fine Art",
      "services.o4Title": "Nature, Wildlife & Fine Art Prints",
      "services.o4Desc": "Commissions for tourism boards, conservation groups, editorial publications, and large-format fine art prints.",
      "services.o4L1": "61 MP master files built for large exhibition prints",
      "services.o4L2": "Editorial licensing or curated Fine Art paper prints",
      "services.o4L3": "Regional natural heritage stories across Grand Est",
      "services.o4L4": "Personal consultation on sizing and presentation",
      "services.o4Badge": "On request · Prints & Licensing",

      "services.bookBtn": "Request a quote",
      "services.faqEyebrow": "Frequently asked questions",
      "services.faqTitle": "Planning your shoot",
      "services.q1": "Where are you available to shoot?",
      "services.a1": "I am based in Strasbourg (Alsace, Grand Est) and regularly travel across Eastern France (Colmar, Mulhouse, Obernai, Nancy, Metz), nationwide across France, and nearby Germany/Switzerland.",
      "services.q2": "How fast do you deliver the final photos?",
      "services.a2": "For events, a fast social/press highlight batch can be delivered within 24–48 hours, with the full curated gallery delivered in 5–10 business days. Portrait galleries typically deliver within 5–7 business days.",
      "services.q3": "Can we communicate in English or German on set?",
      "services.a3": "Yes — I speak French, English, and German fluently, making international events and multilingual portrait sessions effortless.",
      "services.q4": "What happens if it rains during an outdoor session?",
      "services.a4": "We always plan a backup: either free rescheduling to a nearby date or moving to a covered/indoor location lit with my portable Godox studio kit.",

      // About
      "about.eyebrow": "Photographer since 2022 · Alsace & France",
      "about.title": "About Timothy Boxho",
      "about.p1": "A picture is worth a thousand words — and each frame tells a story. What began as a passion quickly grew into a dedicated profession.",
      "about.p2": "Self-taught since 2022, I developed hands-on mastery across the full photographic workflow: from optics and on-location lighting to color grading and post-production.",
      "about.p3": "Based in Strasbourg (Grand Est, France), I speak French, English, and German fluently. My goal on every assignment is simple: capture authentic stories with a distinct, personal touch.",
      "about.cvBtn": "Download Resume (PDF)",
      "about.igBtn": "Follow @timi_chiki",
      "about.gearEyebrow": "Verified Equipment Kit",
      "about.gearTitle": "Tools chosen for precision and versatility",
      "about.g1Tag": "Primary Camera · 61 MP",
      "about.g1Title": "Sony Alpha 7R V",
      "about.g1Desc": "AI subject-recognition AF (human, animal, bird, insect), wide dynamic range, dual memory slots, and 61 MP resolution for crisp crops and large prints.",
      "about.g2Tag": "Secondary / Backup Body",
      "about.g2Title": "Sony Alpha 7 II",
      "about.g2Desc": "Dedicated second body during events to keep complementary focal lengths ready and ensure field redundancy.",
      "about.g3Tag": "Event & Portrait Zoom",
      "about.g3Title": "Tamron 35-150mm f/2-2.8 Di III VXD",
      "about.g3Desc": "Fast aperture and seamless 35–150mm range for live action and portraits, paired with a Marumi Black Mist 1/2 filter when cinematic softness is desired.",
      "about.g4Tag": "Macro & Studio Portrait",
      "about.g4Title": "Sony FE 100mm f/2.8 Macro GM",
      "about.g4Desc": "True 1:1 magnification and G Master sharpness for macro subjects, craftsmanship details, and close-up portraits.",
      "about.g5Tag": "Outdoor Telephoto",
      "about.g5Title": "Tamron 70-300mm",
      "about.g5Desc": "Lightweight telephoto reach for wildlife, distant landscapes, and candid outdoor moments.",
      "about.g6Tag": "Portable Lighting",
      "about.g6Title": "Godox V100 + S3 Bracket + UL-Box 60 cm Octa",
      "about.g6Desc": "Powerful round-head strobe used on-camera for agile event fill or off-camera inside a 60 cm octagonal softbox for flattering studio-grade portraits anywhere.",

      // Contact
      "contact.eyebrow": "24h response · Free quote",
      "contact.title": "Let's discuss your project",
      "contact.lead": "Whether you need event coverage in Alsace, a portrait session, or a custom commission anywhere in France, reach out through your preferred channel.",
      "contact.directTitle": "Direct channels",
      "contact.zoneLabel": "Location & travel",
      "contact.zoneVal": "Strasbourg · Alsace · Grand Est & France",
      "contact.emailLabel": "Direct email",
      "contact.waLabel": "WhatsApp / Phone",
      "contact.igLabel": "Instagram",
      "contact.formTitle": "Build your quote request",
      "contact.formSub": "Fill in your project details below to send directly via email, WhatsApp, or copy the brief.",
      "contact.fName": "Name / Organization *",
      "contact.fNamePh": "Your name or company",
      "contact.fEmail": "Email *",
      "contact.fEmailPh": "you@example.com",
      "contact.fPhone": "Phone Number",
      "contact.fPhonePh": "+33 6 00 00 00 00",
      "contact.fService": "Project Type *",
      "contact.optEvent": "Event / Festival / Corporate",
      "contact.optPortrait": "Portrait / Artist / Headshot",
      "contact.optNature": "Nature / Wildlife / Macro / Print",
      "contact.optOther": "Other custom project",
      "contact.fDetails": "Preferred date & city",
      "contact.fDetailsPh": "e.g. June 15, 2027 in Strasbourg",
      "contact.fMsg": "Project details *",
      "contact.fMsgPh": "Guest count, estimated duration, desired mood, image usage...",
      "contact.btnEmail": "Send via Email",
      "contact.btnWa": "Send via WhatsApp",
      "contact.btnCopy": "Copy summary",
      "contact.msgCopied": "Summary copied to clipboard! Ready to paste into any message.",
      "contact.msgError": "Please enter your name, email address, and project details.",
      "contact.msgSentEmail": "Your email client should open with your pre-filled inquiry.",

      // Footer
      "footer.bio": "Versatile photographer based in Strasbourg (Alsace, Grand Est, France). Events, portraits, macro, wildlife & nature — FR · EN · DE.",
      "footer.col1": "Galleries",
      "footer.col2": "Information",
      "footer.col3": "Contact",
      "footer.copy": "© 2026 Timothy Boxho — Photographer (TYBox). All rights reserved."
    }
  };

  let lightboxState = null;
  let heroPlateSync = null;

  function getStoredTheme() {
    const saved = localStorage.getItem(STORAGE_THEME);
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_THEME, theme);

    const lang = document.documentElement.getAttribute("data-lang") || "fr";
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.fr;

    document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
      btn.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
      btn.setAttribute("aria-label", theme === "dark" ? dict["ui.themeToLight"] : dict["ui.themeToDark"]);
      const label = btn.querySelector("[data-theme-text]");
      if (label) {
        label.textContent = theme === "dark" ? dict["ui.themeLabelLight"] : dict["ui.themeLabelDark"];
      }
    });
  }

  function getStoredLang() {
    const saved = localStorage.getItem(STORAGE_LANG);
    return saved === "en" || saved === "fr" ? saved : "fr";
  }

  function applyLang(lang) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.fr;
    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);
    localStorage.setItem(STORAGE_LANG, lang);

    const pageTitle = document.documentElement.getAttribute(lang === "en" ? "data-title-en" : "data-title-fr");
    if (pageTitle) {
      document.title = pageTitle;
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        if (dict[key].includes("<em>")) {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
    });

    document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
      btn.setAttribute("aria-label", dict["ui.langSwitch"]);
      const pill = btn.querySelector("[data-lang-text]");
      if (pill) pill.textContent = lang === "fr" ? "EN" : "FR";
    });

    if (heroPlateSync) heroPlateSync();
    if (lightboxState) lightboxState.syncLocale();

    applyTheme(document.documentElement.getAttribute("data-theme") || getStoredTheme());
  }

  function initHeroPlateSwitcher() {
    const mainImg = document.querySelector("[data-hero-img]");
    const tagEl = document.querySelector("[data-hero-plate-tag]");
    const titleEl = document.querySelector("[data-hero-plate-title]");
    const linkEl = document.querySelector("[data-hero-plate-link]");
    const plateBtns = Array.from(document.querySelectorAll("[data-plate-btn]"));
    const railThumbs = Array.from(document.querySelectorAll("[data-rail-thumb]"));

    if (!mainImg || !plateBtns.length) return;

    let activePlateIdx = 0;

    function selectPlate(index) {
      activePlateIdx = index;
      const plate = HERO_PLATES[index];
      if (!plate) return;

      const lang = document.documentElement.getAttribute("data-lang") || "fr";
      const dict = TRANSLATIONS[lang] || TRANSLATIONS.fr;

      mainImg.src = plate.src;
      mainImg.alt = lang === "en" ? plate.altEn : plate.altFr;
      if (tagEl) tagEl.textContent = dict[plate.tagKey] || "";
      if (titleEl) titleEl.textContent = dict[plate.titleKey] || "";
      if (linkEl) linkEl.href = plate.href;

      plateBtns.forEach((btn, i) => btn.classList.toggle("is-active", i === index));
      railThumbs.forEach((btn, i) => btn.classList.toggle("is-active", i === index));
    }

    heroPlateSync = () => selectPlate(activePlateIdx);

    plateBtns.forEach((btn, idx) => {
      btn.addEventListener("click", () => selectPlate(idx));
    });
    railThumbs.forEach((btn, idx) => {
      btn.addEventListener("click", () => selectPlate(idx));
    });

    selectPlate(0);
  }

  function initHeaderControls() {
    const initialTheme = getStoredTheme();
    const initialLang = getStoredLang();
    document.documentElement.setAttribute("data-theme", initialTheme);
    applyLang(initialLang);

    document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme") || "dark";
        applyTheme(current === "dark" ? "light" : "dark");
      });
    });

    document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-lang") || "fr";
        applyLang(current === "fr" ? "en" : "fr");
      });
    });

    const menuBtn = document.querySelector("[data-mobile-menu-btn]");
    const drawer = document.querySelector("[data-mobile-drawer]");
    if (menuBtn && drawer) {
      menuBtn.addEventListener("click", () => {
        const open = drawer.classList.toggle("is-open");
        menuBtn.setAttribute("aria-expanded", String(open));
      });
      drawer.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          drawer.classList.remove("is-open");
          menuBtn.setAttribute("aria-expanded", "false");
        });
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && drawer.classList.contains("is-open")) {
          drawer.classList.remove("is-open");
          menuBtn.setAttribute("aria-expanded", "false");
        }
      });
    }
  }

  function initGalleryAndLightbox() {
    const filterBtns = document.querySelectorAll("[data-filter]");
    const items = Array.from(document.querySelectorAll("[data-lightbox-item]"));

    if (filterBtns.length && items.length) {
      filterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          const target = btn.getAttribute("data-filter");
          filterBtns.forEach((b) => b.classList.remove("is-active"));
          btn.classList.add("is-active");
          items.forEach((item) => {
            const cat = item.getAttribute("data-category") || "";
            const match = target === "all" || cat.split(" ").includes(target);
            item.classList.toggle("is-hidden", !match);
          });
        });
      });
    }

    if (!items.length) return;

    const lb = document.createElement("div");
    lb.className = "lightbox";
    lb.setAttribute("role", "dialog");
    lb.setAttribute("aria-modal", "true");
    lb.setAttribute("aria-label", "Photo Lightbox");
    lb.innerHTML = `
      <div class="lightbox-top">
        <div class="lightbox-meta-left">
          <span class="lightbox-counter" data-lb-counter>1 / 1</span>
          <span class="lightbox-kb-hint" data-lb-hint></span>
        </div>
        <button type="button" class="lightbox-close" data-lb-close aria-label="Fermer">&times;</button>
      </div>
      <div class="lightbox-stage">
        <button type="button" class="lightbox-nav lightbox-prev" data-lb-prev aria-label="Précédent">&#8249;</button>
        <div class="lightbox-img-wrap"><img src="" alt="" data-lb-img /></div>
        <button type="button" class="lightbox-nav lightbox-next" data-lb-next aria-label="Suivant">&#8250;</button>
      </div>
      <div class="lightbox-bottom" data-lb-caption></div>
    `;
    document.body.appendChild(lb);

    const imgEl = lb.querySelector("[data-lb-img]");
    const captionEl = lb.querySelector("[data-lb-caption]");
    const counterEl = lb.querySelector("[data-lb-counter]");
    const hintEl = lb.querySelector("[data-lb-hint]");
    const closeBtn = lb.querySelector("[data-lb-close]");
    const prevBtn = lb.querySelector("[data-lb-prev]");
    const nextBtn = lb.querySelector("[data-lb-next]");

    let activeList = [];
    let currentIdx = 0;

    function getCaption(el) {
      const lang = document.documentElement.getAttribute("data-lang") || "fr";
      const img = el.querySelector("img");
      const alt = img ? img.alt : "";
      if (lang === "en") {
        return el.getAttribute("data-caption-en") || el.getAttribute("data-caption") || alt;
      }
      return el.getAttribute("data-caption") || alt;
    }

    function syncLocale() {
      const lang = document.documentElement.getAttribute("data-lang") || "fr";
      const dict = TRANSLATIONS[lang] || TRANSLATIONS.fr;
      hintEl.textContent = dict["ui.kbHint"];
      closeBtn.setAttribute("aria-label", dict["ui.closeLightbox"]);
      prevBtn.setAttribute("aria-label", dict["ui.prevPhoto"]);
      nextBtn.setAttribute("aria-label", dict["ui.nextPhoto"]);
      if (lb.classList.contains("is-open") && activeList[currentIdx]) {
        captionEl.textContent = getCaption(activeList[currentIdx]);
      }
    }

    lightboxState = { syncLocale };
    syncLocale();

    function getVisibleItems() {
      return items.filter((el) => !el.classList.contains("is-hidden"));
    }

    function showSlide(index) {
      if (!activeList.length) return;
      currentIdx = (index + activeList.length) % activeList.length;
      const el = activeList[currentIdx];
      const img = el.querySelector("img");
      const src = el.getAttribute("data-full") || (img ? img.src : "");
      const alt = img ? img.alt : "";
      imgEl.src = src;
      imgEl.alt = alt;
      captionEl.textContent = getCaption(el);
      counterEl.textContent = `${currentIdx + 1} / ${activeList.length}`;
    }

    function openLightbox(clickedEl) {
      activeList = getVisibleItems();
      const idx = activeList.indexOf(clickedEl);
      currentIdx = idx >= 0 ? idx : 0;
      showSlide(currentIdx);
      lb.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
      lb.classList.remove("is-open");
      document.body.style.overflow = "";
    }

    items.forEach((el) => {
      el.addEventListener("click", () => openLightbox(el));
    });

    closeBtn.addEventListener("click", closeLightbox);
    prevBtn.addEventListener("click", () => showSlide(currentIdx - 1));
    nextBtn.addEventListener("click", () => showSlide(currentIdx + 1));
    lb.addEventListener("click", (e) => {
      if (e.target === lb || e.target.classList.contains("lightbox-img-wrap")) {
        closeLightbox();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (!lb.classList.contains("is-open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showSlide(currentIdx - 1);
      if (e.key === "ArrowRight") showSlide(currentIdx + 1);
    });
  }

  function initContactForm() {
    const form = document.querySelector("[data-quote-form]");
    if (!form) return;

    const statusEl = document.querySelector("[data-form-status]");

    function readFormData() {
      const name = (form.querySelector("#q-name")?.value || "").trim();
      const email = (form.querySelector("#q-email")?.value || "").trim();
      const phone = (form.querySelector("#q-phone")?.value || "").trim();
      const serviceSelect = form.querySelector("#q-service");
      const service = serviceSelect ? serviceSelect.options[serviceSelect.selectedIndex].textContent.trim() : "";
      const details = (form.querySelector("#q-details")?.value || "").trim();
      const msg = (form.querySelector("#q-msg")?.value || "").trim();
      return { name, email, phone, service, details, msg };
    }

    function showStatus(key) {
      const lang = document.documentElement.getAttribute("data-lang") || "fr";
      const dict = TRANSLATIONS[lang] || TRANSLATIONS.fr;
      if (!statusEl) return;
      statusEl.textContent = dict[key] || key;
      statusEl.classList.add("is-visible");
    }

    function buildSummary(data) {
      return [
        "Demande de devis photo — Timothy Boxho",
        `Nom / Organisation : ${data.name}`,
        `Email : ${data.email}`,
        data.phone ? `Téléphone : ${data.phone}` : null,
        `Prestation : ${data.service}`,
        data.details ? `Date & lieu : ${data.details}` : null,
        `Détails : ${data.msg}`
      ].filter(Boolean).join("\n");
    }

    function validate(data) {
      if (!data.name || !data.email || !data.msg) {
        showStatus("contact.msgError");
        return false;
      }
      return true;
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = readFormData();
      if (!validate(data)) return;
      const subject = encodeURIComponent(`[Devis Photo] ${data.service} — ${data.name}`);
      const body = encodeURIComponent(buildSummary(data));
      showStatus("contact.msgSentEmail");
      window.location.href = `mailto:tim.boxho@gmail.com?subject=${subject}&body=${body}`;
    });

    const waBtn = form.querySelector("[data-send-whatsapp]");
    if (waBtn) {
      waBtn.addEventListener("click", () => {
        const data = readFormData();
        if (!validate(data)) return;
        const text = encodeURIComponent(buildSummary(data));
        window.open(`https://wa.me/33695233596?text=${text}`, "_blank", "noopener,noreferrer");
      });
    }

    const copyBtn = form.querySelector("[data-copy-quote]");
    if (copyBtn) {
      copyBtn.addEventListener("click", async () => {
        const data = readFormData();
        if (!validate(data)) return;
        try {
          await navigator.clipboard.writeText(buildSummary(data));
          showStatus("contact.msgCopied");
        } catch (_) {
          showStatus("contact.msgError");
        }
      });
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    initHeroPlateSwitcher();
    initHeaderControls();
    initGalleryAndLightbox();
    initContactForm();
  });
})();
