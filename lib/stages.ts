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

// Media: free-license stock footage and stills (Pexels license, no attribution
// required). Swap with real Gnuts footage as it is shot.
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
    media: "https://videos.pexels.com/video-files/31534240/13440768_1080_1920_30fps.mp4",
    poster: "https://images.pexels.com/videos/31534240/agriculture-field-fall-farm-farming-31534240.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
    media: "https://videos.pexels.com/video-files/8844919/8844919-uhd_2732_1440_24fps.mp4",
    poster: "https://images.pexels.com/photos/9799045/pexels-photo-9799045.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
    media: "https://videos.pexels.com/video-files/6268981/6268981-hd_1080_2048_25fps.mp4",
    poster: "https://images.pexels.com/videos/6268981/pexels-photo-6268981.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
    media: "https://videos.pexels.com/video-files/3967260/3967260-uhd_2732_1440_24fps.mp4",
    poster: "https://images.pexels.com/videos/3967260/pexels-photo-3967260.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
    media: "https://videos.pexels.com/video-files/36066747/15295455_1080_1920_24fps.mp4",
    poster: "https://images.pexels.com/videos/36066747/marikina-metro-manila-palengke-36066747.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
    media: "https://videos.pexels.com/video-files/4121558/4121558-uhd_2560_1440_25fps.mp4",
    poster: "https://images.pexels.com/videos/4121558/consumer-couple-food-store-healthy-eating-4121558.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
    media: "https://videos.pexels.com/video-files/4855685/4855685-hd_1920_1080_30fps.mp4",
    poster: "https://images.pexels.com/videos/4855685/pexels-photo-4855685.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
    media: "https://videos.pexels.com/video-files/39916195/17020375_1080_1920_50fps.mp4",
    poster: "https://images.pexels.com/videos/39916195/pexels-photo-39916195.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];
