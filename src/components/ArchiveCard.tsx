"use client";

import Image from "next/image";
import { useRef } from "react";
import type { ArchiveItem } from "@/lib/archive";

export function ArchiveCard({ item }: { item: ArchiveItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      id={item.id}
      className="group relative photo-card aspect-square scroll-mt-24"
      onMouseEnter={() => videoRef.current?.play().catch(() => {})}
      onMouseLeave={() => videoRef.current?.pause()}
    >
      {item.type === "video" ? (
        <>
          <Image
            src={item.thumb || item.src}
            alt={item.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 25vw"
            unoptimized
          />
          <video
            ref={videoRef}
            src={item.src}
            className="absolute inset-0 size-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            muted
            loop
            playsInline
            preload="none"
          />
          <div className="absolute top-3 left-3 size-9 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center text-black text-xs">
            ▶
          </div>
        </>
      ) : (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
          unoptimized
        />
      )}

      {/* Era stamp top-right */}
      <div className="absolute top-3 right-3">
        <span className="mono px-2 py-1 bg-white/90 text-black backdrop-blur-sm">
          {item.era}
        </span>
      </div>

      {/* Caption overlay bottom */}
      {(item.caption || item.likes) && (
        <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          {item.caption && (
            <div className="text-sm font-medium line-clamp-2 mb-1">{item.caption}</div>
          )}
          {item.likes && (
            <div className="mono opacity-80">♥ {item.likes}</div>
          )}
        </div>
      )}
    </div>
  );
}
