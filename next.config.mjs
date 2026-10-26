/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Old event URLs (footer links, shared posts) keep working.
  async redirects() {
    return [
      { source: "/events/ieee-day", destination: "/events/ieee-day-2026", permanent: true },
      { source: "/events/ieeextreme", destination: "/events/ieeextreme-20", permanent: true },
      { source: "/ieee-day", destination: "/events/ieee-day-2026", permanent: true },
      { source: "/ieeextreme", destination: "/events/ieeextreme-20", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            // Allow Google Maps iframe to be embedded
            key: "Content-Security-Policy",
            value: "frame-src 'self' https://www.google.com https://maps.google.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
