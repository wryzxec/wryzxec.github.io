export const projectPage = {
  slug: "artificial-life",
  title: "Artificial Life (ALife)",
  intro: "A project exploring artificial life through cellular automata, observing increasingly complex emergent behaviour from surprisingly simple systems.",
  updated: "updated Jun 2026",
  links: [
    { label: "GitHub", href: "https://github.com/wryzxec/ALife" }
  ],
  facts: [
    { label: "Stack", value: "C++, SFML" }
  ],
  sections: [
    {
      title: "Overview",
      blocks: [
        {
          type: "paragraph",
          text: `This project explores a range of cellular automata systems, including Conway's Game of Life, Larger-than-Life, SmoothLife, and Lenia.`
        }
      ]
    },
    {
      title: "Conway's Game of Life",
      blocks: [
        {
          type: "paragraph",
          text: `Conway's Game of Life was devised by John Conway in 1970. In this game, the universe consists of an infinite 2D grid of square cells. Each cell has two states
                 (dead or alive) and interacts with its eight neighbours. Each cell is subject to the following rules:`
        },
        {
          type: "list",
          items: [
            "Any live cell with fewer than two live neighbours dies, as if by underpopulation.",
            "Any live cell with two or three live neighbours lives on to the next generation.",
            "Any live cell with more than three live neighbours dies, as if by overpopulation.",
            "Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction."
          ]
        },
        {
          type: "paragraph",
          text: `From these simple rules, we can begin to see some really interesting behaviour.`
        },
        {
          type: "imageGrid",
          images: [
            {
              src: "assets/projects/alife/glider.gif",
              alt: "Glider.",
              caption: "Glider."
            },
            {
              src: "assets/projects/alife/pulsar.gif",
              alt: "Pulsar",
              caption: "Pulsar."
            }
          ]
        },
        // {
        //   type: "math",
        //   latex: "s_{t+1}(i, j) = f\\left(s_t(i, j), \\sum_{(m,n) \\in \\mathcal{N}} s_t(m, n)\\right)"
        // },
        // {
        //   type: "paragraph",
        //   text: "That formulation made it easier to reason about the update loop and document alternative rule sets cleanly."
        // }
      ]
    },
    // {
    //   title: "Visual Output",
    //   blocks: [
    //     {
    //       type: "paragraph",
    //       text: "The page template supports static images and animated GIFs, so each project can include snapshots, demos, and annotated diagrams as the write-up grows."
    //     },
    //     {
    //       type: "image",
    //       src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80",
    //       alt: "Code displayed on a monitor",
    //       caption: "Placeholder media block. Swap this for a local screenshot or GIF whenever you're ready."
    //     }
    //   ]
    // },
    {
      title: "Generalising...",
      blocks: [
        {
          type: "paragraph",
          text: "We can describe each cellular automata system using the same underlying structure. At each step, the system observes the current world, applies an update rule, and then integrates that change into the next state."
        },
        {
          type: "math",
          latex: "A_{t+\\Delta t}=\\mathcal{I}\\Bigl(A_t,\\;\\mathcal{U}\\bigl(A_t,\\;\\mathcal{O}(A_t)\\bigr)\\Bigr)"
        },
        {
          type: "paragraph",
          text: `Here, $A_t$ is the current state at time $t$, $\\mathcal{O}$ observes local neighbourhood information,
                $\\mathcal{U}$ decides how the state should change based on that observation, and $\\mathcal{I}$ applies the change to produce the next state.`

        }
      ]
    },
    {
      title: "Larger-than-Life",
      blocks: [
        {
          type: "paragraph",
          text: `Larger-than-Life extends Conway's Game of Life by allowing cells to observe much larger neighbourhoods. In Conway's GoL, each cell observes a radius of 1 in every direction: its [Moore neighbourhood](https://en.wikipedia.org/wiki/Moore_neighborhood). In Larger-than-Life, this radius can be 5, 10, or more.`
        },
        {
          type: "paragraph",
          text: `The update rule is also generalised. Larger-than-Life uses birth and survival ranges. A dead cell is born if its neighbourhood count falls within the birth range, and a live cell survives if its count falls within the survival range.`
        },
        {
          type: "imageGrid",
          images: [
            {
              src: "assets/projects/alife/bosco-rule.gif",
              alt: "Bosco's Rule.",
              caption: `Bosco's Rule.`
            },
            {
              src: "assets/projects/alife/bosco-bug.gif",
              alt: "Bosco Bug.",
              caption: `Bosco "Bug".`
            }
          ]
        }
      ]
    },
    {
      title: "SmoothLife",
      blocks: [
        {
          type: "paragraph",
          text: `SmoothLife takes things a step further. Cell states become continuous, and neighbourhood measurements are computed as smooth averages over circular regions.`
        },
        {
          type: "paragraph",
          text: `Cells are no longer simply alive or dead. Instead, each cell stores a continuous value between 0 and 1, representing its level of activity. For each cell,
                 SmoothLife measures two regions: an inner disk and a surrounding [annulus](https://en.wikipedia.org/wiki/Annulus_%28mathematics%29). The observation operator
                 $\\mathcal{O}$ computes the average state within each region.`
        },
        {
          type: "paragraph",
          text: `Unlike GoL and LtL, where birth and survival are defined by hard thresholds, SmoothLife uses smooth [sigmoid](https://en.wikipedia.org/wiki/Sigmoid_function)
                 transition functions. These functions no longer choose the next state directly, rather they produce a continuous growth rate.`
        },
        {
          type: "paragraph",
          text: `This "growth rate" is applied using [Euler integration](https://en.wikipedia.org/wiki/Euler_method): 
                 the current state is nudged forward by a small amount each step, rather than being replaced all at once.`
        },
        {
          type: "paragraph",
          text: "Things start to appear much smoother..."
        },
        {
          type: "imageGrid",
          images: [
            {
              src: "assets/projects/alife/rafler.gif",
              alt: "Rafler's SmoothLife parameters with radius 2.",
              caption: `Rafler's SmoothLife parameters, radius 2.`
            },
            {
              src: "assets/projects/alife/rafler-rad-5.gif",
              alt: "Rafler's SmoothLife parameters with radius 5.",
              caption: `Rafler's SmoothLife parameters, radius 5.`
            }
          ]
        }
      ]
    },
    {
      title: "Lenia",
      blocks: [
        {
          type: "paragraph",
          text: `Lenia extends the observation step of SmoothLife, using a more general [kernel](https://en.wikipedia.org/wiki/Kernel_%28image_processing%29)
                 $K$, which can describe arbitrary weighted neighbourhoods.`
        },
        {
          type: "paragraph",
          text: `The observation operator $\\mathcal{O}$ becomes a [convolution](https://en.wikipedia.org/wiki/Convolution): $U = K * A$. 
                 This produces a neighbourhood field $U$, where each value represents what each cell "sees" around it.`
        },
        {
          type: "paragraph",
          text: `Lenia then applies a growth function, typically a smooth [bell-shaped curve](https://en.wikipedia.org/wiki/Bell-shaped_function) centred around a preferred neighbourhood density $\\mu$.
                 Values close to $\\mu$ produce positive growth, while values that are too low or too high produce decay.`
        },
        {
          type: "imageGrid",
          images: [
            {
              src: "assets/projects/alife/hydrogeminium.gif",
              alt: "Hydrogeminium.",
              caption: `Hydrogeminium.`
            },
            {
              src: "assets/projects/alife/orbium.gif",
              alt: "Orbium.",
              caption: `Orbium.`
            }
          ]
        }
      ]
    },
    {
      title: "Extended Lenia",
      blocks: [
        {
          type: "paragraph",
          text: `An interesting extension of Lenia is the introduction of multiple interacting channels.
                 Each channel stores its own state and can represent a component within the system. Channels can therefore interact with each other.`
        },
        {
          type: "paragraph",
          text: `Each interaction is defined by a source channel, a target channel, a kernel, and a growth function. For visualisation purposes, we can
                 represent different channels with different colours.`
        },
        {
          type: "imageGrid",
          images: [
            {
              src: "assets/projects/alife/aquarium.gif",
              alt: `Multi-channel "Aquarium" (stable).`,
              caption: `Multi-channel "Aquarium" (stable).`
            },
            {
              src: "assets/projects/alife/aquarium-unstable.gif",
              alt: `Multi-channel "Aquarium" (unstable).`,
              caption: `Multi-channel "Aquarium" (unstable).`
            }
          ]
        },
        {
          type: "paragraph",
          text: `A further extension replaces growth rates with target states. Rather than specifying how strongly a channel should grow or decay,
                 the update rule directly computes the state that a channel should move towards. 
                 The integrator then smoothly transitions from the current state to this target value.`
        },
        {
          type: "paragraph",
          text: `Combining these two extensions results in some insanely cool behaviour.`
        },
        {
          type: "imageGrid",
          images: [
            {
              src: "assets/projects/alife/emitter.gif",
              alt: `Emitter.`,
              caption: `Emitter.`
            },
            {
              src: "assets/projects/alife/feeder.gif",
              alt: "Feeder.",
              caption: `Feeder.`
            }
          ]
        },
      ]
    },
    {
      title: "Resources",
      blocks: [
        {
          type: "paragraph",
          text: "Resources that were essential in completing this project."
        },
        {
          type: "list",
          items: [
            `[Rafler, S. (2011). Generalization of Conway's "Game of Life" to a Continuous Domain — SmoothLife](https://arxiv.org/abs/1111.1567)`,
            "[Chan, B. (2019). Lenia - Biology of Artificial Life](https://arxiv.org/abs/1812.05433)",
            "[Chan, B. (2020). Lenia and Expanded Universe](https://arxiv.org/abs/2005.03742)",
            "[OpenLenia Tutorial](https://github.com/OpenLenia/Lenia-Tutorial)",
            "[Lenia Project Website](https://chakazul.github.io/lenia.html)"
          ]
        }
      ]
    }
  ]
};
