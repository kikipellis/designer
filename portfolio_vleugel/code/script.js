/* =========================================================
   PORTFOLIO WEBSITE - KIKI PELLIS
   Interactive Scripts & Multilingual System
   ========================================================= */

const TRANSLATIONS = {
  "en": {
    "lang_btn": "NL",
    "nav_projects": "projects",
    "nav_about": "about me",
    "nav_contact": "contact",
    "hero_quote": "“A designer who likes to work in the background, but knows what is going on and keeps a cool head under high pressure.”",
    "hero_scroll": "projects",
    "flappy_bird_desc": "Self-designed Flappy Bird game in Unity.",
    "game_controller_desc": "Working game controller with WASD controls.",
    "escape_room_desc": "Escape room app extension for museum app.",
    "lady_bird_desc": "Frame-by-frame animated opening title sequence for the film Lady Bird.",
    "project_desc_placeholder": "Project description.",
    "project_date_label": "Date: 16-09-2026",
    "flappy_bird_date_label": "Date: 03-2026/06-2026",
    "game_controller_date_label": "Date: 03-2026/06-2026",
    "escape_room_date_label": "Date: 09-2026/10-2026",
    "lady_bird_date_label": "Date: 03-2026/06-2026",
    "flappy_bird_detail_desc": "For this project, I created my first own game in Unity. I wanted to not only build a functional game, but also conceptualize a unique theme and story. The idea was to create a narrative behind the game where a white dove searches for its other half and keeps flying further until finding her.\n\nThe white feathers you collect during gameplay have a special meaning. Instead of ordinary coins, they are the feathers of the female dove that the white dove is searching for. At the moment, the game is endless, but in the future I might add an ending where the dove finally finds its partner.\n\nFor the game, I combined custom-made and free online assets. Additionally, I built the game inside Unity and brought all components together into a playable whole.",
    "game_controller_detail_desc": "For this project, I built and personalized a game controller. I wanted it not only to work well, but also to have its own unique identity. I deliberately chose a simple and calm design, as that suits me as a designer.\n\nBecause I love birds, I chose a bird/wing theme. I incorporated this into the acrylic plate and the custom-designed joystick. For the design on the acrylic plate I used Illustrator and a laser cutter, and for the joystick I used Blender and a 3D printer.\n\nTechnically, I carefully connected and soldered the wiring, and I wrote and iteratively refined the code until I achieved the desired result.",
    "escape_room_detail_desc": "For this project, I collaborated with two other designers for client Burg Burg to design an app extension for Roald, a museum app that serves as an audio guide for artworks. The brief was to make museums more engaging for teenagers aged 13 to 17. We wanted to design something that aligns with their interests and encourages them to actively explore the museum collection.\n\nWe came up with the idea of creating an escape room, where teenagers scan artworks and solve various mysteries and puzzles to ultimately escape. Through QR codes, they are challenged to actively observe the museum collection and discover fine details in artworks. That way, they do not have to read long texts, but are immersed in a playful, interactive museum visit.\n\nFor the design, we used Figma to create the app extension and develop it into a working prototype.",
    "lady_bird_detail_desc": "For this project, I designed and animated an opening title sequence for the film Lady Bird. After watching the film, I researched which motif was most prominent. I focused on the turbulent and complex relationship between the protagonist and her mother, using this as the foundation for my animation.\n\nI chose to keep the animation simple while incorporating symbolism and subtle references to this motif. This allowed the sequence to align with the atmosphere and story of the film without giving away what happens.\n\nI conceptualized, drew, and animated the sequence frame by frame in FlipaClip. This was the first time I created a frame-by-frame animation, presenting a rewarding new challenge in my design process.",
    "about_title": "About the designer",
    "about_desc": "I am Kiki Pellis. A second-year CMD student at Avans University of Applied Sciences in Breda.\n\nWhat I find most interesting within the program is everything surrounding Creative Technology. Think of coding, building websites, making games, and even building robots!\n\nYou won't often see or hear me in the foreground. I prefer to work in the background. But that doesn't mean I don't know what's going on! I am good at observing situations and getting to the bottom of things. During design, I focus mainly on functionality and whether it appeals to the intended target audience. In addition, I always make sure to flesh out my design down to the finest details for a desired result.",
    "contact_title": "Contact me",
    "contact_email_label": "E-mail:",
    "contact_location_label": "Location:",
    "contact_location_val": "- Breda, The Netherlands",
    "contact_edu_label": "Education:",
    "contact_edu_val": "- Communication & Multi-media<br>&nbsp;&nbsp;Design, Avans University of Applied<br>&nbsp;&nbsp;sciences",
    "form_heading": "Leave me a message!",
    "form_name_ph": "Name",
    "form_email_ph": "E-mail",
    "form_message_ph": "Message...",
    "form_submit_btn": "Send",
    "form_success_msg": "Message sent!",
    "footer_back_to_top": "Back to top ↑",
    "footer_projects": "Projects",
    "footer_about": "About",
    "footer_contact": "Contact",
    "photo_placeholder": "PHOTO"
  },
  "nl": {
    "lang_btn": "EN",
    "nav_projects": "projecten",
    "nav_about": "over mij",
    "nav_contact": "contact",
    "hero_quote": "“Een ontwerper die graag op de achtergrond werkt, maar weet wat er speelt en onder hoge druk haar hoofd koel weet te houden.”",
    "hero_scroll": "projecten",
    "flappy_bird_desc": "Zelfontworpen Flappy Bird game in Unity.",
    "game_controller_desc": "Werkende game controller met WASD controls.",
    "escape_room_desc": "Escape room app-extensie voor museum app.",
    "lady_bird_desc": "Frame-by-frame geanimeerde optiteling voor de film Lady Bird.",
    "project_desc_placeholder": "Beschrijving project.",
    "project_date_label": "Datum: 16-09-2026",
    "flappy_bird_date_label": "Datum: 03-2026/06-2026",
    "game_controller_date_label": "Datum: 03-2026/06-2026",
    "escape_room_date_label": "Datum: 09-2026/10-2026",
    "lady_bird_date_label": "Datum: 03-2026/06-2026",
    "flappy_bird_detail_desc": "Voor dit project heb ik mijn eerste eigen game gemaakt in Unity. Ik wilde niet alleen een werkende game maken, maar ook een eigen thema en verhaal bedenken. Het idee was om een soort verhaal achter de game te creëren, waarin een witte duif op zoek is naar zijn andere helft en steeds verder vliegt totdat hij haar vindt.\n\nDe witte veren die je tijdens het spelen verzamelt, hebben hierin een betekenis. In plaats van gewone muntjes zijn dit de veren van de vrouwtjesduif waar de witte duif naar op zoek is. Het spel is op dit moment nog eindeloos, maar misschien voeg ik in de toekomst nog een einde toe waarbij de duif uiteindelijk zijn andere helft vindt.\n\nVoor de game heb ik een combinatie gebruikt van zelfgemaakte en gratis online assets. Daarnaast heb ik in Unity de game opgebouwd en de verschillende onderdelen samengebracht tot een speelbaar geheel.",
    "game_controller_detail_desc": "Voor dit project heb ik een game contoller gebouwd en gepersonaliseerd. Ik wilde dat die niet alleen goed werkte, maar ook dat die heel eigen is. Ik heb bewust voor een simpel en rustig design gekozen, omdat dat ook bij mij past als ontwerper.\n\nOmdat ik erg van vogels houd, heb ik gekozen voor een vogel/vleugelthema. Dit heb ik verwerkt in het acrylplaatje en de zelfontworpen joystick. Voor het ontwerp op het acrylplaatje heb ik illustrator en een lasersnijder gebuikt en voor de joystick heb ik gebruik gemaakt van blender en een 3D-printer.\n\nQua techniek heb ik de bedrading nauwkeurig aangesloten en gesoldeerd en heb ik de code hiervoor geschreven en steeds opnieuw aangepast totdat ik een gewenst resultaat kreeg.",
    "escape_room_detail_desc": "Voor dit project heb ik samen met twee andere ontwerpers voor opdrachtgever Burg Burg een app-extensie ontworpen voor Roald, een museum-app die als audioguide dient bij kunstwerken. De opdracht was om musea aantrekkelijker te maken voor jongeren tussen de 13 en 17 jaar. We wilden iets bedenken en ontwerpen dat aansluit bij hun interesses en hen op een actieve manier naar de museum collectie laat kijken.\n\nWe kwamen op het idee om een escape room te ontwikkelen, waarbij jongeren kunstwerken kunnen scannen en verschillende mysteries en opdrachten moeten oplossen om uiteindelijk te ontsnappen. Door middel van QR-codes worden ze uitgedaagd om actief naar de museumcollectie te kijken en details in kunstwerken te bekijken. Zo hoeven ze geen lange teksten te lezen, maar worden ze op een speelse manier meegenomen in het museumbezoek.\n\nVoor het ontwerp hebben we gebruikgemaakt van Figma. Hierin hebben we de app-extensie ontworpen en uitgewerkt tot een werkend prototype.",
    "lady_bird_detail_desc": "Voor dit project heb ik een optiteling ontworpen en geanimeerd voor de film Lady Bird. Nadat ik de film had bekeken, heb ik onderzocht welk motief hierin het meest naar voren kwam. Ik kwam uit op de wisselvallige en complexe relatie tussen de hoofdpersoon en haar moeder. Dit heb ik als uitgangspunt gebruikt voor mijn animatie.\n\nIk heb ervoor gekozen om de animatie simpel te houden, maar tegelijkertijd gebruik te maken van symboliek en subtiele verwijzingen naar dit motief. Zo sluit de optiteling aan bij de sfeer en het verhaal van de film, zonder dat er verklapt wordt wat er in de film zal gebeuren.\n\nIk heb de animatie zelf bedacht, getekend en frame voor frame uitgewerkt in FlipaClip. Dit is de eerste keer dat ik een frame-voor-frame animatie heb gemaakt en daarmee ook een nieuwe uitdaging binnen mijn ontwerpproces.",
    "about_title": "Over de ontwerper",
    "about_desc": "Ik ben Kiki Pellis. Een tweede jaars CMD student aan hogeschool Avans in Breda.\n\nWat ik het meest interessant vind binnen de opleiding is alles rondom Creative Technology. Denk hierbij aan coderen, websites bouwen, games maken en zelfs robots bouwen!\n\nMij zal je niet zo snel op de voorgrond zien of horen. Ik werk namelijk liever op de achtergrond. Maar dat betekent niet dat ik niet weet wat er speelt! Ik ben goed in het observeren van de situatie en zoek dingen tot op de bodem uit. Ik let tijdens het ontwerpen vooral op de functionaliteit en of het de beoogde doelgroep aantrekt. Daarnaast zorg ik er altijd voor dat ik mijn ontwerp tot in de details toe goed uitwerk voor een gewenst resultaat.",
    "contact_title": "Contact",
    "contact_email_label": "E-mail:",
    "contact_location_label": "Locatie:",
    "contact_location_val": "- Breda, Nederland",
    "contact_edu_label": "Opleiding:",
    "contact_edu_val": "- Communication & Multi-media<br>&nbsp;&nbsp;Design, Avans Hogeschool",
    "form_heading": "Laat een bericht achter!",
    "form_name_ph": "Naam",
    "form_email_ph": "E-mail",
    "form_message_ph": "Bericht...",
    "form_submit_btn": "Verstuur",
    "form_success_msg": "Bericht verzonden!",
    "footer_back_to_top": "Terug naar boven ↑",
    "footer_projects": "Projecten",
    "footer_about": "Over mij",
    "footer_contact": "Contact",
    "photo_placeholder": "FOTO"
  }
};

