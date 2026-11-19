"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmoothScroll, { prefersReducedMotion } from "./SmoothScroll";
import StageVideo from "./StageVideo";
import QuoteForm from "./QuoteForm";
import { STAGES } from "@/lib/stages";

gsap.registerPlugin(ScrollTrigger);

const ShellMoment = dynamic(() => import("./ShellMoment"), { ssr: false });
const JarScene = dynamic(() => import("./JarScene"), { ssr: false });

export default function Experience() {
  const [active, setActive] = useState(0);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = prefersReducedMotion();
    const ctx = gsap.context(() => {
      // background shifts to each stage colour
      STAGES.forEach((s, i) => {
        ScrollTrigger.create({
          trigger: `#stage-${s.id}`,
          start: "top 55%",
          end: "bottom 55%",
          onToggle: (self) => {
            if (self.isActive) {
              setActive(i);
              document.documentElement.style.setProperty("--stage-bg", s.color);
              document.documentElement.style.setProperty("--stage-ink", s.ink);
              document.body.style.background = reduced ? s.color : "var(--stage-bg)";
            }
          },
        });
      });

      if (reduced) return; // keep everything visible and still

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 48,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const stage = STAGES[active];

  return (
    <SmoothScroll>
      <div ref={root}>
        <div className="stage-index" aria-live="polite">
          {stage.num} / {stage.name}
        </div>
        <div className="brand">GNUTS</div>

        {STAGES.map((s, i) => {
          if (s.id === "shelling") {
            return (
              <div key={s.id}>
                <section className="stage" id={`stage-${s.id}`}>
                  <StageVideo src={s.media} poster={s.poster} sectionId={`stage-${s.id}`} />
                  <div className="stage-copy">
                    <h2 className="stage-name reveal">{s.name}</h2>
                    {s.lines.map((l, k) => (
                      <p key={k} className="reveal">{l}</p>
                    ))}
                  </div>
                </section>
                {/* the memorable moment: the shell splits as you scroll */}
                <ShellMoment />
              </div>
            );
          }
          if (s.id === "finish") {
            return (
              <section className="finish-stage" id={`stage-${s.id}`} key={s.id}>
                <StageVideo src={s.media} poster={s.poster} sectionId={`stage-${s.id}`} />
                <JarScene />
                <div className="finish-inner">
                  <div className="stage-copy">
                    <h2 className="stage-name reveal">{s.name}</h2>
                    {s.lines.map((l, k) => (
                      <p key={k} className="reveal">{l}</p>
                    ))}
                  </div>
                  <QuoteForm />
                </div>
              </section>
            );
          }
          return (
            <section className="stage" id={`stage-${s.id}`} key={s.id}>
              <StageVideo src={s.media} poster={s.poster} sectionId={`stage-${s.id}`} />
              <div className="stage-copy">
                <h2 className="stage-name reveal">{s.name}</h2>
                {s.lines.map((l, k) => (
                  <p key={k} className="reveal">{l}</p>
                ))}
              </div>
            </section>
          );
        })}

        <noscript>
          <div style={{ padding: "24px 6vw" }}>
            <h2>Gnuts, Meerut, Uttar Pradesh</h2>
            <p>
              Groundnut and peanut butter producer. Farm sourcing around Meerut, in-house shelling,
              roasting, grinding and packing, dispatch to domestic and export buyers. Request a quote:
              [sales@gnuts.in].
            </p>
          </div>
        </noscript>
      </div>
    </SmoothScroll>
  );
}
