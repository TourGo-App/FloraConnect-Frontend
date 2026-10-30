export const flowers = [
  {
    name: "Water Lily",
    scientific: "Nymphaea spp.",
    image: "water-lily",
    category: "Aquatic",
    detail:
      "A beautiful aquatic bloom for sunny ponds and water gardens. Discover local growers and learn about the varieties they cultivate.",
  },
  {
    name: "Anthurium",
    scientific: "Anthurium andraeanum",
    image: "anthurium",
    category: "Tropical",
    detail:
      "Loved for its glossy, heart-shaped spathes, anthurium brings a distinctly tropical character to gardens and floral arrangements.",
  },
  {
    name: "Orchid",
    scientific: "Dendrobium spp.",
    image: "orchid",
    category: "Orchids",
    detail:
      "Delicate blooms with remarkable character. Explore the diversity of orchids cultivated by passionate Sri Lankan growers.",
  },
  {
    name: "Chrysanthemum",
    scientific: "Chrysanthemum spp.",
    image: "chrysanthemum",
    category: "Cut flowers",
    detail:
      "Full, colorful blooms that bring texture to bouquets and gardens. Connect with growers to discover seasonal varieties.",
  },
  {
    name: "Rose",
    scientific: "Rosa spp.",
    image: "rose",
    category: "Cut flowers",
    detail:
      "A timeless garden favorite, celebrated for its varied forms, colors and fragrance. Find inspiration for your next growing project.",
  },
  {
    name: "Gerbera",
    scientific: "Gerbera jamesonii",
    image: "gerbera",
    category: "Cut flowers",
    detail:
      "Bright, cheerful daisy-like flowers that bring color to everyday spaces, from home gardens to freshly cut arrangements.",
  },
];
export type Flower = (typeof flowers)[number];
