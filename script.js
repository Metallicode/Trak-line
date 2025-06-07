const serviceContent = {
  import: {
    en: {
      title: "Importing Services",
      text: "TRAK-line Ltd offers reliable and efficient freight forwarding solutions for imports by air, sea, land, and rail. We handle the full logistics chain — from customs clearance to last-mile delivery — ensuring your cargo arrives safely, on time, and in full compliance with all regulations.",
    },
    he: {
      title: "שירותי ייבוא",
      text: "חברת טראקליין בע\"מ מספקת פתרונות שילוח אמינים ויעילים לייבוא באמצעות אוויר, ים, יבשה ורכבת. אנו מטפלים בכל שרשרת הלוגיסטיקה — משחרור ממכס ועד אספקה לנקודת היעד — ודואגים שהמטען שלכם יגיע בבטחה, בזמן, ובהתאם לכל התקנות הנדרשות.",
    }
  },
  export: {
    en: {
      title: "Exporting Services",
      text: "We offer comprehensive export services tailored to your needs, including documentation, customs procedures, and coordinated global delivery. TRAK-line Ltd ensures your goods reach their destination efficiently and securely.",
    },
    he: {
      title: "שירותי ייצוא",
      text: "אנו מציעים שירותי ייצוא מקיפים המותאמים לצורכי הלקוח, כולל מסמכים, הליכי מכס, ואספקה מתואמת ברחבי העולם. טראקליין בע\"מ דואגת שהסחורה שלכם תגיע ליעד ביעילות ובבטחה.",
    }
  },
  projects: {
    en: {
      title: "Project Cargo",
      text: "Our project cargo team handles complex and oversized shipments with precision. From engineering coordination to special transport equipment, we provide end-to-end solutions for your most challenging logistics needs.",
    },
    he: {
      title: "פרויקטים מיוחדים",
      text: "צוות הפרויקטים שלנו מטפל במשלוחים מורכבים וחריגים בדיוק רב. מתיאום הנדסי ועד שימוש בציוד הובלה מיוחד – אנו מציעים פתרונות כוללים לכל אתגר לוגיסטי.",
    }
  }
};




function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function switchLanguage(lang) {
  document.querySelectorAll('[data-lang]').forEach(el => {
    const isMatch = el.getAttribute('data-lang') === lang;
    el.classList.toggle('d-none', !isMatch);
  });
  document.documentElement.setAttribute('dir', lang === 'he' ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', lang);
  localStorage.setItem('preferredLang', lang);
}

// Load preferred language on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLang') || 'en';
  switchLanguage(savedLang);
});

// Modal behavior
function openModal(serviceId) {
  const modal = document.getElementById('modal');
  const lang = localStorage.getItem('preferredLang') || 'en';

  const content = serviceContent[serviceId]?.[lang];

  if (content) {
    // Inject content into modal
    modal.querySelector('.modal-title').textContent = content.title;
    modal.querySelector('.modal-body p').textContent = content.text;
    modal.style.display = 'block';
  } else {
    console.error('Unknown serviceId or language:', serviceId, lang);
  }
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Close modal if clicked outside
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target == modal) {
    closeModal();
  }
};
