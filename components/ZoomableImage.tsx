"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FiZoomIn, FiX } from "react-icons/fi";

type Rect = { top: number; left: number; width: number; height: number };

const ease = [0.32, 0.72, 0, 1] as const;

export default function ZoomableImage({
  src,
  thumbSrc,
  alt,
  width,
  height,
  className,
}: {
  src: string;
  thumbSrc?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  const thumbRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [from, setFrom] = useState<Rect | null>(null);
  const [to, setTo] = useState<Rect | null>(null);
  // Hide the thumbnail while the enlarged copy is flying in/out so there's no duplicate
  const [hidden, setHidden] = useState(false);

  const measure = () => {
    const r = thumbRef.current!.getBoundingClientRect();
    return { top: r.top, left: r.left, width: r.width, height: r.height };
  };

  const target = useCallback((): Rect => {
    const scale = Math.min((window.innerWidth * 0.9) / width, (window.innerHeight * 0.85) / height, 1.5);
    const w = width * scale;
    const h = height * scale;
    return { top: (window.innerHeight - h) / 2, left: (window.innerWidth - w) / 2, width: w, height: h };
  }, [width, height]);

  const openLightbox = () => {
    setFrom(measure());
    setTo(target());
    setHidden(true);
    setOpen(true);
  };

  const close = useCallback(() => {
    // Re-measure so the image returns to the thumbnail even if the page scrolled/resized
    if (thumbRef.current) setFrom(measure());
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    const onResize = () => setTo(target());
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open, close, target]);

  return (
    <>
      <button
        ref={thumbRef}
        type="button"
        onClick={openLightbox}
        aria-label={`Enlarge ${alt}`}
        className={`group relative block w-full h-full overflow-hidden cursor-zoom-in ${className ?? ""}`}
        style={{ opacity: hidden ? 0 : 1 }}
      >
        <Image
          src={thumbSrc ?? src}
          alt={alt}
          fill
          sizes="(min-width: 640px) 480px, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-[#2b2b40]/0 transition-colors duration-300 group-hover:bg-[#2b2b40]/25">
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white/85 text-[#6c5ce7] shadow-lg opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
            <FiZoomIn size={22} />
          </span>
        </span>
      </button>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence onExitComplete={() => setHidden(false)}>
            {open && from && to && (
              <motion.div
                key="lightbox"
                className="fixed inset-0 z-[100] cursor-zoom-out"
                onClick={close}
                role="dialog"
                aria-modal="true"
                aria-label={alt}
              >
                <motion.div
                  className="absolute inset-0 bg-[#1c1c2e]/70 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                />
                <motion.div
                  className="absolute overflow-hidden shadow-2xl"
                  initial={{ ...from, borderRadius: 14 }}
                  animate={{ ...to, borderRadius: 18 }}
                  exit={{ ...from, borderRadius: 14 }}
                  transition={{ duration: 0.45, ease }}
                >
                  <Image src={src} alt={alt} fill sizes="90vw" className="object-cover" priority />
                </motion.div>
                <motion.button
                  type="button"
                  onClick={close}
                  aria-label="Close"
                  className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/90 text-[#2b2b40] flex items-center justify-center shadow-lg cursor-pointer hover:bg-white"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.25, delay: 0.15 }}
                >
                  <FiX size={20} />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
