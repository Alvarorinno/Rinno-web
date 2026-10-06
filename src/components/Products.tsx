"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { products } from "@/lib/products";

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const count = products.length;

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = sectionRef.current;
      if (!el) return;
      const range = el.offsetHeight - window.innerHeight;
      const progress = Math.min(
        1,
        Math.max(0, -el.getBoundingClientRect().top / range),
      );
      setActive(Math.min(count - 1, Math.floor(progress * count)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [count]);

  const goTo = (index: number) => {
    const el = sectionRef.current;
    if (!el) return;
    const range = el.offsetHeight - window.innerHeight;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: top + ((index + 0.5) / count) * range,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="productos"
      ref={sectionRef}
      className="relative"
      style={{ height: `${count * 100}svh` }}
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-rinno-dark">
        {products.map((product, i) => {
          const isActive = i === active;
          return (
            <div
              key={product.slug}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition duration-700 ease-out motion-reduce:transition-none ${
                isActive
                  ? "translate-y-0 opacity-100"
                  : i < active
                    ? "-translate-y-10 opacity-0 pointer-events-none"
                    : "translate-y-10 opacity-0 pointer-events-none"
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(/images/products/${product.slug}.jpg), url(/images/brand-texture.jpg)`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-rinno-dark/90 via-rinno-dark/60 to-rinno-dark/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-rinno-dark/80 via-transparent to-rinno-dark/40" />

              <div className="relative flex h-full flex-col justify-center px-6 pb-16 pt-28 sm:px-10 lg:px-16">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rinno-pink">
                  Nuestros productos
                </p>
                {product.logo ? (
                  <h2 className="mt-6 max-w-4xl font-heading font-bold leading-[1.05] text-rinno-cloud">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.logo}
                      alt={product.title}
                      className="h-24 w-auto sm:h-32 lg:h-40"
                    />
                  </h2>
                ) : (
                  <h2 className="mt-6 max-w-4xl font-heading text-5xl font-bold leading-[1.05] text-rinno-cloud sm:text-7xl lg:text-8xl">
                    {product.title}
                  </h2>
                )}
                <p className="mt-8 max-w-2xl text-xl leading-relaxed text-rinno-fog sm:text-2xl lg:text-3xl">
                  {product.description}
                </p>
                <div className="mt-10">
                  <Link
                    href={product.href ?? `/productos/${product.slug}`}
                    tabIndex={isActive ? 0 : -1}
                    className="inline-flex items-center gap-3 rounded-full bg-rinno-blue px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-rinno-midnight"
                  >
                    Conoce más
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}

        <div className="absolute bottom-8 left-6 z-10 font-heading text-sm tracking-widest text-rinno-cloud/80 sm:left-10 lg:left-16">
          {String(active + 1).padStart(2, "0")} /{" "}
          {String(count).padStart(2, "0")}
        </div>
        <div className="absolute right-5 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-3 sm:right-8">
          {products.map((product, i) => (
            <button
              key={product.slug}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ir a ${product.title}`}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === active
                  ? "scale-125 bg-rinno-coral"
                  : "bg-rinno-cloud/40 hover:bg-rinno-cloud/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
