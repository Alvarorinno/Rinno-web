import Image from "next/image";

export default function Statement() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 opacity-30">
        <Image
          src="/images/androids-hug.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-rinno-dark via-rinno-dark/80 to-rinno-dark" />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="font-heading text-2xl leading-relaxed sm:text-3xl">
          En el mundo híper conectado de hoy, las marcas que logran
          conexiones emocionales genuinas con su audiencia son las
          ganadoras. En Rinno creamos experiencias publicitarias de impacto,
          que combinan insights humanos profundos con lo último en
          tecnología digital.
        </p>
        <p className="mt-6 font-heading text-xl text-rinno-blue">
          Prepárate para cautivar como nunca antes.
        </p>
      </div>
    </section>
  );
}
