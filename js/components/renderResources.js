export function renderResources(resources) {
  const list = document.getElementById("resource-list");
  if (!list) return;

  list.innerHTML = "";

  resources.forEach(resource => {
    const item = document.createElement("a");
    item.className = "resource-card";
    item.href = resource.href;
    item.target = "_blank";
    item.rel = "noopener";

    item.innerHTML = `
      <div class="resource-copy">
        <div class="resource-title-row">
          <span class="resource-title">${resource.title}</span>
        </div>
        <p class="resource-description">${resource.description}</p>
      </div>
      <span class="resource-arrow">↗</span>
    `;

    list.appendChild(item);
  });
}
