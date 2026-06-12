import { site } from "./data/site.js?v=2";
import { loadProjectPage } from "./data/projectPages.js?v=3";
import { renderMissingProject, renderProjectPage } from "./components/renderProjectPage.js?v=5";

const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");

const footerEl = document.getElementById("footer-copy");
if (footerEl) footerEl.textContent = site.copyright;

if (!slug) {
  renderMissingProject();
} else {
  loadProjectPage(slug)
    .then(project => {
      if (!project) {
        renderMissingProject();
        return;
      }

      renderProjectPage(project);
    })
    .catch(() => {
      renderMissingProject();
    });
}
