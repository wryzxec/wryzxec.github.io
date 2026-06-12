export const projectPage = {
  slug: "project-slug",
  title: "Project Title",
  kicker: "Short category or theme",
  intro: "A one or two sentence summary that appears under the large title.",
  updated: "updated Apr 2026",
  links: [
    { label: "Source", href: "https://github.com/yourhandle/project" },
    { label: "Demo", href: "https://example.com" }
  ],
  facts: [
    { label: "Stack", value: "TypeScript, WebGL" },
    { label: "Focus", value: "Visualisation, interaction design" }
  ],
  sections: [
    {
      title: "Overview",
      blocks: [
        {
          type: "paragraph",
          text: "Use paragraph blocks for your normal long-form writing."
        },
        {
          type: "math",
          latex: "E = mc^2"
        },
        {
          type: "image",
          src: "./assets/project-name/hero.gif",
          alt: "Short description of the image",
          caption: "Images and GIFs both work through the same media block."
        },
        {
          type: "list",
          items: [
            "Use lists for concise takeaways.",
            "Keep the sections focused and readable."
          ]
        },
        {
          type: "html",
          html: "<p class=\"project-body-copy\">Use raw HTML only when you want full control for something custom.</p>"
        }
      ]
    }
  ]
};
