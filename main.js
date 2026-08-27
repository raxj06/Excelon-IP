/**
 * Excelon IP - Main Interactions Script
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initIPMatchmaker();
  initIPJourney();
  initCaseStudies();
  initScrollReveal();
  initNewsletterForm();
  initBackToTop();
  initAccordions();
  initContactForm();
  initCareersForm();
  initSubpageSidebar();
  initEngagementCTA();
});

/**
 * Sticky Header Control
 */
function initStickyHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('stuck');
    } else {
      header.classList.remove('stuck');
    }
  };

  window.addEventListener('scroll', handleScroll);
  // Run on initial load in case page is already scrolled
  handleScroll();
}

/**
 * Mobile Navigation Menu Toggles
 */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const header = document.getElementById('header');
  const overlay = document.getElementById('mobile-menu-overlay');
  
  if (!hamburger || !navMenu) return;

  const closeMenu = () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('open');
    if (header) header.classList.remove('menu-open');
    if (overlay) overlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
  };

  // Toggle mobile menu
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('open');
    if (header) header.classList.toggle('menu-open');
    if (overlay) overlay.classList.toggle('active');
    
    if (navMenu.classList.contains('open')) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  });

  // Handle dropdowns on mobile click
  const dropdownItems = document.querySelectorAll('.nav-item');
  dropdownItems.forEach(item => {
    const link = item.querySelector('.nav-link');
    const dropdown = item.querySelector('.dropdown');
    
    if (dropdown && link) {
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 1200) {
          e.preventDefault();
          e.stopPropagation();
          item.classList.toggle('active-mobile');
        }
      });
    }
  });

  // Handle sub-dropdowns on mobile click
  const categoryTitles = document.querySelectorAll('.dropdown-cat-title');
  categoryTitles.forEach(title => {
    title.addEventListener('click', (e) => {
      if (window.innerWidth <= 1200) {
        e.preventDefault();
        e.stopPropagation();
        const parent = title.parentElement;
        if (parent) {
          parent.classList.toggle('active-subcategory');
        }
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && e.target !== hamburger) {
      closeMenu();
    }
  });

  // Close menu when clicking on any link that isn't a dropdown toggle
  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 1200) {
        // If it's a mobile dropdown parent link, we don't close here
        if (link.classList.contains('nav-link') && link.nextElementSibling && link.nextElementSibling.classList.contains('dropdown')) {
          return;
        }
        closeMenu();
      }
    });
  });

  // Close menu when clicking overlay
  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }
}

/**
 * Interactive IP Matchmaker Tool Engine
 */
const MATCHMAKER_DATABASE = {
  startup: {
    patent: {
      title: "Fast-Track Patent Filing for Startups",
      desc: "Get patentability search, provisional specification drafting, and fast-track examination support. Startups qualify for up to 80% government fee concessions in India under the Startup India scheme."
    },
    trademark: {
      title: "Startup Brand & Logo Protection",
      desc: "Includes brand name availability searches, trademark application filing, and registration monitoring. Qualify for 50% government fee concessions on filings."
    },
    copyright: {
      title: "Software & Digital Asset Protection",
      desc: "Register your source code, app layouts, user interface designs, website content, and databases to build a robust copyright defensive strategy."
    },
    strategy: {
      title: "Defensive IP Moat Consulting",
      desc: "Specialized IP audits and competitor patent landscape analyses to help you identify whitespace, avoid infringement, and scale valuation for future funding rounds."
    }
  },
  sme: {
    patent: {
      title: "SME Commercial Patent Portfolio Management",
      desc: "Comprehensive patent searches, Freedom to Operate (FTO) opinions, utility patent drafting, and strategic global filings via the Patent Cooperation Treaty (PCT)."
    },
    trademark: {
      title: "Corporate Brand Integrity",
      desc: "Multi-class trademark registration, global filing strategy, monitoring services against infringers, and robust opposition representations before the registry."
    },
    copyright: {
      title: "Creative Content Licensing",
      desc: "Protecting proprietary catalogs, operational manuals, and training materials. Setting up digital rights assignments and enforcement frameworks."
    },
    strategy: {
      title: "IP Valuation & Monetization",
      desc: "Asset identification, financial valuation of patent and trademark portfolios, and structuring joint ventures, technology transfers, or licensing agreements."
    }
  },
  mnc: {
    patent: {
      title: "Enterprise Patent Landscaping & Enforcement",
      desc: "High-volume patent mapping, validity assessments, state-of-the-art searching, and managing cross-border patent prosecution and defense networks."
    },
    trademark: {
      title: "Global Brand Portfolio Management",
      desc: "Securing international trademark protection under the Madrid System, handling brand expansions, brand audits, and anti-counterfeiting campaigns."
    },
    copyright: {
      title: "Enterprise IP Assets Control",
      desc: "Structuring copyright policies, software licensing compliances, global entertainment content distribution rights, and database protection controls."
    },
    strategy: {
      title: "Mergers & Acquisitions IP Audits",
      desc: "Thorough IP due diligence during acquisitions, identifying operational risk vectors, valuing target IP portfolios, and licensing strategies."
    }
  },
  individual: {
    patent: {
      title: "Inventor Patent Filing & Search",
      desc: "Prior-art search, draft provisional/complete patent specifications, and coordinate technical review sessions to represent your invention before the Patent Office."
    },
    trademark: {
      title: "Personal Brand & Trade Name Registration",
      desc: "Securing your unique trade name or logo design class filings. Protect your personal professional brand against copycats and spoofing."
    },
    copyright: {
      title: "Artistic, Literary & Scholarly Protection",
      desc: "Register your book, screenplay, artistic drawings, music tracks, research papers, or product packaging designs to establish legal ownership."
    },
    strategy: {
      title: "IP Licensing & Royalties Strategy",
      desc: "Drafting licensing contracts, revenue-sharing agreements, and royalty audits to help individual inventors monetize their innovations safely."
    }
  }
};

