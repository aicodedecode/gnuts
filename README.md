# Gnuts, farm-to-jar immersive site

One-page, scroll-driven site for Gnuts, a groundnut and peanut butter producer in Meerut, Uttar Pradesh. Built for B2B buyers: distributors, retailers, export importers. Eight full-screen stages, farm to packaged jar, ending on a quote request form.

Stack: Next.js 15, React Three Fiber, GSAP ScrollTrigger, Lenis. TypeScript.

## Media manifest

Drop real footage in `public/media/` before launch. Nothing is illustrated.

| File | Content |
|---|---|
| `01-sourcing.mp4` | farms around Meerut, standing crop, farmer with pods |
| `02-harvest.mp4` | pods lifted, field drying, moisture meter close-up (the trust shot) |
| `03-shelling.mp4` | shellers splitting pods, kernels on the grader |
| `04-roasting.mp4` | drum roaster running, skins blowing off |
| `05-grinding.mp4` | paste flowing from the mill, creamy and crunchy shots |
| `06-packing.mp4` | jar filling, sealing, labelling, boxing |
| `07-dispatch.mp4` | pallets loaded, truck leaving |
| `08-finish.mp4` | jar on a table, slow orbit |
| `0X-*-poster.jpg` | first frame of each clip |
| `gnuts-jar.glb` | the product jar as a GLB, under 5 MB |

One warm natural grade across everything. Clips 6 to 12 seconds, 1080p, H.264, under 3 MB each.

## Mechanics

- `lib/stages.ts` holds all eight stages: copy, background colour, video path. Edit copy and colours there.
- `components/StageVideo.tsx` lazy-loads each clip near the viewport and scrubs `currentTime` from scroll position, so clips play forward and backward under the thumb. No autoplay, no sound.
- `components/ShellMoment.tsx` is the memorable moment: a pinned 3D peanut shell that splits open at the shelling stage, kernels inside. Scroll drives the split.
- `components/JarScene.tsx` renders a placeholder jar from primitives. Swap in the real asset: drop `gnuts-jar.glb` (compressed, `gltf-transform optimize --compress draco`) into `public/media`, replace the meshes with drei's `useGLTF("media/gnuts-jar.glb")` in a `<Suspense>`.
- `components/QuoteForm.tsx` is the quote form; it opens a pre-filled email to sales@gnuts.in. Swap in a real mailbox or CRM integration before launch if you want submissions captured server-side.
- Background colour shifts per stage. Type: Anton for stage names, Inter for body.

## Performance and accessibility

- Clips load only when needed and never autoplay; usable on mid-range phones.
- `prefers-reduced-motion`: Lenis, scrubbing and reveals switch off; poster frames and static copy show.
- Real HTML text under every video, noscript summary included, so the page reads with JavaScript off.
- Canvas scenes cap DPR at 1.6 and mount only on the two stages that need them.

## Run

```bash
npm install
npm run dev
```

## Before launch

- Confirm region, variety and every `[bracketed]` number in `lib/stages.ts`
- Replace all eight clips and posters
- Add the jar GLB or keep the placeholder jar
- Point the quote form at a real mailbox or CRM
- Add FSSAI licence number, APEDA registration if held, and company details to the finish stage
