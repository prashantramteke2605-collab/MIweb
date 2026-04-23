import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let mouseX = 0,
      mouseY = 0;
    let ringX = 0,
      ringY = 0;
    let raf;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    const onOver = (e) => {
      const t = e.target;
      if (t.closest("a, button, .cursor-hover, input, textarea, [data-cursor='hover']")) {
        dotRef.current?.classList.add("mn-cursor--hover");
        ringRef.current?.classList.add("mn-cursor-ring--hover");
      }
    };
    const onOut = (e) => {
      const t = e.target;
      if (t.closest("a, button, .cursor-hover, input, textarea, [data-cursor='hover']")) {
        dotRef.current?.classList.remove("mn-cursor--hover");
        ringRef.current?.classList.remove("mn-cursor-ring--hover");
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="mn-cursor" data-testid="custom-cursor-dot" />
      <div ref={ringRef} className="mn-cursor-ring" data-testid="custom-cursor-ring" />
    </>
  );
}
