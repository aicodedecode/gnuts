"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = { src: string; poster: string; sectionId: string };

export default function StageVideo({ src, poster, sectionId }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let loaded = false;
    const load = () => {
      if (loaded) return;
      loaded = true;
      video.src = src;
      video.load();
    };
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) { load(); io.disconnect(); }
      },
      { rootMargin: "60% 0px" }
    );
    io.observe(video);

    const st = ScrollTrigger.create({
      trigger: `#${sectionId}`,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        if (video.readyState >= 1 && video.duration > 0) {
          video.currentTime = self.progress * (video.duration - 0.01);
        }
      },
    });

    return () => {
      io.disconnect();
      st.kill();
    };
  }, [src, poster, sectionId]);

  return (
    <video ref={videoRef} className="stage-video" muted playsInline preload="none" poster={poster} />
  );
}