// Actuele taal ophalen of defaulten naar "en" (knop toont "NL" zoals in wireframe)
function getCurrentLanguage() {
  const saved = localStorage.getItem("portfolio_lang");
  return saved === "nl" ? "nl" : "en";
}

// Toepassen van geselecteerde taal op alle elementen met data-i18n
function applyLanguage(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;

  const langText = document.getElementById("lang-text");
  if (langText) {
    langText.textContent = t.lang_btn;
  } else {
    const langBtn = document.getElementById("lang-toggle-btn");
    if (langBtn) langBtn.textContent = t.lang_btn;
  }

  const langBtn = document.getElementById("lang-toggle-btn");
  if (langBtn) {
    langBtn.setAttribute("aria-label", lang === "en" ? "Schakel naar Nederlands" : "Switch to English");
  }

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) {
      let rawVal = t[key];
      // Geen letterlijke \n strings tonen, altijd echte line breaks
      if (typeof rawVal === "string") {
        rawVal = rawVal.replace(/\\n/g, "\n");
      }

      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = rawVal;
      } else if (typeof rawVal === "string" && rawVal.includes("<br>")) {
        el.innerHTML = rawVal;
      } else {
        el.textContent = rawVal;
      }
    }
  });

  document.documentElement.lang = lang;
}

