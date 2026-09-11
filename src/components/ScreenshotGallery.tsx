"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function ScreenshotGallery({
  screenshots,
  altPrefix,
}: {
  screenshots: string[];
  altPrefix: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      } else if (event.key === "ArrowRight") {
        setActiveIndex((i) => (i === null ? i : (i + 1) % screenshots.length));
      } else if (event.key === "ArrowLeft") {
        setActiveIndex((i) =>
          i === null ? i : (i - 1 + screenshots.length) % screenshots.length
        );
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, screenshots.length]);

  const showPrev = () =>
    setActiveIndex((i) =>
      i === null ? i : (i - 1 + screenshots.length) % screenshots.length
    );
  const showNext = () =>
    setActiveIndex((i) => (i === null ? i : (i + 1) % screenshots.length));

  return (
    <>
      <div className="mt-5 flex gap-3 overflow-x-auto pb-1">
        {screenshots.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActiveIndex(i)}
            aria-label={`Enlarge ${altPrefix} screenshot ${i + 1}`}
            className="relative aspect-[9/16] w-40 shrink-0 cursor-zoom-in overflow-hidden rounded-xl border border-line bg-panel2 transition-colors hover:border-accent/50"
          >
            <Image
              src={src}
              alt={`${altPrefix} app screenshot ${i + 1}`}
              fill
              sizes="160px"
              quality={90}
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${altPrefix} screenshots`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            autoFocus
            onClick={() => setActiveIndex(null)}
            aria-label="Close"
            className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-panel text-slate-300 transition-colors hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>

          {screenshots.length > 1 ? (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrev();
              }}
              aria-label="Previous screenshot"
              className="absolute left-4 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-panel text-slate-300 transition-colors hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          ) : null}

          <div
            className="relative h-[85vh] w-[90vw] max-w-md"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={screenshots[activeIndex]}
              alt={`${altPrefix} app screenshot ${activeIndex + 1}`}
              fill
              sizes="(min-width: 768px) 28rem, 90vw"
              quality={95}
              className="object-contain"
            />
          </div>

          {screenshots.length > 1 ? (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next screenshot"
              className="absolute right-4 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-panel text-slate-300 transition-colors hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
