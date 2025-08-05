"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export const useFadeInOnScroll = (selector: string = ".fade-in", options = {}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const elements = gsap.utils.toArray(selector);

    elements.forEach((el) => {
      const element = el as HTMLElement;
      gsap.fromTo(
        element,
        { opacity: 0, y: 40 },
        {
          scrollTrigger: {
            trigger: element,
            start: "top 95%",
            toggleActions: "play none none reverse",
            ...options,
          },
          opacity: 1,
          y: 0,
          duration: .5,
          ease: "power2.out",
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [selector, options]);
};