// Wisselen tussen NL en EN
function toggleLanguage() {
  const current = getCurrentLanguage();
  const next = current === "en" ? "nl" : "en";
  localStorage.setItem("portfolio_lang", next);
  applyLanguage(next);
}

// =========================================================
// AFBEELDINGEN SLIDER LOGICA
// =========================================================
function initGallerySliders() {
  const sliders = document.querySelectorAll(".gallery-slider");
  sliders.forEach(slider => {
    const prevBtn = slider.querySelector(".slider-prev");
    const nextBtn = slider.querySelector(".slider-next");
    const imgEl = slider.querySelector(".gallery-image");

    const rawImages = slider.getAttribute("data-images");
    let images = [];
    if (rawImages) {
      try {
        images = JSON.parse(rawImages);
      } catch (e) {
        images = [rawImages];
      }
    }

    if (!imgEl || images.length === 0) {
      return;
    }

    let currentIndex = 0;

    function showImage(index) {
      if (images.length === 0) return;
      if (index < 0) index = images.length - 1;
      if (index >= images.length) index = 0;
      currentIndex = index;
      imgEl.style.opacity = "0.3";
      setTimeout(() => {
        imgEl.src = images[currentIndex];
        imgEl.style.opacity = "1";
      }, 120);
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showImage(currentIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showImage(currentIndex + 1);
      });
    }
  });
}

