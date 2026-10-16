"use strict";

const yearElement = document.querySelector(
  "#current-year"
);

if (yearElement) {
  yearElement.textContent =
    new Date().getFullYear().toString();
}

const navigationLinks = Array.from(
  document.querySelectorAll(
    '.navigation-list a[href^="#"]'
  )
);

const observedSections = navigationLinks
  .map((link) => {
    const sectionId = link.getAttribute("href");

    if (!sectionId) {
      return null;
    }

    return document.querySelector(sectionId);
  })
  .filter((section) => section !== null);

function updateActiveNavigation(
  sectionId
) {
  navigationLinks.forEach((link) => {
    const isActive =
      link.getAttribute("href") ===
      `#${sectionId}`;

    link.classList.toggle(
      "active-navigation-link",
      isActive
    );

    if (isActive) {
      link.setAttribute(
        "aria-current",
        "location"
      );
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

if (
  "IntersectionObserver" in window &&
  observedSections.length > 0
) {
  const sectionObserver =
    new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => {
            return entry.isIntersecting;
          })
          .sort((firstEntry, secondEntry) => {
            return (
              secondEntry.intersectionRatio -
              firstEntry.intersectionRatio
            );
          })[0];

        if (visibleEntry) {
          updateActiveNavigation(
            visibleEntry.target.id
          );
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

  observedSections.forEach((section) => {
    sectionObserver.observe(section);
  });
}