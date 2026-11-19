export type Stage = {
  id: string;
  num: string;
  name: string;
  lines: string[];
  color: string;
  ink: string;
  media: string;
  poster: string;
};

export const STAGES: Stage[] = [
  {
    id: "sourcing",
    num: "01",
    name: "Sourcing",
    lines: [
      "We buy groundnuts straight from farms around Meerut, Uttar Pradesh.",
      "Variety: [confirm region and variety]. Season: [month range]. Farm gate price set per lot: [Rs/kg].",
    ],
    color: "#3a4d2e",
    ink: "#f2f2f5",
    media: "media/01-sourcing.mp4",
    poster: "media/01-sourcing-poster.jpg",
  },
  {
    id: "harvest",
    num: "02",
    name: "Harvest and drying",
    lines: [
      "Pods are lifted, dried in the field and moisture-checked before they enter the plant.",
      "Target moisture at intake: [8]%. Batches rejected at the gate: [count].",
    ],
    color: "#7a6432",
    ink: "#f6f2e9",
    media: "media/02-harvest.mp4",
    poster: "media/02-harvest-poster.jpg",
  },
  {
    id: "shelling",
    num: "03",
    name: "Shelling and sorting",
    lines: [
      "Shells split, kernels graded by size and quality.",
      "Grades packed: [bold, medium, counts]. Aflatoxin check per lot: [lab or test method].",
    ],
    color: "#5d4230",
    ink: "#f4efe7",
    media: "media/03-shelling.mp4",
    poster: "media/03-shelling-poster.jpg",
  },
  {
    id: "roasting",
    num: "04",
    name: "Roasting and blanching",
    lines: [
      "Drum roasted, skins removed.",
      "Roast profile: [temperature and minutes]. Skin removal rate: [percent].",
    ],
    color: "#3d2317",
    ink: "#f2ebe4",
    media: "media/04-roasting.mp4",
    poster: "media/04-roasting-poster.jpg",
  },
  {
    id: "grinding",
    num: "05",
    name: "Grinding",
    lines: [
      "Paste flows from the mill. Creamy and crunchy, nothing else added.",
      "Grind fineness: [microns]. Ingredients list length: [one line].",
    ],
    color: "#54402e",
    ink: "#f4efe7",
    media: "media/05-grinding.mp4",
    poster: "media/05-grinding-poster.jpg",
  },
  {
    id: "packing",
    num: "06",
    name: "Filling and packing",
    lines: [
      "Jars filled, sealed, labelled and boxed at the Meerut plant.",
      "Jar sizes: [250g, 500g, 1kg]. Daily capacity: [units]. FSSAI licence no: [number].",
    ],
    color: "#6e4512",
    ink: "#f7f1e6",
    media: "media/06-packing.mp4",
    poster: "media/06-packing-poster.jpg",
  },
  {
    id: "dispatch",
    num: "07",
    name: "Dispatch",
    lines: [
      "Pallets leave the factory.",
      "Lead time: [days]. Export documentation handled in-house: [APEDA registration if held].",
    ],
    color: "#2e3440",
    ink: "#eef0f4",
    media: "media/07-dispatch.mp4",
    poster: "media/07-dispatch-poster.jpg",
  },
  {
    id: "finish",
    num: "08",
    name: "The jar",
    lines: [
      "One jar. Groundnuts, [salt] and time.",
      "Tell us what you need and we quote within [48] hours.",
    ],
    color: "#402a1d",
    ink: "#f4efe7",
    media: "media/08-finish.mp4",
    poster: "media/08-finish-poster.jpg",
  },
];
