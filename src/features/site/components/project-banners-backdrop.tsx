import Image from "next/image";

const banners = [
  {
    src: "/projects/banners/tradepro-banner.png",
    alt: "TradePro project banner",
    label: "TradePro",
  },
  {
    src: "/projects/banners/jarvis-banner.png",
    alt: "Jarvis project banner",
    label: "Jarvis",
  },
  {
    src: "/projects/banners/wheelsafar-banner.png",
    alt: "WheelSafar project banner",
    label: "WheelSafar",
  },
  {
    src: "/projects/banners/airtouch-banner.png",
    alt: "AirTouch project banner",
    label: "AirTouch",
  },
];

export function ProjectBannersBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 hidden overflow-hidden xl:block"
      aria-hidden="true"
    >
      <div className="absolute inset-x-0 top-24 h-[44rem] opacity-50 blur-[0.5px]">
        <div className="grid h-full gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {banners.map((banner, index) => (
            <div
              key={banner.label}
              className={`relative overflow-hidden rounded-[2rem] border border-white/8 bg-black/35 shadow-2xl shadow-black/25 ring-1 ring-white/5 ${
                index % 2 === 0 ? "translate-y-6" : "-translate-y-4"
              } ${index === 1 ? "rotate-[-1.5deg]" : index === 2 ? "rotate-[1.5deg]" : "rotate-0"}`}
            >
              <Image
                src={banner.src}
                alt={banner.alt}
                fill
                className="object-cover"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%),linear-gradient(to_bottom,rgba(5,5,5,0.05),rgba(5,5,5,0.6))]" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />
    </div>
  );
}
