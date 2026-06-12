function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isSafeLink(href) {
  try {
    const url = new URL(href, window.location.href);
    return ["http:", "https:", "mailto:"].includes(url.protocol);
  } catch {
    return false;
  }
}

function renderInlineText(text = "") {
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let cursor = 0;
  let html = "";

  for (const match of text.matchAll(linkPattern)) {
    const [source, label, href] = match;
    html += escapeHtml(text.slice(cursor, match.index));

    if (isSafeLink(href)) {
      html += `<a class="project-inline-link" href="${escapeHtml(href)}" target="_blank" rel="noopener">${escapeHtml(label)}</a>`;
    } else {
      html += escapeHtml(label);
    }

    cursor = match.index + source.length;
  }

  return html + escapeHtml(text.slice(cursor));
}

function renderBlock(block) {
  const imageWidth = block.width || (block.scale ? `${block.scale * 100}%` : "");

  switch (block.type) {
    case "paragraph":
      return `<p class="project-body-copy">${renderInlineText(block.text)}</p>`;
    case "math":
      return `<div class="project-math">$$${block.latex}$$</div>`;
    case "image":
      return `
        <figure class="project-media">
          <img 
            src="${block.src}" 
            alt="${block.alt || ""}" 
            class="project-media-image"
            style="${imageWidth ? `width:${imageWidth};` : ""}"
          />
          ${block.caption ? `<figcaption class="project-media-caption">${block.caption}</figcaption>` : ""}
        </figure>
      `;
    case "imageGrid":
      return `
        <div class="project-media-grid">
          ${(block.images || []).map(image => `
            <figure class="project-media project-media-grid-item">
              <img
                src="${image.src}"
                alt="${image.alt || ""}"
                class="project-media-image"
              />
              ${image.caption ? `<figcaption class="project-media-caption">${image.caption}</figcaption>` : ""}
            </figure>
          `).join("")}
        </div>
      `;
    case "list":
      return `
        <ul class="project-body-list">
          ${(block.items || []).map(item => `<li>${renderInlineText(item)}</li>`).join("")}
        </ul>
      `;
    case "html":
      return block.html || "";
    default:
      return "";
  }
}

export function renderProjectPage(project) {
  const titleEl = document.getElementById("project-title");
  const introEl = document.getElementById("project-intro");
  const updatedEl = document.getElementById("project-updated");
  const linksEl = document.getElementById("project-links");
  const factsEl = document.getElementById("project-facts");
  const contentEl = document.getElementById("project-content");

  if (!titleEl || !introEl || !updatedEl || !linksEl || !factsEl || !contentEl) {
    return;
  }

  document.title = `${project.title} | Portfolio`;
  titleEl.textContent = project.title || "";
  introEl.textContent = project.intro || "";
  updatedEl.textContent = project.updated || "";

  linksEl.innerHTML = (project.links || [])
    .map(link => `
      <div class="project-fact">
        <span class="project-fact-label">Links</span>
        <a class="project-fact-link" href="${link.href}" target="_blank" rel="noopener">${link.label}</a>
      </div>
    `)
    .join("");

  factsEl.innerHTML = (project.facts || [])
    .map(fact => `
      <div class="project-fact">
        <span class="project-fact-label">${fact.label}</span>
        <span class="project-fact-value">${fact.value}</span>
      </div>
    `)
    .join("");

  contentEl.innerHTML = (project.sections || [])
    .map(section => `
      <section class="project-section">
        <h2 class="project-section-title">${section.title}</h2>
        <div class="project-section-body">
          ${(section.blocks || []).map(renderBlock).join("")}
        </div>
      </section>
    `)
    .join("");

  if (window.MathJax?.typesetPromise) {
    window.MathJax.typesetPromise([contentEl]);
  }
}

export function renderMissingProject() {
  const titleEl = document.getElementById("project-title");
  const introEl = document.getElementById("project-intro");
  const contentEl = document.getElementById("project-content");

  if (titleEl) titleEl.textContent = "Project not found";
  if (introEl) introEl.textContent = "The requested project page does not exist yet.";
  if (contentEl) {
    contentEl.innerHTML = `
      <section class="project-section">
        <h2 class="project-section-title">Next step</h2>
        <div class="project-section-body">
          <p class="project-body-copy">Add a new project content module and register its slug in the project loader map.</p>
        </div>
      </section>
    `;
  }
}
