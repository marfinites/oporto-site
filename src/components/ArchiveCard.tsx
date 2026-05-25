"use client";

import Image from "next/image";
import { useRef } from "react";
import type { ArchiveItem } from "@/lib/archive";

export function ArchiveCard({ item }: { item: ArchiveItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      id={item.id}
      className="group relative aspect-square overflow-hidden rounded-lg bg-[var(--bg-elevated)] scroll-mt-24"
      onMouseEnter={() => videoRef.current?.play().catch(() => {})}
      onMouseLeave={() => videoRef.current?.pause()}
    >
      {item.type === "video" ? (
        <>
          <Image
            src={item.thumb || item.src}
            alt={item.alt}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
            unoptimized
          />
          <video
            ref={videoRef}
            src={item.src}
            className="absolute inset-0 size-full object-cover opacity-0 group-hover:opacity-100 transition-opacity"
            muted
            loop
            playsInline
            preload="none"
          />
          <div className="absolute top-3 left-3 size-8 rounded-full bg-[var(--accent)]/90 backdrop-blur-sm flex items-center justify-center text-black text-sm">
            ▶
          </div>
        </>
      ) : (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
          unoptimized
        />
      )}
      {(item.caption || item.likes) && (
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 via-black/60 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform">
          {item.caption && (
            <div className="text-xs font-medium text-white line-clamp-2">
              {item.caption}
            </div>
          )}
          {item.likes && (
            <div className="text-xs text-[var(--accent)] mt-1">
              ♥ {item.likes}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
