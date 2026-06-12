import { projects } from "./data/projects.js";
import { experience } from "./data/experience.js";
import { resources } from "./data/resources.js";
import { site } from "./data/site.js";

import { renderProjects } from "./components/renderProjects.js";
import { renderExperience } from "./components/renderExperience.js";
import { renderResources } from "./components/renderResources.js";

/* ── INITIAL RENDER ───────────────────────────────────────── */

renderProjects(projects);
renderExperience(experience);
renderResources(resources);

/* ── OPTIONAL: SITE DATA (name, tagline, footer, etc.) ───── */

const nameEl = document.getElementById("site-name");
const taglineEl = document.getElementById("site-tagline");
const updatedEl = document.getElementById("site-updated");
const footerEl = document.getElementById("footer-copy");

if (nameEl) nameEl.textContent = site.name;
if (taglineEl) taglineEl.textContent = site.tagline;
if (updatedEl) updatedEl.textContent = site.updated;
if (footerEl) footerEl.textContent = site.copyright;
