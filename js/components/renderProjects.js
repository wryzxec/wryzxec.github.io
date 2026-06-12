export function renderProjects(projects) {
  const list = document.getElementById("project-list");
  if (!list) return;

  list.innerHTML = "";

  projects.forEach(project => {
    const card = document.createElement("a");
    card.className = "project-card";
    card.href = `./project.html?slug=${encodeURIComponent(project.slug)}`;

    card.innerHTML = `
      <div>
        <div class="project-title">
          ${project.title}
        </div>
        <p class="project-excerpt">${project.excerpt || ""}</p>
        <div class="project-tags">
          ${(project.tags || []).map(tag => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </div>
      <div class="project-right">
        <span class="arrow">↗</span>
        <span class="project-date">${project.date || ""}</span>
      </div>
    `;

    list.appendChild(card);
  });
}
