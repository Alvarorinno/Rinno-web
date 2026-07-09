import Image from "next/image";

export default function About() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-6 py-24 sm:grid-cols-2 sm:items-center">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        <Image
          src="/images/city-speed.png"
          alt="Rinno en expansión por Latinoamérica"
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h2 className="font-heading text-3xl font-bold sm:text-4xl">
          Nuestra historia
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-rinno-fog/90">
          Nacimos en Chile el 2005, nos expandimos a Perú el 2018 y a fines
          del 2021 dimos un gran salto para llegar a México.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-rinno-fog/90">
          Aprendemos, crecemos y desarrollamos un trabajo en equipo con
          espíritu colaborativo.
        </p>
      </div>
    </section>
  );
}
