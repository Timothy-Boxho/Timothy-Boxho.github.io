(function () {
  "use strict";

  var IMG = "../assets/images/";
  var root = document.documentElement;

  /* ---------------- TRADUCTIONS ---------------- */
  var T = {
    fr: {
      "meta.title": "Timothy Boxho — Photographe à Strasbourg | Planche contact",
      "ui.skip": "Aller au contenu",
      "ui.close": "Fermer", "ui.prev": "Précédente", "ui.next": "Suivante",
      "ui.themeToLight": "Mode clair", "ui.themeToDark": "Mode sombre",
      "ui.langAria": "Switch to English",
      "nav.sheet": "Planche", "nav.services": "Prestations", "nav.studio": "Atelier", "nav.contact": "Contact",
      "hero.kick": "Photographe · Strasbourg, Alsace · depuis 2022",
      "hero.tag": "Je photographie ce qui se passe vraiment\u00a0: la scène, les visages, le vivant.",
      "hero.m1k": "Sujets", "hero.m1v": "Événementiel · Portrait · Nature & Macro",
      "hero.m2k": "Langues", "hero.m3k": "Délai", "hero.m3v": "Réponse sous 24\u00a0h",
      "hero.cta1": "Voir la planche", "hero.cta2": "Demander un devis",
      "sheet.eye": "01 — Planche contact",
      "sheet.title": "Cinq bandes, une sélection au crayon gras.",
      "sheet.desc": "Comme au labo\u00a0: chaque série est posée sur la table lumineuse. Les vues entourées sont mes choix. Cliquez sur une image pour l'ouvrir à la loupe.",
      "sheet.note": "↔ Faites glisser les bandes sur mobile · images jamais recadrées",
      "sheet.frames": "vues", "sheet.pick": "CHOIX", "sheet.strip": "BANDE",
      "svc.eye": "02 — Prestations", "svc.title": "Trois façons de travailler ensemble.", "svc.quote": "Sur devis",
      "svc.a.t": "Événementiel", "svc.a.d": "Festivals, conférences, soirées d'entreprise, associations.",
      "svc.a.l1": "Demi-journée, journée ou multi-jours", "svc.a.l2": "Aperçus sous 24–48\u00a0h pour vos réseaux",
      "svc.a.l3": "Galerie complète sous 5 à 10 jours ouvrés", "svc.a.l4": "Droits web & presse inclus",
      "svc.b.t": "Portrait", "svc.b.d": "Particuliers, artistes, dirigeants, profils LinkedIn.",
      "svc.b.l1": "Lumière naturelle ou flash Godox + octa 60\u00a0cm", "svc.b.l2": "Direction de pose bienveillante",
      "svc.b.l3": "Retouches fines et naturelles", "svc.b.l4": "Livraison HD + formats web",
      "svc.c.t": "Nature, macro & tirages", "svc.c.d": "Offices de tourisme, artisans, revues, décoration.",
      "svc.c.l1": "Fichiers 61\u00a0MP pour les grands formats", "svc.c.l2": "Macro 1:1 au Sony 100\u00a0mm GM",
      "svc.c.l3": "Tirages et licences sur demande", "svc.c.l4": "Reportages patrimoine du Grand Est",
      "studio.eye": "03 — L'atelier", "studio.title": "Autodidacte, trilingue, toujours sur le terrain.",
      "studio.alt": "Portrait de Timothy Boxho",
      "studio.p1": "J'ai appris la photographie seul, en 2022, en allant chercher la lumière là où elle se trouve\u00a0: dans les festivals, au bord du Rhin, au fond des Vosges.",
      "studio.p2": "Je maîtrise toute la chaîne, de la prise de vue à la colorimétrie. Je travaille en français, en anglais et en allemand, ce qui facilite les événements internationaux.",
      "studio.bag": "Dans le sac", "studio.cv": "Télécharger le CV (PDF)",
      "gear.1": "boîtier principal · 61 MP", "gear.2": "boîtier de secours", "gear.3": "reportage & portrait",
      "gear.4": "macro 1:1", "gear.5": "faune & paysage", "gear.6": "éclairage nomade", "gear.7": "douceur des scènes de nuit",
      "contact.eye": "04 — Contact", "contact.title": "Une date, un lieu, une idée\u00a0? Écrivez-moi.", "contact.email": "Email",
      "form.head": "Fiche de commande", "form.name": "Nom / organisation *", "form.namePh": "Votre nom",
      "form.email": "Email *", "form.emailPh": "vous@exemple.fr", "form.type": "Type de projet",
      "form.o1": "Événementiel", "form.o2": "Portrait", "form.o3": "Nature, macro & tirages", "form.o4": "Autre",
      "form.when": "Date & lieu", "form.whenPh": "Ex.\u00a0: 14 juin, Colmar",
      "form.msg": "Votre projet *", "form.msgPh": "Durée, nombre de personnes, ambiance, usage des photos…",
      "form.err": "Merci de remplir les champs marqués *.",
      "form.sendMail": "Envoyer par email", "form.sendWa": "Envoyer sur WhatsApp",
      "form.subject": "Demande de devis photo", "form.hello": "Bonjour Timothy,",
      "footer.end": "Fin de bande · 48.57° N 7.75° E", "footer.top": "↑ Rembobiner"
    },
    en: {
      "meta.title": "Timothy Boxho — Photographer in Strasbourg | Contact sheet",
      "ui.skip": "Skip to content",
      "ui.close": "Close", "ui.prev": "Previous", "ui.next": "Next",
      "ui.themeToLight": "Light mode", "ui.themeToDark": "Dark mode",
      "ui.langAria": "Passer en français",
      "nav.sheet": "Sheet", "nav.services": "Services", "nav.studio": "Studio", "nav.contact": "Contact",
      "hero.kick": "Photographer · Strasbourg, Alsace · since 2022",
      "hero.tag": "I photograph what really happens: the stage, the faces, the wild.",
      "hero.m1k": "Subjects", "hero.m1v": "Events · Portrait · Nature & Macro",
      "hero.m2k": "Languages", "hero.m3k": "Turnaround", "hero.m3v": "Reply within 24\u00a0h",
      "hero.cta1": "View the sheet", "hero.cta2": "Request a quote",
      "sheet.eye": "01 — Contact sheet",
      "sheet.title": "Five strips, one grease-pencil pick.",
      "sheet.desc": "Just like in the darkroom: every series is laid out on the light table. Circled frames are my picks. Click any image to view it under the loupe.",
      "sheet.note": "↔ Swipe the strips on mobile · images never cropped",
      "sheet.frames": "frames", "sheet.pick": "PICK", "sheet.strip": "STRIP",
      "svc.eye": "02 — Services", "svc.title": "Three ways to work together.", "svc.quote": "On quote",
      "svc.a.t": "Events", "svc.a.d": "Festivals, conferences, corporate evenings, non-profits.",
      "svc.a.l1": "Half-day, full-day or multi-day", "svc.a.l2": "Previews within 24–48\u00a0h for your socials",
      "svc.a.l3": "Full gallery within 5 to 10 working days", "svc.a.l4": "Web & press rights included",
      "svc.b.t": "Portrait", "svc.b.d": "Individuals, artists, executives, LinkedIn profiles.",
      "svc.b.l1": "Natural light or Godox flash + 60\u00a0cm octa", "svc.b.l2": "Kind, relaxed posing guidance",
      "svc.b.l3": "Subtle, natural retouching", "svc.b.l4": "HD delivery + web formats",
      "svc.c.t": "Nature, macro & prints", "svc.c.d": "Tourism boards, craftspeople, magazines, interiors.",
      "svc.c.l1": "61\u00a0MP files for large formats", "svc.c.l2": "1:1 macro with the Sony 100\u00a0mm GM",
      "svc.c.l3": "Prints and licences on request", "svc.c.l4": "Natural heritage stories across Grand Est",
      "studio.eye": "03 — The studio", "studio.title": "Self-taught, trilingual, always in the field.",
      "studio.alt": "Portrait of Timothy Boxho",
      "studio.p1": "I taught myself photography in 2022 by chasing light wherever it was: at festivals, along the Rhine, deep in the Vosges.",
      "studio.p2": "I handle the whole chain, from shooting to colour grading. I work in French, English and German, which makes international events easy.",
      "studio.bag": "In the bag", "studio.cv": "Download my CV (PDF)",
      "gear.1": "main body · 61 MP", "gear.2": "backup body", "gear.3": "reportage & portrait",
      "gear.4": "1:1 macro", "gear.5": "wildlife & landscape", "gear.6": "portable lighting", "gear.7": "softens night scenes",
      "contact.eye": "04 — Contact", "contact.title": "A date, a place, an idea? Write to me.", "contact.email": "Email",
      "form.head": "Order slip", "form.name": "Name / organisation *", "form.namePh": "Your name",
      "form.email": "Email *", "form.emailPh": "you@example.com", "form.type": "Project type",
      "form.o1": "Events", "form.o2": "Portrait", "form.o3": "Nature, macro & prints", "form.o4": "Other",
      "form.when": "Date & place", "form.whenPh": "e.g. 14 June, Colmar",
      "form.msg": "Your project *", "form.msgPh": "Duration, number of people, mood, how the photos will be used…",
      "form.err": "Please fill in the fields marked *.",
      "form.sendMail": "Send by email", "form.sendWa": "Send on WhatsApp",
      "form.subject": "Photography quote request", "form.hello": "Hello Timothy,",
      "footer.end": "End of roll · 48.57° N 7.75° E", "footer.top": "↑ Rewind"
    }
  };

  /* ---------------- BANDES (séries) ---------------- */
  var STRIPS = [
    { id: "A", fr: "Festival Montorido 2025", en: "Montorido Festival 2025", pick: 0,
      imgs: ["events-montorido-01", "events-montorido-03", "events-montorido-02", "events-montorido-04", "events-montorido-05", "events-montorido-06"] },
    { id: "B", fr: "CreatorsLounge — soirée créateurs", en: "CreatorsLounge — creators night", pick: 2,
      imgs: ["events-creators-01", "events-creators-02", "events-creators-03", "events-creators-04", "events-creators-05", "events-creators-06"] },
    { id: "C", fr: "Portraits — Vanessa, Stéphane, William", en: "Portraits — Vanessa, Stéphane, William", pick: 3,
      imgs: ["portrait-vanessa-01", "portrait-vanessa-03", "portrait-stephane-01", "portrait-stephane-02", "portrait-william-01", "portrait-william-03"] },
    { id: "D", fr: "Faune sauvage", en: "Wildlife", pick: 0,
      imgs: ["animalier-01", "animalier-02", "animalier-03", "animalier-04", "animalier-05", "animalier-06"] },
    { id: "E", fr: "Nature & macro", en: "Nature & macro", pick: 4,
      imgs: ["nature-01", "nature-04", "nature-05", "macro-01", "macro-03", "macro-04"] }
  ];

  var lang = root.getAttribute("lang") === "en" ? "en" : "fr";
  var flat = []; // toutes les vues, pour la loupe

  function t(key) { return (T[lang] && T[lang][key]) || T.fr[key] || key; }

  /* ---------------- PLANCHE ---------------- */
  var CIRCLE = '<svg class="pick" viewBox="0 0 200 140" preserveAspectRatio="none" aria-hidden="true"><path d="M30 18 C 80 2, 170 4, 190 40 C 205 80, 175 132, 100 134 C 35 136, 4 108, 8 68 C 11 36, 40 16, 84 12"/></svg>';

  function buildSheet() {
    var sheet = document.querySelector("[data-sheet]");
    if (!sheet) return;
    var n = 0, html = "";
    STRIPS.forEach(function (s) {
      html += '<div class="strip-wrap rv"><div class="strip-label"><b data-strip="' + s.id + '"></b><span><span data-i18n="sheet.strip"></span> ' + s.id + ' · ' + s.imgs.length + ' <span data-i18n="sheet.frames"></span></span></div>';
      html += '<div class="strip"><div class="frames">';
      s.imgs.forEach(function (name, i) {
        n++;
        var idx = flat.length;
        flat.push({ src: IMG + name + ".jpg", strip: s, n: n });
        var picked = i === s.pick;
        html += '<button type="button" class="frame" data-frame="' + idx + '">' +
          '<span class="frame-edge"><span>' + n + '</span><span>TYBOX 400</span><span>' + n + 'A</span></span>' +
          '<span class="frame-win"><img src="' + IMG + name + '.jpg" alt="" loading="lazy" decoding="async" />' +
          (picked ? CIRCLE + '<span class="pick-tag" data-i18n="sheet.pick"></span>' : "") +
          "</span></button>";
      });
      html += "</div></div></div>";
    });
    sheet.innerHTML = html;
  }

  function buildReel() {
    var track = document.querySelector("[data-reel]");
    if (!track) return;
    var picks = ["events-montorido-03", "portrait-vanessa-01", "animalier-01", "events-creators-02", "macro-01",
      "portrait-william-01", "nature-05", "events-montorido-01", "animalier-04", "nature-01", "portrait-stephane-02", "macro-04"];
    var one = picks.map(function (p) { return '<img src="' + IMG + p + '.jpg" alt="" loading="lazy" decoding="async" />'; }).join("");
    track.innerHTML = one + one; // boucle continue
  }

  /* ---------------- LANGUE ---------------- */
  function applyLang(l) {
    lang = l === "en" ? "en" : "fr";
    root.setAttribute("lang", lang);
    document.title = t("meta.title");

    document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) { el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph"))); });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) { el.setAttribute("alt", t(el.getAttribute("data-i18n-alt"))); });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) { el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria"))); });
    document.querySelectorAll("[data-strip]").forEach(function (el) {
      var s = STRIPS.filter(function (x) { return x.id === el.getAttribute("data-strip"); })[0];
      if (s) el.textContent = s[lang];
    });
    document.querySelectorAll("[data-frame]").forEach(function (el) {
      var f = flat[+el.getAttribute("data-frame")];
      el.setAttribute("aria-label", f.strip[lang] + " — " + f.n);
      el.querySelector("img").setAttribute("alt", f.strip[lang] + " — Timothy Boxho");
    });

    var lb = document.querySelector("[data-lang-toggle]");
    if (lb) lb.setAttribute("aria-label", t("ui.langAria"));
    updateThemeLabel();
    if (current > -1) showFrame(current);
    try { localStorage.setItem("tybox-lang", lang); } catch (e) {}
  }

  /* ---------------- THÈME ---------------- */
  function updateThemeLabel() {
    var dark = root.getAttribute("data-theme") !== "light";
    var btn = document.querySelector("[data-theme-toggle]");
    var lbl = document.querySelector("[data-theme-label]");
    var txt = dark ? t("ui.themeToLight") : t("ui.themeToDark");
    if (lbl) lbl.textContent = txt;
    if (btn) { btn.setAttribute("aria-label", txt); btn.setAttribute("aria-pressed", String(!dark)); }
  }
  function setTheme(th) {
    root.setAttribute("data-theme", th);
    try { localStorage.setItem("tybox-theme", th); } catch (e) {}
    updateThemeLabel();
  }

  /* ---------------- LOUPE ---------------- */
  var current = -1, lastFocus = null;
  var loupe = document.querySelector("[data-loupe]");
  function showFrame(i) {
    current = (i + flat.length) % flat.length;
    var f = flat[current];
    var img = loupe.querySelector("[data-loupe-img]");
    img.src = f.src;
    img.alt = f.strip[lang] + " — Timothy Boxho";
    loupe.querySelector("[data-loupe-cap]").textContent = f.strip[lang];
    loupe.querySelector("[data-loupe-count]").textContent = (current + 1) + " / " + flat.length;
  }
  function openLoupe(i) {
    lastFocus = document.activeElement;
    showFrame(i);
    loupe.hidden = false;
    document.body.style.overflow = "hidden";
    loupe.querySelector("[data-loupe-close]").focus();
  }
  function closeLoupe() {
    loupe.hidden = true;
    current = -1;
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }

  /* ---------------- FORMULAIRE ---------------- */
  function initForm() {
    var form = document.querySelector("[data-form]");
    if (!form) return;
    var mode = "mail";
    form.querySelectorAll("[data-send]").forEach(function (b) {
      b.addEventListener("click", function () { mode = b.getAttribute("data-send"); });
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var err = form.querySelector("[data-form-err]");
      var F = form.elements;
      var name = F.namedItem("name").value.trim(), email = F.namedItem("email").value.trim();
      var msg = F.namedItem("msg").value.trim(), when = F.namedItem("when").value.trim();
      var type = F.namedItem("type");
      var ok = name && /\S+@\S+\.\S+/.test(email) && msg;
      err.hidden = !!ok;
      if (!ok) return;
      var sel = type.options[type.selectedIndex].textContent;
      var body = t("form.hello") + "\n\n" + msg + "\n\n— " + t("form.type").replace(" *", "") + " : " + sel +
        (when ? "\n— " + t("form.when") + " : " + when : "") +
        "\n— " + name + " · " + email;
      if (mode === "wa") {
        window.open("https://wa.me/33695233596?text=" + encodeURIComponent(body), "_blank", "noopener");
      } else {
        window.location.href = "mailto:tim.boxho@gmail.com?subject=" + encodeURIComponent(t("form.subject") + " — " + sel) + "&body=" + encodeURIComponent(body);
      }
    });
  }

  /* ---------------- INIT ---------------- */
  buildReel();
  buildSheet();
  applyLang(lang);
  initForm();

  document.querySelector("[data-theme-toggle]").addEventListener("click", function () {
    setTheme(root.getAttribute("data-theme") === "light" ? "dark" : "light");
  });
  document.querySelector("[data-lang-toggle]").addEventListener("click", function () {
    applyLang(lang === "fr" ? "en" : "fr");
  });

  document.addEventListener("click", function (e) {
    var fr = e.target.closest("[data-frame]");
    if (fr) openLoupe(+fr.getAttribute("data-frame"));
  });
  loupe.querySelector("[data-loupe-close]").addEventListener("click", closeLoupe);
  loupe.querySelector("[data-loupe-prev]").addEventListener("click", function () { showFrame(current - 1); });
  loupe.querySelector("[data-loupe-next]").addEventListener("click", function () { showFrame(current + 1); });
  loupe.addEventListener("click", function (e) { if (e.target === loupe) closeLoupe(); });
  document.addEventListener("keydown", function (e) {
    if (loupe.hidden) return;
    if (e.key === "Escape") closeLoupe();
    else if (e.key === "ArrowRight") showFrame(current + 1);
    else if (e.key === "ArrowLeft") showFrame(current - 1);
  });

  // apparition au défilement (+ tracé du crayon gras)
  var els = document.querySelectorAll(".rv");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { threshold: 0.15 });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add("is-in"); });
  }
})();
