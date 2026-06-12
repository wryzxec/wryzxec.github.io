export function renderExperience(experience) {
  const list = document.getElementById("experience-list");
  if (!list) return;

  list.innerHTML = "";

  experience.forEach(item => {
    const row = document.createElement("div");
    row.className = "exp-row";
    const company = item.href
      ? `<a class="exp-company" href="${item.href}" target="_blank" rel="noopener">${item.company}</a>`
      : `<div class="exp-company">${item.company}</div>`;

    row.innerHTML = `
      <div>
        <div class="exp-role">${item.role}</div>
        ${company}
      </div>

      <div class="exp-right">
        <span class="exp-period">${item.period}</span>
        <span class="exp-location">${item.location}</span>
      </div>
    `;

    list.appendChild(row);
  });
}
