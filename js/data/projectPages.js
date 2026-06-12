const projectLoaders = {
  "artificial-life": () => import("./project-pages/artificial-life.js?v=3")
};

export async function loadProjectPage(slug) {
  const loader = projectLoaders[slug];
  if (!loader) return null;

  const module = await loader();
  return module.projectPage;
}