function initIPMatchmaker() {
  const orgButtons = document.querySelectorAll('[data-match-org]');
  const goalButtons = document.querySelectorAll('[data-match-goal]');
  const resultContainer = document.getElementById('matchmaker-result');
  const resultTitle = document.getElementById('result-title');
  const resultDesc = document.getElementById('result-desc');

  if (!resultContainer) return;

  let selectedOrg = null;
  let selectedGoal = null;

  // Organization buttons click handler
  orgButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      orgButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedOrg = btn.getAttribute('data-match-org');
      evaluateMatch();
    });
  });

  // Goal buttons click handler
  goalButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      goalButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedGoal = btn.getAttribute('data-match-goal');
      evaluateMatch();
    });
  });

  function evaluateMatch() {
    if (!selectedOrg || !selectedGoal) return;

    // Retrieve data
    const matchedData = MATCHMAKER_DATABASE[selectedOrg]?.[selectedGoal] || {
      title: "Tailored IP Consultation Setup",
      desc: "Based on your unique profile and goals, we recommend a custom legal consultation. Let our lawyers design an individualized protection framework for your project."
    };

    // Smooth transition
    resultContainer.classList.remove('visible');
    
    setTimeout(() => {
      resultTitle.textContent = matchedData.title;
      resultDesc.textContent = matchedData.desc;
      resultContainer.classList.add('visible');
    }, 200);
  }
}

/**
 * Tabbed Case Studies Switcher
 */
function initCaseStudies() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const caseCards = document.querySelectorAll('.case-card');

  if (tabButtons.length === 0 || caseCards.length === 0) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetCase = btn.getAttribute('data-case');
      
      // Update buttons
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update card displays
      caseCards.forEach(card => {
        if (card.getAttribute('id') === targetCase) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
    });
  });
}

/**
 * IntersectionObserver Scroll Reveals
 */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (elements.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elements.forEach(el => observer.observe(el));
}

/**
 * Footer Newsletter Signup Form Validations & Submissions
 */
function initNewsletterForm() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;

  const phoneInput = form.querySelector('input[name="phone"]');
  const emailInput = form.querySelector('input[name="email"]');
  const statusMsg = document.getElementById('newsletter-status');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Clear previous status
    statusMsg.className = 'form-message';
    statusMsg.textContent = '';
    
    const emailVal = emailInput.value.trim();
    const phoneVal = phoneInput.value.trim();

    // Validations
    if (!emailVal) {
      showError("Please enter your email address.");
      return;
    }

    if (!validateEmail(emailVal)) {
      showError("Please enter a valid email address.");
      return;
    }

    if (phoneVal && !validatePhone(phoneVal)) {
      showError("Please enter a valid 10-digit phone number or leave empty.");
      return;
    }

    // Success Mock Response
    showSuccess("Success! Thank you for subscribing to our newsletter.");
    form.reset();
  });

  function showError(msg) {
    statusMsg.className = 'form-message error';
    statusMsg.textContent = msg;
  }

  function showSuccess(msg) {
    statusMsg.className = 'form-message success';
    statusMsg.textContent = msg;
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validatePhone(phone) {
    // Basic validation for 10 digits
    const re = /^\+?[0-9]{10,13}$/;
    return re.test(phone.replace(/[\s-]/g, ''));
  }
}

