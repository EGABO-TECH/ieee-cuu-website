"use client";

import { useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";

export function VideoSpotlight() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const syncVideoState = () => {
    const video = videoRef.current;
    if (!video) return;

    setIsPlaying(!video.paused);
    setIsMuted(video.muted);
  };

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (video.paused) {
        await video.play();
      } else {
        video.pause();
      }
    } catch (error) {
      console.error("Unable to play IEEE Day video:", error);
    }

    syncVideoState();
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleMouseEnter = async () => {
    const video = videoRef.current;
    if (!video || !video.paused) return;

    try {
      await video.play();
    } catch (error) {
      console.error("Unable to autoplay IEEE Day video on hover:", error);
    }
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (!video || video.paused) return;

    video.pause();
  };

  return (
    <section aria-labelledby="video-title" className="bg-[#002855] py-20 text-white sm:py-28 [&_:focus-visible]:outline-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="mb-10 grid gap-4 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#CADCEA]">
              <span aria-hidden="true" className="h-0.5 w-8 bg-[#FFC72C]" />
              IEEE Day 2026
            </p>
            <h2 id="video-title" className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Branches from across Uganda, one celebration
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-white/70 lg:col-span-5">
            Highlights from the American Center, Kabalagala, where Cavendish University Uganda received its certificate of approval.
          </p>
        </div>
        <div className="relative overflow-hidden border border-white/15 bg-black">
          <div className="relative aspect-video w-full overflow-hidden">
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full cursor-pointer object-cover"
              src="/IEEE_Day.mp4#t=0.5"
              muted
              playsInline
              preload="metadata"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={togglePlayback}
              onPlay={syncVideoState}
              onPause={syncVideoState}
              onLoadedMetadata={() => setIsMuted(videoRef.current?.muted ?? true)}
              aria-label="IEEE Day highlight video"
            >
              Your browser does not support the video tag.
            </video>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#002855]/50 via-transparent to-transparent" />

            <button
              type="button"
              onClick={togglePlayback}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className="pointer-events-auto absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#FFC72C] text-[#002855] transition hover:scale-105 hover:bg-white sm:h-20 sm:w-20"
            >
              {isPlaying ? <Pause aria-hidden="true" className="h-7 w-7 sm:h-8 sm:w-8" /> : <Play aria-hidden="true" className="ml-1 h-7 w-7 fill-current sm:h-8 sm:w-8" />}
            </button>

            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 sm:p-6">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/80">Kampala · 6 Oct 2026</span>

              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
                className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/20 text-white/90 backdrop-blur-sm transition hover:bg-black/30"
              >
                {isMuted ? <VolumeX aria-hidden="true" className="h-4 w-4" /> : <Volume2 aria-hidden="true" className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
