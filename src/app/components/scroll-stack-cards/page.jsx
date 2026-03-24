"use client";
import Image from "next/image";

export default function page() {
  const stackImages = [
    "/imgs/moto.jpg",
    "/imgs/moto.jpg",
    "/imgs/moto.jpg",
    "/imgs/moto.jpg",
    "/imgs/moto.jpg",
    "/imgs/moto.jpg",
    "/imgs/moto.jpg",
  ];

  return (
    <section className="w-full px-0 flex flex-col items-center">
      {/* Top Banner */}
      <div className="relative w-full flex justify-center bg-primary py-16 sm:py-24 px-6 sm:px-12 mb-12">
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-color-dodge pointer-events-none">
          <Image
            src="/imgs/home/fifth-section-img-life-cool.png"
            alt="Decorative pattern"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 w-full max-w-4xl px-4 text-center">
          <h2 className="text-2xl md:text-5xl lg:text-[56px] text-white tracking-wide leading-tight font-semibold md:font-normal">
            Reuseable Components <br /> For Luxury{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F6C324] bg-clip-text text-transparent font-semibold">
              Style
            </span>
          </h2>
        </div>
      </div>

      {/* Stacked Images Container */}
      <div className="relative w-full max-w-2xl px-6 flex flex-col items-center pb-18">
        {stackImages.map((img, index) => (
          <div
            key={index}
            // Removed 'top-24' from here, keeping just 'sticky'
            className="sticky w-full flex justify-center"
            style={{
              zIndex: index + 1,
              // Dynamically calculate the top position:
              // Base top offset (6rem) + (index * 40px gap)
              // first it was 15vh then i did 6vh
              top: `calc(6rem + ${index * 40}px)`,
              marginTop: index === 0 ? "0" : "6vh",
            }}
          >
            <div className="relative h-50 md:h-80 w-full max-w-md overflow-hidden rounded-2xl shadow-xl border-2 border-white bg-white">
              <Image
                src={img}
                alt={`Stacked image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="relative w-full flex justify-center bg-primary py-16 sm:py-24 px-6 sm:px-12 mb-12">
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-color-dodge pointer-events-none">
          <Image
            src="/imgs/home/fifth-section-img-life-cool.png"
            alt="Decorative pattern"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 w-full max-w-4xl px-4 text-center">
          <h2 className="text-2xl md:text-5xl lg:text-[56px] text-white tracking-wide leading-tight font-semibold md:font-normal">
            Reuseable Components <br /> For Luxury{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F6C324] bg-clip-text text-transparent font-semibold">
              Style
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}
