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
    <section className="bg-[#f5f5f1] py-8 sm:py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative mx-auto max-w-[960px] overflow-hidden rounded-[1.5rem] border border-[#d4e7ea] bg-[#0f172a] shadow-[0_20px_45px_rgba(15,23,42,0.16)]">
          <div className="relative aspect-video w-full overflow-hidden bg-[radial-gradient(circle_at_15%_10%,rgba(255,255,255,0.18),transparent_18%),linear-gradient(120deg,#1f2f3c_0%,#0f172a_48%,#1a2731_100%)]">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05),transparent_40%,rgba(255,255,255,0.04))]" />
            <div className="absolute left-10 top-10 h-16 w-16 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-10 right-10 h-24 w-24 rounded-full bg-[#1a9090]/20 blur-3xl" />

            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full cursor-pointer object-cover"
              src="/images/IEEE_Day.mp4"
              poster="/images/IEEE.webp"
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

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-slate-900/10" />

            <button
              type="button"
              onClick={togglePlayback}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className="pointer-events-auto absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-[0_10px_25px_rgba(0,0,0,0.18)] backdrop-blur-md transition hover:scale-105 hover:bg-white/15 sm:h-20 sm:w-20"
            >
              {isPlaying ? <Pause className="h-7 w-7 sm:h-8 sm:w-8" /> : <Play className="ml-1 h-7 w-7 fill-current sm:h-8 sm:w-8" />}
            </button>

            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 sm:p-6">
              <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.28em] text-white/80 backdrop-blur-sm sm:text-[11px]">
                IEEE Day
              </div>

              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
                className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/20 text-white/90 backdrop-blur-sm transition hover:bg-black/30"
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