/**
 * Back to Top Scrolling
 */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Interactive IP Journey Stepper
 */
function initIPJourney() {
  const togglePatent = document.getElementById('journey-toggle-patent');
  const toggleTrademark = document.getElementById('journey-toggle-trademark');
  const timelineSteps = document.getElementById('timeline-steps');
  const detailsBox = document.getElementById('journey-details-box');
  const timelineLine = document.querySelector('.timeline-line');
  
  if (!togglePatent || !toggleTrademark || !timelineSteps || !detailsBox || !timelineLine) return;

  const patentSteps = [
    {
      title: "Invention Disclosure",
      shortLabel: "Disclosure",
      duration: "1-2 Weeks",
      desc: "Document the technical architecture and flowcharts of your innovation.",
      checklist: [
        "Technical description",
        "Signed disclosure form",
        "Team NDA"
      ],
      strategy: "Avoid public disclosure before filing to protect novelty."
    },
    {
      title: "Prior Art Search",
      shortLabel: "Search",
      duration: "1-2 Weeks",
      desc: "Search global databases to ensure novelty and freedom-to-operate.",
      checklist: [
        "Keywords list",
        "Search report",
        "Patentability opinion"
      ],
      strategy: "Search early to avoid unnecessary drafting expenses."
    },
    {
      title: "Drafting Specification",
      shortLabel: "Drafting",
      duration: "2-3 Weeks",
      desc: "Draft description and claims mapping your patent boundary.",
      checklist: [
        "Schematics/drawings",
        "Draft description",
        "Independent claims"
      ],
      strategy: "Balance broad claims for protection with narrow claims for validity."
    },
    {
      title: "Filing Application",
      shortLabel: "Filing",
      duration: "1 Day",
      desc: "Submit specifications to secure an early priority timestamp.",
      checklist: [
        "Form 1 & 2 filings",
        "Inventorship declaration",
        "Fee receipt"
      ],
      strategy: "A provisional filing secures your date while you refine the product."
    },
    {
      title: "Examination & Prosecution",
      shortLabel: "Prosecution",
      duration: "12-36 Months",
      desc: "Respond to examiner objections and first examination reports.",
      checklist: [
        "FER document",
        "Form 18 request",
        "Response to objections"
      ],
      strategy: "Overcome objections by amending claims without losing scope."
    },
    {
      title: "Patent Grant",
      shortLabel: "Grant",
      duration: "Life of Patent",
      desc: "Receive the official patent certificate, granting a 20-year monopoly.",
      checklist: [
        "Grant certificate",
        "Patent register entry",
        "Renewal schedule"
      ],
      strategy: "Use your patent to secure funding and licensing revenue."
    }
  ];

  const trademarkSteps = [
    {
      title: "Brand Ideation & Classification",
      shortLabel: "Ideation",
      duration: "1-2 Weeks",
      desc: "Select brand names or logos and classify under the 45 TM classes.",
      checklist: [
        "High-res logo files",
        "Slogan candidates",
        "Target classes"
      ],
      strategy: "Distinctive names offer stronger legal protection than descriptive ones."
    },
    {
      title: "Clearance Search",
      shortLabel: "Search",
      duration: "2-3 Days",
      desc: "Check global registries for conflicting or similar marks.",
      checklist: [
        "Search report",
        "Phonetic assessment",
        "Risk analysis"
      ],
      strategy: "Search first to avoid objections and save filing fees."
    },
    {
      title: "Filing Application",
      shortLabel: "Filing",
      duration: "1 Day",
      desc: "Submit form TM-A to start using the 'TM' symbol.",
      checklist: [
        "Form TM-A submission",
        "Power of Attorney",
        "Affidavit of use"
      ],
      strategy: "File early to secure rights before launching publicly."
    },
    {
      title: "Examination & Journal Publication",
      shortLabel: "Examination",
      duration: "4-8 Months",
      desc: "Examiner reviews the application, followed by a 4-month public opposition window.",
      checklist: [
        "Review update",
        "Objection response",
        "Journal tracker"
      ],
      strategy: "Monitor opposition closely to defend your brand."
    },
    {
      title: "Registration & Renewal",
      shortLabel: "Registration",
      duration: "Ongoing",
      desc: "Receive your registration certificate and renew every 10 years.",
      checklist: [
        "Registration certificate",
        "® symbol approval",
        "Renewal tracker"
      ],
      strategy: "Monitor market listings to prevent dilution of your trademark."
    }
  ];

  let currentJourney = 'patent';
  let activeStep = 0;
  let isScrollingFromClick = false;
  let scrollTimeout = null;
  let updateTimeout = null;

  const section = document.getElementById('ip-journey');

  function getSteps() {
    return currentJourney === 'patent' ? patentSteps : trademarkSteps;
  }

  // Update detail card content based on active step
  function updateDetails() {
    const steps = getSteps();
    const step = steps[activeStep];
    if (!step) return;

    if (updateTimeout) clearTimeout(updateTimeout);

    // Fade out details box then fade back in
    detailsBox.style.opacity = '0';
    detailsBox.style.transform = 'translateY(10px)';
    
    updateTimeout = setTimeout(() => {
      // Update fields with defensive checks
      const durationEl = document.getElementById('journey-duration');
      const titleEl = document.getElementById('journey-step-title');
      const descEl = document.getElementById('journey-step-desc');
      const strategyEl = document.getElementById('journey-strategy');
      const checklistUl = document.getElementById('journey-checklist');

      if (durationEl) durationEl.textContent = step.duration;
      if (titleEl) titleEl.textContent = step.title;
      if (descEl) descEl.textContent = step.desc;
      if (strategyEl) strategyEl.textContent = step.strategy;

      // Update checklist
      if (checklistUl) {
        checklistUl.innerHTML = '';
        step.checklist.forEach(item => {
          const li = document.createElement('li');
          li.innerHTML = `<svg class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> ${item}`;
          checklistUl.appendChild(li);
        });
      }

      // Fade back in
      detailsBox.style.opacity = '1';
      detailsBox.style.transform = 'translateY(0)';
      updateTimeout = null;
    }, 200);
  }

  // Re-render bubbles when journey changes
  function renderBubbles() {
    const steps = getSteps();
    timelineSteps.innerHTML = '';
    
    steps.forEach((step, index) => {
      const btn = document.createElement('button');
      btn.className = `step-bubble ${index === activeStep ? 'active' : ''} ${index < activeStep ? 'completed' : ''}`;
      btn.setAttribute('data-step', index);
      btn.setAttribute('aria-label', `Step ${index + 1}: ${step.title}`);
      
      btn.innerHTML = `
        <span class="bubble-num">${index + 1}</span>
        <span class="bubble-label">${step.shortLabel}</span>
      `;
      
      btn.addEventListener('click', () => {
        activeStep = index;
        updateActiveStates();
        scrollToStep(index);
      });
      
      timelineSteps.appendChild(btn);
    });

    updateLineProgress();
  }

  function updateActiveStates() {
    const bubbles = timelineSteps.querySelectorAll('.step-bubble');
    bubbles.forEach((bubble, index) => {
      if (index === activeStep) {
        bubble.classList.add('active');
        bubble.classList.remove('completed');
      } else if (index < activeStep) {
        bubble.classList.add('completed');
        bubble.classList.remove('active');
      } else {
        bubble.classList.remove('active', 'completed');
      }
    });

    updateLineProgress();
    updateDetails();
  }

  function updateLineProgress() {
    const steps = getSteps();
    const percent = (activeStep / (steps.length - 1)) * 100;
    
    // Set custom property for CSS line drawing
    timelineLine.style.setProperty('--line-progress', `${percent}%`);
  }

  // Smooth scroll to the position that activates a specific step
  function scrollToStep(index) {
    isScrollingFromClick = true;
    if (scrollTimeout) clearTimeout(scrollTimeout);

    const pinContainer = section.querySelector('.journey-pin-container');
    const stickyWrapper = section.querySelector('.journey-sticky-wrapper');
    const isSticky = stickyWrapper && window.getComputedStyle(stickyWrapper).position === 'sticky';

    if (isSticky && pinContainer && stickyWrapper) {
      const rect = pinContainer.getBoundingClientRect();
      const pinContainerAbsoluteTop = window.scrollY + rect.top;
      const computedStyle = window.getComputedStyle(stickyWrapper);
      const stickyTop = parseInt(computedStyle.top, 10) || 95;
      const totalScrollDist = rect.height - stickyWrapper.offsetHeight;

      // Scroll to center of the step's segment
      const targetProgress = (index + 0.5) / getSteps().length;
      const targetScrollY = pinContainerAbsoluteTop - (stickyTop - targetProgress * totalScrollDist);

      window.scrollTo({
        top: targetScrollY,
        behavior: 'smooth'
      });
    } else {
      // Mobile: Scroll the details box into view so they can see the content
      detailsBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    scrollTimeout = setTimeout(() => {
      isScrollingFromClick = false;
    }, 800);
  }

  // Scroll back to the top area of the stepper section when toggling Patent/Trademark
  function scrollToStart() {
    isScrollingFromClick = true;
    if (scrollTimeout) clearTimeout(scrollTimeout);

    const pinContainer = section.querySelector('.journey-pin-container');
    const stickyWrapper = section.querySelector('.journey-sticky-wrapper');
    const isSticky = stickyWrapper && window.getComputedStyle(stickyWrapper).position === 'sticky';

    if (isSticky && pinContainer && stickyWrapper) {
      const rect = pinContainer.getBoundingClientRect();
      const pinContainerAbsoluteTop = window.scrollY + rect.top;
      const computedStyle = window.getComputedStyle(stickyWrapper);
      const stickyTop = parseInt(computedStyle.top, 10) || 95;

      const targetScrollY = pinContainerAbsoluteTop - stickyTop;

      window.scrollTo({
        top: targetScrollY,
        behavior: 'smooth'
      });
    } else {
      // Mobile fallback
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    scrollTimeout = setTimeout(() => {
      isScrollingFromClick = false;
    }, 800);
  }

  // Scroll listener to update active step based on scroll depth within the section
  function handleScroll() {
    if (isScrollingFromClick) return;
    
    const pinContainer = section.querySelector('.journey-pin-container');
    const stickyWrapper = section.querySelector('.journey-sticky-wrapper');
    if (!pinContainer || !stickyWrapper) return;

    const isSticky = window.getComputedStyle(stickyWrapper).position === 'sticky';

    if (isSticky) {
      const rect = pinContainer.getBoundingClientRect();
      const computedStyle = window.getComputedStyle(stickyWrapper);
      const stickyTop = parseInt(computedStyle.top, 10) || 95;
      
      const totalScrollDist = rect.height - stickyWrapper.offsetHeight;
      const scrolledDist = stickyTop - rect.top;
      
      let progress = scrolledDist / totalScrollDist;
      progress = Math.max(0, Math.min(1, progress));
      
      const steps = getSteps();
      const targetStep = Math.min(steps.length - 1, Math.floor(progress * steps.length));
      
      if (targetStep !== activeStep) {
        activeStep = targetStep;
        updateActiveStates();
      }
    }
  }

  // Switch Journey handler
  function switchJourney(journey) {
    if (currentJourney === journey) return;
    
    currentJourney = journey;
    activeStep = 0;
    
    // Toggle active classes on toggles
    if (journey === 'patent') {
      togglePatent.classList.add('active');
      toggleTrademark.classList.remove('active');
    } else {
      toggleTrademark.classList.add('active');
      togglePatent.classList.remove('active');
    }

    renderBubbles();
    updateActiveStates();
    scrollToStart();
  }

  togglePatent.addEventListener('click', () => switchJourney('patent'));
  toggleTrademark.addEventListener('click', () => switchJourney('trademark'));

  window.addEventListener('scroll', handleScroll);

  // Initialize view
  renderBubbles();
  updateDetails();
  // Check position immediately in case page was reloaded down the page
  setTimeout(handleScroll, 100);
}

/**
 * Subpage Accordions Control (Services & Careers)
 */
function initAccordions() {
  // Services accordions
  const serviceHeaders = document.querySelectorAll('.service-accordion-header');
  serviceHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const card = header.closest('.service-accordion-card');
      const content = card.querySelector('.service-accordion-content');
      if (!card || !content) return;
      
      // Close other accordions
      const allCards = document.querySelectorAll('.service-accordion-card');
      allCards.forEach(c => {
        if (c !== card && c.classList.contains('open')) {
          c.classList.remove('open');
          c.querySelector('.service-accordion-content').style.maxHeight = null;
        }
      });

      card.classList.toggle('open');
      if (card.classList.contains('open')) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = null;
      }
    });
  });

  // Vacancy accordions
  const vacancyHeaders = document.querySelectorAll('.vacancy-header');
  vacancyHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const card = header.closest('.vacancy-card');
      const content = card.querySelector('.vacancy-content');
      if (!card || !content) return;

      // Close other vacancies
      const allCards = document.querySelectorAll('.vacancy-card');
      allCards.forEach(c => {
        if (c !== card && c.classList.contains('open')) {
          c.classList.remove('open');
          c.querySelector('.vacancy-content').style.maxHeight = null;
        }
      });

      card.classList.toggle('open');
      if (card.classList.contains('open')) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = null;
      }
    });
  });

  // Handle initial hash routing for accordions
  const checkHashAndOpen = () => {
    const hash = window.location.hash;
    if (hash) {
      const targetId = hash.substring(1);
      const targetCard = document.getElementById(targetId);
      if (targetCard && (targetCard.classList.contains('service-accordion-card') || targetCard.classList.contains('vacancy-card'))) {
        setTimeout(() => {
          const header = targetCard.querySelector('.service-accordion-header') || targetCard.querySelector('.vacancy-header');
          if (header) header.click();
          targetCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    }
  };

  // Run on load and hashchange
  checkHashAndOpen();
  window.addEventListener('hashchange', checkHashAndOpen);
}

/**
 * Contact Us Inquiry Form Validator
 */
function initContactForm() {
  const form = document.getElementById('inquiry-form');
  if (!form) return;

  const statusEl = document.getElementById('inquiry-status');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Clear previous message
    if (statusEl) {
      statusEl.style.display = 'none';
      statusEl.className = 'form-message';
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Submit';

    // Simple validation
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();

    if (!name || !email || !message) {
      showStatus('Please fill in all required fields.', 'error');
      return;
    }

    // Email regex check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showStatus('Please enter a valid email address.', 'error');
      return;
    }

    // Set loading state
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<svg class="spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="animation: spin 1s linear infinite; margin-right: 8px; display: inline-block; vertical-align: middle;"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-opacity="0.25"></circle><path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" fill="currentColor"></path></svg> Sending...`;
    }

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1200));
      showStatus('Thank you! Your message has been sent successfully. We will reach out shortly.', 'success');
      form.reset();
    } catch (err) {
      showStatus('Oops! Something went wrong. Please try again later.', 'error');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    }
  });

  function showStatus(msg, type) {
    if (!statusEl) {
      alert(msg);
      return;
    }
    statusEl.textContent = msg;
    statusEl.className = `form-message ${type}`;
    statusEl.style.display = 'block';
  }
}

/**
 * Careers Openings Apply & File Upload handler
 */
function initCareersForm() {
  const form = document.getElementById('careers-form');
  const dropZone = document.querySelector('.upload-drop-zone');
  const fileInput = document.getElementById('resume');
  const fileDisplay = document.querySelector('.selected-file-display');
  const uploadText = document.querySelector('.upload-text');
  const vacancySelect = document.getElementById('vacancy-select');

  // Accordion "Apply Now" buttons routing
  const applyButtons = document.querySelectorAll('.apply-btn');
  applyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.vacancy-card');
      if (!card) return;
      const roleTitle = card.querySelector('.vacancy-header-left h4').textContent.trim();
      
      // Update dropdown selection
      if (vacancySelect) {
        for (let i = 0; i < vacancySelect.options.length; i++) {
          if (vacancySelect.options[i].text.includes(roleTitle) || roleTitle.includes(vacancySelect.options[i].text)) {
            vacancySelect.selectedIndex = i;
            break;
          }
        }
      }

      // Scroll to application form card
      const formCard = document.querySelector('.careers-form-card');
      if (formCard) {
        formCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Flash border to draw attention
        formCard.style.borderColor = 'var(--color-primary)';
        setTimeout(() => {
          formCard.style.borderColor = '';
        }, 1500);
      }
    });
  });

  if (!form) return;

  const statusEl = document.getElementById('careers-status');

  // Drag and drop event bindings
  if (dropZone && fileInput) {
    ['dragenter', 'dragover'].forEach(eventName => {
      dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.add('dragover');
      }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.remove('dragover');
      }, false);
    });

    dropZone.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      const files = dt.files;
      if (files.length) {
        fileInput.files = files;
        handleFileSelection(files[0].name);
      }
    }, false);

    fileInput.addEventListener('change', (e) => {
      if (fileInput.files.length) {
        handleFileSelection(fileInput.files[0].name);
      }
    });
  }

  function handleFileSelection(filename) {
    if (fileDisplay) {
      fileDisplay.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg> ${filename}`;
      fileDisplay.style.display = 'inline-flex';
    }
    if (uploadText) {
      uploadText.innerHTML = `File selected: <span>${filename}</span>`;
    }
  }

  // Handle form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Clear status
    if (statusEl) {
      statusEl.style.display = 'none';
      statusEl.className = 'form-message';
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Submit Application';

    // Simple validation
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    
    if (!name || !email) {
      showStatus('Please fill in all required fields.', 'error');
      return;
    }

    // File check
    if (!fileInput || !fileInput.files.length) {
      showStatus('Please upload your resume (PDF/DOCX).', 'error');
      return;
    }

    // Set loading state
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<svg class="spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="animation: spin 1s linear infinite; margin-right: 8px; display: inline-block; vertical-align: middle;"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-opacity="0.25"></circle><path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" fill="currentColor"></path></svg> Submitting...`;
    }

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      showStatus('Application submitted successfully! Our HR team will review your profile and get in touch.', 'success');
      form.reset();
      if (fileDisplay) fileDisplay.style.display = 'none';
      if (uploadText) uploadText.innerHTML = 'Drag & drop resume here or <span>browse files</span>';
    } catch (err) {
      showStatus('Oops! Submission failed. Please try again.', 'error');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    }
  });

  function showStatus(msg, type) {
    if (!statusEl) {
      alert(msg);
      return;
    }
    statusEl.textContent = msg;
    statusEl.className = `form-message ${type}`;
    statusEl.style.display = 'block';
  }
}

/**
 * Sticky Sidebar Active Link Indicator & Smooth Scroll
 */
function initSubpageSidebar() {
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  const sections = document.querySelectorAll('.service-section-block');
  if (!sidebarLinks.length || !sections.length) return;

  // Smooth scroll to sections when clicking sidebar links
  sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        const headerOffset = 90; // Approx header height
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Set active link immediately on click
        sidebarLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Push hash state silently without jumping
        history.pushState(null, null, targetId);
      }
    });
  });

  // Highlight active link based on scroll position
  function highlightActiveLink() {
    let scrollPosition = window.scrollY + 120; // offset value for early trigger

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < (sectionTop + sectionHeight)) {
        sidebarLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightActiveLink);
  highlightActiveLink(); // Run once initially
}

/**
 * Engagement Layer: Sticky Consultation Bar + Scroll/Exit-Intent Modal
 * Injects markup site-wide (all pages load main.js) so no per-page HTML edits are needed.
 * Non-blocking: never traps the user, closes on Esc/backdrop/close button, shows once per session.
 */
function initEngagementCTA() {
  const PHONE_DISPLAY = '+91-9512332604';
  const PHONE_HREF = 'tel:+919512332604';
  const WHATSAPP_HREF = 'https://wa.me/919512332604?text=Hello%20EXCELON%20IP%2C%20I%27d%20like%20a%20free%20consultation.';
  const SESSION_KEY = 'excelonip_consult_modal_shown';

  injectStickyBar();
  injectModal();

  const stickyBar = document.getElementById('sticky-consult-bar');
  const modal = document.getElementById('consult-modal');
  if (!stickyBar || !modal) return;

  const modalForm = modal.querySelector('#consult-modal-form');
  const modalStatus = modal.querySelector('#consult-modal-status');
  const closeButtons = modal.querySelectorAll('[data-modal-close]');

  function openModal() {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    modal.classList.add('active');
    document.body.classList.add('no-scroll');
    sessionStorage.setItem(SESSION_KEY, '1');
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }

  closeButtons.forEach((btn) => btn.addEventListener('click', closeModal));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });

  // Sticky bar: reveal after scrolling past the hero / first viewport
  const revealStickyBar = () => {
    if (window.scrollY > 400) {
      stickyBar.classList.add('visible');
      document.body.classList.add('has-sticky-consult-bar');
    } else {
      stickyBar.classList.remove('visible');
      document.body.classList.remove('has-sticky-consult-bar');
    }
  };
  window.addEventListener('scroll', revealStickyBar);
  revealStickyBar();

  // Scroll-depth trigger: open modal once user reaches ~55% of page height
  const scrollDepthTrigger = () => {
    if (sessionStorage.getItem(SESSION_KEY)) {
      window.removeEventListener('scroll', scrollDepthTrigger);
      return;
    }
    const scrollDepth = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
    if (scrollDepth > 0.55) {
      openModal();
      window.removeEventListener('scroll', scrollDepthTrigger);
    }
  };
  window.addEventListener('scroll', scrollDepthTrigger);

  // Exit-intent trigger (desktop): mouse leaves toward the top of the viewport
  document.addEventListener('mouseout', (e) => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    if (e.clientY <= 0 && !e.relatedTarget) {
      openModal();
    }
  });

  // Lead form validation + mock submit (mirrors newsletter/contact form pattern)
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      modalStatus.className = 'form-message';
      modalStatus.textContent = '';

      const nameVal = modalForm.querySelector('[name="name"]').value.trim();
      const phoneVal = modalForm.querySelector('[name="phone"]').value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\+?[0-9]{10,13}$/;
      const emailInput = modalForm.querySelector('[name="email"]');
      const emailVal = emailInput.value.trim();

      if (!nameVal || !phoneVal || !emailVal) {
        modalStatus.textContent = 'Please fill in all fields.';
        modalStatus.classList.add('error');
        return;
      }
      if (!emailRegex.test(emailVal)) {
        modalStatus.textContent = 'Please enter a valid email address.';
        modalStatus.classList.add('error');
        return;
      }
      if (!phoneRegex.test(phoneVal.replace(/[\s-]/g, ''))) {
        modalStatus.textContent = 'Please enter a valid phone number.';
        modalStatus.classList.add('error');
        return;
      }

      modalStatus.textContent = 'Thank you! Our team will call you back shortly.';
      modalStatus.classList.add('success');
      modalForm.reset();
      setTimeout(closeModal, 1800);
    });
  }

  function injectStickyBar() {
    if (document.getElementById('sticky-consult-bar')) return;
    const bar = document.createElement('div');
    bar.id = 'sticky-consult-bar';
    bar.className = 'sticky-consult-bar';
    bar.innerHTML = `
      <div class="sticky-consult-inner">
        <span class="sticky-consult-text">Protect your idea before someone else files it.</span>
        <div class="sticky-consult-actions">
          <a href="${PHONE_HREF}" class="sticky-consult-link" aria-label="Call Excelon IP">${PHONE_DISPLAY}</a>
          <button type="button" class="btn btn-gold sticky-consult-btn" data-open-consult-modal>Book Free Consultation</button>
        </div>
      </div>`;
    document.body.appendChild(bar);
    bar.querySelector('[data-open-consult-modal]').addEventListener('click', () => {
      document.getElementById('consult-modal').classList.add('active');
      document.body.classList.add('no-scroll');
      sessionStorage.setItem(SESSION_KEY, '1');
    });
  }

  function injectModal() {
    if (document.getElementById('consult-modal')) return;
    const modalEl = document.createElement('div');
    modalEl.id = 'consult-modal';
    modalEl.className = 'consult-modal';
    modalEl.innerHTML = `
      <div class="consult-modal-card" role="dialog" aria-modal="true" aria-labelledby="consult-modal-title">
        <button type="button" class="consult-modal-close" data-modal-close aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
        <div class="consult-modal-side">
          <span class="consult-modal-eyebrow">Free 15-Minute Call</span>
          <h3 id="consult-modal-title" class="consult-modal-title">Talk to an IP Attorney before your filing window closes</h3>
          <p class="consult-modal-desc">Patents and trademarks are time-sensitive. Get a quick assessment of your novelty, filing risk, and next steps at no cost.</p>
          <a href="${WHATSAPP_HREF}" target="_blank" rel="noopener" class="consult-modal-whatsapp">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            Or message us on WhatsApp
          </a>
        </div>
        <form class="consult-modal-form" id="consult-modal-form">
          <div class="form-group">
            <input type="text" name="name" class="form-input" placeholder="Full Name*" required>
          </div>
          <div class="form-group">
            <input type="tel" name="phone" class="form-input" placeholder="Phone Number*" required>
          </div>
          <div class="form-group">
            <input type="email" name="email" class="form-input" placeholder="Email Address*" required>
          </div>
          <button type="submit" class="btn btn-primary consult-modal-submit">Request Callback</button>
          <div class="form-message" id="consult-modal-status"></div>
        </form>
      </div>`;
    document.body.appendChild(modalEl);
  }
}