// =========================================================
// LIGHTBOX / MODAL POPUP VOOR AFBEELDINGEN
// =========================================================
function initImageModal() {
  let modal = document.getElementById("image-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "image-modal";
    modal.className = "image-modal";
    modal.innerHTML = `
      <button type="button" class="modal-close-btn" aria-label="Sluiten">&times;</button>
      <div class="modal-content">
        <img id="modal-img" src="" alt="Volledige weergave">
      </div>
    `;
    document.body.appendChild(modal);
  }

  const modalImg = modal.querySelector("#modal-img");
  const closeBtn = modal.querySelector(".modal-close-btn");

  function closeModal() {
    modal.classList.remove("active");
    if (modalImg) modalImg.src = "";
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target === closeBtn) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });

  document.querySelectorAll(".gallery-image").forEach(img => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => {
      if (img.src) {
        modalImg.src = img.src;
        modal.classList.add("active");
      }
    });
  });
}

// =========================================================
// CONTACT FORMULIER LOGICA
// =========================================================
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const nameInput = document.getElementById("form-name");
  const emailInput = document.getElementById("form-email");
  const messageInput = document.getElementById("form-message");
  const statusMsg = document.getElementById("form-status-msg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (nameInput) nameInput.value = "";
    if (emailInput) emailInput.value = "";
    if (messageInput) messageInput.value = "";

    if (statusMsg) {
      const currentLang = getCurrentLanguage();
      statusMsg.textContent = TRANSLATIONS[currentLang].form_success_msg;
      statusMsg.classList.add("visible");
      setTimeout(() => {
        statusMsg.classList.remove("visible");
      }, 3500);
    }
  });
}

// =========================================================
// SMOOTH SCROLL & ACTIEVE NAVIGATIE HIGHLIGHT
// =========================================================
function initScrollAndNavigation() {
  const backToTopBtns = document.querySelectorAll(".back-to-top-btn");
  backToTopBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  const projectsNav = document.querySelector('a[href="#projects"]');
  const heroProjectsLink = document.querySelector(".hero-scroll-btn");
  const projectsSection = document.getElementById("projects");

  function scrollToProjects(e) {
    if (projectsSection) {
      e.preventDefault();
      projectsSection.scrollIntoView({ behavior: "smooth" });
      document.querySelectorAll(".nav-link").forEach(link => link.classList.remove("active"));
      const pLink = document.getElementById("nav-projects-link");
      if (pLink) pLink.classList.add("active");
    }
  }

  if (projectsNav && projectsSection) {
    projectsNav.addEventListener("click", scrollToProjects);
  }
  if (heroProjectsLink && projectsSection) {
    heroProjectsLink.addEventListener("click", scrollToProjects);
  }

  if (projectsSection) {
    window.addEventListener("scroll", () => {
      const rect = projectsSection.getBoundingClientRect();
      const pLink = document.getElementById("nav-projects-link");
      if (pLink) {
        if (rect.top <= 200 && rect.bottom >= 200) {
          pLink.classList.add("active");
        } else if (window.scrollY < 150) {
          pLink.classList.remove("active");
        }
      }
    });
  }
}

// =========================================================
// INITIALISATIE BIJ LADEN
// =========================================================
document.addEventListener("DOMContentLoaded", () => {
  const currentLang = getCurrentLanguage();
  applyLanguage(currentLang);

  const langBtn = document.getElementById("lang-toggle-btn");
  if (langBtn) {
    langBtn.addEventListener("click", (e) => {
      e.preventDefault();
      toggleLanguage();
    });
  }

  initGallerySliders();
  initImageModal();
  initContactForm();
  initScrollAndNavigation();
});